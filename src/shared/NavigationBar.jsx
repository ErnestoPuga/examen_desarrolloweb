import { IoHomeOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const NavigationBar = ({ children, setSearchTerm }) => {
  const navigate = useNavigate();

  const handleNavigate = (route) => {
    if (route === 'dashboard') {
      if (setSearchTerm) {
        setSearchTerm(''); // Reseteamos el término de búsqueda al navegar al dashboard
      }
      navigate('/');
    } else if (route === 'register') {
      navigate('/register');
    }
  };

  return (
    <div style={{ width: '100%', height: '40px', boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div onClick={() => handleNavigate("dashboard")} style={{ display: 'flex', cursor: "pointer", marginRight: '20px' }}>
          <IoHomeOutline />
          <p>Dashboard</p>
        </div>
        <div onClick={() => handleNavigate("register")} style={{ display: 'flex', cursor: "pointer", marginRight: '20px' }}>
          <p>Registro</p>
        </div>
        <input
          style={{ border: "2px black solid", width: "180px", height: '25px', borderRadius: '10px', marginRight: '20px' }}
          type="text"
          placeholder="Filtrar por nombre"
          onChange={(e) => setSearchTerm && setSearchTerm(e.target.value)} // Solo llamar setSearchTerm si está definido
        />
        {children}
      </div>
    </div>
  );
};

export default NavigationBar;
