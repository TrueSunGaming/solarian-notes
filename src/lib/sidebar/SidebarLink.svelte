<script lang="ts">
    export let href: string;
    export let className = "";
    export let style = "";
    export let leftPad = "0px";
    export let icon = "";
</script>

<a { href } class={ className } style="--lpad: { leftPad }; { style }">
    {#if icon}
        <img src={icon} alt="icon" />
    {/if}
    <slot />
</a>

<style lang="scss">
    a {
        color: var(--text);
        background-color: var(--bg-dark);
        text-decoration: none;
        font-weight: bold;
        padding: 5px 0 5px calc(var(--lpad) + 5px);
        width: calc(100% - var(--lpad) - 5px);
        transition: var(--hover-transition);

        &:hover {
            background-color: var(--bg-dark-light);
        }
    }
</style>