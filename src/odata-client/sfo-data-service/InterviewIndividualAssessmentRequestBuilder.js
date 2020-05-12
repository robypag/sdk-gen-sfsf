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
var InterviewIndividualAssessment_1 = require("./InterviewIndividualAssessment");
/**
 * Request builder class for operations supported on the [[InterviewIndividualAssessment]] entity.
 */
var InterviewIndividualAssessmentRequestBuilder = /** @class */ (function (_super) {
    __extends(InterviewIndividualAssessmentRequestBuilder, _super);
    function InterviewIndividualAssessmentRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `InterviewIndividualAssessment` entity based on its keys.
     * @param interviewIndividualAssessmentId Key property. See [[InterviewIndividualAssessment.interviewIndividualAssessmentId]].
     * @returns A request builder for creating requests to retrieve one `InterviewIndividualAssessment` entity based on its keys.
     */
    InterviewIndividualAssessmentRequestBuilder.prototype.getByKey = function (interviewIndividualAssessmentId) {
        return new core_1.GetByKeyRequestBuilder(InterviewIndividualAssessment_1.InterviewIndividualAssessment, { interviewIndividualAssessmentId: interviewIndividualAssessmentId });
    };
    /**
     * Returns a request builder for querying all `InterviewIndividualAssessment` entities.
     * @returns A request builder for creating requests to retrieve all `InterviewIndividualAssessment` entities.
     */
    InterviewIndividualAssessmentRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(InterviewIndividualAssessment_1.InterviewIndividualAssessment);
    };
    /**
     * Returns a request builder for creating a `InterviewIndividualAssessment` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `InterviewIndividualAssessment`.
     */
    InterviewIndividualAssessmentRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(InterviewIndividualAssessment_1.InterviewIndividualAssessment, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `InterviewIndividualAssessment`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `InterviewIndividualAssessment`.
     */
    InterviewIndividualAssessmentRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(InterviewIndividualAssessment_1.InterviewIndividualAssessment, entity);
    };
    InterviewIndividualAssessmentRequestBuilder.prototype.delete = function (interviewIndividualAssessmentIdOrEntity) {
        return new core_1.DeleteRequestBuilder(InterviewIndividualAssessment_1.InterviewIndividualAssessment, interviewIndividualAssessmentIdOrEntity instanceof InterviewIndividualAssessment_1.InterviewIndividualAssessment ? interviewIndividualAssessmentIdOrEntity : { interviewIndividualAssessmentId: interviewIndividualAssessmentIdOrEntity });
    };
    return InterviewIndividualAssessmentRequestBuilder;
}(core_1.RequestBuilder));
exports.InterviewIndividualAssessmentRequestBuilder = InterviewIndividualAssessmentRequestBuilder;
//# sourceMappingURL=InterviewIndividualAssessmentRequestBuilder.js.map