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
var JobReqQuestion_1 = require("./JobReqQuestion");
/**
 * Request builder class for operations supported on the [[JobReqQuestion]] entity.
 */
var JobReqQuestionRequestBuilder = /** @class */ (function (_super) {
    __extends(JobReqQuestionRequestBuilder, _super);
    function JobReqQuestionRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobReqQuestion` entity based on its keys.
     * @param questionId Key property. See [[JobReqQuestion.questionId]].
     * @returns A request builder for creating requests to retrieve one `JobReqQuestion` entity based on its keys.
     */
    JobReqQuestionRequestBuilder.prototype.getByKey = function (questionId) {
        return new core_1.GetByKeyRequestBuilder(JobReqQuestion_1.JobReqQuestion, { questionId: questionId });
    };
    /**
     * Returns a request builder for querying all `JobReqQuestion` entities.
     * @returns A request builder for creating requests to retrieve all `JobReqQuestion` entities.
     */
    JobReqQuestionRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobReqQuestion_1.JobReqQuestion);
    };
    return JobReqQuestionRequestBuilder;
}(core_1.RequestBuilder));
exports.JobReqQuestionRequestBuilder = JobReqQuestionRequestBuilder;
//# sourceMappingURL=JobReqQuestionRequestBuilder.js.map