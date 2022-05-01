import App from './App.svelte';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
const app = new App({
	target: document.body,
	props: {
		serverUrl: "http://localhost:5000"
	}
});

export default app;