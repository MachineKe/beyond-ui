import * as React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarImage, AvatarFallback } from '../src/components/Avatar';
import { Badge } from '../src/components/Badge';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" />
      <AvatarFallback>AB</AvatarFallback>
    </Avatar>
  ),
};

export const WithFallback: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="" />
      <AvatarFallback>CD</AvatarFallback>
    </Avatar>
  ),
};

export const Group: Story = {
  render: () => (
    <div className="flex gap-4">
      <Avatar>
        <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="" />
        <AvatarFallback>CD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://randomuser.me/api/portraits/women/44.jpg" />
        <AvatarFallback>EF</AvatarFallback>
      </Avatar>
    </div>
  ),
};

export const UserProfileUseCase: Story = {
  render: () => (
    <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-50">
      <Avatar>
        <AvatarImage src="https://randomuser.me/api/portraits/women/44.jpg" />
        <AvatarFallback>JS</AvatarFallback>
      </Avatar>
      <div>
        <div className="font-semibold text-lg">Jane Smith</div>
        <div className="text-sm text-gray-500 mb-1">jane.smith@company.com</div>
        <Badge variant="success">Online</Badge>
      </div>
    </div>
  ),
  name: "User Profile (Real Use Case)",
  parameters: {
    docs: {
      description: {
        story:
          "Shows Avatar used as part of a user profile block, together with badge and text context.",
      },
    },
  },
};