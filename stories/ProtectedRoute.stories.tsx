import type { Meta, StoryObj } from "@storybook/react";
import { ProtectedRouteExample } from "../src/components/Auth/ProtectedRoute.example";

const meta: Meta<typeof ProtectedRouteExample> = {
  title: "Auth/!isAuthenticatedShield",
  component: ProtectedRouteExample,
  tags: ["autodocs"],
  parameters: {
    layout: "centered"
  }
};

export default meta;

type Story = StoryObj<typeof ProtectedRouteExample>;

export const Default: Story = {};