<script>
    import { Accordion, AccordionItem } from "sveltestrap";
    import { ListGroup, ListGroupItem } from "sveltestrap";
    import { Toast, ToastBody, ToastHeader } from "sveltestrap";
    import { Form, FormGroup, FormText, Input, Label } from "sveltestrap";
    import {
        Button,
        Card,
        CardBody,
        CardFooter,
        CardHeader,
        CardSubtitle,
        CardText,
        CardTitle,
    } from "sveltestrap";
    import { Col, Container, Row } from "sveltestrap";
    import { onMount } from "svelte";
    import { Modal, ModalHeader, ModalBody } from "sveltestrap";
    import qs from "qs";
    import IntroduceModal from "./IntroduceModal.svelte";
    import axios from "axios";
    import { serverUrl, uid } from "./store";
    import Userinfo from "./Userinfo.svelte";

    export let isLoggedIn;
    let result = {};
    let opens = {};
    let createModalOpen = false;
    let viewMode = 0;
    let keyword = "";
    let category = "nickname";
    const getData = async (e) => {
        const query = {};
        if (e && e.target && e.target.name) category = e.target.name;
        if (e && e.target && viewMode == 3) query[category] = e.target.value;
        if (viewMode == 0) query.uid = $uid;
        console.log(query);
        let res;
        if (viewMode == 3)
            res = await axios.get(
                $serverUrl +
                    "/api/intro/search?" +
                    qs.stringify({
                        ...query,
                    }),
                {
                    withCredentials: true,
                },
                { uid: $uid }
            );
        if (viewMode == 0)
            res = await axios.get(
                $serverUrl +
                    "/api/intro/myintro?" +
                    qs.stringify({
                        ...query,
                    }),
                {
                    withCredentials: true,
                },
                { uid: $uid }
            );
        console.log(res.data);
        result = {};
        res.data.forEach((intro) => {
            if (!result[intro.user.nickname]) result[intro.user.nickname] = [];
            result[intro.user.nickname].push(intro);
        });
        const tmparray = [];
        result = { ...result, tmparray };
        console.log(result);
        delete result.tmparray;
    };
    onMount(async () => {
        console.log($uid);
        getData();
        // introList.forEach((intro) => {
        //     opens[intro._id] = false;
        // });
        // console.log(res.data);
    });
    const toggle = (e) => {
        if (e.target.value == -1)
            return console.log((createModalOpen = !createModalOpen));
        opens[e.target.value] = !opens[e.target.value];
        opens = { ...opens };
        console.log(opens);
    };

    const changeView = (e) => {
        if (e.target.value == 2) {
            isLoggedIn = false;
            $uid = "";
        }
        viewMode = e.target.value;
        if (viewMode == 0 || viewMode == 3) getData();
    };
</script>

<!-- <Accordion>
  <AccordionItem active header="Home">Fallbrook</AccordionItem>
  <AccordionItem header="School">
    <a href="#home">Buena Vista Elementary</a>
  </AccordionItem>
  <AccordionItem header="Library">UCSB Library</AccordionItem>
</Accordion> -->
{#if viewMode == 3}
    <div class="input-name">
        <Input
            type="email"
            name="nickname"
            on:input={getData}
            bind:value={keyword}
            placeholder="사용자 이름을 입력하세요"
        />
    </div>
{/if}
<Row>
    <Col xs="2">
        <ListGroup>
            <ListGroupItem active>Like</ListGroupItem>
            <ListGroupItem
                ><Button value={0} on:click={changeView}>내 자기소개서</Button
                ></ListGroupItem
            >
            <ListGroupItem
                ><Button value={3} on:click={changeView}>검색</Button
                ></ListGroupItem
            >
            <ListGroupItem
                ><Button value={1} on:click={changeView}>회원정보 수정</Button
                ></ListGroupItem
            >
            <ListGroupItem
                ><Button value={2} on:click={changeView}>로그아웃</Button
                ></ListGroupItem
            >
            {#if viewMode == 0}
                <ListGroupItem>
                    <Button on:click={toggle} value={-1}
                        >자기소개 작성하기</Button
                    >
                    <IntroduceModal
                        createMode={true}
                        func={getData}
                        bind:showModal={createModalOpen}
                    /></ListGroupItem
                >
            {/if}
        </ListGroup>
    </Col>

    <Col xs="9">
        {#if viewMode == 0 || viewMode == 3}
            {#each result && Object.keys(result) as name}
                <div class="p-3 mb-3 bg-main marg">
                    <div class="card-username">{name}</div>
                    <div class="scroll-item">
                        {#each result[name] as intro}
                            <Card class="mb-3">
                                <CardHeader>
                                    <CardTitle>{intro.title}</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <CardSubtitle
                                        >{new Date(intro.createdAt)
                                            .toString()
                                            .substring(
                                                0,
                                                new Date(
                                                    intro.createdAt
                                                ).toString().length - 17
                                            )}
                                    </CardSubtitle>
                                    <CardText>
                                        {intro.text}
                                    </CardText>
                                </CardBody>
                                <CardFooter>
                                    <Button on:click={toggle} value={intro._id}
                                        >상세보기</Button
                                    >
                                    <IntroduceModal
                                        func={getData}
                                        bind:keyword={keyword}
                                        bind:showModal={opens[intro._id]}
                                        introduce={intro}
                                    />
                                </CardFooter>
                            </Card>
                        {/each}
                    </div>
                </div>
            {/each}
        {:else if viewMode == 1}
            <Userinfo />
        {/if}
    </Col>
</Row>

<style>
    .input-name {
        margin: 10px;
    }
    .bg-main {
        background-color: #013328;
        border-radius: 15px;
    }
    .card-username {
        color: white;
        font-weight: bold;
        font-size: xx-large;
        margin-bottom: 10px;
        align-items: flex-start;
        text-align: left;
    }
    .scroll-item {
        white-space: nowrap;
        overflow: auto;
        padding: 10px;
    }
    ::-webkit-scrollbar {
        width: 15px;
    }
    ::-webkit-scrollbar-track {
        background-color: #f9f9f9;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #e3dcd2;
        border-radius: 30px;
    }
    ::-webkit-scrollbar-button:start:decrement,
    ::-webkit-scrollbar-button:end:increment {
        display: block;
        height: 8px;
        background-color: #000;
    }
</style>
