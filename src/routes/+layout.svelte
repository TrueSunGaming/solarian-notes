<script lang="ts">
    import "./const.scss";
    import "./style.scss";

    import Sidebar from "$lib/sidebar/Sidebar.svelte";
</script>

<div>
    <nav>
        <Sidebar />
    </nav>

    <main>
        <slot />
    </main>
</div>

<style lang="scss">
    div {
        display: flex;
        flex-direction: row;

        main {
            padding: 10px;
        }
    }
</style>