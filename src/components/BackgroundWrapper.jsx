const BackgroundWrapper = ({ children }) => {
  return (
    <div className="relative bg-primary-color min-h-screen overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -right-32 w-80 h-80 bg-emerald-400/14 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 -left-40 w-72 h-72 bg-blue-400/16 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/4 left-1/3 w-40 h-40 bg-cyan-400/12 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-pink-400/11 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-10 w-32 h-32 bg-violet-400/8 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-indigo-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-16 right-1/3 w-24 h-24 bg-teal-400/9 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute top-3/4 left-1/4 w-36 h-36 bg-blue-300/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute top-1/6 left-2/3 w-44 h-44 bg-purple-300/12 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-1/2 right-1/3 w-28 h-28 bg-emerald-300/9 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2.8s' }}></div>
        <div className="absolute top-2/3 right-12 w-40 h-40 bg-cyan-300/11 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3.5s' }}></div>
        <div className="absolute bottom-1/6 left-1/2 w-32 h-32 bg-pink-300/8 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1.8s' }}></div>
        <div className="absolute top-1/8 left-3/4 w-24 h-24 bg-violet-300/7 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4.2s' }}></div>
        <div className="absolute bottom-1/8 left-1/6 w-52 h-52 bg-indigo-300/13 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.3s' }}></div>
      </div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BackgroundWrapper;