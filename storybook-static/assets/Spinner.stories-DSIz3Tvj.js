import{j as e}from"./cn-BIubIUvQ.js";import{r as b}from"./index-l2PZgWEW.js";import{S as s}from"./Spinner-CKWt6Aik.js";import{B as j}from"./Button-D4FIw8ay.js";const B={title:"Components/Spinner",component:s,parameters:{layout:"centered"},tags:["autodocs"]},a={render:()=>e.jsx(s,{})},n={render:()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{})," ",e.jsx("span",{children:"Loading data..."})]})},r={render:()=>e.jsxs(j,{variant:"primary",disabled:!0,children:[e.jsx(s,{className:"mr-2 h-4 w-4"})," Processing"]})},t={render:()=>{const[o,i]=b.useState(!1),S=()=>{i(!0),setTimeout(()=>i(!1),2e3)};return e.jsxs("div",{className:"relative w-96 h-48 bg-gray-100 rounded-lg flex items-center justify-center",children:[o&&e.jsx("div",{className:"absolute inset-0 bg-gray-200 bg-opacity-60 flex items-center justify-center z-10",children:e.jsx(s,{className:"h-8 w-8"})}),e.jsxs("div",{className:"z-0 flex flex-col gap-2 items-center",children:[e.jsx("span",{children:"Page Content Here"}),e.jsx(j,{onClick:S,disabled:o,children:o?"Loading...":"Fetch new data"})]})]})},name:"Loading Overlay (Real Use Case)",parameters:{docs:{description:{story:"Spinner displays over content while asynchronous fetch is in progress, as in typical loading overlays."}}}};var c,d,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <Spinner />
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,p,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">\r
      <Spinner /> <span>Loading data...</span>\r
    </div>
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var u,f,x;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Button variant="primary" disabled>\r
      <Spinner className="mr-2 h-4 w-4" /> Processing\r
    </Button>
}`,...(x=(f=r.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var y,h,v;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [loading, setLoading] = React.useState(false);
    const fetchData = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 2000);
    };
    return <div className="relative w-96 h-48 bg-gray-100 rounded-lg flex items-center justify-center">\r
        {loading && <div className="absolute inset-0 bg-gray-200 bg-opacity-60 flex items-center justify-center z-10">\r
            <Spinner className="h-8 w-8" />\r
          </div>}\r
        <div className="z-0 flex flex-col gap-2 items-center">\r
          <span>Page Content Here</span>\r
          <Button onClick={fetchData} disabled={loading}>\r
            {loading ? "Loading..." : "Fetch new data"}\r
          </Button>\r
        </div>\r
      </div>;
  },
  name: "Loading Overlay (Real Use Case)",
  parameters: {
    docs: {
      description: {
        story: "Spinner displays over content while asynchronous fetch is in progress, as in typical loading overlays."
      }
    }
  }
}`,...(v=(h=t.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const D=["Default","Inline","InButton","LoadingOverlayUseCase"];export{a as Default,r as InButton,n as Inline,t as LoadingOverlayUseCase,D as __namedExportsOrder,B as default};
