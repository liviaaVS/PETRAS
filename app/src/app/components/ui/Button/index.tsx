'use client';

import { Button } from 'antd';

interface PetraButtonProps {
  type?: 'primary' | 'default' | 'dashed' | 'text' | 'link';
  size?: 'small' | 'middle' | 'large';
  loading?: boolean | { icon: React.ReactNode };
  icon?: React.ReactNode;
  iconPlacement?: 'start' | 'end';
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export default function PetraButton({
  type = 'default',
  size = 'middle',
  loading = false,
  icon,
  iconPlacement = 'start',
  onClick,
  disabled = false,
  className,
  children,
}: PetraButtonProps) {
  return (
    <Button
      type={type}
      size={size}
      loading={loading}
      icon={icon}
      iconPlacement={iconPlacement}
      onClick={onClick}
      disabled={disabled}
      className={`shadow-sm ${className}`}
    >
      {children}
    </Button>
  );
}
