import{j as a}from"./cn-BIubIUvQ.js";import{r as l}from"./index-l2PZgWEW.js";import{T as o,a as i,b as s,c as n}from"./Tabs-DIOFPT4k.js";const d={title:"Components/Tabs",component:o,parameters:{layout:"centered"},tags:["autodocs"]},e={render:()=>{const[T,c]=l.useState("tab-1");return a.jsxs(o,{value:T,onValueChange:c,children:[a.jsxs(i,{children:[a.jsx(s,{value:"tab-1",children:"Tab One"}),a.jsx(s,{value:"tab-2",children:"Tab Two"}),a.jsx(s,{value:"tab-3",children:"Tab Three"})]}),a.jsx(n,{value:"tab-1",children:a.jsx("span",{className:"block p-4",children:"Content for Tab One"})}),a.jsx(n,{value:"tab-2",children:a.jsx("span",{className:"block p-4",children:"Content for Tab Two"})}),a.jsx(n,{value:"tab-3",children:a.jsx("span",{className:"block p-4",children:"Content for Tab Three"})})]})}};var t,r,b;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = React.useState("tab-1");
    return <Tabs value={activeTab} onValueChange={setActiveTab}>\r
        <TabsList>\r
          <TabsTrigger value="tab-1">Tab One</TabsTrigger>\r
          <TabsTrigger value="tab-2">Tab Two</TabsTrigger>\r
          <TabsTrigger value="tab-3">Tab Three</TabsTrigger>\r
        </TabsList>\r
        <TabsContent value="tab-1">\r
          <span className="block p-4">Content for Tab One</span>\r
        </TabsContent>\r
        <TabsContent value="tab-2">\r
          <span className="block p-4">Content for Tab Two</span>\r
        </TabsContent>\r
        <TabsContent value="tab-3">\r
          <span className="block p-4">Content for Tab Three</span>\r
        </TabsContent>\r
      </Tabs>;
  }
}`,...(b=(r=e.parameters)==null?void 0:r.docs)==null?void 0:b.source}}};const v=["Default"];export{e as Default,v as __namedExportsOrder,d as default};
