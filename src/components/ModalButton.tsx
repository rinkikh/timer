// src/components/ModalButton.tsx
import React from 'react';

interface ModalButtonProps {
  type: 'submit' | 'button';
  onClick?: () => void;
  disabled?: boolean;
  className: string;
  children: React.ReactNode;
}

const ModalButton: React.FC<ModalButtonProps> = ({
  type,
  onClick,
  disabled,
  className,
  children,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${className}`}
    >
      {children}
    </button>
  );
};

export default ModalButton;
