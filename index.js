const fs=require('fs')
const xml2js = require('xml2js')
const util=require('util')
const express = require ('express')
const app=express()
const PORT=5050
const parser= new xml2js.Parser();
const cors= require('cors')

app.use(cors())

app.get('/',(req,res)=>{
    fs.readFile('LiveHirePublicXmlFeed.xml',(err,data)=>{
        parser.parseString(data,(err,result)=>{
            res.json(result.source.job)
        })
    })
})

app.listen(PORT,()=>{
    console.log(`app listening on port ${PORT}`)
})