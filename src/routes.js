import Home from './routes/Home.svelte';
import Maps from './routes/Maps.svelte';
import Rankings from './routes/Rankings.svelte';
import Servers from './routes/Servers.svelte';
import NotFound from './routes/NotFound.svelte';

export default {
    '/': Home,
    '/maps': Maps,
    '/rankings': Rankings,
    '/servers': Servers,
    // The catch-all route must always be last
    '*': NotFound
};
