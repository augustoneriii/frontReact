import { useState } from 'react';
import InputGroup from '../../components/InputGroup';
import api from '../../utils/api'

function AddCategoria() {
  const [categoria, setCategoria] = useState({});

  function handleChange(e) {
    setCategoria({ ...categoria, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    await Object.keys(categoria).forEach((key) => formData.append(key, categoria[key]));

    formData.append('categoria', JSON.stringify(categoria));

    const data = await api.post(`/Category`, formData, {
      headers: {
        'Content-Type': 'application/json' 
      }
    }).then((response) => {
      return response.data;
    }).catch((err) => {
      alert(err.response.data);
      return err.response.data;
    })
    alert(data.message);
  }

  return (
    <section>
      <div>
        <h1>Cadastre uma Categoria</h1>
        <p>Depois ela ficará disponível para utilizar</p>
      </div>
      <form onSubmit={handleSubmit}>
        <InputGroup
          type='text'
          label='Nome'
          placeholder='Digite seu nome'
          name='name'
          handleChange={handleChange}
        />
        <button type='submit'>cadastrar</button>
      </form>
    </section>
  )
}

export default AddCategoria
