import express from 'express';
import dotenv from "dotenv";
dotenv.config();

const app = express()

app.get("/", (req,res) => {
    return res.json({message :'Hello World!',})
})

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`App running on port: ${PORT}`)) 