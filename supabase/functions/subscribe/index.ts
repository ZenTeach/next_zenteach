import { serve } from "https://deno.land/std@0.154.0/http/server.ts"
import { Status } from "https://deno.land/std@0.154.0/http/http_status.ts"
import * as Sentry from 'https://esm.sh/@sentry/node?target=deno&deno-std=0.154.0'
// import * as Sentry from 'https://deno.land/x/sentry'

Sentry.init({
  dsn: Deno.env.get('NEXT_PUBLIC_SENTRY_DSN')
})
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
  const API_KEY = Deno.env.get('MAILCHIMP_API_KEY')
  const API_SERVER = Deno.env.get('MAILCHIMP_API_SERVER')
  const AUDIENCE_ID = Deno.env.get('MAILCHIMP_AUDIENCE_ID')

  const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members?skip_merge_validation=true`

  const submit_data = {
    email_address: email,
    status: 'subscribed'
  }

  let response  = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(submit_data),
      headers: {
          'Content-Type': 'application/json',
          Authorization: `api_key ${API_KEY}`
      }
  })
  let data = await response.json()
  data = data.data
  if (response.status >= Status.BadRequest && response.status < Status.InternalServerError) {
    return new Response(JSON.stringify({
      error: `There was an error subscribing to the newsletter.`,
      message: `${data.title}: ${data.detail}`
	  }), {
        status: data.status,
        headers: { "Content-Type": "application/json" },
    });
  }
  else if (response.status >= Status.InternalServerError){
    Sentry.captureException(response.json());
    return new Response(JSON.stringify({
        error: response.json()
      }), {
          status: Status.InternalServerError,
          headers: { "Content-Type": "application/json" },
    });
  }
  else {
    return new Response(JSON.stringify({
      message: 'success'
      }), {
        status: Status.Created,
        headers: { "Content-Type": "application/json" },
    });
  }
});
