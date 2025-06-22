import React from 'react';
import { Button } from 'antd';

interface PetraButtonProps {
  type?: 'primary' | 'default' | 'dashed' | 'text' | 'link';
  size?: 'small' | 'middle' | 'large';
  loading?: boolean | { icon: React.ReactNode };
  icon?: React.ReactNode;
  iconPosition?: 'start' | 'end';
  onClick?: () => void;
  children?: React.ReactNode;
}

export default function PetraButton({
  type = 'default',
  size = 'middle',
  loading = false,
  icon,
  iconPosition = 'start',
  onClick,
  children,
}: PetraButtonProps) {
  return (
    <Button
      type={type}
      size={size}
      loading={loading}
      icon={icon}
      iconPosition={iconPosition}
      onClick={onClick}
      className='shadow-sm'
    >
      {children}
    </Button>
  );
}
