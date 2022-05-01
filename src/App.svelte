<script>
	export let username = "name";
</script>

<main>
	<header>
		<div style="height: 20px"></div>
		<ul class="nav justify-content-center">
			<li class="nav-item">
				<div>
					<a class="nav-link active" aria-current="page" href="#"><img src="/logo1.png" alt="logo"></a>
				</div>
			</li>
			<li class="nav-item">
				<div>
					<p>Welcome!<br>{username}</p>
				</div>
			</li>
			<li class="nav-item">
				<div>
					<a class="nav-link" href="#">Sign Out</a>
				</div>
			</li>
			<li class="nav-item">
				<div>
			  		<a class="nav-link" href="#">See Others</a>
				</div>
			</li>
		  </ul>
	</header>
	<div style='height: 100px'></div>
	<img src="/logo1.png" alt="logo">
	<div style='height: 50px'></div>
	<button type="button" class="btn btn-link">
		<a href="#" style="color: #E3DCD2"> Sign In / Sign Up</a>
	</button>
</main>

<style>
	header {
		float: left;
		height: 100%;
		width: 100px;
		background-color: #013328;
	}

	header ul li div {
		margin: 10px;
		background-color: #E3DCD2;
		border-radius: 5%;
	}
	header ul li div a {
		color: #100C0D;
	}

	header ul li a img {
		height: 50px;
		width: auto;
		padding: 10px 10px;
	}

	main {
		text-align: center;
		background-color: #CC8B65;
		width: 100%;
		height: 100%;
	}

	button {
		height: 40px;
		background-color: #013328;
		border-radius: 10%;
	}

	img {
		display: block;
		margin: auto;
		width:200px;
		height: auto;
	}
</style>