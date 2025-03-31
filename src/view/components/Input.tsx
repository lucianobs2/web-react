import { ComponentProps, forwardRef } from 'react';
import { CrossCircledIcon } from '@radix-ui/react-icons';
import { cn } from '../../app/utils/cn';

interface InputProps extends ComponentProps<'input'> {
  name: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, name, placeholder, error, className, ...props }, ref) => {
    const inputId = id ?? name;

    return (
      <div className="relative">
        <input
          {...props}
          ref={ref}
          id={inputId}
          name={name}
          placeholder=" "
          className={cn(
            `w-full bg-white rounded-lg border border-gray-500
               px-3 h-[52px] text-gray-800 pt-4 peer focus:border-teal-500
               outline-none transition-all placeholder-shown:pt-0`,
            error && '!border-red-900',
            className,
          )}
        />

        <label
          htmlFor={inputId}
          className="
          absolute text-xs left-[13px] top-2
          pointer-events-none text-gray-700
          peer-placeholder-shown:text-base
          peer-placeholder-shown:top-3.5
          transition-all
          "
        >
          {placeholder}
        </label>

        {error && (
          <div className="flex items-center gap-2 mt-2  text-red-900">
            <CrossCircledIcon />
            <span className="text-red-900 text-xs">{error}</span>
          </div>
        )}
      </div>
    );
  },
);
