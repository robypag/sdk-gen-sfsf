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
var JobApplicationQuestionResponse_1 = require("./JobApplicationQuestionResponse");
/**
 * Request builder class for operations supported on the [[JobApplicationQuestionResponse]] entity.
 */
var JobApplicationQuestionResponseRequestBuilder = /** @class */ (function (_super) {
    __extends(JobApplicationQuestionResponseRequestBuilder, _super);
    function JobApplicationQuestionResponseRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobApplicationQuestionResponse` entity based on its keys.
     * @param applicationId Key property. See [[JobApplicationQuestionResponse.applicationId]].
     * @param order Key property. See [[JobApplicationQuestionResponse.order]].
     * @returns A request builder for creating requests to retrieve one `JobApplicationQuestionResponse` entity based on its keys.
     */
    JobApplicationQuestionResponseRequestBuilder.prototype.getByKey = function (applicationId, order) {
        return new core_1.GetByKeyRequestBuilder(JobApplicationQuestionResponse_1.JobApplicationQuestionResponse, {
            applicationId: applicationId,
            order: order
        });
    };
    /**
     * Returns a request builder for querying all `JobApplicationQuestionResponse` entities.
     * @returns A request builder for creating requests to retrieve all `JobApplicationQuestionResponse` entities.
     */
    JobApplicationQuestionResponseRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobApplicationQuestionResponse_1.JobApplicationQuestionResponse);
    };
    /**
     * Returns a request builder for creating a `JobApplicationQuestionResponse` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `JobApplicationQuestionResponse`.
     */
    JobApplicationQuestionResponseRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(JobApplicationQuestionResponse_1.JobApplicationQuestionResponse, entity);
    };
    return JobApplicationQuestionResponseRequestBuilder;
}(core_1.RequestBuilder));
exports.JobApplicationQuestionResponseRequestBuilder = JobApplicationQuestionResponseRequestBuilder;
//# sourceMappingURL=JobApplicationQuestionResponseRequestBuilder.js.map