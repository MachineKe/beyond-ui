import{j as e}from"./cn-BIubIUvQ.js";import{r as R}from"./index-l2PZgWEW.js";import{C as r}from"./Checkbox-BxpokRjs.js";import"./createLucideIcon-C3m4BMJg.js";const A={title:"Components/Checkbox",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},size:{control:"select",options:["sm","md","lg"]}}},a={args:{checked:!1}},n={args:{checked:!0}},c={args:{disabled:!0}},o={render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(r,{size:"sm"})," ",e.jsx(r,{size:"md"})," ",e.jsx(r,{size:"lg"})]})},t={render:()=>{const[z,N]=R.useState(["inbox"]),U=[{id:"inbox",label:"Inbox"},{id:"starred",label:"Starred"},{id:"archived",label:"Archived"}],y=s=>{N(l=>l.includes(s)?l.filter(F=>F!==s):[...l,s])};return e.jsxs("div",{className:"bg-gray-50 p-4 w-60 rounded-lg flex flex-col gap-2",children:[e.jsx("div",{className:"font-semibold mb-1",children:"Filters"}),U.map(s=>e.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[e.jsx(r,{checked:z.includes(s.id),onCheckedChange:()=>y(s.id),size:"md"}),e.jsx("span",{children:s.label})]},s.id))]})},name:"Filter Panel (Real Use Case)",parameters:{docs:{description:{story:"Real-world example using checkboxes to drive a UI filtering panel."}}}};var d,i,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    checked: false
  }
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,g,x;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...(x=(g=n.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var b,u,h;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(h=(u=c.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var f,k,C;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">\r
      <Checkbox size="sm" /> <Checkbox size="md" /> <Checkbox size="lg" />\r
    </div>
}`,...(C=(k=o.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var v,S,j;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = React.useState<string[]>(["inbox"]);
    const filters = [{
      id: "inbox",
      label: "Inbox"
    }, {
      id: "starred",
      label: "Starred"
    }, {
      id: "archived",
      label: "Archived"
    }];
    const toggle = (id: string) => {
      setSelected(sel => sel.includes(id) ? sel.filter(x => x !== id) : [...sel, id]);
    };
    return <div className="bg-gray-50 p-4 w-60 rounded-lg flex flex-col gap-2">\r
        <div className="font-semibold mb-1">Filters</div>\r
        {filters.map(opt => <label key={opt.id} className="flex items-center gap-2 cursor-pointer">\r
            <Checkbox checked={selected.includes(opt.id)} onCheckedChange={() => toggle(opt.id)} size="md" />\r
            <span>{opt.label}</span>\r
          </label>)}\r
      </div>;
  },
  name: "Filter Panel (Real Use Case)",
  parameters: {
    docs: {
      description: {
        story: "Real-world example using checkboxes to drive a UI filtering panel."
      }
    }
  }
}`,...(j=(S=t.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};const D=["Unchecked","Checked","Disabled","Sizes","FilterPanelUseCase"];export{n as Checked,c as Disabled,t as FilterPanelUseCase,o as Sizes,a as Unchecked,D as __namedExportsOrder,A as default};
