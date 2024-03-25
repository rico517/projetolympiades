echo off
cls
start c:/wamp64/wampmanager.exe
timeout /t 15
start npm run dev
cd back_end
npm run start
exit