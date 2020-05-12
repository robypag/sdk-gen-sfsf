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
var Form360ParticipantCategory_1 = require("./Form360ParticipantCategory");
/**
 * Request builder class for operations supported on the [[Form360ParticipantCategory]] entity.
 */
var Form360ParticipantCategoryRequestBuilder = /** @class */ (function (_super) {
    __extends(Form360ParticipantCategoryRequestBuilder, _super);
    function Form360ParticipantCategoryRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Form360ParticipantCategory` entity based on its keys.
     * @param categoryValue Key property. See [[Form360ParticipantCategory.categoryValue]].
     * @param formContentId Key property. See [[Form360ParticipantCategory.formContentId]].
     * @param formDataId Key property. See [[Form360ParticipantCategory.formDataId]].
     * @returns A request builder for creating requests to retrieve one `Form360ParticipantCategory` entity based on its keys.
     */
    Form360ParticipantCategoryRequestBuilder.prototype.getByKey = function (categoryValue, formContentId, formDataId) {
        return new core_1.GetByKeyRequestBuilder(Form360ParticipantCategory_1.Form360ParticipantCategory, {
            categoryValue: categoryValue,
            formContentId: formContentId,
            formDataId: formDataId
        });
    };
    /**
     * Returns a request builder for querying all `Form360ParticipantCategory` entities.
     * @returns A request builder for creating requests to retrieve all `Form360ParticipantCategory` entities.
     */
    Form360ParticipantCategoryRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Form360ParticipantCategory_1.Form360ParticipantCategory);
    };
    return Form360ParticipantCategoryRequestBuilder;
}(core_1.RequestBuilder));
exports.Form360ParticipantCategoryRequestBuilder = Form360ParticipantCategoryRequestBuilder;
//# sourceMappingURL=Form360ParticipantCategoryRequestBuilder.js.map