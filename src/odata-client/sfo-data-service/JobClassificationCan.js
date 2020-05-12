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
var JobClassificationCanRequestBuilder_1 = require("./JobClassificationCanRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobClassificationCAN" of service "SFOData".
 */
var JobClassificationCan = /** @class */ (function (_super) {
    __extends(JobClassificationCan, _super);
    function JobClassificationCan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobClassificationCan`.
     * @returns A builder that constructs instances of entity type `JobClassificationCan`.
     */
    JobClassificationCan.builder = function () {
        return core_1.Entity.entityBuilder(JobClassificationCan);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobClassificationCan` entity type.
     * @returns A `JobClassificationCan` request builder.
     */
    JobClassificationCan.requestBuilder = function () {
        return new JobClassificationCanRequestBuilder_1.JobClassificationCanRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobClassificationCan`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobClassificationCan`.
     */
    JobClassificationCan.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobClassificationCan);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobClassificationCan.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobClassificationCan.
     */
    JobClassificationCan._entityName = 'JobClassificationCAN';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobClassificationCan.
     */
    JobClassificationCan._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobClassificationCan._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobClassificationCan;
}(core_1.Entity));
exports.JobClassificationCan = JobClassificationCan;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (JobClassificationCan) {
    /**
     * Static representation of the [[jobClassificationCountryCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationCan.JOB_CLASSIFICATION_COUNTRY_COUNTRY = new core_1.StringField('JobClassificationCountry_country', JobClassificationCan, 'Edm.String');
    /**
     * Static representation of the [[jobClassificationEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationCan.JOB_CLASSIFICATION_EFFECTIVE_START_DATE = new core_1.DateField('JobClassification_effectiveStartDate', JobClassificationCan, 'Edm.DateTime');
    /**
     * Static representation of the [[jobClassificationExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationCan.JOB_CLASSIFICATION_EXTERNAL_CODE = new core_1.StringField('JobClassification_externalCode', JobClassificationCan, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationCan.CREATED_BY = new core_1.StringField('createdBy', JobClassificationCan, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationCan.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', JobClassificationCan, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationCan.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', JobClassificationCan, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationCan.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', JobClassificationCan, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationCan.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', JobClassificationCan, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationCan.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', JobClassificationCan, 'Edm.String');
    /**
     * Static representation of the [[occupationalClassification]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationCan.OCCUPATIONAL_CLASSIFICATION = new core_1.StringField('occupationalClassification', JobClassificationCan, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationCan.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', JobClassificationCan, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationCan.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', JobClassificationCan, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationCan.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', JobClassificationCan, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the JobClassificationCan entity.
     */
    JobClassificationCan._allFields = [
        JobClassificationCan.JOB_CLASSIFICATION_COUNTRY_COUNTRY,
        JobClassificationCan.JOB_CLASSIFICATION_EFFECTIVE_START_DATE,
        JobClassificationCan.JOB_CLASSIFICATION_EXTERNAL_CODE,
        JobClassificationCan.CREATED_BY,
        JobClassificationCan.CREATED_DATE_TIME,
        JobClassificationCan.EXTERNAL_CODE,
        JobClassificationCan.LAST_MODIFIED_BY,
        JobClassificationCan.LAST_MODIFIED_DATE_TIME,
        JobClassificationCan.MDF_SYSTEM_RECORD_STATUS,
        JobClassificationCan.OCCUPATIONAL_CLASSIFICATION,
        JobClassificationCan.CREATED_BY_NAV,
        JobClassificationCan.LAST_MODIFIED_BY_NAV,
        JobClassificationCan.MDF_SYSTEM_RECORD_STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    JobClassificationCan.ALL_FIELDS = new core_1.AllFields('*', JobClassificationCan);
    /**
     * All key fields of the JobClassificationCan entity.
     */
    JobClassificationCan._keyFields = [JobClassificationCan.JOB_CLASSIFICATION_COUNTRY_COUNTRY, JobClassificationCan.JOB_CLASSIFICATION_EFFECTIVE_START_DATE, JobClassificationCan.JOB_CLASSIFICATION_EXTERNAL_CODE, JobClassificationCan.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property JobClassificationCan.
     */
    JobClassificationCan._keys = JobClassificationCan._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobClassificationCan = exports.JobClassificationCan || (exports.JobClassificationCan = {}));
exports.JobClassificationCan = JobClassificationCan;
//# sourceMappingURL=JobClassificationCan.js.map