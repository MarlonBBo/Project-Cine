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
                'Content-Type': 'application/json' 
              },
              body: JSON.stringify(formData) 
            });

            if (!response.ok) {
                throw new Error('Senha muito curta');
              }
            setStatus('criação de usuãrio bem-sucedida!');
            navigate('/signin');
    }
        catch (error) {
            setStatus('Falha ao criar usuário.');
            console.error('Erro:', error);
        }
        console.log(status)
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
            
        </form>
    );
};

export default Signup