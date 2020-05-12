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
var CalibrationSubjectRank_1 = require("./CalibrationSubjectRank");
/**
 * Request builder class for operations supported on the [[CalibrationSubjectRank]] entity.
 */
var CalibrationSubjectRankRequestBuilder = /** @class */ (function (_super) {
    __extends(CalibrationSubjectRankRequestBuilder, _super);
    function CalibrationSubjectRankRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CalibrationSubjectRank` entity based on its keys.
     * @param subjectRankId Key property. See [[CalibrationSubjectRank.subjectRankId]].
     * @returns A request builder for creating requests to retrieve one `CalibrationSubjectRank` entity based on its keys.
     */
    CalibrationSubjectRankRequestBuilder.prototype.getByKey = function (subjectRankId) {
        return new core_1.GetByKeyRequestBuilder(CalibrationSubjectRank_1.CalibrationSubjectRank, { subjectRankId: subjectRankId });
    };
    /**
     * Returns a request builder for querying all `CalibrationSubjectRank` entities.
     * @returns A request builder for creating requests to retrieve all `CalibrationSubjectRank` entities.
     */
    CalibrationSubjectRankRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(CalibrationSubjectRank_1.CalibrationSubjectRank);
    };
    return CalibrationSubjectRankRequestBuilder;
}(core_1.RequestBuilder));
exports.CalibrationSubjectRankRequestBuilder = CalibrationSubjectRankRequestBuilder;
//# sourceMappingURL=CalibrationSubjectRankRequestBuilder.js.map