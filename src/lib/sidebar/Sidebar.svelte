<script lang="ts">
    import SidebarLink from "./SidebarLink.svelte";
</script>

<div>
    <h1>Solarian Notes</h1>

    <hr>

    <SidebarLink href="/">Home</SidebarLink>
    <SidebarLink href="/settings">Settings</SidebarLink>
    <SidebarLink href="/about">About Solarian Notes</SidebarLink>

    <hr>

    <span>Pinned</span>

    <hr>

    <SidebarLink href="/tasks">Tasks</SidebarLink>
    <SidebarLink href="/tasks/due" leftPad="10px">Due Soon</SidebarLink>
    <SidebarLink href="/tasks/projects" leftPad="10px">Projects</SidebarLink>

    <hr>

    <span>Notebooks</span>

    <hr>

    <span>Recent</span>
</div>

<style lang="scss">
    div {
        display: flex;
        justify-content: start;
        flex-direction: column;
        height: 100vh;
        width: var(--sidebar-width);
        background-color: var(--bg-dark);
        overflow-x: hidden;
        overflow-y: auto;
        
        h1 {
            text-align: center;
        }

        hr {
            width: 100%;
        }

        span {
            padding-left: 5px;
        }
    }
</style>