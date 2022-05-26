const Contenedor=require('./contenedor')
const container=new Contenedor('productos.json')


container.save({
    title:'Escuadra',
    price:45,
    thumbnail:'https://cdn3.iconfinder.com/data/icons/img1.png'
})

container.save({
    title:'Calculadora',
    price:56,
    thumbnail:'https://cdn3.iconfinder.com/data/icons/img2.png'
})

container.save({
    title:'Globo terraqueo',
    price:67,
    thumbnail:'https://cdn3.iconfinder.com/data/icons/img3.png'
})

console.log('Iniciar busqueda por ID')
console.log(container.getByID(2))

console.log('Iniciar borrado por ID')
console.log(container.deleteByID(1))
console.log(container.deleteByID(4))
console.log(container.getAll())

//container.deleteAll()
