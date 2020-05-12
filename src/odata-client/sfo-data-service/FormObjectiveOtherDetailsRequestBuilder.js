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
var FormObjectiveOtherDetails_1 = require("./FormObjectiveOtherDetails");
/**
 * Request builder class for operations supported on the [[FormObjectiveOtherDetails]] entity.
 */
var FormObjectiveOtherDetailsRequestBuilder = /** @class */ (function (_super) {
    __extends(FormObjectiveOtherDetailsRequestBuilder, _super);
    function FormObjectiveOtherDetailsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FormObjectiveOtherDetails` entity based on its keys.
     * @param formContentId Key property. See [[FormObjectiveOtherDetails.formContentId]].
     * @param formDataId Key property. See [[FormObjectiveOtherDetails.formDataId]].
     * @param itemId Key property. See [[FormObjectiveOtherDetails.itemId]].
     * @param sectionIndex Key property. See [[FormObjectiveOtherDetails.sectionIndex]].
     * @returns A request builder for creating requests to retrieve one `FormObjectiveOtherDetails` entity based on its keys.
     */
    FormObjectiveOtherDetailsRequestBuilder.prototype.getByKey = function (formContentId, formDataId, itemId, sectionIndex) {
        return new core_1.GetByKeyRequestBuilder(FormObjectiveOtherDetails_1.FormObjectiveOtherDetails, {
            formContentId: formContentId,
            formDataId: formDataId,
            itemId: itemId,
            sectionIndex: sectionIndex
        });
    };
    /**
     * Returns a request builder for querying all `FormObjectiveOtherDetails` entities.
     * @returns A request builder for creating requests to retrieve all `FormObjectiveOtherDetails` entities.
     */
    FormObjectiveOtherDetailsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FormObjectiveOtherDetails_1.FormObjectiveOtherDetails);
    };
    return FormObjectiveOtherDetailsRequestBuilder;
}(core_1.RequestBuilder));
exports.FormObjectiveOtherDetailsRequestBuilder = FormObjectiveOtherDetailsRequestBuilder;
//# sourceMappingURL=FormObjectiveOtherDetailsRequestBuilder.js.map