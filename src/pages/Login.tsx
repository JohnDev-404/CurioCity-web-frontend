import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAuth } from '../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

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
      toast.success('Welcome back!');
      navigate('/');
    } catch (err: any) {
      toast.error(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded">
      <h2 className="text-2xl font-bold mb-4">Login to CurioCity</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register('email')} placeholder="Email" className="input-field" />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        <input {...register('password')} type="password" placeholder="Password" className="input-field" />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        <button type="submit" className="btn-primary w-full">Login</button>
      </form>
      <p className="mt-4 text-sm">
        Don't have an account? <Link to="/signup" className="text-primary-600">Sign up</Link>
      </p>
      <p className="mt-2 text-sm">
        <Link to="/forgot-password" className="text-primary-600">Forgot password?</Link>
      </p>
    </div>
  );
};

export default Login;