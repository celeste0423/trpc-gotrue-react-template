"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _zod = require("zod");
const _trpc = require("../../../trpc");
const keyPhraseRoute = (0, _trpc.router)({
    sampleRoute: _trpc.userProcedure.input(_zod.z.object({
        sample: _zod.z.string()
    })).query(async ({ input: { sample }, ctx: { datasource, jwt } })=>{
        if (sample == 'email') {
            return '이메일은 ' + jwt.email;
        } else if (sample == 'sub') {
            return '토큰은 ' + jwt.sub;
        } else {
            return '입력값이 없습니다';
        }
    // return (
    // 	'Hello World(sample route)' +
    // 	' ' +
    // 	sample +
    // 	' ' +
    // 	jwt.sub +
    // 	'\n' +
    // 	jwt.email +
    // 	'\n' +
    // 	jwt.role
    // )
    })
});
const _default = keyPhraseRoute;

//# sourceMappingURL=sample.route.js.map