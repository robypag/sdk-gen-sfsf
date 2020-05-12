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
var EmpCompensationGroupSumCalculated_1 = require("./EmpCompensationGroupSumCalculated");
/**
 * Request builder class for operations supported on the [[EmpCompensationGroupSumCalculated]] entity.
 */
var EmpCompensationGroupSumCalculatedRequestBuilder = /** @class */ (function (_super) {
    __extends(EmpCompensationGroupSumCalculatedRequestBuilder, _super);
    function EmpCompensationGroupSumCalculatedRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmpCompensationGroupSumCalculated` entity based on its keys.
     * @param seqNumber Key property. See [[EmpCompensationGroupSumCalculated.seqNumber]].
     * @param startDate Key property. See [[EmpCompensationGroupSumCalculated.startDate]].
     * @param userId Key property. See [[EmpCompensationGroupSumCalculated.userId]].
     * @returns A request builder for creating requests to retrieve one `EmpCompensationGroupSumCalculated` entity based on its keys.
     */
    EmpCompensationGroupSumCalculatedRequestBuilder.prototype.getByKey = function (seqNumber, startDate, userId) {
        return new core_1.GetByKeyRequestBuilder(EmpCompensationGroupSumCalculated_1.EmpCompensationGroupSumCalculated, {
            seqNumber: seqNumber,
            startDate: startDate,
            userId: userId
        });
    };
    /**
     * Returns a request builder for querying all `EmpCompensationGroupSumCalculated` entities.
     * @returns A request builder for creating requests to retrieve all `EmpCompensationGroupSumCalculated` entities.
     */
    EmpCompensationGroupSumCalculatedRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EmpCompensationGroupSumCalculated_1.EmpCompensationGroupSumCalculated);
    };
    return EmpCompensationGroupSumCalculatedRequestBuilder;
}(core_1.RequestBuilder));
exports.EmpCompensationGroupSumCalculatedRequestBuilder = EmpCompensationGroupSumCalculatedRequestBuilder;
//# sourceMappingURL=EmpCompensationGroupSumCalculatedRequestBuilder.js.map