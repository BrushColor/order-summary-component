type ButtonProps = {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
};

export function Button({ variant = 'primary', children }: ButtonProps) {
  const baseClasses =
    'font-medium transition-all duration-300 ease-in-out cursor-pointer transform';

  const variantClasses =
    variant === 'primary'
      ? 'bg-primary-bright text-white font-red-hat-display px-4 py-2 rounded-xl shadow-[0_6px_16px_rgba(79,70,229,0.3)] hover:brightness-110 hover:shadow-[0_8px_24px_rgba(79,70,229,0.4)] hover:scale-[1.02] active:scale-95 active:brightness-105'
      : 'text-neutral-blue-300 hover:text-neutral-blue-800 hover:font-bold active:font-bold font-red-hat-display';

  return (
    <button className={`${baseClasses} ${variantClasses}`}>{children}</button>
  );
}
