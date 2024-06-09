import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from './components/Form';
import UserList from './components/UserList';
import formImage from '../../assets/form.svg';
import AskQuestion from '../users/components/AskQuestion';


const Register = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const handleNavigateDashboard = () => {
    navigate('/');
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:3003/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center' }}>
        <img src={formImage} alt="formImage" width={150} />
      </div>
      <Form fetchUsers={fetchUsers} />
      <button
        onClick={handleNavigateDashboard}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: 'blue',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Regresar al Dashboard
      </button>
      <UserList users={users} />
    </div>
  );
};

export default Register;
