import { useState } from "react";
import axios from "axios";

const backendServerUrl = import.meta.env.VITE_BACKEND_SERVER_URL;

export const useAdd = () => {
    const [lang, setLang] = useState('');
    const [username, setUsername] = useState('');
    const [code, setCode] = useState('');
    const [stdin, setStdin] = useState('');

    const handleChangeLang = (e) => {
        setLang(e.target.value);
    }
    const handleChangeUsername = (e) => {
        setUsername(e.target.value);
    }
    const handleChangeCode = (code) => {
        setCode(code);
    }

    const handleChangeInput = (code) => {
        setStdin(code);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!username) return alert("Enter the username");
        else if (!lang) return alert("Select Language");
        else if (!code) return alert("Write code");
        else if (!stdin) return alert("Give Input");
        try {
            await axios.post(`${backendServerUrl}add-form`, {
                username, code, lang, stdin
            });
            alert("Added Successfully!");
            setCode('')
            setLang('')
            setStdin('')
            setUsername('')
        } catch (err) {
            console.log(err);
            console.log("Something Went wrong!!!");
        }
    }
    return { lang, code, username, stdin, handleChangeCode, handleChangeLang, handleChangeUsername, handleChangeInput, handleSubmit }
}