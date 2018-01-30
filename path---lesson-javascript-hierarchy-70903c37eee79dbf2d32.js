webpackJsonp([0x5b9a4a0527bc],{383:function(n,s){n.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Supervision",lesson:5,category:"javascript",chapter:2,type:"lesson"},fields:{slug:"/supervision"}}},{node:{frontmatter:{title:"Actor Communication",lesson:2,category:"javascript",chapter:2,type:"lesson"},fields:{slug:"/actor-communication"}}},{node:{frontmatter:{title:"Hierarchy",lesson:4,category:"javascript",chapter:2,type:"lesson"},fields:{slug:"/hierarchy"}}},{node:{frontmatter:{title:"Getting Started",lesson:2,category:"javascript",chapter:1,type:"lesson"},fields:{slug:"/getting-started"}}},{node:{frontmatter:{title:"Introduction",lesson:1,category:"javascript",chapter:1,type:"lesson"},fields:{slug:"/introduction"}}},{node:{frontmatter:{title:"Snapshotting",lesson:2,category:"javascript",chapter:3,type:"lesson"},fields:{slug:"/snapshotting"}}},{node:{frontmatter:{title:"Persist",lesson:1,category:"javascript",chapter:3,type:"lesson"},fields:{slug:"/persist"}}},{node:{frontmatter:{title:"Stateful Actors",lesson:1,category:"javascript",chapter:2,type:"lesson"},fields:{slug:"/stateful-actors"}}},{node:{frontmatter:{title:"Querying",lesson:3,category:"javascript",chapter:2,type:"lesson"},fields:{slug:"/querying"}}},{node:{frontmatter:{title:"Timeouts",lesson:3,category:"javascript",chapter:3,type:"lesson"},fields:{slug:"/timeouts"}}},{node:{frontmatter:{title:"Logging and Monitoring",lesson:1,category:"javascript",chapter:4,type:"lesson"},fields:{slug:"/logging-and-monitoring"}}}]},postBySlug:{html:'<!-- <a class="remix-button" href="https://glitch.com/edit/#!/remix/nact-contacts-2" target="_blank">\n  <button>\n    <img src="/img/code-fork-symbol.svg"/> REMIX\n  </button>\n</a> -->\n<p>The application we made in the <a href="/lesson/javascript/querying">querying</a> section isn\'t very useful. For one it only supports a single user\'s contacts, and secondly it forgets all the user\'s contacts whenever the system restarts. In this section we\'ll solve the multi-user problem by exploiting an important feature of any blue-blooded actor system: the hierarchy.</p>\n<p>Actors are arranged hierarchically, they can create child actors of their own, and accordingly every actor has a parent. The lifecycle of an actor is tied to its parent; if an actor stops, then it\'s children do too.</p>\n<p>Up till now we\'ve been creating actors which are children of the actor system (which is a pseudo actor). However in a real system, this would be considered an anti pattern, for much the same reasons as placing all your code in a single file is an anti-pattern. By exploiting the actor hierarchy, you can enforce a separation of concerns and encapsulate system functionality, while providing a coherent means of reasoning with failure and system shutdown. </p>\n<p>Let us imagine that the single user contacts service was simple a part of some larger system; an email campaign management API for example.  A potentially valid system could perhaps be represented by the diagram below. </p>\n<p><img src="/img/hierarchy-diagram.svg" alt="Image"></p>\n<p>In the diagram, the email service is responsible for managing the template engine and email delivery, while the contacts service has chosen to model each user\'s contacts as an actor. (This is a very feasible approach in production provided you shutdown actors after a period of inactivity)</p>\n<p>Let us focus on the contacts service to see how we can make effective of use of the hierarchy. To support multiple users, we need do three things: </p>\n<ul>\n<li>Modify our original contacts service to so that we can parameterize its parent and name</li>\n<li>Create a parent to route requests to the correct child</li>\n<li>Add a user id to the path of each API endpoint and add a <code>userId</code> into each message.</li>\n</ul>\n<p>Modifying our original service is as simple as the following:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> spawnUserContactService <span class="token operator">=</span> <span class="token punctuation">(</span>parent<span class="token punctuation">,</span> userId<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">spawn</span><span class="token punctuation">(</span>\n  parent<span class="token punctuation">,</span>\n  <span class="token comment" spellcheck="true">// same function as before</span>\n  userId\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Now we need to create the parent contact service:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> spawnContactsService <span class="token operator">=</span> <span class="token punctuation">(</span>parent<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">spawnStateless</span><span class="token punctuation">(</span>\n  parent<span class="token punctuation">,</span>\n  <span class="token punctuation">(</span>msg<span class="token punctuation">,</span> ctx<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> userId <span class="token operator">=</span> msg<span class="token punctuation">.</span>userId<span class="token punctuation">;</span>\n    <span class="token keyword">let</span> childActor<span class="token punctuation">;</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n      childActor <span class="token operator">=</span> ctx<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      childActor <span class="token operator">=</span> <span class="token function">spawnUserContactService</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>self<span class="token punctuation">,</span> userId<span class="token punctuation">)</span><span class="token punctuation">;</span>            \n    <span class="token punctuation">}</span>\n    <span class="token function">dispatch</span><span class="token punctuation">(</span>childActor<span class="token punctuation">,</span> msg<span class="token punctuation">,</span> ctx<span class="token punctuation">.</span>sender<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token string">\'contacts\'</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>These two modifications show the power of an actor hierarchy. The contact service doesn\'t need to know the implementation details of its children (and doesn\'t even have to know about what kind of messages the children can handle). The children also don\'t need to worry about multi tenancy and can focus on the domain.</p>\n<p>To complete the example, we finally adjust the API endpoints:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>app<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token string">\'/api/:user_id/contacts\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>req<span class="token punctuation">,</span>res<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">performQuery</span><span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token punctuation">:</span> GET_CONTACTS<span class="token punctuation">,</span> userId<span class="token punctuation">:</span> req<span class="token punctuation">.</span>params<span class="token punctuation">.</span>user_id <span class="token punctuation">}</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\napp<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token string">\'/api/:user_id/contacts/:contact_id\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>req<span class="token punctuation">,</span>res<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> \n  <span class="token function">performQuery</span><span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token punctuation">:</span> GET_CONTACT<span class="token punctuation">,</span> userId<span class="token punctuation">:</span> req<span class="token punctuation">.</span>params<span class="token punctuation">.</span>user_id<span class="token punctuation">,</span> contactId<span class="token punctuation">:</span> req<span class="token punctuation">.</span>params<span class="token punctuation">.</span>contact_id <span class="token punctuation">}</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\napp<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">\'/api/:user_id/contacts\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>req<span class="token punctuation">,</span>res<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">performQuery</span><span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token punctuation">:</span> CREATE_CONTACT<span class="token punctuation">,</span> payload<span class="token punctuation">:</span> req<span class="token punctuation">.</span>body <span class="token punctuation">}</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\napp<span class="token punctuation">.</span><span class="token function">patch</span><span class="token punctuation">(</span><span class="token string">\'/api/:user_id/contacts/:contact_id\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>req<span class="token punctuation">,</span>res<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> \n  <span class="token function">performQuery</span><span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token punctuation">:</span> UPDATE_CONTACT<span class="token punctuation">,</span> userId<span class="token punctuation">:</span> req<span class="token punctuation">.</span>params<span class="token punctuation">.</span>user_id<span class="token punctuation">,</span> contactId<span class="token punctuation">:</span> req<span class="token punctuation">.</span>params<span class="token punctuation">.</span>contact_id<span class="token punctuation">,</span> payload<span class="token punctuation">:</span> req<span class="token punctuation">.</span>body <span class="token punctuation">}</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\napp<span class="token punctuation">.</span><span class="token keyword">delete</span><span class="token punctuation">(</span><span class="token string">\'/api/:user_id/contacts/:contact_id\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>req<span class="token punctuation">,</span>res<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> \n  <span class="token function">performQuery</span><span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token punctuation">:</span> REMOVE_CONTACT<span class="token punctuation">,</span> userId<span class="token punctuation">:</span> req<span class="token punctuation">.</span>params<span class="token punctuation">.</span>user_id<span class="token punctuation">,</span> contactId<span class="token punctuation">:</span> req<span class="token punctuation">.</span>params<span class="token punctuation">.</span>contact_id <span class="token punctuation">}</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Now the only thing remaining for a MVP of our contacts service is some way of persisting changes...</p>',timeToRead:3,excerpt:"The application we made in the  querying  section isn't very useful. For one it only supports a single user's contacts, and secondly it...",frontmatter:{title:"Hierarchy",cover:"https://unsplash.it/400/300/?random?BoldMage",date:"11/12/2017",category:"javascript",tags:["getting-started","nact","javascript","nodejs"]},fields:{slug:"/hierarchy"}}},pathContext:{slug:"/hierarchy",category:"javascript"}}}});
//# sourceMappingURL=path---lesson-javascript-hierarchy-70903c37eee79dbf2d32.js.map