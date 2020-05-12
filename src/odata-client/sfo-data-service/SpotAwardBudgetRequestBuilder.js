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
var SpotAwardBudget_1 = require("./SpotAwardBudget");
/**
 * Request builder class for operations supported on the [[SpotAwardBudget]] entity.
 */
var SpotAwardBudgetRequestBuilder = /** @class */ (function (_super) {
    __extends(SpotAwardBudgetRequestBuilder, _super);
    function SpotAwardBudgetRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SpotAwardBudget` entity based on its keys.
     * @param effectiveStartDate Key property. See [[SpotAwardBudget.effectiveStartDate]].
     * @param externalCode Key property. See [[SpotAwardBudget.externalCode]].
     * @returns A request builder for creating requests to retrieve one `SpotAwardBudget` entity based on its keys.
     */
    SpotAwardBudgetRequestBuilder.prototype.getByKey = function (effectiveStartDate, externalCode) {
        return new core_1.GetByKeyRequestBuilder(SpotAwardBudget_1.SpotAwardBudget, {
            effectiveStartDate: effectiveStartDate,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `SpotAwardBudget` entities.
     * @returns A request builder for creating requests to retrieve all `SpotAwardBudget` entities.
     */
    SpotAwardBudgetRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(SpotAwardBudget_1.SpotAwardBudget);
    };
    /**
     * Returns a request builder for creating a `SpotAwardBudget` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SpotAwardBudget`.
     */
    SpotAwardBudgetRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(SpotAwardBudget_1.SpotAwardBudget, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SpotAwardBudget`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SpotAwardBudget`.
     */
    SpotAwardBudgetRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(SpotAwardBudget_1.SpotAwardBudget, entity);
    };
    SpotAwardBudgetRequestBuilder.prototype.delete = function (effectiveStartDateOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(SpotAwardBudget_1.SpotAwardBudget, effectiveStartDateOrEntity instanceof SpotAwardBudget_1.SpotAwardBudget ? effectiveStartDateOrEntity : {
            effectiveStartDate: effectiveStartDateOrEntity,
            externalCode: externalCode
        });
    };
    return SpotAwardBudgetRequestBuilder;
}(core_1.RequestBuilder));
exports.SpotAwardBudgetRequestBuilder = SpotAwardBudgetRequestBuilder;
//# sourceMappingURL=SpotAwardBudgetRequestBuilder.js.map