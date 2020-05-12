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
var Form360Rater_1 = require("./Form360Rater");
/**
 * Request builder class for operations supported on the [[Form360Rater]] entity.
 */
var Form360RaterRequestBuilder = /** @class */ (function (_super) {
    __extends(Form360RaterRequestBuilder, _super);
    function Form360RaterRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Form360Rater` entity based on its keys.
     * @param formContentId Key property. See [[Form360Rater.formContentId]].
     * @param formDataId Key property. See [[Form360Rater.formDataId]].
     * @returns A request builder for creating requests to retrieve one `Form360Rater` entity based on its keys.
     */
    Form360RaterRequestBuilder.prototype.getByKey = function (formContentId, formDataId) {
        return new core_1.GetByKeyRequestBuilder(Form360Rater_1.Form360Rater, {
            formContentId: formContentId,
            formDataId: formDataId
        });
    };
    /**
     * Returns a request builder for querying all `Form360Rater` entities.
     * @returns A request builder for creating requests to retrieve all `Form360Rater` entities.
     */
    Form360RaterRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Form360Rater_1.Form360Rater);
    };
    return Form360RaterRequestBuilder;
}(core_1.RequestBuilder));
exports.Form360RaterRequestBuilder = Form360RaterRequestBuilder;
//# sourceMappingURL=Form360RaterRequestBuilder.js.map