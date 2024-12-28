import {env} from "custom-env";
env("api")
import http from "http";
import https from 'https';
import fs from 'fs'
import express, { Express } from 'express';


const app:Express = express();



// app.use('/myChat-api', routes);


let server: http.Server | https.Server = http.createServer(app);


(async () => {
    try {
        server.listen(Number(process.env.PORT));
        console.log(`🚀 ${process.env.SERVER_NAME} started at ${process.env.SITE_URL} 🚀`);
    } catch (e) {
        console.error('🚨🚨 Server startup failed with error 🚨🚨', e);
        throw e;
    }
})();

module.exports = server;

