import{j as e}from"./cn-BIubIUvQ.js";import{S as n}from"./StatsCard-D36QZLUw.js";import{B as s}from"./bar-chart-3-DmGAmpT-.js";import"./index-l2PZgWEW.js";import"./Card-CC1uLO-k.js";import"./createLucideIcon-C3m4BMJg.js";const S={title:"Components/StatsCard",component:n,parameters:{layout:"centered"},tags:["autodocs"]},a={args:{title:"Total Users",value:"2,543",trend:{direction:"up",value:"+12%",label:"from last month"},icon:e.jsx(s,{className:"h-6 w-6 text-primary-600"})}},r={args:{variant:"gradient",color:"success",title:"Revenue",value:"$45,231",trend:{direction:"up",value:"+8.2%",label:"from last month"},icon:e.jsx(s,{className:"h-6 w-6"})}},t={render:()=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx(n,{title:"Total Users",value:"2,543",trend:{direction:"up",value:"+12%",label:"from last month"},icon:e.jsx(s,{className:"h-6 w-6 text-primary-600"})}),e.jsx(n,{variant:"gradient",color:"success",title:"Revenue",value:"$45,231",trend:{direction:"up",value:"+8.2%",label:"from last month"},icon:e.jsx(s,{className:"h-6 w-6"})})]})};var o,l,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    title: "Total Users",
    value: "2,543",
    trend: {
      direction: "up",
      value: "+12%",
      label: "from last month"
    },
    icon: <BarChart3 className="h-6 w-6 text-primary-600" />
  }
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var i,m,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: "gradient",
    color: "success",
    title: "Revenue",
    value: "$45,231",
    trend: {
      direction: "up",
      value: "+8.2%",
      label: "from last month"
    },
    icon: <BarChart3 className="h-6 w-6" />
  }
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,p,v;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-1 md:grid-cols-2 gap-4">\r
      <StatsCard title="Total Users" value="2,543" trend={{
      direction: "up",
      value: "+12%",
      label: "from last month"
    }} icon={<BarChart3 className="h-6 w-6 text-primary-600" />} />\r
      <StatsCard variant="gradient" color="success" title="Revenue" value="$45,231" trend={{
      direction: "up",
      value: "+8.2%",
      label: "from last month"
    }} icon={<BarChart3 className="h-6 w-6" />} />\r
    </div>
}`,...(v=(p=t.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};const j=["Default","GradientSuccess","Group"];export{a as Default,r as GradientSuccess,t as Group,j as __namedExportsOrder,S as default};
