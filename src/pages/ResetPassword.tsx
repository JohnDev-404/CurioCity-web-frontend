import { useSearchParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAuth } from '../hooks/useAuth';
import { useState } from 'react';

const resetSchema = z.object({
  newPassword: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string().min(6, 'Confirm password'),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type ResetForm = z.infer<typeof resetSchema>;

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token') || '';
  const { resetPassword } = useAuth();
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm<ResetForm>({
    resolver: zodResolver(resetSchema),
  });

  const onSubmit = async (data: ResetForm) => {
    try {
      await resetPassword(token, data.newPassword);
      setMessage('Password updated successfully!');
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setMessage('Invalid or expired token');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded">
      <h2 className="text-2xl font-bold mb-4">Set new password</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('newPassword')} type="password" placeholder="New password" className="w-full p-2 border mb-2" />
        {errors.newPassword && <p className="text-red-500">{errors.newPassword.message}</p>}
        <input {...register('confirmPassword')} type="password" placeholder="Confirm password" className="w-full p-2 border mb-2" />
        {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Reset Password</button>
      </form>
      {message && <p className="mt-2 text-green-600">{message}</p>}
    </div>
  );
};

export default ResetPassword;