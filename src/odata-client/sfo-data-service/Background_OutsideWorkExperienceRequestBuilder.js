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
var Background_OutsideWorkExperience_1 = require("./Background_OutsideWorkExperience");
/**
 * Request builder class for operations supported on the [[Background_OutsideWorkExperience]] entity.
 */
var Background_OutsideWorkExperienceRequestBuilder = /** @class */ (function (_super) {
    __extends(Background_OutsideWorkExperienceRequestBuilder, _super);
    function Background_OutsideWorkExperienceRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Background_OutsideWorkExperience` entity based on its keys.
     * @param backgroundElementId Key property. See [[Background_OutsideWorkExperience.backgroundElementId]].
     * @param userId Key property. See [[Background_OutsideWorkExperience.userId]].
     * @returns A request builder for creating requests to retrieve one `Background_OutsideWorkExperience` entity based on its keys.
     */
    Background_OutsideWorkExperienceRequestBuilder.prototype.getByKey = function (backgroundElementId, userId) {
        return new core_1.GetByKeyRequestBuilder(Background_OutsideWorkExperience_1.Background_OutsideWorkExperience, {
            backgroundElementId: backgroundElementId,
            userId: userId
        });
    };
    /**
     * Returns a request builder for querying all `Background_OutsideWorkExperience` entities.
     * @returns A request builder for creating requests to retrieve all `Background_OutsideWorkExperience` entities.
     */
    Background_OutsideWorkExperienceRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Background_OutsideWorkExperience_1.Background_OutsideWorkExperience);
    };
    /**
     * Returns a request builder for creating a `Background_OutsideWorkExperience` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Background_OutsideWorkExperience`.
     */
    Background_OutsideWorkExperienceRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(Background_OutsideWorkExperience_1.Background_OutsideWorkExperience, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Background_OutsideWorkExperience`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Background_OutsideWorkExperience`.
     */
    Background_OutsideWorkExperienceRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(Background_OutsideWorkExperience_1.Background_OutsideWorkExperience, entity);
    };
    Background_OutsideWorkExperienceRequestBuilder.prototype.delete = function (backgroundElementIdOrEntity, userId) {
        return new core_1.DeleteRequestBuilder(Background_OutsideWorkExperience_1.Background_OutsideWorkExperience, backgroundElementIdOrEntity instanceof Background_OutsideWorkExperience_1.Background_OutsideWorkExperience ? backgroundElementIdOrEntity : {
            backgroundElementId: backgroundElementIdOrEntity,
            userId: userId
        });
    };
    return Background_OutsideWorkExperienceRequestBuilder;
}(core_1.RequestBuilder));
exports.Background_OutsideWorkExperienceRequestBuilder = Background_OutsideWorkExperienceRequestBuilder;
//# sourceMappingURL=Background_OutsideWorkExperienceRequestBuilder.js.map