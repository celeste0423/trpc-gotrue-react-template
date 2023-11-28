"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "fastifyServer", {
    enumerable: true,
    get: function() {
        return fastifyServer;
    }
});
require("dotenv/config");
require("reflect-metadata");
const _fastify = require("@trpc/server/adapters/fastify");
const _cors = /*#__PURE__*/ _interop_require_default(require("@fastify/cors"));
const _fastify1 = /*#__PURE__*/ _interop_require_default(require("fastify"));
const _app = /*#__PURE__*/ _interop_require_default(require("./app"));
const _context = /*#__PURE__*/ _interop_require_default(require("./context"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const fastifyServer = (0, _fastify1.default)({
    maxParamLength: 5000
});
//cors에서 모든 origin 허용
fastifyServer.register(_cors.default, {
    //orign함수는 cors설정하는데 이용됨 : 모든 출처에서의 요청을 허용하도록 설정
    //cors정책을 완화하여 다른 도메인에서의 클라이언트 요청을 허용함
    origin: (origin, callback)=>{
        //callback함수 : (에러, 허용여부)를 담아서 보냄
        // if (!origin) return callback(null, true)
        return callback(null, true);
    }
});
fastifyServer.register(_fastify.fastifyTRPCPlugin, {
    trpcOptions: {
        router: _app.default,
        createContext: _context.default,
        onError: ({ error })=>{
            //^?
            console.log(error);
        }
    }
});

//# sourceMappingURL=server.js.map