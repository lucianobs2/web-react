import { ComponentProps } from 'react';
import { cn } from '../../app/utils/cn';
import { Spinner } from './Spinner';

interface ButtonProps extends ComponentProps<'button'> {
  isPending?: boolean;
}

export function Button({
  className,
  isPending,
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || isPending}
      className={cn(
        `flex items-center justify-center bg-teal-900 hover:bg-teal-800 disabled:bg-gray-100 px-6 h-12
        rounded-2xl text-white font-medium disabled:text-gray-400 disabled:cursor-not-allowed transition-all`,
        className,
      )}
    >
      {!isPending && children}
      {isPending && <Spinner className="h-6 w-6" />}
    </button>
  );
}
