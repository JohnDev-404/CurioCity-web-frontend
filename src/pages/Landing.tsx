import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaRocket, FaHandshake, FaMagic, FaUserFriends, FaGlobe, FaDice, FaArrowRight, FaRedo } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Landing = () => {
  const { user } = useAuth();

  // ----- HOBBY FLIP (Interactive 3D) -----
  const hobbyList = ['🎨 Painting', '🎸 Guitar', '✍️ Writing', '🧘 Yoga', '🍳 Cooking', '🌱 Gardening', '📸 Photography', '🪡 Knitting'];
  const [currentHobby, setCurrentHobby] = useState(hobbyList[0]);
  const [isFlipping, setIsFlipping] = useState(false);

  const flipHobby = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    let newHobby;
    do {
      newHobby = hobbyList[Math.floor(Math.random() * hobbyList.length)];
    } while (newHobby === currentHobby);

    setTimeout(() => {
      setCurrentHobby(newHobby);
      setIsFlipping(false);
    }, 300);
  };

  // ----- FEATURES DATA (Index Cards) -----
  const features = [
    {
      icon: <FaMagic className="text-3xl" />,
      title: 'Hobby Roulette',
      desc: "Spin the wheel. Get obsessed with something you didn't even know existed.",
      border: 'border-terracotta-400'
    },
    {
      icon: <FaHandshake className="text-3xl" />,
      title: 'Skill Bartering',
      desc: 'Trade guitar lessons for sourdough starter. No money, just vibes.',
      border: 'border-gold-400'
    },
    {
      icon: <FaUserFriends className="text-3xl" />,
      title: 'Weirdo Matching',
      desc: 'Find your exact brand of weird. The niche you never knew had a club.',
      border: 'border-primary-400'
    },
    {
      icon: <FaGlobe className="text-3xl" />,
      title: 'Global Chaos',
      desc: 'Connect with hobbyists in 50+ countries. Yes, time zones are a nightmare.',
      border: 'border-terracotta-300'
    },
  ];

  // ----- HOBBY ORACLE QUIZ -----
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [quizResult, setQuizResult] = useState<string | null>(null);

  const quizQuestions = [
    {
      question: "What's your ideal weekend vibe?",
      options: ['🛋️ Cozy & Chill', '🌿 Outdoorsy', '🎨 Creative Mess', '🏃 Active & Sweaty']
    },
    {
      question: "What's your creative energy like?",
      options: ['☀️ Morning person', '🌙 Night owl', '🔄 Balanced', '💥 All over the place']
    },
    {
      question: "Pick your mood:",
      options: ['✨ Chill & Relaxed', '🔥 Intense & Focused', '🧘 Mindful & Zen', '🎉 Playful & Silly']
    },
    {
      question: "What do you want to create?",
      options: ['🖌️ Visual Art', '🍳 Delicious Food', '🎵 Music & Sounds', '📝 Words & Stories']
    },
    {
      question: "Your perfect hobby partner is...",
      options: ['🤝 Collaborative', '🧠 Challenging', '😂 Funny & Light', '🫂 Supportive']
    }
  ];

  const quizResults = [
    { title: 'The Cozy Creator', hobby: 'Knitting & Crochet', desc: 'You thrive in warm, quiet spaces. Your ideal hobby involves repetitive, soothing motions that let your mind wander while your hands create something beautiful and functional.', emoji: '🧶', color: 'from-rose-400 to-orange-300' },
    { title: 'The Outdoor Maestro', hobby: 'Hiking & Nature Photography', desc: 'The wild calls your name. You need fresh air, open skies, and the thrill of discovery. Your hobby should take you places – literally.', emoji: '🏔️', color: 'from-emerald-400 to-teal-300' },
    { title: 'The Creative Rebel', hobby: 'Street Art & Graffiti', desc: 'Rules are meant to be broken, and canvases are meant to be splattered. You need an outlet that\'s messy, expressive, and just a little bit chaotic.', emoji: '🎨', color: 'from-purple-400 to-pink-300' },
    { title: 'The Zen Gardener', hobby: 'Bonsai & Indoor Plants', desc: 'Patience is your superpower. You find peace in nurturing things that grow slowly. Your hobby is a meditation – and your plants are your students.', emoji: '🌱', color: 'from-green-400 to-emerald-300' },
    { title: 'The Culinary Explorer', hobby: 'Sourdough & Fermentation', desc: 'Your kitchen is a laboratory. You love the science of flavor and the magic of transformation. Waiting for dough to rise is your idea of a good time.', emoji: '🍞', color: 'from-amber-400 to-orange-300' },
    { title: 'The Sonic Alchemist', hobby: 'Music Production & Beat Making', desc: 'You hear rhythm in everything. Your hobby is about translating emotion into sound – creating something out of nothing, one beat at a time.', emoji: '🎵', color: 'from-indigo-400 to-purple-300' },
    { title: 'The Word Wizard', hobby: 'Creative Writing & Poetry', desc: 'You see the world in stories. Your hobby is about capturing moments, feelings, and dreams – and turning them into words that resonate with others.', emoji: '✍️', color: 'from-blue-400 to-indigo-300' },
    { title: 'The Social Butterfly', hobby: 'Improv & Stand-up Comedy', desc: 'You live for the spotlight and the laughter. Your hobby should be interactive, unpredictable, and full of people who appreciate your unique brand of chaos.', emoji: '🎭', color: 'from-yellow-400 to-amber-300' },
  ];

  const handleQuizAnswer = (answerIndex: number) => {
    const newAnswers = [...quizAnswers, answerIndex];
    setQuizAnswers(newAnswers);

    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      // Calculate result based on answers
      const resultIndex = newAnswers.reduce((sum, val) => sum + val, 0) % quizResults.length;
      setQuizResult(quizResults[resultIndex].title);
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizAnswers([]);
    setQuizResult(null);
  };

  const getCurrentResult = () => {
    return quizResults.find(r => r.title === quizResult) || quizResults[0];
  };

  // ----- FEATURES DATA (Index Cards) -----
  // (Already defined above)

  return (
    <div className="min-h-screen flex flex-col bg-cream-50 font-sans">
      <Navbar />

      {/* ---------- HERO: NOTEBOOK VIBE ---------- */}
      <section className="relative bg-cream-50 py-16 md:py-24 overflow-hidden">
        {/* Dot Grid Background (Notebook texture) */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e0d8_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

        {/* Soft Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          {/* Sticky Note Badge */}
          <motion.div
            initial={{ y: -20, opacity: 0, rotate: -3 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="inline-block bg-gold-200/80 backdrop-blur-sm text-primary-900 text-sm font-bold px-5 py-2 rounded-lg shadow-lg border-2 border-gold-300 mb-6 rotate-[-1deg] hover:rotate-1 transition-transform"
          >
            📌 Pssst... your next obsession is here
          </motion.div>

          {/* Main Title with 3D Flip */}
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight max-w-4xl mx-auto text-primary-900"
          >
            <span className="block">Find your next</span>
            <span className="block mt-2 perspective-500" style={{ perspective: '500px' }}>
              <span
                className="inline-block transition-transform duration-300 ease-in-out"
                style={{
                  transform: isFlipping ? 'rotateX(90deg)' : 'rotateX(0deg)',
                  transformStyle: 'preserve-3d',
                }}
              >
                <span className="bg-gradient-to-r from-primary-600 via-terracotta-500 to-gold-400 text-transparent bg-clip-text underline decoration-wavy decoration-4 decoration-gold-400">
                  {currentHobby}
                </span>
              </span>
            </span>
          </motion.h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mt-4 font-light">
            Because doom-scrolling isn't a hobby. <span className="font-bold text-terracotta-500">(Yet.)</span>
          </p>

          {/* The Flip Button */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={flipHobby}
            className="mt-6 bg-cream-100 hover:bg-cream-200 text-primary-800 font-bold py-3 px-8 rounded-full shadow-md border-2 border-terracotta-300 transition-all inline-flex items-center gap-3 group"
          >
            <FaDice className="text-xl text-terracotta-500 group-hover:rotate-180 transition-transform duration-500" />
            <span>Roll for Hobby</span>
          </motion.button>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {user ? (
              <Link to="/dashboard" className="btn-primary">
                Go to Dashboard →
              </Link>
            ) : (
              <>
                <Link to="/signup" className="btn-primary shadow-xl hover:shadow-2xl">
                  Get Started – It's Free
                </Link>
                <Link to="/login" className="btn-secondary">
                  Sign In
                </Link>
              </>
            )}
          </div>

          {/* Playful Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600 mt-10 pt-6 border-t-2 border-dashed border-terracotta-200/60">
            <span className="flex items-center gap-2"><span className="text-2xl">🖌️</span> 200+ Weird Obsessions</span>
            <span className="flex items-center gap-2"><span className="text-2xl">🤝</span> 1.2k Skills Bartered</span>
            <span className="flex items-center gap-2"><span className="text-2xl">🌍</span> People who actually replied</span>
          </div>
        </div>

        {/* SCATTERED POLAROID IMAGES (Scrapbook feel) */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1536924940840-4eb24c0a1c9d?w=200&h=200&fit=crop"
            alt="Art"
            className="absolute top-10 left-10 w-32 h-32 rounded-xl shadow-2xl border-4 border-white rotate-12 opacity-90 hover:opacity-100 transition-opacity"
          />
          <img
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=200&h=200&fit=crop"
            alt="Write"
            className="absolute bottom-20 left-20 w-28 h-28 rounded-xl shadow-2xl border-4 border-white -rotate-6 opacity-90 hover:opacity-100 transition-opacity"
          />
          <img
            src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=200&h=200&fit=crop"
            alt="Music"
            className="absolute top-20 right-10 w-36 h-36 rounded-xl shadow-2xl border-4 border-white -rotate-12 opacity-90 hover:opacity-100 transition-opacity"
          />
          <img
            src="https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?w=200&h=200&fit=crop"
            alt="Cooking"
            className="absolute bottom-10 right-20 w-24 h-24 rounded-xl shadow-2xl border-4 border-white rotate-6 opacity-90 hover:opacity-100 transition-opacity"
          />
        </div>
      </section>

      {/* ---------- FEATURES: "THE VIBE CHECK" (Index Cards) ---------- */}
      <section className="py-20 bg-white border-y-2 border-cream-200">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-black text-primary-900">The Vibe Check 🧐</h2>
            <p className="text-gray-500 text-lg italic mt-1">(Spoiler: It's chaotic good)</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40, rotate: idx % 2 === 0 ? -1 : 1 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, rotate: 0, scale: 1.02 }}
                className={`bg-white p-6 rounded-2xl shadow-lg border-2 border-cream-100 border-t-[6px] ${feature.border} hover:shadow-2xl transition-all duration-300 cursor-default group`}
              >
                <div className="text-primary-600 mb-3 group-hover:text-terracotta-500 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-900">{feature.title}</h3>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- HOBBY ORACLE QUIZ (Replaces "The Ritual" & "The Grapevine") ---------- */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-cream-50 to-gold-50/30 border-y-2 border-cream-200">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-primary-900">🔮 The Hobby Oracle</h2>
            <p className="text-gray-500 text-lg italic mt-1">Let the cosmos decide your next obsession</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border-2 border-cream-200 p-6 md:p-10"
          >
            {quizResult === null ? (
              // --- QUIZ MODE ---
              <div>
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <span>Question {quizStep + 1} of {quizQuestions.length}</span>
                    <span>{Math.round(((quizStep + 1) / quizQuestions.length) * 100)}%</span>
                  </div>
                  <div className="w-full h-2 bg-cream-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary-500 via-terracotta-400 to-gold-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${((quizStep + 1) / quizQuestions.length) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>

                {/* Question */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={quizStep}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-primary-900 mb-6 text-center">
                      {quizQuestions[quizStep].question}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {quizQuestions[quizStep].options.map((option, idx) => (
                        <motion.button
                          key={idx}
                          whileHover={{ scale: 1.03, y: -2 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => handleQuizAnswer(idx)}
                          className="bg-cream-50 hover:bg-cream-100 border-2 border-cream-200 hover:border-terracotta-300 rounded-xl p-4 text-left transition-all group text-gray-700 hover:text-primary-900 font-medium"
                        >
                          <span className="text-2xl mr-3">{option.split(' ')[0]}</span>
                          {option.substring(option.indexOf(' ') + 1)}
                          <FaArrowRight className="inline ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-terracotta-500" />
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            ) : (
              // --- RESULT MODE ---
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="mb-6">
                  <span className="text-7xl md:text-8xl block mb-4">{getCurrentResult().emoji}</span>
                  <h3 className="text-3xl md:text-4xl font-black text-primary-900">
                    {getCurrentResult().title}
                  </h3>
                  <p className="text-lg text-terracotta-500 font-semibold mt-1">
                    Your destiny: <span className="underline decoration-gold-400 decoration-4">{getCurrentResult().hobby}</span>
                  </p>
                </div>

                <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                  {getCurrentResult().desc}
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <button
                    onClick={resetQuiz}
                    className="bg-cream-100 hover:bg-cream-200 text-primary-800 font-bold py-3 px-6 rounded-full shadow-md border-2 border-terracotta-300 transition-all inline-flex items-center gap-2"
                  >
                    <FaRedo className="text-terracotta-500" />
                    Try Again
                  </button>

                  {!user ? (
                    <Link
                      to="/signup"
                      className="bg-terracotta-500 hover:bg-terracotta-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
                    >
                      <FaMagic className="text-lg" />
                      Save My Destiny
                    </Link>
                  ) : (
                    <button className="bg-gold-400 hover:bg-gold-500 text-primary-900 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2">
                      <FaMagic className="text-lg" />
                      Save to Profile
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ---------- CTA: DEEP PLUM (The Final Push) ---------- */}
      <section className="relative py-20 bg-primary-900 text-white text-center overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none"></div>

        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-terracotta-400/10 rounded-full blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-4 relative z-10"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Ready to get <span className="text-gold-400 underline decoration-terracotta-400 decoration-4">weirdly passionate</span>?
          </h2>
          <p className="text-lg text-primary-200 mb-8">
            Join the chaos. Your next favorite thing is one click away.
          </p>
          {!user ? (
            <Link
              to="/signup"
              className="inline-block bg-gold-400 hover:bg-gold-500 text-primary-900 font-bold text-lg px-10 py-4 rounded-full shadow-2xl hover:scale-105 transition-transform border-4 border-gold-300 shadow-gold-500/20"
            >
              🚀 Create My Free Account
            </Link>
          ) : (
            <Link
              to="/dashboard"
              className="inline-block bg-gold-400 hover:bg-gold-500 text-primary-900 font-bold text-lg px-10 py-4 rounded-full shadow-2xl hover:scale-105 transition-transform"
            >
              Go to my Dashboard →
            </Link>
          )}
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;