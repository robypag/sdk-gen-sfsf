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
var FormSignatureSection_1 = require("./FormSignatureSection");
/**
 * Request builder class for operations supported on the [[FormSignatureSection]] entity.
 */
var FormSignatureSectionRequestBuilder = /** @class */ (function (_super) {
    __extends(FormSignatureSectionRequestBuilder, _super);
    function FormSignatureSectionRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FormSignatureSection` entity based on its keys.
     * @param formContentId Key property. See [[FormSignatureSection.formContentId]].
     * @param formDataId Key property. See [[FormSignatureSection.formDataId]].
     * @param sectionIndex Key property. See [[FormSignatureSection.sectionIndex]].
     * @returns A request builder for creating requests to retrieve one `FormSignatureSection` entity based on its keys.
     */
    FormSignatureSectionRequestBuilder.prototype.getByKey = function (formContentId, formDataId, sectionIndex) {
        return new core_1.GetByKeyRequestBuilder(FormSignatureSection_1.FormSignatureSection, {
            formContentId: formContentId,
            formDataId: formDataId,
            sectionIndex: sectionIndex
        });
    };
    /**
     * Returns a request builder for querying all `FormSignatureSection` entities.
     * @returns A request builder for creating requests to retrieve all `FormSignatureSection` entities.
     */
    FormSignatureSectionRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FormSignatureSection_1.FormSignatureSection);
    };
    return FormSignatureSectionRequestBuilder;
}(core_1.RequestBuilder));
exports.FormSignatureSectionRequestBuilder = FormSignatureSectionRequestBuilder;
//# sourceMappingURL=FormSignatureSectionRequestBuilder.js.map