import React from 'react';

const UserList = ({ users = [] }) => {
    console.log(users);

    if (!Array.isArray(users)) {
        console.error('Se espera que users sea un array', users);
        return null;
    }

    return (
        <div style={{ marginTop: '20px' }}>
            {users.map((user, idx) => (
                <div
                    key={idx}
                    style={{
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        padding: '10px',
                        marginBottom: '10px',
                        backgroundColor: '#f9f9f9'
                    }}
                >
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Age:</strong> {user.age}</p>
                    <p><strong>Phone:</strong> {user.tel}</p>
                    <p><strong>Date of Birth:</strong> {new Date(user.fechanacimiento).toLocaleDateString()}</p>
                    <p><strong>Address:</strong> {user.direccion}</p>
                    <p><strong>Gender:</strong> {user.genero}</p>
                </div>
            ))}
        </div>
    );
};

export default UserList;

