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

export const ModalFormUseCase: any = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [submitted, setSubmitted] = React.useState(false);

    const handleSave = () => {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setOpen(false);
      }, 1500);
    };

    return (
      <div>
        <Button variant="primary" onClick={() => setOpen(true)}>
          Open User Form
        </Button>
        <Modal open={open} onOpenChange={setOpen} size="md">
          <ModalHeader>
            <ModalTitle>User Form</ModalTitle>
          </ModalHeader>
          <ModalContent>
            <form className="flex flex-col gap-4">
              <input
                className="border rounded px-3 py-2"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <input
                className="border rounded px-3 py-2"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </form>
            {submitted && (
              <div className="text-success-600 mt-2 font-medium">Submitted!</div>
            )}
          </ModalContent>
          <ModalFooter>
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  },
  name: "Modal with Form (Real Use Case)",
  parameters: {
    docs: {
      description: {
        story:
          "Modal dialog with form elements, submit, and cancel logic. Models real form modals used in modern apps.",
      },
    },
  },
};