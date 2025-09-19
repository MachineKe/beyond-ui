import{j as e,c as L,a as k}from"./cn-BIubIUvQ.js";import{r as d}from"./index-l2PZgWEW.js";const B=k("flex min-h-[80px] w-full rounded-md border bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",{variants:{variant:{default:"border-gray-300",error:"border-danger-500 focus-visible:ring-danger-500",success:"border-success-500 focus-visible:ring-success-500"}},defaultVariants:{variant:"default"}}),s=d.forwardRef(({className:a,variant:r,...u},t)=>e.jsx("textarea",{className:L(B({variant:r,className:a})),ref:t,...u}));s.displayName="Textarea";try{s.displayName="Textarea",s.__docgenInfo={description:"",displayName:"Textarea",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"success"'},{value:'"error"'}]}}}}}catch{}const W={title:"Components/Textarea",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","success","error"]},disabled:{control:"boolean"}}},n={args:{placeholder:"Default textarea"}},o={args:{placeholder:"Success state",variant:"success"}},c={args:{placeholder:"Error state",variant:"error"}},l={args:{placeholder:"Disabled",disabled:!0}},i={render:()=>{const[a,r]=d.useState(""),[u,t]=d.useState(!1),[D,m]=d.useState(!1),E=8,R=()=>{a.trim().length<E?(m(!0),t(!1)):(t(!0),m(!1),r(""),setTimeout(()=>t(!1),2e3))};return e.jsxs("div",{className:"flex flex-col gap-2 bg-gray-50 p-4 rounded-lg w-96",children:[e.jsx(s,{value:a,onChange:V=>r(V.target.value),placeholder:"Write a comment...",maxLength:240}),e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsxs("span",{className:"text-gray-400",children:[a.length,"/240"]}),D&&e.jsx("span",{className:"text-danger-600",children:"Comment too short!"}),u&&e.jsx("span",{className:"text-success-600",children:"Submitted!"})]}),e.jsx("button",{className:"self-end bg-primary-600 text-white px-4 py-2 mt-2 rounded disabled:opacity-50",onClick:R,disabled:a.trim().length===0,children:"Send"})]})},name:"Comment Box (Real Use Case)",parameters:{docs:{description:{story:"A realistic comment input with character count and submit error feedback."}}}};var p,g,f;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    placeholder: 'Default textarea'
  }
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,x,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    placeholder: 'Success state',
    variant: 'success'
  }
}`,...(b=(x=o.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var v,S,y;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    placeholder: 'Error state',
    variant: 'error'
  }
}`,...(y=(S=c.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var N,C,w;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    placeholder: 'Disabled',
    disabled: true
  }
}`,...(w=(C=l.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var T,j,_;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState("");
    const [submitted, setSubmitted] = React.useState(false);
    const [tooShort, setTooShort] = React.useState(false);
    const minLength = 8;
    const handleSend = () => {
      if (value.trim().length < minLength) {
        setTooShort(true);
        setSubmitted(false);
      } else {
        setSubmitted(true);
        setTooShort(false);
        setValue("");
        setTimeout(() => setSubmitted(false), 2000);
      }
    };
    return <div className="flex flex-col gap-2 bg-gray-50 p-4 rounded-lg w-96">\r
        <Textarea value={value} onChange={e => setValue(e.target.value)} placeholder="Write a comment..." maxLength={240} />\r
        <div className="flex justify-between text-sm">\r
          <span className="text-gray-400">{value.length}/240</span>\r
          {tooShort && <span className="text-danger-600">Comment too short!</span>}\r
          {submitted && <span className="text-success-600">Submitted!</span>}\r
        </div>\r
        <button className="self-end bg-primary-600 text-white px-4 py-2 mt-2 rounded disabled:opacity-50" onClick={handleSend} disabled={value.trim().length === 0}>\r
          Send\r
        </button>\r
      </div>;
  },
  name: "Comment Box (Real Use Case)",
  parameters: {
    docs: {
      description: {
        story: "A realistic comment input with character count and submit error feedback."
      }
    }
  }
}`,...(_=(j=i.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};const q=["Default","Success","Error","Disabled","CommentBoxUseCase"];export{i as CommentBoxUseCase,n as Default,l as Disabled,c as Error,o as Success,q as __namedExportsOrder,W as default};
