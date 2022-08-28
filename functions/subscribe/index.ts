import { serve } from "https://deno.land/std@0.131.0/http/server.ts";
import { Status } from "https://deno.land/std@0.151.0/http/http_status.ts";



serve(async (req, res) => {
  const { email } = await req.json();

  if (!email || !email.length) {
    return new Response(JSON.stringify({
            error: 'Email is required'
        }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
  }
  const API_KEY = process.env.MAILCHIMP_API_KEY
  const API_SERVER = process.env.MAILCHIMP_API_SERVER
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID

  const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members?skip_merge_validation=true`

  const data = {
    email_address: email,
    status: 'subscribed'
  }


  response  = await fetch(url, {
       method: 'POST',
       body: JSON.stringify(data),
       headers: {
           'Content-Type': 'application/json',
           Authorization: `api_key ${API_KEY}`
       }
    })
    const data = response.get_json().data
    if (data.status >= Status.BadRequest && data.status < Status.InternalServerError) {
  	    return new Response(JSON.stringify({
  		    error: `There was an error subscribing to the newsletter.`,
  		    message: `${data.title}: ${data.detail}`
  	    }), {
            status: data.status,
            headers: { "Content-Type": "application/json" },
    });

    if (data.status >= Status.InternalServerError){
        return new Response(JSON.stringify({
            error: response.get_error()
            }), {
                status: Status.InternalServerError,
                headers: { "Content-Type": "application/json" },
        });
    }


    return new Response(JSON.stringify({
        message: 'success'
        }), {
         status: Status.Created,
         headers: { "Content-Type": "application/json" },
    });
  }
});
