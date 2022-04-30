<script>
    import {
        TabContent,
        TabPane,
        Input,
        InputGroup,
        InputGroupText,
        Button,
    } from "sveltestrap";
    import qs from "qs";
    import axios from "axios";

    let radioGroup;
    $: load = 0;

    async function handleSignin() {
        const ids = ["userid", "password"];
        const querys = ids.reduce((res, key) => {
            res[key] = document.getElementById(key).value;
            return res;
        }, {});
        console.log(qs.stringify(querys));
        try {
            await axios.get(
                "http://localhost:5000/api/user/signin?" + qs.stringify(querys)
            );
            document.cookie = `userid=${querys["userid"]}`;
            load = 1;
        } catch (e) {
            console.log(e);
        }
    }

    async function handleSignup() {
        const ids = ["userid", "password", "nickname", "age", "gender"];
        const querys = ids.reduce((res, key) => {
            res[key] = document.getElementById(key).value;
            return res;
        }, {});
        // console.log(qs.stringify(querys));
        await axios.get(
            "http://localhost:5000/api/user/signup?" + qs.stringify(querys)
        );
    }
</script>

<TabContent>
    <TabPane tabId="signin" tab="Signin" active>
        <br />
        <InputGroup>
            <InputGroupText>ID</InputGroupText>
            <Input id="userid" placeholder="ID" />
        </InputGroup>
        <br />
        <InputGroup>
            <InputGroupText>Password</InputGroupText>
            <Input id="password" type="password" placeholder="password" />
        </InputGroup>
        <br />
        <Button on:click={handleSignin}>로그인</Button>
    </TabPane>
    <TabPane tabId="signup" tab="Signup">
        <br />
        <InputGroup>
            <InputGroupText>ID</InputGroupText>
            <Input id="userid" placeholder="ID" />
        </InputGroup>
        <br />
        <InputGroup>
            <InputGroupText>Password</InputGroupText>
            <Input id="password" type="password" placeholder="password" />
        </InputGroup>
        <br />
        <InputGroup>
            <InputGroupText>nickname</InputGroupText>
            <Input id="nickname" placeholder="nicknname" />
        </InputGroup>
        <br />
        <InputGroup>
            <InputGroupText>나이</InputGroupText>
            <Input id="age" placeholder="age" />
        </InputGroup>
        <br />
        <InputGroup>
            <InputGroupText>성별</InputGroupText>
            <Input type="select" name="gender" id="gender">
                <option>남자</option>
                <option>여자</option>
            </Input>
        </InputGroup>
        <br />
        <Button on:click={handleSignup}>회원 가입</Button>
    </TabPane>
</TabContent>
