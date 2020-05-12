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
var JobAnalyzerReportingData_1 = require("./JobAnalyzerReportingData");
/**
 * Request builder class for operations supported on the [[JobAnalyzerReportingData]] entity.
 */
var JobAnalyzerReportingDataRequestBuilder = /** @class */ (function (_super) {
    __extends(JobAnalyzerReportingDataRequestBuilder, _super);
    function JobAnalyzerReportingDataRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobAnalyzerReportingData` entity based on its keys.
     * @param externalCode Key property. See [[JobAnalyzerReportingData.externalCode]].
     * @returns A request builder for creating requests to retrieve one `JobAnalyzerReportingData` entity based on its keys.
     */
    JobAnalyzerReportingDataRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(JobAnalyzerReportingData_1.JobAnalyzerReportingData, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `JobAnalyzerReportingData` entities.
     * @returns A request builder for creating requests to retrieve all `JobAnalyzerReportingData` entities.
     */
    JobAnalyzerReportingDataRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobAnalyzerReportingData_1.JobAnalyzerReportingData);
    };
    return JobAnalyzerReportingDataRequestBuilder;
}(core_1.RequestBuilder));
exports.JobAnalyzerReportingDataRequestBuilder = JobAnalyzerReportingDataRequestBuilder;
//# sourceMappingURL=JobAnalyzerReportingDataRequestBuilder.js.map