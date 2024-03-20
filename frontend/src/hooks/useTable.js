import { useState } from "react";
import axios from "axios";

const backendServerUrl = import.meta.env.VITE_BACKEND_SERVER_URL;

export const useTable = () => {
    const [list, setList] = useState([]);

    const fetchList = async () => {
        try {
            const ls = await axios.get(`${backendServerUrl}fetching-table-content`);
            setList(ls.data);
        } catch (err) {
            console.log(err);
            console.log("Something went wrong!!!");
        }
    }

    return { list, fetchList }
}