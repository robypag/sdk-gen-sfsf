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
var JobReqScreeningQuestion_1 = require("./JobReqScreeningQuestion");
/**
 * Request builder class for operations supported on the [[JobReqScreeningQuestion]] entity.
 */
var JobReqScreeningQuestionRequestBuilder = /** @class */ (function (_super) {
    __extends(JobReqScreeningQuestionRequestBuilder, _super);
    function JobReqScreeningQuestionRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobReqScreeningQuestion` entity based on its keys.
     * @param jobReqId Key property. See [[JobReqScreeningQuestion.jobReqId]].
     * @param locale Key property. See [[JobReqScreeningQuestion.locale]].
     * @param order Key property. See [[JobReqScreeningQuestion.order]].
     * @returns A request builder for creating requests to retrieve one `JobReqScreeningQuestion` entity based on its keys.
     */
    JobReqScreeningQuestionRequestBuilder.prototype.getByKey = function (jobReqId, locale, order) {
        return new core_1.GetByKeyRequestBuilder(JobReqScreeningQuestion_1.JobReqScreeningQuestion, {
            jobReqId: jobReqId,
            locale: locale,
            order: order
        });
    };
    /**
     * Returns a request builder for querying all `JobReqScreeningQuestion` entities.
     * @returns A request builder for creating requests to retrieve all `JobReqScreeningQuestion` entities.
     */
    JobReqScreeningQuestionRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobReqScreeningQuestion_1.JobReqScreeningQuestion);
    };
    /**
     * Returns a request builder for creating a `JobReqScreeningQuestion` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `JobReqScreeningQuestion`.
     */
    JobReqScreeningQuestionRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(JobReqScreeningQuestion_1.JobReqScreeningQuestion, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `JobReqScreeningQuestion`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `JobReqScreeningQuestion`.
     */
    JobReqScreeningQuestionRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(JobReqScreeningQuestion_1.JobReqScreeningQuestion, entity);
    };
    return JobReqScreeningQuestionRequestBuilder;
}(core_1.RequestBuilder));
exports.JobReqScreeningQuestionRequestBuilder = JobReqScreeningQuestionRequestBuilder;
//# sourceMappingURL=JobReqScreeningQuestionRequestBuilder.js.map