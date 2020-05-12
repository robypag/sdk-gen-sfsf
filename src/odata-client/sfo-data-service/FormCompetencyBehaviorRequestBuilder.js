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
var FormCompetencyBehavior_1 = require("./FormCompetencyBehavior");
/**
 * Request builder class for operations supported on the [[FormCompetencyBehavior]] entity.
 */
var FormCompetencyBehaviorRequestBuilder = /** @class */ (function (_super) {
    __extends(FormCompetencyBehaviorRequestBuilder, _super);
    function FormCompetencyBehaviorRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FormCompetencyBehavior` entity based on its keys.
     * @param behaviorId Key property. See [[FormCompetencyBehavior.behaviorId]].
     * @param formContentId Key property. See [[FormCompetencyBehavior.formContentId]].
     * @param formDataId Key property. See [[FormCompetencyBehavior.formDataId]].
     * @param itemId Key property. See [[FormCompetencyBehavior.itemId]].
     * @param sectionIndex Key property. See [[FormCompetencyBehavior.sectionIndex]].
     * @returns A request builder for creating requests to retrieve one `FormCompetencyBehavior` entity based on its keys.
     */
    FormCompetencyBehaviorRequestBuilder.prototype.getByKey = function (behaviorId, formContentId, formDataId, itemId, sectionIndex) {
        return new core_1.GetByKeyRequestBuilder(FormCompetencyBehavior_1.FormCompetencyBehavior, {
            behaviorId: behaviorId,
            formContentId: formContentId,
            formDataId: formDataId,
            itemId: itemId,
            sectionIndex: sectionIndex
        });
    };
    /**
     * Returns a request builder for querying all `FormCompetencyBehavior` entities.
     * @returns A request builder for creating requests to retrieve all `FormCompetencyBehavior` entities.
     */
    FormCompetencyBehaviorRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FormCompetencyBehavior_1.FormCompetencyBehavior);
    };
    /**
     * Returns a request builder for creating a `FormCompetencyBehavior` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `FormCompetencyBehavior`.
     */
    FormCompetencyBehaviorRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(FormCompetencyBehavior_1.FormCompetencyBehavior, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `FormCompetencyBehavior`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `FormCompetencyBehavior`.
     */
    FormCompetencyBehaviorRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(FormCompetencyBehavior_1.FormCompetencyBehavior, entity);
    };
    FormCompetencyBehaviorRequestBuilder.prototype.delete = function (behaviorIdOrEntity, formContentId, formDataId, itemId, sectionIndex) {
        return new core_1.DeleteRequestBuilder(FormCompetencyBehavior_1.FormCompetencyBehavior, behaviorIdOrEntity instanceof FormCompetencyBehavior_1.FormCompetencyBehavior ? behaviorIdOrEntity : {
            behaviorId: behaviorIdOrEntity,
            formContentId: formContentId,
            formDataId: formDataId,
            itemId: itemId,
            sectionIndex: sectionIndex
        });
    };
    return FormCompetencyBehaviorRequestBuilder;
}(core_1.RequestBuilder));
exports.FormCompetencyBehaviorRequestBuilder = FormCompetencyBehaviorRequestBuilder;
//# sourceMappingURL=FormCompetencyBehaviorRequestBuilder.js.map