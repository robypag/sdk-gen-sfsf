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
var Background_Mobility_1 = require("./Background_Mobility");
/**
 * Request builder class for operations supported on the [[Background_Mobility]] entity.
 */
var Background_MobilityRequestBuilder = /** @class */ (function (_super) {
    __extends(Background_MobilityRequestBuilder, _super);
    function Background_MobilityRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Background_Mobility` entity based on its keys.
     * @param backgroundElementId Key property. See [[Background_Mobility.backgroundElementId]].
     * @param userId Key property. See [[Background_Mobility.userId]].
     * @returns A request builder for creating requests to retrieve one `Background_Mobility` entity based on its keys.
     */
    Background_MobilityRequestBuilder.prototype.getByKey = function (backgroundElementId, userId) {
        return new core_1.GetByKeyRequestBuilder(Background_Mobility_1.Background_Mobility, {
            backgroundElementId: backgroundElementId,
            userId: userId
        });
    };
    /**
     * Returns a request builder for querying all `Background_Mobility` entities.
     * @returns A request builder for creating requests to retrieve all `Background_Mobility` entities.
     */
    Background_MobilityRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Background_Mobility_1.Background_Mobility);
    };
    /**
     * Returns a request builder for creating a `Background_Mobility` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Background_Mobility`.
     */
    Background_MobilityRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(Background_Mobility_1.Background_Mobility, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Background_Mobility`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Background_Mobility`.
     */
    Background_MobilityRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(Background_Mobility_1.Background_Mobility, entity);
    };
    Background_MobilityRequestBuilder.prototype.delete = function (backgroundElementIdOrEntity, userId) {
        return new core_1.DeleteRequestBuilder(Background_Mobility_1.Background_Mobility, backgroundElementIdOrEntity instanceof Background_Mobility_1.Background_Mobility ? backgroundElementIdOrEntity : {
            backgroundElementId: backgroundElementIdOrEntity,
            userId: userId
        });
    };
    return Background_MobilityRequestBuilder;
}(core_1.RequestBuilder));
exports.Background_MobilityRequestBuilder = Background_MobilityRequestBuilder;
//# sourceMappingURL=Background_MobilityRequestBuilder.js.map