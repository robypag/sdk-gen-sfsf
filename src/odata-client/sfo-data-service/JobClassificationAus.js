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
var JobClassificationAusRequestBuilder_1 = require("./JobClassificationAusRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobClassificationAUS" of service "SFOData".
 */
var JobClassificationAus = /** @class */ (function (_super) {
    __extends(JobClassificationAus, _super);
    function JobClassificationAus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobClassificationAus`.
     * @returns A builder that constructs instances of entity type `JobClassificationAus`.
     */
    JobClassificationAus.builder = function () {
        return core_1.Entity.entityBuilder(JobClassificationAus);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobClassificationAus` entity type.
     * @returns A `JobClassificationAus` request builder.
     */
    JobClassificationAus.requestBuilder = function () {
        return new JobClassificationAusRequestBuilder_1.JobClassificationAusRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobClassificationAus`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobClassificationAus`.
     */
    JobClassificationAus.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobClassificationAus);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobClassificationAus.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobClassificationAus.
     */
    JobClassificationAus._entityName = 'JobClassificationAUS';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobClassificationAus.
     */
    JobClassificationAus._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobClassificationAus._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobClassificationAus;
}(core_1.Entity));
exports.JobClassificationAus = JobClassificationAus;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (JobClassificationAus) {
    /**
     * Static representation of the [[jobClassificationCountryCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationAus.JOB_CLASSIFICATION_COUNTRY_COUNTRY = new core_1.StringField('JobClassificationCountry_country', JobClassificationAus, 'Edm.String');
    /**
     * Static representation of the [[jobClassificationEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationAus.JOB_CLASSIFICATION_EFFECTIVE_START_DATE = new core_1.DateField('JobClassification_effectiveStartDate', JobClassificationAus, 'Edm.DateTime');
    /**
     * Static representation of the [[jobClassificationExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationAus.JOB_CLASSIFICATION_EXTERNAL_CODE = new core_1.StringField('JobClassification_externalCode', JobClassificationAus, 'Edm.String');
    /**
     * Static representation of the [[ascoCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationAus.ASCO_CODE = new core_1.StringField('ascoCode', JobClassificationAus, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationAus.CREATED_BY = new core_1.StringField('createdBy', JobClassificationAus, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationAus.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', JobClassificationAus, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationAus.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', JobClassificationAus, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationAus.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', JobClassificationAus, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationAus.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', JobClassificationAus, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationAus.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', JobClassificationAus, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationAus.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', JobClassificationAus, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationAus.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', JobClassificationAus, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationAus.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', JobClassificationAus, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the JobClassificationAus entity.
     */
    JobClassificationAus._allFields = [
        JobClassificationAus.JOB_CLASSIFICATION_COUNTRY_COUNTRY,
        JobClassificationAus.JOB_CLASSIFICATION_EFFECTIVE_START_DATE,
        JobClassificationAus.JOB_CLASSIFICATION_EXTERNAL_CODE,
        JobClassificationAus.ASCO_CODE,
        JobClassificationAus.CREATED_BY,
        JobClassificationAus.CREATED_DATE_TIME,
        JobClassificationAus.EXTERNAL_CODE,
        JobClassificationAus.LAST_MODIFIED_BY,
        JobClassificationAus.LAST_MODIFIED_DATE_TIME,
        JobClassificationAus.MDF_SYSTEM_RECORD_STATUS,
        JobClassificationAus.CREATED_BY_NAV,
        JobClassificationAus.LAST_MODIFIED_BY_NAV,
        JobClassificationAus.MDF_SYSTEM_RECORD_STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    JobClassificationAus.ALL_FIELDS = new core_1.AllFields('*', JobClassificationAus);
    /**
     * All key fields of the JobClassificationAus entity.
     */
    JobClassificationAus._keyFields = [JobClassificationAus.JOB_CLASSIFICATION_COUNTRY_COUNTRY, JobClassificationAus.JOB_CLASSIFICATION_EFFECTIVE_START_DATE, JobClassificationAus.JOB_CLASSIFICATION_EXTERNAL_CODE, JobClassificationAus.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property JobClassificationAus.
     */
    JobClassificationAus._keys = JobClassificationAus._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobClassificationAus = exports.JobClassificationAus || (exports.JobClassificationAus = {}));
exports.JobClassificationAus = JobClassificationAus;
//# sourceMappingURL=JobClassificationAus.js.map