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
var FormPmReviewContentDetail_1 = require("./FormPmReviewContentDetail");
/**
 * Request builder class for operations supported on the [[FormPmReviewContentDetail]] entity.
 */
var FormPmReviewContentDetailRequestBuilder = /** @class */ (function (_super) {
    __extends(FormPmReviewContentDetailRequestBuilder, _super);
    function FormPmReviewContentDetailRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FormPmReviewContentDetail` entity based on its keys.
     * @param formContentId Key property. See [[FormPmReviewContentDetail.formContentId]].
     * @param formDataId Key property. See [[FormPmReviewContentDetail.formDataId]].
     * @returns A request builder for creating requests to retrieve one `FormPmReviewContentDetail` entity based on its keys.
     */
    FormPmReviewContentDetailRequestBuilder.prototype.getByKey = function (formContentId, formDataId) {
        return new core_1.GetByKeyRequestBuilder(FormPmReviewContentDetail_1.FormPmReviewContentDetail, {
            formContentId: formContentId,
            formDataId: formDataId
        });
    };
    /**
     * Returns a request builder for querying all `FormPmReviewContentDetail` entities.
     * @returns A request builder for creating requests to retrieve all `FormPmReviewContentDetail` entities.
     */
    FormPmReviewContentDetailRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FormPmReviewContentDetail_1.FormPmReviewContentDetail);
    };
    return FormPmReviewContentDetailRequestBuilder;
}(core_1.RequestBuilder));
exports.FormPmReviewContentDetailRequestBuilder = FormPmReviewContentDetailRequestBuilder;
//# sourceMappingURL=FormPmReviewContentDetailRequestBuilder.js.map