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
var FormSectionConfiguration_1 = require("./FormSectionConfiguration");
/**
 * Request builder class for operations supported on the [[FormSectionConfiguration]] entity.
 */
var FormSectionConfigurationRequestBuilder = /** @class */ (function (_super) {
    __extends(FormSectionConfigurationRequestBuilder, _super);
    function FormSectionConfigurationRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FormSectionConfiguration` entity based on its keys.
     * @param formContentId Key property. See [[FormSectionConfiguration.formContentId]].
     * @param formDataId Key property. See [[FormSectionConfiguration.formDataId]].
     * @param sectionIndex Key property. See [[FormSectionConfiguration.sectionIndex]].
     * @returns A request builder for creating requests to retrieve one `FormSectionConfiguration` entity based on its keys.
     */
    FormSectionConfigurationRequestBuilder.prototype.getByKey = function (formContentId, formDataId, sectionIndex) {
        return new core_1.GetByKeyRequestBuilder(FormSectionConfiguration_1.FormSectionConfiguration, {
            formContentId: formContentId,
            formDataId: formDataId,
            sectionIndex: sectionIndex
        });
    };
    /**
     * Returns a request builder for querying all `FormSectionConfiguration` entities.
     * @returns A request builder for creating requests to retrieve all `FormSectionConfiguration` entities.
     */
    FormSectionConfigurationRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FormSectionConfiguration_1.FormSectionConfiguration);
    };
    return FormSectionConfigurationRequestBuilder;
}(core_1.RequestBuilder));
exports.FormSectionConfigurationRequestBuilder = FormSectionConfigurationRequestBuilder;
//# sourceMappingURL=FormSectionConfigurationRequestBuilder.js.map