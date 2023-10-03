import { useState, useEffect } from 'react';
import api from '../../utils/api';

function Categoria() {
  const [categoria, setCategoria] = useState([]);

  useEffect(() => {
    api.get('Category').then((response) => {
      setCategoria(response.data);
    });

  }, []);

  return (
    <div>
      <h2>Categorias</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          {categoria.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Categoria;
