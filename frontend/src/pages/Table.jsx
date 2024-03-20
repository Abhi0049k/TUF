import Row from "../components/Row";
import { useEffect } from "react";
import { useTable } from "../hooks/useTable";

export default function Table() {
    const { list, fetchList } = useTable();

    useEffect(() => {
        fetchList();
    }, []);

    return (
        <div className="bg-gray-800 w-full min-h-screen flex justify-center">
            <div className="flex flex-col h-fit items-center mt-4 bg-gray-700 p-6 rounded-lg">
                <h1 className="text-2xl text-white mb-4">Table</h1>
                <div className="overflow-x-auto w-full">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-600 text-white">
                                <th className="py-2 px-4">ID</th>
                                <th className="py-2 px-4">Username</th>
                                <th className="py-2 px-4">Language</th>
                                <th className="py-2 px-4">Code</th>
                                <th className="py-2 px-4">Input</th>
                                <th className="py-2 px-4">Timestamp</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.length && list.map(el => <Row key={el.id} {...el} />)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}