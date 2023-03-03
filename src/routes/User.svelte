<script>
    import { getSteamProfile } from "../lib/api";

    export let params = {};
    
    const userPromise = getSteamProfile(params.steamid);
</script>

<div class="container">
    {#await userPromise}
        <h1>Loading</h1>
    {:then user} 
        <img src={user.avatarfull} alt="avatar">
        <h1>{user.personaname}</h1>
    {:catch}
        <h1>Error</h1>
    {/await}
</div>

<style>
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
