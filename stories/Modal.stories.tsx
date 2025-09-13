import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Modal, ModalHeader, ModalTitle, ModalContent, ModalFooter } from "../src/components/Modal";
import { Button } from "../src/components/Button";

const meta = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: any = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Show Modal</Button>
        <Modal open={open} onOpenChange={setOpen}>
          <ModalHeader>
            <ModalTitle>Demo Modal</ModalTitle>
          </ModalHeader>
          <ModalContent>
            <p>This is a basic modal dialog.</p>
          </ModalContent>
          <ModalFooter>
            <Button variant="primary" onClick={() => setOpen(false)}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  },
};