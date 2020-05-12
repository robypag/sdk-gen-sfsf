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
var JobRequisitionAssessment_1 = require("./JobRequisitionAssessment");
/**
 * Request builder class for operations supported on the [[JobRequisitionAssessment]] entity.
 */
var JobRequisitionAssessmentRequestBuilder = /** @class */ (function (_super) {
    __extends(JobRequisitionAssessmentRequestBuilder, _super);
    function JobRequisitionAssessmentRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobRequisitionAssessment` entity based on its keys.
     * @param assessmentAssociationId Key property. See [[JobRequisitionAssessment.assessmentAssociationId]].
     * @returns A request builder for creating requests to retrieve one `JobRequisitionAssessment` entity based on its keys.
     */
    JobRequisitionAssessmentRequestBuilder.prototype.getByKey = function (assessmentAssociationId) {
        return new core_1.GetByKeyRequestBuilder(JobRequisitionAssessment_1.JobRequisitionAssessment, { assessmentAssociationId: assessmentAssociationId });
    };
    /**
     * Returns a request builder for querying all `JobRequisitionAssessment` entities.
     * @returns A request builder for creating requests to retrieve all `JobRequisitionAssessment` entities.
     */
    JobRequisitionAssessmentRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobRequisitionAssessment_1.JobRequisitionAssessment);
    };
    JobRequisitionAssessmentRequestBuilder.prototype.delete = function (assessmentAssociationIdOrEntity) {
        return new core_1.DeleteRequestBuilder(JobRequisitionAssessment_1.JobRequisitionAssessment, assessmentAssociationIdOrEntity instanceof JobRequisitionAssessment_1.JobRequisitionAssessment ? assessmentAssociationIdOrEntity : { assessmentAssociationId: assessmentAssociationIdOrEntity });
    };
    return JobRequisitionAssessmentRequestBuilder;
}(core_1.RequestBuilder));
exports.JobRequisitionAssessmentRequestBuilder = JobRequisitionAssessmentRequestBuilder;
//# sourceMappingURL=JobRequisitionAssessmentRequestBuilder.js.map