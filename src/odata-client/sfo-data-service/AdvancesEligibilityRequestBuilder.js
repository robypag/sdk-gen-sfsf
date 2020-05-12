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
var AdvancesEligibility_1 = require("./AdvancesEligibility");
/**
 * Request builder class for operations supported on the [[AdvancesEligibility]] entity.
 */
var AdvancesEligibilityRequestBuilder = /** @class */ (function (_super) {
    __extends(AdvancesEligibilityRequestBuilder, _super);
    function AdvancesEligibilityRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `AdvancesEligibility` entity based on its keys.
     * @param effectiveStartDate Key property. See [[AdvancesEligibility.effectiveStartDate]].
     * @param externalCode Key property. See [[AdvancesEligibility.externalCode]].
     * @returns A request builder for creating requests to retrieve one `AdvancesEligibility` entity based on its keys.
     */
    AdvancesEligibilityRequestBuilder.prototype.getByKey = function (effectiveStartDate, externalCode) {
        return new core_1.GetByKeyRequestBuilder(AdvancesEligibility_1.AdvancesEligibility, {
            effectiveStartDate: effectiveStartDate,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `AdvancesEligibility` entities.
     * @returns A request builder for creating requests to retrieve all `AdvancesEligibility` entities.
     */
    AdvancesEligibilityRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(AdvancesEligibility_1.AdvancesEligibility);
    };
    return AdvancesEligibilityRequestBuilder;
}(core_1.RequestBuilder));
exports.AdvancesEligibilityRequestBuilder = AdvancesEligibilityRequestBuilder;
//# sourceMappingURL=AdvancesEligibilityRequestBuilder.js.map