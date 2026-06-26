function AdminTable({ users, revoke }) {

    return (

        <table>

            <thead>

                <tr>

                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Consent</th>
                    <th>Created</th>
                    <th>Action</th>

                </tr>

            </thead>

            <tbody>

                {users.map(user => (

                    <tr key={user.id}>

                        <td>{user.full_name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>

                        <td>

                            {user.consent===1?

                            <span className="green">
                                Active
                            </span>

                            :

                            <span className="red">
                                Revoked
                            </span>

                            }

                        </td>

                        <td>

                            {new Date(user.created_at).toLocaleString()}

                        </td>

                        <td>

                            {user.consent===1?

                            <button
                            onClick={()=>revoke(user.id)}
                            >
                                Revoke
                            </button>

                            :

                            <span className="badge">

                                Already Revoked

                            </span>

                            }

                        </td>

                    </tr>

                ))}

            </tbody>

        </table>

    );

}

export default AdminTable;