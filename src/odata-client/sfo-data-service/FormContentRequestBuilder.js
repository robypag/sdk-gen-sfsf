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
var FormContent_1 = require("./FormContent");
/**
 * Request builder class for operations supported on the [[FormContent]] entity.
 */
var FormContentRequestBuilder = /** @class */ (function (_super) {
    __extends(FormContentRequestBuilder, _super);
    function FormContentRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FormContent` entity based on its keys.
     * @param formContentId Key property. See [[FormContent.formContentId]].
     * @param formDataId Key property. See [[FormContent.formDataId]].
     * @returns A request builder for creating requests to retrieve one `FormContent` entity based on its keys.
     */
    FormContentRequestBuilder.prototype.getByKey = function (formContentId, formDataId) {
        return new core_1.GetByKeyRequestBuilder(FormContent_1.FormContent, {
            formContentId: formContentId,
            formDataId: formDataId
        });
    };
    /**
     * Returns a request builder for querying all `FormContent` entities.
     * @returns A request builder for creating requests to retrieve all `FormContent` entities.
     */
    FormContentRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FormContent_1.FormContent);
    };
    return FormContentRequestBuilder;
}(core_1.RequestBuilder));
exports.FormContentRequestBuilder = FormContentRequestBuilder;
//# sourceMappingURL=FormContentRequestBuilder.js.map