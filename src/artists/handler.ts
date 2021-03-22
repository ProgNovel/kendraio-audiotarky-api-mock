import { headers } from '../_config';

const MAX_AGE = 60 * 60;

export async function handleArtists(event: FetchEvent, page?: string): Promise<Response> {
  const endpoint = `https://www.audiotarky.com/$/artists/${
    page && parseInt(page) > 1 ? `page/${page}/` : ''
  }index.json`;
  const response = await fetch(endpoint);
  const data = await response.json();
  const result = [];

  for (const artist in data.artists) {
    result.push({
      title: artist,
      api: data.artists[artist],
    });
  }

  return new Response(JSON.stringify(result, null, 2), { headers });
}
