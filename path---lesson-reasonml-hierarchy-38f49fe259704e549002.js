webpackJsonp([0xdb3ec32fc1dd],{395:function(n,s){n.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Actor Communication",lesson:2,category:"reasonml",chapter:2,type:"lesson"},fields:{slug:"/actor-communication"}}},{node:{frontmatter:{title:"Getting Started",lesson:2,category:"reasonml",chapter:1,type:"lesson"},fields:{slug:"/getting-started"}}},{node:{frontmatter:{title:"Hierarchy",lesson:4,category:"reasonml",chapter:2,type:"lesson"},fields:{slug:"/hierarchy"}}},{node:{frontmatter:{title:"Snapshotting",lesson:2,category:"reasonml",chapter:3,type:"lesson"},fields:{slug:"/snapshotting"}}},{node:{frontmatter:{title:"Persist",lesson:1,category:"reasonml",chapter:3,type:"lesson"},fields:{slug:"/persist"}}},{node:{frontmatter:{title:"Introduction",lesson:1,category:"reasonml",chapter:1,type:"lesson"},fields:{slug:"/introduction"}}},{node:{frontmatter:{title:"Querying",lesson:3,category:"reasonml",chapter:2,type:"lesson"},fields:{slug:"/querying"}}},{node:{frontmatter:{title:"Timeouts",lesson:3,category:"reasonml",chapter:3,type:"lesson"},fields:{slug:"/timeouts"}}},{node:{frontmatter:{title:"Stateful Actors",lesson:1,category:"reasonml",chapter:2,type:"lesson"},fields:{slug:"/stateful-actors"}}},{node:{frontmatter:{title:"Supervision",lesson:5,category:"reasonml",chapter:2,type:"lesson"},fields:{slug:"/supervision"}}},{node:{frontmatter:{title:"Logging and Monitoring",lesson:1,category:"reasonml",chapter:4,type:"lesson"},fields:{slug:"/logging-and-monitoring"}}},{node:{frontmatter:{title:"Adapters",lesson:6,category:"reasonml",chapter:2,type:"lesson"},fields:{slug:"/adapters"}}}]},postBySlug:{html:'<p>The application we made in the <a href="/lesson/reasonml/querying">querying</a> section isn\'t very useful. For one it only supports a single user\'s contacts, and secondly it forgets all the user\'s contacts whenever the system restarts. In this section we\'ll solve the multi-user problem by exploiting an important feature of any blue-blooded actor system: the hierarchy.</p>\n<p>Actors are arranged hierarchically, they can create child actors of their own, and accordingly every actor has a parent. The lifecycle of an actor is tied to its parent; if an actor stops, then it\'s children do too.</p>\n<p>Up till now we\'ve been creating actors which are children of the actor system (which is a pseudo actor). However in a real system, this would be considered an anti pattern, for much the same reasons as placing all your code in a single file is an anti-pattern. By exploiting the actor hierarchy, you can enforce a separation of concerns and encapsulate system functionality, while providing a coherent means of reasoning with failure and system shutdown. </p>\n<p>Let us imagine that the single user contacts service was simple a part of some larger system; an email campaign management API for example.  A potentially valid system could perhaps be represented by the diagram below. </p>\n<p><img src="/img/hierarchy-diagram.svg" alt="Image"></p>\n<p>In the diagram, the email service is responsible for managing the template engine and email delivery, while the contacts service has chosen to model each user\'s contacts as an actor. (This is a very feasible approach in production provided you shutdown actors after a period of inactivity)</p>\n<p>Let us focus on the contacts service to see how we can make effective of use of the hierarchy. To support multiple users, we need do three things: </p>\n<ul>\n<li>Modify our original contacts service to so that we can parameterize its parent and name</li>\n<li>Create a parent to route requests to the correct child</li>\n<li>Add a user id to the path of each API endpoint and add a <code>userId</code> into each message.</li>\n</ul>\n<p>Modifying our original service is as simple as the following:</p>\n<div class="gatsby-highlight">\n      <pre class="language-reason"><code><span class="token keyword">let</span> createContactsService <span class="token operator">=</span> <span class="token punctuation">(</span>parent<span class="token punctuation">,</span> userId<span class="token punctuation">)</span> <span class="token operator">=></span>\n  spawn<span class="token punctuation">(</span>\n    <span class="token operator">~</span>name<span class="token operator">=</span>userId<span class="token punctuation">,</span>\n    parent<span class="token punctuation">,</span>\n    <span class="token punctuation">(</span>state<span class="token punctuation">,</span> <span class="token punctuation">(</span>sender<span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">,</span> _<span class="token punctuation">)</span> <span class="token operator">=></span>\n      <span class="token punctuation">(</span>\n        <span class="token keyword">switch</span> msg <span class="token punctuation">{</span>\n        <span class="token operator">|</span> <span class="token constructor variable">CreateContact</span><span class="token punctuation">(</span>contact<span class="token punctuation">)</span> <span class="token operator">=></span> createContact<span class="token punctuation">(</span>state<span class="token punctuation">,</span> sender<span class="token punctuation">,</span> contact<span class="token punctuation">)</span>\n        <span class="token operator">|</span> <span class="token constructor variable">RemoveContact</span><span class="token punctuation">(</span>contactId<span class="token punctuation">)</span> <span class="token operator">=></span> removeContact<span class="token punctuation">(</span>state<span class="token punctuation">,</span> sender<span class="token punctuation">,</span> contactId<span class="token punctuation">)</span>\n        <span class="token operator">|</span> <span class="token constructor variable">UpdateContact</span><span class="token punctuation">(</span>contactId<span class="token punctuation">,</span> contact<span class="token punctuation">)</span> <span class="token operator">=></span> updateContact<span class="token punctuation">(</span>state<span class="token punctuation">,</span> sender<span class="token punctuation">,</span> contactId<span class="token punctuation">,</span> contact<span class="token punctuation">)</span>\n        <span class="token operator">|</span> <span class="token constructor variable">FindContact</span><span class="token punctuation">(</span>contactId<span class="token punctuation">)</span> <span class="token operator">=></span> findContact<span class="token punctuation">(</span>state<span class="token punctuation">,</span> sender<span class="token punctuation">,</span> contactId<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">)</span>\n      <span class="token operator">|</span><span class="token operator">></span> <span class="token class-name">Js</span><span class="token punctuation">.</span><span class="token class-name">Promise</span><span class="token punctuation">.</span>resolve<span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>contacts<span class="token punctuation">:</span> <span class="token class-name">ContactIdMap</span><span class="token punctuation">.</span>empty<span class="token punctuation">,</span> seqNumber<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">}</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Now we need to create the parent contact service. The parent checks if it has a child with the userId as the key. If it does not, it spawns the\nchild actor:</p>\n<div class="gatsby-highlight">\n      <pre class="language-reason"><code><span class="token keyword">let</span> contactsService <span class="token operator">=</span>\n  spawn<span class="token punctuation">(</span>\n    system<span class="token punctuation">,</span>\n    <span class="token punctuation">(</span>children<span class="token punctuation">,</span> <span class="token punctuation">(</span>sender<span class="token punctuation">,</span> userId<span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">,</span> ctx<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">let</span> potentialChild <span class="token operator">=</span>\n        <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token constructor variable">Some</span><span class="token punctuation">(</span><span class="token class-name">StringMap</span><span class="token punctuation">.</span>find<span class="token punctuation">(</span>userId<span class="token punctuation">,</span> children<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token operator">|</span> _ <span class="token operator">=></span> <span class="token constructor variable">None</span>\n        <span class="token punctuation">}</span><span class="token punctuation">;</span>\n      <span class="token class-name">Js</span><span class="token punctuation">.</span><span class="token class-name">Promise</span><span class="token punctuation">.</span>resolve<span class="token punctuation">(</span>\n        <span class="token keyword">switch</span> potentialChild <span class="token punctuation">{</span>\n        <span class="token operator">|</span> <span class="token constructor variable">Some</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span> <span class="token operator">=></span>\n          dispatch<span class="token punctuation">(</span>child<span class="token punctuation">,</span> <span class="token punctuation">(</span>sender<span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          children\n        <span class="token operator">|</span> <span class="token constructor variable">None</span> <span class="token operator">=></span>\n          <span class="token keyword">let</span> child <span class="token operator">=</span> createContactsService<span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>self<span class="token punctuation">,</span> userId<span class="token punctuation">)</span><span class="token punctuation">;</span>\n          dispatch<span class="token punctuation">(</span>child<span class="token punctuation">,</span> <span class="token punctuation">(</span>sender<span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token class-name">StringMap</span><span class="token punctuation">.</span>add<span class="token punctuation">(</span>userId<span class="token punctuation">,</span> child<span class="token punctuation">,</span> children<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token class-name">StringMap</span><span class="token punctuation">.</span>empty\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>These two modifications show the power of an actor hierarchy. The contact service doesn\'t need to know the implementation details of its children (and doesn\'t even have to know about what kind of messages the children can handle). The children also don\'t need to worry about multi tenancy and can focus on the domain.</p>\n<p>Now the only thing remaining for a MVP of our contacts service is some way of persisting changes...</p>',timeToRead:2,excerpt:"The application we made in the  querying  section isn't very useful. For one it only supports a single user's contacts, and secondly it...",frontmatter:{title:"Hierarchy",cover:"https://unsplash.it/400/300/?random?BoldMage",date:"11/12/2017",category:"reasonml",tags:["getting-started","nact","reason","bucklescript"]},fields:{slug:"/hierarchy"}}},pathContext:{slug:"/hierarchy",category:"reasonml"}}}});
//# sourceMappingURL=path---lesson-reasonml-hierarchy-38f49fe259704e549002.js.map