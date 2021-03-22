import { handleRequest } from './handler';
import { handleScheduledTask } from './_data/handler';

export const CORS = '*';
export const VERSION = '0.0.1';

addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(handleRequest(event));
});

addEventListener('scheduled', (event: ScheduledEvent) => {
  // event.respondWith(handleScheduledTask(event));
  handleScheduledTask(event);
});
