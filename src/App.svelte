<script>
	import Signin from "./Signin.svelte";
	function isLoggedIn() {
		console.log(document.cookie.includes("userid="));
		return document.cookie.includes("userid=");
	}
</script>

<main>
	{#if isLoggedIn()}
		<p>Like</p>
	{:else}
		<Signin />
	{/if}
</main>
