//앱의 라우팅 정보 정의
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, //타입과 라우터 export
"default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _routes = /*#__PURE__*/ _interop_require_default(require("./routes"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const appRouter = _routes.default;
const _default = appRouter;

//# sourceMappingURL=app.js.map