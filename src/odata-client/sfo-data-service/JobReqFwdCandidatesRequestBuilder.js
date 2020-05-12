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
var JobReqFwdCandidates_1 = require("./JobReqFwdCandidates");
/**
 * Request builder class for operations supported on the [[JobReqFwdCandidates]] entity.
 */
var JobReqFwdCandidatesRequestBuilder = /** @class */ (function (_super) {
    __extends(JobReqFwdCandidatesRequestBuilder, _super);
    function JobReqFwdCandidatesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobReqFwdCandidates` entity based on its keys.
     * @param candidateId Key property. See [[JobReqFwdCandidates.candidateId]].
     * @param jobReqId Key property. See [[JobReqFwdCandidates.jobReqId]].
     * @returns A request builder for creating requests to retrieve one `JobReqFwdCandidates` entity based on its keys.
     */
    JobReqFwdCandidatesRequestBuilder.prototype.getByKey = function (candidateId, jobReqId) {
        return new core_1.GetByKeyRequestBuilder(JobReqFwdCandidates_1.JobReqFwdCandidates, {
            candidateId: candidateId,
            jobReqId: jobReqId
        });
    };
    /**
     * Returns a request builder for querying all `JobReqFwdCandidates` entities.
     * @returns A request builder for creating requests to retrieve all `JobReqFwdCandidates` entities.
     */
    JobReqFwdCandidatesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobReqFwdCandidates_1.JobReqFwdCandidates);
    };
    /**
     * Returns a request builder for creating a `JobReqFwdCandidates` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `JobReqFwdCandidates`.
     */
    JobReqFwdCandidatesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(JobReqFwdCandidates_1.JobReqFwdCandidates, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `JobReqFwdCandidates`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `JobReqFwdCandidates`.
     */
    JobReqFwdCandidatesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(JobReqFwdCandidates_1.JobReqFwdCandidates, entity);
    };
    JobReqFwdCandidatesRequestBuilder.prototype.delete = function (candidateIdOrEntity, jobReqId) {
        return new core_1.DeleteRequestBuilder(JobReqFwdCandidates_1.JobReqFwdCandidates, candidateIdOrEntity instanceof JobReqFwdCandidates_1.JobReqFwdCandidates ? candidateIdOrEntity : {
            candidateId: candidateIdOrEntity,
            jobReqId: jobReqId
        });
    };
    return JobReqFwdCandidatesRequestBuilder;
}(core_1.RequestBuilder));
exports.JobReqFwdCandidatesRequestBuilder = JobReqFwdCandidatesRequestBuilder;
//# sourceMappingURL=JobReqFwdCandidatesRequestBuilder.js.map