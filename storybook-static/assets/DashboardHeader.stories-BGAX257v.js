import{j as a}from"./cn-BIubIUvQ.js";import{D as t}from"./DashboardHeader-DBxTL3pt.js";import{B as m}from"./Button-D4FIw8ay.js";import"./index-l2PZgWEW.js";import"./Input-B0TXEbYS.js";import"./Avatar-wG5zcNRE.js";import"./Badge-DfI-0DkV.js";import"./menu-CtdtrUms.js";import"./createLucideIcon-C3m4BMJg.js";import"./bell-C728Sv8J.js";import"./settings-hpC7mEtx.js";const v={title:"Components/DashboardHeader",component:t,parameters:{layout:"centered"},tags:["autodocs"]},e={render:()=>a.jsx(t,{breadcrumbs:[{label:"Dashboard"},{label:"Insights"}]})},r={render:()=>a.jsx(t,{breadcrumbs:[{label:"Home",href:"#"},{label:"Reports"}],actions:a.jsx(m,{variant:"primary",size:"sm",children:"Add Widget"}),title:"Reports Overview",description:"Track, measure, and export all key analytics for your organization."}),name:"Header With Actions (Real Use Case)",parameters:{docs:{description:{story:"A page header with breadcrumbs, title, subtitle/description, and an actions slot for page-level buttons."}}}};var s,o,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <DashboardHeader breadcrumbs={[{
    label: "Dashboard"
  }, {
    label: "Insights"
  }]} />
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var i,d,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <DashboardHeader breadcrumbs={[{
    label: "Home",
    href: "#"
  }, {
    label: "Reports"
  }]} actions={<Button variant="primary" size="sm">\r
          Add Widget\r
        </Button>} title="Reports Overview" description="Track, measure, and export all key analytics for your organization." />,
  name: "Header With Actions (Real Use Case)",
  parameters: {
    docs: {
      description: {
        story: "A page header with breadcrumbs, title, subtitle/description, and an actions slot for page-level buttons."
      }
    }
  }
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const A=["Default","HeaderWithActionsUseCase"];export{e as Default,r as HeaderWithActionsUseCase,A as __namedExportsOrder,v as default};
