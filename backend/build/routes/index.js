//zod: 입력값의 유효성 검사 => 입력값의 형식을 제한함으로써 다른 타입이 들어오지 못하도록 함
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
const _trpc = require("../trpc");
const _test = /*#__PURE__*/ _interop_require_default(require("./test"));
const _user = /*#__PURE__*/ _interop_require_default(require("./user"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const routes = (0, _trpc.router)({
    user: _user.default,
    test: _test.default
});
const _default = routes;

//# sourceMappingURL=index.js.map