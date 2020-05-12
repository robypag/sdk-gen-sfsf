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
var JobApplicationInterviewFieldControls_1 = require("./JobApplicationInterviewFieldControls");
/**
 * Request builder class for operations supported on the [[JobApplicationInterviewFieldControls]] entity.
 */
var JobApplicationInterviewFieldControlsRequestBuilder = /** @class */ (function (_super) {
    __extends(JobApplicationInterviewFieldControlsRequestBuilder, _super);
    function JobApplicationInterviewFieldControlsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobApplicationInterviewFieldControls` entity based on its keys.
     * @param applicationInterviewId Key property. See [[JobApplicationInterviewFieldControls.applicationInterviewId]].
     * @returns A request builder for creating requests to retrieve one `JobApplicationInterviewFieldControls` entity based on its keys.
     */
    JobApplicationInterviewFieldControlsRequestBuilder.prototype.getByKey = function (applicationInterviewId) {
        return new core_1.GetByKeyRequestBuilder(JobApplicationInterviewFieldControls_1.JobApplicationInterviewFieldControls, { applicationInterviewId: applicationInterviewId });
    };
    /**
     * Returns a request builder for querying all `JobApplicationInterviewFieldControls` entities.
     * @returns A request builder for creating requests to retrieve all `JobApplicationInterviewFieldControls` entities.
     */
    JobApplicationInterviewFieldControlsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobApplicationInterviewFieldControls_1.JobApplicationInterviewFieldControls);
    };
    return JobApplicationInterviewFieldControlsRequestBuilder;
}(core_1.RequestBuilder));
exports.JobApplicationInterviewFieldControlsRequestBuilder = JobApplicationInterviewFieldControlsRequestBuilder;
//# sourceMappingURL=JobApplicationInterviewFieldControlsRequestBuilder.js.map