import express, { urlencoded } from "express" ;
import morgan from "morgan" ;
import cors from "cors" ;
import authRoutes from "./routes/auth.routes" ;

//Inicializaciones
const app = express () ;



//Configuraciones
app.set( 'port' , process.env.PORT  || 3000 ) ;

//Middlewares
app.use(morgan('dev')) ;
app.use(cors()) ;
app.use(express.urlencoded({extended:false})) ;
app.use(express.json()) ;

//Rutas

app.get( "/" , (req , res ) => {
    res.send(`La api se encuentra en http://localhost:${app.get('port')}`)
})


app.use(authRoutes) ;

export default app ;