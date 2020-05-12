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
var FormObjectiveOtherDetailsItem_1 = require("./FormObjectiveOtherDetailsItem");
/**
 * Request builder class for operations supported on the [[FormObjectiveOtherDetailsItem]] entity.
 */
var FormObjectiveOtherDetailsItemRequestBuilder = /** @class */ (function (_super) {
    __extends(FormObjectiveOtherDetailsItemRequestBuilder, _super);
    function FormObjectiveOtherDetailsItemRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FormObjectiveOtherDetailsItem` entity based on its keys.
     * @param formContentId Key property. See [[FormObjectiveOtherDetailsItem.formContentId]].
     * @param formDataId Key property. See [[FormObjectiveOtherDetailsItem.formDataId]].
     * @param itemId Key property. See [[FormObjectiveOtherDetailsItem.itemId]].
     * @param sectionIndex Key property. See [[FormObjectiveOtherDetailsItem.sectionIndex]].
     * @param type Key property. See [[FormObjectiveOtherDetailsItem.type]].
     * @returns A request builder for creating requests to retrieve one `FormObjectiveOtherDetailsItem` entity based on its keys.
     */
    FormObjectiveOtherDetailsItemRequestBuilder.prototype.getByKey = function (formContentId, formDataId, itemId, sectionIndex, type) {
        return new core_1.GetByKeyRequestBuilder(FormObjectiveOtherDetailsItem_1.FormObjectiveOtherDetailsItem, {
            formContentId: formContentId,
            formDataId: formDataId,
            itemId: itemId,
            sectionIndex: sectionIndex,
            type: type
        });
    };
    /**
     * Returns a request builder for querying all `FormObjectiveOtherDetailsItem` entities.
     * @returns A request builder for creating requests to retrieve all `FormObjectiveOtherDetailsItem` entities.
     */
    FormObjectiveOtherDetailsItemRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FormObjectiveOtherDetailsItem_1.FormObjectiveOtherDetailsItem);
    };
    return FormObjectiveOtherDetailsItemRequestBuilder;
}(core_1.RequestBuilder));
exports.FormObjectiveOtherDetailsItemRequestBuilder = FormObjectiveOtherDetailsItemRequestBuilder;
//# sourceMappingURL=FormObjectiveOtherDetailsItemRequestBuilder.js.map