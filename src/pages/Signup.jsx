import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Signup = () => {

    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: ''
    });

    const [status, setStatus] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try{
            const response = await fetch('http://localhost:3000/signup', {
              method: 'POST',
              headers: { 
                'Content-Type': 'application/json' // Outros cabeçalhos, se necessário
              },
              body: JSON.stringify(formData) // Converte os dados do formulário para JSON
            });

            if(!response.ok){
                throw new Error('Erro na requisição: ' + response.statusText);
            }
            const result = await response.json();
            setStatus('Postagem bem-sucedida!');
            console.log('Dados retornados:', result)
            navigate('/')
            ;
    }
        catch (error) {
            setStatus('Falha na postagem.');
            console.error('Erro:', error);
        }
}

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            
            <button type="submit">Adicionar Item</button>
            <p>Status: {status}</p>
        </form>
    );
};

export default Signup