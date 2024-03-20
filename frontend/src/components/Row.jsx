import Editor from "@monaco-editor/react";
import PropTypes from "prop-types";
import { format } from "date-fns";

export default function Row({ id, username, lang, code, stdin, createdAt }) {
    return (
        <tr className="border-b border-gray-700">
            <td className="px-4 py-2 text-white">{id}</td>
            <td className="px-4 py-2 text-white">{username}</td>
            <td className="px-4 py-2 text-white">{lang}</td>
            <td className="px-4 py-2">
                <div className="overflow-hidden rounded-lg">
                    <Editor
                        theme="dark"
                        width={"45vh"}
                        height={'8vh'}
                        defaultLanguage={lang}
                        defaultValue={code.substring(0, 100)}
                        readOnly={true}
                        options={{ minimap: { enabled: false } }}
                    />
                </div>
            </td>
            <td className="px-4 py-2">
                <div className="overflow-hidden rounded-lg">
                    <Editor
                        theme="dark"
                        width={"45vh"}
                        height={'6vh'}
                        defaultLanguage={lang}
                        defaultValue={stdin.substring(0, 100)}
                        options={{ minimap: { enabled: false } }}
                    />
                </div>
            </td>
            <td className="px-4 py-2 text-white">{format(createdAt, "MMMM d, yyyy, HH:mm:ss 'UTC'")}</td>
        </tr>


    );
}

Row.propTypes = {
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    code: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    lang: PropTypes.string.isRequired,
    stdin: PropTypes.string.isRequired,
    createdAt: PropTypes.oneOfType([
        PropTypes.instanceOf(Date),
        PropTypes.string
    ]).isRequired
}