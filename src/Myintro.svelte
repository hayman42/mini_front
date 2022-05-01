<script>
    import { onMount } from "svelte";
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
    import axios from "axios";

    export let serverUrl;
    let introList = [];
    onMount(async () => {
        const res = await axios.get(serverUrl + "/api/intro/myintro", {
            withCredentials: true,
        });
        introList = res.data;
        // console.log(res.data);
    });
</script>

{#each introList as intro}
    <Card class="mb-3">
        <CardHeader>
            <CardTitle>{intro.title}</CardTitle>
        </CardHeader>
        <CardBody>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
                {intro.text}
            </CardText>
        </CardBody>
        <CardFooter>
            <Button>Button</Button>
        </CardFooter>
    </Card>
{/each}
