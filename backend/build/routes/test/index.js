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
const _trpc = require("../../trpc");
const _testroute = /*#__PURE__*/ _interop_require_default(require("./sample/test.route"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const userRoutes = (0, _trpc.mergeRouters)(_testroute.default);
const _default = userRoutes;

//# sourceMappingURL=index.js.map