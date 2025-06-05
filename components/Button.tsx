interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantStyles = {
    primary: 'bg-brand-accent-blue hover:bg-blue-500 text-white focus:ring-brand-accent-blue shadow-lg hover:shadow-blue-500/50',
    secondary: 'bg-brand-accent-purple hover:bg-purple-500 text-white focus:ring-brand-accent-purple shadow-lg hover:shadow-purple-500/50',
    outline: 'bg-transparent border-2 border-brand-accent-blue text-brand-accent-blue hover:bg-brand-accent-blue hover:text-white focus:ring-brand-accent-blue',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
