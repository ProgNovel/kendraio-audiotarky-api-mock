import { headers } from '../_config';

export async function handleTracks(event: FetchEvent, page?: string): Promise<Response> {
  const endpoint = `https://www.audiotarky.com/$/tracks/${
    page && parseInt(page) > 1 ? `page/${page}/` : ''
  }index.json`;
  console.log('fetching:', endpoint);
  try {
    const response = await fetch(endpoint);
    console.log(response);
    const data = await response.json();
    data.tracks = data.tracks.map(track => {
      track.api_page2 = '/api/' + track.api_page.split('/$/')[1];
      if (!track.api_page2) track.api_page2 = track.api_page.split('audiotarky.com')[1]
      return track
    });
    
    console.log(data);
    return new Response(JSON.stringify(data, null, 2), { headers });
  } catch (err) {
    console.error(err);
    return new Response('Error fetching ' + endpoint, { status: 500, headers });
  }
}
