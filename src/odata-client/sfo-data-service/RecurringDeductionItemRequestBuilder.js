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
var RecurringDeductionItem_1 = require("./RecurringDeductionItem");
/**
 * Request builder class for operations supported on the [[RecurringDeductionItem]] entity.
 */
var RecurringDeductionItemRequestBuilder = /** @class */ (function (_super) {
    __extends(RecurringDeductionItemRequestBuilder, _super);
    function RecurringDeductionItemRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `RecurringDeductionItem` entity based on its keys.
     * @param recurringDeductionEffectiveStartDate Key property. See [[RecurringDeductionItem.recurringDeductionEffectiveStartDate]].
     * @param recurringDeductionUserSysId Key property. See [[RecurringDeductionItem.recurringDeductionUserSysId]].
     * @param payComponentType Key property. See [[RecurringDeductionItem.payComponentType]].
     * @returns A request builder for creating requests to retrieve one `RecurringDeductionItem` entity based on its keys.
     */
    RecurringDeductionItemRequestBuilder.prototype.getByKey = function (recurringDeductionEffectiveStartDate, recurringDeductionUserSysId, payComponentType) {
        return new core_1.GetByKeyRequestBuilder(RecurringDeductionItem_1.RecurringDeductionItem, {
            RecurringDeduction_effectiveStartDate: recurringDeductionEffectiveStartDate,
            RecurringDeduction_userSysId: recurringDeductionUserSysId,
            payComponentType: payComponentType
        });
    };
    /**
     * Returns a request builder for querying all `RecurringDeductionItem` entities.
     * @returns A request builder for creating requests to retrieve all `RecurringDeductionItem` entities.
     */
    RecurringDeductionItemRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(RecurringDeductionItem_1.RecurringDeductionItem);
    };
    return RecurringDeductionItemRequestBuilder;
}(core_1.RequestBuilder));
exports.RecurringDeductionItemRequestBuilder = RecurringDeductionItemRequestBuilder;
//# sourceMappingURL=RecurringDeductionItemRequestBuilder.js.map