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
var JobApplicationAssessmentReport_1 = require("./JobApplicationAssessmentReport");
/**
 * Request builder class for operations supported on the [[JobApplicationAssessmentReport]] entity.
 */
var JobApplicationAssessmentReportRequestBuilder = /** @class */ (function (_super) {
    __extends(JobApplicationAssessmentReportRequestBuilder, _super);
    function JobApplicationAssessmentReportRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobApplicationAssessmentReport` entity based on its keys.
     * @param id Key property. See [[JobApplicationAssessmentReport.id]].
     * @returns A request builder for creating requests to retrieve one `JobApplicationAssessmentReport` entity based on its keys.
     */
    JobApplicationAssessmentReportRequestBuilder.prototype.getByKey = function (id) {
        return new core_1.GetByKeyRequestBuilder(JobApplicationAssessmentReport_1.JobApplicationAssessmentReport, { id: id });
    };
    /**
     * Returns a request builder for querying all `JobApplicationAssessmentReport` entities.
     * @returns A request builder for creating requests to retrieve all `JobApplicationAssessmentReport` entities.
     */
    JobApplicationAssessmentReportRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobApplicationAssessmentReport_1.JobApplicationAssessmentReport);
    };
    /**
     * Returns a request builder for creating a `JobApplicationAssessmentReport` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `JobApplicationAssessmentReport`.
     */
    JobApplicationAssessmentReportRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(JobApplicationAssessmentReport_1.JobApplicationAssessmentReport, entity);
    };
    return JobApplicationAssessmentReportRequestBuilder;
}(core_1.RequestBuilder));
exports.JobApplicationAssessmentReportRequestBuilder = JobApplicationAssessmentReportRequestBuilder;
//# sourceMappingURL=JobApplicationAssessmentReportRequestBuilder.js.map