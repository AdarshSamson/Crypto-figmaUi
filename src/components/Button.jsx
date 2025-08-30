import React from "react";

const Button = ({ text, variant = "primary", rounded, onClick, className = "" }) => {
  const baseStyles =
    "lg:px-4 lg:py-2 px-4 py-3 text-sm sm:text-base font-medium transition-all duration-300 focus:outline-none focus:ring-2 cursor-pointer transform hover:scale-105 active:scale-95 shadow-lg";
  const ButtonRounded = rounded ? `rounded-${rounded}` : "rounded-full";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary/20 to-cyan-500 text-white hover:from-emerald-600 hover:to-cyan-400 focus:ring-emerald-300 shadow-emerald-500/4 hover:shadow-primary/10",
    outline: "border-2 border-primary bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-border text-transparent bg-clip-text hover:text-white hover:bg-clip-padding hover:from-emerald-400 hover:to-cyan-400 focus:ring-emerald-300",
    danger: "bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-400 hover:to-pink-400 focus:ring-red-300 shadow-red-500/25 hover:shadow-red-500/40",
    success: "bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-400 hover:to-emerald-400 focus:ring-green-300 shadow-green-500/25 hover:shadow-green-500/40",
    warning: "bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-400 hover:to-orange-400 focus:ring-yellow-300 shadow-yellow-500/25 hover:shadow-yellow-500/40",
    info: "bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-400 hover:to-indigo-400 focus:ring-blue-300 shadow-blue-500/25 hover:shadow-blue-500/40",
    purple: "bg-gradient-to-r from-purple-500 to-violet-500 text-white hover:from-purple-400 hover:to-violet-400 focus:ring-purple-300 shadow-purple-500/25 hover:shadow-purple-500/40",
    badge: "bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-400 border border-emerald-500/30 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-semibold hover:from-emerald-500/30 hover:to-cyan-500/30 hover:border-emerald-500/50 "
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className} ${ButtonRounded}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;