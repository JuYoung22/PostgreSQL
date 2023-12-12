import express, { Router, Request, Response } from 'express';
import { connection } from '../config/connection';
// 익스프레스 라우터 생성
const router: Router = express.Router();

// 회원가입 라우터

// 로그아웃 라우터


// 회원가입
router.post('/login',async (req:Request, res:Response)=>{
  try {
    const client = await connection.connect();
    // 로그인 로직처리 클라이언트에서 name을 받아옵니다.
    const { name } = req.body;

    // res.json({ message: '성공' });
     console.log(name);

    // 데이터를 저장하는 SQL 쿼리 작성
    const query = 'INSERT INTO test (name) VALUES($1)';
    // 클라이언트에서 전달한 데이터 필드와 일치하게 수정 
    const values = [name];

    // 쿼리 실행
    await client.query(query,values);
    client.release();
    console.log('저장 성공');
    res.status(201).json({message:'데이터 저장 성공'});
  }catch(error){
    console.error(error);
    res.status(500).json({error:'error'});
  }
  
});

// 모듈 내에서 라우터 내보내기
export default router;