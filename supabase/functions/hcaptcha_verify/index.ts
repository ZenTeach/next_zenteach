import { serve } from "https://deno.land/std@0.154.0/http/server.ts"
import { verify, VerifyResponse } from 'https://esm.sh/hcaptcha?target=deno&deno-std=0.154.0'

serve(async (req, res) => {
	const { token } = await req.json()
	const hcaptcha_secret = Deno.env.get("HCAPTCHA_SECRET") as string

	try {
		const data: VerifyResponse = await verify(hcaptcha_secret, token)

		if (data.success !== false) {
			return new Response(JSON.stringify({
				error: `There was an error processing your request.`,
			}), {
				status: data['error-codes'][0],
				headers: { "Content-Type": "application/json" },
			});
		}
		return new Response(JSON.stringify({
			message: 'success'
		}), {
			status: 201,
			headers: { "Content-Type": "application/json" },
		});
	}
	catch(error){
		return new Response(JSON.stringify({
			  error: error
		}), {
		  status: 500,
		  headers: { "Content-Type": "application/json" },
	 });
	}
  });
