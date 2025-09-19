import{j as e}from"./cn-BIubIUvQ.js";import{r as c}from"./index-l2PZgWEW.js";import{I as r}from"./Input-B0TXEbYS.js";const M={title:"Components/Input",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","success","error"]},inputSize:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"}}},t={args:{placeholder:"Default input"}},s={args:{placeholder:"Success state",variant:"success"}},n={args:{placeholder:"Error state",variant:"error"}},o={render:()=>e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{placeholder:"Small",inputSize:"sm"}),e.jsx(r,{placeholder:"Medium",inputSize:"md"}),e.jsx(r,{placeholder:"Large",inputSize:"lg"})]})},l={render:()=>{const[C,w]=c.useState(""),[m,D]=c.useState(""),[i,u]=c.useState(!1),R=a=>{a.preventDefault(),m.includes("@")?u(!1):u(!0)};return e.jsxs("form",{onSubmit:R,className:"flex flex-col gap-3 w-64 bg-gray-50 p-4 rounded-lg",children:[e.jsx(r,{placeholder:"Name",value:C,onChange:a=>w(a.target.value)}),e.jsx(r,{placeholder:"Email",inputSize:"md",value:m,variant:i?"error":"default",onChange:a=>D(a.target.value)}),i&&e.jsx("span",{className:"text-danger-600 text-xs mt-1",children:"Please enter a valid email address."}),e.jsx("button",{type:"submit",className:"mt-2 bg-primary-600 text-white py-2 px-4 rounded-md",children:"Submit"})]})},name:"Simple Form (Real Use Case)",parameters:{docs:{description:{story:"Demonstrates Inputs in action within a small controlled form with error validation and submit button."}}}};var p,d,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    placeholder: 'Default input'
  }
}`,...(g=(d=t.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var S,h,f;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    placeholder: 'Success state',
    variant: 'success'
  }
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,v,b;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    placeholder: 'Error state',
    variant: 'error'
  }
}`,...(b=(v=n.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var E,y,N;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="space-y-2">\r
      <Input placeholder="Small" inputSize="sm" />\r
      <Input placeholder="Medium" inputSize="md" />\r
      <Input placeholder="Large" inputSize="lg" />\r
    </div>
}`,...(N=(y=o.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var j,z,I;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [error, setError] = React.useState(false);
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!email.includes("@")) setError(true);else setError(false);
    };
    return <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-64 bg-gray-50 p-4 rounded-lg">\r
        <Input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />\r
        <Input placeholder="Email" inputSize="md" value={email} variant={error ? "error" : "default"} onChange={e => setEmail(e.target.value)} />\r
        {error && <span className="text-danger-600 text-xs mt-1">Please enter a valid email address.</span>}\r
        <button type="submit" className="mt-2 bg-primary-600 text-white py-2 px-4 rounded-md">\r
          Submit\r
        </button>\r
      </form>;
  },
  name: "Simple Form (Real Use Case)",
  parameters: {
    docs: {
      description: {
        story: "Demonstrates Inputs in action within a small controlled form with error validation and submit button."
      }
    }
  }
}`,...(I=(z=l.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};const P=["Default","Success","Error","Sizes","FormUseCase"];export{t as Default,n as Error,l as FormUseCase,o as Sizes,s as Success,P as __namedExportsOrder,M as default};
