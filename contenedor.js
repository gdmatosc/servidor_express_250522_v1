const fs = require('fs')

class Contenedor {
 constructor(filename){
    console.log('Iniciar contenedor')
    this.filename=filename
    this.fileData=[]
    try{
        console.log('Iniciar Lectura')
        this.read()
    } catch(e){
        //console.log(e.name)
        console.log(e.message)
        this.write()
    }
    
 }

 write(){
     console.log('Escribir en archivo')
     //fs.writeFileSync(this.filename,JSON.stringify(this.fileData))
     fs.promises.writeFile(this.filename,JSON.stringify(this.fileData))
     .then(()=>{
         console.log('Datos guardados en archivo!')
     })
     .catch(e => console.log(e))
     console.log("Cantidad de objetos: "+this.fileData.length)
 }
 read(){
     console.log('Leer archivo y cargar')
     this.fileData=JSON.parse(fs.readFileSync(this.filename))
     /*fs.promises.readFile(this.filename)
     .then( fileData =>{
        this.fileData=JSON.parse(fileData)
        console.log('Data cargados desde archivo!')
     })
    .catch(e => console.log(e))*/
     
 }
 getLastID(){
     console.log('Obtener último ID del contenido cargado del archivo')
     const l=this.fileData.length
     if(l<1) return 0
     return this.fileData[this.fileData.length-1].id
 }
 save(obj){
     console.log('Iniciar Guardado de contenido')
     const id=this.getLastID()
     this.fileData.push({
        ...obj, ...{id:id+1}
     })
     this.write()
 } 

 getByID(id){
     console.log('Buscar por ID')
     return this.fileData.find(p=>p.id==id)
 }

 getAll(){
    return this.fileData
 }

 deleteByID(id){
  console.log('Borrar por ID')
  const idx=this.fileData.findIndex(p=>p.id==id)
  this.fileData.splice(idx,1)
  this.write()
 }

 deleteAll(){
    this.fileData=[]
    this.write()
 }

}

module.exports=Contenedor