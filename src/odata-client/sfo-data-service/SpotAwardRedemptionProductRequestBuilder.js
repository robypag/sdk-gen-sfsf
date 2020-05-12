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
var SpotAwardRedemptionProduct_1 = require("./SpotAwardRedemptionProduct");
/**
 * Request builder class for operations supported on the [[SpotAwardRedemptionProduct]] entity.
 */
var SpotAwardRedemptionProductRequestBuilder = /** @class */ (function (_super) {
    __extends(SpotAwardRedemptionProductRequestBuilder, _super);
    function SpotAwardRedemptionProductRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SpotAwardRedemptionProduct` entity based on its keys.
     * @param spotAwardRedemptionOrderExternalCode Key property. See [[SpotAwardRedemptionProduct.spotAwardRedemptionOrderExternalCode]].
     * @param spotAwardRedemptionExternalCode Key property. See [[SpotAwardRedemptionProduct.spotAwardRedemptionExternalCode]].
     * @param externalCode Key property. See [[SpotAwardRedemptionProduct.externalCode]].
     * @returns A request builder for creating requests to retrieve one `SpotAwardRedemptionProduct` entity based on its keys.
     */
    SpotAwardRedemptionProductRequestBuilder.prototype.getByKey = function (spotAwardRedemptionOrderExternalCode, spotAwardRedemptionExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(SpotAwardRedemptionProduct_1.SpotAwardRedemptionProduct, {
            SpotAwardRedemptionOrder_externalCode: spotAwardRedemptionOrderExternalCode,
            SpotAwardRedemption_externalCode: spotAwardRedemptionExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `SpotAwardRedemptionProduct` entities.
     * @returns A request builder for creating requests to retrieve all `SpotAwardRedemptionProduct` entities.
     */
    SpotAwardRedemptionProductRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(SpotAwardRedemptionProduct_1.SpotAwardRedemptionProduct);
    };
    /**
     * Returns a request builder for creating a `SpotAwardRedemptionProduct` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SpotAwardRedemptionProduct`.
     */
    SpotAwardRedemptionProductRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(SpotAwardRedemptionProduct_1.SpotAwardRedemptionProduct, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SpotAwardRedemptionProduct`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SpotAwardRedemptionProduct`.
     */
    SpotAwardRedemptionProductRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(SpotAwardRedemptionProduct_1.SpotAwardRedemptionProduct, entity);
    };
    SpotAwardRedemptionProductRequestBuilder.prototype.delete = function (spotAwardRedemptionOrderExternalCodeOrEntity, spotAwardRedemptionExternalCode, externalCode) {
        return new core_1.DeleteRequestBuilder(SpotAwardRedemptionProduct_1.SpotAwardRedemptionProduct, spotAwardRedemptionOrderExternalCodeOrEntity instanceof SpotAwardRedemptionProduct_1.SpotAwardRedemptionProduct ? spotAwardRedemptionOrderExternalCodeOrEntity : {
            SpotAwardRedemptionOrder_externalCode: spotAwardRedemptionOrderExternalCodeOrEntity,
            SpotAwardRedemption_externalCode: spotAwardRedemptionExternalCode,
            externalCode: externalCode
        });
    };
    return SpotAwardRedemptionProductRequestBuilder;
}(core_1.RequestBuilder));
exports.SpotAwardRedemptionProductRequestBuilder = SpotAwardRedemptionProductRequestBuilder;
//# sourceMappingURL=SpotAwardRedemptionProductRequestBuilder.js.map