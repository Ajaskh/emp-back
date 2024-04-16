// step to generate json server
// 1.import json server


const jsonServer=require('json-server')

// 2.create our own server to run jso file

const empServer=jsonServer.create()

// 3.generate a miidle ware use in json server

const middleWare=jsonServer.defaults()

// 4.setup path for db.json

const router=jsonServer.router("db.json")

// set up path for server

const port=3000

// use  middleware and router in server

empServer.use(middleWare)
empServer.use(router)

// server lisson /run to request

empServer.listen(port,()=>{
    console.log("employye portal server started at port no:"+port);
})