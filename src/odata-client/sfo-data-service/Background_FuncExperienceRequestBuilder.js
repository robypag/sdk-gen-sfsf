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
var Background_FuncExperience_1 = require("./Background_FuncExperience");
/**
 * Request builder class for operations supported on the [[Background_FuncExperience]] entity.
 */
var Background_FuncExperienceRequestBuilder = /** @class */ (function (_super) {
    __extends(Background_FuncExperienceRequestBuilder, _super);
    function Background_FuncExperienceRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Background_FuncExperience` entity based on its keys.
     * @param backgroundElementId Key property. See [[Background_FuncExperience.backgroundElementId]].
     * @param userId Key property. See [[Background_FuncExperience.userId]].
     * @returns A request builder for creating requests to retrieve one `Background_FuncExperience` entity based on its keys.
     */
    Background_FuncExperienceRequestBuilder.prototype.getByKey = function (backgroundElementId, userId) {
        return new core_1.GetByKeyRequestBuilder(Background_FuncExperience_1.Background_FuncExperience, {
            backgroundElementId: backgroundElementId,
            userId: userId
        });
    };
    /**
     * Returns a request builder for querying all `Background_FuncExperience` entities.
     * @returns A request builder for creating requests to retrieve all `Background_FuncExperience` entities.
     */
    Background_FuncExperienceRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Background_FuncExperience_1.Background_FuncExperience);
    };
    /**
     * Returns a request builder for creating a `Background_FuncExperience` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Background_FuncExperience`.
     */
    Background_FuncExperienceRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(Background_FuncExperience_1.Background_FuncExperience, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Background_FuncExperience`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Background_FuncExperience`.
     */
    Background_FuncExperienceRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(Background_FuncExperience_1.Background_FuncExperience, entity);
    };
    Background_FuncExperienceRequestBuilder.prototype.delete = function (backgroundElementIdOrEntity, userId) {
        return new core_1.DeleteRequestBuilder(Background_FuncExperience_1.Background_FuncExperience, backgroundElementIdOrEntity instanceof Background_FuncExperience_1.Background_FuncExperience ? backgroundElementIdOrEntity : {
            backgroundElementId: backgroundElementIdOrEntity,
            userId: userId
        });
    };
    return Background_FuncExperienceRequestBuilder;
}(core_1.RequestBuilder));
exports.Background_FuncExperienceRequestBuilder = Background_FuncExperienceRequestBuilder;
//# sourceMappingURL=Background_FuncExperienceRequestBuilder.js.map