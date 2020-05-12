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
var Background_Awards_1 = require("./Background_Awards");
/**
 * Request builder class for operations supported on the [[Background_Awards]] entity.
 */
var Background_AwardsRequestBuilder = /** @class */ (function (_super) {
    __extends(Background_AwardsRequestBuilder, _super);
    function Background_AwardsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Background_Awards` entity based on its keys.
     * @param backgroundElementId Key property. See [[Background_Awards.backgroundElementId]].
     * @param userId Key property. See [[Background_Awards.userId]].
     * @returns A request builder for creating requests to retrieve one `Background_Awards` entity based on its keys.
     */
    Background_AwardsRequestBuilder.prototype.getByKey = function (backgroundElementId, userId) {
        return new core_1.GetByKeyRequestBuilder(Background_Awards_1.Background_Awards, {
            backgroundElementId: backgroundElementId,
            userId: userId
        });
    };
    /**
     * Returns a request builder for querying all `Background_Awards` entities.
     * @returns A request builder for creating requests to retrieve all `Background_Awards` entities.
     */
    Background_AwardsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Background_Awards_1.Background_Awards);
    };
    /**
     * Returns a request builder for creating a `Background_Awards` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Background_Awards`.
     */
    Background_AwardsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(Background_Awards_1.Background_Awards, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Background_Awards`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Background_Awards`.
     */
    Background_AwardsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(Background_Awards_1.Background_Awards, entity);
    };
    Background_AwardsRequestBuilder.prototype.delete = function (backgroundElementIdOrEntity, userId) {
        return new core_1.DeleteRequestBuilder(Background_Awards_1.Background_Awards, backgroundElementIdOrEntity instanceof Background_Awards_1.Background_Awards ? backgroundElementIdOrEntity : {
            backgroundElementId: backgroundElementIdOrEntity,
            userId: userId
        });
    };
    return Background_AwardsRequestBuilder;
}(core_1.RequestBuilder));
exports.Background_AwardsRequestBuilder = Background_AwardsRequestBuilder;
//# sourceMappingURL=Background_AwardsRequestBuilder.js.map