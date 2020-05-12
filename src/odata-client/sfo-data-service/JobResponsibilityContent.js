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
var JobResponsibilityContentRequestBuilder_1 = require("./JobResponsibilityContentRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobResponsibilityContent" of service "SFOData".
 */
var JobResponsibilityContent = /** @class */ (function (_super) {
    __extends(JobResponsibilityContent, _super);
    function JobResponsibilityContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobResponsibilityContent`.
     * @returns A builder that constructs instances of entity type `JobResponsibilityContent`.
     */
    JobResponsibilityContent.builder = function () {
        return core_1.Entity.entityBuilder(JobResponsibilityContent);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobResponsibilityContent` entity type.
     * @returns A `JobResponsibilityContent` request builder.
     */
    JobResponsibilityContent.requestBuilder = function () {
        return new JobResponsibilityContentRequestBuilder_1.JobResponsibilityContentRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobResponsibilityContent`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobResponsibilityContent`.
     */
    JobResponsibilityContent.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobResponsibilityContent);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobResponsibilityContent.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobResponsibilityContent.
     */
    JobResponsibilityContent._entityName = 'JobResponsibilityContent';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobResponsibilityContent.
     */
    JobResponsibilityContent._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobResponsibilityContent._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobResponsibilityContent;
}(core_1.Entity));
exports.JobResponsibilityContent = JobResponsibilityContent;
var User_1 = require("./User");
var JobResponsibilityEntity_1 = require("./JobResponsibilityEntity");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (JobResponsibilityContent) {
    /**
     * Static representation of the [[jobProfileExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityContent.JOB_PROFILE_EXTERNAL_CODE = new core_1.StringField('JobProfile_externalCode', JobResponsibilityContent, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityContent.CREATED_BY = new core_1.StringField('createdBy', JobResponsibilityContent, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityContent.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', JobResponsibilityContent, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[entity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityContent.ENTITY = new core_1.StringField('entity', JobResponsibilityContent, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityContent.EXTERNAL_CODE = new core_1.StringField('externalCode', JobResponsibilityContent, 'Edm.String');
    /**
     * Static representation of the [[jobProfileId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityContent.JOB_PROFILE_ID = new core_1.StringField('jobProfileId', JobResponsibilityContent, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityContent.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', JobResponsibilityContent, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityContent.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', JobResponsibilityContent, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityContent.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', JobResponsibilityContent, 'Edm.String');
    /**
     * Static representation of the [[order]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityContent.ORDER = new core_1.BigNumberField('order', JobResponsibilityContent, 'Edm.Int64');
    /**
     * Static representation of the [[sectionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityContent.SECTION_ID = new core_1.StringField('sectionId', JobResponsibilityContent, 'Edm.String');
    /**
     * Static representation of the [[sectionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityContent.SECTION_TYPE = new core_1.StringField('sectionType', JobResponsibilityContent, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityContent.STATUS = new core_1.StringField('status', JobResponsibilityContent, 'Edm.String');
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityContent.SUB_MODULE = new core_1.StringField('subModule', JobResponsibilityContent, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityContent.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', JobResponsibilityContent, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[entityNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityContent.ENTITY_NAV = new core_1.OneToOneLink('entityNav', JobResponsibilityContent, JobResponsibilityEntity_1.JobResponsibilityEntity);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityContent.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', JobResponsibilityContent, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityContent.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', JobResponsibilityContent, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobResponsibilityContent.STATUS_NAV = new core_1.OneToOneLink('statusNav', JobResponsibilityContent, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the JobResponsibilityContent entity.
     */
    JobResponsibilityContent._allFields = [
        JobResponsibilityContent.JOB_PROFILE_EXTERNAL_CODE,
        JobResponsibilityContent.CREATED_BY,
        JobResponsibilityContent.CREATED_DATE_TIME,
        JobResponsibilityContent.ENTITY,
        JobResponsibilityContent.EXTERNAL_CODE,
        JobResponsibilityContent.JOB_PROFILE_ID,
        JobResponsibilityContent.LAST_MODIFIED_BY,
        JobResponsibilityContent.LAST_MODIFIED_DATE_TIME,
        JobResponsibilityContent.MDF_SYSTEM_RECORD_STATUS,
        JobResponsibilityContent.ORDER,
        JobResponsibilityContent.SECTION_ID,
        JobResponsibilityContent.SECTION_TYPE,
        JobResponsibilityContent.STATUS,
        JobResponsibilityContent.SUB_MODULE,
        JobResponsibilityContent.CREATED_BY_NAV,
        JobResponsibilityContent.ENTITY_NAV,
        JobResponsibilityContent.LAST_MODIFIED_BY_NAV,
        JobResponsibilityContent.MDF_SYSTEM_RECORD_STATUS_NAV,
        JobResponsibilityContent.STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    JobResponsibilityContent.ALL_FIELDS = new core_1.AllFields('*', JobResponsibilityContent);
    /**
     * All key fields of the JobResponsibilityContent entity.
     */
    JobResponsibilityContent._keyFields = [JobResponsibilityContent.JOB_PROFILE_EXTERNAL_CODE, JobResponsibilityContent.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property JobResponsibilityContent.
     */
    JobResponsibilityContent._keys = JobResponsibilityContent._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobResponsibilityContent = exports.JobResponsibilityContent || (exports.JobResponsibilityContent = {}));
exports.JobResponsibilityContent = JobResponsibilityContent;
//# sourceMappingURL=JobResponsibilityContent.js.map