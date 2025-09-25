import * as React from "react";
import { Modal } from "../Modal/Modal";
import { Button } from "../Button";
import { Input } from "../Input";
import { Textarea } from "../Textarea";
import { cn } from "../../utils/cn";

export type EditModalField =
  | {
      type: "text" | "email" | "tel" | "url" | "password";
      label: string;
      name: string;
      value?: string;
      placeholder?: string;
      required?: boolean;
      autoFocus?: boolean;
      onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    }
  | {
      type: "textarea";
      label: string;
      name: string;
      value?: string;
      placeholder?: string;
      required?: boolean;
      rows?: number;
      onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    }
  | {
      type: "custom";
      name: string;
      render: () => React.ReactNode;
    };

export interface EditModalProps {
  open: boolean;
  title?: string;
  description?: string;
  fields: EditModalField[];
  onChange: (name: string, value: string) => void;
  onSave: () => void;
  onClose: () => void;
  saving?: boolean;
  saveLabel?: string;
  closeLabel?: string;
  className?: string;
}

export const EditModal: React.FC<EditModalProps> = ({
  open,
  title,
  description,
  fields,
  onChange,
  onSave,
  onClose,
  saving,
  saveLabel = "Save Changes",
  closeLabel = "Close",
  className,
}) => (
  <Modal open={open} onOpenChange={() => onClose()}>
    <div className={cn("max-w-2xl rounded-2xl p-0 p-8 mx-auto bg-white", className)}>
      {title && <h2 className="text-2xl font-bold mb-1 text-gray-900">{title}</h2>}
      {description && <p className="text-gray-500 mb-6">{description}</p>}
      <form
        className="space-y-6"
        onSubmit={e => {
          e.preventDefault();
          onSave();
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fields.map((field, idx) => {
            if (field.type === "custom") {
              return <div key={field.name}>{field.render()}</div>;
            }
            // Title above every input/textarea
            const title = (
              <div key={field.name + "-title"} className="mb-1 font-medium text-gray-700">
                {field.label}
              </div>
            );
            if (field.type === "textarea") {
              return (
                <React.Fragment key={field.name}>
                  {title}
                  <Textarea
                    name={field.name}
                    value={field.value}
                    placeholder={field.placeholder}
                    rows={field.rows || 3}
                    required={field.required}
                    onChange={e => field.onChange ? field.onChange(e) : onChange(field.name, e.target.value)}
                    className="w-full"
                  />
                </React.Fragment>
              );
            }
            // Default: Input
            return (
              <React.Fragment key={field.name}>
                {title}
                <Input
                  type={field.type}
                  name={field.name}
                  value={field.value}
                  placeholder={field.placeholder}
                  required={field.required}
                  autoFocus={field.autoFocus}
                  onChange={e => field.onChange ? field.onChange(e) : onChange(field.name, e.target.value)}
                  className="w-full"
                />
              </React.Fragment>
            );
          })}
        </div>
        <div className="flex justify-end space-x-2 mt-8">
          <Button type="button" variant="secondary" onClick={onClose}>
            {closeLabel}
          </Button>
          <Button type="submit" variant="primary" disabled={saving}>
            {saveLabel}
          </Button>
        </div>
      </form>
    </div>
  </Modal>
);

EditModal.displayName = "EditModal";