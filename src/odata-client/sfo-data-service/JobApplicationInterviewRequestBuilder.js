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
var JobApplicationInterview_1 = require("./JobApplicationInterview");
/**
 * Request builder class for operations supported on the [[JobApplicationInterview]] entity.
 */
var JobApplicationInterviewRequestBuilder = /** @class */ (function (_super) {
    __extends(JobApplicationInterviewRequestBuilder, _super);
    function JobApplicationInterviewRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobApplicationInterview` entity based on its keys.
     * @param applicationInterviewId Key property. See [[JobApplicationInterview.applicationInterviewId]].
     * @returns A request builder for creating requests to retrieve one `JobApplicationInterview` entity based on its keys.
     */
    JobApplicationInterviewRequestBuilder.prototype.getByKey = function (applicationInterviewId) {
        return new core_1.GetByKeyRequestBuilder(JobApplicationInterview_1.JobApplicationInterview, { applicationInterviewId: applicationInterviewId });
    };
    /**
     * Returns a request builder for querying all `JobApplicationInterview` entities.
     * @returns A request builder for creating requests to retrieve all `JobApplicationInterview` entities.
     */
    JobApplicationInterviewRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobApplicationInterview_1.JobApplicationInterview);
    };
    /**
     * Returns a request builder for creating a `JobApplicationInterview` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `JobApplicationInterview`.
     */
    JobApplicationInterviewRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(JobApplicationInterview_1.JobApplicationInterview, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `JobApplicationInterview`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `JobApplicationInterview`.
     */
    JobApplicationInterviewRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(JobApplicationInterview_1.JobApplicationInterview, entity);
    };
    JobApplicationInterviewRequestBuilder.prototype.delete = function (applicationInterviewIdOrEntity) {
        return new core_1.DeleteRequestBuilder(JobApplicationInterview_1.JobApplicationInterview, applicationInterviewIdOrEntity instanceof JobApplicationInterview_1.JobApplicationInterview ? applicationInterviewIdOrEntity : { applicationInterviewId: applicationInterviewIdOrEntity });
    };
    return JobApplicationInterviewRequestBuilder;
}(core_1.RequestBuilder));
exports.JobApplicationInterviewRequestBuilder = JobApplicationInterviewRequestBuilder;
//# sourceMappingURL=JobApplicationInterviewRequestBuilder.js.map