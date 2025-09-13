import * as React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "./Avatar";

export const AvatarExample: React.FC = () => (
  <div className="flex gap-4">
    <Avatar>
      <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" />
      <AvatarFallback>AB</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarImage src="" />
      <AvatarFallback>CD</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarImage src="https://randomuser.me/api/portraits/women/44.jpg" />
      <AvatarFallback>EF</AvatarFallback>
    </Avatar>
  </div>
);