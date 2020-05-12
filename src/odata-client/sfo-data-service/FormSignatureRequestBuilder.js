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
var FormSignature_1 = require("./FormSignature");
/**
 * Request builder class for operations supported on the [[FormSignature]] entity.
 */
var FormSignatureRequestBuilder = /** @class */ (function (_super) {
    __extends(FormSignatureRequestBuilder, _super);
    function FormSignatureRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FormSignature` entity based on its keys.
     * @param formContentId Key property. See [[FormSignature.formContentId]].
     * @param formDataId Key property. See [[FormSignature.formDataId]].
     * @param sectionIndex Key property. See [[FormSignature.sectionIndex]].
     * @param stepId Key property. See [[FormSignature.stepId]].
     * @returns A request builder for creating requests to retrieve one `FormSignature` entity based on its keys.
     */
    FormSignatureRequestBuilder.prototype.getByKey = function (formContentId, formDataId, sectionIndex, stepId) {
        return new core_1.GetByKeyRequestBuilder(FormSignature_1.FormSignature, {
            formContentId: formContentId,
            formDataId: formDataId,
            sectionIndex: sectionIndex,
            stepId: stepId
        });
    };
    /**
     * Returns a request builder for querying all `FormSignature` entities.
     * @returns A request builder for creating requests to retrieve all `FormSignature` entities.
     */
    FormSignatureRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FormSignature_1.FormSignature);
    };
    return FormSignatureRequestBuilder;
}(core_1.RequestBuilder));
exports.FormSignatureRequestBuilder = FormSignatureRequestBuilder;
//# sourceMappingURL=FormSignatureRequestBuilder.js.map