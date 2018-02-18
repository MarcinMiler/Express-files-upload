import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import multer from 'multer'
import path from 'path'

const server = express()
const port = 4000

const storage = multer.diskStorage({
    destination: './static/uploads/',
    filename: (req, file, cb) => cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`) 
})

const upload = multer({
    storage
})

server.use(cors('*'))
server.use(bodyParser.json())
server.use(express.static('static'))

server.post('/upload', upload.any(), (req, res) => {
    console.log(req.files)
})

server.listen(port, () => {
    console.log('Server is running on port 4000')
})