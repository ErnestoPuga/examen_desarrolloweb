import React, { useState } from 'react';

const Form = ({ fetchUsers }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    age: '',
    tel: '',
    fechanacimiento: '',
    direccion: '',
    genero: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3003/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (response.status === 201) {
        alert('User registered successfully');
        fetchUsers(); // Actualiza la lista de usuarios después de registrar un nuevo usuario
      } else {
        alert('Error registering user');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <div style={{ marginBottom: '10px' }}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleInputChange}
          required
          style={{ marginLeft: '10px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleInputChange}
          required
          style={{ marginLeft: '10px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={form.age}
          onChange={handleInputChange}
          required
          style={{ marginLeft: '10px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Phone:</label>
        <input
          type="tel"
          name="tel"
          value={form.tel}
          onChange={handleInputChange}
          required
          style={{ marginLeft: '10px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Date of Birth:</label>
        <input
          type="date"
          name="fechanacimiento"
          value={form.fechanacimiento}
          onChange={handleInputChange}
          required
          style={{ marginLeft: '10px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Address:</label>
        <input
          type="text"
          name="direccion"
          value={form.direccion}
          onChange={handleInputChange}
          required
          style={{ marginLeft: '10px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Gender:</label>
        <select
          name="genero"
          value={form.genero}
          onChange={handleInputChange}
          required
          style={{ marginLeft: '10px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
        >
          <option value="">Select...</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <button type="submit" style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Register
      </button>
    </form>
  );
};

export default Form;
