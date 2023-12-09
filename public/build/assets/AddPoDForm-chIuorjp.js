import{r as u,R as e}from"../.vite/manifest.json";const b=({onSubmit:n})=>{const[t,r]=u.useState({point_of_delivery:"",isDepActive:!0}),o=a=>{const{name:l,value:s,type:c,checked:i}=a.target;r(d=>({...d,[l]:c==="checkbox"?i:s}))},m=a=>{a.preventDefault(),n(t)};return e.createElement("div",{className:"max-w-md mx-auto mt-8 p-6 bg-white rounded shadow"},e.createElement("a",{href:"/dashboard",className:"mb-4"},e.createElement("button",{type:"button",className:"text-gray-700 hover:text-gray-900 focus:outline-none"},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"h-6 w-6"},e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})))),e.createElement("form",{onSubmit:m},e.createElement("h3",{className:"text-xl font-semibold mb-4 text-center"},"Point of Delivery Information"),e.createElement("div",{className:"mb-4"},e.createElement("label",{htmlFor:"depName",className:"block text-sm font-medium text-gray-600"},"Point of Delivery"),e.createElement("input",{type:"text",id:"depName",name:"depName",value:t.point_of_delivery,onChange:o,className:"mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500",required:!0})),e.createElement("div",{className:"mb-4 flex items-center"},e.createElement("input",{type:"checkbox",id:"isDepActive",name:"isDepActive",checked:t.isDepActive,onChange:o,className:"mr-2"}),e.createElement("label",{htmlFor:"isDepActive",className:"text-sm font-medium text-gray-600"},"IsActive")),e.createElement("button",{type:"submit",className:"bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"},"Add Point of Delivery")))};export{b as default};