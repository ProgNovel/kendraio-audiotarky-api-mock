import { headers } from '../_config';

export async function handleAlbums(event: FetchEvent, page?: string): Promise<Response> {
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
