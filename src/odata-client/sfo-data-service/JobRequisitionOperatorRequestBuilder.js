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
var JobRequisitionOperator_1 = require("./JobRequisitionOperator");
/**
 * Request builder class for operations supported on the [[JobRequisitionOperator]] entity.
 */
var JobRequisitionOperatorRequestBuilder = /** @class */ (function (_super) {
    __extends(JobRequisitionOperatorRequestBuilder, _super);
    function JobRequisitionOperatorRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobRequisitionOperator` entity based on its keys.
     * @param jobReqId Key property. See [[JobRequisitionOperator.jobReqId]].
     * @param operatorRole Key property. See [[JobRequisitionOperator.operatorRole]].
     * @returns A request builder for creating requests to retrieve one `JobRequisitionOperator` entity based on its keys.
     */
    JobRequisitionOperatorRequestBuilder.prototype.getByKey = function (jobReqId, operatorRole) {
        return new core_1.GetByKeyRequestBuilder(JobRequisitionOperator_1.JobRequisitionOperator, {
            jobReqId: jobReqId,
            operatorRole: operatorRole
        });
    };
    /**
     * Returns a request builder for querying all `JobRequisitionOperator` entities.
     * @returns A request builder for creating requests to retrieve all `JobRequisitionOperator` entities.
     */
    JobRequisitionOperatorRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobRequisitionOperator_1.JobRequisitionOperator);
    };
    return JobRequisitionOperatorRequestBuilder;
}(core_1.RequestBuilder));
exports.JobRequisitionOperatorRequestBuilder = JobRequisitionOperatorRequestBuilder;
//# sourceMappingURL=JobRequisitionOperatorRequestBuilder.js.map