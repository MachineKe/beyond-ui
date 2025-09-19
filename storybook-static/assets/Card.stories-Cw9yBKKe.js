import{j as r}from"./cn-BIubIUvQ.js";import{C as e,a,b as s,c as d}from"./Card-CC1uLO-k.js";import"./index-l2PZgWEW.js";const H={title:"Components/Card",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","elevated"]},padding:{control:"select",options:["md"]}}},n={render:()=>r.jsxs(e,{children:[r.jsx(a,{children:r.jsx(s,{children:"Default Card"})}),r.jsx(d,{children:r.jsx("p",{className:"text-gray-600",children:"This is a default card with standard styling."})})]})},t={render:()=>r.jsxs(e,{variant:"elevated",children:[r.jsx(a,{children:r.jsx(s,{children:"Elevated Card"})}),r.jsx(d,{children:r.jsx("p",{className:"text-gray-600",children:"This card has elevated shadow styling."})})]})},l={render:()=>r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[r.jsxs(e,{children:[r.jsx(a,{children:r.jsx(s,{children:"Default Card"})}),r.jsx(d,{children:r.jsx("p",{className:"text-gray-600",children:"This is a default card with standard styling."})})]}),r.jsxs(e,{variant:"elevated",children:[r.jsx(a,{children:r.jsx(s,{children:"Elevated Card"})}),r.jsx(d,{children:r.jsx("p",{className:"text-gray-600",children:"This card has elevated shadow styling."})})]})]})},i={render:()=>r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[r.jsxs(e,{variant:"elevated",children:[r.jsx(a,{children:r.jsx(s,{children:"Revenue"})}),r.jsxs(d,{children:[r.jsx("span",{className:"text-2xl font-bold",children:"$18,500"}),r.jsx("p",{className:"text-success-600 mt-2",children:"+2.1% vs last week"})]})]}),r.jsxs(e,{children:[r.jsx(a,{children:r.jsx(s,{children:"Notifications"})}),r.jsx(d,{children:r.jsx("span",{className:"text-xl",children:"5 New Alerts"})})]}),r.jsxs(e,{children:[r.jsx(a,{children:r.jsx(s,{children:"User Profile"})}),r.jsx(d,{children:r.jsxs("div",{children:[r.jsx("span",{className:"font-semibold",children:"Jane Doe"}),r.jsx("p",{className:"text-gray-500",children:"jane@company.com"})]})})]})]}),name:"Dashboard Cards (Real Use Case)",parameters:{docs:{description:{story:"Simulates a dashboard with different types of cards for stats, notifications, and user profile."}}}};var c,o,C;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <Card>\r
      <CardHeader>\r
        <CardTitle>Default Card</CardTitle>\r
      </CardHeader>\r
      <CardContent>\r
        <p className="text-gray-600">This is a default card with standard styling.</p>\r
      </CardContent>\r
    </Card>
}`,...(C=(o=n.parameters)==null?void 0:o.docs)==null?void 0:C.source}}};var p,h,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Card variant="elevated">\r
      <CardHeader>\r
        <CardTitle>Elevated Card</CardTitle>\r
      </CardHeader>\r
      <CardContent>\r
        <p className="text-gray-600">This card has elevated shadow styling.</p>\r
      </CardContent>\r
    </Card>
}`,...(m=(h=t.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var x,j,g;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-1 md:grid-cols-2 gap-4">\r
      <Card>\r
        <CardHeader>\r
          <CardTitle>Default Card</CardTitle>\r
        </CardHeader>\r
        <CardContent>\r
          <p className="text-gray-600">This is a default card with standard styling.</p>\r
        </CardContent>\r
      </Card>\r
      <Card variant="elevated">\r
        <CardHeader>\r
          <CardTitle>Elevated Card</CardTitle>\r
        </CardHeader>\r
        <CardContent>\r
          <p className="text-gray-600">This card has elevated shadow styling.</p>\r
        </CardContent>\r
      </Card>\r
    </div>
}`,...(g=(j=l.parameters)==null?void 0:j.docs)==null?void 0:g.source}}};var u,v,f;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-1 md:grid-cols-3 gap-6">\r
      <Card variant="elevated">\r
        <CardHeader>\r
          <CardTitle>Revenue</CardTitle>\r
        </CardHeader>\r
        <CardContent>\r
          <span className="text-2xl font-bold">$18,500</span>\r
          <p className="text-success-600 mt-2">+2.1% vs last week</p>\r
        </CardContent>\r
      </Card>\r
      <Card>\r
        <CardHeader>\r
          <CardTitle>Notifications</CardTitle>\r
        </CardHeader>\r
        <CardContent>\r
          <span className="text-xl">5 New Alerts</span>\r
        </CardContent>\r
      </Card>\r
      <Card>\r
        <CardHeader>\r
          <CardTitle>User Profile</CardTitle>\r
        </CardHeader>\r
        <CardContent>\r
          <div>\r
            <span className="font-semibold">Jane Doe</span>\r
            <p className="text-gray-500">jane@company.com</p>\r
          </div>\r
        </CardContent>\r
      </Card>\r
    </div>,
  name: "Dashboard Cards (Real Use Case)",
  parameters: {
    docs: {
      description: {
        story: "Simulates a dashboard with different types of cards for stats, notifications, and user profile."
      }
    }
  }
}`,...(f=(v=i.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const w=["Default","Elevated","Group","DashboardCardsUseCase"];export{i as DashboardCardsUseCase,n as Default,t as Elevated,l as Group,w as __namedExportsOrder,H as default};
