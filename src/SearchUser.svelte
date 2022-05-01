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
    let str = "사용자 명을 입력하세요";
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
            <ListGroupItem active>MINI PROJECT</ListGroupItem>
            <ListGroupItem>메인화면</ListGroupItem>
            <ListGroupItem>회원정보 수정</ListGroupItem>
            <ListGroupItem>로그인</ListGroupItem>
            <ListGroupItem>로그아웃</ListGroupItem>
            <ListGroupItem>회원가입</ListGroupItem>
        </ListGroup>
    </Col>

    <Col xs="9">
        <div class="p-3 mb-3 bg-main marg">
            <div class="card-username">유저1(이름)</div>

            <div class="scroll-item">
                <Toast>
                    <ToastHeader>CARD1</ToastHeader>
                    <ToastBody>card1 상세내용</ToastBody>
                </Toast>

                <Toast class="me-1">
                    <ToastHeader>CARD2</ToastHeader>
                    <ToastBody>card2 상세내용</ToastBody>
                </Toast>

                <Toast class="me-1">
                    <ToastHeader>CARD3</ToastHeader>
                    <ToastBody>card3 상세내용</ToastBody>
                </Toast>
            </div>
        </div>

        <div class="p-3 mb-3 bg-main marg">
            <div class="card-username">유저2(이름)</div>

            <div class="scroll-item">
                <Toast>
                    <ToastHeader>CARD1</ToastHeader>
                    <ToastBody>card1 상세내용</ToastBody>
                </Toast>

                <Toast class="me-1">
                    <ToastHeader>CARD2</ToastHeader>
                    <ToastBody>card2 상세내용</ToastBody>
                </Toast>

                <Toast class="me-1">
                    <ToastHeader>CARD3</ToastHeader>
                    <ToastBody>card3 상세내용</ToastBody>
                </Toast>
            </div>
        </div>
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
