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
var JobApplicationBackgroundCheckResult_1 = require("./JobApplicationBackgroundCheckResult");
/**
 * Request builder class for operations supported on the [[JobApplicationBackgroundCheckResult]] entity.
 */
var JobApplicationBackgroundCheckResultRequestBuilder = /** @class */ (function (_super) {
    __extends(JobApplicationBackgroundCheckResultRequestBuilder, _super);
    function JobApplicationBackgroundCheckResultRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobApplicationBackgroundCheckResult` entity based on its keys.
     * @param statusId Key property. See [[JobApplicationBackgroundCheckResult.statusId]].
     * @returns A request builder for creating requests to retrieve one `JobApplicationBackgroundCheckResult` entity based on its keys.
     */
    JobApplicationBackgroundCheckResultRequestBuilder.prototype.getByKey = function (statusId) {
        return new core_1.GetByKeyRequestBuilder(JobApplicationBackgroundCheckResult_1.JobApplicationBackgroundCheckResult, { statusId: statusId });
    };
    /**
     * Returns a request builder for querying all `JobApplicationBackgroundCheckResult` entities.
     * @returns A request builder for creating requests to retrieve all `JobApplicationBackgroundCheckResult` entities.
     */
    JobApplicationBackgroundCheckResultRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobApplicationBackgroundCheckResult_1.JobApplicationBackgroundCheckResult);
    };
    /**
     * Returns a request builder for creating a `JobApplicationBackgroundCheckResult` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `JobApplicationBackgroundCheckResult`.
     */
    JobApplicationBackgroundCheckResultRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(JobApplicationBackgroundCheckResult_1.JobApplicationBackgroundCheckResult, entity);
    };
    return JobApplicationBackgroundCheckResultRequestBuilder;
}(core_1.RequestBuilder));
exports.JobApplicationBackgroundCheckResultRequestBuilder = JobApplicationBackgroundCheckResultRequestBuilder;
//# sourceMappingURL=JobApplicationBackgroundCheckResultRequestBuilder.js.map