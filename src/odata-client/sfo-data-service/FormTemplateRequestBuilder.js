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
var FormTemplate_1 = require("./FormTemplate");
/**
 * Request builder class for operations supported on the [[FormTemplate]] entity.
 */
var FormTemplateRequestBuilder = /** @class */ (function (_super) {
    __extends(FormTemplateRequestBuilder, _super);
    function FormTemplateRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FormTemplate` entity based on its keys.
     * @param formTemplateId Key property. See [[FormTemplate.formTemplateId]].
     * @returns A request builder for creating requests to retrieve one `FormTemplate` entity based on its keys.
     */
    FormTemplateRequestBuilder.prototype.getByKey = function (formTemplateId) {
        return new core_1.GetByKeyRequestBuilder(FormTemplate_1.FormTemplate, { formTemplateId: formTemplateId });
    };
    /**
     * Returns a request builder for querying all `FormTemplate` entities.
     * @returns A request builder for creating requests to retrieve all `FormTemplate` entities.
     */
    FormTemplateRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FormTemplate_1.FormTemplate);
    };
    return FormTemplateRequestBuilder;
}(core_1.RequestBuilder));
exports.FormTemplateRequestBuilder = FormTemplateRequestBuilder;
//# sourceMappingURL=FormTemplateRequestBuilder.js.map