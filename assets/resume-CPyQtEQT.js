import{j as e,G as x,u as d,i as h,P as p,I as r}from"./about-geo1ZKXi.js";const u="_iconBox_18b9p_50",L={"dark-theme":"_dark-theme_18b9p_1","light-theme":"_light-theme_18b9p_25",iconBox:u},j=({children:t})=>e.jsx("div",{className:L.iconBox,children:t});function k(t){return x({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M4.99787498,8.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L4,23 M18,1 L18,6 L23,6 M3,12 L3.24999995,12 L4.49999995,12 C6.5,12 6.75,13.25 6.75,14 C6.75,14.75 6.5,16 4.49999995,16 L3.24999995,16 L3.24999995,18 L3,17.9999999 L3,12 Z M9.5,18 L9.5,12 C9.5,12 10.4473684,12 11.2052633,12 C12.3421053,12 13.5,12.5 13.5,15 C13.5,17.5 12.3421053,18 11.2052633,18 C10.4473684,18 9.5,18 9.5,18 Z M16.5,19 L16.5,12 L20.5,12 M16.5,15.5 L19.5,15.5"},child:[]}]})(t)}const f="_pdfLink_17eiy_50",c={"dark-theme":"_dark-theme_17eiy_1","light-theme":"_light-theme_17eiy_25",pdfLink:f},g="_timeline_11nxz_50",I="_titleWrapper_11nxz_54",b="_timelineList_11nxz_61",N="_timelineItem_11nxz_77",T="_timelineItemTitle_11nxz_114",z="_timelineDescription_11nxz_125",y="_timelineText_11nxz_131",i={"dark-theme":"_dark-theme_11nxz_1","light-theme":"_light-theme_11nxz_25",timeline:g,titleWrapper:I,timelineList:b,timelineItem:N,timelineItemTitle:T,timelineDescription:z,timelineText:y},m=({items:t,icon:s,title:l})=>e.jsxs("section",{className:i.timeline,children:[e.jsxs("div",{className:i.titleWrapper,children:[e.jsx(j,{children:e.jsx(s,{})}),e.jsx("h3",{className:"h3",children:l})]}),e.jsx("ol",{className:i.timelineList,children:t.map((n,a)=>e.jsxs("li",{className:i.timelineItem,children:[e.jsx("h4",{className:`h4 ${i.timelineItemTitle}`,children:n.title}),e.jsx("span",{children:n.period}),e.jsx("ul",{className:i.timelineDescription,children:n.description.map((o,_)=>e.jsx("li",{children:e.jsx("p",{className:i.timelineText,children:o})},_))})]},a))})]}),B=()=>{const{t}=d("resume"),s=t("education.items",{returnObjects:!0}),l=t("experience.items",{returnObjects:!0}),n=`/resume/Resume_Luuk_Bakkum_${h.language}.pdf`;return e.jsxs(p,{className:c.resume,children:[e.jsxs("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:c.pdfLink,"aria-label":t("pdfLink.ariaLabel"),children:[e.jsx(k,{})," ",t("pdfLink.text")]}),e.jsx(m,{items:s,icon:r,title:t("education.title")}),e.jsx(m,{items:l,icon:r,title:t("experience.title")})]})},M=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"}));export{j as I,M as i};
