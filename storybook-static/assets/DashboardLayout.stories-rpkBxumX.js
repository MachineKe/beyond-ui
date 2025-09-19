import{j as e,c}from"./cn-BIubIUvQ.js";import{r as o}from"./index-l2PZgWEW.js";import{S as k,H as L,U as m,F as U}from"./Sidebar-CDnv1LYg.js";import{D as q}from"./DashboardHeader-DBxTL3pt.js";import{C as V,a as _,b as R,c as H}from"./Card-CC1uLO-k.js";import{S as u}from"./StatsCard-D36QZLUw.js";import{B as T}from"./bar-chart-3-DmGAmpT-.js";import{S as b}from"./settings-hpC7mEtx.js";import{M as B}from"./mail-nuEY0pah.js";import{B as P}from"./bell-C728Sv8J.js";import{C as E}from"./calendar-Cb0UFsNn.js";import"./Avatar-wG5zcNRE.js";import"./Badge-DfI-0DkV.js";import"./chevron-right-mLRGtRCb.js";import"./createLucideIcon-C3m4BMJg.js";import"./user-D9nFVIhS.js";import"./Input-B0TXEbYS.js";import"./Button-D4FIw8ay.js";import"./menu-CtdtrUms.js";const a=o.forwardRef(({children:s,className:i,sidebarMenuItems:v,activeSidebarItem:x,breadcrumbs:S,onSidebarItemClick:j,showSearch:N,searchPlaceholder:w,onSearchChange:D,...l},I)=>{const[r,A]=o.useState(!1),d=()=>{A(M=>!M)};return e.jsxs("div",{ref:I,className:c("min-h-screen bg-gray-50",i),...l,children:[e.jsx(k,{collapsed:r,onToggle:d,menuItems:v,activeItem:x,onItemClick:j,className:l.sidebarClassName}),e.jsxs("div",{className:"flex flex-col min-h-screen",children:[e.jsx(q,{sidebarCollapsed:r,onMenuToggle:d,breadcrumbs:S,showSearch:N,searchPlaceholder:w,onSearchChange:D}),e.jsx("main",{className:c("flex-1 transition-all duration-300 p-6",l.disableSidebarMargin?"":r?"ml-16":"ml-72"),children:s})]}),!r&&e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden",onClick:d})]})});a.displayName="DashboardLayout";try{a.displayName="DashboardLayout",a.__docgenInfo={description:"",displayName:"DashboardLayout",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},sidebarMenuItems:{defaultValue:null,description:"",name:"sidebarMenuItems",required:!1,type:{name:"MenuItem[]"}},activeSidebarItem:{defaultValue:null,description:"",name:"activeSidebarItem",required:!1,type:{name:"string"}},breadcrumbs:{defaultValue:null,description:"",name:"breadcrumbs",required:!1,type:{name:"BreadcrumbItem[]"}},onSidebarItemClick:{defaultValue:null,description:"",name:"onSidebarItemClick",required:!1,type:{name:"(itemId: string) => void"}},showSearch:{defaultValue:null,description:"",name:"showSearch",required:!1,type:{name:"boolean"}},searchPlaceholder:{defaultValue:null,description:"",name:"searchPlaceholder",required:!1,type:{name:"string"}},onSearchChange:{defaultValue:null,description:"",name:"onSearchChange",required:!1,type:{name:"(value: string) => void"}},sidebarClassName:{defaultValue:null,description:"",name:"sidebarClassName",required:!1,type:{name:"string"}},disableSidebarMargin:{defaultValue:null,description:"",name:"disableSidebarMargin",required:!1,type:{name:"boolean"}}}}}catch{}const de={title:"Components/DashboardLayout",component:a,parameters:{layout:"centered"},tags:["autodocs"]},F=[{id:"dashboard",label:"Dashboard",icon:e.jsx(L,{className:"h-5 w-5"}),href:"#"},{id:"analytics",label:"Analytics",icon:e.jsx(T,{className:"h-5 w-5"}),badge:"New",href:"#"},{id:"users",label:"Users",icon:e.jsx(m,{className:"h-5 w-5"}),children:[{id:"all-users",label:"All Users",icon:e.jsx(m,{className:"h-4 w-4"}),href:"#"},{id:"user-roles",label:"User Roles",icon:e.jsx(b,{className:"h-4 w-4"}),href:"#"}]},{id:"reports",label:"Reports",icon:e.jsx(U,{className:"h-5 w-5"}),href:"#"},{id:"messages",label:"Messages",icon:e.jsx(B,{className:"h-5 w-5"}),badge:"2",href:"#"},{id:"notifications",label:"Notifications",icon:e.jsx(P,{className:"h-5 w-5"}),href:"#"},{id:"calendar",label:"Calendar",icon:e.jsx(E,{className:"h-5 w-5"}),href:"#"},{id:"settings",label:"Settings",icon:e.jsx(b,{className:"h-5 w-5"}),href:"#"}],t={render:()=>e.jsx(a,{children:e.jsx("div",{className:"p-4",children:"This is the dashboard content area."})}),args:{}},n={render:()=>{const[s,i]=o.useState("analytics");return e.jsxs(a,{sidebarMenuItems:F,activeSidebarItem:s,onSidebarItemClick:i,breadcrumbs:[{label:"Home",href:"#"},{label:"Analytics"}],children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",children:[e.jsx(u,{title:"Revenue",value:"$18,500",trend:{direction:"up",value:"+2.1%",label:"vs last week"}}),e.jsx(u,{title:"Users",value:"1,230",trend:{direction:"up",value:"+1.5%",label:"vs last week"}})]}),e.jsxs(V,{children:[e.jsx(_,{children:e.jsx(R,{children:"Daily Active Users"})}),e.jsx(H,{children:e.jsx("div",{className:"h-24 flex items-center justify-center text-gray-400",children:"[Chart Component Placeholder]"})})]})]})},name:"Analytics Dashboard (Real Use Case)",parameters:{docs:{description:{story:"Shows DashboardLayout with realistic sidebar, stateful menu, breadcrumbs, stats widgets and cards. Demonstrates real dashboard layout patterns."}}},args:{}};var h,p,f;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <DashboardLayout>\r
      <div className="p-4">This is the dashboard content area.</div>\r
    </DashboardLayout>,
  args: {}
}`,...(f=(p=t.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var g,y,C;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [active, setActive] = React.useState("analytics");
    return <DashboardLayout sidebarMenuItems={menuItems} activeSidebarItem={active} onSidebarItemClick={setActive} breadcrumbs={[{
      label: "Home",
      href: "#"
    }, {
      label: "Analytics"
    }]}>\r
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">\r
          <StatsCard title="Revenue" value="$18,500" trend={{
          direction: "up",
          value: "+2.1%",
          label: "vs last week"
        }} />\r
          <StatsCard title="Users" value="1,230" trend={{
          direction: "up",
          value: "+1.5%",
          label: "vs last week"
        }} />\r
        </div>\r
        <Card>\r
          <CardHeader>\r
            <CardTitle>Daily Active Users</CardTitle>\r
          </CardHeader>\r
          <CardContent>\r
            {/* In a real app, embed a chart or table here */}\r
            <div className="h-24 flex items-center justify-center text-gray-400">\r
              [Chart Component Placeholder]\r
            </div>\r
          </CardContent>\r
        </Card>\r
      </DashboardLayout>;
  },
  name: "Analytics Dashboard (Real Use Case)",
  parameters: {
    docs: {
      description: {
        story: "Shows DashboardLayout with realistic sidebar, stateful menu, breadcrumbs, stats widgets and cards. Demonstrates real dashboard layout patterns."
      }
    }
  },
  args: {}
}`,...(C=(y=n.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};const oe=["Default","AnalyticsDashboard"];export{n as AnalyticsDashboard,t as Default,oe as __namedExportsOrder,de as default};
