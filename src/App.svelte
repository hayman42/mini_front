<script>
	import Signin from "./Signin.svelte";
	import Userinfo from "./Userinfo.svelte";
	// import Myintro from "./Myintro.svelte";
	import {
		Image,
		Button,
		Modal,
		ModalHeader,
		ModalBody,
		ModalFooter,
		Nav,
		NavItem,
		Navbar,
	} from "sveltestrap";

	export let serverUrl;
	let open = false;
	let isLoggedIn = false;
	const toggle = () => (open = !open);
</script>

<main>
	<!-- {#if isLoggedIn} -->
	<!-- <Myintro {serverUrl} /> -->
	<!-- {:else} -->
	<Image alt="Landscape" src="./logo.png" style="width:25%;height:25%" />
	<br />
	<Button on:click={toggle}>Get Started</Button>
	<Modal isOpen={open} {toggle}>
		<ModalHeader {toggle}>로그인을 하여 시작하세요.</ModalHeader>
		<ModalBody>
			<Signin {serverUrl} bind:isLoggedIn />
		</ModalBody>
	</Modal>
	<!-- {/if} -->
</main>
