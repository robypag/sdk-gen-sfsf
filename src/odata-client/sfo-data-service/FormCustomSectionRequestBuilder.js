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
var FormCustomSection_1 = require("./FormCustomSection");
/**
 * Request builder class for operations supported on the [[FormCustomSection]] entity.
 */
var FormCustomSectionRequestBuilder = /** @class */ (function (_super) {
    __extends(FormCustomSectionRequestBuilder, _super);
    function FormCustomSectionRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FormCustomSection` entity based on its keys.
     * @param formContentId Key property. See [[FormCustomSection.formContentId]].
     * @param formDataId Key property. See [[FormCustomSection.formDataId]].
     * @param sectionIndex Key property. See [[FormCustomSection.sectionIndex]].
     * @returns A request builder for creating requests to retrieve one `FormCustomSection` entity based on its keys.
     */
    FormCustomSectionRequestBuilder.prototype.getByKey = function (formContentId, formDataId, sectionIndex) {
        return new core_1.GetByKeyRequestBuilder(FormCustomSection_1.FormCustomSection, {
            formContentId: formContentId,
            formDataId: formDataId,
            sectionIndex: sectionIndex
        });
    };
    /**
     * Returns a request builder for querying all `FormCustomSection` entities.
     * @returns A request builder for creating requests to retrieve all `FormCustomSection` entities.
     */
    FormCustomSectionRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FormCustomSection_1.FormCustomSection);
    };
    /**
     * Returns a request builder for creating a `FormCustomSection` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `FormCustomSection`.
     */
    FormCustomSectionRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(FormCustomSection_1.FormCustomSection, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `FormCustomSection`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `FormCustomSection`.
     */
    FormCustomSectionRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(FormCustomSection_1.FormCustomSection, entity);
    };
    return FormCustomSectionRequestBuilder;
}(core_1.RequestBuilder));
exports.FormCustomSectionRequestBuilder = FormCustomSectionRequestBuilder;
//# sourceMappingURL=FormCustomSectionRequestBuilder.js.map