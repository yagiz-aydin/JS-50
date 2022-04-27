/*
    Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism 
    that allows a server to indicate any origins (domain, scheme, or port) 
    other than its own from which a browser should permit loading resources.
*/

/* 
    Using resource sharing between 2 webapps,
    Each comminucation event has a preflight event
    Preflight means allowing headers to access resource sharing
    CORS is a browser event to interrupt any missecured event
*/

fetch("https://api.publicapis.org/entries")
// Try fetch some API's, You can see simillar error down bellow 

/*  
    Cross-Origin Request Blocked: The Same Origin Policy disallows
    reading the remote resource at https://some-url-api. (Reason:
    additional information here). 
*/

/* For example: 
    Use on CORS restrictions 
    create-react-app boilerplate > package.json 
    Add variable name proxy for evaluating CORS
    proxy: api.apiname.com/api/v1
*/

