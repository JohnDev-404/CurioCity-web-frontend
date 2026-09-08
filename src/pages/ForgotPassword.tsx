import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaEnvelope, FaCheckCircle } from 'react-icons/fa';
import toast from 'react-hot-toast';

const forgotSchema = z.object({
  email: z.string().email('Invalid email'),
});

type ForgotForm = z.infer<typeof forgotSchema>;

const ForgotPassword = () => {
  const { forgotPassword } = useAuth();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ForgotForm>({
    resolver: zodResolver(forgotSchema),
  });

  const onSubmit = async (data: ForgotForm) => {
    try {
      await forgotPassword(data.email);
      setIsSubmitted(true);
      toast.success('📨 Reset link sent! Check your email.');
    } catch (err) {
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-white to-gold-50/30 py-12 px-4">
      <div className="max-w-md mx-auto">
        {/* Brand header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-3xl font-black text-primary-900 group">
            <span className="group-hover:rotate-12 transition-transform duration-500">🌆</span>
            Curio<span className="text-terracotta-500">City</span>
          </Link>
          <p className="text-gray-500 text-sm mt-1">Don't worry, we've got you</p>
        </div>

        {/* Reset Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border-2 border-cream-200 p-8 md:p-10">
          {!isSubmitted ? (
            <>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-black text-primary-900">🔑 Reset password</h2>
                <p className="text-gray-500 text-sm mt-1">
                  Enter your email and we'll send you a magic link
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <FaEnvelope className="inline mr-2 text-terracotta-500" />
                    Email
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="you@example.com"
                    className={`input-field w-full ${errors.email ? 'border-red-400 focus:ring-red-500' : ''}`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <span>⚠️</span> {errors.email.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-3 text-base flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <span>Send Reset Link</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </>
                  )}
                </button>
              </form>
            </>
          ) : (
            // Success state
            <div className="text-center py-8">
              <div className="text-6xl mb-4 animate-bounce">📨</div>
              <FaCheckCircle className="text-emerald-500 text-5xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary-900">Check your inbox!</h3>
              <p className="text-gray-500 mt-2 text-sm">
                We've sent a password reset link to your email.
                <br />
                It should arrive in a few minutes.
              </p>
              <div className="mt-8 space-y-3">
                <Link
                  to="/login"
                  className="inline-block btn-primary w-full text-center"
                >
                  Back to Login
                </Link>
                <p className="text-xs text-gray-400">
                  Didn't receive it?{' '}
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-terracotta-500 hover:underline font-semibold"
                  >
                    Try again
                  </button>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4 mt-6 text-xs text-gray-400">
          <span className="flex items-center gap-1">🧠 200+ Hobbies</span>
          <span className="w-px h-4 bg-gray-300"></span>
          <span className="flex items-center gap-1">🌍 50+ Countries</span>
          <span className="w-px h-4 bg-gray-300"></span>
          <span className="flex items-center gap-1">🤝 100% Weirdo Friendly</span>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;