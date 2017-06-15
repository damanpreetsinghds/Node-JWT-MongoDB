# Node-JWT-MongoDB
This repository explains protecting rest api via JWT.  
JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.
JWT is useful in __Authentication__ and __Information Exchange__.  
## Software Requirements  
- NodeJS
- MongoDB
- Git  

## Installation guidelines to run project  
1. Clone this repository `https://github.com/damanpreetsinghds/Node-JWT-MongoDB.git`.
2. cd `Node-JWT-MongoDB`.
3. Install the dependencies and run server by `npm install` and `npm start` respectively.
4. Move to mongo directory by `cd /path/to/mongodb` and start server by `mongod`. 
5. Authenticate user by making a post request to `http:localhost:3000/authenticate` with `username`:_yourusername_ and `password`:_yourpassword_.
6. Server will return token after successful authentication, this token is valid for 1 hour.
7. Pass this token as `req.body.access_token` or `req.query.access_token` or in header as `x-access-token` for calling apis e.g. http://localhost:3000/?access_token=xx.yourtoken.xx.

If you have any questions or requests, email at [daman.preetsingh@yahoo.co.in](daman.preetsingh@yahoo.co.in) and I'll keep updating this to make it perfect.
