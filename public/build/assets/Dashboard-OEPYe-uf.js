import{A as N}from"./AuthenticatedLayout-aWDFf3HU.js";import{r,R as e,b as v,a as w}from"../.vite/manifest.json";import{F as E,f as C,a as D,b as S}from"./react-paginate-IfzBmxAq.js";import"./tw-elements-react.es.min-45xkHG_Z.js";import"./SideBar-LxcvG1Xt.js";import"./index-v-lOFoFl.js";const k=({reqs:l,handleSelect:s,formatDate:o,auth:m})=>{const[i,g]=r.useState(0),n=10;Math.ceil(l.length/n);const d=i*n,u=l.slice(d,d+n);return e.createElement(e.Fragment,null,e.createElement("div",{className:"table-responsive text-nowrap mt-4"},e.createElement("table",{className:"table table-bordered text-center w-full"},e.createElement("thead",{className:"thead-dark"},e.createElement("tr",null,e.createElement("th",{scope:"col"},"ID"),e.createElement("th",{scope:"col"},"Request Purpose"),e.createElement("th",{scope:"col"},"Staff"),e.createElement("th",{scope:"col"},"Department"),e.createElement("th",{scope:"col"},"Req Date"),e.createElement("th",{scope:"col"},"Completed"),e.createElement("th",{scope:"col"},"Action"))),e.createElement("tbody",null,u.map(a=>e.createElement("tr",{key:a.id},e.createElement("th",{scope:"row"},a.id),e.createElement("td",null,a.purpose_of_purchase),e.createElement("td",null,m.user.name),e.createElement("td",null,a.department),e.createElement("td",null,o(a.created_at)),e.createElement("td",null,a.completed?"True":"False"),e.createElement("td",null,e.createElement("button",{type:"button",className:"btn btn-sm",onClick:()=>s(a,"View"),title:"View"},e.createElement(E,{icon:C,className:"text-gray-500"})),e.createElement("button",{type:"button",className:"btn btn-sm ml-2",onClick:()=>s(a,"Edit"),title:"Edit"},e.createElement(E,{icon:D,className:"text-blue-500"})),e.createElement("button",{type:"button",className:"btn btn-sm ml-2",onClick:()=>s(a),title:"Delete"},e.createElement(E,{icon:S,className:"text-red-500"})))))))),e.createElement("div",{className:"flex justify-center items-center mt-4 border border-black"}))},V=({auth:l})=>{const[s,o]=r.useState(""),[m,i]=r.useState("");r.useState(!1);const[g,n]=r.useState([]),[d,u]=r.useState([]);r.useState(!1);const[a,p]=r.useState(!1);r.useState(!1);const f=async()=>{try{const t=await w.get("/reqs");console.log("res",t),n(t.data.reqs)}catch(t){console.error("Error fetching reqs:",t)}};r.useEffect(()=>{f()},[]);const b=()=>{console.log("Form validated!")},h=()=>{b()},y=(t,c)=>{switch(u(t),console.log("req",c),c){case"View":p(!0);break;case"Edit":window.location.href=`/edit_req/${t.id}`;break}},x=t=>{const c={year:"numeric",month:"2-digit",day:"numeric"};return new Date(t).toLocaleDateString("en-US",c)};return e.createElement(e.Fragment,null,e.createElement(N,{user:l.user,header:e.createElement("h2",{className:"font-semibold text-xl text-gray-800 leading-tight"},"Dashboard")},e.createElement(v,{title:"Dashboard"}),e.createElement("div",{className:"py-12"},e.createElement("h5",{className:"p-1 m-1 ml-10 mb-2"},"Procurement Manager"),e.createElement("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8"},e.createElement("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},e.createElement("div",{className:"card p-4"},e.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"},e.createElement("div",{className:"flex items-center space-x-2"},e.createElement("label",{className:"text-sm font-small text-gray-500"},"Criteria"),e.createElement("select",{className:"form-select form-select-sm rounded",id:"supplier-category",value:s,onChange:t=>o(t.target.value)},e.createElement("option",{value:"category1"},"1"),e.createElement("option",{value:"category2"},"Category 2"))),e.createElement("div",{className:"flex items-center space-x-2"},e.createElement("label",{className:"text-sm font-medium text-gray-500"}),e.createElement("input",{type:"text",className:"form-input form-input-sm rounded",id:"supplier-code",placeholder:"",value:m,onChange:t=>i(t.target.value)})),e.createElement("div",{className:"flex items-center"},e.createElement("button",{type:"button",className:`text-gray-900 bg-white border 
                                              border-gray-400 focus:outline-none hover:bg-gray-100
                                              focus:ring-4 focus:ring-gray-200 py-1 px-4 rounded`,onClick:h},"Find")),e.createElement("style",null,`
                                       .modal-full-height {
                                    height: 100vh;
                                    overflow-y: auto;
                                          }
                                              `),e.createElement("div",{className:"flex items-center mt-1"},e.createElement("a",{href:"/add_req",className:""},e.createElement("button",{type:"button",className:`text-gray-500 bg-green-400 border 
                                    border-gray-400 focus:outline-none hover:bg-gray-100
                                    focus:ring-4 focus:ring-gray-200 py-1 px-4 rounded`},"Add")))),e.createElement(k,{reqs:g,handleSelect:y,formatDate:x,auth:l})))))))};export{V as default};