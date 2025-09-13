import * as React from "react";
import { Toast, showToast } from "./Toast";
import { Button } from "../Button";

export const ToastExample: React.FC = () => (
  <>
    <Button onClick={() => showToast.success("This is a toast notification!")}>
      Show Toast
    </Button>
    <Toast />
  </>
);