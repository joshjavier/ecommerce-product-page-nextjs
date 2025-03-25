import { Container, Paper, Stack, Text } from '@mantine/core';
import { Button } from '@/components/button/button';
import { QuantityBox } from '@/components/quantity-box/quantity-box';
import IconCart from '@/icons/icon-cart.svg';

export default function HomePage() {
  return (
    <>
      <Container size="xs">
        <Stack>
          <Paper withBorder shadow="sm" radius={0} p="lg">
            <Text fw={700} size="lg" mb="xs">
              Button
            </Text>
            <Button icon={<IconCart width="17.46" />}>Add to cart</Button>
          </Paper>
          <Paper withBorder shadow="sm" radius={0} p="lg">
            <Text fw={700} size="lg" mb="xs">
              Quantity Box
            </Text>
            <QuantityBox />
          </Paper>
        </Stack>
      </Container>
    </>
  );
}
