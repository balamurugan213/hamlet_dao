---
title: GraphQL-Express Server
metaTitles: Smart contract
image: https://images.ctfassets.net/23aumh6u8s0i/7dRRpqkgQsuoZfqK47sAFj/15ea762a924d8164cee9ee22d6fc83f8/graphql
description: Write a graphql request - express-graphql package...
date: 16 May 2021
---

# GraphQL-Express Server

Created: August 2, 2021 5:20 PM
Property: August 13, 2021 9:33 AM

- Create a new node project
    
    ```jsx
    npm init
    ```
    
- Install the server packages
    
    ```jsx
    npm i express
    npm i nodemon -g
    ```
    
- Create Express server in main program
    
    ```jsx
    const express=require("express");
    const app =express()
    
    app.listen(4000,()=>{
        console.log("We are listening for request in port 4000")
    })
    ```
    
- Install the GraphQL packages
    
    ```jsx
    npm install express-graphql
    npm install graphql
    ```
    
- Write a graphql request - express-graphql package is used to integrate graphql request to the express server.
    
    Here the url request handler will have a graphql query function in it.
    
    ```jsx
    const express = require('express');
    const { graphqlHTTP } = require('express-graphql');
     
    const app = express();
     
    app.use(
      '/graphql',
      graphqlHTTP({
        // schema: MyGraphQLSchema,
        // graphiql: true,
      }),
    );
     
    app.listen(4000);
    ```
    

## **Creating Schema**

- Schema describe data on the graph .It describes the object type relations between the objects types  and also describes how we cand reach the to query and retrive the data,mutate and change.
- **Creating a schema**
    
    ```jsx
    const graphql=require("graphql");
    const {GraphQLObtectType,GraphQLString}=graphql;
    
    const BookType = new GraphQLObtectType({
       name:'Book',
       field:()=>({
           id:{type:GraphQLString},
           name:{type:GraphQLString},
           genre:{type:GraphQLString}
       })
    })
    ```
    
- **Root Query**
- The root query describes how the user initially connect with the graph to request the data.They are like data request handlers for data.
    
    ```jsx
    const RootQuery= new GraphQLObtectType({
        name:'RootQueryType',
        field:{
            type:BookType,
            args:{id:{type:GraphQLString}} ,
            resolve(parent,args){
            //  code the get date from db/ other resources.
            // args.id
            }
        }
    })
    ```
    
- Exporting a GraphQL schema
    
    ```jsx
    const {GraphQLObtectType,GraphQLString,GraphQLSchema}=graphql;
    ...
    ...
    modele.exports=new GraphQLSchema({
        query:RootQuery
    })
    ```
    
- Importing the schema
    
    ```jsx
    const express = require('express');
    const { graphqlHTTP } = require('express-graphql');
    const schema=require('./schema/schema') 
    
    const app = express();
     
    app.use(
      '/graphql',
      graphqlHTTP({
        schema: schema,
        // graphiql: true,
      }),
    );
     
    app.listen(4000);
    ```
    
- Update the server request with graphiql to send graphql request
    
    ```jsx
    app.use(
      '/graphql',
      graphqlHTTP({
        schema: schema,
        graphiql: true,
      }),
    );
    ```
    

---

[GitHub - balamurugan213/GraphQL-with-react at GraphQL-Startapp](https://github.com/balamurugan213/GraphQL-with-react/tree/GraphQL-Startapp)

*`startapp branch with the code`*