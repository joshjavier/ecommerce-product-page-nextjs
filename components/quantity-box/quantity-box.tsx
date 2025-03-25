'use client';

import { useRef } from 'react';
import { NumberInput, NumberInputHandlers } from '@mantine/core';
import { ControlButton } from './control-button';
import classes from './quantity-box.module.css';

export function QuantityBox() {
  const handlersRef = useRef<NumberInputHandlers>(null);

  const incrementButton = () => (
    <ControlButton type="increment" onClick={() => handlersRef.current?.increment()} />
  );
  const decrementButton = () => (
    <ControlButton type="decrement" onClick={() => handlersRef.current?.decrement()} />
  );

  return (
    <NumberInput
      variant="filled"
      aria-label="Enter item quantity"
      defaultValue={0}
      allowNegative={false}
      allowDecimal={false}
      hideControls
      leftSection={decrementButton()}
      rightSection={incrementButton()}
      rightSectionWidth="var(--input-height)"
      handlersRef={handlersRef}
      classNames={{
        root: classes.root,
        wrapper: classes.wrapper,
        section: classes.section,
      }}
    />
  );
}
