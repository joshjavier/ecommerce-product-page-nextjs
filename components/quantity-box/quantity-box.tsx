'use client';

import { useRef } from 'react';
import { ActionIcon, NumberInput, NumberInputHandlers } from '@mantine/core';
import IconMinus from '@/icons/icon-minus.svg';
import IconPlus from '@/icons/icon-plus.svg';
import classes from './quantity-box.module.css';

function IncrementButton({ onClick }: { onClick?: () => void }) {
  return (
    <ActionIcon variant="subtle" onClick={onClick} aria-label="Increment by 1" size="input-md">
      <IconPlus width="12" height="12" />
    </ActionIcon>
  );
}

function DecrementButton({ onClick }: { onClick?: () => void }) {
  return (
    <ActionIcon variant="subtle" onClick={onClick} aria-label="Decrement by 1" size="input-md">
      <IconMinus width="12" height="12" />
    </ActionIcon>
  );
}

export function QuantityBox() {
  const handlersRef = useRef<NumberInputHandlers>(null);

  return (
    <NumberInput
      variant="filled"
      aria-label="Enter item quantity"
      defaultValue={0}
      allowNegative={false}
      allowDecimal={false}
      hideControls
      leftSection={<DecrementButton onClick={() => handlersRef.current?.decrement()} />}
      rightSection={<IncrementButton onClick={() => handlersRef.current?.increment()} />}
      handlersRef={handlersRef}
      size="md"
      classNames={{ wrapper: classes.wrapper, section: classes.section, root: classes.root }}
    />
  );
}
