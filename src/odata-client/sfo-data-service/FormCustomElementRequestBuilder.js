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
var FormCustomElement_1 = require("./FormCustomElement");
/**
 * Request builder class for operations supported on the [[FormCustomElement]] entity.
 */
var FormCustomElementRequestBuilder = /** @class */ (function (_super) {
    __extends(FormCustomElementRequestBuilder, _super);
    function FormCustomElementRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FormCustomElement` entity based on its keys.
     * @param elementKey Key property. See [[FormCustomElement.elementKey]].
     * @param formContentId Key property. See [[FormCustomElement.formContentId]].
     * @param formDataId Key property. See [[FormCustomElement.formDataId]].
     * @param itemId Key property. See [[FormCustomElement.itemId]].
     * @param sectionIndex Key property. See [[FormCustomElement.sectionIndex]].
     * @returns A request builder for creating requests to retrieve one `FormCustomElement` entity based on its keys.
     */
    FormCustomElementRequestBuilder.prototype.getByKey = function (elementKey, formContentId, formDataId, itemId, sectionIndex) {
        return new core_1.GetByKeyRequestBuilder(FormCustomElement_1.FormCustomElement, {
            elementKey: elementKey,
            formContentId: formContentId,
            formDataId: formDataId,
            itemId: itemId,
            sectionIndex: sectionIndex
        });
    };
    /**
     * Returns a request builder for querying all `FormCustomElement` entities.
     * @returns A request builder for creating requests to retrieve all `FormCustomElement` entities.
     */
    FormCustomElementRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FormCustomElement_1.FormCustomElement);
    };
    /**
     * Returns a request builder for creating a `FormCustomElement` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `FormCustomElement`.
     */
    FormCustomElementRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(FormCustomElement_1.FormCustomElement, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `FormCustomElement`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `FormCustomElement`.
     */
    FormCustomElementRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(FormCustomElement_1.FormCustomElement, entity);
    };
    return FormCustomElementRequestBuilder;
}(core_1.RequestBuilder));
exports.FormCustomElementRequestBuilder = FormCustomElementRequestBuilder;
//# sourceMappingURL=FormCustomElementRequestBuilder.js.map