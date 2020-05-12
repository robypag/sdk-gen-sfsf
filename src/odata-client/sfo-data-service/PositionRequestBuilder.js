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
var Position_1 = require("./Position");
/**
 * Request builder class for operations supported on the [[Position]] entity.
 */
var PositionRequestBuilder = /** @class */ (function (_super) {
    __extends(PositionRequestBuilder, _super);
    function PositionRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Position` entity based on its keys.
     * @param code Key property. See [[Position.code]].
     * @param effectiveStartDate Key property. See [[Position.effectiveStartDate]].
     * @returns A request builder for creating requests to retrieve one `Position` entity based on its keys.
     */
    PositionRequestBuilder.prototype.getByKey = function (code, effectiveStartDate) {
        return new core_1.GetByKeyRequestBuilder(Position_1.Position, {
            code: code,
            effectiveStartDate: effectiveStartDate
        });
    };
    /**
     * Returns a request builder for querying all `Position` entities.
     * @returns A request builder for creating requests to retrieve all `Position` entities.
     */
    PositionRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Position_1.Position);
    };
    /**
     * Returns a request builder for creating a `Position` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Position`.
     */
    PositionRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(Position_1.Position, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Position`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Position`.
     */
    PositionRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(Position_1.Position, entity);
    };
    PositionRequestBuilder.prototype.delete = function (codeOrEntity, effectiveStartDate) {
        return new core_1.DeleteRequestBuilder(Position_1.Position, codeOrEntity instanceof Position_1.Position ? codeOrEntity : {
            code: codeOrEntity,
            effectiveStartDate: effectiveStartDate
        });
    };
    return PositionRequestBuilder;
}(core_1.RequestBuilder));
exports.PositionRequestBuilder = PositionRequestBuilder;
//# sourceMappingURL=PositionRequestBuilder.js.map