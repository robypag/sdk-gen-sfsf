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
var Background_Promotability_1 = require("./Background_Promotability");
/**
 * Request builder class for operations supported on the [[Background_Promotability]] entity.
 */
var Background_PromotabilityRequestBuilder = /** @class */ (function (_super) {
    __extends(Background_PromotabilityRequestBuilder, _super);
    function Background_PromotabilityRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Background_Promotability` entity based on its keys.
     * @param backgroundElementId Key property. See [[Background_Promotability.backgroundElementId]].
     * @param userId Key property. See [[Background_Promotability.userId]].
     * @returns A request builder for creating requests to retrieve one `Background_Promotability` entity based on its keys.
     */
    Background_PromotabilityRequestBuilder.prototype.getByKey = function (backgroundElementId, userId) {
        return new core_1.GetByKeyRequestBuilder(Background_Promotability_1.Background_Promotability, {
            backgroundElementId: backgroundElementId,
            userId: userId
        });
    };
    /**
     * Returns a request builder for querying all `Background_Promotability` entities.
     * @returns A request builder for creating requests to retrieve all `Background_Promotability` entities.
     */
    Background_PromotabilityRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Background_Promotability_1.Background_Promotability);
    };
    /**
     * Returns a request builder for creating a `Background_Promotability` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Background_Promotability`.
     */
    Background_PromotabilityRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(Background_Promotability_1.Background_Promotability, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Background_Promotability`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Background_Promotability`.
     */
    Background_PromotabilityRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(Background_Promotability_1.Background_Promotability, entity);
    };
    Background_PromotabilityRequestBuilder.prototype.delete = function (backgroundElementIdOrEntity, userId) {
        return new core_1.DeleteRequestBuilder(Background_Promotability_1.Background_Promotability, backgroundElementIdOrEntity instanceof Background_Promotability_1.Background_Promotability ? backgroundElementIdOrEntity : {
            backgroundElementId: backgroundElementIdOrEntity,
            userId: userId
        });
    };
    return Background_PromotabilityRequestBuilder;
}(core_1.RequestBuilder));
exports.Background_PromotabilityRequestBuilder = Background_PromotabilityRequestBuilder;
//# sourceMappingURL=Background_PromotabilityRequestBuilder.js.map