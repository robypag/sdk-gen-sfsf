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
var Background_Fsaelection_1 = require("./Background_Fsaelection");
/**
 * Request builder class for operations supported on the [[Background_Fsaelection]] entity.
 */
var Background_FsaelectionRequestBuilder = /** @class */ (function (_super) {
    __extends(Background_FsaelectionRequestBuilder, _super);
    function Background_FsaelectionRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Background_Fsaelection` entity based on its keys.
     * @param backgroundElementId Key property. See [[Background_Fsaelection.backgroundElementId]].
     * @param userId Key property. See [[Background_Fsaelection.userId]].
     * @returns A request builder for creating requests to retrieve one `Background_Fsaelection` entity based on its keys.
     */
    Background_FsaelectionRequestBuilder.prototype.getByKey = function (backgroundElementId, userId) {
        return new core_1.GetByKeyRequestBuilder(Background_Fsaelection_1.Background_Fsaelection, {
            backgroundElementId: backgroundElementId,
            userId: userId
        });
    };
    /**
     * Returns a request builder for querying all `Background_Fsaelection` entities.
     * @returns A request builder for creating requests to retrieve all `Background_Fsaelection` entities.
     */
    Background_FsaelectionRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Background_Fsaelection_1.Background_Fsaelection);
    };
    /**
     * Returns a request builder for creating a `Background_Fsaelection` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Background_Fsaelection`.
     */
    Background_FsaelectionRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(Background_Fsaelection_1.Background_Fsaelection, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Background_Fsaelection`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Background_Fsaelection`.
     */
    Background_FsaelectionRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(Background_Fsaelection_1.Background_Fsaelection, entity);
    };
    Background_FsaelectionRequestBuilder.prototype.delete = function (backgroundElementIdOrEntity, userId) {
        return new core_1.DeleteRequestBuilder(Background_Fsaelection_1.Background_Fsaelection, backgroundElementIdOrEntity instanceof Background_Fsaelection_1.Background_Fsaelection ? backgroundElementIdOrEntity : {
            backgroundElementId: backgroundElementIdOrEntity,
            userId: userId
        });
    };
    return Background_FsaelectionRequestBuilder;
}(core_1.RequestBuilder));
exports.Background_FsaelectionRequestBuilder = Background_FsaelectionRequestBuilder;
//# sourceMappingURL=Background_FsaelectionRequestBuilder.js.map