import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAuth } from '../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FaEnvelope, FaLock, FaArrowRight } from 'react-icons/fa';

const loginSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginForm = z.infer<typeof loginSchema>;

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    try {
      await login(data.email, data.password);
      toast.success('👋 Welcome back, curious mind!');
      navigate('/');
    } catch (err: any) {
      toast.error(err.response?.data?.error || 'Login failed. Please check your credentials.');
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
          <p className="text-gray-500 text-sm mt-1">Welcome back, curious mind</p>
        </div>

        {/* Login Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border-2 border-cream-200 p-8 md:p-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-primary-900">🔐 Sign in</h2>
            <p className="text-gray-500 text-sm mt-1">Your next obsession is waiting</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Email */}
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

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <FaLock className="inline mr-2 text-terracotta-500" />
                Password
              </label>
              <input
                {...register('password')}
                type="password"
                placeholder="Your password"
                className={`input-field w-full ${errors.password ? 'border-red-400 focus:ring-red-500' : ''}`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <span>⚠️</span> {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full py-3 text-base flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                'Signing in...'
              ) : (
                <>
                  <span>Sign In</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-6 text-center space-y-2">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="text-terracotta-500 hover:text-terracotta-600 font-semibold hover:underline transition-colors">
                Join the curiosity
              </Link>
            </p>
            <Link to="/forgot-password" className="text-sm text-gray-400 hover:text-primary-600 transition-colors">
              Forgot your password?
            </Link>
          </div>
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

export default Login;