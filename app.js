const express=require('express')
//const fs=require('fs')
const Contenedor=require('./contenedor')

const DBfile='productosN.json'
const PORT=process.env.PORT || 8080
const app=express()
const contenedor=new Contenedor(DBfile)

app.get('/products',(req,res)=> {
 //const data=JSON.parse(fs.readFileSync(DBfile,'utf-8') )
 const data=contenedor.getAll()
 res.json(data)
})

app.get('/productsRandom',(req,res)=> {
 //const data=JSON.parse(fs.readFileSync(DBfile,'utf-8') )
 const data=contenedor.getAll()
 const numero=Math.floor(Math.random()*data.length)
 const item=data[numero]
 res.json(item)
})

const server=app.listen(PORT,()=>console.log(`Listening ${PORT} ...`))
server.on('error',e=>{
    console.log('Server error: ',e)
})

//app.listen(8080)