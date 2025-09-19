import{j as a,c as y,a as j}from"./cn-BIubIUvQ.js";import{r as o}from"./index-l2PZgWEW.js";import{X as A}from"./x-DqKXAehi.js";import{M as _}from"./menu-CtdtrUms.js";import{A as w,a as k,b as S}from"./Avatar-wG5zcNRE.js";import"./createLucideIcon-C3m4BMJg.js";const I=j("flex items-center justify-between w-full px-4 py-3 bg-white border-b border-gray-200",{variants:{variant:{default:"bg-white border-gray-200",dark:"bg-gray-900 border-gray-700 text-white",transparent:"bg-transparent border-transparent"},size:{sm:"px-4 py-2",md:"px-6 py-3",lg:"px-8 py-4"}},defaultVariants:{variant:"default",size:"md"}}),e=o.forwardRef(({className:r,variant:n,size:l,logo:c,children:p,...N},b)=>{const[i,g]=o.useState(!1);return a.jsxs("nav",{ref:b,className:y(I({variant:n,size:l}),r),...N,children:[a.jsxs("div",{className:"flex items-center justify-between w-full",children:[c&&a.jsx("div",{className:"flex-shrink-0",children:c}),a.jsx("div",{className:"hidden md:flex items-center space-x-4 ml-auto",children:p}),a.jsx("button",{className:"md:hidden p-2 rounded-md hover:bg-gray-100",onClick:()=>g(!i),children:i?a.jsx(A,{className:"h-6 w-6"}):a.jsx(_,{className:"h-6 w-6"})})]}),i&&a.jsx("div",{className:"md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50",children:a.jsx("div",{className:"px-4 py-2 space-y-2",children:p})})]})});e.displayName="Navbar";const m=o.forwardRef(({className:r,...n},l)=>a.jsx("a",{ref:l,className:y("text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors",r),...n}));m.displayName="NavItem";try{e.displayName="Navbar",e.__docgenInfo={description:"",displayName:"Navbar",props:{logo:{defaultValue:null,description:"",name:"logo",required:!1,type:{name:"ReactNode"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"dark"'},{value:'"transparent"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}}}catch{}try{m.displayName="NavItem",m.__docgenInfo={description:"",displayName:"NavItem",props:{}}}catch{}const D={title:"Components/Navbar",component:e,parameters:{layout:"centered"},tags:["autodocs"]},s={render:()=>a.jsx(e,{children:a.jsxs("div",{className:"flex items-center gap-4 px-4",children:[a.jsx("span",{className:"font-bold text-xl",children:"My App"}),a.jsxs("nav",{className:"flex gap-2 ml-auto",children:[a.jsx("a",{href:"#",className:"text-blue-500",children:"Home"}),a.jsx("a",{href:"#",className:"text-blue-500",children:"About"})]})]})})},t={render:()=>a.jsx(e,{children:a.jsxs("div",{className:"flex items-center w-full px-4 py-2",children:[a.jsx("span",{className:"font-bold text-2xl text-primary-700",children:"TeamSuite"}),a.jsxs("nav",{className:"flex gap-3 ml-10",children:[a.jsx("a",{href:"#",className:"text-gray-700 hover:text-primary-700",children:"Dashboard"}),a.jsx("a",{href:"#",className:"text-gray-700 hover:text-primary-700",children:"Projects"}),a.jsx("a",{href:"#",className:"text-gray-700 hover:text-primary-700",children:"Settings"})]}),a.jsxs("div",{className:"ml-auto flex items-center gap-4",children:[a.jsx("button",{className:"text-sm text-gray-600 hover:text-primary-700",children:"Support"}),a.jsxs(w,{size:"sm",children:[a.jsx(k,{src:"https://randomuser.me/api/portraits/men/44.jpg"}),a.jsx(S,{children:"JS"})]})]})]})}),name:"App Bar (Real Use Case)",parameters:{docs:{description:{story:"A responsive app bar with brand, navigation links, actions, and user avatar for quick navigation and identity."}}}};var d,x,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <Navbar>\r
      <div className="flex items-center gap-4 px-4">\r
        <span className="font-bold text-xl">My App</span>\r
        <nav className="flex gap-2 ml-auto">\r
          <a href="#" className="text-blue-500">Home</a>\r
          <a href="#" className="text-blue-500">About</a>\r
        </nav>\r
      </div>\r
    </Navbar>
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var v,f,h;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Navbar>\r
      <div className="flex items-center w-full px-4 py-2">\r
        <span className="font-bold text-2xl text-primary-700">TeamSuite</span>\r
        <nav className="flex gap-3 ml-10">\r
          <a href="#" className="text-gray-700 hover:text-primary-700">Dashboard</a>\r
          <a href="#" className="text-gray-700 hover:text-primary-700">Projects</a>\r
          <a href="#" className="text-gray-700 hover:text-primary-700">Settings</a>\r
        </nav>\r
        <div className="ml-auto flex items-center gap-4">\r
          <button className="text-sm text-gray-600 hover:text-primary-700">Support</button>\r
          <Avatar size="sm">\r
            <AvatarImage src="https://randomuser.me/api/portraits/men/44.jpg" />\r
            <AvatarFallback>JS</AvatarFallback>\r
          </Avatar>\r
        </div>\r
      </div>\r
    </Navbar>,
  name: "App Bar (Real Use Case)",
  parameters: {
    docs: {
      description: {
        story: "A responsive app bar with brand, navigation links, actions, and user avatar for quick navigation and identity."
      }
    }
  }
}`,...(h=(f=t.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const M=["Default","AppBarUseCase"];export{t as AppBarUseCase,s as Default,M as __namedExportsOrder,D as default};
