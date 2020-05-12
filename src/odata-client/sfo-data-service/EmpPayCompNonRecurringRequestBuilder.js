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
var EmpPayCompNonRecurring_1 = require("./EmpPayCompNonRecurring");
/**
 * Request builder class for operations supported on the [[EmpPayCompNonRecurring]] entity.
 */
var EmpPayCompNonRecurringRequestBuilder = /** @class */ (function (_super) {
    __extends(EmpPayCompNonRecurringRequestBuilder, _super);
    function EmpPayCompNonRecurringRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmpPayCompNonRecurring` entity based on its keys.
     * @param payComponentCode Key property. See [[EmpPayCompNonRecurring.payComponentCode]].
     * @param payDate Key property. See [[EmpPayCompNonRecurring.payDate]].
     * @param userId Key property. See [[EmpPayCompNonRecurring.userId]].
     * @returns A request builder for creating requests to retrieve one `EmpPayCompNonRecurring` entity based on its keys.
     */
    EmpPayCompNonRecurringRequestBuilder.prototype.getByKey = function (payComponentCode, payDate, userId) {
        return new core_1.GetByKeyRequestBuilder(EmpPayCompNonRecurring_1.EmpPayCompNonRecurring, {
            payComponentCode: payComponentCode,
            payDate: payDate,
            userId: userId
        });
    };
    /**
     * Returns a request builder for querying all `EmpPayCompNonRecurring` entities.
     * @returns A request builder for creating requests to retrieve all `EmpPayCompNonRecurring` entities.
     */
    EmpPayCompNonRecurringRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EmpPayCompNonRecurring_1.EmpPayCompNonRecurring);
    };
    return EmpPayCompNonRecurringRequestBuilder;
}(core_1.RequestBuilder));
exports.EmpPayCompNonRecurringRequestBuilder = EmpPayCompNonRecurringRequestBuilder;
//# sourceMappingURL=EmpPayCompNonRecurringRequestBuilder.js.map