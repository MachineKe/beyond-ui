import{j as r}from"./cn-BIubIUvQ.js";import{A as e,a as s,b as a}from"./Alert-DUE4JwdK.js";import"./index-l2PZgWEW.js";const E={title:"Components/Alert",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["info","success","warning","danger"]}}},n={render:()=>r.jsxs(e,{variant:"info",children:[r.jsx(s,{children:"Information"}),r.jsx(a,{children:"This is an informational alert."})]})},o={render:()=>r.jsxs(e,{variant:"success",children:[r.jsx(s,{children:"Success"}),r.jsx(a,{children:"Operation completed successfully!"})]})},t={render:()=>r.jsxs(e,{variant:"warning",children:[r.jsx(s,{children:"Warning"}),r.jsx(a,{children:"Please review your input before proceeding."})]})},i={render:()=>r.jsxs(e,{variant:"danger",children:[r.jsx(s,{children:"Error"}),r.jsx(a,{children:"Something went wrong."})]})},l={render:()=>r.jsxs("form",{className:"w-80 flex flex-col gap-2 p-4 bg-gray-50 rounded-lg",children:[r.jsxs(e,{variant:"danger",children:[r.jsx(s,{children:"Form Error"}),r.jsx(a,{children:"Your password must be at least 8 characters. Please try again."})]}),r.jsx("input",{className:"border-b border-gray-300 bg-transparent p-2 rounded focus:border-primary-600",placeholder:"Username"}),r.jsx("input",{className:"border-b border-gray-300 bg-transparent p-2 rounded focus:border-primary-600",placeholder:"Password",type:"password"})]}),name:"Form Error (Real Use Case)",parameters:{docs:{description:{story:"Demonstrates Alert component used to display form errors above form fields, typical in UI form validation."}}}};var c,d,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <Alert variant="info">\r
      <AlertTitle>Information</AlertTitle>\r
      <AlertDescription>This is an informational alert.</AlertDescription>\r
    </Alert>
}`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,u,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Alert variant="success">\r
      <AlertTitle>Success</AlertTitle>\r
      <AlertDescription>Operation completed successfully!</AlertDescription>\r
    </Alert>
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var A,f,b;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Alert variant="warning">\r
      <AlertTitle>Warning</AlertTitle>\r
      <AlertDescription>Please review your input before proceeding.</AlertDescription>\r
    </Alert>
}`,...(b=(f=t.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var h,x,y;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Alert variant="danger">\r
      <AlertTitle>Error</AlertTitle>\r
      <AlertDescription>Something went wrong.</AlertDescription>\r
    </Alert>
}`,...(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var j,v,w;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <form className="w-80 flex flex-col gap-2 p-4 bg-gray-50 rounded-lg">\r
      <Alert variant="danger">\r
        <AlertTitle>Form Error</AlertTitle>\r
        <AlertDescription>\r
          Your password must be at least 8 characters. Please try again.\r
        </AlertDescription>\r
      </Alert>\r
      <input className="border-b border-gray-300 bg-transparent p-2 rounded focus:border-primary-600" placeholder="Username" />\r
      <input className="border-b border-gray-300 bg-transparent p-2 rounded focus:border-primary-600" placeholder="Password" type="password" />\r
    </form>,
  name: "Form Error (Real Use Case)",
  parameters: {
    docs: {
      description: {
        story: "Demonstrates Alert component used to display form errors above form fields, typical in UI form validation."
      }
    }
  }
}`,...(w=(v=l.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const U=["Info","Success","Warning","Danger","FormErrorsUseCase"];export{i as Danger,l as FormErrorsUseCase,n as Info,o as Success,t as Warning,U as __namedExportsOrder,E as default};
