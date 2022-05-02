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
    import { marked } from "marked";
    import { serverUrl, uid } from "./store";
    import axios from "axios";
    import qs from "qs";
    export let func;

    export let showModal = false;
    export let createMode = false;
    export let introduce;
    export let keyword = "";
    let title = "";
    let text = "";
    $: age = text + 123;
    const update = (introduce, func) => async () => {
        const res = await axios.get(
            $serverUrl +
                `/api/intro/update/${introduce._id}?` +
                qs.stringify({
                    uid: $uid,
                    title,
                    text,
                }),
            { withCredentials: true }
        );
        console.log(res);
        if (!res.data._id) return alert("수정 실패");
        alert("수정되었습니다.");
        tempText = text;
        tempTitle = title;
        func();
    };

    const create = (introduce, func) => async () => {
        const res = await axios.get(
            $serverUrl +
                `/api/intro/create?` +
                qs.stringify({
                    uid: $uid,
                    title,
                    text,
                }),
            { withCredentials: true }
        );
        console.log(res);
        if (!res.data == "ok") return alert("작성 실패");
        alert("작성 성공");
        func();
    };

    const del = (introduce, func) => async () => {
        const res = await axios.get(
            $serverUrl +
                `/api/intro/delete/${introduce._id}?` +
                qs.stringify({
                    uid: $uid,
                }),
            { withCredentials: true }
        );
        console.log(res);
        if (res.data != "ok") return alert("삭제 실패");
        alert("삭제 성공");
        func();
    };

    const doLike = (func) => async () => {
        console.log(introduce);
        const res = await axios.get(
            $serverUrl +
                `/api/intro/like/${introduce._id}?` +
                qs.stringify({
                    uid: $uid,
                }),
            { withCredentials: true }
        );
        console.log(res);
        if (!res.data == "ok") return alert("잠시 후 다시 시도해주세요.");
        func();
    };

    const unLike = (func) => async () => {
        console.log(introduce);
        const res = await axios.get(
            $serverUrl +
                `/api/intro/unlike/${introduce._id}?` +
                qs.stringify({
                    uid: $uid,
                }),
            { withCredentials: true }
        );
        console.log(res);
        if (!res.data == "ok") return alert("잠시 후 다시 시도해주세요.");
        func();
    };

    console.log(introduce);
    if (introduce) {
        title = introduce.title;
        text = introduce.text;
    }
    let tempText = text;
    let tempTitle = title;
    $: source = marked(text);
    export let modifyMode = false;
    let isOwner = false;
    $: likeN = 0 + isLike;
    let isLike = false;
    const modifyToggle = () => {
        modifyMode = !modifyMode;
        resize();
    };
    const resize = () => {
        document.querySelector(".markdown-editor__right-panel").style.width =
            100 - (modifyMode | createMode) * 50 + "%";
        checkUser();
    };
    const toggle = () => (showModal = !showModal);
    const cancel = async () => {
        text = tempText;
        title = tempTitle;
        modifyToggle();
    };
    const toggleLike = () => {
        isLike = !isLike;
    };
    const checkUser = () => {
        // let uid = parseCookie(document.cookie).uid.substring(3);
        // console.log(uid);
        // uid = uid.substring(0, uid.length - 1);
        // console.log(uid);
        if (createMode || $uid === introduce.user._id) isOwner = true;
    };
    const goTarget = (e) => {
        keyword = e.target.text;
        showModal = !showModal;
    };
</script>

<Modal isOpen={showModal} on:open={resize} on:close={func} fullscreen {toggle}>
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
            <Button
                class="apply button"
                color="primary"
                on:click={update(introduce, modifyToggle)}>적용</Button
            >
            <Button class="cancel button" color="primary" on:click={cancel}
                >취소</Button
            >
        {:else if createMode}
            <Button
                class="apply button"
                color="primary"
                on:click={create(introduce, toggle)}>생성</Button
            >{:else if isOwner === true}
            <Dropdown direction="up">
                <DropdownToggle color="primary" caret
                    >Like {likeN}</DropdownToggle
                >
                <DropdownMenu>
                    {#each introduce.like_people as person}
                        <DropdownItem on:click={goTarget}
                            >{person.nickname}</DropdownItem
                        >
                    {/each}
                </DropdownMenu>
            </Dropdown>

            <Button
                class="remove button"
                color="secondary"
                on:click={modifyToggle}>수정</Button
            >
            <Button
                class="remove button"
                color="secondary"
                on:click={del(introduce, toggle)}>삭제</Button
            >
        {:else}
            <Button
                class="like button"
                color="primary"
                on:click={isLike ? unLike(toggleLike) : doLike(toggleLike)}
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
