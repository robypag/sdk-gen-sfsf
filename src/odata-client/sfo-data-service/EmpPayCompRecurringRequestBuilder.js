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
var EmpPayCompRecurring_1 = require("./EmpPayCompRecurring");
/**
 * Request builder class for operations supported on the [[EmpPayCompRecurring]] entity.
 */
var EmpPayCompRecurringRequestBuilder = /** @class */ (function (_super) {
    __extends(EmpPayCompRecurringRequestBuilder, _super);
    function EmpPayCompRecurringRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmpPayCompRecurring` entity based on its keys.
     * @param payComponent Key property. See [[EmpPayCompRecurring.payComponent]].
     * @param seqNumber Key property. See [[EmpPayCompRecurring.seqNumber]].
     * @param startDate Key property. See [[EmpPayCompRecurring.startDate]].
     * @param userId Key property. See [[EmpPayCompRecurring.userId]].
     * @returns A request builder for creating requests to retrieve one `EmpPayCompRecurring` entity based on its keys.
     */
    EmpPayCompRecurringRequestBuilder.prototype.getByKey = function (payComponent, seqNumber, startDate, userId) {
        return new core_1.GetByKeyRequestBuilder(EmpPayCompRecurring_1.EmpPayCompRecurring, {
            payComponent: payComponent,
            seqNumber: seqNumber,
            startDate: startDate,
            userId: userId
        });
    };
    /**
     * Returns a request builder for querying all `EmpPayCompRecurring` entities.
     * @returns A request builder for creating requests to retrieve all `EmpPayCompRecurring` entities.
     */
    EmpPayCompRecurringRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EmpPayCompRecurring_1.EmpPayCompRecurring);
    };
    return EmpPayCompRecurringRequestBuilder;
}(core_1.RequestBuilder));
exports.EmpPayCompRecurringRequestBuilder = EmpPayCompRecurringRequestBuilder;
//# sourceMappingURL=EmpPayCompRecurringRequestBuilder.js.map