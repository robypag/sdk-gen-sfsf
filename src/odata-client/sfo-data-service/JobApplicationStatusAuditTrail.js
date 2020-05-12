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
var JobApplicationStatusAuditTrailRequestBuilder_1 = require("./JobApplicationStatusAuditTrailRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobApplicationStatusAuditTrail" of service "SFOData".
 */
var JobApplicationStatusAuditTrail = /** @class */ (function (_super) {
    __extends(JobApplicationStatusAuditTrail, _super);
    function JobApplicationStatusAuditTrail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobApplicationStatusAuditTrail`.
     * @returns A builder that constructs instances of entity type `JobApplicationStatusAuditTrail`.
     */
    JobApplicationStatusAuditTrail.builder = function () {
        return core_1.Entity.entityBuilder(JobApplicationStatusAuditTrail);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobApplicationStatusAuditTrail` entity type.
     * @returns A `JobApplicationStatusAuditTrail` request builder.
     */
    JobApplicationStatusAuditTrail.requestBuilder = function () {
        return new JobApplicationStatusAuditTrailRequestBuilder_1.JobApplicationStatusAuditTrailRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationStatusAuditTrail`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplicationStatusAuditTrail`.
     */
    JobApplicationStatusAuditTrail.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobApplicationStatusAuditTrail);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobApplicationStatusAuditTrail.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobApplicationStatusAuditTrail.
     */
    JobApplicationStatusAuditTrail._entityName = 'JobApplicationStatusAuditTrail';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplicationStatusAuditTrail.
     */
    JobApplicationStatusAuditTrail._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobApplicationStatusAuditTrail._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobApplicationStatusAuditTrail;
}(core_1.Entity));
exports.JobApplicationStatusAuditTrail = JobApplicationStatusAuditTrail;
var User_1 = require("./User");
var JobApplicationStatus_1 = require("./JobApplicationStatus");
var JobApplication_1 = require("./JobApplication");
(function (JobApplicationStatusAuditTrail) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationStatusAuditTrail.CREATED_BY = new core_1.StringField('createdBy', JobApplicationStatusAuditTrail, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationStatusAuditTrail.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', JobApplicationStatusAuditTrail, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationStatusAuditTrail.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', JobApplicationStatusAuditTrail, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationStatusAuditTrail.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', JobApplicationStatusAuditTrail, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedProxyUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationStatusAuditTrail.LAST_MODIFIED_PROXY_USER = new core_1.StringField('lastModifiedProxyUser', JobApplicationStatusAuditTrail, 'Edm.String');
    /**
     * Static representation of the [[revNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationStatusAuditTrail.REV_NUMBER = new core_1.BigNumberField('revNumber', JobApplicationStatusAuditTrail, 'Edm.Int64');
    /**
     * Static representation of the [[revType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationStatusAuditTrail.REV_TYPE = new core_1.NumberField('revType', JobApplicationStatusAuditTrail, 'Edm.Int32');
    /**
     * Static representation of the [[skippedStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationStatusAuditTrail.SKIPPED_STATUS = new core_1.NumberField('skippedStatus', JobApplicationStatusAuditTrail, 'Edm.Int32');
    /**
     * Static representation of the [[statusComments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationStatusAuditTrail.STATUS_COMMENTS = new core_1.StringField('statusComments', JobApplicationStatusAuditTrail, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationStatusAuditTrail.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', JobApplicationStatusAuditTrail, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[jobAppStatus]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationStatusAuditTrail.JOB_APP_STATUS = new core_1.OneToOneLink('jobAppStatus', JobApplicationStatusAuditTrail, JobApplicationStatus_1.JobApplicationStatus);
    /**
     * Static representation of the one-to-one navigation property [[jobApplication]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationStatusAuditTrail.JOB_APPLICATION = new core_1.OneToOneLink('jobApplication', JobApplicationStatusAuditTrail, JobApplication_1.JobApplication);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationStatusAuditTrail.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', JobApplicationStatusAuditTrail, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedProxyUserNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationStatusAuditTrail.LAST_MODIFIED_PROXY_USER_NAV = new core_1.OneToOneLink('lastModifiedProxyUserNav', JobApplicationStatusAuditTrail, User_1.User);
    /**
     * All fields of the JobApplicationStatusAuditTrail entity.
     */
    JobApplicationStatusAuditTrail._allFields = [
        JobApplicationStatusAuditTrail.CREATED_BY,
        JobApplicationStatusAuditTrail.CREATED_DATE_TIME,
        JobApplicationStatusAuditTrail.LAST_MODIFIED_BY,
        JobApplicationStatusAuditTrail.LAST_MODIFIED_DATE_TIME,
        JobApplicationStatusAuditTrail.LAST_MODIFIED_PROXY_USER,
        JobApplicationStatusAuditTrail.REV_NUMBER,
        JobApplicationStatusAuditTrail.REV_TYPE,
        JobApplicationStatusAuditTrail.SKIPPED_STATUS,
        JobApplicationStatusAuditTrail.STATUS_COMMENTS,
        JobApplicationStatusAuditTrail.CREATED_BY_NAV,
        JobApplicationStatusAuditTrail.JOB_APP_STATUS,
        JobApplicationStatusAuditTrail.JOB_APPLICATION,
        JobApplicationStatusAuditTrail.LAST_MODIFIED_BY_NAV,
        JobApplicationStatusAuditTrail.LAST_MODIFIED_PROXY_USER_NAV
    ];
    /**
     * All fields selector.
     */
    JobApplicationStatusAuditTrail.ALL_FIELDS = new core_1.AllFields('*', JobApplicationStatusAuditTrail);
    /**
     * All key fields of the JobApplicationStatusAuditTrail entity.
     */
    JobApplicationStatusAuditTrail._keyFields = [JobApplicationStatusAuditTrail.REV_NUMBER];
    /**
     * Mapping of all key field names to the respective static field property JobApplicationStatusAuditTrail.
     */
    JobApplicationStatusAuditTrail._keys = JobApplicationStatusAuditTrail._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobApplicationStatusAuditTrail = exports.JobApplicationStatusAuditTrail || (exports.JobApplicationStatusAuditTrail = {}));
exports.JobApplicationStatusAuditTrail = JobApplicationStatusAuditTrail;
//# sourceMappingURL=JobApplicationStatusAuditTrail.js.map