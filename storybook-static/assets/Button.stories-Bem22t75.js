import{j as r}from"./cn-BIubIUvQ.js";import{B as e}from"./Button-D4FIw8ay.js";import"./index-l2PZgWEW.js";const M={title:"Components/Button",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","danger","success","warning","outline","ghost","link"]},size:{control:"select",options:["sm","md","lg","xl"]}}},a={args:{variant:"primary",children:"Button"}},n={args:{variant:"secondary",children:"Button"}},s={args:{variant:"danger",children:"Delete"}},t={args:{variant:"success",children:"Success"}},o={render:()=>r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsx(e,{size:"sm",children:"Small"}),r.jsx(e,{size:"md",children:"Medium"}),r.jsx(e,{size:"lg",children:"Large"}),r.jsx(e,{size:"xl",children:"Extra Large"})]})},i={render:()=>r.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[r.jsx(e,{variant:"primary",children:"Primary"}),r.jsx(e,{variant:"secondary",children:"Secondary"}),r.jsx(e,{variant:"danger",children:"Danger"}),r.jsx(e,{variant:"success",children:"Success"}),r.jsx(e,{variant:"warning",children:"Warning"}),r.jsx(e,{variant:"outline",children:"Outline"}),r.jsx(e,{variant:"ghost",children:"Ghost"}),r.jsx(e,{variant:"link",children:"Link"})]})},c={render:()=>r.jsxs("div",{className:"flex items-center gap-2 bg-gray-50 p-4 rounded-lg shadow",children:[r.jsx(e,{variant:"primary",size:"md",children:"Save"}),r.jsx(e,{variant:"secondary",size:"md",children:"Cancel"}),r.jsx(e,{variant:"danger",size:"md",children:"Delete"}),r.jsx(e,{variant:"ghost",size:"md",children:"More"})]}),name:"Toolbar (Real Use Case)",parameters:{docs:{description:{story:"Demonstrates a real toolbar with primary, secondary, danger, and ghost action buttons."}}}};var d,l,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Button'
  }
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var u,p,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Button'
  }
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var v,h,B;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    children: 'Delete'
  }
}`,...(B=(h=s.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var x,y,S;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    children: 'Success'
  }
}`,...(S=(y=t.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var j,z,f;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">\r
      <Button size="sm">Small</Button>\r
      <Button size="md">Medium</Button>\r
      <Button size="lg">Large</Button>\r
      <Button size="xl">Extra Large</Button>\r
    </div>
}`,...(f=(z=o.parameters)==null?void 0:z.docs)==null?void 0:f.source}}};var b,D,w;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">\r
      <Button variant="primary">Primary</Button>\r
      <Button variant="secondary">Secondary</Button>\r
      <Button variant="danger">Danger</Button>\r
      <Button variant="success">Success</Button>\r
      <Button variant="warning">Warning</Button>\r
      <Button variant="outline">Outline</Button>\r
      <Button variant="ghost">Ghost</Button>\r
      <Button variant="link">Link</Button>\r
    </div>
}`,...(w=(D=i.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var C,L,N;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2 bg-gray-50 p-4 rounded-lg shadow">\r
      <Button variant="primary" size="md">Save</Button>\r
      <Button variant="secondary" size="md">Cancel</Button>\r
      <Button variant="danger" size="md">Delete</Button>\r
      <Button variant="ghost" size="md">More</Button>\r
    </div>,
  name: "Toolbar (Real Use Case)",
  parameters: {
    docs: {
      description: {
        story: "Demonstrates a real toolbar with primary, secondary, danger, and ghost action buttons."
      }
    }
  }
}`,...(N=(L=c.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};const P=["Primary","Secondary","Danger","Success","Sizes","Variants","ToolbarUseCase"];export{s as Danger,a as Primary,n as Secondary,o as Sizes,t as Success,c as ToolbarUseCase,i as Variants,P as __namedExportsOrder,M as default};
