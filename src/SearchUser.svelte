<script>
	import { Accordion, AccordionItem } from 'sveltestrap';
	
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

</style>

<input value={str} size="80px">
	

<div class="p-3 bg-black mb-3 marg">
    <Toast class="me-1">
      <ToastHeader>User1</ToastHeader>
      <ToastBody>
        This is a toast on a black background — check it out!
      </ToastBody>
	</Toast>

	<Toast class="me-1">
		<ToastHeader>User2</ToastHeader>
		<ToastBody>
		  This is a toast on a black background — check it out!
		</ToastBody>
	</Toast>
</div>

