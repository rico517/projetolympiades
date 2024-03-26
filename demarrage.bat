echo off
cls
start c:/wamp64/wampmanager.exe
timeout /t 15
start npm run dev
cd back_end
npm run start
timeout /t 3
start http://localhost:5173
exit