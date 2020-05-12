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
var GoalPlanTemplate_1 = require("./GoalPlanTemplate");
/**
 * Request builder class for operations supported on the [[GoalPlanTemplate]] entity.
 */
var GoalPlanTemplateRequestBuilder = /** @class */ (function (_super) {
    __extends(GoalPlanTemplateRequestBuilder, _super);
    function GoalPlanTemplateRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `GoalPlanTemplate` entity based on its keys.
     * @param id Key property. See [[GoalPlanTemplate.id]].
     * @returns A request builder for creating requests to retrieve one `GoalPlanTemplate` entity based on its keys.
     */
    GoalPlanTemplateRequestBuilder.prototype.getByKey = function (id) {
        return new core_1.GetByKeyRequestBuilder(GoalPlanTemplate_1.GoalPlanTemplate, { id: id });
    };
    /**
     * Returns a request builder for querying all `GoalPlanTemplate` entities.
     * @returns A request builder for creating requests to retrieve all `GoalPlanTemplate` entities.
     */
    GoalPlanTemplateRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(GoalPlanTemplate_1.GoalPlanTemplate);
    };
    return GoalPlanTemplateRequestBuilder;
}(core_1.RequestBuilder));
exports.GoalPlanTemplateRequestBuilder = GoalPlanTemplateRequestBuilder;
//# sourceMappingURL=GoalPlanTemplateRequestBuilder.js.map