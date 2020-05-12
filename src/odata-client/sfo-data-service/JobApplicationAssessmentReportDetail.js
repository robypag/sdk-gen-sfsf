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
var JobApplicationAssessmentReportDetailRequestBuilder_1 = require("./JobApplicationAssessmentReportDetailRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobApplicationAssessmentReportDetail" of service "SFOData".
 */
var JobApplicationAssessmentReportDetail = /** @class */ (function (_super) {
    __extends(JobApplicationAssessmentReportDetail, _super);
    function JobApplicationAssessmentReportDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobApplicationAssessmentReportDetail`.
     * @returns A builder that constructs instances of entity type `JobApplicationAssessmentReportDetail`.
     */
    JobApplicationAssessmentReportDetail.builder = function () {
        return core_1.Entity.entityBuilder(JobApplicationAssessmentReportDetail);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobApplicationAssessmentReportDetail` entity type.
     * @returns A `JobApplicationAssessmentReportDetail` request builder.
     */
    JobApplicationAssessmentReportDetail.requestBuilder = function () {
        return new JobApplicationAssessmentReportDetailRequestBuilder_1.JobApplicationAssessmentReportDetailRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationAssessmentReportDetail`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplicationAssessmentReportDetail`.
     */
    JobApplicationAssessmentReportDetail.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobApplicationAssessmentReportDetail);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobApplicationAssessmentReportDetail.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobApplicationAssessmentReportDetail.
     */
    JobApplicationAssessmentReportDetail._entityName = 'JobApplicationAssessmentReportDetail';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplicationAssessmentReportDetail.
     */
    JobApplicationAssessmentReportDetail._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobApplicationAssessmentReportDetail._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobApplicationAssessmentReportDetail;
}(core_1.Entity));
exports.JobApplicationAssessmentReportDetail = JobApplicationAssessmentReportDetail;
var JobApplicationAssessmentReport_1 = require("./JobApplicationAssessmentReport");
(function (JobApplicationAssessmentReportDetail) {
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationAssessmentReportDetail.ID = new core_1.BigNumberField('id', JobApplicationAssessmentReportDetail, 'Edm.Int64');
    /**
     * Static representation of the [[scoreComponent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationAssessmentReportDetail.SCORE_COMPONENT = new core_1.StringField('scoreComponent', JobApplicationAssessmentReportDetail, 'Edm.String');
    /**
     * Static representation of the [[scoreValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationAssessmentReportDetail.SCORE_VALUE = new core_1.StringField('scoreValue', JobApplicationAssessmentReportDetail, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[assessmentReport]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationAssessmentReportDetail.ASSESSMENT_REPORT = new core_1.OneToOneLink('assessmentReport', JobApplicationAssessmentReportDetail, JobApplicationAssessmentReport_1.JobApplicationAssessmentReport);
    /**
     * All fields of the JobApplicationAssessmentReportDetail entity.
     */
    JobApplicationAssessmentReportDetail._allFields = [
        JobApplicationAssessmentReportDetail.ID,
        JobApplicationAssessmentReportDetail.SCORE_COMPONENT,
        JobApplicationAssessmentReportDetail.SCORE_VALUE,
        JobApplicationAssessmentReportDetail.ASSESSMENT_REPORT
    ];
    /**
     * All fields selector.
     */
    JobApplicationAssessmentReportDetail.ALL_FIELDS = new core_1.AllFields('*', JobApplicationAssessmentReportDetail);
    /**
     * All key fields of the JobApplicationAssessmentReportDetail entity.
     */
    JobApplicationAssessmentReportDetail._keyFields = [JobApplicationAssessmentReportDetail.ID];
    /**
     * Mapping of all key field names to the respective static field property JobApplicationAssessmentReportDetail.
     */
    JobApplicationAssessmentReportDetail._keys = JobApplicationAssessmentReportDetail._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobApplicationAssessmentReportDetail = exports.JobApplicationAssessmentReportDetail || (exports.JobApplicationAssessmentReportDetail = {}));
exports.JobApplicationAssessmentReportDetail = JobApplicationAssessmentReportDetail;
//# sourceMappingURL=JobApplicationAssessmentReportDetail.js.map