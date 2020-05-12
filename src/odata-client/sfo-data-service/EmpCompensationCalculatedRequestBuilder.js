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
var EmpCompensationCalculated_1 = require("./EmpCompensationCalculated");
/**
 * Request builder class for operations supported on the [[EmpCompensationCalculated]] entity.
 */
var EmpCompensationCalculatedRequestBuilder = /** @class */ (function (_super) {
    __extends(EmpCompensationCalculatedRequestBuilder, _super);
    function EmpCompensationCalculatedRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmpCompensationCalculated` entity based on its keys.
     * @param seqNumber Key property. See [[EmpCompensationCalculated.seqNumber]].
     * @param startDate Key property. See [[EmpCompensationCalculated.startDate]].
     * @param userId Key property. See [[EmpCompensationCalculated.userId]].
     * @returns A request builder for creating requests to retrieve one `EmpCompensationCalculated` entity based on its keys.
     */
    EmpCompensationCalculatedRequestBuilder.prototype.getByKey = function (seqNumber, startDate, userId) {
        return new core_1.GetByKeyRequestBuilder(EmpCompensationCalculated_1.EmpCompensationCalculated, {
            seqNumber: seqNumber,
            startDate: startDate,
            userId: userId
        });
    };
    /**
     * Returns a request builder for querying all `EmpCompensationCalculated` entities.
     * @returns A request builder for creating requests to retrieve all `EmpCompensationCalculated` entities.
     */
    EmpCompensationCalculatedRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EmpCompensationCalculated_1.EmpCompensationCalculated);
    };
    return EmpCompensationCalculatedRequestBuilder;
}(core_1.RequestBuilder));
exports.EmpCompensationCalculatedRequestBuilder = EmpCompensationCalculatedRequestBuilder;
//# sourceMappingURL=EmpCompensationCalculatedRequestBuilder.js.map