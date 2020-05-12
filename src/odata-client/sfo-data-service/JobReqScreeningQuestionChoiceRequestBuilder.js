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
var JobReqScreeningQuestionChoice_1 = require("./JobReqScreeningQuestionChoice");
/**
 * Request builder class for operations supported on the [[JobReqScreeningQuestionChoice]] entity.
 */
var JobReqScreeningQuestionChoiceRequestBuilder = /** @class */ (function (_super) {
    __extends(JobReqScreeningQuestionChoiceRequestBuilder, _super);
    function JobReqScreeningQuestionChoiceRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobReqScreeningQuestionChoice` entity based on its keys.
     * @param locale Key property. See [[JobReqScreeningQuestionChoice.locale]].
     * @param optionId Key property. See [[JobReqScreeningQuestionChoice.optionId]].
     * @param optionValue Key property. See [[JobReqScreeningQuestionChoice.optionValue]].
     * @returns A request builder for creating requests to retrieve one `JobReqScreeningQuestionChoice` entity based on its keys.
     */
    JobReqScreeningQuestionChoiceRequestBuilder.prototype.getByKey = function (locale, optionId, optionValue) {
        return new core_1.GetByKeyRequestBuilder(JobReqScreeningQuestionChoice_1.JobReqScreeningQuestionChoice, {
            locale: locale,
            optionId: optionId,
            optionValue: optionValue
        });
    };
    /**
     * Returns a request builder for querying all `JobReqScreeningQuestionChoice` entities.
     * @returns A request builder for creating requests to retrieve all `JobReqScreeningQuestionChoice` entities.
     */
    JobReqScreeningQuestionChoiceRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobReqScreeningQuestionChoice_1.JobReqScreeningQuestionChoice);
    };
    return JobReqScreeningQuestionChoiceRequestBuilder;
}(core_1.RequestBuilder));
exports.JobReqScreeningQuestionChoiceRequestBuilder = JobReqScreeningQuestionChoiceRequestBuilder;
//# sourceMappingURL=JobReqScreeningQuestionChoiceRequestBuilder.js.map