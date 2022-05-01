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
    let viewMode = 0;
    onMount(async () => {
        console.log($uid);
        const res = await axios.get(
            $serverUrl +
                "/api/intro/myintro?" +
                qs.stringify({
                    uid: $uid,
                }),
            {
                withCredentials: true,
            },
            { uid: $uid }
        );
        res.data.forEach((intro) => {
            if (!result[intro.user.nickname]) result[intro.user.nickname] = [];
            result[intro.user.nickname] = [
                ...result[intro.user.nickname],
                intro,
            ];
        });
        console.log(result);
        // introList.forEach((intro) => {
        //     opens[intro._id] = false;
        // });
        // console.log(res.data);
    });

    const toggle = (e) => {
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
    };
</script>

<!-- <Accordion>
  <AccordionItem active header="Home">Fallbrook</AccordionItem>
  <AccordionItem header="School">
    <a href="#home">Buena Vista Elementary</a>
  </AccordionItem>
  <AccordionItem header="Library">UCSB Library</AccordionItem>
</Accordion> -->

<div class="input-name">
    <Input type="email" name="name" placeholder="사용자 이름을 입력하세요" />
</div>
<Row>
    <Col xs="2">
        <ListGroup>
            <ListGroupItem active>Like</ListGroupItem>
            <ListGroupItem
                ><Button value={0} on:click={changeView}>내 자기소개서</Button
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
        </ListGroup>
    </Col>

    <Col xs="9">
        {#if viewMode == 0}
            {#each Object.keys(result) as name}
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
                                        showModal={opens[intro._id]}
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
