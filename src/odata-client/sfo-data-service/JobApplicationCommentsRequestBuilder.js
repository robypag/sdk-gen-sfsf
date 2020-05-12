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
var JobApplicationComments_1 = require("./JobApplicationComments");
/**
 * Request builder class for operations supported on the [[JobApplicationComments]] entity.
 */
var JobApplicationCommentsRequestBuilder = /** @class */ (function (_super) {
    __extends(JobApplicationCommentsRequestBuilder, _super);
    function JobApplicationCommentsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobApplicationComments` entity based on its keys.
     * @param commentId Key property. See [[JobApplicationComments.commentId]].
     * @returns A request builder for creating requests to retrieve one `JobApplicationComments` entity based on its keys.
     */
    JobApplicationCommentsRequestBuilder.prototype.getByKey = function (commentId) {
        return new core_1.GetByKeyRequestBuilder(JobApplicationComments_1.JobApplicationComments, { commentId: commentId });
    };
    /**
     * Returns a request builder for querying all `JobApplicationComments` entities.
     * @returns A request builder for creating requests to retrieve all `JobApplicationComments` entities.
     */
    JobApplicationCommentsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobApplicationComments_1.JobApplicationComments);
    };
    /**
     * Returns a request builder for creating a `JobApplicationComments` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `JobApplicationComments`.
     */
    JobApplicationCommentsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(JobApplicationComments_1.JobApplicationComments, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `JobApplicationComments`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `JobApplicationComments`.
     */
    JobApplicationCommentsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(JobApplicationComments_1.JobApplicationComments, entity);
    };
    JobApplicationCommentsRequestBuilder.prototype.delete = function (commentIdOrEntity) {
        return new core_1.DeleteRequestBuilder(JobApplicationComments_1.JobApplicationComments, commentIdOrEntity instanceof JobApplicationComments_1.JobApplicationComments ? commentIdOrEntity : { commentId: commentIdOrEntity });
    };
    return JobApplicationCommentsRequestBuilder;
}(core_1.RequestBuilder));
exports.JobApplicationCommentsRequestBuilder = JobApplicationCommentsRequestBuilder;
//# sourceMappingURL=JobApplicationCommentsRequestBuilder.js.map