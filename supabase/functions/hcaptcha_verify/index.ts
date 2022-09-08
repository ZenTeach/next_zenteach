import { serve } from "https://deno.land/std@0.154.0/http/server.ts"
import { Status } from "https://deno.land/std@0.154.0/http/http_status.ts"
import * as Sentry from 'https://esm.sh/@sentry/node?target=deno&deno-std=0.154.0'
import { verify } from 'https://esm.sh/hcaptcha?target=deno&deno-std=0.154.0'

Sentry.init({
  dsn: Deno.env.get('NEXT_PUBLIC_SENTRY_DSN')
})
serve(async (req, res) => {
	const { token } = req.body
	const hcaptcha_secret = Deno.env.get("HCAPTCHA_SECRET")

	verify(hcaptcha_secret, token)
	  .then(data => {
		  if (data.success !== false) {
			  return new Response(JSON.stringify({
				  error: `There was an error processing your request.`,
			  }), {
				  status: data.error-codes[0],
				  headers: { "Content-Type": "application/json" },
			  });
		  }
		  return new Response(JSON.stringify({
			  message: 'success'
		  }), {
			  status: Status.Created,
			  headers: { "Content-Type": "application/json" },
		  });

	  }).catch(response => {
		  Sentry.captureException(response.json());
		  const error = await response.json()
		  return new Response(JSON.stringify({
			  error: error
		  }), {
			  status: Status.InternalServerError,
			  headers: { "Content-Type": "application/json" },
		  });
	  })
  });
