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
var JobApplicationFieldControls_1 = require("./JobApplicationFieldControls");
/**
 * Request builder class for operations supported on the [[JobApplicationFieldControls]] entity.
 */
var JobApplicationFieldControlsRequestBuilder = /** @class */ (function (_super) {
    __extends(JobApplicationFieldControlsRequestBuilder, _super);
    function JobApplicationFieldControlsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobApplicationFieldControls` entity based on its keys.
     * @param applicationId Key property. See [[JobApplicationFieldControls.applicationId]].
     * @returns A request builder for creating requests to retrieve one `JobApplicationFieldControls` entity based on its keys.
     */
    JobApplicationFieldControlsRequestBuilder.prototype.getByKey = function (applicationId) {
        return new core_1.GetByKeyRequestBuilder(JobApplicationFieldControls_1.JobApplicationFieldControls, { applicationId: applicationId });
    };
    /**
     * Returns a request builder for querying all `JobApplicationFieldControls` entities.
     * @returns A request builder for creating requests to retrieve all `JobApplicationFieldControls` entities.
     */
    JobApplicationFieldControlsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobApplicationFieldControls_1.JobApplicationFieldControls);
    };
    return JobApplicationFieldControlsRequestBuilder;
}(core_1.RequestBuilder));
exports.JobApplicationFieldControlsRequestBuilder = JobApplicationFieldControlsRequestBuilder;
//# sourceMappingURL=JobApplicationFieldControlsRequestBuilder.js.map