<script>
    import {
        Button,
        Modal,
        ModalBody,
        ModalFooter,
        ModalHeader,
    } from "sveltestrap";
    import SveltMarkdown from "svelte-markdown";
    import { mock } from "./mock";
    export let userId;
    export let showModal = true;
    let myId = 0;
    const toggle = () => (showModal = !showModal);
</script>

<Modal isOpen={showModal} {toggle}>
    <ModalHeader {toggle}
        ><h1 style="display:inline;">{mock[userId].title}</h1>
        <Button color="primary" on:click={toggle}>Do Something</Button>
        <Button color="secondary" on:click={toggle}>Cancel</Button></ModalHeader
    >
    <ModalBody>
        <SveltMarkdown source={mock[userId].text} />
    </ModalBody>
    <ModalFooter>
        <Button color="primary" on:click={toggle}>Do Something</Button>
        <Button color="secondary" on:click={toggle}>Cancel</Button>
    </ModalFooter>
</Modal>
