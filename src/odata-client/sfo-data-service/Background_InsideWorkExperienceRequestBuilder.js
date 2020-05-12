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
var Background_InsideWorkExperience_1 = require("./Background_InsideWorkExperience");
/**
 * Request builder class for operations supported on the [[Background_InsideWorkExperience]] entity.
 */
var Background_InsideWorkExperienceRequestBuilder = /** @class */ (function (_super) {
    __extends(Background_InsideWorkExperienceRequestBuilder, _super);
    function Background_InsideWorkExperienceRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Background_InsideWorkExperience` entity based on its keys.
     * @param backgroundElementId Key property. See [[Background_InsideWorkExperience.backgroundElementId]].
     * @param userId Key property. See [[Background_InsideWorkExperience.userId]].
     * @returns A request builder for creating requests to retrieve one `Background_InsideWorkExperience` entity based on its keys.
     */
    Background_InsideWorkExperienceRequestBuilder.prototype.getByKey = function (backgroundElementId, userId) {
        return new core_1.GetByKeyRequestBuilder(Background_InsideWorkExperience_1.Background_InsideWorkExperience, {
            backgroundElementId: backgroundElementId,
            userId: userId
        });
    };
    /**
     * Returns a request builder for querying all `Background_InsideWorkExperience` entities.
     * @returns A request builder for creating requests to retrieve all `Background_InsideWorkExperience` entities.
     */
    Background_InsideWorkExperienceRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Background_InsideWorkExperience_1.Background_InsideWorkExperience);
    };
    /**
     * Returns a request builder for creating a `Background_InsideWorkExperience` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Background_InsideWorkExperience`.
     */
    Background_InsideWorkExperienceRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(Background_InsideWorkExperience_1.Background_InsideWorkExperience, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Background_InsideWorkExperience`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Background_InsideWorkExperience`.
     */
    Background_InsideWorkExperienceRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(Background_InsideWorkExperience_1.Background_InsideWorkExperience, entity);
    };
    Background_InsideWorkExperienceRequestBuilder.prototype.delete = function (backgroundElementIdOrEntity, userId) {
        return new core_1.DeleteRequestBuilder(Background_InsideWorkExperience_1.Background_InsideWorkExperience, backgroundElementIdOrEntity instanceof Background_InsideWorkExperience_1.Background_InsideWorkExperience ? backgroundElementIdOrEntity : {
            backgroundElementId: backgroundElementIdOrEntity,
            userId: userId
        });
    };
    return Background_InsideWorkExperienceRequestBuilder;
}(core_1.RequestBuilder));
exports.Background_InsideWorkExperienceRequestBuilder = Background_InsideWorkExperienceRequestBuilder;
//# sourceMappingURL=Background_InsideWorkExperienceRequestBuilder.js.map