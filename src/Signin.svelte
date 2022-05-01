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
        const ids = ["signin_userid", "signin_password"];
        const querys = ids.reduce((res, id) => {
            const key = id.slice(7);
            res[key] = document.getElementById(id).value;
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
        const ids = [
            "signup_userid",
            "signup_password",
            "signup_nickname",
            "signup_age",
            "signup_gender",
        ];
        const querys = ids.reduce((res, id) => {
            const key = id.slice(7);
            console.log(document.getElementById(id));
            res[key] = document.getElementById(id).value;
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
    <TabPane id="signin" tabId="signin" tab="Sign In" active>
        <br />
        <InputGroup>
            <InputGroupText>ID</InputGroupText>
            <Input id="signin_userid" placeholder="ID" required />
        </InputGroup>
        <br />
        <InputGroup>
            <InputGroupText>Password</InputGroupText>
            <Input
                id="signin_password"
                type="password"
                placeholder="password"
                required
            />
        </InputGroup>
        <br />
        <Button on:click={handleSignin}>로그인</Button>
    </TabPane>
    <TabPane id="signup" tabId="signup" tab="Sign Up">
        <br />
        <InputGroup>
            <InputGroupText>ID</InputGroupText>
            <Input id="signup_userid" placeholder="ID" required />
        </InputGroup>
        <br />
        <InputGroup>
            <InputGroupText>Password</InputGroupText>
            <Input
                id="signup_password"
                type="password"
                placeholder="password"
                required
            />
        </InputGroup>
        <br />
        <InputGroup>
            <InputGroupText>nickname</InputGroupText>
            <Input id="signup_nickname" placeholder="nicknname" required />
        </InputGroup>
        <br />
        <InputGroup>
            <InputGroupText>나이</InputGroupText>
            <Input id="signup_age" placeholder="age" required />
        </InputGroup>
        <br />
        <InputGroup>
            <InputGroupText>성별</InputGroupText>
            <Input id="signup_gender" type="select" name="gender" required>
                <option>남자</option>
                <option>여자</option>
            </Input>
        </InputGroup>
        <br />
        <Button on:click={handleSignup}>회원 가입</Button>
    </TabPane>
</TabContent>
