import{j as e}from"./cn-BIubIUvQ.js";import{S as s}from"./Skeleton-Ba373pfU.js";import"./index-l2PZgWEW.js";const x={title:"Components/Skeleton",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{className:{control:"text"}}},a={render:()=>e.jsx(s,{className:"h-8 w-1/2"})},r={render:()=>e.jsxs("div",{className:"space-y-4 max-w-md",children:[e.jsx(s,{className:"h-8 w-1/2"}),e.jsx(s,{className:"h-4 w-3/4"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(s,{className:"h-8 w-8 rounded-full"}),e.jsx(s,{className:"h-8 w-32"})]}),e.jsx(s,{className:"h-24 w-full"})]})},n={render:()=>e.jsxs("div",{className:"max-w-md w-full border rounded-lg shadow p-4 space-y-4 bg-white",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(s,{className:"h-10 w-10 rounded-full"}),e.jsxs("div",{className:"flex-1",children:[e.jsx(s,{className:"h-4 w-3/4 mb-2"}),e.jsx(s,{className:"h-3 w-1/2"})]})]}),e.jsx(s,{className:"h-4 w-full mt-2"}),e.jsx(s,{className:"h-6 w-2/3 mt-4"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(s,{className:"h-8 w-20 rounded"}),e.jsx(s,{className:"h-8 w-20 rounded"})]})]}),name:"Loading Card (Real Use Case)",parameters:{docs:{description:{story:"Simulates a card loading state with skeletons for avatar, text, and action buttons."}}}};var l,o,t;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <Skeleton className="h-8 w-1/2" />
}`,...(t=(o=a.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var d,c,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 max-w-md">\r
      <Skeleton className="h-8 w-1/2" />\r
      <Skeleton className="h-4 w-3/4" />\r
      <div className="flex gap-2">\r
        <Skeleton className="h-8 w-8 rounded-full" />\r
        <Skeleton className="h-8 w-32" />\r
      </div>\r
      <Skeleton className="h-24 w-full" />\r
    </div>
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var i,p,u;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div className="max-w-md w-full border rounded-lg shadow p-4 space-y-4 bg-white">\r
      <div className="flex items-center gap-4">\r
        <Skeleton className="h-10 w-10 rounded-full" />\r
        <div className="flex-1">\r
          <Skeleton className="h-4 w-3/4 mb-2" />\r
          <Skeleton className="h-3 w-1/2" />\r
        </div>\r
      </div>\r
      <Skeleton className="h-4 w-full mt-2" />\r
      <Skeleton className="h-6 w-2/3 mt-4" />\r
      <div className="flex gap-2">\r
        <Skeleton className="h-8 w-20 rounded" />\r
        <Skeleton className="h-8 w-20 rounded" />\r
      </div>\r
    </div>,
  name: "Loading Card (Real Use Case)",
  parameters: {
    docs: {
      description: {
        story: "Simulates a card loading state with skeletons for avatar, text, and action buttons."
      }
    }
  }
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const S=["Single","Group","SkeletonCardUseCase"];export{r as Group,a as Single,n as SkeletonCardUseCase,S as __namedExportsOrder,x as default};
