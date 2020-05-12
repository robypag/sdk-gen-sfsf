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
var FormIntroductionSection_1 = require("./FormIntroductionSection");
/**
 * Request builder class for operations supported on the [[FormIntroductionSection]] entity.
 */
var FormIntroductionSectionRequestBuilder = /** @class */ (function (_super) {
    __extends(FormIntroductionSectionRequestBuilder, _super);
    function FormIntroductionSectionRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FormIntroductionSection` entity based on its keys.
     * @param formContentId Key property. See [[FormIntroductionSection.formContentId]].
     * @param formDataId Key property. See [[FormIntroductionSection.formDataId]].
     * @returns A request builder for creating requests to retrieve one `FormIntroductionSection` entity based on its keys.
     */
    FormIntroductionSectionRequestBuilder.prototype.getByKey = function (formContentId, formDataId) {
        return new core_1.GetByKeyRequestBuilder(FormIntroductionSection_1.FormIntroductionSection, {
            formContentId: formContentId,
            formDataId: formDataId
        });
    };
    /**
     * Returns a request builder for querying all `FormIntroductionSection` entities.
     * @returns A request builder for creating requests to retrieve all `FormIntroductionSection` entities.
     */
    FormIntroductionSectionRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FormIntroductionSection_1.FormIntroductionSection);
    };
    return FormIntroductionSectionRequestBuilder;
}(core_1.RequestBuilder));
exports.FormIntroductionSectionRequestBuilder = FormIntroductionSectionRequestBuilder;
//# sourceMappingURL=FormIntroductionSectionRequestBuilder.js.map