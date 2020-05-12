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
var EmpCompensation_1 = require("./EmpCompensation");
/**
 * Request builder class for operations supported on the [[EmpCompensation]] entity.
 */
var EmpCompensationRequestBuilder = /** @class */ (function (_super) {
    __extends(EmpCompensationRequestBuilder, _super);
    function EmpCompensationRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmpCompensation` entity based on its keys.
     * @param seqNumber Key property. See [[EmpCompensation.seqNumber]].
     * @param startDate Key property. See [[EmpCompensation.startDate]].
     * @param userId Key property. See [[EmpCompensation.userId]].
     * @returns A request builder for creating requests to retrieve one `EmpCompensation` entity based on its keys.
     */
    EmpCompensationRequestBuilder.prototype.getByKey = function (seqNumber, startDate, userId) {
        return new core_1.GetByKeyRequestBuilder(EmpCompensation_1.EmpCompensation, {
            seqNumber: seqNumber,
            startDate: startDate,
            userId: userId
        });
    };
    /**
     * Returns a request builder for querying all `EmpCompensation` entities.
     * @returns A request builder for creating requests to retrieve all `EmpCompensation` entities.
     */
    EmpCompensationRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EmpCompensation_1.EmpCompensation);
    };
    return EmpCompensationRequestBuilder;
}(core_1.RequestBuilder));
exports.EmpCompensationRequestBuilder = EmpCompensationRequestBuilder;
//# sourceMappingURL=EmpCompensationRequestBuilder.js.map