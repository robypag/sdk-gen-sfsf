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
var FormUserInformationSection_1 = require("./FormUserInformationSection");
/**
 * Request builder class for operations supported on the [[FormUserInformationSection]] entity.
 */
var FormUserInformationSectionRequestBuilder = /** @class */ (function (_super) {
    __extends(FormUserInformationSectionRequestBuilder, _super);
    function FormUserInformationSectionRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FormUserInformationSection` entity based on its keys.
     * @param formContentId Key property. See [[FormUserInformationSection.formContentId]].
     * @param formDataId Key property. See [[FormUserInformationSection.formDataId]].
     * @returns A request builder for creating requests to retrieve one `FormUserInformationSection` entity based on its keys.
     */
    FormUserInformationSectionRequestBuilder.prototype.getByKey = function (formContentId, formDataId) {
        return new core_1.GetByKeyRequestBuilder(FormUserInformationSection_1.FormUserInformationSection, {
            formContentId: formContentId,
            formDataId: formDataId
        });
    };
    /**
     * Returns a request builder for querying all `FormUserInformationSection` entities.
     * @returns A request builder for creating requests to retrieve all `FormUserInformationSection` entities.
     */
    FormUserInformationSectionRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FormUserInformationSection_1.FormUserInformationSection);
    };
    return FormUserInformationSectionRequestBuilder;
}(core_1.RequestBuilder));
exports.FormUserInformationSectionRequestBuilder = FormUserInformationSectionRequestBuilder;
//# sourceMappingURL=FormUserInformationSectionRequestBuilder.js.map