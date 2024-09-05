import express from 'express'
import cors from 'cors'
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/imgRoutes.js';
import commentRoutes from './routes/commentRoutes.js';
import saveImageRoutes from './routes/saveImageRoutes.js';
import userRoutes from './routes/userRoutes.js';
import imgRoutes from './routes/imgRoutes.js';



const app = express();

import swaggerUi from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: "API Documentation",
            version: "1.0.0",
            description: "API Information",
            contact: {
                name: "Developer",
            },
            servers: ["http://localhost:3000"],
        },
    },
    apis: ["src/swagger/index.js"], // Đường dẫn đến file chứa các định nghĩa API
};

const specs = swaggerJsDoc(options);
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(specs));

app.use(cors())
app.use(express.json());

app.use(authRouter)
app.use(userRouter)
app.use(commentRoutes)
app.use(saveImageRoutes)
app.use(userRoutes);
app.use(imgRoutes)

app.listen(8080)