import { serverUrl } from "./store";
import axios from "axios";
export const update = (introduce, func) => async () => {
    const { title, text } = introduce;
    const res = await axios.get(
        $serverUrl +
            `/api/intro/update/${introduce._id}?` +
            JSON.stringify({
                ...introduce,
                title,
                text,
            }),
        { withCredentials: true }
    );
    if (!res.data.success) return alert("수정 실패");
    alert("수정되었습니다.");
    tempText = text;
    tempTitle = title;
    func();
};

export const create = (introduce, func) => async () => {
    const { title, text } = introduce;
    const res = await axios.get(
        $serverUrl +
            `/api/intro/create?` +
            JSON.stringify({
                title,
                text,
            }),
        { withCredentials: true }
    );
    if (!res.data.success) return alert("작성 실패");
    alert("작성 성공");
    func();
};

export const del = (introduce, func) => async () => {
    const res = await axios.get(
        $serverUrl + `/api/intro/delete/${introduce._id}`,
        { withCredentials: true }
    );
    if (!res.data.success) return alert("삭제 실패");
    alert("삭제 성공");
    func();
};

export const doLike = (introduce, func) => async () => {
    const res = await axios.get(
        $serverUrl + `/api/intro/like/${introduce._id}`,
        { withCredentials: true }
    );
    if (!res.data.success) return alert("잠시 후 다시 시도해주세요.");
    func();
};

export const unLike = (introduce, func) => async () => {
    const res = await axios.get(
        $serverUrl + `/api/intro/unlike/${introduce._id}`,
        { withCredentials: true }
    );
    if (!res.data.success) return alert("잠시 후 다시 시도해주세요.");
    func();
};
