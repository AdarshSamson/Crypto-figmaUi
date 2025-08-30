
const GlassmorphicCard = ({
  children,
  className = "",
  maxWidth = "max-w-3xl",
}) => {
  return (
    <section className={`${maxWidth} mx-auto px-4 py-8 ${className}`}>
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-emerald-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

        <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 shadow-2xl">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none"></div>

          <div className="relative z-10">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default GlassmorphicCard;
