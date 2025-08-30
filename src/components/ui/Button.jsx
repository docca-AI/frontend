export default function Button({ variant = "primary", size = "md", children }) {
  const base =
    "rounded-md font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer";

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variants = {
    primary:
      "bg-primary text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary",
    secondary: "bg-secondary text-white hover:bg-green-700",
    tertiary: "bg-transparent text-primary outline outline-primary hover:underline",
  };

  return (
    <button className={`${base} ${sizes[size]} ${variants[variant]}`}>
      {children}
    </button>
  );
}
