import{o as e,c as t,d as i}from"./404.md.4cb41c54.js";const a='{"title":"Solid Entities","description":"","frontmatter":{"title":"Solid Entities","tags":["recipe","intermediate"]},"headers":[{"level":2,"title":"Boat runtime identifier","slug":"boat-runtime-identifier"},{"level":2,"title":"Shulker runtime identifier","slug":"shulker-runtime-identifier"},{"level":2,"title":"is_stackable","slug":"is-stackable"},{"level":2,"title":"Faking it with blocks","slug":"faking-it-with-blocks"}],"relativePath":"entities/solid-entities.md","lastUpdated":1631297337044}',s={},r=i('<p>Solid entities are entities that the player can bump into, step on, or otherwise physically interact with without passing through. Entities like this have many uses, such as emulating blocks.</p><p>This document will discuss some of the ways that solid entities can be created.</p><p>Not all techniques are ideal for all scenarios. Experiment, and figure out what works best for you.</p><h2 id="boat-runtime-identifier"><a class="header-anchor" href="#boat-runtime-identifier" aria-hidden="true">#</a> Boat runtime identifier</h2><p>The boat runtime identifier will cause the entity to be solid with the shape of a boat and provide some other boat-like effects, which might not be desirable. It is not possible to increase the scale of the solid part, even if you scale the entity.</p><h2 id="shulker-runtime-identifier"><a class="header-anchor" href="#shulker-runtime-identifier" aria-hidden="true">#</a> Shulker runtime identifier</h2><p>The shulker runtime identifier will cause the entity to be solid with a 1x1 block and act like a shulker, including unwanted teleports. It is not possible to increase the scale of the substantial part, even if you scale the entity.</p><h2 id="is-stackable"><a class="header-anchor" href="#is-stackable" aria-hidden="true">#</a> is_stackable</h2><p>Place <code>minecraft:is_stackable</code> on both entities you want to collide. <strong>Note:</strong> This requires editing <code>player.json</code> if you wish the entity to be solid for the player.</p><p>You will also need to add <code>minecraft:push_through</code> and set its <code>value</code> parameter to 1.</p><h2 id="faking-it-with-blocks"><a class="header-anchor" href="#faking-it-with-blocks" aria-hidden="true">#</a> Faking it with blocks</h2><p>In some scenarios, it&#39;s probably better to <code>/setblock</code> barriers, either statically or dynamically.</p>',12);s.render=function(i,a,s,o,n,l){return e(),t("div",null,[r])};export default s;export{a as __pageData};