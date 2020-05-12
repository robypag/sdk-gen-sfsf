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
var JobApplicationAssessmentReportDetail_1 = require("./JobApplicationAssessmentReportDetail");
/**
 * Request builder class for operations supported on the [[JobApplicationAssessmentReportDetail]] entity.
 */
var JobApplicationAssessmentReportDetailRequestBuilder = /** @class */ (function (_super) {
    __extends(JobApplicationAssessmentReportDetailRequestBuilder, _super);
    function JobApplicationAssessmentReportDetailRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobApplicationAssessmentReportDetail` entity based on its keys.
     * @param id Key property. See [[JobApplicationAssessmentReportDetail.id]].
     * @returns A request builder for creating requests to retrieve one `JobApplicationAssessmentReportDetail` entity based on its keys.
     */
    JobApplicationAssessmentReportDetailRequestBuilder.prototype.getByKey = function (id) {
        return new core_1.GetByKeyRequestBuilder(JobApplicationAssessmentReportDetail_1.JobApplicationAssessmentReportDetail, { id: id });
    };
    /**
     * Returns a request builder for querying all `JobApplicationAssessmentReportDetail` entities.
     * @returns A request builder for creating requests to retrieve all `JobApplicationAssessmentReportDetail` entities.
     */
    JobApplicationAssessmentReportDetailRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobApplicationAssessmentReportDetail_1.JobApplicationAssessmentReportDetail);
    };
    return JobApplicationAssessmentReportDetailRequestBuilder;
}(core_1.RequestBuilder));
exports.JobApplicationAssessmentReportDetailRequestBuilder = JobApplicationAssessmentReportDetailRequestBuilder;
//# sourceMappingURL=JobApplicationAssessmentReportDetailRequestBuilder.js.map