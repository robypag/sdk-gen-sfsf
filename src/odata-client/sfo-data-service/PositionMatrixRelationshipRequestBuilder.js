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
var PositionMatrixRelationship_1 = require("./PositionMatrixRelationship");
/**
 * Request builder class for operations supported on the [[PositionMatrixRelationship]] entity.
 */
var PositionMatrixRelationshipRequestBuilder = /** @class */ (function (_super) {
    __extends(PositionMatrixRelationshipRequestBuilder, _super);
    function PositionMatrixRelationshipRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PositionMatrixRelationship` entity based on its keys.
     * @param positionCode Key property. See [[PositionMatrixRelationship.positionCode]].
     * @param positionEffectiveStartDate Key property. See [[PositionMatrixRelationship.positionEffectiveStartDate]].
     * @param matrixRelationshipType Key property. See [[PositionMatrixRelationship.matrixRelationshipType]].
     * @returns A request builder for creating requests to retrieve one `PositionMatrixRelationship` entity based on its keys.
     */
    PositionMatrixRelationshipRequestBuilder.prototype.getByKey = function (positionCode, positionEffectiveStartDate, matrixRelationshipType) {
        return new core_1.GetByKeyRequestBuilder(PositionMatrixRelationship_1.PositionMatrixRelationship, {
            Position_code: positionCode,
            Position_effectiveStartDate: positionEffectiveStartDate,
            matrixRelationshipType: matrixRelationshipType
        });
    };
    /**
     * Returns a request builder for querying all `PositionMatrixRelationship` entities.
     * @returns A request builder for creating requests to retrieve all `PositionMatrixRelationship` entities.
     */
    PositionMatrixRelationshipRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PositionMatrixRelationship_1.PositionMatrixRelationship);
    };
    /**
     * Returns a request builder for creating a `PositionMatrixRelationship` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PositionMatrixRelationship`.
     */
    PositionMatrixRelationshipRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(PositionMatrixRelationship_1.PositionMatrixRelationship, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PositionMatrixRelationship`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PositionMatrixRelationship`.
     */
    PositionMatrixRelationshipRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(PositionMatrixRelationship_1.PositionMatrixRelationship, entity);
    };
    PositionMatrixRelationshipRequestBuilder.prototype.delete = function (positionCodeOrEntity, positionEffectiveStartDate, matrixRelationshipType) {
        return new core_1.DeleteRequestBuilder(PositionMatrixRelationship_1.PositionMatrixRelationship, positionCodeOrEntity instanceof PositionMatrixRelationship_1.PositionMatrixRelationship ? positionCodeOrEntity : {
            Position_code: positionCodeOrEntity,
            Position_effectiveStartDate: positionEffectiveStartDate,
            matrixRelationshipType: matrixRelationshipType
        });
    };
    return PositionMatrixRelationshipRequestBuilder;
}(core_1.RequestBuilder));
exports.PositionMatrixRelationshipRequestBuilder = PositionMatrixRelationshipRequestBuilder;
//# sourceMappingURL=PositionMatrixRelationshipRequestBuilder.js.map