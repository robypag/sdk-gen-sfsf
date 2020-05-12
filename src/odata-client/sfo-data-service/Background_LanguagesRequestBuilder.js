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
var Background_Languages_1 = require("./Background_Languages");
/**
 * Request builder class for operations supported on the [[Background_Languages]] entity.
 */
var Background_LanguagesRequestBuilder = /** @class */ (function (_super) {
    __extends(Background_LanguagesRequestBuilder, _super);
    function Background_LanguagesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Background_Languages` entity based on its keys.
     * @param backgroundElementId Key property. See [[Background_Languages.backgroundElementId]].
     * @param userId Key property. See [[Background_Languages.userId]].
     * @returns A request builder for creating requests to retrieve one `Background_Languages` entity based on its keys.
     */
    Background_LanguagesRequestBuilder.prototype.getByKey = function (backgroundElementId, userId) {
        return new core_1.GetByKeyRequestBuilder(Background_Languages_1.Background_Languages, {
            backgroundElementId: backgroundElementId,
            userId: userId
        });
    };
    /**
     * Returns a request builder for querying all `Background_Languages` entities.
     * @returns A request builder for creating requests to retrieve all `Background_Languages` entities.
     */
    Background_LanguagesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Background_Languages_1.Background_Languages);
    };
    /**
     * Returns a request builder for creating a `Background_Languages` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Background_Languages`.
     */
    Background_LanguagesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(Background_Languages_1.Background_Languages, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Background_Languages`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Background_Languages`.
     */
    Background_LanguagesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(Background_Languages_1.Background_Languages, entity);
    };
    Background_LanguagesRequestBuilder.prototype.delete = function (backgroundElementIdOrEntity, userId) {
        return new core_1.DeleteRequestBuilder(Background_Languages_1.Background_Languages, backgroundElementIdOrEntity instanceof Background_Languages_1.Background_Languages ? backgroundElementIdOrEntity : {
            backgroundElementId: backgroundElementIdOrEntity,
            userId: userId
        });
    };
    return Background_LanguagesRequestBuilder;
}(core_1.RequestBuilder));
exports.Background_LanguagesRequestBuilder = Background_LanguagesRequestBuilder;
//# sourceMappingURL=Background_LanguagesRequestBuilder.js.map