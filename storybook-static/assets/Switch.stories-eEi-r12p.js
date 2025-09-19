import{j as e,c as p,a as _}from"./cn-BIubIUvQ.js";import{r as m}from"./index-l2PZgWEW.js";const z=_("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-600 data-[state=unchecked]:bg-gray-200",{variants:{size:{sm:"h-5 w-9",md:"h-6 w-11",lg:"h-7 w-13"}},defaultVariants:{size:"md"}}),E=_("pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform",{variants:{size:{sm:"h-4 w-4 data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",md:"h-5 w-5 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",lg:"h-6 w-6 data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0"}},defaultVariants:{size:"md"}}),a=m.forwardRef(({className:t,size:r,checked:s=!1,onCheckedChange:n,...V},R)=>{const U=()=>{n==null||n(!s)};return e.jsx("button",{type:"button",role:"switch","aria-checked":s,"data-state":s?"checked":"unchecked",className:p(z({size:r}),t),onClick:U,ref:R,...V,children:e.jsx("span",{"data-state":s?"checked":"unchecked",className:p(E({size:r}))})})});a.displayName="Switch";try{a.displayName="Switch",a.__docgenInfo={description:"",displayName:"Switch",props:{checked:{defaultValue:{value:"false"},description:"",name:"checked",required:!1,type:{name:"boolean"}},onCheckedChange:{defaultValue:null,description:"",name:"onCheckedChange",required:!1,type:{name:"(checked: boolean) => void"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}}}catch{}const P={title:"Components/Switch",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"}}},c={args:{checked:!1}},l={args:{checked:!0}},i={args:{disabled:!0}},d={render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx(a,{})," ",e.jsx("span",{children:"Default"})]}),e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx(a,{checked:!0})," ",e.jsx("span",{children:"Checked"})]}),e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx(a,{disabled:!0})," ",e.jsx("span",{children:"Disabled"})]}),e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx(a,{checked:!0,disabled:!0})," ",e.jsx("span",{children:"Checked & Disabled"})]})]})},o={render:()=>{const[t,r]=m.useState(!0),[s,n]=m.useState(!1);return e.jsxs("div",{className:"bg-gray-50 p-4 w-72 rounded-lg flex flex-col gap-5",children:[e.jsx("div",{className:"font-semibold mb-1",children:"Settings"}),e.jsxs("label",{className:"flex items-center gap-2 justify-between",children:[e.jsx("span",{children:"Enable Notifications"}),e.jsx(a,{checked:t,onCheckedChange:r})]}),e.jsxs("label",{className:"flex items-center gap-2 justify-between",children:[e.jsx("span",{children:"Dark Mode"}),e.jsx(a,{checked:s,onCheckedChange:n})]}),e.jsxs("span",{className:"mt-2 text-xs text-gray-500",children:["Notifications: ",t?"On":"Off"," | Theme: ",s?"Dark":"Light"]})]})},name:"Settings Panel (Real Use Case)",parameters:{docs:{description:{story:"A settings panel with two tracked switches: notifications and dark mode, showing real value state."}}}};var h,u,f;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    checked: false
  }
}`,...(f=(u=c.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var g,b,x;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...(x=(b=l.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var k,w,N;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(N=(w=i.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var j,v,S;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">\r
      <label className="flex items-center gap-2">\r
        <Switch /> <span>Default</span>\r
      </label>\r
      <label className="flex items-center gap-2">\r
        <Switch checked /> <span>Checked</span>\r
      </label>\r
      <label className="flex items-center gap-2">\r
        <Switch disabled /> <span>Disabled</span>\r
      </label>\r
      <label className="flex items-center gap-2">\r
        <Switch checked disabled /> <span>Checked & Disabled</span>\r
      </label>\r
    </div>
}`,...(S=(v=d.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var y,C,D;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [notif, setNotif] = React.useState(true);
    const [dark, setDark] = React.useState(false);
    return <div className="bg-gray-50 p-4 w-72 rounded-lg flex flex-col gap-5">\r
        <div className="font-semibold mb-1">Settings</div>\r
        <label className="flex items-center gap-2 justify-between">\r
          <span>Enable Notifications</span>\r
          <Switch checked={notif} onCheckedChange={setNotif} />\r
        </label>\r
        <label className="flex items-center gap-2 justify-between">\r
          <span>Dark Mode</span>\r
          <Switch checked={dark} onCheckedChange={setDark} />\r
        </label>\r
        <span className="mt-2 text-xs text-gray-500">\r
          Notifications: {notif ? "On" : "Off"} | Theme: {dark ? "Dark" : "Light"}\r
        </span>\r
      </div>;
  },
  name: "Settings Panel (Real Use Case)",
  parameters: {
    docs: {
      description: {
        story: "A settings panel with two tracked switches: notifications and dark mode, showing real value state."
      }
    }
  }
}`,...(D=(C=o.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};const T=["Unchecked","Checked","Disabled","All","SettingsPanelUseCase"];export{d as All,l as Checked,i as Disabled,o as SettingsPanelUseCase,c as Unchecked,T as __namedExportsOrder,P as default};
