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
var FormPerfPotSummarySection_1 = require("./FormPerfPotSummarySection");
/**
 * Request builder class for operations supported on the [[FormPerfPotSummarySection]] entity.
 */
var FormPerfPotSummarySectionRequestBuilder = /** @class */ (function (_super) {
    __extends(FormPerfPotSummarySectionRequestBuilder, _super);
    function FormPerfPotSummarySectionRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FormPerfPotSummarySection` entity based on its keys.
     * @param formContentId Key property. See [[FormPerfPotSummarySection.formContentId]].
     * @param formDataId Key property. See [[FormPerfPotSummarySection.formDataId]].
     * @returns A request builder for creating requests to retrieve one `FormPerfPotSummarySection` entity based on its keys.
     */
    FormPerfPotSummarySectionRequestBuilder.prototype.getByKey = function (formContentId, formDataId) {
        return new core_1.GetByKeyRequestBuilder(FormPerfPotSummarySection_1.FormPerfPotSummarySection, {
            formContentId: formContentId,
            formDataId: formDataId
        });
    };
    /**
     * Returns a request builder for querying all `FormPerfPotSummarySection` entities.
     * @returns A request builder for creating requests to retrieve all `FormPerfPotSummarySection` entities.
     */
    FormPerfPotSummarySectionRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FormPerfPotSummarySection_1.FormPerfPotSummarySection);
    };
    return FormPerfPotSummarySectionRequestBuilder;
}(core_1.RequestBuilder));
exports.FormPerfPotSummarySectionRequestBuilder = FormPerfPotSummarySectionRequestBuilder;
//# sourceMappingURL=FormPerfPotSummarySectionRequestBuilder.js.map