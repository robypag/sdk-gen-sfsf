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
var LegacyPositionEntity_1 = require("./LegacyPositionEntity");
/**
 * Request builder class for operations supported on the [[LegacyPositionEntity]] entity.
 */
var LegacyPositionEntityRequestBuilder = /** @class */ (function (_super) {
    __extends(LegacyPositionEntityRequestBuilder, _super);
    function LegacyPositionEntityRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `LegacyPositionEntity` entity based on its keys.
     * @param positionId Key property. See [[LegacyPositionEntity.positionId]].
     * @returns A request builder for creating requests to retrieve one `LegacyPositionEntity` entity based on its keys.
     */
    LegacyPositionEntityRequestBuilder.prototype.getByKey = function (positionId) {
        return new core_1.GetByKeyRequestBuilder(LegacyPositionEntity_1.LegacyPositionEntity, { positionId: positionId });
    };
    /**
     * Returns a request builder for querying all `LegacyPositionEntity` entities.
     * @returns A request builder for creating requests to retrieve all `LegacyPositionEntity` entities.
     */
    LegacyPositionEntityRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(LegacyPositionEntity_1.LegacyPositionEntity);
    };
    return LegacyPositionEntityRequestBuilder;
}(core_1.RequestBuilder));
exports.LegacyPositionEntityRequestBuilder = LegacyPositionEntityRequestBuilder;
//# sourceMappingURL=LegacyPositionEntityRequestBuilder.js.map