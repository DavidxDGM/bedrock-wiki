import{r as a,o as n,c as e,a as s,w as t,b as o,d as i}from"./404.md.815b6aef.js";const p='{"title":"Math-based Animations","description":"","frontmatter":{"title":"Math-based Animations"},"headers":[{"level":2,"title":"Writing math-animations","slug":"writing-math-animations"},{"level":3,"title":"By hand","slug":"by-hand"},{"level":3,"title":"In Blockbench","slug":"in-blockbench"},{"level":2,"title":"Using queries","slug":"using-queries"},{"level":3,"title":"Avoiding animation controllers","slug":"avoiding-animation-controllers"},{"level":2,"title":"Example","slug":"example"}],"relativePath":"visuals/math-based-animations.md","lastUpdated":1627143638639}',r={},l=o("Intermediate"),c=i('<p>Math animations are a powerful alternative to keyframe animations. Generally speaking, <code>math-based animations</code> is the concept of using Molang expressions to animate entity geometry. All vanilla animations are math-based:</p><p>Here is an example:</p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;leftarm&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;rotation&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;((-0.2 + 1.5 * (math.abs(math.mod(query.modified_distance_moved, 13) - 6.5) - 3.25) / 3.25) * query.modified_move_speed) * 57.3 - variable.agent.armxrotationfactor&quot;</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token string">&quot;-variable.agent.armzrotation&quot;</span> <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>As you can see, Math-based animations are complicated and hard to understand. For this reason, they should be treated as a <em>specialized-alternative</em> to key-frames -not a complete replacement.</p><h2 id="writing-math-animations"><a class="header-anchor" href="#writing-math-animations" aria-hidden="true">#</a> Writing math-animations</h2><h3 id="by-hand"><a class="header-anchor" href="#by-hand" aria-hidden="true">#</a> By hand</h3><p>Math-based animations can be written by hand. Simply create a new animation file, and write the math expressions. The format is fundamentally similar to keyframe animations. The vanilla resource files can be a valuable source of inspiration, and you should download the vanilla resource pack!</p><h3 id="in-blockbench"><a class="header-anchor" href="#in-blockbench" aria-hidden="true">#</a> In Blockbench</h3><p>You can write and preview math-based animations in Blockbench. If you want to create a math-powered animation, create a keyframe at 0 seconds in your timeline and edit the MoLang expressions in the keyframe panel on the left sidebar. You can also mix and match numeric keyframes with math-based keyframes. Omit quotation marks around the expression. They are only required in raw JSON editing!</p><p>Not all queries are supported in Blockbench due to missing context. If you want to preview an animation that uses a specific query, you can add it to the &quot;Variable Placeholders&quot; section right under the keyframe panel to simulate a value. For example, adding <code>query.modified_distance_moved = time*8</code> simulates the modified_distance_moved query with a speed of 8 blocks per second.</p><h2 id="using-queries"><a class="header-anchor" href="#using-queries" aria-hidden="true">#</a> Using queries</h2><p>The biggest tool you have access to when writing math-based animations is using <code>queries</code>. Queries can be used to add outside information into your math expression.</p><p>Common ones include:</p><ul><li><code>query.modified_distance_moved</code></li><li><code>query.modified_move_speed</code></li><li><code>query.anim_time</code></li><li><code>query.life_time</code></li></ul><p>The reason we want to use queries is it allows us to drive animations from gameplay directly. Things like the attack time or distance moved will enable us to drive gameplay directly and allow animations to match the speed of the action.</p><h3 id="avoiding-animation-controllers"><a class="header-anchor" href="#avoiding-animation-controllers" aria-hidden="true">#</a> Avoiding animation controllers</h3><p>By using queries, you can avoid the need to create animation controllers. If the entity&#39;s speed is directly related to the speed of the walk animation, then by default, an entity that isn&#39;t moving won&#39;t be animated.</p><h2 id="example"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><p>A specific example is using animations to drive the wheels of a car based on the <code>modified_distance_moved</code>:</p><div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>\n\t<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.12.0&quot;</span><span class="token punctuation">,</span>\n\t<span class="token property">&quot;animations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t<span class="token property">&quot;animation.car.wheel_spin&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token property">&quot;loop&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\t\t\t<span class="token property">&quot;animation_length&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>\n\t\t\t<span class="token property">&quot;bones&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t\t<span class="token property">&quot;front_wheels&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t\t\t<span class="token property">&quot;rotation&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;query.modified_distance_moved * -30&quot;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span>\n\t\t\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t\t<span class="token property">&quot;back_wheels&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t\t\t<span class="token property">&quot;rotation&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;query.modified_distance_moved * -30&quot;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span>\n\t\t\t\t<span class="token punctuation">}</span>\n\t\t\t<span class="token punctuation">}</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>In this example, the bones/groups <code>front_wheels</code> and <code>back_wheels</code> are rotated based on the <code>query.modified_distance_moved</code>, multiplied by some 30.</p><p>This means</p><ul><li>A car at rests will not spin</li><li>A car that is driving will spin proportionally fast to the speed of the car</li></ul>',23);r.render=function(o,i,p,r,u,d){const m=a("Label");return n(),e("div",null,[s(m,{color:"yellow"},{default:t((()=>[l])),_:1}),c])};export default r;export{p as __pageData};
