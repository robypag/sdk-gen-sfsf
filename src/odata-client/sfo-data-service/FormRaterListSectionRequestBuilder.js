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
var FormRaterListSection_1 = require("./FormRaterListSection");
/**
 * Request builder class for operations supported on the [[FormRaterListSection]] entity.
 */
var FormRaterListSectionRequestBuilder = /** @class */ (function (_super) {
    __extends(FormRaterListSectionRequestBuilder, _super);
    function FormRaterListSectionRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FormRaterListSection` entity based on its keys.
     * @param formContentId Key property. See [[FormRaterListSection.formContentId]].
     * @param formDataId Key property. See [[FormRaterListSection.formDataId]].
     * @returns A request builder for creating requests to retrieve one `FormRaterListSection` entity based on its keys.
     */
    FormRaterListSectionRequestBuilder.prototype.getByKey = function (formContentId, formDataId) {
        return new core_1.GetByKeyRequestBuilder(FormRaterListSection_1.FormRaterListSection, {
            formContentId: formContentId,
            formDataId: formDataId
        });
    };
    /**
     * Returns a request builder for querying all `FormRaterListSection` entities.
     * @returns A request builder for creating requests to retrieve all `FormRaterListSection` entities.
     */
    FormRaterListSectionRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FormRaterListSection_1.FormRaterListSection);
    };
    return FormRaterListSectionRequestBuilder;
}(core_1.RequestBuilder));
exports.FormRaterListSectionRequestBuilder = FormRaterListSectionRequestBuilder;
//# sourceMappingURL=FormRaterListSectionRequestBuilder.js.map