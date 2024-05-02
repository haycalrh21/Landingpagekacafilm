/** @type {import('next').NextConfig} */

const nextConfig = {
	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		// Important: return the modified config
		return config;
	},
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				hostname: "images.unsplash.com",
			},
			{
				hostname: "astradigitaldigiroomuat.blob.core.windows.net",
			},
		],
	},
};

export default nextConfig;
