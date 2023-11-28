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
const emailRoute = (0, _trpc.router)({
    emailRoute: _trpc.userProcedure.input(_zod.z.object({
        text: _zod.z.string()
    })).query(async ({ input: { text }, ctx: { datasource, jwt } })=>{
        return jwt.email;
    })
});
const _default = emailRoute;

//# sourceMappingURL=email.route.js.map