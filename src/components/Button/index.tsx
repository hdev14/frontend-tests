import { ButtonHTMLAttributes } from 'react';
import './index.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

function Button({ children, className, ...rest }: ButtonProps) {
  const buttonClassName = className ? `default ${className}` : 'default';
  return (
    <button className={buttonClassName} {...rest}>
      {children}
    </button>
  );
}

export default Button;