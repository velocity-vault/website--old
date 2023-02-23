<script>
    import NavBar from "./NavBar.svelte";
    import NavBarLink from "./NavBarLink.svelte";
</script>

<header>
    <div class="container">
        <NavBar>
            <NavBarLink href="#/">Home</NavBarLink>
            <NavBarLink href="#/maps">Maps</NavBarLink>
            <NavBarLink href="#/rankings">Rankings</NavBarLink>
            <NavBarLink href="#/servers">Servers</NavBarLink>
        </NavBar>
    </div>
</header>

<style>
    header {
        position: sticky;
        top: 0;
        width: 100%;
        background: var(--color-1);
        filter: hue-rotate(var(--hue-rotate));
    }
    .container {
        position: relative;
        display: flex;
        align-items: center;
        left: 50%;
        transform: translateX(-50%);
        width: 950px;
    }
</style>
