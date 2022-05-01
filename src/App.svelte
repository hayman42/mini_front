<script>
    import Signin from "./Signin.svelte";
    import SearchUser from "./SearchUser.svelte";
    import Alert from "./Alert.svelte";
    import { Button, Modal, ModalHeader, ModalBody } from "sveltestrap";
    export { serverUrl } from "./store.js";
    let open = false;
    let isLoggedIn = 0;
    let serverMsg = "";
    const toggle = () => (open = !open);
</script>

<main>
    {#if isLoggedIn}
        <SearchUser bind:isLoggedIn />
    {:else}
        <div style="height: 100px" />
        <img src="project/logo1.png" alt="logo" />
        <div style="height: 50px" />
        <Button
            type="button"
            on:click={toggle}
            style="height: 40px;background-color: #013328;border-radius: 10%;"
            class="btn btn-link"
        >
            <p style="color: #E3DCD2">Sign In / Sign Up</p>
        </Button>
        <Modal isOpen={open} {toggle}>
            <ModalHeader {toggle}>로그인을 하여 시작하세요.</ModalHeader>
            <ModalBody>
                <Signin bind:isLoggedIn bind:serverMsg />
            </ModalBody>
            {#if serverMsg != ""}
                <Alert {serverMsg} />
            {/if}
        </Modal>
    {/if}
</main>

<style>
    main {
        text-align: center;
        background-color: #e3dcd2;
        width: 100%;
        height: 100%;
    }
    a {
        text-decoration: none;
    }
    button {
        height: 40px;
        background-color: #013328;
        border-radius: 10%;
    }

    img {
        display: block;
        margin: auto;
        width: 200px;
        height: auto;
    }
</style>
