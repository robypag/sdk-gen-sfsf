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
var JobApplicationBackgroundCheckRequest_1 = require("./JobApplicationBackgroundCheckRequest");
/**
 * Request builder class for operations supported on the [[JobApplicationBackgroundCheckRequest]] entity.
 */
var JobApplicationBackgroundCheckRequestRequestBuilder = /** @class */ (function (_super) {
    __extends(JobApplicationBackgroundCheckRequestRequestBuilder, _super);
    function JobApplicationBackgroundCheckRequestRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobApplicationBackgroundCheckRequest` entity based on its keys.
     * @param requestId Key property. See [[JobApplicationBackgroundCheckRequest.requestId]].
     * @returns A request builder for creating requests to retrieve one `JobApplicationBackgroundCheckRequest` entity based on its keys.
     */
    JobApplicationBackgroundCheckRequestRequestBuilder.prototype.getByKey = function (requestId) {
        return new core_1.GetByKeyRequestBuilder(JobApplicationBackgroundCheckRequest_1.JobApplicationBackgroundCheckRequest, { requestId: requestId });
    };
    /**
     * Returns a request builder for querying all `JobApplicationBackgroundCheckRequest` entities.
     * @returns A request builder for creating requests to retrieve all `JobApplicationBackgroundCheckRequest` entities.
     */
    JobApplicationBackgroundCheckRequestRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobApplicationBackgroundCheckRequest_1.JobApplicationBackgroundCheckRequest);
    };
    /**
     * Returns a request builder for creating a `JobApplicationBackgroundCheckRequest` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `JobApplicationBackgroundCheckRequest`.
     */
    JobApplicationBackgroundCheckRequestRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(JobApplicationBackgroundCheckRequest_1.JobApplicationBackgroundCheckRequest, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `JobApplicationBackgroundCheckRequest`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `JobApplicationBackgroundCheckRequest`.
     */
    JobApplicationBackgroundCheckRequestRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(JobApplicationBackgroundCheckRequest_1.JobApplicationBackgroundCheckRequest, entity);
    };
    JobApplicationBackgroundCheckRequestRequestBuilder.prototype.delete = function (requestIdOrEntity) {
        return new core_1.DeleteRequestBuilder(JobApplicationBackgroundCheckRequest_1.JobApplicationBackgroundCheckRequest, requestIdOrEntity instanceof JobApplicationBackgroundCheckRequest_1.JobApplicationBackgroundCheckRequest ? requestIdOrEntity : { requestId: requestIdOrEntity });
    };
    return JobApplicationBackgroundCheckRequestRequestBuilder;
}(core_1.RequestBuilder));
exports.JobApplicationBackgroundCheckRequestRequestBuilder = JobApplicationBackgroundCheckRequestRequestBuilder;
//# sourceMappingURL=JobApplicationBackgroundCheckRequestRequestBuilder.js.map