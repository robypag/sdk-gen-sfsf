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
var FormReviewInfoSection_1 = require("./FormReviewInfoSection");
/**
 * Request builder class for operations supported on the [[FormReviewInfoSection]] entity.
 */
var FormReviewInfoSectionRequestBuilder = /** @class */ (function (_super) {
    __extends(FormReviewInfoSectionRequestBuilder, _super);
    function FormReviewInfoSectionRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FormReviewInfoSection` entity based on its keys.
     * @param formContentId Key property. See [[FormReviewInfoSection.formContentId]].
     * @param formDataId Key property. See [[FormReviewInfoSection.formDataId]].
     * @returns A request builder for creating requests to retrieve one `FormReviewInfoSection` entity based on its keys.
     */
    FormReviewInfoSectionRequestBuilder.prototype.getByKey = function (formContentId, formDataId) {
        return new core_1.GetByKeyRequestBuilder(FormReviewInfoSection_1.FormReviewInfoSection, {
            formContentId: formContentId,
            formDataId: formDataId
        });
    };
    /**
     * Returns a request builder for querying all `FormReviewInfoSection` entities.
     * @returns A request builder for creating requests to retrieve all `FormReviewInfoSection` entities.
     */
    FormReviewInfoSectionRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FormReviewInfoSection_1.FormReviewInfoSection);
    };
    return FormReviewInfoSectionRequestBuilder;
}(core_1.RequestBuilder));
exports.FormReviewInfoSectionRequestBuilder = FormReviewInfoSectionRequestBuilder;
//# sourceMappingURL=FormReviewInfoSectionRequestBuilder.js.map