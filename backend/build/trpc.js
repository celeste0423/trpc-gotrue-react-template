"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    mergeRouters: function() {
        return mergeRouters;
    },
    middleware: function() {
        return middleware;
    },
    publicProcedure: function() {
        return publicProcedure;
    },
    router: function() {
        return router;
    },
    userProcedure: function() {
        return userProcedure;
    }
});
const _server = require("@trpc/server");
// You can use any variable name you like.
// We use t to keep things simple.
//t로 trpc 컨텍스트 생성, 서버 생성에 필요한 다양한 정보들을 넣을 컨텍스트
//t = 트랜스포머
const t = _server.initTRPC.context().create();
const router = t.router;
const mergeRouters = t.mergeRouters;
const middleware = t.middleware;
const publicProcedure = t.procedure;
const userProcedure = t.procedure.use(t.middleware(({ next, ctx })=>{
    //컨텍스트에서 jwt와 userAuthClient받아오기
    const { jwt, userAuthClient } = ctx;
    //jwt또는 userAuthClient가 없으면 Unauthorized 에러 송출
    if (!jwt || !userAuthClient) {
        throw new _server.TRPCError({
            code: 'UNAUTHORIZED'
        });
    }
    //next는 다음 미들웨어를 호출하기 위한 함수()
    return next({
        ctx: {
            jwt,
            userAuthClient
        }
    });
}));

//# sourceMappingURL=trpc.js.map