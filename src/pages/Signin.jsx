

import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthProvider/useAuth";



const Signin = () => {

    const auth = useAuth()
    const navigate = useNavigate()

   async function onFinish(){
        try{

            auth.authenticate()

            navigate('/')
        }catch(error){
            console.log(error)
        }
   }
    

return (
    <form onSubmit={onFinish}>
    <div>
        <label>Email:</label>
        <input
            type="email"
            name='email'
            onChange={(e)=>(e.target.value)}
            required
        />
    </div>
    <div>
        <label>Password:</label>
        <input
            type="password"
            name='password'
            onChange={(e)=>(e.target.value)}
            required
        />
    </div>
    
    <button type="submit">Adicionar Item</button>
</form>
)
    
}

export default Signin