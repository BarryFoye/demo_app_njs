# Simple node multi server example

## Getting started


### <a id="man"></a>Manual setup

#### **Step 1.** 
Clone the repo:

```bash
git clone https://github.com/BarryFoye/demo_app_njs.git
```

#### **Step 2.** 
Change to the app directory:

```bash
cd demo_app_njs
```

#### **Step 3.** 
Run the install dependencies script:

```bash
npm install
```

#### **Step 4.** 
Then using 3 separate terminals started from the demo_app_njs directory and in the following order:

Terminal 1:
```bash
cd hidden_server
```
```bash
node index.js
```
When the hidden server starts you should see:
```javascript
> Ready on http://localhost:3100
```
Terminal 2: 
```bash
cd gateway_server
```
```bash
node index.js
```
Once you start the gateway server you should see a:
```javascript
200
```
And if you check the hidden server (terminal 1 if you followed this guide), it should now have something like:
```javascript
> Ready on http://localhost:3100
{"message":"/setCount?count=0","level":"info"}
{"message":"/incremented","level":"info"}
```
Terminal 3:
```bash
cd http_server
```
```bash
node index.js
```
Finally starting the http server you'll see:
```javascript
> HTTP_server ready on http://localhost:8080
```
#### **Step 5.**
Open a browser on: http://localhost:8080