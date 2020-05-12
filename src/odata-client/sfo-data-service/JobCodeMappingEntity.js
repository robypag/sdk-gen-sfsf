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
var JobCodeMappingEntityRequestBuilder_1 = require("./JobCodeMappingEntityRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobCodeMappingEntity" of service "SFOData".
 */
var JobCodeMappingEntity = /** @class */ (function (_super) {
    __extends(JobCodeMappingEntity, _super);
    function JobCodeMappingEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobCodeMappingEntity`.
     * @returns A builder that constructs instances of entity type `JobCodeMappingEntity`.
     */
    JobCodeMappingEntity.builder = function () {
        return core_1.Entity.entityBuilder(JobCodeMappingEntity);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobCodeMappingEntity` entity type.
     * @returns A `JobCodeMappingEntity` request builder.
     */
    JobCodeMappingEntity.requestBuilder = function () {
        return new JobCodeMappingEntityRequestBuilder_1.JobCodeMappingEntityRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobCodeMappingEntity`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobCodeMappingEntity`.
     */
    JobCodeMappingEntity.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobCodeMappingEntity);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobCodeMappingEntity.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobCodeMappingEntity.
     */
    JobCodeMappingEntity._entityName = 'JobCodeMappingEntity';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobCodeMappingEntity.
     */
    JobCodeMappingEntity._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobCodeMappingEntity._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobCodeMappingEntity;
}(core_1.Entity));
exports.JobCodeMappingEntity = JobCodeMappingEntity;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (JobCodeMappingEntity) {
    /**
     * Static representation of the [[roleEntityExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobCodeMappingEntity.ROLE_ENTITY_EXTERNAL_CODE = new core_1.StringField('RoleEntity_externalCode', JobCodeMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobCodeMappingEntity.CREATED_BY = new core_1.StringField('createdBy', JobCodeMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobCodeMappingEntity.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', JobCodeMappingEntity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobCodeMappingEntity.EXTERNAL_CODE = new core_1.StringField('externalCode', JobCodeMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[jobCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobCodeMappingEntity.JOB_CODE = new core_1.StringField('jobCode', JobCodeMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobCodeMappingEntity.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', JobCodeMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobCodeMappingEntity.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', JobCodeMappingEntity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobCodeMappingEntity.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', JobCodeMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobCodeMappingEntity.STATUS = new core_1.StringField('status', JobCodeMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobCodeMappingEntity.SUB_MODULE = new core_1.StringField('subModule', JobCodeMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobCodeMappingEntity.TYPE = new core_1.StringField('type', JobCodeMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[usage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobCodeMappingEntity.USAGE = new core_1.BigNumberField('usage', JobCodeMappingEntity, 'Edm.Int64');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobCodeMappingEntity.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', JobCodeMappingEntity, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobCodeMappingEntity.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', JobCodeMappingEntity, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobCodeMappingEntity.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', JobCodeMappingEntity, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobCodeMappingEntity.STATUS_NAV = new core_1.OneToOneLink('statusNav', JobCodeMappingEntity, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the JobCodeMappingEntity entity.
     */
    JobCodeMappingEntity._allFields = [
        JobCodeMappingEntity.ROLE_ENTITY_EXTERNAL_CODE,
        JobCodeMappingEntity.CREATED_BY,
        JobCodeMappingEntity.CREATED_DATE_TIME,
        JobCodeMappingEntity.EXTERNAL_CODE,
        JobCodeMappingEntity.JOB_CODE,
        JobCodeMappingEntity.LAST_MODIFIED_BY,
        JobCodeMappingEntity.LAST_MODIFIED_DATE_TIME,
        JobCodeMappingEntity.MDF_SYSTEM_RECORD_STATUS,
        JobCodeMappingEntity.STATUS,
        JobCodeMappingEntity.SUB_MODULE,
        JobCodeMappingEntity.TYPE,
        JobCodeMappingEntity.USAGE,
        JobCodeMappingEntity.CREATED_BY_NAV,
        JobCodeMappingEntity.LAST_MODIFIED_BY_NAV,
        JobCodeMappingEntity.MDF_SYSTEM_RECORD_STATUS_NAV,
        JobCodeMappingEntity.STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    JobCodeMappingEntity.ALL_FIELDS = new core_1.AllFields('*', JobCodeMappingEntity);
    /**
     * All key fields of the JobCodeMappingEntity entity.
     */
    JobCodeMappingEntity._keyFields = [JobCodeMappingEntity.ROLE_ENTITY_EXTERNAL_CODE, JobCodeMappingEntity.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property JobCodeMappingEntity.
     */
    JobCodeMappingEntity._keys = JobCodeMappingEntity._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobCodeMappingEntity = exports.JobCodeMappingEntity || (exports.JobCodeMappingEntity = {}));
exports.JobCodeMappingEntity = JobCodeMappingEntity;
//# sourceMappingURL=JobCodeMappingEntity.js.map