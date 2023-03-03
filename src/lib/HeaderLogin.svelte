<script>
    import { userPromise } from "../lib/auth";
    import { STEAM_LOG_IN_URL, LOG_OUT_URL } from "../lib/api"
</script>

{#await userPromise}
    Loading
{:then user}
    {#if user}
        <a href="#/user/{user.steamid}">{user.personaname}</a>
        <a href={LOG_OUT_URL}>Log out</a>
    {:else}
        <a href={STEAM_LOG_IN_URL}>Log in</a>
    {/if}
{:catch}
    Error
{/await}
