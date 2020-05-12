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
var FormObjectiveOtherDetailsItemCol_1 = require("./FormObjectiveOtherDetailsItemCol");
/**
 * Request builder class for operations supported on the [[FormObjectiveOtherDetailsItemCol]] entity.
 */
var FormObjectiveOtherDetailsItemColRequestBuilder = /** @class */ (function (_super) {
    __extends(FormObjectiveOtherDetailsItemColRequestBuilder, _super);
    function FormObjectiveOtherDetailsItemColRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FormObjectiveOtherDetailsItemCol` entity based on its keys.
     * @param formContentId Key property. See [[FormObjectiveOtherDetailsItemCol.formContentId]].
     * @param formDataId Key property. See [[FormObjectiveOtherDetailsItemCol.formDataId]].
     * @param itemId Key property. See [[FormObjectiveOtherDetailsItemCol.itemId]].
     * @param sectionIndex Key property. See [[FormObjectiveOtherDetailsItemCol.sectionIndex]].
     * @param type Key property. See [[FormObjectiveOtherDetailsItemCol.type]].
     * @returns A request builder for creating requests to retrieve one `FormObjectiveOtherDetailsItemCol` entity based on its keys.
     */
    FormObjectiveOtherDetailsItemColRequestBuilder.prototype.getByKey = function (formContentId, formDataId, itemId, sectionIndex, type) {
        return new core_1.GetByKeyRequestBuilder(FormObjectiveOtherDetailsItemCol_1.FormObjectiveOtherDetailsItemCol, {
            formContentId: formContentId,
            formDataId: formDataId,
            itemId: itemId,
            sectionIndex: sectionIndex,
            type: type
        });
    };
    /**
     * Returns a request builder for querying all `FormObjectiveOtherDetailsItemCol` entities.
     * @returns A request builder for creating requests to retrieve all `FormObjectiveOtherDetailsItemCol` entities.
     */
    FormObjectiveOtherDetailsItemColRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FormObjectiveOtherDetailsItemCol_1.FormObjectiveOtherDetailsItemCol);
    };
    return FormObjectiveOtherDetailsItemColRequestBuilder;
}(core_1.RequestBuilder));
exports.FormObjectiveOtherDetailsItemColRequestBuilder = FormObjectiveOtherDetailsItemColRequestBuilder;
//# sourceMappingURL=FormObjectiveOtherDetailsItemColRequestBuilder.js.map