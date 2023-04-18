import React from 'react';
import './button.scss';
import { Button as ButtonAnt } from 'antd';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import PropTypes from 'prop-types';
/*根據所需的屬性去組成button，並定義型別
 *屬性不一定，看專案需求
 */

export interface ButtonProps {
  className?: string;
  type?: 'default' | 'text' | 'link' | 'primary';
  htmlType?: 'button';
  size?: SizeType;
  color?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  icon?: React.ReactNode;
  text?: string | JSX.Element;
  disabled?: boolean;
  loading?: boolean;
  circle?: boolean;
  onClick?: (e: any) => void;
  value?: string | number;
  buttonValue?: { text: string; value: string; disable?: boolean }[];
  onChange?: (e: any) => void;
  onBlur?: () => void;
}

const Button = ({
  icon,
  text = '',
  className,
  size,
  type = 'default',
  color = 'primary',
  disabled,
  loading,
  circle,
  onClick,
  value,
  buttonValue,
  htmlType = 'button',
  onChange,
  onBlur
}: ButtonProps) => {
  return (
    <div className="button--root">
      <ButtonAnt
        type={type}
        size={size}
        data-testId={text}
          className={`border-0 ${className}`}
        icon={icon}
        value={value}
        disabled={disabled}
        onClick={onClick}
        htmlType={htmlType}
        shape={circle ? 'circle' : 'default'}
        onBlur={onBlur}
        loading={loading}
      >
        {text}
      </ButtonAnt>
    </div>
  );
};

export default Button;
