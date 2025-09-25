import * as React from "react";
import { Card } from "../Card";
import { Avatar, AvatarImage, AvatarFallback } from "../Avatar";
import { Button } from "../Button";
import { cn } from "../../utils/cn";
import { Facebook, Twitter, Linkedin, Instagram, Pencil } from "lucide-react";

export interface SocialLink {
  type: "facebook" | "twitter" | "linkedin" | "instagram";
  url: string;
}

export interface ProfileCardProps {
  avatarUrl?: string;
  name?: string;
  role?: string;
  location?: string;
  socialLinks?: SocialLink[];
  onEdit?: () => void;
}

const socialIconMap = {
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin,
  instagram: Instagram,
};

export const ProfileCard: React.FC<ProfileCardProps> = ({
  avatarUrl,
  name,
  role,
  location,
  socialLinks = [],
  onEdit,
}) => (
  <Card className="flex flex-col md:flex-row items-center justify-between p-6 rounded-xl bg-white shadow-sm border border-gray-100 mb-6">
    <div className="flex items-center space-x-4">
      <Avatar size="xl">
        {avatarUrl ? <AvatarImage src={avatarUrl} /> : <AvatarFallback>{name ? name[0] : "U"}</AvatarFallback>}
      </Avatar>
      <div>
        <div className="font-bold text-lg text-gray-900">{name}</div>
        {role && <div className="text-sm text-gray-500">{role}</div>}
        {location && <div className="text-xs text-gray-400">{location}</div>}
      </div>
    </div>
    <div className="flex items-center space-x-2 mt-4 md:mt-0">
      {socialLinks.map((link, idx) => {
        const Icon = socialIconMap[link.type];
        return (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center justify-center w-9 h-9 rounded-full border border-gray-200 bg-white text-gray-500 hover:bg-primary-50 hover:text-primary-600 transition"
            )}
            aria-label={link.type}
          >
            <Icon className="w-4 h-4" />
          </a>
        );
      })}
      <Button
        variant="secondary"
        size="sm"
        className="ml-2 flex items-center space-x-1"
        onClick={onEdit}
      >
        <Pencil className="w-4 h-4 mr-1" />
        Edit
      </Button>
    </div>
  </Card>
);

ProfileCard.displayName = "ProfileCard";