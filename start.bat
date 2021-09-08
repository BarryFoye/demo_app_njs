start npm install
ECHO Waiting 30 seconds for npm install, if it completes sooner:
timeout /t 30
start node hidden_server/index.js
timeout /t 1
start node gateway_server/index.js
start node http_server/index.js