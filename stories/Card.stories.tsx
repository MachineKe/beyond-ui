import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../src/components/Card';
import { Button } from '../src/components/Button';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the card content area where you can put any content.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-4">
      <Card variant="default" className="w-64">
        <CardContent>
          <h3 className="font-semibold mb-2">Default Card</h3>
          <p className="text-sm text-gray-600">Basic card style</p>
        </CardContent>
      </Card>
      <Card variant="elevated" className="w-64">
        <CardContent>
          <h3 className="font-semibold mb-2">Elevated Card</h3>
          <p className="text-sm text-gray-600">Card with shadow</p>
        </CardContent>
      </Card>
      <Card variant="outlined" className="w-64">
        <CardContent>
          <h3 className="font-semibold mb-2">Outlined Card</h3>
          <p className="text-sm text-gray-600">Card with border</p>
        </CardContent>
      </Card>
    </div>
  ),
};