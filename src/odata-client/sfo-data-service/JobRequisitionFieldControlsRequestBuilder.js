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
var JobRequisitionFieldControls_1 = require("./JobRequisitionFieldControls");
/**
 * Request builder class for operations supported on the [[JobRequisitionFieldControls]] entity.
 */
var JobRequisitionFieldControlsRequestBuilder = /** @class */ (function (_super) {
    __extends(JobRequisitionFieldControlsRequestBuilder, _super);
    function JobRequisitionFieldControlsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobRequisitionFieldControls` entity based on its keys.
     * @param jobReqId Key property. See [[JobRequisitionFieldControls.jobReqId]].
     * @returns A request builder for creating requests to retrieve one `JobRequisitionFieldControls` entity based on its keys.
     */
    JobRequisitionFieldControlsRequestBuilder.prototype.getByKey = function (jobReqId) {
        return new core_1.GetByKeyRequestBuilder(JobRequisitionFieldControls_1.JobRequisitionFieldControls, { jobReqId: jobReqId });
    };
    /**
     * Returns a request builder for querying all `JobRequisitionFieldControls` entities.
     * @returns A request builder for creating requests to retrieve all `JobRequisitionFieldControls` entities.
     */
    JobRequisitionFieldControlsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobRequisitionFieldControls_1.JobRequisitionFieldControls);
    };
    return JobRequisitionFieldControlsRequestBuilder;
}(core_1.RequestBuilder));
exports.JobRequisitionFieldControlsRequestBuilder = JobRequisitionFieldControlsRequestBuilder;
//# sourceMappingURL=JobRequisitionFieldControlsRequestBuilder.js.map