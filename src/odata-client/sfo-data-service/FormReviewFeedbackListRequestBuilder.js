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
var FormReviewFeedbackList_1 = require("./FormReviewFeedbackList");
/**
 * Request builder class for operations supported on the [[FormReviewFeedbackList]] entity.
 */
var FormReviewFeedbackListRequestBuilder = /** @class */ (function (_super) {
    __extends(FormReviewFeedbackListRequestBuilder, _super);
    function FormReviewFeedbackListRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FormReviewFeedbackList` entity based on its keys.
     * @param formDataId Key property. See [[FormReviewFeedbackList.formDataId]].
     * @returns A request builder for creating requests to retrieve one `FormReviewFeedbackList` entity based on its keys.
     */
    FormReviewFeedbackListRequestBuilder.prototype.getByKey = function (formDataId) {
        return new core_1.GetByKeyRequestBuilder(FormReviewFeedbackList_1.FormReviewFeedbackList, { formDataId: formDataId });
    };
    /**
     * Returns a request builder for querying all `FormReviewFeedbackList` entities.
     * @returns A request builder for creating requests to retrieve all `FormReviewFeedbackList` entities.
     */
    FormReviewFeedbackListRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FormReviewFeedbackList_1.FormReviewFeedbackList);
    };
    return FormReviewFeedbackListRequestBuilder;
}(core_1.RequestBuilder));
exports.FormReviewFeedbackListRequestBuilder = FormReviewFeedbackListRequestBuilder;
//# sourceMappingURL=FormReviewFeedbackListRequestBuilder.js.map