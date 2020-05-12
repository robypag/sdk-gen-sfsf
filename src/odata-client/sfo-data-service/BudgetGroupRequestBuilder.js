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
var BudgetGroup_1 = require("./BudgetGroup");
/**
 * Request builder class for operations supported on the [[BudgetGroup]] entity.
 */
var BudgetGroupRequestBuilder = /** @class */ (function (_super) {
    __extends(BudgetGroupRequestBuilder, _super);
    function BudgetGroupRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BudgetGroup` entity based on its keys.
     * @param effectiveStartDate Key property. See [[BudgetGroup.effectiveStartDate]].
     * @param externalCode Key property. See [[BudgetGroup.externalCode]].
     * @returns A request builder for creating requests to retrieve one `BudgetGroup` entity based on its keys.
     */
    BudgetGroupRequestBuilder.prototype.getByKey = function (effectiveStartDate, externalCode) {
        return new core_1.GetByKeyRequestBuilder(BudgetGroup_1.BudgetGroup, {
            effectiveStartDate: effectiveStartDate,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `BudgetGroup` entities.
     * @returns A request builder for creating requests to retrieve all `BudgetGroup` entities.
     */
    BudgetGroupRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(BudgetGroup_1.BudgetGroup);
    };
    /**
     * Returns a request builder for creating a `BudgetGroup` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BudgetGroup`.
     */
    BudgetGroupRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(BudgetGroup_1.BudgetGroup, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BudgetGroup`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BudgetGroup`.
     */
    BudgetGroupRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(BudgetGroup_1.BudgetGroup, entity);
    };
    BudgetGroupRequestBuilder.prototype.delete = function (effectiveStartDateOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(BudgetGroup_1.BudgetGroup, effectiveStartDateOrEntity instanceof BudgetGroup_1.BudgetGroup ? effectiveStartDateOrEntity : {
            effectiveStartDate: effectiveStartDateOrEntity,
            externalCode: externalCode
        });
    };
    return BudgetGroupRequestBuilder;
}(core_1.RequestBuilder));
exports.BudgetGroupRequestBuilder = BudgetGroupRequestBuilder;
//# sourceMappingURL=BudgetGroupRequestBuilder.js.map