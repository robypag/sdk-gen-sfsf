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
var Form360ReviewContentDetail_1 = require("./Form360ReviewContentDetail");
/**
 * Request builder class for operations supported on the [[Form360ReviewContentDetail]] entity.
 */
var Form360ReviewContentDetailRequestBuilder = /** @class */ (function (_super) {
    __extends(Form360ReviewContentDetailRequestBuilder, _super);
    function Form360ReviewContentDetailRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Form360ReviewContentDetail` entity based on its keys.
     * @param formContentId Key property. See [[Form360ReviewContentDetail.formContentId]].
     * @param formDataId Key property. See [[Form360ReviewContentDetail.formDataId]].
     * @returns A request builder for creating requests to retrieve one `Form360ReviewContentDetail` entity based on its keys.
     */
    Form360ReviewContentDetailRequestBuilder.prototype.getByKey = function (formContentId, formDataId) {
        return new core_1.GetByKeyRequestBuilder(Form360ReviewContentDetail_1.Form360ReviewContentDetail, {
            formContentId: formContentId,
            formDataId: formDataId
        });
    };
    /**
     * Returns a request builder for querying all `Form360ReviewContentDetail` entities.
     * @returns A request builder for creating requests to retrieve all `Form360ReviewContentDetail` entities.
     */
    Form360ReviewContentDetailRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Form360ReviewContentDetail_1.Form360ReviewContentDetail);
    };
    return Form360ReviewContentDetailRequestBuilder;
}(core_1.RequestBuilder));
exports.Form360ReviewContentDetailRequestBuilder = Form360ReviewContentDetailRequestBuilder;
//# sourceMappingURL=Form360ReviewContentDetailRequestBuilder.js.map