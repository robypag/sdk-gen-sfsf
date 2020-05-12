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
var RbpRule_1 = require("./RbpRule");
/**
 * Request builder class for operations supported on the [[RbpRule]] entity.
 */
var RbpRuleRequestBuilder = /** @class */ (function (_super) {
    __extends(RbpRuleRequestBuilder, _super);
    function RbpRuleRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `RbpRule` entity based on its keys.
     * @param ruleId Key property. See [[RbpRule.ruleId]].
     * @returns A request builder for creating requests to retrieve one `RbpRule` entity based on its keys.
     */
    RbpRuleRequestBuilder.prototype.getByKey = function (ruleId) {
        return new core_1.GetByKeyRequestBuilder(RbpRule_1.RbpRule, { ruleId: ruleId });
    };
    /**
     * Returns a request builder for querying all `RbpRule` entities.
     * @returns A request builder for creating requests to retrieve all `RbpRule` entities.
     */
    RbpRuleRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(RbpRule_1.RbpRule);
    };
    RbpRuleRequestBuilder.prototype.delete = function (ruleIdOrEntity) {
        return new core_1.DeleteRequestBuilder(RbpRule_1.RbpRule, ruleIdOrEntity instanceof RbpRule_1.RbpRule ? ruleIdOrEntity : { ruleId: ruleIdOrEntity });
    };
    return RbpRuleRequestBuilder;
}(core_1.RequestBuilder));
exports.RbpRuleRequestBuilder = RbpRuleRequestBuilder;
//# sourceMappingURL=RbpRuleRequestBuilder.js.map