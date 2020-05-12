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
var Background_Googledocs_1 = require("./Background_Googledocs");
/**
 * Request builder class for operations supported on the [[Background_Googledocs]] entity.
 */
var Background_GoogledocsRequestBuilder = /** @class */ (function (_super) {
    __extends(Background_GoogledocsRequestBuilder, _super);
    function Background_GoogledocsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Background_Googledocs` entity based on its keys.
     * @param backgroundElementId Key property. See [[Background_Googledocs.backgroundElementId]].
     * @param userId Key property. See [[Background_Googledocs.userId]].
     * @returns A request builder for creating requests to retrieve one `Background_Googledocs` entity based on its keys.
     */
    Background_GoogledocsRequestBuilder.prototype.getByKey = function (backgroundElementId, userId) {
        return new core_1.GetByKeyRequestBuilder(Background_Googledocs_1.Background_Googledocs, {
            backgroundElementId: backgroundElementId,
            userId: userId
        });
    };
    /**
     * Returns a request builder for querying all `Background_Googledocs` entities.
     * @returns A request builder for creating requests to retrieve all `Background_Googledocs` entities.
     */
    Background_GoogledocsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Background_Googledocs_1.Background_Googledocs);
    };
    /**
     * Returns a request builder for creating a `Background_Googledocs` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Background_Googledocs`.
     */
    Background_GoogledocsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(Background_Googledocs_1.Background_Googledocs, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Background_Googledocs`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Background_Googledocs`.
     */
    Background_GoogledocsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(Background_Googledocs_1.Background_Googledocs, entity);
    };
    Background_GoogledocsRequestBuilder.prototype.delete = function (backgroundElementIdOrEntity, userId) {
        return new core_1.DeleteRequestBuilder(Background_Googledocs_1.Background_Googledocs, backgroundElementIdOrEntity instanceof Background_Googledocs_1.Background_Googledocs ? backgroundElementIdOrEntity : {
            backgroundElementId: backgroundElementIdOrEntity,
            userId: userId
        });
    };
    return Background_GoogledocsRequestBuilder;
}(core_1.RequestBuilder));
exports.Background_GoogledocsRequestBuilder = Background_GoogledocsRequestBuilder;
//# sourceMappingURL=Background_GoogledocsRequestBuilder.js.map