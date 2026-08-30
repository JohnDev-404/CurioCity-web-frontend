import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAuth } from '../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';

const loginSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginForm = z.infer<typeof loginSchema>;

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    try {
      await login(data.email, data.password);
      navigate('/');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded">
      <h2 className="text-2xl font-bold mb-4">Login to CurioCity</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('email')} placeholder="Email" className="w-full p-2 border mb-2" />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <input {...register('password')} type="password" placeholder="Password" className="w-full p-2 border mb-2" />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Login</button>
      </form>
      <p className="mt-4 text-sm">
        Don't have an account? <Link to="/signup" className="text-blue-600">Sign up</Link>
      </p>
      <p className="mt-2 text-sm">
        <Link to="/forgot-password" className="text-blue-600">Forgot password?</Link>
      </p>
    </div>
  );
};

export default Login;