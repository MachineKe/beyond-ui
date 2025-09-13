import * as React from "react";
import { Modal, ModalHeader, ModalTitle, ModalContent, ModalFooter } from "./Modal";
import { Button } from "../Button";

export const ModalExample: React.FC = () => {
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
          <Button variant="primary" onClick={() => setOpen(false)}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};