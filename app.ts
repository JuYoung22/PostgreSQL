import express, { Express, Request, Response } from 'express';
import { connection } from './connection';

const app: Express = express();
const port = 8080;

//DB 연결
const connectDB = async () =>{
  try {
    await connection.connect();
    console.log("연결되었습니다");
  }catch (err){
    console.error("실패",err);
  }
};

// 시작시 연결 시도
connectDB();

app.listen(port,()=>{
  console.log(`Server on ${port}`);
});