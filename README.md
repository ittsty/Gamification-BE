## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## About API spec and route
ตัวอย่าง >> n4esm4vgdf.apidog.io <<
on production : https://nextzy-assessment-backend.onrender.com

GET /history/point
- ดึงประวัติคะแนนที่ได้

GET /history/redeem
- ดึงประวัติการรับของ

GET/users/:uid/point
- ดึงประวัติคะแนนของยูสเซอร์คนนั้น

POST /redeem~
[รับ Uid / rewardId ]
- เช็คในประวัติว่าอันนี้ user นี้แลกไปรึยัง
- เช็คว่า point พอมั้ย
- ถ้ายังให้เขียนลง DB
- ส่ง res ว่าแลกสำเร็จแล้ว
[res | Uid / rewardId / Status]

POST /play
[รับ Uid]
- เอาไปสุ่มคะแนนฝั่งBackend
- เอาไปอัพเดตคะแนนของ user นั้นๆ
- เขียนลงในประวัติการได้คะแนน
[res | point / totalpoint] << FE เอาไปใช้ render ต่อ

POST /reset
	flush ข้อมูลของประวัติคะแนนกับประวัติแลกของทั้งหมด
