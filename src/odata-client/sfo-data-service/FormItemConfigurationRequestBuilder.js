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
var FormItemConfiguration_1 = require("./FormItemConfiguration");
/**
 * Request builder class for operations supported on the [[FormItemConfiguration]] entity.
 */
var FormItemConfigurationRequestBuilder = /** @class */ (function (_super) {
    __extends(FormItemConfigurationRequestBuilder, _super);
    function FormItemConfigurationRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FormItemConfiguration` entity based on its keys.
     * @param formContentId Key property. See [[FormItemConfiguration.formContentId]].
     * @param formDataId Key property. See [[FormItemConfiguration.formDataId]].
     * @param itemId Key property. See [[FormItemConfiguration.itemId]].
     * @param sectionIndex Key property. See [[FormItemConfiguration.sectionIndex]].
     * @returns A request builder for creating requests to retrieve one `FormItemConfiguration` entity based on its keys.
     */
    FormItemConfigurationRequestBuilder.prototype.getByKey = function (formContentId, formDataId, itemId, sectionIndex) {
        return new core_1.GetByKeyRequestBuilder(FormItemConfiguration_1.FormItemConfiguration, {
            formContentId: formContentId,
            formDataId: formDataId,
            itemId: itemId,
            sectionIndex: sectionIndex
        });
    };
    /**
     * Returns a request builder for querying all `FormItemConfiguration` entities.
     * @returns A request builder for creating requests to retrieve all `FormItemConfiguration` entities.
     */
    FormItemConfigurationRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FormItemConfiguration_1.FormItemConfiguration);
    };
    return FormItemConfigurationRequestBuilder;
}(core_1.RequestBuilder));
exports.FormItemConfigurationRequestBuilder = FormItemConfigurationRequestBuilder;
//# sourceMappingURL=FormItemConfigurationRequestBuilder.js.map