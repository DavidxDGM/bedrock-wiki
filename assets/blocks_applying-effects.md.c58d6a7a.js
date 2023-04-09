import{_ as c,c as r,a as l,w as o,b as s,d as n,e,r as t,o as D}from"./404.md.e854e0c1.js";const B=JSON.parse('{"title":"Applying constant Effects to Entities","description":"","frontmatter":{"title":"Applying constant Effects to Entities","category":"Tutorials","tags":["experimental","easy"],"mention":["MysticChair"]},"headers":[{"level":2,"title":"Code","slug":"code","link":"#code","children":[]},{"level":2,"title":"Notes and issues","slug":"notes-and-issues","link":"#notes-and-issues","children":[]}],"relativePath":"blocks/applying-effects.md"}'),F={name:"blocks/applying-effects.md"},y=s("p",null,[n("This tutorial aims to show how to apply status effects to entities as long as these entities stand on the block. There are few issues that can encounter during trial-and-error, this guide is a workaround to these issues. List of potential problems is attached on the bottom of this page. Please visit "),s("a",{href:"/blocks/blocks-16.html"},"Blocks 1.16.100+"),n(" first to have better understanding of components used in this tutorial.")],-1),i=s("h2",{id:"code",tabindex:"-1"},[n("Code "),s("a",{class:"header-anchor",href:"#code","aria-hidden":"true"},"#")],-1),C=s("p",null,[n("We will need to add a couple things to our code, first let's start with property that will hold "),s("code",null,"true"),n(" and "),s("code",null,"false"),n(" values:")],-1),A=e(`<div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">properties</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">wiki:is_on_block</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[true,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false]</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Now we need <code>minecraft:ticking</code> component that will check if our property is set to <code>true</code> and if so, trigger the event causing the effect to apply:</p>`,2),u=e(`<div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">minecraft:ticking</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">range</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">looping</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">on_tick</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">event</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">wiki:add_effect_event</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">target</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">self</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">condition</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">query.block_property(&#39;wiki:is_on_block\`) == true</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>We will use <code>minecraft:on_step_on</code> component to fire the event that will set our <code>wiki:is_on_block</code> to <code>true</code>:</p>`,2),b=e(`<div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">minecraft:on_step_on</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">event</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">wiki:change_property</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">target</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">self</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Time to setup <code>events</code> section. First let&#39;s set the <code>wiki:change_property</code> event:</p>`,2),d=e(`<div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">wiki:change_property</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">set_block_property</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">wiki:is_on_block</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>The last thing to add is event that will trigger the effect:</p>`,2),m=e(`<div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">wiki:add_effect_event</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">run_command</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">command</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">effect @e[r=1] wither 2 2 false</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>And done! The code above will trigger the desired status effect as long as the entity is standing on a block.</p><h2 id="notes-and-issues" tabindex="-1">Notes and issues <a class="header-anchor" href="#notes-and-issues" aria-hidden="true">#</a></h2><p>Some context for the last part of the code:</p><ul><li><p><strong>Q</strong>: Why does the status effect is triggered via <code>run_command</code> event function if there&#39;s already <code>add_mob_effect</code> event function that does that?</p></li><li><p><strong>A</strong>: <code>add_mob_effect</code> seems to not work if triggered from <code>minecraft:ticking</code>, that&#39;s why we use <code>run_command</code> as a workaround.</p></li><li><p><strong>Q</strong>: What is <code>false</code> value in <code>wiki:is_on_block</code> used for?</p></li><li><p><strong>A</strong>: <code>false</code> value is needed as setting <code>wiki:is_on_block: true</code> crashes the game. Setting <code>wiki:is_on_block: [true]</code> seems to work, however creates many debug log errors.</p></li></ul><p>Depending on the desired outcome, there is a potential issue if effect duration is set to less than 2 seconds. If the effect is causing damage to an entity (for example via poison), that damage will be applied as soon as the effect is triggered. This results in the situation where entity receives damage faster than in vanilla Minecraft, since applying effect is quicker than damage that occurs from effects applied for more than 2 seconds (considering the entity is moving). To better understand this, simply set the effect duration in <code>command</code> to 1 second and compare the results. Having a 2 second duration allows the game to apply the damage in correct pace.</p>`,6),_=s("div",{class:"language-json line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"json"),s("pre",{class:"shiki"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C792EA"}},"format_version"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"1.16.100"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C792EA"}},"minecraft:block"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#FFCB6B"}},"description"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F78C6C"}},"identifier"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"wiki:damage_block"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F78C6C"}},"properties"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"				"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F07178"}},"wiki:is_on_block"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"[true,"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"false]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			"),s("span",{style:{color:"#89DDFF"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#FFCB6B"}},"components"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F78C6C"}},"minecraft:unit_cube"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F78C6C"}},"minecraft:creative_category"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"					"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F07178"}},"category"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"nature"),s("span",{style:{color:"#89DDFF"}},'"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			"),s("span",{style:{color:"#89DDFF"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F78C6C"}},"minecraft:loot"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"loot_tables/empty.json"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F78C6C"}},"minecraft:on_step_on"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"				"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F07178"}},"event"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"wiki:change_property"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"				"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F07178"}},"target"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"self"),s("span",{style:{color:"#89DDFF"}},'"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			"),s("span",{style:{color:"#89DDFF"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F78C6C"}},"minecraft:ticking"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"				"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F07178"}},"range"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"["),s("span",{style:{color:"#F78C6C"}},"1"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"1"),s("span",{style:{color:"#89DDFF"}},"],")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"				"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F07178"}},"looping"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"true,")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"				"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F07178"}},"on_tick"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"					"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#916B53"}},"event"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"wiki:add_effect_event"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"					"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#916B53"}},"target"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"self"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"					"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#916B53"}},"condition"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"query.block_property('wiki:is_on_block') == true"),s("span",{style:{color:"#89DDFF"}},'"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"				"),s("span",{style:{color:"#89DDFF"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			"),s("span",{style:{color:"#89DDFF"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F78C6C"}},"minecraft:breakonpush"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"true,")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F78C6C"}},"minecraft:destroy_time"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0.2"),s("span",{style:{color:"#89DDFF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F78C6C"}},"minecraft:explosion_resistance"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"1"),s("span",{style:{color:"#89DDFF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F78C6C"}},"minecraft:friction"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0.6"),s("span",{style:{color:"#89DDFF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F78C6C"}},"minecraft:flammable"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"				"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F07178"}},"flame_odds"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0"),s("span",{style:{color:"#89DDFF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"				"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F07178"}},"burn_odds"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			"),s("span",{style:{color:"#89DDFF"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F78C6C"}},"minecraft:map_color"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"#181818"),s("span",{style:{color:"#89DDFF"}},'"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#FFCB6B"}},"events"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F78C6C"}},"wiki:change_property"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"				"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F07178"}},"set_block_property"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"					"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#916B53"}},"wiki:is_on_block"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"true")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"				"),s("span",{style:{color:"#89DDFF"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			"),s("span",{style:{color:"#89DDFF"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F78C6C"}},"wiki:add_effect_event"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"				"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F07178"}},"run_command"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"					"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#916B53"}},"command"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"["),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"effect @e[r=1] wither 2 2 false"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},"]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"				"),s("span",{style:{color:"#89DDFF"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			"),s("span",{style:{color:"#89DDFF"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers-wrapper"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br"),s("span",{class:"line-number"},"12"),s("br"),s("span",{class:"line-number"},"13"),s("br"),s("span",{class:"line-number"},"14"),s("br"),s("span",{class:"line-number"},"15"),s("br"),s("span",{class:"line-number"},"16"),s("br"),s("span",{class:"line-number"},"17"),s("br"),s("span",{class:"line-number"},"18"),s("br"),s("span",{class:"line-number"},"19"),s("br"),s("span",{class:"line-number"},"20"),s("br"),s("span",{class:"line-number"},"21"),s("br"),s("span",{class:"line-number"},"22"),s("br"),s("span",{class:"line-number"},"23"),s("br"),s("span",{class:"line-number"},"24"),s("br"),s("span",{class:"line-number"},"25"),s("br"),s("span",{class:"line-number"},"26"),s("br"),s("span",{class:"line-number"},"27"),s("br"),s("span",{class:"line-number"},"28"),s("br"),s("span",{class:"line-number"},"29"),s("br"),s("span",{class:"line-number"},"30"),s("br"),s("span",{class:"line-number"},"31"),s("br"),s("span",{class:"line-number"},"32"),s("br"),s("span",{class:"line-number"},"33"),s("br"),s("span",{class:"line-number"},"34"),s("br"),s("span",{class:"line-number"},"35"),s("br"),s("span",{class:"line-number"},"36"),s("br"),s("span",{class:"line-number"},"37"),s("br"),s("span",{class:"line-number"},"38"),s("br"),s("span",{class:"line-number"},"39"),s("br"),s("span",{class:"line-number"},"40"),s("br"),s("span",{class:"line-number"},"41"),s("br"),s("span",{class:"line-number"},"42"),s("br"),s("span",{class:"line-number"},"43"),s("br"),s("span",{class:"line-number"},"44"),s("br"),s("span",{class:"line-number"},"45"),s("br"),s("span",{class:"line-number"},"46"),s("br"),s("span",{class:"line-number"},"47"),s("br"),s("span",{class:"line-number"},"48"),s("br"),s("span",{class:"line-number"},"49"),s("br"),s("span",{class:"line-number"},"50"),s("br"),s("span",{class:"line-number"},"51"),s("br"),s("span",{class:"line-number"},"52"),s("br")])],-1);function f(h,g,k,v,w,q){const a=t("CodeHeader"),p=t("Spoiler");return D(),r("div",null,[y,i,C,l(a,null,{default:o(()=>[n("BP/blocks/damage_block.json")]),_:1}),A,l(a,null,{default:o(()=>[n("BP/blocks/damage_block.json")]),_:1}),u,l(a,null,{default:o(()=>[n("BP/blocks/damage_block.json")]),_:1}),b,l(a,null,{default:o(()=>[n("BP/blocks/damage_block.json")]),_:1}),d,l(a,null,{default:o(()=>[n("BP/blocks/damage_block.json")]),_:1}),m,l(p,{title:"Example code"},{default:o(()=>[l(a,null,{default:o(()=>[n("BP/blocks/damage_block.json")]),_:1}),_]),_:1})])}const E=c(F,[["render",f]]);export{B as __pageData,E as default};