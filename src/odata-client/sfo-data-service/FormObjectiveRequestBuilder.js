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
var FormObjective_1 = require("./FormObjective");
/**
 * Request builder class for operations supported on the [[FormObjective]] entity.
 */
var FormObjectiveRequestBuilder = /** @class */ (function (_super) {
    __extends(FormObjectiveRequestBuilder, _super);
    function FormObjectiveRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FormObjective` entity based on its keys.
     * @param formContentId Key property. See [[FormObjective.formContentId]].
     * @param formDataId Key property. See [[FormObjective.formDataId]].
     * @param itemId Key property. See [[FormObjective.itemId]].
     * @param sectionIndex Key property. See [[FormObjective.sectionIndex]].
     * @returns A request builder for creating requests to retrieve one `FormObjective` entity based on its keys.
     */
    FormObjectiveRequestBuilder.prototype.getByKey = function (formContentId, formDataId, itemId, sectionIndex) {
        return new core_1.GetByKeyRequestBuilder(FormObjective_1.FormObjective, {
            formContentId: formContentId,
            formDataId: formDataId,
            itemId: itemId,
            sectionIndex: sectionIndex
        });
    };
    /**
     * Returns a request builder for querying all `FormObjective` entities.
     * @returns A request builder for creating requests to retrieve all `FormObjective` entities.
     */
    FormObjectiveRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FormObjective_1.FormObjective);
    };
    FormObjectiveRequestBuilder.prototype.delete = function (formContentIdOrEntity, formDataId, itemId, sectionIndex) {
        return new core_1.DeleteRequestBuilder(FormObjective_1.FormObjective, formContentIdOrEntity instanceof FormObjective_1.FormObjective ? formContentIdOrEntity : {
            formContentId: formContentIdOrEntity,
            formDataId: formDataId,
            itemId: itemId,
            sectionIndex: sectionIndex
        });
    };
    return FormObjectiveRequestBuilder;
}(core_1.RequestBuilder));
exports.FormObjectiveRequestBuilder = FormObjectiveRequestBuilder;
//# sourceMappingURL=FormObjectiveRequestBuilder.js.map