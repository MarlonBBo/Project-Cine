import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthProvider/useAuth';
import { Link } from 'react-router-dom';

interface FormData {
  email: string;
  password: string;
  name: string
}

export const Signup: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ email: '', password: '', name: '' });
  const auth = useAuth();
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password, name } = formData;
    try {
      await auth.register(email, password, name);
      navigate('/');
      window.location.reload();
    } catch (error) {
      console.error('Erro ao autenticar:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-96 bg-transparent m-10 rounded-md">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-6 m-10 bg-slate-300 shadow-md rounded">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <label className="block mb-2">
          <span className="text-gray-700">Email</span>
          <input
            type="email"
            name="email"
            className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm pl-4"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Password</span>
          <input
            type="password"
            name="password"
            className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm pl-4"
            value={formData.password}
            onChange={handleChange}
            placeholder="******"
            required
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Name</span>
          <input
            type="text"
            name="name"
            className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm pl-4"
            value={formData.name}
            onChange={handleChange}
            placeholder=""
            required
          />
        </label>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Entrar
        </button>
        <div className='flex flex-row gap-1 text-sm justify-center mt-2'><p>Já tem uma conta?</p> <Link to="/signin" className='text-blue-500 underline'>click aqui</Link></div>
      </form>
    </div>
  );
};