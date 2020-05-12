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
var FormJobDescSection_1 = require("./FormJobDescSection");
/**
 * Request builder class for operations supported on the [[FormJobDescSection]] entity.
 */
var FormJobDescSectionRequestBuilder = /** @class */ (function (_super) {
    __extends(FormJobDescSectionRequestBuilder, _super);
    function FormJobDescSectionRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FormJobDescSection` entity based on its keys.
     * @param formContentId Key property. See [[FormJobDescSection.formContentId]].
     * @param formDataId Key property. See [[FormJobDescSection.formDataId]].
     * @param sectionIndex Key property. See [[FormJobDescSection.sectionIndex]].
     * @returns A request builder for creating requests to retrieve one `FormJobDescSection` entity based on its keys.
     */
    FormJobDescSectionRequestBuilder.prototype.getByKey = function (formContentId, formDataId, sectionIndex) {
        return new core_1.GetByKeyRequestBuilder(FormJobDescSection_1.FormJobDescSection, {
            formContentId: formContentId,
            formDataId: formDataId,
            sectionIndex: sectionIndex
        });
    };
    /**
     * Returns a request builder for querying all `FormJobDescSection` entities.
     * @returns A request builder for creating requests to retrieve all `FormJobDescSection` entities.
     */
    FormJobDescSectionRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FormJobDescSection_1.FormJobDescSection);
    };
    return FormJobDescSectionRequestBuilder;
}(core_1.RequestBuilder));
exports.FormJobDescSectionRequestBuilder = FormJobDescSectionRequestBuilder;
//# sourceMappingURL=FormJobDescSectionRequestBuilder.js.map