<script>
    import HeaderLogin from "./HeaderLogin.svelte";
</script>

<header>
    <div class="container">
        <div>
            <a href="#/">home</a>
            <a href="#/maps">maps</a>
            <a href="#/rankings">rankings</a>
            <a href="#/servers">servers</a>
        </div>
        <div>
            <HeaderLogin />
        </div>
    </div>
</header>

<style>
    header {
        position: sticky;
        top: 0;
        background: #13110e;
        display: flex;
        justify-content: center;
    }
    .container {
        width: 950px;
        display: flex;
        justify-content: space-between;
    }
</style>
