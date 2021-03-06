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
var FormRatingScale_1 = require("./FormRatingScale");
/**
 * Request builder class for operations supported on the [[FormRatingScale]] entity.
 */
var FormRatingScaleRequestBuilder = /** @class */ (function (_super) {
    __extends(FormRatingScaleRequestBuilder, _super);
    function FormRatingScaleRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FormRatingScale` entity based on its keys.
     * @param formContentId Key property. See [[FormRatingScale.formContentId]].
     * @param formDataId Key property. See [[FormRatingScale.formDataId]].
     * @param sectionIndex Key property. See [[FormRatingScale.sectionIndex]].
     * @returns A request builder for creating requests to retrieve one `FormRatingScale` entity based on its keys.
     */
    FormRatingScaleRequestBuilder.prototype.getByKey = function (formContentId, formDataId, sectionIndex) {
        return new core_1.GetByKeyRequestBuilder(FormRatingScale_1.FormRatingScale, {
            formContentId: formContentId,
            formDataId: formDataId,
            sectionIndex: sectionIndex
        });
    };
    /**
     * Returns a request builder for querying all `FormRatingScale` entities.
     * @returns A request builder for creating requests to retrieve all `FormRatingScale` entities.
     */
    FormRatingScaleRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FormRatingScale_1.FormRatingScale);
    };
    return FormRatingScaleRequestBuilder;
}(core_1.RequestBuilder));
exports.FormRatingScaleRequestBuilder = FormRatingScaleRequestBuilder;
//# sourceMappingURL=FormRatingScaleRequestBuilder.js.map