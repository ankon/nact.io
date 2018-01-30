webpackJsonp([47234108027944],{381:function(n,s){n.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Supervision",lesson:5,category:"javascript",chapter:2,type:"lesson"},fields:{slug:"/supervision"}}},{node:{frontmatter:{title:"Actor Communication",lesson:2,category:"javascript",chapter:2,type:"lesson"},fields:{slug:"/actor-communication"}}},{node:{frontmatter:{title:"Hierarchy",lesson:4,category:"javascript",chapter:2,type:"lesson"},fields:{slug:"/hierarchy"}}},{node:{frontmatter:{title:"Getting Started",lesson:2,category:"javascript",chapter:1,type:"lesson"},fields:{slug:"/getting-started"}}},{node:{frontmatter:{title:"Introduction",lesson:1,category:"javascript",chapter:1,type:"lesson"},fields:{slug:"/introduction"}}},{node:{frontmatter:{title:"Snapshotting",lesson:2,category:"javascript",chapter:3,type:"lesson"},fields:{slug:"/snapshotting"}}},{node:{frontmatter:{title:"Persist",lesson:1,category:"javascript",chapter:3,type:"lesson"},fields:{slug:"/persist"}}},{node:{frontmatter:{title:"Stateful Actors",lesson:1,category:"javascript",chapter:2,type:"lesson"},fields:{slug:"/stateful-actors"}}},{node:{frontmatter:{title:"Querying",lesson:3,category:"javascript",chapter:2,type:"lesson"},fields:{slug:"/querying"}}},{node:{frontmatter:{title:"Timeouts",lesson:3,category:"javascript",chapter:3,type:"lesson"},fields:{slug:"/timeouts"}}},{node:{frontmatter:{title:"Logging and Monitoring",lesson:1,category:"javascript",chapter:4,type:"lesson"},fields:{slug:"/logging-and-monitoring"}}}]},postBySlug:{html:'<!-- <a class="remix-button" href="https://glitch.com/edit/#!/remix/nact-ping-pong" target="_blank">\n  <button>\n    <img src="/img/code-fork-symbol.svg"/> REMIX\n  </button>\n</a> -->\n<p>An actor alone is a somewhat useless construct; actors need to work together. Actors can send messages to one another by using the <code>dispatch</code> method. </p>\n<p>The third parameter of <code>dispatch</code> is the sender. This parameter is very useful in allowing an actor to service requests without knowing explicitly who the sender is.</p>\n<p>In this example, the actors Ping and Pong are playing a perfect ping-pong match. To start the match, we dispatch a message to Ping as Pong use this third parameter. </p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> delay <span class="token operator">=</span> <span class="token punctuation">(</span>time<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> time<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> ping <span class="token operator">=</span> <span class="token function">spawnStateless</span><span class="token punctuation">(</span>system<span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>msg<span class="token punctuation">,</span> ctx<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span>  <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment" spellcheck="true">// ping: Pong is a little slow. So I\'m giving myself a little handicap :P</span>\n  <span class="token keyword">await</span> <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">dispatch</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> ctx<span class="token punctuation">.</span>name<span class="token punctuation">,</span> ctx<span class="token punctuation">.</span>self<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">\'ping\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> pong <span class="token operator">=</span> <span class="token function">spawnStateless</span><span class="token punctuation">(</span>system<span class="token punctuation">,</span> <span class="token punctuation">(</span>msg<span class="token punctuation">,</span> ctx<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span>  <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">dispatch</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> ctx<span class="token punctuation">.</span>name<span class="token punctuation">,</span> ctx<span class="token punctuation">.</span>self<span class="token punctuation">)</span><span class="token punctuation">;</span>  \n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">\'pong\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">dispatch</span><span class="token punctuation">(</span>ping<span class="token punctuation">,</span> <span class="token string">\'begin\'</span><span class="token punctuation">,</span> pong<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>This produces the following console output:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>begin\nping\npong\nping\npong\nping\netc...</code></pre>\n      </div>',timeToRead:1,excerpt:"An actor alone is a somewhat useless construct; actors need to work together. Actors can send messages to one another by using the   method...",frontmatter:{title:"Actor Communication",cover:"https://unsplash.it/400/300/?random?BoldMage",date:"11/12/2017",category:"javascript",tags:["getting-started","nact","javascript","nodejs"]},fields:{slug:"/actor-communication"}}},pathContext:{slug:"/actor-communication",category:"javascript"}}}});
//# sourceMappingURL=path---lesson-javascript-actor-communication-5bb7987847c58ca5ab00.js.map