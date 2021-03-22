import { headers } from '../_config';
import { VERSION } from '../index';

export async function handleInit(event: FetchEvent): Promise<Response> {
  return new Response('Audiotarky integration ' + VERSION + '.', { headers });
}
