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
var FormCompetency_1 = require("./FormCompetency");
/**
 * Request builder class for operations supported on the [[FormCompetency]] entity.
 */
var FormCompetencyRequestBuilder = /** @class */ (function (_super) {
    __extends(FormCompetencyRequestBuilder, _super);
    function FormCompetencyRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FormCompetency` entity based on its keys.
     * @param formContentId Key property. See [[FormCompetency.formContentId]].
     * @param formDataId Key property. See [[FormCompetency.formDataId]].
     * @param itemId Key property. See [[FormCompetency.itemId]].
     * @param sectionIndex Key property. See [[FormCompetency.sectionIndex]].
     * @returns A request builder for creating requests to retrieve one `FormCompetency` entity based on its keys.
     */
    FormCompetencyRequestBuilder.prototype.getByKey = function (formContentId, formDataId, itemId, sectionIndex) {
        return new core_1.GetByKeyRequestBuilder(FormCompetency_1.FormCompetency, {
            formContentId: formContentId,
            formDataId: formDataId,
            itemId: itemId,
            sectionIndex: sectionIndex
        });
    };
    /**
     * Returns a request builder for querying all `FormCompetency` entities.
     * @returns A request builder for creating requests to retrieve all `FormCompetency` entities.
     */
    FormCompetencyRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FormCompetency_1.FormCompetency);
    };
    /**
     * Returns a request builder for creating a `FormCompetency` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `FormCompetency`.
     */
    FormCompetencyRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(FormCompetency_1.FormCompetency, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `FormCompetency`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `FormCompetency`.
     */
    FormCompetencyRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(FormCompetency_1.FormCompetency, entity);
    };
    FormCompetencyRequestBuilder.prototype.delete = function (formContentIdOrEntity, formDataId, itemId, sectionIndex) {
        return new core_1.DeleteRequestBuilder(FormCompetency_1.FormCompetency, formContentIdOrEntity instanceof FormCompetency_1.FormCompetency ? formContentIdOrEntity : {
            formContentId: formContentIdOrEntity,
            formDataId: formDataId,
            itemId: itemId,
            sectionIndex: sectionIndex
        });
    };
    return FormCompetencyRequestBuilder;
}(core_1.RequestBuilder));
exports.FormCompetencyRequestBuilder = FormCompetencyRequestBuilder;
//# sourceMappingURL=FormCompetencyRequestBuilder.js.map