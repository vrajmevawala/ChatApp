import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { connectDB } from './lib/db.js'
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import cors from 'cors';
import { app, server } from './lib/socket.js';
import path from 'path';

dotenv.config(); // to access environment variables

const PORT = process.env.PORT;
const __dirname = path.resolve();

app.use(cookieParser()); // to parse cookies from the request headers
app.use(express.json({ limit: '10mb' })); // to extract json data from request body, increased limit
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if(process.env.NODE_ENV === 'production'){
    const distPath = path.resolve(__dirname, '../frontend/dist');
    app.use(express.static(distPath));
    app.get("*", (req,res) => {
        res.sendFile(path.join(distPath, 'index.html'));
    })
}

server.listen(PORT, () =>{
    console.log('Server is running on PORT: ' + PORT);
    connectDB();
});