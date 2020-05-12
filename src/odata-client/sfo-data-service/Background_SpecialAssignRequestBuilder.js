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
var Background_SpecialAssign_1 = require("./Background_SpecialAssign");
/**
 * Request builder class for operations supported on the [[Background_SpecialAssign]] entity.
 */
var Background_SpecialAssignRequestBuilder = /** @class */ (function (_super) {
    __extends(Background_SpecialAssignRequestBuilder, _super);
    function Background_SpecialAssignRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Background_SpecialAssign` entity based on its keys.
     * @param backgroundElementId Key property. See [[Background_SpecialAssign.backgroundElementId]].
     * @param userId Key property. See [[Background_SpecialAssign.userId]].
     * @returns A request builder for creating requests to retrieve one `Background_SpecialAssign` entity based on its keys.
     */
    Background_SpecialAssignRequestBuilder.prototype.getByKey = function (backgroundElementId, userId) {
        return new core_1.GetByKeyRequestBuilder(Background_SpecialAssign_1.Background_SpecialAssign, {
            backgroundElementId: backgroundElementId,
            userId: userId
        });
    };
    /**
     * Returns a request builder for querying all `Background_SpecialAssign` entities.
     * @returns A request builder for creating requests to retrieve all `Background_SpecialAssign` entities.
     */
    Background_SpecialAssignRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Background_SpecialAssign_1.Background_SpecialAssign);
    };
    /**
     * Returns a request builder for creating a `Background_SpecialAssign` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Background_SpecialAssign`.
     */
    Background_SpecialAssignRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(Background_SpecialAssign_1.Background_SpecialAssign, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Background_SpecialAssign`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Background_SpecialAssign`.
     */
    Background_SpecialAssignRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(Background_SpecialAssign_1.Background_SpecialAssign, entity);
    };
    Background_SpecialAssignRequestBuilder.prototype.delete = function (backgroundElementIdOrEntity, userId) {
        return new core_1.DeleteRequestBuilder(Background_SpecialAssign_1.Background_SpecialAssign, backgroundElementIdOrEntity instanceof Background_SpecialAssign_1.Background_SpecialAssign ? backgroundElementIdOrEntity : {
            backgroundElementId: backgroundElementIdOrEntity,
            userId: userId
        });
    };
    return Background_SpecialAssignRequestBuilder;
}(core_1.RequestBuilder));
exports.Background_SpecialAssignRequestBuilder = Background_SpecialAssignRequestBuilder;
//# sourceMappingURL=Background_SpecialAssignRequestBuilder.js.map