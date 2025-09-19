import{j as e,c as t,a as F}from"./cn-BIubIUvQ.js";import{r}from"./index-l2PZgWEW.js";import{X as O}from"./x-DqKXAehi.js";import{B as o}from"./Button-D4FIw8ay.js";import"./createLucideIcon-C3m4BMJg.js";const k=F("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-lg duration-200 sm:rounded-lg",{variants:{size:{sm:"max-w-sm",md:"max-w-lg",lg:"max-w-2xl",xl:"max-w-4xl",full:"max-w-[95vw] max-h-[95vh]"}},defaultVariants:{size:"md"}}),s=({open:n,onOpenChange:a,children:x,size:f})=>{const l=()=>{a==null||a(!1)};return n?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-50 bg-black/50 backdrop-blur-sm",onClick:l}),e.jsxs("div",{className:t(k({size:f})),children:[e.jsxs("button",{onClick:l,className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:pointer-events-none",children:[e.jsx(O,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Close"})]}),x]})]}):null},c=({className:n,...a})=>e.jsx("div",{className:t("flex flex-col space-y-1.5 text-center sm:text-left",n),...a}),m=({className:n,...a})=>e.jsx("h2",{className:t("text-lg font-semibold leading-none tracking-tight",n),...a}),y=({className:n,...a})=>e.jsx("p",{className:t("text-sm text-gray-500",n),...a}),p=({className:n,...a})=>e.jsx("div",{className:t("grid gap-4 py-4",n),...a}),u=({className:n,...a})=>e.jsx("div",{className:t("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",n),...a});try{s.displayName="Modal",s.__docgenInfo={description:"",displayName:"Modal",props:{open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"",name:"onOpenChange",required:!1,type:{name:"(open: boolean) => void"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"full"'}]}}}}}catch{}try{c.displayName="ModalHeader",c.__docgenInfo={description:"",displayName:"ModalHeader",props:{}}}catch{}try{m.displayName="ModalTitle",m.__docgenInfo={description:"",displayName:"ModalTitle",props:{}}}catch{}try{y.displayName="ModalDescription",y.__docgenInfo={description:"",displayName:"ModalDescription",props:{}}}catch{}try{p.displayName="ModalContent",p.__docgenInfo={description:"",displayName:"ModalContent",props:{}}}catch{}try{u.displayName="ModalFooter",u.__docgenInfo={description:"",displayName:"ModalFooter",props:{}}}catch{}const U={title:"Components/Modal",component:s,parameters:{layout:"centered"},tags:["autodocs"]},d={render:()=>{const[n,a]=r.useState(!1);return e.jsxs("div",{children:[e.jsx(o,{onClick:()=>a(!0),children:"Show Modal"}),e.jsxs(s,{open:n,onOpenChange:a,children:[e.jsx(c,{children:e.jsx(m,{children:"Demo Modal"})}),e.jsx(p,{children:e.jsx("p",{children:"This is a basic modal dialog."})}),e.jsx(u,{children:e.jsx(o,{variant:"primary",onClick:()=>a(!1),children:"Close"})})]})]})}},i={render:()=>{const[n,a]=r.useState(!1),[x,f]=r.useState(""),[l,b]=r.useState(""),[S,g]=r.useState(!1),w=()=>{g(!0),setTimeout(()=>{g(!1),a(!1)},1500)};return e.jsxs("div",{children:[e.jsx(o,{variant:"primary",onClick:()=>a(!0),children:"Open User Form"}),e.jsxs(s,{open:n,onOpenChange:a,size:"md",children:[e.jsx(c,{children:e.jsx(m,{children:"User Form"})}),e.jsxs(p,{children:[e.jsxs("form",{className:"flex flex-col gap-4",children:[e.jsx("input",{className:"border rounded px-3 py-2",placeholder:"Name",value:x,onChange:h=>f(h.target.value)}),e.jsx("input",{className:"border rounded px-3 py-2",placeholder:"Email",value:l,onChange:h=>b(h.target.value)})]}),S&&e.jsx("div",{className:"text-success-600 mt-2 font-medium",children:"Submitted!"})]}),e.jsxs(u,{children:[e.jsx(o,{variant:"secondary",onClick:()=>a(!1),children:"Cancel"}),e.jsx(o,{variant:"primary",onClick:w,children:"Save"})]})]})]})},name:"Modal with Form (Real Use Case)",parameters:{docs:{description:{story:"Modal dialog with form elements, submit, and cancel logic. Models real form modals used in modern apps."}}}};var M,_,v;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <div>\r
        <Button onClick={() => setOpen(true)}>Show Modal</Button>\r
        <Modal open={open} onOpenChange={setOpen}>\r
          <ModalHeader>\r
            <ModalTitle>Demo Modal</ModalTitle>\r
          </ModalHeader>\r
          <ModalContent>\r
            <p>This is a basic modal dialog.</p>\r
          </ModalContent>\r
          <ModalFooter>\r
            <Button variant="primary" onClick={() => setOpen(false)}>\r
              Close\r
            </Button>\r
          </ModalFooter>\r
        </Modal>\r
      </div>;
  }
}`,...(v=(_=d.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};var j,C,N;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [submitted, setSubmitted] = React.useState(false);
    const handleSave = () => {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setOpen(false);
      }, 1500);
    };
    return <div>\r
        <Button variant="primary" onClick={() => setOpen(true)}>\r
          Open User Form\r
        </Button>\r
        <Modal open={open} onOpenChange={setOpen} size="md">\r
          <ModalHeader>\r
            <ModalTitle>User Form</ModalTitle>\r
          </ModalHeader>\r
          <ModalContent>\r
            <form className="flex flex-col gap-4">\r
              <input className="border rounded px-3 py-2" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />\r
              <input className="border rounded px-3 py-2" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />\r
            </form>\r
            {submitted && <div className="text-success-600 mt-2 font-medium">Submitted!</div>}\r
          </ModalContent>\r
          <ModalFooter>\r
            <Button variant="secondary" onClick={() => setOpen(false)}>\r
              Cancel\r
            </Button>\r
            <Button variant="primary" onClick={handleSave}>\r
              Save\r
            </Button>\r
          </ModalFooter>\r
        </Modal>\r
      </div>;
  },
  name: "Modal with Form (Real Use Case)",
  parameters: {
    docs: {
      description: {
        story: "Modal dialog with form elements, submit, and cancel logic. Models real form modals used in modern apps."
      }
    }
  }
}`,...(N=(C=i.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};const D=["Default","ModalFormUseCase"];export{d as Default,i as ModalFormUseCase,D as __namedExportsOrder,U as default};
