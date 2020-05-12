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
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var JobRequisitionPostingFieldControls_1 = require("./JobRequisitionPostingFieldControls");
/**
 * Request builder class for operations supported on the [[JobRequisitionPostingFieldControls]] entity.
 */
var JobRequisitionPostingFieldControlsRequestBuilder = /** @class */ (function (_super) {
    __extends(JobRequisitionPostingFieldControlsRequestBuilder, _super);
    function JobRequisitionPostingFieldControlsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobRequisitionPostingFieldControls` entity based on its keys.
     * @param jobPostingId Key property. See [[JobRequisitionPostingFieldControls.jobPostingId]].
     * @param jobReqId Key property. See [[JobRequisitionPostingFieldControls.jobReqId]].
     * @returns A request builder for creating requests to retrieve one `JobRequisitionPostingFieldControls` entity based on its keys.
     */
    JobRequisitionPostingFieldControlsRequestBuilder.prototype.getByKey = function (jobPostingId, jobReqId) {
        return new core_1.GetByKeyRequestBuilder(JobRequisitionPostingFieldControls_1.JobRequisitionPostingFieldControls, {
            jobPostingId: jobPostingId,
            jobReqId: jobReqId
        });
    };
    /**
     * Returns a request builder for querying all `JobRequisitionPostingFieldControls` entities.
     * @returns A request builder for creating requests to retrieve all `JobRequisitionPostingFieldControls` entities.
     */
    JobRequisitionPostingFieldControlsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobRequisitionPostingFieldControls_1.JobRequisitionPostingFieldControls);
    };
    return JobRequisitionPostingFieldControlsRequestBuilder;
}(core_1.RequestBuilder));
exports.JobRequisitionPostingFieldControlsRequestBuilder = JobRequisitionPostingFieldControlsRequestBuilder;
//# sourceMappingURL=JobRequisitionPostingFieldControlsRequestBuilder.js.map