"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
require("dotenv/config");
require("reflect-metadata");
const _server = require("./server");
const PORT = Number(process.env.PORT ?? 3030);
(async ()=>{
    try {
        //server.listen으로 fastify서버 시작(포트는 env에서 가져옴)
        const address = await _server.fastifyServer.listen({
            port: PORT,
            host: '0.0.0.0'
        });
        await _server.fastifyServer.ready();
        console.log(`🚀 Server Listening on: ${address}`);
        console.log(`서버 실행`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();

//# sourceMappingURL=listen.js.map