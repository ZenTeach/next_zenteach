// const { withSentryConfig } = require('@sentry/nextjs')

const siteConfig = {
	env: {
		apiKey: '',
	},
	target: 'serverless',
	async headers() {
		return [
			{

				source: '/(.*)',
				headers: [
					{
						key: 'X-DNS-Prefetch-Control',
						value: 'on'
					},
					{
						key: 'Strict-Transport-Security',
						value: 'max-age=63072000; includeSubDomains; preload'
					},
					{
						key: 'X-XSS-Protection',
						value: '1; mode=block'
					},
					{
						key: 'X-Frame-Options',
						value: 'SAMEORIGIN'
					},
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff'
					}
				]
			}
		  ]
	},
	webpack: function (config, { isServer }) {
		if (!isServer) {
            config.resolve.alias = {
                ...config.resolve.alias,
                webpack: false
            }
		}
		config.module.rules.push({
			test: /\.md$/,
			use: 'raw-loader'
		})

		return config
	},
	generateBuildId: () => 'build'

}
// const sentryWebpackPluginOptions = {}
module.exports = siteConfig
// module.exports = withSentryConfig(siteConfig, sentryWebpackPluginOptions)
