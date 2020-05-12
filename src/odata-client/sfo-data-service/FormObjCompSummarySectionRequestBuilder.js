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
var FormObjCompSummarySection_1 = require("./FormObjCompSummarySection");
/**
 * Request builder class for operations supported on the [[FormObjCompSummarySection]] entity.
 */
var FormObjCompSummarySectionRequestBuilder = /** @class */ (function (_super) {
    __extends(FormObjCompSummarySectionRequestBuilder, _super);
    function FormObjCompSummarySectionRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FormObjCompSummarySection` entity based on its keys.
     * @param formContentId Key property. See [[FormObjCompSummarySection.formContentId]].
     * @param formDataId Key property. See [[FormObjCompSummarySection.formDataId]].
     * @returns A request builder for creating requests to retrieve one `FormObjCompSummarySection` entity based on its keys.
     */
    FormObjCompSummarySectionRequestBuilder.prototype.getByKey = function (formContentId, formDataId) {
        return new core_1.GetByKeyRequestBuilder(FormObjCompSummarySection_1.FormObjCompSummarySection, {
            formContentId: formContentId,
            formDataId: formDataId
        });
    };
    /**
     * Returns a request builder for querying all `FormObjCompSummarySection` entities.
     * @returns A request builder for creating requests to retrieve all `FormObjCompSummarySection` entities.
     */
    FormObjCompSummarySectionRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FormObjCompSummarySection_1.FormObjCompSummarySection);
    };
    return FormObjCompSummarySectionRequestBuilder;
}(core_1.RequestBuilder));
exports.FormObjCompSummarySectionRequestBuilder = FormObjCompSummarySectionRequestBuilder;
//# sourceMappingURL=FormObjCompSummarySectionRequestBuilder.js.map