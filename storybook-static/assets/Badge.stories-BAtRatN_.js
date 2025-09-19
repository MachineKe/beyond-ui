import{j as e}from"./cn-BIubIUvQ.js";import{B as a}from"./Badge-DfI-0DkV.js";import"./index-l2PZgWEW.js";const f={title:"Components/Badge",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","secondary","success","danger","warning","outline"]}}},n={args:{children:"Default"}},s={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{children:"Default"}),e.jsx(a,{variant:"secondary",children:"Secondary"}),e.jsx(a,{variant:"success",children:"Success"}),e.jsx(a,{variant:"danger",children:"Danger"}),e.jsx(a,{variant:"warning",children:"Warning"}),e.jsx(a,{variant:"outline",children:"Outline"})]})},r={render:()=>e.jsxs("div",{className:"flex gap-4 items-center bg-gray-50 p-4 rounded-lg",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("span",{children:"Inbox"}),e.jsx(a,{variant:"danger",children:"5"})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("span",{children:"Status"}),e.jsx(a,{variant:"success",children:"Online"})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("span",{children:"Warning"}),e.jsx(a,{variant:"warning",children:"Expiring"})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("span",{children:"Info"}),e.jsx(a,{variant:"secondary",children:"New"})]})]}),name:"Notification/Status Badges (Real Use Case)",parameters:{docs:{description:{story:"Showcases badges as notification counts, statuses, warnings, and info labels — modeling realistic UI scenarios."}}}};var i,t,c;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: 'Default'
  }
}`,...(c=(t=n.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var d,o,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">\r
      <Badge>Default</Badge>\r
      <Badge variant="secondary">Secondary</Badge>\r
      <Badge variant="success">Success</Badge>\r
      <Badge variant="danger">Danger</Badge>\r
      <Badge variant="warning">Warning</Badge>\r
      <Badge variant="outline">Outline</Badge>\r
    </div>
}`,...(l=(o=s.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var g,p,m;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4 items-center bg-gray-50 p-4 rounded-lg">\r
      <div className="flex items-center gap-1">\r
        <span>Inbox</span>\r
        <Badge variant="danger">5</Badge>\r
      </div>\r
      <div className="flex items-center gap-1">\r
        <span>Status</span>\r
        <Badge variant="success">Online</Badge>\r
      </div>\r
      <div className="flex items-center gap-1">\r
        <span>Warning</span>\r
        <Badge variant="warning">Expiring</Badge>\r
      </div>\r
      <div className="flex items-center gap-1">\r
        <span>Info</span>\r
        <Badge variant="secondary">New</Badge>\r
      </div>\r
    </div>,
  name: "Notification/Status Badges (Real Use Case)",
  parameters: {
    docs: {
      description: {
        story: "Showcases badges as notification counts, statuses, warnings, and info labels — modeling realistic UI scenarios."
      }
    }
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const B=["Default","Variants","NotificationBadgesUseCase"];export{n as Default,r as NotificationBadgesUseCase,s as Variants,B as __namedExportsOrder,f as default};
