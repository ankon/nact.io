webpackJsonp([0xc5d7d5468b57],{406:function(t,e){t.exports={data:{allMarkdownRemark:{totalCount:25,edges:[{node:{fields:{slug:"/decoders-and-encoders"},excerpt:"Schema evolution Evolution is a natural part of a systems lifecycle; requirements change, reality sets in and bugs are fixed. \nAs a result...",timeToRead:4,frontmatter:{title:"Decoders and Encoders",tags:["getting-started","nact","reason","bucklescript"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"28/01/2018"}}},{node:{fields:{slug:"/adapters"},excerpt:"A typical pattern in Nact when sending a message to an actor is including references to other actors. These references are often to whom the...",timeToRead:2,frontmatter:{title:"Adapters",tags:["getting-started","nact","reasonml","nodejs"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"28/01/2018"}}},{node:{fields:{slug:"/decoders-and-encoders"},excerpt:"Schema evolution Evolution is a natural part of a systems lifecycle; requirements change, reality sets in and bugs are fixed. \nAs a result...",timeToRead:3,frontmatter:{title:"Decoders and Encoders",tags:["getting-started","nact","reason","bucklescript"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"28/01/2018"}}},{node:{fields:{slug:"/getting-started"},excerpt:"Reason Nact has only been tested to work on Node 8 and above. You can install Nact in your project by invoking the following: You'll also...",timeToRead:2,frontmatter:{title:"Getting Started",tags:["getting-started","nact","reason","bucklescript"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"11/12/2017"}}},{node:{fields:{slug:"/actor-communication"},excerpt:"An actor alone is a somewhat useless construct; actors need to work together. Actors can send messages to one another by using the   method...",timeToRead:1,frontmatter:{title:"Actor Communication",tags:["getting-started","nact","reason","bucklescript"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"11/12/2017"}}},{node:{fields:{slug:"/hierarchy"},excerpt:"The application we made in the  querying  section isn't very useful. For one it only supports a single user's contacts, and secondly it...",timeToRead:2,frontmatter:{title:"Hierarchy",tags:["getting-started","nact","reason","bucklescript"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"11/12/2017"}}},{node:{fields:{slug:"/introduction"},excerpt:"Nact is an implementation of the actor model for Node.js. It is inspired by the approaches taken by  Akka  and  Erlang . Additionally it...",timeToRead:1,frontmatter:{title:"Introduction",tags:["getting-started","nact","reason","bucklescript"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"11/12/2017"}}},{node:{fields:{slug:"/persistent-queries"},excerpt:"You start to see the biggest benefit from snapshotting best when your state is small in size, and persisted events are many. \nHowever...",timeToRead:3,frontmatter:{title:"Persistent Queries",tags:["getting-started","nact","reason","bucklescript"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"11/12/2017"}}},{node:{fields:{slug:"/persist"},excerpt:"Note: Please take a careful look at the  Decoders and Encoders  section to understand an important limitation of persistence actors in...",timeToRead:2,frontmatter:{title:"Persist",tags:["getting-started","nact","reason","bucklescript"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"11/12/2017"}}},{node:{fields:{slug:"/snapshotting"},excerpt:"Sometimes actors accumulate a lot of persisted events. This is problematic because it means that it can take a potentially long time for an...",timeToRead:1,frontmatter:{title:"Snapshotting",tags:["getting-started","nact","reason","bucklescript"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"11/12/2017"}}},{node:{fields:{slug:"/stateful-actors"},excerpt:"One of the major advantages of an actor system is that it offers a safe way of creating stateful services. A stateful actor is created using...",timeToRead:1,frontmatter:{title:"Stateful Actors",tags:["getting-started","nact","reason","bucklescript"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"11/12/2017"}}},{node:{fields:{slug:"/querying"},excerpt:"Actor systems don't live in a vacuum, they need to be available to the outside world. Commonly actor systems are fronted by REST APIs or RPC...",timeToRead:3,frontmatter:{title:"Querying",tags:["getting-started","nact","reason","bucklescript"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"11/12/2017"}}},{node:{fields:{slug:"/supervision"},excerpt:"Actor systems are often designed around the  let it crash  philosophy.\nThis thesis is motivated by a desire to reduce the amount of...",timeToRead:3,frontmatter:{title:"Supervision",tags:["getting-started","nact","reasonml","nodejs"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"11/12/2017"}}},{node:{fields:{slug:"/timeouts"},excerpt:"While not strictly a part of the persistent actor, timeouts are frequently used with snapshotting. Actors take up memory, which is still a...",timeToRead:1,frontmatter:{title:"Timeouts",tags:["getting-started","nact","reason","bucklescript"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"11/12/2017"}}},{node:{fields:{slug:"/getting-started"},excerpt:"Tip: The remix buttons like the one above, allow you to try out the samples in this guide and make changes to them. \nPlaying around with the...",timeToRead:2,frontmatter:{title:"Getting Started",tags:["getting-started","nact","reason","bucklescript"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"11/12/2017"}}},{node:{fields:{slug:"/actor-communication"},excerpt:"An actor alone is a somewhat useless construct; actors need to work together. Actors can send messages to one another by using the   method...",timeToRead:1,frontmatter:{title:"Actor Communication",tags:["getting-started","nact","javascript","nodejs"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"11/12/2017"}}},{node:{fields:{slug:"/introduction"},excerpt:"Nact is an implementation of the actor model for Node.js. It is inspired by the approaches taken by  Akka  and  Erlang . Additionally it...",timeToRead:1,frontmatter:{title:"Introduction",tags:["getting-started","nact","javascript","nodejs"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"11/12/2017"}}},{node:{fields:{slug:"/hierarchy"},excerpt:"The application we made in the  querying  section isn't very useful. For one it only supports a single user's contacts, and secondly it...",timeToRead:3,frontmatter:{title:"Hierarchy",tags:["getting-started","nact","javascript","nodejs"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"11/12/2017"}}},{node:{fields:{slug:"/persist"},excerpt:"The contacts service we've been working on  still  isn't very useful. While we've extended the service to support multiple users, it has the...",timeToRead:2,frontmatter:{title:"Persist",tags:["getting-started","nact","javascript","nodejs"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"11/12/2017"}}},{node:{fields:{slug:"/persistent-queries"},excerpt:"You start to see the biggest benefit from snapshotting best when your state is small in size, and persisted events are many. \nHowever...",timeToRead:2,frontmatter:{title:"Persistent Queries",tags:["getting-started","nact","javascript","nodejs"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"11/12/2017"}}},{node:{fields:{slug:"/snapshotting"},excerpt:"Sometimes actors accumulate a lot of persisted events. This is problematic because it means that it can take a potentially long time for an...",timeToRead:1,frontmatter:{title:"Snapshotting",tags:["getting-started","nact","javascript","nodejs"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"11/12/2017"}}},{node:{fields:{slug:"/querying"},excerpt:"Actor systems don't live in a vacuum, they need to be available to the outside world. Commonly actor systems are fronted by REST APIs or RPC...",timeToRead:5,frontmatter:{title:"Querying",tags:["getting-started","nact","javascript","nodejs"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"11/12/2017"}}},{node:{fields:{slug:"/stateful-actors"},excerpt:"One of the major advantages of an actor system is that it offers a safe way of creating stateful services. A stateful actor is created using...",timeToRead:1,frontmatter:{title:"Stateful Actors",tags:["getting-started","nact","javascript","nodejs"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"11/12/2017"}}},{node:{fields:{slug:"/supervision"},excerpt:"Actor systems are often designed around the  let it crash  philosophy.\nThis thesis is motivated by a desire to reduce the amount of...",timeToRead:2,frontmatter:{title:"Supervision",tags:["getting-started","nact","javascript","nodejs"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"11/12/2017"}}},{node:{fields:{slug:"/timeouts"},excerpt:"While not strictly a part of the persistent actor, timeouts are frequently used with snapshotting. Actors take up memory, which is still a...",timeToRead:1,frontmatter:{title:"Timeouts",tags:["getting-started","nact","javascript","nodejs"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"11/12/2017"}}}]}},pathContext:{tag:"nact"}}}});
//# sourceMappingURL=path---tags-nact-0b5acd31ac6db3e1d5b5.js.map