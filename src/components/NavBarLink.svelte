<script>
    import { location } from 'svelte-spa-router';

    export let href = "#";
</script>

{#if "#"+$location !== href}
    <a href={href}>
        <slot></slot>
    </a>
{:else}
    <a href={href} class="current">
        <slot></slot>
    </a>
{/if}

<style>
    a {
        font-family: "Comfortaa";
        font-size: 0.8rem;
        font-weight: 700;
        text-transform: lowercase;
        text-decoration: none;
        color: #ddd;
        margin: 0 4px 0 4px;
        padding-bottom: 2px;
    }
    a:hover:not(.current):not(:active) {
        color: #eee;
    }
    .current,
    a:active {
        color: #fff;
    }
    .current {
        border-bottom: 3px solid #ff9966;
    }
</style>
