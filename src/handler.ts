import { handleArtists } from './artists/handler';
import { handleGenres } from './genres/handler';
import { handleInit } from './_init/init-handler';
import { handleAlbums } from './albums/handler';
import { handleTracks } from './tracks/handler';

export async function handleRequest(event: FetchEvent): Promise<Response> {
  const request: Request = event.request;
  const url = new URL(request.url);
  const path = url.pathname;
  const [, route, page] = path.split('/');

  if (request.method !== 'GET') {
    return new Response('Can only handle GET request.', { status: 403 });
  }

  if (path === '/') {
    return await handleInit(event);
  } else if (route === 'artists') {
    return await handleArtists(event, page);
  } else if (route === 'albums') {
    return await handleAlbums(event, page);
  } else if (route === 'genres') {
    return await handleGenres(event);
  } else if (route === 'tracks') {
    return await handleTracks(event, page);
  }

  return new Response(`Invalid route 404. Path ${path} not found.`);
}
