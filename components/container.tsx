interface ContainerProps {
  children: React.ReactNode;
  className?: string
}

export default function Container({ children, className }: ContainerProps) {
  return <main className={className}>{children}</main>;
}
