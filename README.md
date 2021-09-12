# Simple node multi server example

## Getting started

### Windows
On a windows you can run the start.bat file to:
npm install the dependencies, then start the servers. It is a little brittle because it only uses a timeout to ensure things have happened and this may not be the case.

Otherwise (Recommended) follow the below manual steps which work on both windows and ubuntu.

### Manual setup

1. Clone the repo:
    ```bash
    git clone https://github.com/BarryFoye/demo_app_njs.git
    ```

2. Change to the app directory:
    ```bash
    cd demo_app_njs
    ```

3. Run the install dependencies script:
    ```bash
    npm install
    ```

4. Then using 3 separate terminals and in the following order:

    i.a. 
    ```bash
    cd hidden_server
    ```

   i.b. 
   ```bash
   node index.js
   ```

   ii.a. 
    ```bash
    cd gateway_server
    ```

   ii.b. 
   ```bash
   node index.js
   ```

   iii.a.
   ```bash
    cd http_server
    ```

   iii.b. 
   ```bash
   node index.js
   ```

5. Open browser on 
http://localhost:8080


When the hidden server starts you should see:

```javascript
> Ready on http://localhost:3100
```

Once you start the gateway server you should see a:

```javascript
200
```

And if you check the hidden server, it should now have something like:

```javascript
> Ready on http://localhost:3100
{"message":"/setCount?count=0","level":"info"}
{"message":"/incremented","level":"info"}
```

Finally starting the http server you'll see:
```javascript
> HTTP_server ready on http://localhost:8080
```