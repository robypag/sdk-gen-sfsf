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
var JobApplicationInterviewRequestBuilder_1 = require("./JobApplicationInterviewRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobApplicationInterview" of service "SFOData".
 */
var JobApplicationInterview = /** @class */ (function (_super) {
    __extends(JobApplicationInterview, _super);
    function JobApplicationInterview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobApplicationInterview`.
     * @returns A builder that constructs instances of entity type `JobApplicationInterview`.
     */
    JobApplicationInterview.builder = function () {
        return core_1.Entity.entityBuilder(JobApplicationInterview);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobApplicationInterview` entity type.
     * @returns A `JobApplicationInterview` request builder.
     */
    JobApplicationInterview.requestBuilder = function () {
        return new JobApplicationInterviewRequestBuilder_1.JobApplicationInterviewRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationInterview`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplicationInterview`.
     */
    JobApplicationInterview.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobApplicationInterview);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobApplicationInterview.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobApplicationInterview.
     */
    JobApplicationInterview._entityName = 'JobApplicationInterview';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplicationInterview.
     */
    JobApplicationInterview._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobApplicationInterview._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobApplicationInterview;
}(core_1.Entity));
exports.JobApplicationInterview = JobApplicationInterview;
var Attachment_1 = require("./Attachment");
var InterviewOverallAssessment_1 = require("./InterviewOverallAssessment");
var User_1 = require("./User");
var JobApplicationInterviewFieldControls_1 = require("./JobApplicationInterviewFieldControls");
var JobApplication_1 = require("./JobApplication");
var JobRequisition_1 = require("./JobRequisition");
(function (JobApplicationInterview) {
    /**
     * Static representation of the [[applicationId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationInterview.APPLICATION_ID = new core_1.BigNumberField('applicationId', JobApplicationInterview, 'Edm.Int64');
    /**
     * Static representation of the [[applicationInterviewId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationInterview.APPLICATION_INTERVIEW_ID = new core_1.BigNumberField('applicationInterviewId', JobApplicationInterview, 'Edm.Int64');
    /**
     * Static representation of the [[candSlotMapId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationInterview.CAND_SLOT_MAP_ID = new core_1.BigNumberField('candSlotMapId', JobApplicationInterview, 'Edm.Int64');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationInterview.END_DATE = new core_1.DateField('endDate', JobApplicationInterview, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[isTimeSet]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationInterview.IS_TIME_SET = new core_1.NumberField('isTimeSet', JobApplicationInterview, 'Edm.Int32');
    /**
     * Static representation of the [[notes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationInterview.NOTES = new core_1.StringField('notes', JobApplicationInterview, 'Edm.String');
    /**
     * Static representation of the [[recruitEventStaffId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationInterview.RECRUIT_EVENT_STAFF_ID = new core_1.BigNumberField('recruitEventStaffId', JobApplicationInterview, 'Edm.Int64');
    /**
     * Static representation of the [[source]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationInterview.SOURCE = new core_1.StringField('source', JobApplicationInterview, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationInterview.START_DATE = new core_1.DateField('startDate', JobApplicationInterview, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationInterview.STATUS = new core_1.StringField('status', JobApplicationInterview, 'Edm.String');
    /**
     * Static representation of the [[templateType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationInterview.TEMPLATE_TYPE = new core_1.StringField('templateType', JobApplicationInterview, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[interviewNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationInterview.INTERVIEW_NOTES = new core_1.OneToOneLink('interviewNotes', JobApplicationInterview, Attachment_1.Attachment);
    /**
     * Static representation of the one-to-one navigation property [[interviewOverallAssessment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationInterview.INTERVIEW_OVERALL_ASSESSMENT = new core_1.OneToOneLink('interviewOverallAssessment', JobApplicationInterview, InterviewOverallAssessment_1.InterviewOverallAssessment);
    /**
     * Static representation of the one-to-one navigation property [[interviewer]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationInterview.INTERVIEWER = new core_1.OneToOneLink('interviewer', JobApplicationInterview, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[jobAppInterviewPermissionsNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationInterview.JOB_APP_INTERVIEW_PERMISSIONS_NAV = new core_1.OneToOneLink('jobAppInterviewPermissionsNav', JobApplicationInterview, JobApplicationInterviewFieldControls_1.JobApplicationInterviewFieldControls);
    /**
     * Static representation of the one-to-one navigation property [[jobApplication]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationInterview.JOB_APPLICATION = new core_1.OneToOneLink('jobApplication', JobApplicationInterview, JobApplication_1.JobApplication);
    /**
     * Static representation of the one-to-one navigation property [[jobRequisition]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationInterview.JOB_REQUISITION = new core_1.OneToOneLink('jobRequisition', JobApplicationInterview, JobRequisition_1.JobRequisition);
    /**
     * Static representation of the one-to-one navigation property [[resume]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationInterview.RESUME = new core_1.OneToOneLink('resume', JobApplicationInterview, Attachment_1.Attachment);
    /**
     * All fields of the JobApplicationInterview entity.
     */
    JobApplicationInterview._allFields = [
        JobApplicationInterview.APPLICATION_ID,
        JobApplicationInterview.APPLICATION_INTERVIEW_ID,
        JobApplicationInterview.CAND_SLOT_MAP_ID,
        JobApplicationInterview.END_DATE,
        JobApplicationInterview.IS_TIME_SET,
        JobApplicationInterview.NOTES,
        JobApplicationInterview.RECRUIT_EVENT_STAFF_ID,
        JobApplicationInterview.SOURCE,
        JobApplicationInterview.START_DATE,
        JobApplicationInterview.STATUS,
        JobApplicationInterview.TEMPLATE_TYPE,
        JobApplicationInterview.INTERVIEW_NOTES,
        JobApplicationInterview.INTERVIEW_OVERALL_ASSESSMENT,
        JobApplicationInterview.INTERVIEWER,
        JobApplicationInterview.JOB_APP_INTERVIEW_PERMISSIONS_NAV,
        JobApplicationInterview.JOB_APPLICATION,
        JobApplicationInterview.JOB_REQUISITION,
        JobApplicationInterview.RESUME
    ];
    /**
     * All fields selector.
     */
    JobApplicationInterview.ALL_FIELDS = new core_1.AllFields('*', JobApplicationInterview);
    /**
     * All key fields of the JobApplicationInterview entity.
     */
    JobApplicationInterview._keyFields = [JobApplicationInterview.APPLICATION_INTERVIEW_ID];
    /**
     * Mapping of all key field names to the respective static field property JobApplicationInterview.
     */
    JobApplicationInterview._keys = JobApplicationInterview._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobApplicationInterview = exports.JobApplicationInterview || (exports.JobApplicationInterview = {}));
exports.JobApplicationInterview = JobApplicationInterview;
//# sourceMappingURL=JobApplicationInterview.js.map