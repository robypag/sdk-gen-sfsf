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
var SpotAwardRedemptionOrder_1 = require("./SpotAwardRedemptionOrder");
/**
 * Request builder class for operations supported on the [[SpotAwardRedemptionOrder]] entity.
 */
var SpotAwardRedemptionOrderRequestBuilder = /** @class */ (function (_super) {
    __extends(SpotAwardRedemptionOrderRequestBuilder, _super);
    function SpotAwardRedemptionOrderRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SpotAwardRedemptionOrder` entity based on its keys.
     * @param spotAwardRedemptionExternalCode Key property. See [[SpotAwardRedemptionOrder.spotAwardRedemptionExternalCode]].
     * @param externalCode Key property. See [[SpotAwardRedemptionOrder.externalCode]].
     * @returns A request builder for creating requests to retrieve one `SpotAwardRedemptionOrder` entity based on its keys.
     */
    SpotAwardRedemptionOrderRequestBuilder.prototype.getByKey = function (spotAwardRedemptionExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(SpotAwardRedemptionOrder_1.SpotAwardRedemptionOrder, {
            SpotAwardRedemption_externalCode: spotAwardRedemptionExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `SpotAwardRedemptionOrder` entities.
     * @returns A request builder for creating requests to retrieve all `SpotAwardRedemptionOrder` entities.
     */
    SpotAwardRedemptionOrderRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(SpotAwardRedemptionOrder_1.SpotAwardRedemptionOrder);
    };
    /**
     * Returns a request builder for creating a `SpotAwardRedemptionOrder` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SpotAwardRedemptionOrder`.
     */
    SpotAwardRedemptionOrderRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(SpotAwardRedemptionOrder_1.SpotAwardRedemptionOrder, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SpotAwardRedemptionOrder`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SpotAwardRedemptionOrder`.
     */
    SpotAwardRedemptionOrderRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(SpotAwardRedemptionOrder_1.SpotAwardRedemptionOrder, entity);
    };
    SpotAwardRedemptionOrderRequestBuilder.prototype.delete = function (spotAwardRedemptionExternalCodeOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(SpotAwardRedemptionOrder_1.SpotAwardRedemptionOrder, spotAwardRedemptionExternalCodeOrEntity instanceof SpotAwardRedemptionOrder_1.SpotAwardRedemptionOrder ? spotAwardRedemptionExternalCodeOrEntity : {
            SpotAwardRedemption_externalCode: spotAwardRedemptionExternalCodeOrEntity,
            externalCode: externalCode
        });
    };
    return SpotAwardRedemptionOrderRequestBuilder;
}(core_1.RequestBuilder));
exports.SpotAwardRedemptionOrderRequestBuilder = SpotAwardRedemptionOrderRequestBuilder;
//# sourceMappingURL=SpotAwardRedemptionOrderRequestBuilder.js.map