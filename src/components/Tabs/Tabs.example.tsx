import * as React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./Tabs";

export const TabsExample: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState("tab-1");
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsList>
        <TabsTrigger value="tab-1">Tab One</TabsTrigger>
        <TabsTrigger value="tab-2">Tab Two</TabsTrigger>
        <TabsTrigger value="tab-3">Tab Three</TabsTrigger>
      </TabsList>
      <TabsContent value="tab-1">
        <span className="block p-4">Content for Tab One</span>
      </TabsContent>
      <TabsContent value="tab-2">
        <span className="block p-4">Content for Tab Two</span>
      </TabsContent>
      <TabsContent value="tab-3">
        <span className="block p-4">Content for Tab Three</span>
      </TabsContent>
    </Tabs>
  );
};