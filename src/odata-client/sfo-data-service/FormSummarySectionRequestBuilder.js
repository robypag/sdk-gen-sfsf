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
var FormSummarySection_1 = require("./FormSummarySection");
/**
 * Request builder class for operations supported on the [[FormSummarySection]] entity.
 */
var FormSummarySectionRequestBuilder = /** @class */ (function (_super) {
    __extends(FormSummarySectionRequestBuilder, _super);
    function FormSummarySectionRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FormSummarySection` entity based on its keys.
     * @param formContentId Key property. See [[FormSummarySection.formContentId]].
     * @param formDataId Key property. See [[FormSummarySection.formDataId]].
     * @returns A request builder for creating requests to retrieve one `FormSummarySection` entity based on its keys.
     */
    FormSummarySectionRequestBuilder.prototype.getByKey = function (formContentId, formDataId) {
        return new core_1.GetByKeyRequestBuilder(FormSummarySection_1.FormSummarySection, {
            formContentId: formContentId,
            formDataId: formDataId
        });
    };
    /**
     * Returns a request builder for querying all `FormSummarySection` entities.
     * @returns A request builder for creating requests to retrieve all `FormSummarySection` entities.
     */
    FormSummarySectionRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FormSummarySection_1.FormSummarySection);
    };
    return FormSummarySectionRequestBuilder;
}(core_1.RequestBuilder));
exports.FormSummarySectionRequestBuilder = FormSummarySectionRequestBuilder;
//# sourceMappingURL=FormSummarySectionRequestBuilder.js.map