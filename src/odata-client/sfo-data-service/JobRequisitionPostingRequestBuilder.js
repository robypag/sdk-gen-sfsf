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
var JobRequisitionPosting_1 = require("./JobRequisitionPosting");
/**
 * Request builder class for operations supported on the [[JobRequisitionPosting]] entity.
 */
var JobRequisitionPostingRequestBuilder = /** @class */ (function (_super) {
    __extends(JobRequisitionPostingRequestBuilder, _super);
    function JobRequisitionPostingRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobRequisitionPosting` entity based on its keys.
     * @param jobPostingId Key property. See [[JobRequisitionPosting.jobPostingId]].
     * @param jobReqId Key property. See [[JobRequisitionPosting.jobReqId]].
     * @returns A request builder for creating requests to retrieve one `JobRequisitionPosting` entity based on its keys.
     */
    JobRequisitionPostingRequestBuilder.prototype.getByKey = function (jobPostingId, jobReqId) {
        return new core_1.GetByKeyRequestBuilder(JobRequisitionPosting_1.JobRequisitionPosting, {
            jobPostingId: jobPostingId,
            jobReqId: jobReqId
        });
    };
    /**
     * Returns a request builder for querying all `JobRequisitionPosting` entities.
     * @returns A request builder for creating requests to retrieve all `JobRequisitionPosting` entities.
     */
    JobRequisitionPostingRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobRequisitionPosting_1.JobRequisitionPosting);
    };
    /**
     * Returns a request builder for updating an entity of type `JobRequisitionPosting`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `JobRequisitionPosting`.
     */
    JobRequisitionPostingRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(JobRequisitionPosting_1.JobRequisitionPosting, entity);
    };
    JobRequisitionPostingRequestBuilder.prototype.delete = function (jobPostingIdOrEntity, jobReqId) {
        return new core_1.DeleteRequestBuilder(JobRequisitionPosting_1.JobRequisitionPosting, jobPostingIdOrEntity instanceof JobRequisitionPosting_1.JobRequisitionPosting ? jobPostingIdOrEntity : {
            jobPostingId: jobPostingIdOrEntity,
            jobReqId: jobReqId
        });
    };
    return JobRequisitionPostingRequestBuilder;
}(core_1.RequestBuilder));
exports.JobRequisitionPostingRequestBuilder = JobRequisitionPostingRequestBuilder;
//# sourceMappingURL=JobRequisitionPostingRequestBuilder.js.map