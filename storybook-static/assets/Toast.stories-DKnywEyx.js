import{j as e}from"./cn-BIubIUvQ.js";import{r as g}from"./index-l2PZgWEW.js";import{T as o,s as a}from"./Toast-CbYkhNw1.js";import{B as f}from"./Button-D4FIw8ay.js";import"./x-DqKXAehi.js";import"./createLucideIcon-C3m4BMJg.js";import"./alert-circle-uMwXuvtt.js";const w={title:"Components/Toast",component:o,parameters:{layout:"centered"},tags:["autodocs"]},s={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(f,{onClick:()=>a.success("This is a toast notification!"),children:"Show Toast"}),e.jsx(o,{})]})},r={render:()=>{const[n,i]=g.useState(""),b=t=>{t.preventDefault(),n.includes("@")?(a.success("Subscribed successfully!"),i("")):a.error("Invalid email!")};return e.jsxs("div",{children:[e.jsxs("form",{onSubmit:b,className:"flex gap-2 items-center p-4 bg-gray-50 rounded-lg w-80",children:[e.jsx("input",{className:"flex-1 border border-gray-200 rounded px-2 py-1",placeholder:"Enter your email...",type:"email",value:n,onChange:t=>i(t.target.value)}),e.jsx(f,{type:"submit",size:"sm",children:"Subscribe"})]}),e.jsx(o,{})]})},name:"Toast after Form Submit (Real Use Case)",parameters:{docs:{description:{story:"Demonstrates using Toast for real feedback when submitting a form (success or validation error)."}}}};var m,c,l;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <>\r
      <Button onClick={() => showToast.success("This is a toast notification!")}>\r
        Show Toast\r
      </Button>\r
      <Toast />\r
    </>
}`,...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,d,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const [email, setEmail] = React.useState("");
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!email.includes("@")) {
        showToast.error("Invalid email!");
      } else {
        showToast.success("Subscribed successfully!");
        setEmail("");
      }
    };
    return <div>\r
        <form onSubmit={handleSubmit} className="flex gap-2 items-center p-4 bg-gray-50 rounded-lg w-80">\r
          <input className="flex-1 border border-gray-200 rounded px-2 py-1" placeholder="Enter your email..." type="email" value={email} onChange={e => setEmail(e.target.value)} />\r
          <Button type="submit" size="sm">\r
            Subscribe\r
          </Button>\r
        </form>\r
        <Toast />\r
      </div>;
  },
  name: "Toast after Form Submit (Real Use Case)",
  parameters: {
    docs: {
      description: {
        story: "Demonstrates using Toast for real feedback when submitting a form (success or validation error)."
      }
    }
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const E=["Default","ToastAfterForm"];export{s as Default,r as ToastAfterForm,E as __namedExportsOrder,w as default};
