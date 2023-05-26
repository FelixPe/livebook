"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[220],{59220:(t,e,a)=>{a.d(e,{diagram:()=>f});var i=a(77415),n=a(74309),d=a(29451),r=a(45625),s=a(31460);a(93628),a(17967),a(27856);const o={},c=(t,e,a)=>{const i=(0,s.c)().state.padding,n=2*(0,s.c)().state.padding,d=t.node().getBBox(),r=d.width,o=d.x,c=t.append("text").attr("x",0).attr("y",(0,s.c)().state.titleShift).attr("font-size",(0,s.c)().state.fontSize).attr("class","state-title").text(e.id),g=c.node().getBBox().width+n;let p,h=Math.max(g,r);h===r&&(h+=n);const l=t.node().getBBox();e.doc,p=o-i,g>r&&(p=(r-h)/2+i),Math.abs(o-l.x)<i&&g>r&&(p=o-(g-r)/2);const x=1-(0,s.c)().state.textHeight;return t.insert("rect",":first-child").attr("x",p).attr("y",x).attr("class",a?"alt-composit":"composit").attr("width",h).attr("height",l.height+(0,s.c)().state.textHeight+(0,s.c)().state.titleShift+1).attr("rx","0"),c.attr("x",p+i),g<=r&&c.attr("x",o+(h-n)/2-g/2+i),t.insert("rect",":first-child").attr("x",p).attr("y",(0,s.c)().state.titleShift-(0,s.c)().state.textHeight-(0,s.c)().state.padding).attr("width",h).attr("height",3*(0,s.c)().state.textHeight).attr("rx",(0,s.c)().state.radius),t.insert("rect",":first-child").attr("x",p).attr("y",(0,s.c)().state.titleShift-(0,s.c)().state.textHeight-(0,s.c)().state.padding).attr("width",h).attr("height",l.height+3+2*(0,s.c)().state.textHeight).attr("rx",(0,s.c)().state.radius),t},g=function(t,e){const a=e.id,i={id:a,label:e.id,width:0,height:0},n=t.append("g").attr("id",a).attr("class","stateGroup");"start"===e.type&&(t=>{t.append("circle").attr("class","start-state").attr("r",(0,s.c)().state.sizeUnit).attr("cx",(0,s.c)().state.padding+(0,s.c)().state.sizeUnit).attr("cy",(0,s.c)().state.padding+(0,s.c)().state.sizeUnit)})(n),"end"===e.type&&(t=>{t.append("circle").attr("class","end-state-outer").attr("r",(0,s.c)().state.sizeUnit+(0,s.c)().state.miniPadding).attr("cx",(0,s.c)().state.padding+(0,s.c)().state.sizeUnit+(0,s.c)().state.miniPadding).attr("cy",(0,s.c)().state.padding+(0,s.c)().state.sizeUnit+(0,s.c)().state.miniPadding),t.append("circle").attr("class","end-state-inner").attr("r",(0,s.c)().state.sizeUnit).attr("cx",(0,s.c)().state.padding+(0,s.c)().state.sizeUnit+2).attr("cy",(0,s.c)().state.padding+(0,s.c)().state.sizeUnit+2)})(n),"fork"!==e.type&&"join"!==e.type||((t,e)=>{let a=(0,s.c)().state.forkWidth,i=(0,s.c)().state.forkHeight;if(e.parentId){let t=a;a=i,i=t}t.append("rect").style("stroke","black").style("fill","black").attr("width",a).attr("height",i).attr("x",(0,s.c)().state.padding).attr("y",(0,s.c)().state.padding)})(n,e),"note"===e.type&&((t,e)=>{e.attr("class","state-note");const a=e.append("rect").attr("x",0).attr("y",(0,s.c)().state.padding),i=e.append("g"),{textWidth:n,textHeight:d}=((t,e,a,i)=>{let n=0;const d=i.append("text");d.style("text-anchor","start"),d.attr("class","noteText");let r=t.replace(/\r\n/g,"<br/>");r=r.replace(/\n/g,"<br/>");const o=r.split(s.e.lineBreakRegex);let c=1.25*(0,s.c)().state.noteMargin;for(const t of o){const e=t.trim();if(e.length>0){const t=d.append("tspan");t.text(e),0===c&&(c+=t.node().getBBox().height),n+=c,t.attr("x",0+(0,s.c)().state.noteMargin),t.attr("y",0+n+1.25*(0,s.c)().state.noteMargin)}}return{textWidth:d.node().getBBox().width,textHeight:n}})(t,0,0,i);a.attr("height",d+2*(0,s.c)().state.noteMargin),a.attr("width",n+2*(0,s.c)().state.noteMargin)})(e.note.text,n),"divider"===e.type&&(t=>{t.append("line").style("stroke","grey").style("stroke-dasharray","3").attr("x1",(0,s.c)().state.textHeight).attr("class","divider").attr("x2",2*(0,s.c)().state.textHeight).attr("y1",0).attr("y2",0)})(n),"default"===e.type&&0===e.descriptions.length&&((t,e)=>{const a=t.append("text").attr("x",2*(0,s.c)().state.padding).attr("y",(0,s.c)().state.textHeight+2*(0,s.c)().state.padding).attr("font-size",(0,s.c)().state.fontSize).attr("class","state-title").text(e.id).node().getBBox();t.insert("rect",":first-child").attr("x",(0,s.c)().state.padding).attr("y",(0,s.c)().state.padding).attr("width",a.width+2*(0,s.c)().state.padding).attr("height",a.height+2*(0,s.c)().state.padding).attr("rx",(0,s.c)().state.radius)})(n,e),"default"===e.type&&e.descriptions.length>0&&((t,e)=>{const a=t.append("text").attr("x",2*(0,s.c)().state.padding).attr("y",(0,s.c)().state.textHeight+1.3*(0,s.c)().state.padding).attr("font-size",(0,s.c)().state.fontSize).attr("class","state-title").text(e.descriptions[0]).node().getBBox(),i=a.height,n=t.append("text").attr("x",(0,s.c)().state.padding).attr("y",i+.4*(0,s.c)().state.padding+(0,s.c)().state.dividerMargin+(0,s.c)().state.textHeight).attr("class","state-description");let d=!0,r=!0;e.descriptions.forEach((function(t){d||(function(t,e,a){const i=t.append("tspan").attr("x",2*(0,s.c)().state.padding).text(e);a||i.attr("dy",(0,s.c)().state.textHeight)}(n,t,r),r=!1),d=!1}));const o=t.append("line").attr("x1",(0,s.c)().state.padding).attr("y1",(0,s.c)().state.padding+i+(0,s.c)().state.dividerMargin/2).attr("y2",(0,s.c)().state.padding+i+(0,s.c)().state.dividerMargin/2).attr("class","descr-divider"),c=n.node().getBBox(),g=Math.max(c.width,a.width);o.attr("x2",g+3*(0,s.c)().state.padding),t.insert("rect",":first-child").attr("x",(0,s.c)().state.padding).attr("y",(0,s.c)().state.padding).attr("width",g+2*(0,s.c)().state.padding).attr("height",c.height+i+2*(0,s.c)().state.padding).attr("rx",(0,s.c)().state.radius)})(n,e);const d=n.node().getBBox();return i.width=d.width+2*(0,s.c)().state.padding,i.height=d.height+2*(0,s.c)().state.padding,r=i,o[a]=r,i;var r};let p,h=0;const l={},x=(t,e,a,o,u,f,y)=>{const w=new r.k({compound:!0,multigraph:!0});let b,m=!0;for(b=0;b<t.length;b++)if("relation"===t[b].stmt){m=!1;break}a?w.setGraph({rankdir:"LR",multigraph:!0,compound:!0,ranker:"tight-tree",ranksep:m?1:p.edgeLengthFactor,nodeSep:m?1:50,isMultiGraph:!0}):w.setGraph({rankdir:"TB",multigraph:!0,compound:!0,ranksep:m?1:p.edgeLengthFactor,nodeSep:m?1:50,ranker:"tight-tree",isMultiGraph:!0}),w.setDefaultEdgeLabel((function(){return{}})),y.db.extract(t);const B=y.db.getStates(),k=y.db.getRelations(),N=Object.keys(B);for(const t of N){const i=B[t];let n;if(a&&(i.parentId=a),i.doc){let t=e.append("g").attr("id",i.id).attr("class","stateGroup");n=x(i.doc,t,i.id,!o,u,f,y);{t=c(t,i,o);let e=t.node().getBBox();n.width=e.width,n.height=e.height+p.padding/2,l[i.id]={y:p.compositTitleSize}}}else n=g(e,i);if(i.note){const t={descriptions:[],id:i.id+"-note",note:i.note,type:"note"},a=g(e,t);"left of"===i.note.position?(w.setNode(n.id+"-note",a),w.setNode(n.id,n)):(w.setNode(n.id,n),w.setNode(n.id+"-note",a)),w.setParent(n.id,n.id+"-group"),w.setParent(n.id+"-note",n.id+"-group")}else w.setNode(n.id,n)}s.l.debug("Count=",w.nodeCount(),w);let E=0;k.forEach((function(t){var e;E++,s.l.debug("Setting edge",t),w.setEdge(t.id1,t.id2,{relation:t,width:(e=t.title,e?e.length*p.fontSizeFactor:1),height:p.labelHeight*s.e.getRows(t.title).length,labelpos:"c"},"id"+E)})),(0,d.bK)(w),s.l.debug("Graph after layout",w.nodes());const v=e.node();w.nodes().forEach((function(t){void 0!==t&&void 0!==w.node(t)?(s.l.warn("Node "+t+": "+JSON.stringify(w.node(t))),u.select("#"+v.id+" #"+t).attr("transform","translate("+(w.node(t).x-w.node(t).width/2)+","+(w.node(t).y+(l[t]?l[t].y:0)-w.node(t).height/2)+" )"),u.select("#"+v.id+" #"+t).attr("data-x-shift",w.node(t).x-w.node(t).width/2),f.querySelectorAll("#"+v.id+" #"+t+" .divider").forEach((t=>{const e=t.parentElement;let a=0,i=0;e&&(e.parentElement&&(a=e.parentElement.getBBox().width),i=parseInt(e.getAttribute("data-x-shift"),10),Number.isNaN(i)&&(i=0)),t.setAttribute("x1",0-i+8),t.setAttribute("x2",a-i-8)}))):s.l.debug("No Node "+t+": "+JSON.stringify(w.node(t)))}));let M=v.getBBox();w.edges().forEach((function(t){void 0!==t&&void 0!==w.edge(t)&&(s.l.debug("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(w.edge(t))),function(t,e,a){e.points=e.points.filter((t=>!Number.isNaN(t.y)));const d=e.points,r=(0,n.jvg)().x((function(t){return t.x})).y((function(t){return t.y})).curve(n.$0Z),o=t.append("path").attr("d",r(d)).attr("id","edge"+h).attr("class","transition");let c="";if((0,s.c)().state.arrowMarkerAbsolute&&(c=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,c=c.replace(/\(/g,"\\("),c=c.replace(/\)/g,"\\)")),o.attr("marker-end","url("+c+"#"+function(t){switch(t){case i.d.relationType.AGGREGATION:return"aggregation";case i.d.relationType.EXTENSION:return"extension";case i.d.relationType.COMPOSITION:return"composition";case i.d.relationType.DEPENDENCY:return"dependency"}}(i.d.relationType.DEPENDENCY)+"End)"),void 0!==a.title){const i=t.append("g").attr("class","stateLabel"),{x:n,y:d}=s.u.calcLabelPosition(e.points),r=s.e.getRows(a.title);let o=0;const c=[];let g=0,p=0;for(let t=0;t<=r.length;t++){const e=i.append("text").attr("text-anchor","middle").text(r[t]).attr("x",n).attr("y",d+o),a=e.node().getBBox();if(g=Math.max(g,a.width),p=Math.min(p,a.x),s.l.info(a.x,n,d+o),0===o){const t=e.node().getBBox();o=t.height,s.l.info("Title height",o,d)}c.push(e)}let h=o*r.length;if(r.length>1){const t=(r.length-1)*o*.5;c.forEach(((e,a)=>e.attr("y",d+a*o-t))),h=o*r.length}const l=i.node().getBBox();i.insert("rect",":first-child").attr("class","box").attr("x",n-g/2-(0,s.c)().state.padding/2).attr("y",d-h/2-(0,s.c)().state.padding/2-3.5).attr("width",g+(0,s.c)().state.padding).attr("height",h+(0,s.c)().state.padding),s.l.info(l)}h++}(e,w.edge(t),w.edge(t).relation))})),M=v.getBBox();const S={id:a||"root",label:a||"root",width:0,height:0};return S.width=M.width+2*p.padding,S.height=M.height+2*p.padding,s.l.debug("Doc rendered",S,w),S},u={setConf:function(){},draw:function(t,e,a,i){p=(0,s.c)().state;const d=(0,s.c)().securityLevel;let o;"sandbox"===d&&(o=(0,n.Ys)("#i"+e));const c="sandbox"===d?(0,n.Ys)(o.nodes()[0].contentDocument.body):(0,n.Ys)("body"),g="sandbox"===d?o.nodes()[0].contentDocument:document;s.l.debug("Rendering diagram "+t);const h=c.select(`[id='${e}']`);h.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z"),new r.k({multigraph:!0,compound:!0,rankdir:"RL"}).setDefaultEdgeLabel((function(){return{}}));const l=i.db.getRootDoc();x(l,h,void 0,!1,c,g,i);const u=p.padding,f=h.node().getBBox(),y=f.width+2*u,w=f.height+2*u,b=1.75*y;(0,s.i)(h,w,b,p.useMaxWidth),h.attr("viewBox",`${f.x-p.padding}  ${f.y-p.padding} `+y+" "+w)}},f={parser:i.p,db:i.d,renderer:u,styles:i.s,init:t=>{t.state||(t.state={}),t.state.arrowMarkerAbsolute=t.arrowMarkerAbsolute,i.d.clear()}}}}]);