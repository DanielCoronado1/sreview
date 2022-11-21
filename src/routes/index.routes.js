const express = require('express')

const routes = express.Router()

const { getVideogame, setReview } = require('../controllers/resena.controller.js')
const { login, logout, addUser } = require('../controllers/auth.controller.js')

//routes
routes.get('/',(req, res)=>{
    res.render('index')
})

//Tienda
routes.get('/store',(req, res)=>{
    res.render('pages/store')
})

//Subir resena
routes.get('/subir',(req, res)=>{
    res.render('resenas/resena')
})

//! Nuevas rutas

//? Pagina de videojuego
routes.get('/videogame/:id', getVideogame)

//? set reseña
routes.post('/videogame/review/:id', setReview)

//? login
routes.get('/login', login)

//? logout
routes.get('/logout', logout)

//? Agregar usuario FUNCIONALIDAD
routes.post('/addUser', addUser)

//resenas routes
routes.get('/zelda',(req, res)=>{
    res.render('resenas/zelda')
})
routes.get('/halo_reach',(req, res)=>{
    res.render('resenas/halo_reach')
})
routes.get('/mario_kart',(req, res)=>{
    res.render('resenas/mario_kart')
})
routes.get('/cold_war',(req, res)=>{
    res.render('resenas/cold_war')
})
routes.get('/bioshock',(req, res)=>{
    res.render('resenas/bioshock')
})
routes.get('/destiny2',(req, res)=>{
    res.render('resenas/destiny2')
})
routes.get('/gears_3',(req, res)=>{
    res.render('resenas/gears_3')
})




module.exports = routes