const express = require('express')
const cors = require('cors')
const dataService = require('./dataService')


const server = express()
server.use(express.json())

server.use(cors({
    origin: 'http://localhost:4200'
}))

server.listen(8000,()=>{
    console.log('server has started')
})

server.get('/all-items', (req,res)=>{
    dataService.allProducts().then((result)=>{
        res.status(result.statusCode).json(result)
    })

})

server.get('/view/:id',(req,res)=>{
    console.log("inside View account");
    console.log(req.params.id);
    dataService.findId(req.params.id).then((result)=>{
        console.log(result);
        
        res.status(result.statusCode).json(result)

    })
})


server.delete('/delete-item',(req,res)=>{
    dataService.deletedata().then((result)=>{
        console.log(result)
        res.status(result.statusCode).json(result)

    })
})

server.post('/add-item',(req,res)=>{
    dataService.addData( req.body.adult,
        req.body.backdrop_path,
        req.body.id,
        req.body.title,
        req.body.original_language,
        req.body.original_title,
        req.body.overview,
        req.body.poster_path,req.body.video).then((result)=>{
            res.status(result.statusCode).json(result)
    
        })
    
})

