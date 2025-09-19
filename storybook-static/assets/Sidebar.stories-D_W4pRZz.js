import{j as e}from"./cn-BIubIUvQ.js";import{r as b}from"./index-l2PZgWEW.js";import{S as r,H as g,U as t,F as x}from"./Sidebar-CDnv1LYg.js";import{B as j}from"./bar-chart-3-DmGAmpT-.js";import{S as i}from"./settings-hpC7mEtx.js";import{M as w}from"./mail-nuEY0pah.js";import{B as v}from"./bell-C728Sv8J.js";import{C as N}from"./calendar-Cb0UFsNn.js";import"./Avatar-wG5zcNRE.js";import"./Badge-DfI-0DkV.js";import"./chevron-right-mLRGtRCb.js";import"./createLucideIcon-C3m4BMJg.js";import"./user-D9nFVIhS.js";const F={title:"Components/Sidebar",component:r,parameters:{layout:"centered"},tags:["autodocs"]},h=[{id:"dashboard",label:"Dashboard",icon:e.jsx(g,{className:"h-5 w-5"}),href:"#"},{id:"analytics",label:"Analytics",icon:e.jsx(j,{className:"h-5 w-5"}),badge:"New",href:"#"},{id:"users",label:"Users",icon:e.jsx(t,{className:"h-5 w-5"}),children:[{id:"all-users",label:"All Users",icon:e.jsx(t,{className:"h-4 w-4"}),href:"#"},{id:"user-roles",label:"User Roles",icon:e.jsx(i,{className:"h-4 w-4"}),href:"#"}]},{id:"reports",label:"Reports",icon:e.jsx(x,{className:"h-5 w-5"}),href:"#"},{id:"messages",label:"Messages",icon:e.jsx(w,{className:"h-5 w-5"}),badge:"2",href:"#"},{id:"notifications",label:"Notifications",icon:e.jsx(v,{className:"h-5 w-5"}),href:"#"},{id:"calendar",label:"Calendar",icon:e.jsx(N,{className:"h-5 w-5"}),href:"#"},{id:"settings",label:"Settings",icon:e.jsx(i,{className:"h-5 w-5"}),href:"#"}],s={render:()=>e.jsx(r,{menuItems:h})},a={render:()=>{const[p,u]=b.useState("dashboard");return e.jsx(r,{menuItems:h,activeItem:p,onItemClick:f=>u(f),collapsed:!1})},name:"Dashboard (Real Use Case)",parameters:{docs:{description:{story:"Realistic sidebar with multiple sections, icons, badges, and interactive highlighting for the active menu. Try clicking different menu and nested items."}}}};var o,n,c;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <Sidebar menuItems={demoMenu} />
}`,...(c=(n=s.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var m,l,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [active, setActive] = React.useState("dashboard");
    return <Sidebar menuItems={demoMenu} activeItem={active} onItemClick={id => setActive(id)} collapsed={false} />;
  },
  name: "Dashboard (Real Use Case)",
  parameters: {
    docs: {
      description: {
        story: "Realistic sidebar with multiple sections, icons, badges, and interactive highlighting for the active menu. Try clicking different menu and nested items."
      }
    }
  }
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const H=["Default","DashboardUseCase"];export{a as DashboardUseCase,s as Default,H as __namedExportsOrder,F as default};
