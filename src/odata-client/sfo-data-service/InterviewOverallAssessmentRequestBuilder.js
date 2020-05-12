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
var InterviewOverallAssessment_1 = require("./InterviewOverallAssessment");
/**
 * Request builder class for operations supported on the [[InterviewOverallAssessment]] entity.
 */
var InterviewOverallAssessmentRequestBuilder = /** @class */ (function (_super) {
    __extends(InterviewOverallAssessmentRequestBuilder, _super);
    function InterviewOverallAssessmentRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `InterviewOverallAssessment` entity based on its keys.
     * @param interviewOverallAssessmentId Key property. See [[InterviewOverallAssessment.interviewOverallAssessmentId]].
     * @returns A request builder for creating requests to retrieve one `InterviewOverallAssessment` entity based on its keys.
     */
    InterviewOverallAssessmentRequestBuilder.prototype.getByKey = function (interviewOverallAssessmentId) {
        return new core_1.GetByKeyRequestBuilder(InterviewOverallAssessment_1.InterviewOverallAssessment, { interviewOverallAssessmentId: interviewOverallAssessmentId });
    };
    /**
     * Returns a request builder for querying all `InterviewOverallAssessment` entities.
     * @returns A request builder for creating requests to retrieve all `InterviewOverallAssessment` entities.
     */
    InterviewOverallAssessmentRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(InterviewOverallAssessment_1.InterviewOverallAssessment);
    };
    /**
     * Returns a request builder for creating a `InterviewOverallAssessment` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `InterviewOverallAssessment`.
     */
    InterviewOverallAssessmentRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(InterviewOverallAssessment_1.InterviewOverallAssessment, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `InterviewOverallAssessment`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `InterviewOverallAssessment`.
     */
    InterviewOverallAssessmentRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(InterviewOverallAssessment_1.InterviewOverallAssessment, entity);
    };
    InterviewOverallAssessmentRequestBuilder.prototype.delete = function (interviewOverallAssessmentIdOrEntity) {
        return new core_1.DeleteRequestBuilder(InterviewOverallAssessment_1.InterviewOverallAssessment, interviewOverallAssessmentIdOrEntity instanceof InterviewOverallAssessment_1.InterviewOverallAssessment ? interviewOverallAssessmentIdOrEntity : { interviewOverallAssessmentId: interviewOverallAssessmentIdOrEntity });
    };
    return InterviewOverallAssessmentRequestBuilder;
}(core_1.RequestBuilder));
exports.InterviewOverallAssessmentRequestBuilder = InterviewOverallAssessmentRequestBuilder;
//# sourceMappingURL=InterviewOverallAssessmentRequestBuilder.js.map