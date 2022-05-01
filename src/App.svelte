<script>
    import Signin from "./Signin.svelte";
    // import Userinfo from "./Userinfo.svelte";
    import Myintro from "./Myintro.svelte";
    import {
        Image,
        Button,
        Modal,
        ModalHeader,
        ModalBody,
        ModalFooter,
        Nav,
        NavItem,
        Navbar,
    } from "sveltestrap";
    export { serverUrl } from "./store.js";
    let open = false;
    let isLoggedIn = false;
    const toggle = () => (open = !open);
</script>

<main>
    {#if isLoggedIn}
        <Myintro />
    {:else}
        <div style="height: 100px" />
        <img src="/logo1.png" alt="logo" />
        <div style="height: 50px" />
        <Button
            type="button"
            on:click={toggle}
            style="height: 40px;background-color: #013328;border-radius: 10%;"
            class="btn btn-link"
        >
            <a style="color: #E3DCD2"> Sign In / Sign Up</a>
        </Button>
        <Modal isOpen={open} {toggle}>
            <ModalHeader {toggle}>로그인을 하여 시작하세요.</ModalHeader>
            <ModalBody>
                <Signin bind:isLoggedIn />
            </ModalBody>
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
