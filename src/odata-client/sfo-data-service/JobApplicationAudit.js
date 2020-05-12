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
var JobApplicationAuditRequestBuilder_1 = require("./JobApplicationAuditRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobApplicationAudit" of service "SFOData".
 */
var JobApplicationAudit = /** @class */ (function (_super) {
    __extends(JobApplicationAudit, _super);
    function JobApplicationAudit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobApplicationAudit`.
     * @returns A builder that constructs instances of entity type `JobApplicationAudit`.
     */
    JobApplicationAudit.builder = function () {
        return core_1.Entity.entityBuilder(JobApplicationAudit);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobApplicationAudit` entity type.
     * @returns A `JobApplicationAudit` request builder.
     */
    JobApplicationAudit.requestBuilder = function () {
        return new JobApplicationAuditRequestBuilder_1.JobApplicationAuditRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationAudit`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplicationAudit`.
     */
    JobApplicationAudit.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobApplicationAudit);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobApplicationAudit.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobApplicationAudit.
     */
    JobApplicationAudit._entityName = 'JobApplicationAudit';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplicationAudit.
     */
    JobApplicationAudit._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobApplicationAudit._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobApplicationAudit;
}(core_1.Entity));
exports.JobApplicationAudit = JobApplicationAudit;
var JobApplication_1 = require("./JobApplication");
var User_1 = require("./User");
(function (JobApplicationAudit) {
    /**
     * Static representation of the [[changedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationAudit.CHANGED_BY = new core_1.StringField('changedBy', JobApplicationAudit, 'Edm.String');
    /**
     * Static representation of the [[clobFieldRef]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationAudit.CLOB_FIELD_REF = new core_1.StringField('clobFieldRef', JobApplicationAudit, 'Edm.String');
    /**
     * Static representation of the [[clobNewValueXml]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationAudit.CLOB_NEW_VALUE_XML = new core_1.StringField('clobNewValueXML', JobApplicationAudit, 'Edm.String');
    /**
     * Static representation of the [[clobOldValueXml]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationAudit.CLOB_OLD_VALUE_XML = new core_1.StringField('clobOldValueXML', JobApplicationAudit, 'Edm.String');
    /**
     * Static representation of the [[dateNewValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationAudit.DATE_NEW_VALUE = new core_1.DateField('dateNewValue', JobApplicationAudit, 'Edm.DateTime');
    /**
     * Static representation of the [[dateOldValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationAudit.DATE_OLD_VALUE = new core_1.DateField('dateOldValue', JobApplicationAudit, 'Edm.DateTime');
    /**
     * Static representation of the [[fieldId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationAudit.FIELD_ID = new core_1.StringField('fieldId', JobApplicationAudit, 'Edm.String');
    /**
     * Static representation of the [[fieldOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationAudit.FIELD_ORDER_POS = new core_1.BigNumberField('fieldOrderPos', JobApplicationAudit, 'Edm.Int64');
    /**
     * Static representation of the [[fieldType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationAudit.FIELD_TYPE = new core_1.StringField('fieldType', JobApplicationAudit, 'Edm.String');
    /**
     * Static representation of the [[jobPostEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationAudit.JOB_POST_END_DATE = new core_1.DateField('jobPostEndDate', JobApplicationAudit, 'Edm.DateTime');
    /**
     * Static representation of the [[jobPostStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationAudit.JOB_POST_START_DATE = new core_1.DateField('jobPostStartDate', JobApplicationAudit, 'Edm.DateTime');
    /**
     * Static representation of the [[jobPostingId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationAudit.JOB_POSTING_ID = new core_1.BigNumberField('jobPostingId', JobApplicationAudit, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationAudit.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', JobApplicationAudit, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationAudit.LAST_MODIFIED_DATE = new core_1.DateField('lastModifiedDate', JobApplicationAudit, 'Edm.DateTime');
    /**
     * Static representation of the [[lastModifiedExtId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationAudit.LAST_MODIFIED_EXT_ID = new core_1.BigNumberField('lastModifiedExtId', JobApplicationAudit, 'Edm.Int64');
    /**
     * Static representation of the [[mergedFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationAudit.MERGED_FROM = new core_1.StringField('mergedFrom', JobApplicationAudit, 'Edm.String');
    /**
     * Static representation of the [[newValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationAudit.NEW_VALUE = new core_1.StringField('newValue', JobApplicationAudit, 'Edm.String');
    /**
     * Static representation of the [[oldValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationAudit.OLD_VALUE = new core_1.StringField('oldValue', JobApplicationAudit, 'Edm.String');
    /**
     * Static representation of the [[refType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationAudit.REF_TYPE = new core_1.StringField('refType', JobApplicationAudit, 'Edm.String');
    /**
     * Static representation of the [[revNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationAudit.REV_NUMBER = new core_1.BigNumberField('revNumber', JobApplicationAudit, 'Edm.Int64');
    /**
     * Static representation of the [[revType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationAudit.REV_TYPE = new core_1.NumberField('revType', JobApplicationAudit, 'Edm.Int32');
    /**
     * Static representation of the [[source]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationAudit.SOURCE = new core_1.StringField('source', JobApplicationAudit, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[jobApplication]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationAudit.JOB_APPLICATION = new core_1.OneToOneLink('jobApplication', JobApplicationAudit, JobApplication_1.JobApplication);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationAudit.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', JobApplicationAudit, User_1.User);
    /**
     * All fields of the JobApplicationAudit entity.
     */
    JobApplicationAudit._allFields = [
        JobApplicationAudit.CHANGED_BY,
        JobApplicationAudit.CLOB_FIELD_REF,
        JobApplicationAudit.CLOB_NEW_VALUE_XML,
        JobApplicationAudit.CLOB_OLD_VALUE_XML,
        JobApplicationAudit.DATE_NEW_VALUE,
        JobApplicationAudit.DATE_OLD_VALUE,
        JobApplicationAudit.FIELD_ID,
        JobApplicationAudit.FIELD_ORDER_POS,
        JobApplicationAudit.FIELD_TYPE,
        JobApplicationAudit.JOB_POST_END_DATE,
        JobApplicationAudit.JOB_POST_START_DATE,
        JobApplicationAudit.JOB_POSTING_ID,
        JobApplicationAudit.LAST_MODIFIED_BY,
        JobApplicationAudit.LAST_MODIFIED_DATE,
        JobApplicationAudit.LAST_MODIFIED_EXT_ID,
        JobApplicationAudit.MERGED_FROM,
        JobApplicationAudit.NEW_VALUE,
        JobApplicationAudit.OLD_VALUE,
        JobApplicationAudit.REF_TYPE,
        JobApplicationAudit.REV_NUMBER,
        JobApplicationAudit.REV_TYPE,
        JobApplicationAudit.SOURCE,
        JobApplicationAudit.JOB_APPLICATION,
        JobApplicationAudit.LAST_MODIFIED_BY_NAV
    ];
    /**
     * All fields selector.
     */
    JobApplicationAudit.ALL_FIELDS = new core_1.AllFields('*', JobApplicationAudit);
    /**
     * All key fields of the JobApplicationAudit entity.
     */
    JobApplicationAudit._keyFields = [JobApplicationAudit.FIELD_ORDER_POS, JobApplicationAudit.REV_NUMBER];
    /**
     * Mapping of all key field names to the respective static field property JobApplicationAudit.
     */
    JobApplicationAudit._keys = JobApplicationAudit._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobApplicationAudit = exports.JobApplicationAudit || (exports.JobApplicationAudit = {}));
exports.JobApplicationAudit = JobApplicationAudit;
//# sourceMappingURL=JobApplicationAudit.js.map