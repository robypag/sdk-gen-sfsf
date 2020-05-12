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
var Background_Compensation_1 = require("./Background_Compensation");
/**
 * Request builder class for operations supported on the [[Background_Compensation]] entity.
 */
var Background_CompensationRequestBuilder = /** @class */ (function (_super) {
    __extends(Background_CompensationRequestBuilder, _super);
    function Background_CompensationRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Background_Compensation` entity based on its keys.
     * @param backgroundElementId Key property. See [[Background_Compensation.backgroundElementId]].
     * @param userId Key property. See [[Background_Compensation.userId]].
     * @returns A request builder for creating requests to retrieve one `Background_Compensation` entity based on its keys.
     */
    Background_CompensationRequestBuilder.prototype.getByKey = function (backgroundElementId, userId) {
        return new core_1.GetByKeyRequestBuilder(Background_Compensation_1.Background_Compensation, {
            backgroundElementId: backgroundElementId,
            userId: userId
        });
    };
    /**
     * Returns a request builder for querying all `Background_Compensation` entities.
     * @returns A request builder for creating requests to retrieve all `Background_Compensation` entities.
     */
    Background_CompensationRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Background_Compensation_1.Background_Compensation);
    };
    /**
     * Returns a request builder for creating a `Background_Compensation` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Background_Compensation`.
     */
    Background_CompensationRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(Background_Compensation_1.Background_Compensation, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Background_Compensation`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Background_Compensation`.
     */
    Background_CompensationRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(Background_Compensation_1.Background_Compensation, entity);
    };
    Background_CompensationRequestBuilder.prototype.delete = function (backgroundElementIdOrEntity, userId) {
        return new core_1.DeleteRequestBuilder(Background_Compensation_1.Background_Compensation, backgroundElementIdOrEntity instanceof Background_Compensation_1.Background_Compensation ? backgroundElementIdOrEntity : {
            backgroundElementId: backgroundElementIdOrEntity,
            userId: userId
        });
    };
    return Background_CompensationRequestBuilder;
}(core_1.RequestBuilder));
exports.Background_CompensationRequestBuilder = Background_CompensationRequestBuilder;
//# sourceMappingURL=Background_CompensationRequestBuilder.js.map