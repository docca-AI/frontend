export default function Button({
  variant = "primary",
  size = "md",
  children,
  className,
}) {
  const base = `flex justify-center items-center rounded-md font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer ${className}`;

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-4 py-3 text-base",
    xl: "px-6 py-3 text-lg",
  };

  const variants = {
    primary:
      "bg-primary text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary",
    btnIcon:
      "bg-primary text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary",

    secondary: "bg-secondary text-white hover:bg-green-700",
    tertiary:
      "bg-transparent text-primary outline outline-primary hover:underline hover:bg-primary/5",
    outlineGreen:
      "bg-transparent text-secondary outline outline-secondary hover:underline hover:bg-secondary/5",
    danger: "bg-error text-white hover:bg-red-700",
    accent: "bg-white text-primary hover:bg-light-gray",
  };

  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
