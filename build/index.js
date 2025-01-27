!function(){"use strict";var e,t={65:function(){var e=window.wp.blocks;function t(){return t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},t.apply(this,arguments)}var n=window.wp.element,o=window.wp.i18n,r=window.wp.blockEditor,l=window.wp.components,a=window.wp.data,c=window.wp.primitives,i=(0,n.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(c.Path,{d:"M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"})),s=(0,n.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(c.Path,{d:"M15.6 7.3h-.7l1.6-3.5-.9-.4-3.9 8.5H9v1.5h2l-1.3 2.8H8.4c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7H10V7.3H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H9l-1.4 3.2.9.4 5.7-12.5h1.4c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.9 0 5.2-2.3 5.2-5.2 0-2.9-2.4-5.2-5.2-5.2z"})),u=(0,n.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(c.Path,{d:"M6.2 5.2v13.4l5.8-4.8 5.8 4.8V5.2z"}));const m=["petit","moyen","grand"],b="noreferrer noopener";(0,e.registerBlockType)("fourmi-e/conteneur-bouton",{edit:function(e){const{attributes:{content:c,url:d,text:g,level:p,colonnage_withStart:v,colonnage_simple_start:f,colonnage_simple:w,colonnage_withResponsive:h,backgroundColorClass:_}}=e,k=[{nom:"colonnage_small",id:"sm"},{nom:"colonnage_medium",id:"md"},{nom:"colonnage_large",id:"lg"},{nom:"colonnage_extraLarge",id:"xl"},{nom:"colonnage_extraExtraLarge",id:"xxl"}],C=(0,n.useRef)(),E=(0,n.useRef)(),x=(0,r.useBlockProps)({ref:C});return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(r.InspectorControls,null,function(e){const t=(0,a.select)("core/editor").getEditorSettings();return(0,n.createElement)(l.PanelBody,{title:"Couleur du fond"},(0,n.createElement)(l.ColorPalette,{colors:t.colors,value:e.attributes.backgroundColor,onChange:n=>e.setAttributes({backgroundColor:n,backgroundColorClass:`bg-${(0,r.getColorObjectByColorValue)(t.colors,n).slug}`})}))}(e),(0,n.createElement)(l.PanelBody,{title:"Colonnage",initialOpen:!0},(0,n.createElement)(l.__experimentalSpacer,null,(0,n.createElement)(l.ToggleControl,{label:(0,o.__)("Permettre le placement du début du colonnage","fourmi-e"),checked:v,onChange:()=>{e.setAttributes({colonnage_withStart:!v})}}),v&&(0,n.createElement)(l.RangeControl,{label:"Début du positionnement (simple)",value:f,onChange:t=>e.setAttributes({colonnage_simple_start:t}),min:1,max:23,beforeIcon:"arrow-down",afterIcon:"arrow-up"}),(0,n.createElement)(l.RangeControl,{label:"Nombre de colonne (simple)",value:w,onChange:t=>{e.setAttributes({colonnage_simple:t})},min:1,max:24,beforeIcon:"arrow-down",afterIcon:"arrow-up"})),(0,n.createElement)(l.__experimentalSpacer,null,(0,n.createElement)(l.ToggleControl,{label:(0,o.__)("Colonnage responsive","fourmi-e"),checked:h,onChange:()=>e.setAttributes({colonnage_withResponsive:!h})}),h&&k.map((t=>(0,n.createElement)(n.Fragment,null,(0,n.createElement)(l.CheckboxControl,{label:t.nom,checked:e.attributes[`${t.nom}_checked`],onChange:()=>{e.setAttributes({[`${t.nom}_checked`]:!e.attributes[`${t.nom}_checked`]})}}),e.attributes[`${t.nom}_checked`]&&(0,n.createElement)(n.Fragment,null,v&&(0,n.createElement)(l.RangeControl,{label:"Début du positionnement ",value:e.attributes[`${t.nom}_start`],onChange:n=>e.setAttributes({[`${t.nom}_start`]:n}),min:1,max:23,beforeIcon:"arrow-down",afterIcon:"arrow-up"}),(0,n.createElement)(l.RangeControl,{label:`Nombre de colonne (${t.nom})`,value:e.attributes[t.nom],onChange:n=>{e.setAttributes({[t.nom]:n})},min:1,max:24,beforeIcon:"arrow-down",afterIcon:"arrow-up"})))))))),function(e,t,a){const{isSelected:c,setAttributes:d,attributes:{url:g,text:p,level:v,linkTarget:f,rel:w}}=e,[h,_]=(0,n.useState)(!1),k=!!g,C="_blank"===f;return(0,n.useEffect)((()=>{c||_(!1)}),[c]),(0,n.createElement)(n.Fragment,null,(0,n.createElement)(r.BlockControls,{group:"block"},!k&&(0,n.createElement)(l.ToolbarButton,{name:"link",icon:i,title:(0,o.__)("Link"),onClick:e=>{e.preventDefault(),_(!0)}}),k&&(0,n.createElement)(l.ToolbarButton,{name:"link",icon:s,title:(0,o.__)("Unlink"),onClick:()=>{d({url:void 0})},isActive:!0}),(0,n.createElement)(l.DropdownMenu,{icon:u,label:"Choisir le format de boutton",controls:m.map((e=>({title:`Boutton ${e}`,onClick:()=>d({level:e})})))})),c&&(h||k)&&(0,n.createElement)(l.Popover,{position:"bottom center",onClose:()=>{var e;_(!1),null===(e=t.current)||void 0===e||e.focus()},anchorRef:null==a?void 0:a.current,focusOnMount:!!h&&"firstElement"},(0,n.createElement)(r.__experimentalLinkControl,{className:"wp-block-navigation-link__inline-link-input",value:{url:g,opensInNewTab:C},onChange:e=>{let{url:t="",opensInNewTab:n,title:o}=e;d({url:t,text:o}),C!==n&&function(e){const t=e?"_blank":void 0;let n=w;t&&!w?n=b:t||w!==b||(n=void 0),console.log(f),console.log(t),d({linkTarget:t,rel:n})}(n)},onRemove:()=>{var e;d({url:void 0,linkTarget:void 0,rel:void 0}),_(!1),null===(e=t.current)||void 0===e||e.focus()},forceIsEditingLink:h})))}(e,E,C),(0,n.createElement)("div",t({},x,{className:`${(0,r.useBlockProps)().className} ${(()=>{let t="";return t+=v?`col-${w}-start-${f} `:`col-${w} `,h&&(v?k.map((n=>{e.attributes[`${n.nom}_checked`]&&e.attributes[n.nom]&&(t+=`col-${n.id}-${e.attributes[n.nom]}-start-${e.attributes[`${n.nom}_start`]} `)})):k.map((n=>{e.attributes[`${n.nom}_checked`]&&e.attributes[n.nom]&&(t+=`col-${n.id}-${e.attributes[n.nom]} `)}))),t})()} ${_}`,style:{backgroundColor:e.attributes.backgroundColor}}),(0,n.createElement)("a",{className:`conteneur-button-link bouton-${p}`,href:d,onClick:e=>e.preventDefault()},(0,n.createElement)("span",{class:"conteneur-button-content"},(0,n.createElement)(r.RichText,{ref:E,placeholder:(0,o.__)("Add text…"),value:g,withoutInteractiveFormatting:!0,onChange:t=>{e.setAttributes({text:t})},class:"conteneur-button-text"}),(0,n.createElement)("span",{class:"conteneur-button-decoration"},"→")))))},save:function(e){const{attributes:{content:o,url:l,text:a,rel:c,linkTarget:i,level:s,colonnage_withStart:u,colonnage_simple_start:m,colonnage_simple:b,colonnage_withResponsive:d,backgroundColorClass:g}}=e,p=[{nom:"colonnage_small",id:"sm"},{nom:"colonnage_medium",id:"md"},{nom:"colonnage_large",id:"lg"},{nom:"colonnage_extraLarge",id:"xl"},{nom:"colonnage_extraExtraLarge",id:"xxl"}];return(0,n.createElement)("div",t({},r.useBlockProps.save(),{className:`${r.useBlockProps.save().className} ${(()=>{let t="";return t+=u?`col-${b}-start-${m} `:`col-${b} `,d&&(u?p.map((n=>{e.attributes[`${n.nom}_checked`]&&e.attributes[n.nom]&&(t+=`col-${n.id}-${e.attributes[n.nom]}-start-${e.attributes[`${n.nom}_start`]} `)})):p.map((n=>{e.attributes[`${n.nom}_checked`]&&e.attributes[n.nom]&&(t+=`col-${n.id}-${e.attributes[n.nom]} `)}))),t})()} ${g}`,style:{backgroundColor:e.attributes.backgroundColor}}),(0,n.createElement)("a",{className:`conteneur-button-link bouton-${s}`,href:l,target:i,rel:c},(0,n.createElement)("span",{class:"conteneur-button-content"},(0,n.createElement)("span",{class:"conteneur-button-text"},a),(0,n.createElement)("span",{class:"conteneur-button-decoration"},"→"))))}})}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var l=n[e]={exports:{}};return t[e](l,l.exports,o),l.exports}o.m=t,e=[],o.O=function(t,n,r,l){if(!n){var a=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],l=e[u][2];for(var c=!0,i=0;i<n.length;i++)(!1&l||a>=l)&&Object.keys(o.O).every((function(e){return o.O[e](n[i])}))?n.splice(i--,1):(c=!1,l<a&&(a=l));if(c){e.splice(u--,1);var s=r();void 0!==s&&(t=s)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[n,r,l]},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,l,a=n[0],c=n[1],i=n[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);if(i)var u=i(o)}for(t&&t(n);s<a.length;s++)l=a[s],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(u)},n=self.webpackChunkfourmie_conteneur_bouton=self.webpackChunkfourmie_conteneur_bouton||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var r=o.O(void 0,[431],(function(){return o(65)}));r=o.O(r)}();