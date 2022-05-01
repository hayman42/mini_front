<script>
    import {
        Button,
        Modal,
        ModalBody,
        ModalFooter,
        ModalHeader,
        Dropdown,
        DropdownItem,
        DropdownMenu,
        DropdownToggle,
    } from "sveltestrap";
    import { parseCookie } from "./util";
    import { marked } from "marked";
    import { mock } from "./mock";
    export let showModal = false;
    export let createMode = false;
    export let introduce;
    let { title, text } = introduce;
    let tempText = text;
    let tempTitle = title;
    $: source = marked(text);
    export let modifyMode = false;
    let isOwner = true;
    $: likeN = 0 + isLike;
    let isLike = false;
    const modifyToggle = () => {
        modifyMode = !modifyMode;
        resize();
    };
    const resize = () => {
        document.querySelector(".markdown-editor__right-panel").style.width =
            100 - (modifyMode | createMode) * 50 + "%";
    };
    const toggle = () => console.log((showModal = !showModal));
    const cancel = () => {
        text = tempText;
        title = tempTitle;
        modifyToggle();
    };
    const apply = () => {
        console.log(text);
        console.log(title);
        tempText = text;
        tempTitle = title;
        modifyToggle();
    };
    const doLike = () => console.log((isLike = !isLike));
    const create = () => {
        showModal = !showModal;
    };
</script>

<Modal isOpen={showModal} on:open={resize} fullscreen {toggle}>
    <ModalHeader {toggle}>
        {#if modifyMode | createMode}
            <textarea class="title" bind:value={title} />
        {:else}
            <h1>{title}</h1>
        {/if}
    </ModalHeader>
    <ModalBody>
        <div class="markdown-editor">
            {#if modifyMode || createMode}
                <div class="markdown-editor__left-panel">
                    <textarea
                        bind:value={text}
                        class="markdown-editor__source"
                    />
                </div>
            {/if}
            <div class="markdown-editor__right-panel">
                <div
                    class="markdown-editor__output"
                    oncontextmenu="return false"
                    ondragstart="return false"
                    onselectstart="return false"
                >
                    {@html source}
                </div>
            </div>
        </div>
    </ModalBody>
    <ModalFooter>
        {#if modifyMode}
            <Button class="apply button" color="primary" on:click={apply}
                >적용</Button
            >
            <Button class="cancel button" color="primary" on:click={cancel}
                >취소</Button
            >
        {:else if createMode}
            <Button class="apply button" color="primary" on:click={create}
                >생성</Button
            >{:else if isOwner === true}
            <Dropdown direction="up">
                <DropdownToggle color="primary" caret
                    >Like {likeN}</DropdownToggle
                >
                <DropdownMenu>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </Dropdown>

            <Button
                class="remove button"
                color="secondary"
                on:click={modifyToggle}>수정</Button
            >
            <Button class="remove button" color="secondary" on:click={toggle}
                >삭제</Button
            >
        {:else}
            <Button class="like button" color="primary" on:click={doLike}
                >Like {likeN}</Button
            >
        {/if}
    </ModalFooter>
</Modal>

<style>
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        display: inline-block;
        width: auto;
    }
</style>
