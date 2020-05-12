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
var EmpCostDistributionItem_1 = require("./EmpCostDistributionItem");
/**
 * Request builder class for operations supported on the [[EmpCostDistributionItem]] entity.
 */
var EmpCostDistributionItemRequestBuilder = /** @class */ (function (_super) {
    __extends(EmpCostDistributionItemRequestBuilder, _super);
    function EmpCostDistributionItemRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmpCostDistributionItem` entity based on its keys.
     * @param empCostDistributionEffectiveStartDate Key property. See [[EmpCostDistributionItem.empCostDistributionEffectiveStartDate]].
     * @param empCostDistributionUsersSysId Key property. See [[EmpCostDistributionItem.empCostDistributionUsersSysId]].
     * @param externalCode Key property. See [[EmpCostDistributionItem.externalCode]].
     * @returns A request builder for creating requests to retrieve one `EmpCostDistributionItem` entity based on its keys.
     */
    EmpCostDistributionItemRequestBuilder.prototype.getByKey = function (empCostDistributionEffectiveStartDate, empCostDistributionUsersSysId, externalCode) {
        return new core_1.GetByKeyRequestBuilder(EmpCostDistributionItem_1.EmpCostDistributionItem, {
            EmpCostDistribution_effectiveStartDate: empCostDistributionEffectiveStartDate,
            EmpCostDistribution_usersSysId: empCostDistributionUsersSysId,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `EmpCostDistributionItem` entities.
     * @returns A request builder for creating requests to retrieve all `EmpCostDistributionItem` entities.
     */
    EmpCostDistributionItemRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EmpCostDistributionItem_1.EmpCostDistributionItem);
    };
    /**
     * Returns a request builder for creating a `EmpCostDistributionItem` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EmpCostDistributionItem`.
     */
    EmpCostDistributionItemRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(EmpCostDistributionItem_1.EmpCostDistributionItem, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `EmpCostDistributionItem`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EmpCostDistributionItem`.
     */
    EmpCostDistributionItemRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(EmpCostDistributionItem_1.EmpCostDistributionItem, entity);
    };
    EmpCostDistributionItemRequestBuilder.prototype.delete = function (empCostDistributionEffectiveStartDateOrEntity, empCostDistributionUsersSysId, externalCode) {
        return new core_1.DeleteRequestBuilder(EmpCostDistributionItem_1.EmpCostDistributionItem, empCostDistributionEffectiveStartDateOrEntity instanceof EmpCostDistributionItem_1.EmpCostDistributionItem ? empCostDistributionEffectiveStartDateOrEntity : {
            EmpCostDistribution_effectiveStartDate: empCostDistributionEffectiveStartDateOrEntity,
            EmpCostDistribution_usersSysId: empCostDistributionUsersSysId,
            externalCode: externalCode
        });
    };
    return EmpCostDistributionItemRequestBuilder;
}(core_1.RequestBuilder));
exports.EmpCostDistributionItemRequestBuilder = EmpCostDistributionItemRequestBuilder;
//# sourceMappingURL=EmpCostDistributionItemRequestBuilder.js.map