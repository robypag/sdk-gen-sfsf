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
var FormRatingScaleValue_1 = require("./FormRatingScaleValue");
/**
 * Request builder class for operations supported on the [[FormRatingScaleValue]] entity.
 */
var FormRatingScaleValueRequestBuilder = /** @class */ (function (_super) {
    __extends(FormRatingScaleValueRequestBuilder, _super);
    function FormRatingScaleValueRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FormRatingScaleValue` entity based on its keys.
     * @param formContentId Key property. See [[FormRatingScaleValue.formContentId]].
     * @param formDataId Key property. See [[FormRatingScaleValue.formDataId]].
     * @param scaleId Key property. See [[FormRatingScaleValue.scaleId]].
     * @param sectionIndex Key property. See [[FormRatingScaleValue.sectionIndex]].
     * @param value Key property. See [[FormRatingScaleValue.value]].
     * @returns A request builder for creating requests to retrieve one `FormRatingScaleValue` entity based on its keys.
     */
    FormRatingScaleValueRequestBuilder.prototype.getByKey = function (formContentId, formDataId, scaleId, sectionIndex, value) {
        return new core_1.GetByKeyRequestBuilder(FormRatingScaleValue_1.FormRatingScaleValue, {
            formContentId: formContentId,
            formDataId: formDataId,
            scaleId: scaleId,
            sectionIndex: sectionIndex,
            value: value
        });
    };
    /**
     * Returns a request builder for querying all `FormRatingScaleValue` entities.
     * @returns A request builder for creating requests to retrieve all `FormRatingScaleValue` entities.
     */
    FormRatingScaleValueRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FormRatingScaleValue_1.FormRatingScaleValue);
    };
    return FormRatingScaleValueRequestBuilder;
}(core_1.RequestBuilder));
exports.FormRatingScaleValueRequestBuilder = FormRatingScaleValueRequestBuilder;
//# sourceMappingURL=FormRatingScaleValueRequestBuilder.js.map