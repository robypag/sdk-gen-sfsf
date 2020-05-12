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
var Form360SummaryViewCategory_1 = require("./Form360SummaryViewCategory");
/**
 * Request builder class for operations supported on the [[Form360SummaryViewCategory]] entity.
 */
var Form360SummaryViewCategoryRequestBuilder = /** @class */ (function (_super) {
    __extends(Form360SummaryViewCategoryRequestBuilder, _super);
    function Form360SummaryViewCategoryRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Form360SummaryViewCategory` entity based on its keys.
     * @param category Key property. See [[Form360SummaryViewCategory.category]].
     * @param formContentId Key property. See [[Form360SummaryViewCategory.formContentId]].
     * @param formDataId Key property. See [[Form360SummaryViewCategory.formDataId]].
     * @returns A request builder for creating requests to retrieve one `Form360SummaryViewCategory` entity based on its keys.
     */
    Form360SummaryViewCategoryRequestBuilder.prototype.getByKey = function (category, formContentId, formDataId) {
        return new core_1.GetByKeyRequestBuilder(Form360SummaryViewCategory_1.Form360SummaryViewCategory, {
            category: category,
            formContentId: formContentId,
            formDataId: formDataId
        });
    };
    /**
     * Returns a request builder for querying all `Form360SummaryViewCategory` entities.
     * @returns A request builder for creating requests to retrieve all `Form360SummaryViewCategory` entities.
     */
    Form360SummaryViewCategoryRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Form360SummaryViewCategory_1.Form360SummaryViewCategory);
    };
    return Form360SummaryViewCategoryRequestBuilder;
}(core_1.RequestBuilder));
exports.Form360SummaryViewCategoryRequestBuilder = Form360SummaryViewCategoryRequestBuilder;
//# sourceMappingURL=Form360SummaryViewCategoryRequestBuilder.js.map