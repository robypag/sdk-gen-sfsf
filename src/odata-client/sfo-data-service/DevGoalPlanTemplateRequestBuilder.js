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
var DevGoalPlanTemplate_1 = require("./DevGoalPlanTemplate");
/**
 * Request builder class for operations supported on the [[DevGoalPlanTemplate]] entity.
 */
var DevGoalPlanTemplateRequestBuilder = /** @class */ (function (_super) {
    __extends(DevGoalPlanTemplateRequestBuilder, _super);
    function DevGoalPlanTemplateRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `DevGoalPlanTemplate` entity based on its keys.
     * @param id Key property. See [[DevGoalPlanTemplate.id]].
     * @returns A request builder for creating requests to retrieve one `DevGoalPlanTemplate` entity based on its keys.
     */
    DevGoalPlanTemplateRequestBuilder.prototype.getByKey = function (id) {
        return new core_1.GetByKeyRequestBuilder(DevGoalPlanTemplate_1.DevGoalPlanTemplate, { id: id });
    };
    /**
     * Returns a request builder for querying all `DevGoalPlanTemplate` entities.
     * @returns A request builder for creating requests to retrieve all `DevGoalPlanTemplate` entities.
     */
    DevGoalPlanTemplateRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(DevGoalPlanTemplate_1.DevGoalPlanTemplate);
    };
    return DevGoalPlanTemplateRequestBuilder;
}(core_1.RequestBuilder));
exports.DevGoalPlanTemplateRequestBuilder = DevGoalPlanTemplateRequestBuilder;
//# sourceMappingURL=DevGoalPlanTemplateRequestBuilder.js.map