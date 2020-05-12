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
var JobApplicationStatusRequestBuilder_1 = require("./JobApplicationStatusRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobApplicationStatus" of service "SFOData".
 */
var JobApplicationStatus = /** @class */ (function (_super) {
    __extends(JobApplicationStatus, _super);
    function JobApplicationStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobApplicationStatus`.
     * @returns A builder that constructs instances of entity type `JobApplicationStatus`.
     */
    JobApplicationStatus.builder = function () {
        return core_1.Entity.entityBuilder(JobApplicationStatus);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobApplicationStatus` entity type.
     * @returns A `JobApplicationStatus` request builder.
     */
    JobApplicationStatus.requestBuilder = function () {
        return new JobApplicationStatusRequestBuilder_1.JobApplicationStatusRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationStatus`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplicationStatus`.
     */
    JobApplicationStatus.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobApplicationStatus);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobApplicationStatus.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobApplicationStatus.
     */
    JobApplicationStatus._entityName = 'JobApplicationStatus';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplicationStatus.
     */
    JobApplicationStatus._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobApplicationStatus._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobApplicationStatus;
}(core_1.Entity));
exports.JobApplicationStatus = JobApplicationStatus;
var JobApplicationStatusLabel_1 = require("./JobApplicationStatusLabel");
var JobApplication_1 = require("./JobApplication");
(function (JobApplicationStatus) {
    /**
     * Static representation of the [[appStatusId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationStatus.APP_STATUS_ID = new core_1.BigNumberField('appStatusId', JobApplicationStatus, 'Edm.Int64');
    /**
     * Static representation of the [[appStatusName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationStatus.APP_STATUS_NAME = new core_1.StringField('appStatusName', JobApplicationStatus, 'Edm.String');
    /**
     * Static representation of the [[appStatusSetId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationStatus.APP_STATUS_SET_ID = new core_1.BigNumberField('appStatusSetId', JobApplicationStatus, 'Edm.Int64');
    /**
     * Static representation of the one-to-many navigation property [[jobAppStatusLabel]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationStatus.JOB_APP_STATUS_LABEL = new core_1.Link('jobAppStatusLabel', JobApplicationStatus, JobApplicationStatusLabel_1.JobApplicationStatusLabel);
    /**
     * Static representation of the one-to-many navigation property [[jobApplications]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationStatus.JOB_APPLICATIONS = new core_1.Link('jobApplications', JobApplicationStatus, JobApplication_1.JobApplication);
    /**
     * All fields of the JobApplicationStatus entity.
     */
    JobApplicationStatus._allFields = [
        JobApplicationStatus.APP_STATUS_ID,
        JobApplicationStatus.APP_STATUS_NAME,
        JobApplicationStatus.APP_STATUS_SET_ID,
        JobApplicationStatus.JOB_APP_STATUS_LABEL,
        JobApplicationStatus.JOB_APPLICATIONS
    ];
    /**
     * All fields selector.
     */
    JobApplicationStatus.ALL_FIELDS = new core_1.AllFields('*', JobApplicationStatus);
    /**
     * All key fields of the JobApplicationStatus entity.
     */
    JobApplicationStatus._keyFields = [JobApplicationStatus.APP_STATUS_SET_ID];
    /**
     * Mapping of all key field names to the respective static field property JobApplicationStatus.
     */
    JobApplicationStatus._keys = JobApplicationStatus._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobApplicationStatus = exports.JobApplicationStatus || (exports.JobApplicationStatus = {}));
exports.JobApplicationStatus = JobApplicationStatus;
//# sourceMappingURL=JobApplicationStatus.js.map