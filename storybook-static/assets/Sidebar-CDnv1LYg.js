import{j as e,c as i,a as j}from"./cn-BIubIUvQ.js";import{r as p}from"./index-l2PZgWEW.js";import{A as f,a as u,b as g}from"./Avatar-wG5zcNRE.js";import{B as I}from"./Badge-DfI-0DkV.js";import{C as B,a as q,b as A}from"./chevron-right-mLRGtRCb.js";import{U as _}from"./user-D9nFVIhS.js";import{c as n}from"./createLucideIcon-C3m4BMJg.js";import{B as z}from"./bar-chart-3-DmGAmpT-.js";import{S as y}from"./settings-hpC7mEtx.js";import{C as R}from"./calendar-Cb0UFsNn.js";import{M as D}from"./mail-nuEY0pah.js";import{B as F}from"./bell-C728Sv8J.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=n("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=n("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=n("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=n("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),J=j("fixed left-0 top-0 z-40 h-screen bg-white border-r border-gray-200 transition-all duration-300 ease-in-out",{variants:{collapsed:{false:"w-72",true:"w-16"}},defaultVariants:{collapsed:!1}}),O=j("flex items-center w-full px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group",{variants:{active:{true:"bg-primary-50 text-primary-700 border-r-2 border-primary-600",false:"text-gray-700 hover:bg-gray-50 hover:text-gray-900"},collapsed:{true:"justify-center px-2",false:"justify-start"}},defaultVariants:{active:!1,collapsed:!1}}),P=[{id:"dashboard",label:"Dashboard",icon:e.jsx(L,{className:"h-5 w-5"}),href:"/dashboard"},{id:"analytics",label:"Analytics",icon:e.jsx(z,{className:"h-5 w-5"}),href:"/analytics",badge:"New"},{id:"users",label:"Users",icon:e.jsx(b,{className:"h-5 w-5"}),children:[{id:"all-users",label:"All Users",icon:e.jsx(b,{className:"h-4 w-4"})},{id:"user-roles",label:"User Roles",icon:e.jsx(y,{className:"h-4 w-4"})}]},{id:"reports",label:"Reports",icon:e.jsx(E,{className:"h-5 w-5"}),href:"/reports"},{id:"calendar",label:"Calendar",icon:e.jsx(R,{className:"h-5 w-5"}),href:"/calendar"},{id:"messages",label:"Messages",icon:e.jsx(D,{className:"h-5 w-5"}),href:"/messages",badge:"3"},{id:"notifications",label:"Notifications",icon:e.jsx(F,{className:"h-5 w-5"}),href:"/notifications"},{id:"settings",label:"Settings",icon:e.jsx(y,{className:"h-5 w-5"}),href:"/settings"}],c=p.forwardRef(({className:o,collapsed:a=!1,onToggle:N,menuItems:v=P,activeItem:w="dashboard",onItemClick:t,...k},M)=>{const[C,U]=p.useState([]),S=s=>{U(r=>r.includes(s)?r.filter(l=>l!==s):[...r,s])},V=s=>{s.children?S(s.id):t==null||t(s.id)},d=(s,r=0)=>{var x;const l=w===s.id,m=C.includes(s.id),h=s.children&&s.children.length>0;return e.jsxs("div",{children:[e.jsx("button",{onClick:()=>V(s),className:i(O({active:l,collapsed:a}),r>0&&"ml-4 pl-8","relative"),children:e.jsxs("div",{className:"flex items-center min-w-0 flex-1",children:[e.jsx("div",{className:"flex-shrink-0",children:s.icon}),!a&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"ml-3 truncate",children:s.label}),s.badge&&e.jsx(I,{variant:"danger",className:"ml-auto text-xs",children:s.badge}),h&&e.jsx(A,{className:i("ml-auto h-4 w-4 transition-transform duration-200",m&&"rotate-180")})]})]})}),h&&!a&&m&&e.jsx("div",{className:"mt-1 space-y-1",children:(x=s.children)==null?void 0:x.map(H=>d(H,r+1))})]},s.id)};return e.jsxs("div",{ref:M,className:i(J({collapsed:a}),o),...k,children:[e.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-gray-200",children:[!a&&e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("div",{className:"w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center",children:e.jsx("span",{className:"text-white font-bold text-sm",children:"B"})}),e.jsx("span",{className:"font-bold text-xl text-gray-900",children:"Beyond"})]}),e.jsx("button",{onClick:N,className:"p-1.5 rounded-lg hover:bg-gray-100 transition-colors",children:a?e.jsx(B,{className:"h-4 w-4 text-gray-600"}):e.jsx(q,{className:"h-4 w-4 text-gray-600"})})]}),e.jsx("nav",{className:"flex-1 px-4 py-6 space-y-2 overflow-y-auto",children:v.map(s=>d(s))}),e.jsx("div",{className:"border-t border-gray-200 p-4",children:a?e.jsx("div",{className:"flex justify-center",children:e.jsxs(f,{size:"sm",children:[e.jsx(u,{src:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=64"}),e.jsx(g,{children:"JD"})]})}):e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsxs(f,{size:"sm",children:[e.jsx(u,{src:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=64"}),e.jsx(g,{children:"JD"})]}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-sm font-medium text-gray-900 truncate",children:"John Doe"}),e.jsx("p",{className:"text-xs text-gray-500 truncate",children:"john@company.com"})]})]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsxs("button",{className:"flex-1 flex items-center justify-center px-3 py-2 text-xs font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors",children:[e.jsx(_,{className:"h-3 w-3 mr-1"}),"Profile"]}),e.jsxs("button",{className:"flex-1 flex items-center justify-center px-3 py-2 text-xs font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors",children:[e.jsx(T,{className:"h-3 w-3 mr-1"}),"Logout"]})]})]})})]})});c.displayName="Sidebar";try{c.displayName="Sidebar",c.__docgenInfo={description:"",displayName:"Sidebar",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onToggle:{defaultValue:null,description:"",name:"onToggle",required:!1,type:{name:"() => void"}},menuItems:{defaultValue:{value:`[
  {
    id: "dashboard",
    label: "Dashboard",
    icon: <Home className="h-5 w-5" />,
    href: "/dashboard",
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: <BarChart3 className="h-5 w-5" />,
    href: "/analytics",
    badge: "New",
  },
  {
    id: "users",
    label: "Users",
    icon: <Users className="h-5 w-5" />,
    children: [
      { id: "all-users", label: "All Users", icon: <Users className="h-4 w-4" /> },
      { id: "user-roles", label: "User Roles", icon: <Settings className="h-4 w-4" /> },
    ],
  },
  {
    id: "reports",
    label: "Reports",
    icon: <FileText className="h-5 w-5" />,
    href: "/reports",
  },
  {
    id: "calendar",
    label: "Calendar",
    icon: <Calendar className="h-5 w-5" />,
    href: "/calendar",
  },
  {
    id: "messages",
    label: "Messages",
    icon: <Mail className="h-5 w-5" />,
    href: "/messages",
    badge: "3",
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: <Bell className="h-5 w-5" />,
    href: "/notifications",
  },
  {
    id: "settings",
    label: "Settings",
    icon: <Settings className="h-5 w-5" />,
    href: "/settings",
  },
]`},description:"",name:"menuItems",required:!1,type:{name:"MenuItem[]"}},activeItem:{defaultValue:{value:"dashboard"},description:"",name:"activeItem",required:!1,type:{name:"string"}},onItemClick:{defaultValue:null,description:"",name:"onItemClick",required:!1,type:{name:"(itemId: string) => void"}},collapsed:{defaultValue:{value:"false"},description:"",name:"collapsed",required:!1,type:{name:"boolean"}}}}}catch{}export{E as F,L as H,c as S,b as U};
