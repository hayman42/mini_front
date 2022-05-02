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
    import IntroduceModal from "./IntroduceModal.svelte";
    import axios from "axios";

    export let serverUrl;
    let introList = [];
    let result = {};
    let opens = {};
    onMount(async () => {
        const res = await axios.get(serverUrl + "/api/intro/myintro", {
            withCredentials: true,
        });
        res.data.forEach((intro) => {
            if (!result[intro.user.nickname]) result[intro.user.nickname] = [];
            result[intro.user.nickname] = [
                ...result[intro.user.nickname],
                intro,
            ];
        });
        console.log(result);
        // introList.forEach((intro) => {
        //     opens[intro._id] = false;
        // });
        // console.log(res.data);
    });

    const toggle = (e) => {
        opens[e.target.value] = !opens[e.target.value];
        opens = { ...opens };
        console.log(opens);
    };
</script>

{#each Object.keys(result) as name}
    <h1>name</h1>
    {#each result[name] as intro}
        <Card class="mb-3">
            <CardHeader>
                <CardTitle>{intro.title}</CardTitle>
            </CardHeader>
            <CardBody>
                <CardSubtitle
                    >Created At: {new Date(intro.createdAt)}
                </CardSubtitle>
                <CardText>
                    {intro.text}
                </CardText>
            </CardBody>
            <CardFooter>
                <Button on:click={toggle} value={intro._id}>Get Started</Button>
                <IntroduceModal
                    showModal={opens[intro._id]}
                    introduce={intro}
                />
            </CardFooter>
        </Card>
    {/each}
{/each}
