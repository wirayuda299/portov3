import { siteUrl } from '$lib/data/portfolio';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = () => {
	const body = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

	return new Response(body, {
		headers: { 'Content-Type': 'text/plain' }
	});
};
