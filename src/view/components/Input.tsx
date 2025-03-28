import { ComponentProps } from 'react';

interface InputProps extends ComponentProps<'input'> {
  name: string;
}

export function Input({ id, name, placeholder, ...props }: InputProps) {
  const inputId = id ?? name;

  return (
    <div className="relative">
      <input
        {...props}
        id={inputId}
        name={name}
        placeholder=" "
        className="
        w-full
      bg-white
        rounded-lg
        border
      border-gray-500
        px-3
        h-[52px]
      text-gray-800
        pt-4
        peer
        focus:border-teal-500
        outline-none
        transition-all
        placeholder-shown:pt-0
        "
      />

      <label
        htmlFor={inputId}
        className="
        absolute
        text-xs left-[13px]
        top-2
        pointer-events-none
      text-gray-700
        peer-placeholder-shown:text-base
        peer-placeholder-shown:top-3.5
        transition-all
        "
      >
        {placeholder}
      </label>
    </div>
  );
}
