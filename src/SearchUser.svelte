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
	.bg-main {
		background-color: #013328;
		border-radius:15px;
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
		white-space:nowrap;
		overflow:auto;
		padding: 10px;
		/* scroll-snap-type: x mandatory;	
		-webkit-overflow-scrolling: touch;
		overflow-x: scroll;
		
		scroll-snap-align: start; */
	}
	::-webkit-scrollbar {
					/* 스크롤바 전체 영역 */
		width: 15px;
	} 
	::-webkit-scrollbar-track {
						/* 스크롤이 움직이는 영역  */
		background-color: #f9f9f9;
	} 
	::-webkit-scrollbar-thumb {
						/*  스크롤  */
		background-color: #e3dcd2; 
		border-radius:30px;
	} 
	::-webkit-scrollbar-button:start:decrement, 
	::-webkit-scrollbar-button:end:increment {
						/*  스크롤의 화살표가 포함된 영역   */
		display:block;
		height:8px;
		background-color: #000;
	} 
	/* .card-item {
		scroll-snap-align: start;
		text-align: center;
		position: relative;
		display: inline;
	} */
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