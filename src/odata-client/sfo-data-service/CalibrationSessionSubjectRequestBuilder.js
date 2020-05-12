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
var CalibrationSessionSubject_1 = require("./CalibrationSessionSubject");
/**
 * Request builder class for operations supported on the [[CalibrationSessionSubject]] entity.
 */
var CalibrationSessionSubjectRequestBuilder = /** @class */ (function (_super) {
    __extends(CalibrationSessionSubjectRequestBuilder, _super);
    function CalibrationSessionSubjectRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CalibrationSessionSubject` entity based on its keys.
     * @param sessionSubjectId Key property. See [[CalibrationSessionSubject.sessionSubjectId]].
     * @returns A request builder for creating requests to retrieve one `CalibrationSessionSubject` entity based on its keys.
     */
    CalibrationSessionSubjectRequestBuilder.prototype.getByKey = function (sessionSubjectId) {
        return new core_1.GetByKeyRequestBuilder(CalibrationSessionSubject_1.CalibrationSessionSubject, { sessionSubjectId: sessionSubjectId });
    };
    /**
     * Returns a request builder for querying all `CalibrationSessionSubject` entities.
     * @returns A request builder for creating requests to retrieve all `CalibrationSessionSubject` entities.
     */
    CalibrationSessionSubjectRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(CalibrationSessionSubject_1.CalibrationSessionSubject);
    };
    return CalibrationSessionSubjectRequestBuilder;
}(core_1.RequestBuilder));
exports.CalibrationSessionSubjectRequestBuilder = CalibrationSessionSubjectRequestBuilder;
//# sourceMappingURL=CalibrationSessionSubjectRequestBuilder.js.map