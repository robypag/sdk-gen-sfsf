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
var Background_LeadExperience_1 = require("./Background_LeadExperience");
/**
 * Request builder class for operations supported on the [[Background_LeadExperience]] entity.
 */
var Background_LeadExperienceRequestBuilder = /** @class */ (function (_super) {
    __extends(Background_LeadExperienceRequestBuilder, _super);
    function Background_LeadExperienceRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Background_LeadExperience` entity based on its keys.
     * @param backgroundElementId Key property. See [[Background_LeadExperience.backgroundElementId]].
     * @param userId Key property. See [[Background_LeadExperience.userId]].
     * @returns A request builder for creating requests to retrieve one `Background_LeadExperience` entity based on its keys.
     */
    Background_LeadExperienceRequestBuilder.prototype.getByKey = function (backgroundElementId, userId) {
        return new core_1.GetByKeyRequestBuilder(Background_LeadExperience_1.Background_LeadExperience, {
            backgroundElementId: backgroundElementId,
            userId: userId
        });
    };
    /**
     * Returns a request builder for querying all `Background_LeadExperience` entities.
     * @returns A request builder for creating requests to retrieve all `Background_LeadExperience` entities.
     */
    Background_LeadExperienceRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Background_LeadExperience_1.Background_LeadExperience);
    };
    /**
     * Returns a request builder for creating a `Background_LeadExperience` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Background_LeadExperience`.
     */
    Background_LeadExperienceRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(Background_LeadExperience_1.Background_LeadExperience, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Background_LeadExperience`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Background_LeadExperience`.
     */
    Background_LeadExperienceRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(Background_LeadExperience_1.Background_LeadExperience, entity);
    };
    Background_LeadExperienceRequestBuilder.prototype.delete = function (backgroundElementIdOrEntity, userId) {
        return new core_1.DeleteRequestBuilder(Background_LeadExperience_1.Background_LeadExperience, backgroundElementIdOrEntity instanceof Background_LeadExperience_1.Background_LeadExperience ? backgroundElementIdOrEntity : {
            backgroundElementId: backgroundElementIdOrEntity,
            userId: userId
        });
    };
    return Background_LeadExperienceRequestBuilder;
}(core_1.RequestBuilder));
exports.Background_LeadExperienceRequestBuilder = Background_LeadExperienceRequestBuilder;
//# sourceMappingURL=Background_LeadExperienceRequestBuilder.js.map