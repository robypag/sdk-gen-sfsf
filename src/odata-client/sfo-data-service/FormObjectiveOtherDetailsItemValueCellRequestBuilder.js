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
var FormObjectiveOtherDetailsItemValueCell_1 = require("./FormObjectiveOtherDetailsItemValueCell");
/**
 * Request builder class for operations supported on the [[FormObjectiveOtherDetailsItemValueCell]] entity.
 */
var FormObjectiveOtherDetailsItemValueCellRequestBuilder = /** @class */ (function (_super) {
    __extends(FormObjectiveOtherDetailsItemValueCellRequestBuilder, _super);
    function FormObjectiveOtherDetailsItemValueCellRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FormObjectiveOtherDetailsItemValueCell` entity based on its keys.
     * @param formContentId Key property. See [[FormObjectiveOtherDetailsItemValueCell.formContentId]].
     * @param formDataId Key property. See [[FormObjectiveOtherDetailsItemValueCell.formDataId]].
     * @param itemId Key property. See [[FormObjectiveOtherDetailsItemValueCell.itemId]].
     * @param sectionIndex Key property. See [[FormObjectiveOtherDetailsItemValueCell.sectionIndex]].
     * @param type Key property. See [[FormObjectiveOtherDetailsItemValueCell.type]].
     * @returns A request builder for creating requests to retrieve one `FormObjectiveOtherDetailsItemValueCell` entity based on its keys.
     */
    FormObjectiveOtherDetailsItemValueCellRequestBuilder.prototype.getByKey = function (formContentId, formDataId, itemId, sectionIndex, type) {
        return new core_1.GetByKeyRequestBuilder(FormObjectiveOtherDetailsItemValueCell_1.FormObjectiveOtherDetailsItemValueCell, {
            formContentId: formContentId,
            formDataId: formDataId,
            itemId: itemId,
            sectionIndex: sectionIndex,
            type: type
        });
    };
    /**
     * Returns a request builder for querying all `FormObjectiveOtherDetailsItemValueCell` entities.
     * @returns A request builder for creating requests to retrieve all `FormObjectiveOtherDetailsItemValueCell` entities.
     */
    FormObjectiveOtherDetailsItemValueCellRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FormObjectiveOtherDetailsItemValueCell_1.FormObjectiveOtherDetailsItemValueCell);
    };
    return FormObjectiveOtherDetailsItemValueCellRequestBuilder;
}(core_1.RequestBuilder));
exports.FormObjectiveOtherDetailsItemValueCellRequestBuilder = FormObjectiveOtherDetailsItemValueCellRequestBuilder;
//# sourceMappingURL=FormObjectiveOtherDetailsItemValueCellRequestBuilder.js.map