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
var Background_Community_1 = require("./Background_Community");
/**
 * Request builder class for operations supported on the [[Background_Community]] entity.
 */
var Background_CommunityRequestBuilder = /** @class */ (function (_super) {
    __extends(Background_CommunityRequestBuilder, _super);
    function Background_CommunityRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Background_Community` entity based on its keys.
     * @param backgroundElementId Key property. See [[Background_Community.backgroundElementId]].
     * @param userId Key property. See [[Background_Community.userId]].
     * @returns A request builder for creating requests to retrieve one `Background_Community` entity based on its keys.
     */
    Background_CommunityRequestBuilder.prototype.getByKey = function (backgroundElementId, userId) {
        return new core_1.GetByKeyRequestBuilder(Background_Community_1.Background_Community, {
            backgroundElementId: backgroundElementId,
            userId: userId
        });
    };
    /**
     * Returns a request builder for querying all `Background_Community` entities.
     * @returns A request builder for creating requests to retrieve all `Background_Community` entities.
     */
    Background_CommunityRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Background_Community_1.Background_Community);
    };
    /**
     * Returns a request builder for creating a `Background_Community` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Background_Community`.
     */
    Background_CommunityRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(Background_Community_1.Background_Community, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Background_Community`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Background_Community`.
     */
    Background_CommunityRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(Background_Community_1.Background_Community, entity);
    };
    Background_CommunityRequestBuilder.prototype.delete = function (backgroundElementIdOrEntity, userId) {
        return new core_1.DeleteRequestBuilder(Background_Community_1.Background_Community, backgroundElementIdOrEntity instanceof Background_Community_1.Background_Community ? backgroundElementIdOrEntity : {
            backgroundElementId: backgroundElementIdOrEntity,
            userId: userId
        });
    };
    return Background_CommunityRequestBuilder;
}(core_1.RequestBuilder));
exports.Background_CommunityRequestBuilder = Background_CommunityRequestBuilder;
//# sourceMappingURL=Background_CommunityRequestBuilder.js.map