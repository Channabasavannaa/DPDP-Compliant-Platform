import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import AdminTable from "../components/AdminTable";
import api from "../services/api";

function Admin() {
    const [adminKey, setAdminKey] = useState("");
    const [inputKey, setInputKey] = useState("");
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");

    async function fetchUsers(key) {
        try {
            const res = await api.get("/admin/users", {
                headers: {
                    "x-admin-key": key
                }
            });

            setUsers(res.data);
            setError("");
        } catch (err) {
            setError(err.response?.data?.message || "Unable to fetch users");
        }
    }

    useEffect(() => {
        if (adminKey) {
            fetchUsers(adminKey);
        }
    }, [adminKey]);

    async function revoke(id) {
        await api.patch(
            `/admin/users/${id}/revoke`,
            {},
            {
                headers: {
                    "x-admin-key": adminKey
                }
            }
        );

        fetchUsers(adminKey);
    }

    if (!adminKey) {
        return (
            <>
                <Navbar />

                <div className="container">

                    <div className="card">

                        <h2>Admin Login</h2>

                        <input
                            placeholder="Enter Admin Key"
                            value={inputKey}
                            onChange={(e) => setInputKey(e.target.value)}
                        />

                        <button onClick={() => setAdminKey(inputKey)}>
                            Login
                        </button>

                        {error && <p>{error}</p>}

                    </div>

                </div>
            </>
        );
    }

    return (
        <>
            <Navbar />

            <div className="container">

                <h2>Registered Users</h2>

                <AdminTable users={users} revoke={revoke} />

            </div>
        </>
    );
}

export default Admin;