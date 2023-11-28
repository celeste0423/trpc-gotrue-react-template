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
const _jsonwebtoken = /*#__PURE__*/ _interop_require_default(require("jsonwebtoken"));
const _auth = require("./auth");
const _datasource = require("./datasource");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const createContext = async (options)=>{
    //datasource => env 타입
    const datasource = _datasource.MBDataSource;
    if (!datasource.isInitialized) {
        //datasource 초기화 진행
        await datasource.initialize();
    }
    //HTTP 헤더에서 jwt토큰을 추출
    const authorization = options.req.headers.authorization;
    const accessToken = authorization?.match(/Bearer (.+)/)?.[1];
    try {
        //추출한 토큰 검증
        if (!accessToken) {
            //토큰 없음
            throw new Error('token does not exist');
        }
        //토큰 타입 변환
        const token = _jsonwebtoken.default.verify(accessToken, process.env.GOTRUE_JWT_SECRET);
        if (token.role === 'revenuecat_admin') {
            return {
                datasource,
                // @ts-ignore
                userAuthClient: null,
                jwt: {
                    ...token,
                    accessToken
                }
            };
        } else {
            const userAuthClient = (0, _auth.createUserAuthClient)(accessToken);
            return {
                datasource,
                userAuthClient,
                jwt: token
            };
        }
    } catch (error) {
        return {
            datasource
        };
    }
};
const _default = createContext;

//# sourceMappingURL=context.js.map