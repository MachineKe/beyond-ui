import{j as a}from"./cn-BIubIUvQ.js";import{A as r,a as e,b as s}from"./Avatar-wG5zcNRE.js";import{B as b}from"./Badge-DfI-0DkV.js";import"./index-l2PZgWEW.js";const y={title:"Components/Avatar",component:r,parameters:{layout:"centered"},tags:["autodocs"]},t={render:()=>a.jsxs(r,{children:[a.jsx(e,{src:"https://randomuser.me/api/portraits/men/32.jpg"}),a.jsx(s,{children:"AB"})]})},n={render:()=>a.jsxs(r,{children:[a.jsx(e,{src:""}),a.jsx(s,{children:"CD"})]})},o={render:()=>a.jsxs("div",{className:"flex gap-4",children:[a.jsxs(r,{children:[a.jsx(e,{src:"https://randomuser.me/api/portraits/men/32.jpg"}),a.jsx(s,{children:"AB"})]}),a.jsxs(r,{children:[a.jsx(e,{src:""}),a.jsx(s,{children:"CD"})]}),a.jsxs(r,{children:[a.jsx(e,{src:"https://randomuser.me/api/portraits/women/44.jpg"}),a.jsx(s,{children:"EF"})]})]})},c={render:()=>a.jsxs("div",{className:"flex items-center gap-4 p-4 rounded-lg bg-gray-50",children:[a.jsxs(r,{children:[a.jsx(e,{src:"https://randomuser.me/api/portraits/women/44.jpg"}),a.jsx(s,{children:"JS"})]}),a.jsxs("div",{children:[a.jsx("div",{className:"font-semibold text-lg",children:"Jane Smith"}),a.jsx("div",{className:"text-sm text-gray-500 mb-1",children:"jane.smith@company.com"}),a.jsx(b,{variant:"success",children:"Online"})]})]}),name:"User Profile (Real Use Case)",parameters:{docs:{description:{story:"Shows Avatar used as part of a user profile block, together with badge and text context."}}}};var i,m,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <Avatar>\r
      <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" />\r
      <AvatarFallback>AB</AvatarFallback>\r
    </Avatar>
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,p,v;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <Avatar>\r
      <AvatarImage src="" />\r
      <AvatarFallback>CD</AvatarFallback>\r
    </Avatar>
}`,...(v=(p=n.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var x,g,A;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">\r
      <Avatar>\r
        <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" />\r
        <AvatarFallback>AB</AvatarFallback>\r
      </Avatar>\r
      <Avatar>\r
        <AvatarImage src="" />\r
        <AvatarFallback>CD</AvatarFallback>\r
      </Avatar>\r
      <Avatar>\r
        <AvatarImage src="https://randomuser.me/api/portraits/women/44.jpg" />\r
        <AvatarFallback>EF</AvatarFallback>\r
      </Avatar>\r
    </div>
}`,...(A=(g=o.parameters)==null?void 0:g.docs)==null?void 0:A.source}}};var h,j,u;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-50">\r
      <Avatar>\r
        <AvatarImage src="https://randomuser.me/api/portraits/women/44.jpg" />\r
        <AvatarFallback>JS</AvatarFallback>\r
      </Avatar>\r
      <div>\r
        <div className="font-semibold text-lg">Jane Smith</div>\r
        <div className="text-sm text-gray-500 mb-1">jane.smith@company.com</div>\r
        <Badge variant="success">Online</Badge>\r
      </div>\r
    </div>,
  name: "User Profile (Real Use Case)",
  parameters: {
    docs: {
      description: {
        story: "Shows Avatar used as part of a user profile block, together with badge and text context."
      }
    }
  }
}`,...(u=(j=c.parameters)==null?void 0:j.docs)==null?void 0:u.source}}};const C=["Default","WithFallback","Group","UserProfileUseCase"];export{t as Default,o as Group,c as UserProfileUseCase,n as WithFallback,C as __namedExportsOrder,y as default};
