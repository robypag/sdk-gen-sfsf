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
var Background_PreferredNextMove_1 = require("./Background_PreferredNextMove");
/**
 * Request builder class for operations supported on the [[Background_PreferredNextMove]] entity.
 */
var Background_PreferredNextMoveRequestBuilder = /** @class */ (function (_super) {
    __extends(Background_PreferredNextMoveRequestBuilder, _super);
    function Background_PreferredNextMoveRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Background_PreferredNextMove` entity based on its keys.
     * @param backgroundElementId Key property. See [[Background_PreferredNextMove.backgroundElementId]].
     * @param userId Key property. See [[Background_PreferredNextMove.userId]].
     * @returns A request builder for creating requests to retrieve one `Background_PreferredNextMove` entity based on its keys.
     */
    Background_PreferredNextMoveRequestBuilder.prototype.getByKey = function (backgroundElementId, userId) {
        return new core_1.GetByKeyRequestBuilder(Background_PreferredNextMove_1.Background_PreferredNextMove, {
            backgroundElementId: backgroundElementId,
            userId: userId
        });
    };
    /**
     * Returns a request builder for querying all `Background_PreferredNextMove` entities.
     * @returns A request builder for creating requests to retrieve all `Background_PreferredNextMove` entities.
     */
    Background_PreferredNextMoveRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Background_PreferredNextMove_1.Background_PreferredNextMove);
    };
    /**
     * Returns a request builder for creating a `Background_PreferredNextMove` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Background_PreferredNextMove`.
     */
    Background_PreferredNextMoveRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(Background_PreferredNextMove_1.Background_PreferredNextMove, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Background_PreferredNextMove`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Background_PreferredNextMove`.
     */
    Background_PreferredNextMoveRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(Background_PreferredNextMove_1.Background_PreferredNextMove, entity);
    };
    Background_PreferredNextMoveRequestBuilder.prototype.delete = function (backgroundElementIdOrEntity, userId) {
        return new core_1.DeleteRequestBuilder(Background_PreferredNextMove_1.Background_PreferredNextMove, backgroundElementIdOrEntity instanceof Background_PreferredNextMove_1.Background_PreferredNextMove ? backgroundElementIdOrEntity : {
            backgroundElementId: backgroundElementIdOrEntity,
            userId: userId
        });
    };
    return Background_PreferredNextMoveRequestBuilder;
}(core_1.RequestBuilder));
exports.Background_PreferredNextMoveRequestBuilder = Background_PreferredNextMoveRequestBuilder;
//# sourceMappingURL=Background_PreferredNextMoveRequestBuilder.js.map