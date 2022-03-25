import{_ as r,c as i,a as t,w as e,b as n,e as a,d as s,r as o,o as k}from"./404.md.25b6a67d.js";var b="/assets/images/guide/custom_entity/ghost_view.png";const tn='{"title":"Create a custom Entity","description":"","frontmatter":{"title":"Create a custom Entity","category":"Guide","nav_order":6,"prefix":"6. "},"headers":[{"level":2,"title":"Behavior code","slug":"behavior-code"},{"level":2,"title":"Resource code","slug":"resource-code"},{"level":2,"title":"Visuals","slug":"visuals"},{"level":3,"title":"Texture","slug":"texture"},{"level":3,"title":"Model","slug":"model"},{"level":3,"title":"Animations","slug":"animations"},{"level":3,"title":"Animation Controller","slug":"animation-controller"},{"level":3,"title":"Entity name","slug":"entity-name"},{"level":2,"title":"What you have learned","slug":"what-you-have-learned"},{"level":2,"title":"Your progress so far","slug":"your-progress-so-far"}],"relativePath":"guide/custom-entity.md"}',m={},d=a("",5),q=s("BP/entities/ghost.se.json"),h=a("",1),y=a("",2),_=n("p",null,[s("The next section is "),n("code",null,'"components"'),s(". Again, just like with items, components define the main traits of an entity. Let's go over every single one in this example:")],-1),g=a("",6),f=n("p",null,[n("code",null,'"minecraft:behavior.delayed_attack"'),s(" is a "),n("em",null,"behavior attribute"),s(", which allows the entity to execute some behavior patterns like, in this case, attacking. Its most important options are:")],-1),v=n("ul",null,[n("li",null,[n("code",null,'"priority"'),s(" is often seen in components. If a mob can execute two actions simultaneously, the lower behavior integer will get picked. "),n("code",null,"0"),s(" means the action is always preferred over everything else.")])],-1),w=n("p",null,[s("Behaviors are components that make the entity do something. They are always in the form: "),n("code",null,"minecraft:behavior.*"),s(".")],-1),T=n("p",null,[s("All behaviors contain a "),n("code",null,'"priority"'),s(" field. This field is used to decide when/how often the behavior will run.")],-1),x=n("p",null,"\u26A0\uFE0F In general, the more important behaviors should be lower, like 0, or 1.",-1),A=n("p",null,[s("When the entity is picking something to do, it searches all its behaviors from lowest priority to the highest priority and picks the first one that it can do. For this reason, you need to make important behaviors like "),n("code",null,"minecraft:behavior.nearest_attackable_target"),s(" lower than behaviors like "),n("code",null,"minecraft:behavior.look_at_player"),s(". If the "),n("code",null,"look_at_player"),s(" is lower, it will always run this first when the player is close, and the entity will never attack.")],-1),S=n("ul",null,[n("li",null,[s("You can look up the rest of the options on the official Documentation, "),n("a",{href:"https://bedrock.dev/docs/stable/Entities",target:"_blank",rel:"noopener noreferrer"},"bedrock.dev")])],-1),P=a("",5),C=a("",2),I=n("h2",{id:"resource-code",tabindex:"-1"},[s("Resource code "),n("a",{class:"header-anchor",href:"#resource-code","aria-hidden":"true"},"#")],-1),R=n("p",null,[s("Again, just like with the item, a custom entity needs a resource file listing its model, texture, and animation names. Note, here we named the file with a "),n("code",null,".ce"),s(" suffix which stands for client entity.")],-1),j=s("RP/entity/ghost.ce.json"),V=a("",3),E=a("",4),N=s("RP/render_controllers/entity/ghost.rc.json"),B=a("",8),D=s("Download texture here"),G=a("",2),W=s("RP/models/entity/ghost.geo.json"),H=a("",4),Y=s("RP/animations/ghost.a.json"),L=a("",4),z=s("RP/animation_controllers/ghost.ac.json"),O=a("",7),F=a("",3),M=s("RP/texts/en_US.lang"),J=a("",6),U=n("ul",null,[n("li",null,"[x] Setup your pack"),n("li",null,"[x] Create a custom item"),n("li",null,"[x] Create a custom entity"),n("li",null,"[ ] Create the entity's loot, spawn rules, and a custom recipe")],-1);function $(X,Z,K,Q,nn,sn){const p=o("CodeHeader"),c=o("Spoiler"),l=o("BButton"),u=o("Checklist");return k(),i("div",null,[d,t(p,null,{default:e(()=>[q]),_:1}),h,n("ul",null,[y,n("li",null,[_,n("ul",null,[g,n("li",null,[f,v,t(c,{title:"Read more about entity behavior priority"},{default:e(()=>[w,T,x,A]),_:1}),S]),P]),t(p),C])]),I,R,t(p,null,{default:e(()=>[j]),_:1}),V,t(p),E,t(p,null,{default:e(()=>[N]),_:1}),B,t(l,{link:"https://raw.githubusercontent.com/Bedrock-OSS/wiki-addon/main/guide/guide_RP/textures/entity/ghost.png"},{default:e(()=>[D]),_:1}),G,t(p,null,{default:e(()=>[W]),_:1}),H,t(p,null,{default:e(()=>[Y]),_:1}),L,t(p,null,{default:e(()=>[z]),_:1}),O,t(p),F,t(p,null,{default:e(()=>[M]),_:1}),J,t(u,null,{default:e(()=>[U]),_:1})])}var pn=r(m,[["render",$]]);export{tn as __pageData,pn as default};