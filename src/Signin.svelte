<script>
    import {
        TabContent,
        TabPane,
        Input,
        InputGroup,
        InputGroupText,
        Button,
    } from "sveltestrap";
    import { serverUrl, uid } from "./store";
    import qs from "qs";
    import axios from "axios";

    export let isLoggedIn;
    export let serverMsg;

    const handleSignin = async () => {
        const ids = ["userid", "password"];
        const querys = ids.reduce((res, key) => {
            res[key] = document.getElementById(key).value;
            return res;
        }, {});
        try {
            const res = await axios.get(
                $serverUrl + "/api/user/signin?" + qs.stringify(querys),
                { withCredentials: true }
            );
            const fromServer = res.data;
            if (fromServer.success) {
                isLoggedIn = true;
                $uid = fromServer.uid;
            } else {
                serverMsg = fromServer.message;
            }
        } catch (e) {
            console.log(e);
        }
    };

    async function handleSignup() {
        const ids = ["userid", "password", "nickname", "age", "gender"];
        const querys = ids.reduce((res, key) => {
            res[key] = document.getElementById(key).value;
            return res;
        }, {});
        console.log(querys);
        const res = await axios.get(
            $serverUrl + "/api/user/signup?" + qs.stringify(querys)
        );
        if (res.data.success) {
            serverMsg = "회원가입 성공!";
        } else {
            serverMsg = res.data.message;
        }
    }
</script>

<TabContent>
    <TabPane tabId="signin" tab="Sign In" active>
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
    <TabPane tabId="signup" tab="Sign Up">
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
