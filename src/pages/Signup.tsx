import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const signupSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type SignupForm = z.infer<typeof signupSchema>;

const Signup = () => {
  const { register: signupUser } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<SignupForm>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupForm) => {
    try {
      await signupUser(data);
      navigate('/');
    } catch (err) {
      alert('Signup failed');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded">
      <h2 className="text-2xl font-bold mb-4">Create your CurioCity account</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('fullName')} placeholder="Full Name" className="w-full p-2 border mb-2" />
        {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}
        <input {...register('email')} placeholder="Email" className="w-full p-2 border mb-2" />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <input {...register('password')} type="password" placeholder="Password" className="w-full p-2 border mb-2" />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        <button type="submit" className="w-full bg-green-600 text-white p-2 rounded">Sign Up</button>
      </form>
      <p className="mt-4 text-sm">
        Already have an account? <Link to="/login" className="text-blue-600">Login</Link>
      </p>
    </div>
  );
};

export default Signup;