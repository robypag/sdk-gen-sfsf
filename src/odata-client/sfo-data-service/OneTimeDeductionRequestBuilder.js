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
var OneTimeDeduction_1 = require("./OneTimeDeduction");
/**
 * Request builder class for operations supported on the [[OneTimeDeduction]] entity.
 */
var OneTimeDeductionRequestBuilder = /** @class */ (function (_super) {
    __extends(OneTimeDeductionRequestBuilder, _super);
    function OneTimeDeductionRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `OneTimeDeduction` entity based on its keys.
     * @param externalCode Key property. See [[OneTimeDeduction.externalCode]].
     * @returns A request builder for creating requests to retrieve one `OneTimeDeduction` entity based on its keys.
     */
    OneTimeDeductionRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(OneTimeDeduction_1.OneTimeDeduction, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `OneTimeDeduction` entities.
     * @returns A request builder for creating requests to retrieve all `OneTimeDeduction` entities.
     */
    OneTimeDeductionRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(OneTimeDeduction_1.OneTimeDeduction);
    };
    return OneTimeDeductionRequestBuilder;
}(core_1.RequestBuilder));
exports.OneTimeDeductionRequestBuilder = OneTimeDeductionRequestBuilder;
//# sourceMappingURL=OneTimeDeductionRequestBuilder.js.map