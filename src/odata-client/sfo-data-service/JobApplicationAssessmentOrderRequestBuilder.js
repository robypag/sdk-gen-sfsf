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
var JobApplicationAssessmentOrder_1 = require("./JobApplicationAssessmentOrder");
/**
 * Request builder class for operations supported on the [[JobApplicationAssessmentOrder]] entity.
 */
var JobApplicationAssessmentOrderRequestBuilder = /** @class */ (function (_super) {
    __extends(JobApplicationAssessmentOrderRequestBuilder, _super);
    function JobApplicationAssessmentOrderRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobApplicationAssessmentOrder` entity based on its keys.
     * @param id Key property. See [[JobApplicationAssessmentOrder.id]].
     * @returns A request builder for creating requests to retrieve one `JobApplicationAssessmentOrder` entity based on its keys.
     */
    JobApplicationAssessmentOrderRequestBuilder.prototype.getByKey = function (id) {
        return new core_1.GetByKeyRequestBuilder(JobApplicationAssessmentOrder_1.JobApplicationAssessmentOrder, { id: id });
    };
    /**
     * Returns a request builder for querying all `JobApplicationAssessmentOrder` entities.
     * @returns A request builder for creating requests to retrieve all `JobApplicationAssessmentOrder` entities.
     */
    JobApplicationAssessmentOrderRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobApplicationAssessmentOrder_1.JobApplicationAssessmentOrder);
    };
    return JobApplicationAssessmentOrderRequestBuilder;
}(core_1.RequestBuilder));
exports.JobApplicationAssessmentOrderRequestBuilder = JobApplicationAssessmentOrderRequestBuilder;
//# sourceMappingURL=JobApplicationAssessmentOrderRequestBuilder.js.map