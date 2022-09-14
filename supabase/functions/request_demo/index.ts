import { serve } from "https://deno.land/std@0.154.0/http/server.ts"

serve(async (req, _res) => {
	const { email } = await req.json();

	if (!email || !email.length) {
		return new Response(JSON.stringify({
			error: 'Email is required'
		}), {
			status: 400,
			headers: { "Content-Type": "application/json" },
		});
	}

	const url = Deno.env.get("AIRTABLE_API_ENDPOINT") as string

	const data = {
	  email: email,
	  date: new Date().toLocaleDateString('en-GB')
	}

    try {
	 const response =  await fetch(url, {
		  method: 'POST',
		  body: JSON.stringify(data),
		  headers: {
			  'Content-Type': 'application/json'
		  }
	  })
	const response_data = await response.json()
	if (response_data.status >= 400) {
		return new Response(JSON.stringify({
			  error: `There was an error processing your request.`,
		}), {
			status: response_data.status,
			headers: { "Content-Type": "application/json" },
		});
	 }
	return new Response(JSON.stringify({
		message: 'success'
      }), {
        status: 201,
        headers: { "Content-Type": "application/json" },
    });
	} catch(error) {
		return new Response(JSON.stringify({
			error: error.message
		}), {
          status: 500,
          headers: { "Content-Type": "application/json" },
		});
	  }
  }
);
