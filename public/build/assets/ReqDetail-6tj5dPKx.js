import{A as n}from"./AuthenticatedLayout-hC5W6ofq.js";import{r as a,R as e,b as o}from"../.vite/manifest.json";import"./ReqItemsTable-H0IgWVJw.js";import"./react-paginate-R4bIOZAi.js";import"./SideBar-LxcvG1Xt.js";import"./index-v-lOFoFl.js";function x({auth:c}){a.useState("");const[l,m]=a.useState(""),[r,s]=a.useState("");return a.useState([]),e.createElement(e.Fragment,null,e.createElement(n,{user:c.user,header:e.createElement(e.Fragment,null,e.createElement("h2",{className:"font-semibold text-xl text-gray-800 leading-tight"},"Dashboard"))},e.createElement(o,{title:"Dashboard"}),e.createElement("div",{className:"py-12"},e.createElement("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8"},e.createElement("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},e.createElement("div",{className:"card p-4"},e.createElement("div",{className:"table-responsive text-nowrap mt-4 mb-6"}),e.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-6"},e.createElement("div",{className:"flex flex-col mb-1"},e.createElement("label",{className:"text-sm font-small text-gray-500 mb-2"},"Supplier Catergory"),e.createElement("select",{className:"form-select form-select-sm rounded",id:"measure",value:r,onChange:t=>s(t.target.value)},e.createElement("option",{value:""},"Select Supplier"),e.createElement("option",{value:"category1"},"1"),e.createElement("option",{value:"category2"},"Category 2")))),e.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"},e.createElement("div",{className:"flex flex-col mb-3"},e.createElement("label",{className:"text-sm font-small text-gray-500 mb-1"},"Supplier Name"),e.createElement("select",{className:"form-select form-select-sm rounded",id:"measure",value:r,onChange:t=>s(t.target.value)},e.createElement("option",{value:""},"Select Supplier"),e.createElement("option",{value:"category1"},"1"),e.createElement("option",{value:"category2"},"Category 2"))),e.createElement("div",{className:"flex flex-col mb-3"},e.createElement("label",{className:"text-sm font-medium text-gray-500 mb-1"},"Quote per unit"),e.createElement("input",{type:"text",className:"form-input form-input-sm rounded",id:"quantity",placeholder:"",value:l,onChange:t=>m(t.target.value)})),e.createElement("div",{className:"flex flex-col mb-3"},e.createElement("label",{className:"text-sm font-medium text-gray-500 mb-1"},"Comments"),e.createElement("input",{type:"text",className:"form-input form-input-sm rounded",id:"quantity",placeholder:"",value:l,onChange:t=>m(t.target.value)})),e.createElement("div",{className:"flex flex-col mb-3"},e.createElement("label",{className:"text-sm font-medium text-gray-500 mb-1"},"ETA Date"),e.createElement("input",{type:"date",className:"form-input form-input-sm rounded",id:"date",placeholder:"",value:l,onChange:t=>m(t.target.value)})))))))))}export{x as default};
