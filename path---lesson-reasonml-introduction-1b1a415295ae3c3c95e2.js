webpackJsonp([99357853865746],{394:function(e,t){e.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Getting Started",lesson:2,category:"reasonml",chapter:1,type:"lesson"},fields:{slug:"/getting-started"}}},{node:{frontmatter:{title:"Actor Communication",lesson:2,category:"reasonml",chapter:2,type:"lesson"},fields:{slug:"/actor-communication"}}},{node:{frontmatter:{title:"Decoders and Encoders",lesson:2,category:"reasonml",chapter:4,type:"lesson"},fields:{slug:"/decoders-and-encoders"}}},{node:{frontmatter:{title:"Adapters",lesson:6,category:"reasonml",chapter:2,type:"lesson"},fields:{slug:"/adapters"}}},{node:{frontmatter:{title:"Hierarchy",lesson:4,category:"reasonml",chapter:2,type:"lesson"},fields:{slug:"/hierarchy"}}},{node:{frontmatter:{title:"Introduction",lesson:1,category:"reasonml",chapter:1,type:"lesson"},fields:{slug:"/introduction"}}},{node:{frontmatter:{title:"Persistent Queries",lesson:4,category:"reasonml",chapter:3,type:"lesson"},fields:{slug:"/persistent-queries"}}},{node:{frontmatter:{title:"Persist",lesson:1,category:"reasonml",chapter:3,type:"lesson"},fields:{slug:"/persist"}}},{node:{frontmatter:{title:"Snapshotting",lesson:2,category:"reasonml",chapter:3,type:"lesson"},fields:{slug:"/snapshotting"}}},{node:{frontmatter:{title:"Stateful Actors",lesson:1,category:"reasonml",chapter:2,type:"lesson"},fields:{slug:"/stateful-actors"}}},{node:{frontmatter:{title:"Querying",lesson:3,category:"reasonml",chapter:2,type:"lesson"},fields:{slug:"/querying"}}},{node:{frontmatter:{title:"Supervision",lesson:5,category:"reasonml",chapter:2,type:"lesson"},fields:{slug:"/supervision"}}},{node:{frontmatter:{title:"Timeouts",lesson:3,category:"reasonml",chapter:3,type:"lesson"},fields:{slug:"/timeouts"}}}]},postBySlug:{html:'<p>Nact is an implementation of the actor model for Node.js. It is inspired by the approaches taken by <a href="https://getakka.net">Akka</a> and <a href="https://www.erlang.org/">Erlang</a>. Additionally it attempts to provide a familiar interface to users coming from Redux. This project provides a wrapper around nact for those using ReasonML and/or Bucklescript.</p>\n<p>The goal of the project is to provide a simple way to create and reason about µ-services and asynchronous event driven architectures in Node.js.</p>\n<p>The actor model describes a system made up of a set of entities called actors. An actor could be described as an independently running packet of state. Actors communicate solely by passing messages to one another.  Actors can also create more (child) actors.</p>\n<p>Actor systems have been used to drive hugely scalable and highly available systems (such as WhatsApp and Twitter), but that doesn\'t mean it is exclusively for companies with big problems and even bigger pockets. Architecting a system using actors should be an option for any developer considering a move to a µ-services architecture:</p>\n<ul>\n<li>Creating a new type of actor is a very lightweight operation in contrast to creating a whole new microservice.</li>\n<li><a href="https://doc.akka.io/docs/akka/2.5.4/java/general/remoting.html">Location transparency</a> and no shared state mean that it is possible to defer decisions around where to deploy a subsystem, avoiding the commonly cited problem of prematurely choosing a <a href="https://vimeo.com/74589816">bounded context</a>.</li>\n<li>Using actors mean that the spaghetti you might see in a monolithic system is far less likely to happen in the first place as message passing creates less coupled systems. </li>\n<li>Actors are asynchronous by design and closely adhere to the principles enumerated in the <a href="https://www.reactivemanifesto.org/">reactive manifesto</a></li>\n<li>Actors deal well with both state and statelessness, so creating a smart cache, an in-memory event store or a stateful worker is just as easy as creating a stateless db repository layer without increasing infrastructural complexity.</li>\n</ul>\n<h2 id="caveats"><a href="#caveats" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Caveats</h2>\n<p>While network transparency and clustering are planned features of the framework, they have not been implemented yet.</p>',timeToRead:1,excerpt:"Nact is an implementation of the actor model for Node.js. It is inspired by the approaches taken by  Akka  and  Erlang . Additionally it...",frontmatter:{title:"Introduction",cover:"https://unsplash.it/400/300/?random?BoldMage",date:"11/12/2017",category:"reasonml",tags:["getting-started","nact","reason","bucklescript"]},fields:{slug:"/introduction"}}},pathContext:{slug:"/introduction",category:"reasonml"}}}});
//# sourceMappingURL=path---lesson-reasonml-introduction-1b1a415295ae3c3c95e2.js.map