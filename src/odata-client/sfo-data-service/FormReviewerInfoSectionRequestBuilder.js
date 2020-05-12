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
var FormReviewerInfoSection_1 = require("./FormReviewerInfoSection");
/**
 * Request builder class for operations supported on the [[FormReviewerInfoSection]] entity.
 */
var FormReviewerInfoSectionRequestBuilder = /** @class */ (function (_super) {
    __extends(FormReviewerInfoSectionRequestBuilder, _super);
    function FormReviewerInfoSectionRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FormReviewerInfoSection` entity based on its keys.
     * @param formContentId Key property. See [[FormReviewerInfoSection.formContentId]].
     * @param formDataId Key property. See [[FormReviewerInfoSection.formDataId]].
     * @returns A request builder for creating requests to retrieve one `FormReviewerInfoSection` entity based on its keys.
     */
    FormReviewerInfoSectionRequestBuilder.prototype.getByKey = function (formContentId, formDataId) {
        return new core_1.GetByKeyRequestBuilder(FormReviewerInfoSection_1.FormReviewerInfoSection, {
            formContentId: formContentId,
            formDataId: formDataId
        });
    };
    /**
     * Returns a request builder for querying all `FormReviewerInfoSection` entities.
     * @returns A request builder for creating requests to retrieve all `FormReviewerInfoSection` entities.
     */
    FormReviewerInfoSectionRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FormReviewerInfoSection_1.FormReviewerInfoSection);
    };
    return FormReviewerInfoSectionRequestBuilder;
}(core_1.RequestBuilder));
exports.FormReviewerInfoSectionRequestBuilder = FormReviewerInfoSectionRequestBuilder;
//# sourceMappingURL=FormReviewerInfoSectionRequestBuilder.js.map