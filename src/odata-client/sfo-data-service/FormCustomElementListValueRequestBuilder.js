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
var FormCustomElementListValue_1 = require("./FormCustomElementListValue");
/**
 * Request builder class for operations supported on the [[FormCustomElementListValue]] entity.
 */
var FormCustomElementListValueRequestBuilder = /** @class */ (function (_super) {
    __extends(FormCustomElementListValueRequestBuilder, _super);
    function FormCustomElementListValueRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FormCustomElementListValue` entity based on its keys.
     * @param elementKey Key property. See [[FormCustomElementListValue.elementKey]].
     * @param formContentId Key property. See [[FormCustomElementListValue.formContentId]].
     * @param formDataId Key property. See [[FormCustomElementListValue.formDataId]].
     * @param itemId Key property. See [[FormCustomElementListValue.itemId]].
     * @param name Key property. See [[FormCustomElementListValue.name]].
     * @param sectionIndex Key property. See [[FormCustomElementListValue.sectionIndex]].
     * @returns A request builder for creating requests to retrieve one `FormCustomElementListValue` entity based on its keys.
     */
    FormCustomElementListValueRequestBuilder.prototype.getByKey = function (elementKey, formContentId, formDataId, itemId, name, sectionIndex) {
        return new core_1.GetByKeyRequestBuilder(FormCustomElementListValue_1.FormCustomElementListValue, {
            elementKey: elementKey,
            formContentId: formContentId,
            formDataId: formDataId,
            itemId: itemId,
            name: name,
            sectionIndex: sectionIndex
        });
    };
    /**
     * Returns a request builder for querying all `FormCustomElementListValue` entities.
     * @returns A request builder for creating requests to retrieve all `FormCustomElementListValue` entities.
     */
    FormCustomElementListValueRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FormCustomElementListValue_1.FormCustomElementListValue);
    };
    return FormCustomElementListValueRequestBuilder;
}(core_1.RequestBuilder));
exports.FormCustomElementListValueRequestBuilder = FormCustomElementListValueRequestBuilder;
//# sourceMappingURL=FormCustomElementListValueRequestBuilder.js.map