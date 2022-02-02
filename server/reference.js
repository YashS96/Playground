"use strict";
import http from 'http'

console.log(http.METHODS)
console.log(http.STATUS_CODES)


/*    Generic Middleware stack 
stack: 
   [ { route: '', handle: [Function] },
     { route: '', handle: [Function: static] },
     { route: '', handle: [Function: bodyParser] },
     { route: '', handle: [Function: cookieParser] },
     { route: '', handle: [Function: session] },
     { route: '', handle: [Function: methodOverride] },
     { route: '', handle: [Function] },
     { route: '', handle: [Function] } ]
     */

     // app.use(path,cb) vs app.get(path,cb)
     //Accepts partial path match Vs exact end point should match