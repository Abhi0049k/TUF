import Editor from "@monaco-editor/react";
import { useAdd } from "../hooks/useAdd";

export default function Form() {
    const { username, code, lang, stdin, handleChangeCode, handleChangeLang, handleChangeUsername, handleChangeInput, handleSubmit } = useAdd();

    return (
        <div className="bg-gray-800 w-full min-h-screen flex justify-center items-center">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4 bg-gray-700 p-6 rounded-lg">
                <label htmlFor="username" className="text-white">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Enter your username"
                    value={username}
                    onChange={handleChangeUsername}
                    className="w-full h-12 outline-none border-b text-base pl-4 rounded-lg border-gray-600 focus:border-teal-500"
                />
                <label htmlFor="lang" className="text-white">Language</label>
                <select
                    id="lang"
                    value={lang}
                    onChange={handleChangeLang}
                    className="w-full h-12 outline-none border-b text-base pl-4 rounded-lg border-gray-600 focus:border-teal-500"
                >
                    <option value="">Select a language</option>
                    <option value="cpp">C++</option>
                    <option value="java">Java</option>
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                </select>
                <label htmlFor="code" className="text-white">Code</label>
                <div className="overflow-hidden rounded-lg">
                    <Editor
                        defaultValue={code}
                        width={"60vh"}
                        height="30vh"
                        defaultLanguage={lang}
                        onChange={handleChangeCode}
                        options={{ minimap: { enabled: false } }}
                    />
                </div>
                <label htmlFor="input" className="text-white">Input</label>
                <div className="overflow-hidden rounded-lg">

                    <Editor
                        defaultValue={code}
                        width={"60vh"}
                        height={"10vh"}
                        defaultLanguage={stdin}
                        onChange={handleChangeInput}
                        options={{ minimap: { enabled: false } }}
                    />
                </div>
                <input
                    type="submit"
                    value="Add"
                    className="bg-teal-500 text-white w-full h-12 outline-none text-xl rounded-lg cursor-pointer hover:bg-teal-600"
                />
            </form>
        </div>

    );
}