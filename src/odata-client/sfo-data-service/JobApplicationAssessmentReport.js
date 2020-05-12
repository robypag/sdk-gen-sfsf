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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var JobApplicationAssessmentReportRequestBuilder_1 = require("./JobApplicationAssessmentReportRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobApplicationAssessmentReport" of service "SFOData".
 */
var JobApplicationAssessmentReport = /** @class */ (function (_super) {
    __extends(JobApplicationAssessmentReport, _super);
    function JobApplicationAssessmentReport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobApplicationAssessmentReport`.
     * @returns A builder that constructs instances of entity type `JobApplicationAssessmentReport`.
     */
    JobApplicationAssessmentReport.builder = function () {
        return core_1.Entity.entityBuilder(JobApplicationAssessmentReport);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobApplicationAssessmentReport` entity type.
     * @returns A `JobApplicationAssessmentReport` request builder.
     */
    JobApplicationAssessmentReport.requestBuilder = function () {
        return new JobApplicationAssessmentReportRequestBuilder_1.JobApplicationAssessmentReportRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationAssessmentReport`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplicationAssessmentReport`.
     */
    JobApplicationAssessmentReport.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobApplicationAssessmentReport);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobApplicationAssessmentReport.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobApplicationAssessmentReport.
     */
    JobApplicationAssessmentReport._entityName = 'JobApplicationAssessmentReport';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplicationAssessmentReport.
     */
    JobApplicationAssessmentReport._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobApplicationAssessmentReport._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobApplicationAssessmentReport;
}(core_1.Entity));
exports.JobApplicationAssessmentReport = JobApplicationAssessmentReport;
var JobApplicationAssessmentReportDetail_1 = require("./JobApplicationAssessmentReportDetail");
var JobApplicationAssessmentOrder_1 = require("./JobApplicationAssessmentOrder");
(function (JobApplicationAssessmentReport) {
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationAssessmentReport.ID = new core_1.BigNumberField('id', JobApplicationAssessmentReport, 'Edm.Int64');
    /**
     * Static representation of the [[orderId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationAssessmentReport.ORDER_ID = new core_1.BigNumberField('orderId', JobApplicationAssessmentReport, 'Edm.Int64');
    /**
     * Static representation of the [[reportUrl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationAssessmentReport.REPORT_URL = new core_1.StringField('reportURL', JobApplicationAssessmentReport, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationAssessmentReport.STATUS = new core_1.BigNumberField('status', JobApplicationAssessmentReport, 'Edm.Int64');
    /**
     * Static representation of the [[statusDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationAssessmentReport.STATUS_DATE = new core_1.DateField('statusDate', JobApplicationAssessmentReport, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[statusDetails]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationAssessmentReport.STATUS_DETAILS = new core_1.StringField('statusDetails', JobApplicationAssessmentReport, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[assessmentReportDetail]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationAssessmentReport.ASSESSMENT_REPORT_DETAIL = new core_1.Link('assessmentReportDetail', JobApplicationAssessmentReport, JobApplicationAssessmentReportDetail_1.JobApplicationAssessmentReportDetail);
    /**
     * Static representation of the one-to-one navigation property [[jobApplicationAssessmentOrder]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationAssessmentReport.JOB_APPLICATION_ASSESSMENT_ORDER = new core_1.OneToOneLink('jobApplicationAssessmentOrder', JobApplicationAssessmentReport, JobApplicationAssessmentOrder_1.JobApplicationAssessmentOrder);
    /**
     * All fields of the JobApplicationAssessmentReport entity.
     */
    JobApplicationAssessmentReport._allFields = [
        JobApplicationAssessmentReport.ID,
        JobApplicationAssessmentReport.ORDER_ID,
        JobApplicationAssessmentReport.REPORT_URL,
        JobApplicationAssessmentReport.STATUS,
        JobApplicationAssessmentReport.STATUS_DATE,
        JobApplicationAssessmentReport.STATUS_DETAILS,
        JobApplicationAssessmentReport.ASSESSMENT_REPORT_DETAIL,
        JobApplicationAssessmentReport.JOB_APPLICATION_ASSESSMENT_ORDER
    ];
    /**
     * All fields selector.
     */
    JobApplicationAssessmentReport.ALL_FIELDS = new core_1.AllFields('*', JobApplicationAssessmentReport);
    /**
     * All key fields of the JobApplicationAssessmentReport entity.
     */
    JobApplicationAssessmentReport._keyFields = [JobApplicationAssessmentReport.ID];
    /**
     * Mapping of all key field names to the respective static field property JobApplicationAssessmentReport.
     */
    JobApplicationAssessmentReport._keys = JobApplicationAssessmentReport._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobApplicationAssessmentReport = exports.JobApplicationAssessmentReport || (exports.JobApplicationAssessmentReport = {}));
exports.JobApplicationAssessmentReport = JobApplicationAssessmentReport;
//# sourceMappingURL=JobApplicationAssessmentReport.js.map