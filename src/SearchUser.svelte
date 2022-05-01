<script>
    import {
        Button,
        Input,
        ListGroup,
        ListGroupItem,
        Col,
        Row,
    } from "sveltestrap";
    import { serverUrl, uid } from "./store";
    import Userinfo from "./Userinfo.svelte";
    import Myintro from "./Myintro.svelte";

    export let isLoggedIn;
    let viewMode = 0;

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
            <Myintro />
        {:else if viewMode == 1}
            <Userinfo />
        {/if}
    </Col>
</Row>
