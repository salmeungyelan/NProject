"use strict";(self.webpackChunknet_client=self.webpackChunknet_client||[]).push([[360],{2388:(t,e,n)=>{n.r(e),n.d(e,{default:()=>T});var a,s,i,r=n(5043),l=n(831),o=n(630),c=n(6555),d=n(4692),h=n(7089),u=n(2636),p=n(4299),x=n(7528),g=n(197),A=n(9774);const m=g.Ay.div(a||(a=(0,x.A)(["\n\t","\n\t","\n  gap: 32px;\n"])),A.IP,A.ec),j=g.Ay.div(s||(s=(0,x.A)(["\n\twidth: 100%;\n\theight: 511px;\n\ttext-align: center;\n\t","\n\n\t> span {\n\t\tfont-size: ",";\n\t\tcolor: ",";\n\t}\n"])),A.tR,(t=>{let{theme:e}=t;return e.FONT_SIZE.ml}),(t=>{let{theme:e}=t;return e.PALETTE.gray[400]})),b=g.Ay.div(i||(i=(0,x.A)(["\n\twidth: 100%;\n\t","\n\tposition: fixed;\n\theight: 56px;\n\tbackground-color: ",";\n\tbottom: ",";\n\tbox-shadow: 0 -2px 4px 0 rgba(0, 0, 0, 0.08);\n\tz-index: 3;\n\n\t> div {\n\t\twidth: 294px;\n\t\t","\n\t\tgap: 12px;\n\t}\n\n\t@media screen and (min-width: 768px) {\n\t\theight: 72px;\n\t\tpadding: 20px 100px;\n\t\tbottom: 0;\n\t\tz-index: 23;\n\n\t\t> div {\n\t\t\tjustify-content: right;\n\t\t\twidth: 100%;\n\t\t}\n\n\t\t& button {\n\t\t\twidth: 190px;\n\t\t}\n\t}\n"])),A.tR,(t=>{let{theme:e}=t;return e.PALETTE.white[100]}),(t=>{let{$moreBtn:e}=t;return e?"131px":"66px"}),A.tR);var f=n(728),w=n(8942),v=n(4897),y=n(9222),P=n(8018),S=n(579);const T=function(){const{sort:t,handelSelectFilter:e}=(0,o.A)(),{modalState:n,openModal:a,closeModal:s}=(0,c.A)(),[i,x]=(0,r.useState)([]),[g,A]=(0,r.useState)(!1),[T,E]=(0,r.useState)([{codeLabel:"\uc804\uccb4",sortBy:""}]),{currentPage:k,setCurrentPage:C,total:z,setTotal:B}=(0,d.A)(),F=(0,r.useMemo)((()=>({basePath:"/client/viewtab-instagrams?page=".concat(k,"&size=").concat(8,"&sortBy=").concat(t),status:T[0].sortBy&&T.map((t=>"&status=".concat(t.sortBy))).join("")})),[k,t,T]),{basePath:I,status:L}=F,{result:R,trigger:M}=(0,h.A)({path:I,shouldFetch:!0}),_=(0,p.A)("accessToken"),{sub:N}=_,[O,V]=(0,l.L4)(u.s),{result:W}=(0,h.A)({path:"/users/".concat(N),shouldFetch:!0});return(0,r.useEffect)((()=>{W.data&&V(W.data),R.data&&(x(R.data.viewtabInstagrams),B(R.data.total))}),[R.data,W.data]),(0,r.useEffect)((()=>{M({path:I+L,applyResult:!0})}),[T,t,k]),(0,r.useEffect)((()=>{C(1)}),[T]),(0,S.jsxs)(S.Fragment,{children:[n&&(0,S.jsx)(v.A,{onClose:s,title:"\ubdf0\ud0ed&\uc778\uc2a4\ud0c0",listTrigger:M}),(0,S.jsxs)(m,{children:[(0,S.jsx)(f.A,{title:"VIEWTAB & INSTA",children:"\ubdf0\ud0ed&\uc778\uc2a4\ud0c0\ub97c \uc2e0\uccad\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),!g&&(0,S.jsx)(j,{children:(0,S.jsx)("span",{children:"\uc81c\uc548\uc11c"})}),g&&(0,S.jsx)(w.A,{title:"\ubdf0\ud0ed&\uc778\uc2a4\ud0c0",sort:t,otherList:i,selectedStatus:T,setSelectedStatus:E,onSelect:e,listTrigger:M}),g&&(null!==i&&void 0!==i&&i.length?(0,S.jsx)(P.A,{totalItems:z,itemsPerPage:8,currentPage:k,onPageChange:async t=>{C(t),await M({applyResult:!0})}}):(0,S.jsx)(S.Fragment,{}))]}),(0,S.jsx)(b,{children:(0,S.jsxs)("div",{children:[(0,S.jsx)(y.A,{size:"height",variant:"white",onClick:()=>{A((t=>!t))},children:g?"\uc81c\uc548\uc11c \ubcf4\uae30":"\uc774\uc6a9 \ub0b4\uc5ed \ud655\uc778"}),(0,S.jsx)(y.A,{size:"height",variant:"default",onClick:()=>{a()},children:"\ubdf0\ud0ed&\uc778\uc2a4\ud0c0 \uc2e0\uccad\ud558\uae30"})]})})]})}}}]);
//# sourceMappingURL=360.8e60bc9e.chunk.js.map