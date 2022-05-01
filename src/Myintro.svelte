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
        Modal,
        ModalHeader,
        ModalBody,
    } from "sveltestrap";
    import IntroduceModal from "./IntroduceModal.svelte";
    import axios from "axios";
    import { serverUrl } from "./store";
    let introList = [];
    let opens = {};
    onMount(async () => {
        const res = await axios.get($serverUrl + "/api/intro/myintro", {
            withCredentials: true,
        });
        introList = [...res.data];
        introList.forEach((intro) => {
            opens[intro._id] = false;
        });
        console.log(res.data);
    });

    let open = false;
    const toggle = (e) => {
        opens[e.target.value] = !opens[e.target.value];
        opens = { ...opens };
        console.log(opens);
    };
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
            <Button on:click={toggle} value={intro._id}>Get Started</Button>
            <IntroduceModal
                bind:showModal={opens[intro._id]}
                introduce={intro}
            />
        </CardFooter>
    </Card>
{/each}
