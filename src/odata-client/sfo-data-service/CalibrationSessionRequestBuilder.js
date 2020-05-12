"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@sap-cloud-sdk/core");
var CalibrationSession_1 = require("./CalibrationSession");
/**
 * Request builder class for operations supported on the [[CalibrationSession]] entity.
 */
var CalibrationSessionRequestBuilder = /** @class */ (function (_super) {
    __extends(CalibrationSessionRequestBuilder, _super);
    function CalibrationSessionRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CalibrationSession` entity based on its keys.
     * @param sessionId Key property. See [[CalibrationSession.sessionId]].
     * @returns A request builder for creating requests to retrieve one `CalibrationSession` entity based on its keys.
     */
    CalibrationSessionRequestBuilder.prototype.getByKey = function (sessionId) {
        return new core_1.GetByKeyRequestBuilder(CalibrationSession_1.CalibrationSession, { sessionId: sessionId });
    };
    /**
     * Returns a request builder for querying all `CalibrationSession` entities.
     * @returns A request builder for creating requests to retrieve all `CalibrationSession` entities.
     */
    CalibrationSessionRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(CalibrationSession_1.CalibrationSession);
    };
    return CalibrationSessionRequestBuilder;
}(core_1.RequestBuilder));
exports.CalibrationSessionRequestBuilder = CalibrationSessionRequestBuilder;
//# sourceMappingURL=CalibrationSessionRequestBuilder.js.map