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
var Form360SummaryViewSection_1 = require("./Form360SummaryViewSection");
/**
 * Request builder class for operations supported on the [[Form360SummaryViewSection]] entity.
 */
var Form360SummaryViewSectionRequestBuilder = /** @class */ (function (_super) {
    __extends(Form360SummaryViewSectionRequestBuilder, _super);
    function Form360SummaryViewSectionRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Form360SummaryViewSection` entity based on its keys.
     * @param formContentId Key property. See [[Form360SummaryViewSection.formContentId]].
     * @param formDataId Key property. See [[Form360SummaryViewSection.formDataId]].
     * @returns A request builder for creating requests to retrieve one `Form360SummaryViewSection` entity based on its keys.
     */
    Form360SummaryViewSectionRequestBuilder.prototype.getByKey = function (formContentId, formDataId) {
        return new core_1.GetByKeyRequestBuilder(Form360SummaryViewSection_1.Form360SummaryViewSection, {
            formContentId: formContentId,
            formDataId: formDataId
        });
    };
    /**
     * Returns a request builder for querying all `Form360SummaryViewSection` entities.
     * @returns A request builder for creating requests to retrieve all `Form360SummaryViewSection` entities.
     */
    Form360SummaryViewSectionRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Form360SummaryViewSection_1.Form360SummaryViewSection);
    };
    return Form360SummaryViewSectionRequestBuilder;
}(core_1.RequestBuilder));
exports.Form360SummaryViewSectionRequestBuilder = Form360SummaryViewSectionRequestBuilder;
//# sourceMappingURL=Form360SummaryViewSectionRequestBuilder.js.map