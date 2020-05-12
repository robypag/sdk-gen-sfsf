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
var Background_Memberships_1 = require("./Background_Memberships");
/**
 * Request builder class for operations supported on the [[Background_Memberships]] entity.
 */
var Background_MembershipsRequestBuilder = /** @class */ (function (_super) {
    __extends(Background_MembershipsRequestBuilder, _super);
    function Background_MembershipsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Background_Memberships` entity based on its keys.
     * @param backgroundElementId Key property. See [[Background_Memberships.backgroundElementId]].
     * @param userId Key property. See [[Background_Memberships.userId]].
     * @returns A request builder for creating requests to retrieve one `Background_Memberships` entity based on its keys.
     */
    Background_MembershipsRequestBuilder.prototype.getByKey = function (backgroundElementId, userId) {
        return new core_1.GetByKeyRequestBuilder(Background_Memberships_1.Background_Memberships, {
            backgroundElementId: backgroundElementId,
            userId: userId
        });
    };
    /**
     * Returns a request builder for querying all `Background_Memberships` entities.
     * @returns A request builder for creating requests to retrieve all `Background_Memberships` entities.
     */
    Background_MembershipsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Background_Memberships_1.Background_Memberships);
    };
    /**
     * Returns a request builder for creating a `Background_Memberships` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Background_Memberships`.
     */
    Background_MembershipsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(Background_Memberships_1.Background_Memberships, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Background_Memberships`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Background_Memberships`.
     */
    Background_MembershipsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(Background_Memberships_1.Background_Memberships, entity);
    };
    Background_MembershipsRequestBuilder.prototype.delete = function (backgroundElementIdOrEntity, userId) {
        return new core_1.DeleteRequestBuilder(Background_Memberships_1.Background_Memberships, backgroundElementIdOrEntity instanceof Background_Memberships_1.Background_Memberships ? backgroundElementIdOrEntity : {
            backgroundElementId: backgroundElementIdOrEntity,
            userId: userId
        });
    };
    return Background_MembershipsRequestBuilder;
}(core_1.RequestBuilder));
exports.Background_MembershipsRequestBuilder = Background_MembershipsRequestBuilder;
//# sourceMappingURL=Background_MembershipsRequestBuilder.js.map