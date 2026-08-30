import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const forgotSchema = z.object({
  email: z.string().email('Invalid email'),
});

type ForgotForm = z.infer<typeof forgotSchema>;

const ForgotPassword = () => {
  const { forgotPassword } = useAuth();
  const [message, setMessage] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm<ForgotForm>({
    resolver: zodResolver(forgotSchema),
  });

  const onSubmit = async (data: ForgotForm) => {
    try {
      await forgotPassword(data.email);
      setMessage('Reset link sent to your email');
    } catch (err) {
      setMessage('Error sending reset link');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded">
      <h2 className="text-2xl font-bold mb-4">Reset your password</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('email')} placeholder="Email" className="w-full p-2 border mb-2" />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Send Reset Link</button>
      </form>
      {message && <p className="mt-2 text-green-600">{message}</p>}
      <p className="mt-4 text-sm">
        <Link to="/login" className="text-blue-600">Back to Login</Link>
      </p>
    </div>
  );
};

export default ForgotPassword;