import{j as a,c as C,a as y}from"./cn-BIubIUvQ.js";import{r as b}from"./index-l2PZgWEW.js";import{S as f}from"./StatsCard-D36QZLUw.js";import{C as o,a as l,b as c,c as m}from"./Card-CC1uLO-k.js";import{B as w}from"./Badge-DfI-0DkV.js";import{B as j}from"./bar-chart-3-DmGAmpT-.js";import{B as D}from"./bell-C728Sv8J.js";import"./createLucideIcon-C3m4BMJg.js";const G=y("grid gap-6",{variants:{columns:{1:"grid-cols-1",2:"grid-cols-1 md:grid-cols-2",3:"grid-cols-1 md:grid-cols-2 lg:grid-cols-3",4:"grid-cols-1 md:grid-cols-2 lg:grid-cols-4",6:"grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",12:"grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-12"}},defaultVariants:{columns:12}}),W=y("min-h-0",{variants:{colSpan:{1:"col-span-1",2:"col-span-1 md:col-span-2",3:"col-span-1 md:col-span-2 lg:col-span-3",4:"col-span-1 md:col-span-2 lg:col-span-4",6:"col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-6",12:"col-span-full"},rowSpan:{1:"row-span-1",2:"row-span-2",3:"row-span-3",4:"row-span-4"}},defaultVariants:{colSpan:1,rowSpan:1}}),r=b.forwardRef(({className:s,columns:n,...t},i)=>a.jsx("div",{ref:i,className:C(G({columns:n}),s),...t})),S=b.forwardRef(({className:s,colSpan:n,rowSpan:t,...i},N)=>a.jsx("div",{ref:N,className:C(W({colSpan:n,rowSpan:t}),s),...i}));r.displayName="DashboardGrid";S.displayName="DashboardGridItem";try{r.displayName="DashboardGrid",r.__docgenInfo={description:"",displayName:"DashboardGrid",props:{columns:{defaultValue:null,description:"",name:"columns",required:!1,type:{name:"enum",value:[{value:"1"},{value:"12"},{value:"2"},{value:"3"},{value:"4"},{value:"6"}]}}}}}catch{}const V={title:"Components/DashboardGrid",component:r,parameters:{layout:"centered"},tags:["autodocs"]},e={render:()=>a.jsxs(r,{children:[a.jsx("div",{className:"p-4 bg-gray-100 rounded",children:"Widget 1"}),a.jsx("div",{className:"p-4 bg-gray-100 rounded",children:"Widget 2"}),a.jsx("div",{className:"p-4 bg-gray-100 rounded",children:"Widget 3"}),a.jsx("div",{className:"p-4 bg-gray-100 rounded",children:"Widget 4"})]})},d={render:()=>a.jsxs(r,{children:[a.jsx(f,{title:"Total Users",value:"2,534",trend:{direction:"up",value:"+3.2%",label:"last week"},icon:a.jsx(j,{className:"h-6 w-6 text-primary-600"})}),a.jsxs(o,{children:[a.jsx(l,{children:a.jsx(c,{children:"Daily Activity"})}),a.jsx(m,{children:a.jsx("span",{className:"text-gray-400",children:"[Insert Chart Component Here]"})})]}),a.jsxs(o,{children:[a.jsx(l,{children:a.jsx(c,{children:"Notifications"})}),a.jsxs(m,{children:[a.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[a.jsx(D,{className:"h-5 w-5 text-warning-600"}),a.jsx(w,{variant:"warning",children:"3 New"})]}),a.jsx("div",{className:"text-sm text-gray-600",children:"You have new system alerts and messages."})]})]})]}),name:"Analytics / Widgets Grid (Real Use Case)",parameters:{docs:{description:{story:"Shows a dashboard grid with stats, chart, and notifications—mirroring a real analytics dashboard setup."}}}};var p,g,u;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <DashboardGrid>\r
      <div className="p-4 bg-gray-100 rounded">Widget 1</div>\r
      <div className="p-4 bg-gray-100 rounded">Widget 2</div>\r
      <div className="p-4 bg-gray-100 rounded">Widget 3</div>\r
      <div className="p-4 bg-gray-100 rounded">Widget 4</div>\r
    </DashboardGrid>
}`,...(u=(g=e.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var h,x,v;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <DashboardGrid>\r
      <StatsCard title="Total Users" value="2,534" trend={{
      direction: "up",
      value: "+3.2%",
      label: "last week"
    }} icon={<BarChart3 className="h-6 w-6 text-primary-600" />} />\r
      <Card>\r
        <CardHeader>\r
          <CardTitle>Daily Activity</CardTitle>\r
        </CardHeader>\r
        <CardContent>\r
          <span className="text-gray-400">[Insert Chart Component Here]</span>\r
        </CardContent>\r
      </Card>\r
      <Card>\r
        <CardHeader>\r
          <CardTitle>Notifications</CardTitle>\r
        </CardHeader>\r
        <CardContent>\r
          <div className="flex items-center gap-2 mb-2">\r
            <Bell className="h-5 w-5 text-warning-600" />\r
            <Badge variant="warning">3 New</Badge>\r
          </div>\r
          <div className="text-sm text-gray-600">\r
            You have new system alerts and messages.\r
          </div>\r
        </CardContent>\r
      </Card>\r
    </DashboardGrid>,
  name: "Analytics / Widgets Grid (Real Use Case)",
  parameters: {
    docs: {
      description: {
        story: "Shows a dashboard grid with stats, chart, and notifications—mirroring a real analytics dashboard setup."
      }
    }
  }
}`,...(v=(x=d.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const E=["Default","AnalyticsWidgetsUseCase"];export{d as AnalyticsWidgetsUseCase,e as Default,E as __namedExportsOrder,V as default};
