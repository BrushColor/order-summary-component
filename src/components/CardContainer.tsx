interface CardContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContainer({
  children,
  className = '',
}: CardContainerProps) {
  return (
    <div
      className={`mx-auto w-[90%] max-w-[410px] overflow-hidden rounded-lg bg-white shadow-md ${className}`}
    >
      {children}
    </div>
  );
}
