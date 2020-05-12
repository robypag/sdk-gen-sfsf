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
var JobRequisition_1 = require("./JobRequisition");
/**
 * Request builder class for operations supported on the [[JobRequisition]] entity.
 */
var JobRequisitionRequestBuilder = /** @class */ (function (_super) {
    __extends(JobRequisitionRequestBuilder, _super);
    function JobRequisitionRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobRequisition` entity based on its keys.
     * @param jobReqId Key property. See [[JobRequisition.jobReqId]].
     * @returns A request builder for creating requests to retrieve one `JobRequisition` entity based on its keys.
     */
    JobRequisitionRequestBuilder.prototype.getByKey = function (jobReqId) {
        return new core_1.GetByKeyRequestBuilder(JobRequisition_1.JobRequisition, { jobReqId: jobReqId });
    };
    /**
     * Returns a request builder for querying all `JobRequisition` entities.
     * @returns A request builder for creating requests to retrieve all `JobRequisition` entities.
     */
    JobRequisitionRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobRequisition_1.JobRequisition);
    };
    /**
     * Returns a request builder for creating a `JobRequisition` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `JobRequisition`.
     */
    JobRequisitionRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(JobRequisition_1.JobRequisition, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `JobRequisition`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `JobRequisition`.
     */
    JobRequisitionRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(JobRequisition_1.JobRequisition, entity);
    };
    JobRequisitionRequestBuilder.prototype.delete = function (jobReqIdOrEntity) {
        return new core_1.DeleteRequestBuilder(JobRequisition_1.JobRequisition, jobReqIdOrEntity instanceof JobRequisition_1.JobRequisition ? jobReqIdOrEntity : { jobReqId: jobReqIdOrEntity });
    };
    return JobRequisitionRequestBuilder;
}(core_1.RequestBuilder));
exports.JobRequisitionRequestBuilder = JobRequisitionRequestBuilder;
//# sourceMappingURL=JobRequisitionRequestBuilder.js.map