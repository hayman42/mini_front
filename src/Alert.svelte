<script>
    import { onMount } from "svelte";

    export let serverMsg;
    onMount(() => {
        alert(serverMsg);
        serverMsg = "";
    });
</script>
