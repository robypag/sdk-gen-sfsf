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
var Form360RaterSection_1 = require("./Form360RaterSection");
/**
 * Request builder class for operations supported on the [[Form360RaterSection]] entity.
 */
var Form360RaterSectionRequestBuilder = /** @class */ (function (_super) {
    __extends(Form360RaterSectionRequestBuilder, _super);
    function Form360RaterSectionRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Form360RaterSection` entity based on its keys.
     * @param formContentId Key property. See [[Form360RaterSection.formContentId]].
     * @param formDataId Key property. See [[Form360RaterSection.formDataId]].
     * @returns A request builder for creating requests to retrieve one `Form360RaterSection` entity based on its keys.
     */
    Form360RaterSectionRequestBuilder.prototype.getByKey = function (formContentId, formDataId) {
        return new core_1.GetByKeyRequestBuilder(Form360RaterSection_1.Form360RaterSection, {
            formContentId: formContentId,
            formDataId: formDataId
        });
    };
    /**
     * Returns a request builder for querying all `Form360RaterSection` entities.
     * @returns A request builder for creating requests to retrieve all `Form360RaterSection` entities.
     */
    Form360RaterSectionRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Form360RaterSection_1.Form360RaterSection);
    };
    return Form360RaterSectionRequestBuilder;
}(core_1.RequestBuilder));
exports.Form360RaterSectionRequestBuilder = Form360RaterSectionRequestBuilder;
//# sourceMappingURL=Form360RaterSectionRequestBuilder.js.map