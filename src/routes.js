import Home from './routes/Home.svelte';
import Maps from './routes/Maps.svelte';
import Rankings from './routes/Rankings.svelte';
import Servers from './routes/Servers.svelte';
import User from './routes/User.svelte'
import NotFound from './routes/NotFound.svelte';

export default {
    '/': Home,
    '/maps': Maps,
    '/rankings': Rankings,
    '/servers': Servers,
    '/user/:steamid': User,
    // The catch-all route must always be last
    '*': NotFound
};
