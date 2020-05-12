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
var JobClassificationFraRequestBuilder_1 = require("./JobClassificationFraRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobClassificationFRA" of service "SFOData".
 */
var JobClassificationFra = /** @class */ (function (_super) {
    __extends(JobClassificationFra, _super);
    function JobClassificationFra() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobClassificationFra`.
     * @returns A builder that constructs instances of entity type `JobClassificationFra`.
     */
    JobClassificationFra.builder = function () {
        return core_1.Entity.entityBuilder(JobClassificationFra);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobClassificationFra` entity type.
     * @returns A `JobClassificationFra` request builder.
     */
    JobClassificationFra.requestBuilder = function () {
        return new JobClassificationFraRequestBuilder_1.JobClassificationFraRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobClassificationFra`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobClassificationFra`.
     */
    JobClassificationFra.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobClassificationFra);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobClassificationFra.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobClassificationFra.
     */
    JobClassificationFra._entityName = 'JobClassificationFRA';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobClassificationFra.
     */
    JobClassificationFra._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobClassificationFra._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobClassificationFra;
}(core_1.Entity));
exports.JobClassificationFra = JobClassificationFra;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (JobClassificationFra) {
    /**
     * Static representation of the [[jobClassificationCountryCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationFra.JOB_CLASSIFICATION_COUNTRY_COUNTRY = new core_1.StringField('JobClassificationCountry_country', JobClassificationFra, 'Edm.String');
    /**
     * Static representation of the [[jobClassificationEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationFra.JOB_CLASSIFICATION_EFFECTIVE_START_DATE = new core_1.DateField('JobClassification_effectiveStartDate', JobClassificationFra, 'Edm.DateTime');
    /**
     * Static representation of the [[jobClassificationExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationFra.JOB_CLASSIFICATION_EXTERNAL_CODE = new core_1.StringField('JobClassification_externalCode', JobClassificationFra, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationFra.CREATED_BY = new core_1.StringField('createdBy', JobClassificationFra, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationFra.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', JobClassificationFra, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[custPcScode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationFra.CUST_PC_SCODE = new core_1.StringField('cust_PCScode', JobClassificationFra, 'Edm.String');
    /**
     * Static representation of the [[employeeCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationFra.EMPLOYEE_CATEGORY = new core_1.BigNumberField('employeeCategory', JobClassificationFra, 'Edm.Int64');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationFra.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', JobClassificationFra, 'Edm.Int64');
    /**
     * Static representation of the [[inseeCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationFra.INSEE_CODE = new core_1.StringField('inseeCode', JobClassificationFra, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationFra.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', JobClassificationFra, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationFra.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', JobClassificationFra, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationFra.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', JobClassificationFra, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationFra.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', JobClassificationFra, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationFra.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', JobClassificationFra, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationFra.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', JobClassificationFra, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the JobClassificationFra entity.
     */
    JobClassificationFra._allFields = [
        JobClassificationFra.JOB_CLASSIFICATION_COUNTRY_COUNTRY,
        JobClassificationFra.JOB_CLASSIFICATION_EFFECTIVE_START_DATE,
        JobClassificationFra.JOB_CLASSIFICATION_EXTERNAL_CODE,
        JobClassificationFra.CREATED_BY,
        JobClassificationFra.CREATED_DATE_TIME,
        JobClassificationFra.CUST_PC_SCODE,
        JobClassificationFra.EMPLOYEE_CATEGORY,
        JobClassificationFra.EXTERNAL_CODE,
        JobClassificationFra.INSEE_CODE,
        JobClassificationFra.LAST_MODIFIED_BY,
        JobClassificationFra.LAST_MODIFIED_DATE_TIME,
        JobClassificationFra.MDF_SYSTEM_RECORD_STATUS,
        JobClassificationFra.CREATED_BY_NAV,
        JobClassificationFra.LAST_MODIFIED_BY_NAV,
        JobClassificationFra.MDF_SYSTEM_RECORD_STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    JobClassificationFra.ALL_FIELDS = new core_1.AllFields('*', JobClassificationFra);
    /**
     * All key fields of the JobClassificationFra entity.
     */
    JobClassificationFra._keyFields = [JobClassificationFra.JOB_CLASSIFICATION_COUNTRY_COUNTRY, JobClassificationFra.JOB_CLASSIFICATION_EFFECTIVE_START_DATE, JobClassificationFra.JOB_CLASSIFICATION_EXTERNAL_CODE, JobClassificationFra.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property JobClassificationFra.
     */
    JobClassificationFra._keys = JobClassificationFra._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobClassificationFra = exports.JobClassificationFra || (exports.JobClassificationFra = {}));
exports.JobClassificationFra = JobClassificationFra;
//# sourceMappingURL=JobClassificationFra.js.map