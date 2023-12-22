import{r as a,R as e,b as r,a as m}from"../.vite/manifest.json";import"./react-paginate-4yn8oFZX.js";import{A as o}from"./AuthenticatedLayout-SKPFQzUe.js";import"./index-v-lOFoFl.js";import"./SideBar-LxcvG1Xt.js";const d=({handleSelect:c,formatDate:i,auth:E})=>{const[s,n]=a.useState([]);return a.useState(0),a.useEffect(()=>{(async()=>{try{const l=await m.get("http://localhost:8000/staff");console.log(l),n(l.data.staff)}catch(l){console.error("Error fetching staff:",l.message||"Unknown error")}})()},[]),e.createElement(e.Fragment,null,e.createElement("div",{className:"table-responsive mt-4 w-full "},e.createElement("table",{className:"table table-bordered table-striped text-center ml-4"},e.createElement("thead",{className:"thead-dark"},e.createElement("tr",null,e.createElement("th",{scope:"col",className:"px-6"},"ID"),e.createElement("th",{scope:"col",className:"px-6"},"Staff Name"),e.createElement("th",{scope:"col",className:"px-6"},"Email"),e.createElement("th",{scope:"col",className:"px-6"},"Username"),e.createElement("th",{scope:"col",className:"px-6"},"Title"),e.createElement("th",{scope:"col",className:"px-6"},"Line Manager"),e.createElement("th",{scope:"col",className:"px-6"},"Active"),e.createElement("th",{scope:"col",className:"px-6"},"Admin"))),e.createElement("tbody",null,s.map(t=>e.createElement("tr",{key:t.id},e.createElement("th",{scope:"row"},t.id),e.createElement("td",null,t.staffNames),e.createElement("td",null,t.email),e.createElement("td",null,t.username),e.createElement("td",null,t.title),e.createElement("td",null,t.lineManager),e.createElement("td",null,t.isActive?"Yes":"No"),e.createElement("td",null,t.isAdmin?"Yes":"No")))))))},x=({auth:c})=>(a.useState(""),a.useState(""),a.useState(!1),a.useState([]),a.useState([]),e.createElement(e.Fragment,null,e.createElement(o,{user:c.user,header:e.createElement("h2",{className:"font-semibold text-xl text-gray-800 leading-tight"},"Dashboard")},e.createElement(r,{title:"Dashboard"}),e.createElement("div",{className:""},e.createElement("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},e.createElement(d,null))))));export{x as default};