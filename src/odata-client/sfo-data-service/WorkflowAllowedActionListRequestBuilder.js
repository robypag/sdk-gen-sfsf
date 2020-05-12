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
var WorkflowAllowedActionList_1 = require("./WorkflowAllowedActionList");
/**
 * Request builder class for operations supported on the [[WorkflowAllowedActionList]] entity.
 */
var WorkflowAllowedActionListRequestBuilder = /** @class */ (function (_super) {
    __extends(WorkflowAllowedActionListRequestBuilder, _super);
    function WorkflowAllowedActionListRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `WorkflowAllowedActionList` entity based on its keys.
     * @param wfRequestId Key property. See [[WorkflowAllowedActionList.wfRequestId]].
     * @returns A request builder for creating requests to retrieve one `WorkflowAllowedActionList` entity based on its keys.
     */
    WorkflowAllowedActionListRequestBuilder.prototype.getByKey = function (wfRequestId) {
        return new core_1.GetByKeyRequestBuilder(WorkflowAllowedActionList_1.WorkflowAllowedActionList, { wfRequestId: wfRequestId });
    };
    /**
     * Returns a request builder for querying all `WorkflowAllowedActionList` entities.
     * @returns A request builder for creating requests to retrieve all `WorkflowAllowedActionList` entities.
     */
    WorkflowAllowedActionListRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(WorkflowAllowedActionList_1.WorkflowAllowedActionList);
    };
    return WorkflowAllowedActionListRequestBuilder;
}(core_1.RequestBuilder));
exports.WorkflowAllowedActionListRequestBuilder = WorkflowAllowedActionListRequestBuilder;
//# sourceMappingURL=WorkflowAllowedActionListRequestBuilder.js.map