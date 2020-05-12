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
var JobReqTemplate_Pipeline_Job_Requisition_1 = require("./JobReqTemplate_Pipeline_Job_Requisition");
/**
 * Request builder class for operations supported on the [[JobReqTemplate_Pipeline_Job_Requisition]] entity.
 */
var JobReqTemplate_Pipeline_Job_RequisitionRequestBuilder = /** @class */ (function (_super) {
    __extends(JobReqTemplate_Pipeline_Job_RequisitionRequestBuilder, _super);
    function JobReqTemplate_Pipeline_Job_RequisitionRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobReqTemplate_Pipeline_Job_Requisition` entity based on its keys.
     * @param templateId Key property. See [[JobReqTemplate_Pipeline_Job_Requisition.templateId]].
     * @returns A request builder for creating requests to retrieve one `JobReqTemplate_Pipeline_Job_Requisition` entity based on its keys.
     */
    JobReqTemplate_Pipeline_Job_RequisitionRequestBuilder.prototype.getByKey = function (templateId) {
        return new core_1.GetByKeyRequestBuilder(JobReqTemplate_Pipeline_Job_Requisition_1.JobReqTemplate_Pipeline_Job_Requisition, { templateId: templateId });
    };
    /**
     * Returns a request builder for querying all `JobReqTemplate_Pipeline_Job_Requisition` entities.
     * @returns A request builder for creating requests to retrieve all `JobReqTemplate_Pipeline_Job_Requisition` entities.
     */
    JobReqTemplate_Pipeline_Job_RequisitionRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobReqTemplate_Pipeline_Job_Requisition_1.JobReqTemplate_Pipeline_Job_Requisition);
    };
    return JobReqTemplate_Pipeline_Job_RequisitionRequestBuilder;
}(core_1.RequestBuilder));
exports.JobReqTemplate_Pipeline_Job_RequisitionRequestBuilder = JobReqTemplate_Pipeline_Job_RequisitionRequestBuilder;
//# sourceMappingURL=JobReqTemplate_Pipeline_Job_RequisitionRequestBuilder.js.map