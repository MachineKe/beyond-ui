import * as React from "react";
import { Card } from "../Card";
import { Avatar, AvatarImage, AvatarFallback } from "../Avatar";
import { Input } from "../Input";
import { Button } from "../Button";
import { useAuth } from "../../contexts/AuthContext";

export interface ProfileManagementPageProps {
  user?: {
    name?: string;
    email?: string;
    avatarUrl?: string;
  };
  onUpdate?: (data: { name: string; email: string; avatarUrl?: string }) => void;
  avatarUploadHandler?: (file: File) => Promise<string>;
  themeOverrides?: Record<string, any>;
}

export const ProfileManagementPage: React.FC<ProfileManagementPageProps> = ({
  user: userProp,
  onUpdate,
  avatarUploadHandler,
  themeOverrides,
}) => {
  // Context-aware fallback
  let contextUser;
  try {
    const context = useAuth();
    contextUser = context.user;
  } catch {
    // Not using context
  }
  const user = userProp || contextUser || {};
  const [form, setForm] = React.useState({
    name: user.name || "",
    email: user.email || "",
    avatarUrl: "avatarUrl" in user ? (user as any).avatarUrl || "" : "",
  });
  const [editing, setEditing] = React.useState(false);
  const [avatarPreview, setAvatarPreview] = React.useState(form.avatarUrl);

  const handleEdit = () => setEditing(true);
  const handleCancel = () => {
    setEditing(false);
    setForm({
      name: user.name || "",
      email: user.email || "",
      avatarUrl: "avatarUrl" in user ? (user as any).avatarUrl || "" : "",
    });
    setAvatarPreview("avatarUrl" in user ? (user as any).avatarUrl || "" : "");
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (avatarUploadHandler) {
        const url = await avatarUploadHandler(file);
        setAvatarPreview(url);
        setForm({ ...form, avatarUrl: url });
      } else {
        // Local preview only
        setAvatarPreview(URL.createObjectURL(file));
      }
    }
  };
  const handleSave = () => {
    setEditing(false);
    if (onUpdate) {
      onUpdate(form);
    }
  };

  return (
    <Card className="max-w-lg mx-auto mt-10 p-8 bg-white shadow-lg rounded-xl">
      <div className="flex flex-col items-center space-y-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            <Avatar size="lg">
              <AvatarImage src={avatarPreview} />
              <AvatarFallback>
                {form.name ? form.name[0] : "U"}
              </AvatarFallback>
            </Avatar>
            {editing && (
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="absolute bottom-0 left-0 w-full text-xs"
                style={{ opacity: 0, cursor: "pointer" }}
              />
            )}
          </div>
          <div className="w-full space-y-4">
            <Input
              name="name"
              value={form.name}
              onChange={handleChange}
              disabled={!editing}
              className="w-full"
              placeholder="Name"
            />
            <Input
              name="email"
              value={form.email}
              onChange={handleChange}
              disabled={!editing}
              className="w-full"
              placeholder="Email"
              type="email"
            />
          </div>
          <div className="flex space-x-2 mt-4">
            {!editing ? (
              <Button variant="primary" onClick={handleEdit}>
                Edit Profile
              </Button>
            ) : (
              <>
                <Button variant="success" onClick={handleSave}>
                  Save
                </Button>
                <Button variant="secondary" onClick={handleCancel}>
                  Cancel
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

ProfileManagementPage.displayName = "ProfileManagementPage";