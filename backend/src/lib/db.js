import mangoose from 'mongoose';

export const connectDB = async () => {
    try{
        const conn = await mangoose.connect(process.env.MONGODB_URL);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch(error){
        console.log('MongoDB connection failed:', error.message);
    }
};