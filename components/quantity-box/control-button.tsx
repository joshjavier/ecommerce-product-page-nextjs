import { ActionIcon, ActionIconProps } from '@mantine/core';
import IconMinus from '@/icons/icon-minus.svg';
import IconPlus from '@/icons/icon-plus.svg';

type ControlButtonProps = {
  onClick?: () => void;
  type: 'increment' | 'decrement';
} & ActionIconProps;

export function ControlButton({ onClick, type, ...props }: ControlButtonProps) {
  const Icon = type === 'increment' ? IconPlus : IconMinus;

  return (
    <ActionIcon
      variant="transparent"
      onClick={onClick}
      aria-label={type === 'increment' ? 'Increment by 1' : 'Decrement by 1'}
      size="input-md"
      {...props}
    >
      <Icon width="12" height="12" />
    </ActionIcon>
  );
}
