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
var Background_Matrix1Placement_1 = require("./Background_Matrix1Placement");
/**
 * Request builder class for operations supported on the [[Background_Matrix1Placement]] entity.
 */
var Background_Matrix1PlacementRequestBuilder = /** @class */ (function (_super) {
    __extends(Background_Matrix1PlacementRequestBuilder, _super);
    function Background_Matrix1PlacementRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Background_Matrix1Placement` entity based on its keys.
     * @param backgroundElementId Key property. See [[Background_Matrix1Placement.backgroundElementId]].
     * @param userId Key property. See [[Background_Matrix1Placement.userId]].
     * @returns A request builder for creating requests to retrieve one `Background_Matrix1Placement` entity based on its keys.
     */
    Background_Matrix1PlacementRequestBuilder.prototype.getByKey = function (backgroundElementId, userId) {
        return new core_1.GetByKeyRequestBuilder(Background_Matrix1Placement_1.Background_Matrix1Placement, {
            backgroundElementId: backgroundElementId,
            userId: userId
        });
    };
    /**
     * Returns a request builder for querying all `Background_Matrix1Placement` entities.
     * @returns A request builder for creating requests to retrieve all `Background_Matrix1Placement` entities.
     */
    Background_Matrix1PlacementRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Background_Matrix1Placement_1.Background_Matrix1Placement);
    };
    /**
     * Returns a request builder for creating a `Background_Matrix1Placement` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Background_Matrix1Placement`.
     */
    Background_Matrix1PlacementRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(Background_Matrix1Placement_1.Background_Matrix1Placement, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Background_Matrix1Placement`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Background_Matrix1Placement`.
     */
    Background_Matrix1PlacementRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(Background_Matrix1Placement_1.Background_Matrix1Placement, entity);
    };
    Background_Matrix1PlacementRequestBuilder.prototype.delete = function (backgroundElementIdOrEntity, userId) {
        return new core_1.DeleteRequestBuilder(Background_Matrix1Placement_1.Background_Matrix1Placement, backgroundElementIdOrEntity instanceof Background_Matrix1Placement_1.Background_Matrix1Placement ? backgroundElementIdOrEntity : {
            backgroundElementId: backgroundElementIdOrEntity,
            userId: userId
        });
    };
    return Background_Matrix1PlacementRequestBuilder;
}(core_1.RequestBuilder));
exports.Background_Matrix1PlacementRequestBuilder = Background_Matrix1PlacementRequestBuilder;
//# sourceMappingURL=Background_Matrix1PlacementRequestBuilder.js.map