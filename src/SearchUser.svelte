<script>
	import { Accordion, AccordionItem } from 'sveltestrap';
	import { ListGroup, ListGroupItem } from 'sveltestrap';
	import { Toast, ToastBody, ToastHeader } from 'sveltestrap';
	import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardSubtitle,
    CardText,
    CardTitle
  } from 'sveltestrap';
  import { Col, Container, Row } from 'sveltestrap';
	let str = '사용자 명을 입력하세요';
</script>

<!-- <Accordion>
  <AccordionItem active header="Home">Fallbrook</AccordionItem>
  <AccordionItem header="School">
    <a href="#home">Buena Vista Elementary</a>
  </AccordionItem>
  <AccordionItem header="Library">UCSB Library</AccordionItem>
</Accordion> -->

<style>
	.box {
		width: 300px;
		border: 1px solid #aaa;
		border-radius: 2px;
		box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
		padding: 1em;
		margin: 0 0 1em 0;
	}

	div {
		background-color: #eee;
	}

	.active {
		background-color: #ff3e00;
		color: white;
	}
	.bar-layout {

	}
</style>

<input value={str} size="80px">

<Row>
	<Col xs="2">
		<ListGroup>
			<ListGroupItem active>MINI PROJECT</ListGroupItem>
			<ListGroupItem>메인화면</ListGroupItem>
			<ListGroupItem>회원정보 수정</ListGroupItem>
			<ListGroupItem>로그인</ListGroupItem>
			<ListGroupItem>로그아웃</ListGroupItem>
			<ListGroupItem>회원가입</ListGroupItem>
			<ListGroupItem disabled>Disabled</ListGroupItem>
		</ListGroup>
	</Col>

	<Col xs="9">
	<h2>유저1(이름)</h2>
	<div class="p-3 bg-black mb-3 marg">
		
		<Toast class="me-1">
		<ToastHeader>CARD1</ToastHeader>
		<ToastBody>
			card1 상세내용
		</ToastBody>
		</Toast>

		<Toast class="me-1">
			<ToastHeader>CARD2</ToastHeader>
			<ToastBody>
			card2 상세내용
			</ToastBody>
		</Toast>
	</div>

	<h2>유저2(이름)</h2>
	<div class="p-3 bg-black mb-3 marg">
		<Toast class="me-1">
			<ToastHeader>CARD1</ToastHeader>
			<ToastBody>
			card1 상세내용
			</ToastBody>
		</Toast>
	
		<Toast class="me-1">
			<ToastHeader>CARD2</ToastHeader>
			<ToastBody>
				card2 상세내용
			</ToastBody>
		</Toast>
	</div>
	</Col>
</Row>