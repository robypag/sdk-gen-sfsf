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
var Background_Education_1 = require("./Background_Education");
/**
 * Request builder class for operations supported on the [[Background_Education]] entity.
 */
var Background_EducationRequestBuilder = /** @class */ (function (_super) {
    __extends(Background_EducationRequestBuilder, _super);
    function Background_EducationRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Background_Education` entity based on its keys.
     * @param backgroundElementId Key property. See [[Background_Education.backgroundElementId]].
     * @param userId Key property. See [[Background_Education.userId]].
     * @returns A request builder for creating requests to retrieve one `Background_Education` entity based on its keys.
     */
    Background_EducationRequestBuilder.prototype.getByKey = function (backgroundElementId, userId) {
        return new core_1.GetByKeyRequestBuilder(Background_Education_1.Background_Education, {
            backgroundElementId: backgroundElementId,
            userId: userId
        });
    };
    /**
     * Returns a request builder for querying all `Background_Education` entities.
     * @returns A request builder for creating requests to retrieve all `Background_Education` entities.
     */
    Background_EducationRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Background_Education_1.Background_Education);
    };
    /**
     * Returns a request builder for creating a `Background_Education` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Background_Education`.
     */
    Background_EducationRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(Background_Education_1.Background_Education, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Background_Education`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Background_Education`.
     */
    Background_EducationRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(Background_Education_1.Background_Education, entity);
    };
    Background_EducationRequestBuilder.prototype.delete = function (backgroundElementIdOrEntity, userId) {
        return new core_1.DeleteRequestBuilder(Background_Education_1.Background_Education, backgroundElementIdOrEntity instanceof Background_Education_1.Background_Education ? backgroundElementIdOrEntity : {
            backgroundElementId: backgroundElementIdOrEntity,
            userId: userId
        });
    };
    return Background_EducationRequestBuilder;
}(core_1.RequestBuilder));
exports.Background_EducationRequestBuilder = Background_EducationRequestBuilder;
//# sourceMappingURL=Background_EducationRequestBuilder.js.map