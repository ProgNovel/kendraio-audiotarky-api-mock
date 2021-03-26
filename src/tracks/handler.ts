import { headers } from '../_config';

export async function handleTracks(event: FetchEvent, page?: string): Promise<Response> {
  const endpoint = `https://www.audiotarky.com/$/tracks
  /${page && parseInt(page) > 1 ? `page/${page}/` : ''}index.json`;
  console.log('fetching:', endpoint);
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    return new Response(JSON.stringify(data, null, 2), { headers });
  } catch (err) {
    return new Response('Error fetching ' + endpoint, { status: 500, headers });
  }
}
