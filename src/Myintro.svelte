<script>
    import {
        Button,
        Card,
        CardHeader,
        CardTitle,
        CardBody,
        CardSubtitle,
        CardText,
        CardFooter,
    } from "sveltestrap";
    import { onMount } from "svelte";
    import axios from "axios";
    import qs from "qs";
    import IntroduceModal from "./IntroduceModal.svelte";
    import { serverUrl, uid } from "./store";

    let result = {};
    let opens = {};
    onMount(async () => {
        console.log($uid);
        const res = await axios.get(
            $serverUrl +
                "/api/intro/myintro?" +
                qs.stringify({
                    uid: $uid,
                }),
            {
                withCredentials: true,
            }
        );
        res.data.forEach((intro) => {
            if (!result[intro.user.nickname]) result[intro.user.nickname] = [];
            result[intro.user.nickname] = [
                ...result[intro.user.nickname],
                intro,
            ];
        });
    });

    const toggle = (e) => {
        opens[e.target.value] = !opens[e.target.value];
        opens = { ...opens };
    };
</script>

<Button>Create New</Button>
<br /><br />
{#each Object.keys(result) as name}
    <div class="p-3 mb-3 bg-main marg">
        <div class="card-username">{name}</div>

        <div class="scroll-item">
            {#each result[name] as intro}
                <Card class="mb-3">
                    <CardHeader>
                        <CardTitle>{intro.title}</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <CardSubtitle
                            >{new Date(intro.createdAt)
                                .toString()
                                .substring(
                                    0,
                                    new Date(intro.createdAt).toString()
                                        .length - 17
                                )}
                        </CardSubtitle>
                        <CardText>
                            {intro.text}
                        </CardText>
                    </CardBody>
                    <CardFooter>
                        <Button on:click={toggle} value={intro._id}
                            >상세보기</Button
                        >
                        <IntroduceModal
                            showModal={opens[intro._id]}
                            introduce={intro}
                        />
                    </CardFooter>
                </Card>
            {/each}
        </div>
    </div>
{/each}

<style>
    .input-name {
        margin: 10px;
    }
    .bg-main {
        background-color: #013328;
        border-radius: 15px;
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
        white-space: nowrap;
        overflow: auto;
        padding: 10px;
    }
    ::-webkit-scrollbar {
        width: 15px;
    }
    ::-webkit-scrollbar-track {
        background-color: #f9f9f9;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #e3dcd2;
        border-radius: 30px;
    }
    ::-webkit-scrollbar-button:start:decrement,
    ::-webkit-scrollbar-button:end:increment {
        display: block;
        height: 8px;
        background-color: #000;
    }
</style>
