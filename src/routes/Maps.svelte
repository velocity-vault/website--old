<script>
    $: document.documentElement.style.setProperty('--hue-rotate', '45deg');

    let cookies = 0;
    function addCookie() {
        cookies++;
    }
</script>

<h1>Maps!</h1>
<p>
	There are currently no maps in here, but you can play cookie clicker if you like.
</p>
<p>
    <button on:click={addCookie}>
        Cookies: {cookies}
    </button>
</p>
