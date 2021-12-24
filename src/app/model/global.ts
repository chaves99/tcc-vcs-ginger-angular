import { HttpHeaders } from "@angular/common/http";

export const GlobalVariable = Object.freeze({
    BASE_API_URL: 'http://localhost:8080',

    httpHeaders: new HttpHeaders()
        .set("Access-Control-Allow-Origin", 'http://localhost:4200')
        .set('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
        .set('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token')
        .set("Content-Type", "application/json"),

    GINGER_COOKIE_KEY: "GINGER_COOKIE_KEY"
});