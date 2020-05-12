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
var JobRequisitionLocaleFieldControls_1 = require("./JobRequisitionLocaleFieldControls");
/**
 * Request builder class for operations supported on the [[JobRequisitionLocaleFieldControls]] entity.
 */
var JobRequisitionLocaleFieldControlsRequestBuilder = /** @class */ (function (_super) {
    __extends(JobRequisitionLocaleFieldControlsRequestBuilder, _super);
    function JobRequisitionLocaleFieldControlsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobRequisitionLocaleFieldControls` entity based on its keys.
     * @param jobReqLocalId Key property. See [[JobRequisitionLocaleFieldControls.jobReqLocalId]].
     * @returns A request builder for creating requests to retrieve one `JobRequisitionLocaleFieldControls` entity based on its keys.
     */
    JobRequisitionLocaleFieldControlsRequestBuilder.prototype.getByKey = function (jobReqLocalId) {
        return new core_1.GetByKeyRequestBuilder(JobRequisitionLocaleFieldControls_1.JobRequisitionLocaleFieldControls, { jobReqLocalId: jobReqLocalId });
    };
    /**
     * Returns a request builder for querying all `JobRequisitionLocaleFieldControls` entities.
     * @returns A request builder for creating requests to retrieve all `JobRequisitionLocaleFieldControls` entities.
     */
    JobRequisitionLocaleFieldControlsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobRequisitionLocaleFieldControls_1.JobRequisitionLocaleFieldControls);
    };
    return JobRequisitionLocaleFieldControlsRequestBuilder;
}(core_1.RequestBuilder));
exports.JobRequisitionLocaleFieldControlsRequestBuilder = JobRequisitionLocaleFieldControlsRequestBuilder;
//# sourceMappingURL=JobRequisitionLocaleFieldControlsRequestBuilder.js.map