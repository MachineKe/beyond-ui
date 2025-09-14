import * as React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '../src/components/Textarea';

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'error'],
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Default textarea',
  },
};

export const Success: Story = {
  args: {
    placeholder: 'Success state',
    variant: 'success',
  },
};

export const Error: Story = {
  args: {
    placeholder: 'Error state',
    variant: 'error',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled',
    disabled: true,
  },
};

export const CommentBoxUseCase: Story = {
  render: () => {
    const [value, setValue] = React.useState("");
    const [submitted, setSubmitted] = React.useState(false);
    const [tooShort, setTooShort] = React.useState(false);
    const minLength = 8;
    const handleSend = () => {
      if (value.trim().length < minLength) {
        setTooShort(true);
        setSubmitted(false);
      } else {
        setSubmitted(true);
        setTooShort(false);
        setValue("");
        setTimeout(() => setSubmitted(false), 2000);
      }
    };
    return (
      <div className="flex flex-col gap-2 bg-gray-50 p-4 rounded-lg w-96">
        <Textarea
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Write a comment..."
          maxLength={240}
        />
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">{value.length}/240</span>
          {tooShort && <span className="text-danger-600">Comment too short!</span>}
          {submitted && <span className="text-success-600">Submitted!</span>}
        </div>
        <button
          className="self-end bg-primary-600 text-white px-4 py-2 mt-2 rounded disabled:opacity-50"
          onClick={handleSend}
          disabled={value.trim().length === 0}
        >
          Send
        </button>
      </div>
    );
  },
  name: "Comment Box (Real Use Case)",
  parameters: {
    docs: {
      description: {
        story:
          "A realistic comment input with character count and submit error feedback.",
      },
    },
  },
};