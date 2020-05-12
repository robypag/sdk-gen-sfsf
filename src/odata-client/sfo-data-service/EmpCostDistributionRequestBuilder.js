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
var EmpCostDistribution_1 = require("./EmpCostDistribution");
/**
 * Request builder class for operations supported on the [[EmpCostDistribution]] entity.
 */
var EmpCostDistributionRequestBuilder = /** @class */ (function (_super) {
    __extends(EmpCostDistributionRequestBuilder, _super);
    function EmpCostDistributionRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmpCostDistribution` entity based on its keys.
     * @param effectiveStartDate Key property. See [[EmpCostDistribution.effectiveStartDate]].
     * @param usersSysId Key property. See [[EmpCostDistribution.usersSysId]].
     * @returns A request builder for creating requests to retrieve one `EmpCostDistribution` entity based on its keys.
     */
    EmpCostDistributionRequestBuilder.prototype.getByKey = function (effectiveStartDate, usersSysId) {
        return new core_1.GetByKeyRequestBuilder(EmpCostDistribution_1.EmpCostDistribution, {
            effectiveStartDate: effectiveStartDate,
            usersSysId: usersSysId
        });
    };
    /**
     * Returns a request builder for querying all `EmpCostDistribution` entities.
     * @returns A request builder for creating requests to retrieve all `EmpCostDistribution` entities.
     */
    EmpCostDistributionRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EmpCostDistribution_1.EmpCostDistribution);
    };
    /**
     * Returns a request builder for creating a `EmpCostDistribution` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EmpCostDistribution`.
     */
    EmpCostDistributionRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(EmpCostDistribution_1.EmpCostDistribution, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `EmpCostDistribution`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EmpCostDistribution`.
     */
    EmpCostDistributionRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(EmpCostDistribution_1.EmpCostDistribution, entity);
    };
    EmpCostDistributionRequestBuilder.prototype.delete = function (effectiveStartDateOrEntity, usersSysId) {
        return new core_1.DeleteRequestBuilder(EmpCostDistribution_1.EmpCostDistribution, effectiveStartDateOrEntity instanceof EmpCostDistribution_1.EmpCostDistribution ? effectiveStartDateOrEntity : {
            effectiveStartDate: effectiveStartDateOrEntity,
            usersSysId: usersSysId
        });
    };
    return EmpCostDistributionRequestBuilder;
}(core_1.RequestBuilder));
exports.EmpCostDistributionRequestBuilder = EmpCostDistributionRequestBuilder;
//# sourceMappingURL=EmpCostDistributionRequestBuilder.js.map