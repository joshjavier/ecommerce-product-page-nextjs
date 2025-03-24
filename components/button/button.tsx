import { ReactNode } from 'react';
import { Button as MantineButton, ButtonProps as MantineButtonProps } from '@mantine/core';
import classes from './button.module.css';

type ButtonProps = {
  icon?: ReactNode;
  children: ReactNode;
} & MantineButtonProps;

export function Button({ children, icon, ...props }: ButtonProps) {
  return (
    <MantineButton className={classes.button} leftSection={icon} fullWidth {...props}>
      {children}
    </MantineButton>
  );
}
