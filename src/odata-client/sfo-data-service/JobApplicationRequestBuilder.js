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
var JobApplication_1 = require("./JobApplication");
/**
 * Request builder class for operations supported on the [[JobApplication]] entity.
 */
var JobApplicationRequestBuilder = /** @class */ (function (_super) {
    __extends(JobApplicationRequestBuilder, _super);
    function JobApplicationRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobApplication` entity based on its keys.
     * @param applicationId Key property. See [[JobApplication.applicationId]].
     * @returns A request builder for creating requests to retrieve one `JobApplication` entity based on its keys.
     */
    JobApplicationRequestBuilder.prototype.getByKey = function (applicationId) {
        return new core_1.GetByKeyRequestBuilder(JobApplication_1.JobApplication, { applicationId: applicationId });
    };
    /**
     * Returns a request builder for querying all `JobApplication` entities.
     * @returns A request builder for creating requests to retrieve all `JobApplication` entities.
     */
    JobApplicationRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobApplication_1.JobApplication);
    };
    /**
     * Returns a request builder for creating a `JobApplication` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `JobApplication`.
     */
    JobApplicationRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(JobApplication_1.JobApplication, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `JobApplication`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `JobApplication`.
     */
    JobApplicationRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(JobApplication_1.JobApplication, entity);
    };
    return JobApplicationRequestBuilder;
}(core_1.RequestBuilder));
exports.JobApplicationRequestBuilder = JobApplicationRequestBuilder;
//# sourceMappingURL=JobApplicationRequestBuilder.js.map