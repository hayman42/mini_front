<script lang="ts">
    import {
        InputGroup,
        InputGroupText,
        Input,
        Button,
        Container,
    } from "sveltestrap";
    import { onMount } from "svelte";
    import axios from "axios";
    import qs from "qs";

    let userid, nickname, age, gender;
    onMount(async () => {
        let info = (
            await axios.get("https://localhost:5000/api/user/info", {
                withCredentials: true,
            })
        ).data;
        console.log(info);
        userid = info.userid;
        nickname = info.nickname;
        age = info.age;
        gender = info.gender;
    });

    async function handleSubmit() {
        const ids = ["userid", "cur_pw", "new_pw", "nickname", "age"];
        const querys = ids.reduce((res, key) => {
            res[key] = document.getElementById(key).value;
            return res;
        }, {});
        console.log(qs.stringify(querys));
        const res = await axios.get(
            "https://hayman42intropapp.herokuapp.com/api/user/update?" +
                qs.stringify(querys),
            { withCredentials: true }
        );
    }
</script>

<div>
    <Container>
        <h2>회원정보 수정</h2>
        <br />
        <InputGroup>
            <InputGroupText>ID</InputGroupText>
            <Input id="userid" value={userid} readonly />
        </InputGroup>
        <br />
        <InputGroup>
            <InputGroupText>현재 암호</InputGroupText>
            <Input id="cur_pw" type="password" placeholder="current password" />
        </InputGroup>
        <br />
        <InputGroup>
            <InputGroupText>새로운 암호</InputGroupText>
            <Input id="new_pw" type="password" placeholder="new password" />
        </InputGroup>
        <br />
        <InputGroup>
            <InputGroupText>닉네임</InputGroupText>
            <Input id="nickname" value={nickname} placeholder="nickname" />
        </InputGroup>
        <br />
        <InputGroup>
            <InputGroupText>나이</InputGroupText>
            <Input id="age" value={age} placeholder="age" />
        </InputGroup>
        <br />
        <InputGroup>
            <InputGroupText>성별</InputGroupText>
            <Input id="gender" value={gender} readonly />
        </InputGroup>
        <br />
        <Button on:click={handleSubmit}>수정</Button>
    </Container>
</div>
