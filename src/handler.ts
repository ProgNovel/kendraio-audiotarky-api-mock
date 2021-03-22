import { handleArtists } from './artists/handler';
import { handleGenres } from './genres/handler';
import { handleInit } from './_init/init-handler';
import { handleAlbums } from './albums/handler';

export async function handleRequest(event: FetchEvent): Promise<Response> {
  const request: Request = event.request;
  const url = new URL(request.url);
  const path = url.pathname;
  const [, route, page] = path.split('/');

  if (request.method !== 'GET') {
    return new Response('Can only handle GET request.', { status: 403 });
  }

  if (path === '/') {
    return handleInit(event);
  } else if (route === 'artists') {
    return handleArtists(event, page);
  } else if (route === 'albums') {
    return handleAlbums(event, page);
  } else if (route === 'genres') {
    return handleGenres(event);
  }

  return new Response(`Invalid route 404. Path ${path} not found.`);
}
