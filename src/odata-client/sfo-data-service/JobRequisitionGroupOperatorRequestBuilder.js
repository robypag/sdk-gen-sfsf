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
var JobRequisitionGroupOperator_1 = require("./JobRequisitionGroupOperator");
/**
 * Request builder class for operations supported on the [[JobRequisitionGroupOperator]] entity.
 */
var JobRequisitionGroupOperatorRequestBuilder = /** @class */ (function (_super) {
    __extends(JobRequisitionGroupOperatorRequestBuilder, _super);
    function JobRequisitionGroupOperatorRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobRequisitionGroupOperator` entity based on its keys.
     * @param jobReqId Key property. See [[JobRequisitionGroupOperator.jobReqId]].
     * @param operatorRole Key property. See [[JobRequisitionGroupOperator.operatorRole]].
     * @param userGroupId Key property. See [[JobRequisitionGroupOperator.userGroupId]].
     * @returns A request builder for creating requests to retrieve one `JobRequisitionGroupOperator` entity based on its keys.
     */
    JobRequisitionGroupOperatorRequestBuilder.prototype.getByKey = function (jobReqId, operatorRole, userGroupId) {
        return new core_1.GetByKeyRequestBuilder(JobRequisitionGroupOperator_1.JobRequisitionGroupOperator, {
            jobReqId: jobReqId,
            operatorRole: operatorRole,
            userGroupId: userGroupId
        });
    };
    /**
     * Returns a request builder for querying all `JobRequisitionGroupOperator` entities.
     * @returns A request builder for creating requests to retrieve all `JobRequisitionGroupOperator` entities.
     */
    JobRequisitionGroupOperatorRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobRequisitionGroupOperator_1.JobRequisitionGroupOperator);
    };
    return JobRequisitionGroupOperatorRequestBuilder;
}(core_1.RequestBuilder));
exports.JobRequisitionGroupOperatorRequestBuilder = JobRequisitionGroupOperatorRequestBuilder;
//# sourceMappingURL=JobRequisitionGroupOperatorRequestBuilder.js.map