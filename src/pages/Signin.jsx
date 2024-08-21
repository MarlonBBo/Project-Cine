import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Signin = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try{
            const response = await fetch('http://localhost:3000/signin', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' 
              },
              body: JSON.stringify({email, password}) 
            });
        
            const token = response

            if(!response.ok){
                throw new Error('Credenciais inválidas')
            }else{
                
                localStorage.setItem('token', token);
                console.log(await response.json()) 
                navigate('/');
            }
            
    }
        catch (error) {
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
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                required
            />
        </div>
        <div>
            <label>Password:</label>
            <input
                type="password"
                name='password'
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                required
            />
        </div>
        
        <button type="submit">Adicionar Item</button>
    </form>
);
}

export default Signin