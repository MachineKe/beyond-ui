import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal, ModalHeader, ModalTitle, ModalDescription, ModalContent, ModalFooter } from '../src/components/Modal';
import { Button } from '../src/components/Button';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal open={open} onOpenChange={setOpen}>
          <ModalHeader>
            <ModalTitle>Are you absolutely sure?</ModalTitle>
            <ModalDescription>
              This action cannot be undone. This will permanently delete your account and remove your data from our servers.
            </ModalDescription>
          </ModalHeader>
          <ModalContent>
            <p>Additional content can go here...</p>
          </ModalContent>
          <ModalFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={() => setOpen(false)}>
              Continue
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};