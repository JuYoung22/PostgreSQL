import express, { Express } from 'express';
import { connection } from './connection';
import userRouter from './router/user'; // user라우터
import cors from 'cors';

const app: Express = express();
const port = 8080;

//DB 연결
const connectDB = async () =>{
  try {
    await connection.connect();
    console.log("DB연결");
  }catch (err){
    console.error("실패",err);
  }
};

// 서버 시작시 연결
connectDB();

// 미들웨어 설정
app.use(express.json());
app.use(cors());

// 라우터 사용
app.use('/user',userRouter); // /user 경로로 요청이 들어오면 실행

app.listen(port,()=>{
  console.log(`Server on ${port}`);
});

