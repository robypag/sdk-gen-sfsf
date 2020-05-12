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
var RecurringDeduction_1 = require("./RecurringDeduction");
/**
 * Request builder class for operations supported on the [[RecurringDeduction]] entity.
 */
var RecurringDeductionRequestBuilder = /** @class */ (function (_super) {
    __extends(RecurringDeductionRequestBuilder, _super);
    function RecurringDeductionRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `RecurringDeduction` entity based on its keys.
     * @param effectiveStartDate Key property. See [[RecurringDeduction.effectiveStartDate]].
     * @param userSysId Key property. See [[RecurringDeduction.userSysId]].
     * @returns A request builder for creating requests to retrieve one `RecurringDeduction` entity based on its keys.
     */
    RecurringDeductionRequestBuilder.prototype.getByKey = function (effectiveStartDate, userSysId) {
        return new core_1.GetByKeyRequestBuilder(RecurringDeduction_1.RecurringDeduction, {
            effectiveStartDate: effectiveStartDate,
            userSysId: userSysId
        });
    };
    /**
     * Returns a request builder for querying all `RecurringDeduction` entities.
     * @returns A request builder for creating requests to retrieve all `RecurringDeduction` entities.
     */
    RecurringDeductionRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(RecurringDeduction_1.RecurringDeduction);
    };
    return RecurringDeductionRequestBuilder;
}(core_1.RequestBuilder));
exports.RecurringDeductionRequestBuilder = RecurringDeductionRequestBuilder;
//# sourceMappingURL=RecurringDeductionRequestBuilder.js.map