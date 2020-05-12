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
var JobApplicationInterviewFieldControlsRequestBuilder_1 = require("./JobApplicationInterviewFieldControlsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobApplicationInterviewFieldControls" of service "SFOData".
 */
var JobApplicationInterviewFieldControls = /** @class */ (function (_super) {
    __extends(JobApplicationInterviewFieldControls, _super);
    function JobApplicationInterviewFieldControls() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobApplicationInterviewFieldControls`.
     * @returns A builder that constructs instances of entity type `JobApplicationInterviewFieldControls`.
     */
    JobApplicationInterviewFieldControls.builder = function () {
        return core_1.Entity.entityBuilder(JobApplicationInterviewFieldControls);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobApplicationInterviewFieldControls` entity type.
     * @returns A `JobApplicationInterviewFieldControls` request builder.
     */
    JobApplicationInterviewFieldControls.requestBuilder = function () {
        return new JobApplicationInterviewFieldControlsRequestBuilder_1.JobApplicationInterviewFieldControlsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationInterviewFieldControls`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplicationInterviewFieldControls`.
     */
    JobApplicationInterviewFieldControls.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobApplicationInterviewFieldControls);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobApplicationInterviewFieldControls.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobApplicationInterviewFieldControls.
     */
    JobApplicationInterviewFieldControls._entityName = 'JobApplicationInterviewFieldControls';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplicationInterviewFieldControls.
     */
    JobApplicationInterviewFieldControls._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobApplicationInterviewFieldControls._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobApplicationInterviewFieldControls;
}(core_1.Entity));
exports.JobApplicationInterviewFieldControls = JobApplicationInterviewFieldControls;
(function (JobApplicationInterviewFieldControls) {
    /**
     * Static representation of the [[applicationId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationInterviewFieldControls.APPLICATION_ID = new core_1.NumberField('applicationId', JobApplicationInterviewFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[applicationInterviewId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationInterviewFieldControls.APPLICATION_INTERVIEW_ID = new core_1.NumberField('applicationInterviewId', JobApplicationInterviewFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[candSlotMapId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationInterviewFieldControls.CAND_SLOT_MAP_ID = new core_1.NumberField('candSlotMapId', JobApplicationInterviewFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationInterviewFieldControls.END_DATE = new core_1.NumberField('endDate', JobApplicationInterviewFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[interviewNotes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationInterviewFieldControls.INTERVIEW_NOTES = new core_1.NumberField('interviewNotes', JobApplicationInterviewFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[interviewOverallAssessment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationInterviewFieldControls.INTERVIEW_OVERALL_ASSESSMENT = new core_1.NumberField('interviewOverallAssessment', JobApplicationInterviewFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[interviewer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationInterviewFieldControls.INTERVIEWER = new core_1.NumberField('interviewer', JobApplicationInterviewFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[isTimeSet]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationInterviewFieldControls.IS_TIME_SET = new core_1.NumberField('isTimeSet', JobApplicationInterviewFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[jobAppInterviewPermissionsNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationInterviewFieldControls.JOB_APP_INTERVIEW_PERMISSIONS_NAV = new core_1.NumberField('jobAppInterviewPermissionsNav', JobApplicationInterviewFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[jobApplication]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationInterviewFieldControls.JOB_APPLICATION = new core_1.NumberField('jobApplication', JobApplicationInterviewFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[jobRequisition]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationInterviewFieldControls.JOB_REQUISITION = new core_1.NumberField('jobRequisition', JobApplicationInterviewFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[notes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationInterviewFieldControls.NOTES = new core_1.NumberField('notes', JobApplicationInterviewFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[recruitEventStaffId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationInterviewFieldControls.RECRUIT_EVENT_STAFF_ID = new core_1.NumberField('recruitEventStaffId', JobApplicationInterviewFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[resume]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationInterviewFieldControls.RESUME = new core_1.NumberField('resume', JobApplicationInterviewFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[source]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationInterviewFieldControls.SOURCE = new core_1.NumberField('source', JobApplicationInterviewFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationInterviewFieldControls.START_DATE = new core_1.NumberField('startDate', JobApplicationInterviewFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationInterviewFieldControls.STATUS = new core_1.NumberField('status', JobApplicationInterviewFieldControls, 'Edm.Byte');
    /**
     * Static representation of the [[templateType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationInterviewFieldControls.TEMPLATE_TYPE = new core_1.NumberField('templateType', JobApplicationInterviewFieldControls, 'Edm.Byte');
    /**
     * All fields of the JobApplicationInterviewFieldControls entity.
     */
    JobApplicationInterviewFieldControls._allFields = [
        JobApplicationInterviewFieldControls.APPLICATION_ID,
        JobApplicationInterviewFieldControls.APPLICATION_INTERVIEW_ID,
        JobApplicationInterviewFieldControls.CAND_SLOT_MAP_ID,
        JobApplicationInterviewFieldControls.END_DATE,
        JobApplicationInterviewFieldControls.INTERVIEW_NOTES,
        JobApplicationInterviewFieldControls.INTERVIEW_OVERALL_ASSESSMENT,
        JobApplicationInterviewFieldControls.INTERVIEWER,
        JobApplicationInterviewFieldControls.IS_TIME_SET,
        JobApplicationInterviewFieldControls.JOB_APP_INTERVIEW_PERMISSIONS_NAV,
        JobApplicationInterviewFieldControls.JOB_APPLICATION,
        JobApplicationInterviewFieldControls.JOB_REQUISITION,
        JobApplicationInterviewFieldControls.NOTES,
        JobApplicationInterviewFieldControls.RECRUIT_EVENT_STAFF_ID,
        JobApplicationInterviewFieldControls.RESUME,
        JobApplicationInterviewFieldControls.SOURCE,
        JobApplicationInterviewFieldControls.START_DATE,
        JobApplicationInterviewFieldControls.STATUS,
        JobApplicationInterviewFieldControls.TEMPLATE_TYPE
    ];
    /**
     * All fields selector.
     */
    JobApplicationInterviewFieldControls.ALL_FIELDS = new core_1.AllFields('*', JobApplicationInterviewFieldControls);
    /**
     * All key fields of the JobApplicationInterviewFieldControls entity.
     */
    JobApplicationInterviewFieldControls._keyFields = [JobApplicationInterviewFieldControls.APPLICATION_INTERVIEW_ID];
    /**
     * Mapping of all key field names to the respective static field property JobApplicationInterviewFieldControls.
     */
    JobApplicationInterviewFieldControls._keys = JobApplicationInterviewFieldControls._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobApplicationInterviewFieldControls = exports.JobApplicationInterviewFieldControls || (exports.JobApplicationInterviewFieldControls = {}));
exports.JobApplicationInterviewFieldControls = JobApplicationInterviewFieldControls;
//# sourceMappingURL=JobApplicationInterviewFieldControls.js.map