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
    testRoute: _trpc.publicProcedure.input(_zod.z.undefined()).query(async ({ ctx: { datasource, jwt } })=>{
        return 'test route';
    })
});
const _default = keyPhraseRoute;

//# sourceMappingURL=test.route.js.map