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
var JobClassificationItaRequestBuilder_1 = require("./JobClassificationItaRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobClassificationITA" of service "SFOData".
 */
var JobClassificationIta = /** @class */ (function (_super) {
    __extends(JobClassificationIta, _super);
    function JobClassificationIta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobClassificationIta`.
     * @returns A builder that constructs instances of entity type `JobClassificationIta`.
     */
    JobClassificationIta.builder = function () {
        return core_1.Entity.entityBuilder(JobClassificationIta);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobClassificationIta` entity type.
     * @returns A `JobClassificationIta` request builder.
     */
    JobClassificationIta.requestBuilder = function () {
        return new JobClassificationItaRequestBuilder_1.JobClassificationItaRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobClassificationIta`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobClassificationIta`.
     */
    JobClassificationIta.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobClassificationIta);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobClassificationIta.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobClassificationIta.
     */
    JobClassificationIta._entityName = 'JobClassificationITA';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobClassificationIta.
     */
    JobClassificationIta._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobClassificationIta._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobClassificationIta;
}(core_1.Entity));
exports.JobClassificationIta = JobClassificationIta;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (JobClassificationIta) {
    /**
     * Static representation of the [[jobClassificationCountryCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationIta.JOB_CLASSIFICATION_COUNTRY_COUNTRY = new core_1.StringField('JobClassificationCountry_country', JobClassificationIta, 'Edm.String');
    /**
     * Static representation of the [[jobClassificationEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationIta.JOB_CLASSIFICATION_EFFECTIVE_START_DATE = new core_1.DateField('JobClassification_effectiveStartDate', JobClassificationIta, 'Edm.DateTime');
    /**
     * Static representation of the [[jobClassificationExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationIta.JOB_CLASSIFICATION_EXTERNAL_CODE = new core_1.StringField('JobClassification_externalCode', JobClassificationIta, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationIta.CREATED_BY = new core_1.StringField('createdBy', JobClassificationIta, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationIta.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', JobClassificationIta, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationIta.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', JobClassificationIta, 'Edm.Int64');
    /**
     * Static representation of the [[inailCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationIta.INAIL_CODE = new core_1.BigNumberField('inailCode', JobClassificationIta, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationIta.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', JobClassificationIta, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationIta.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', JobClassificationIta, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationIta.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', JobClassificationIta, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationIta.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', JobClassificationIta, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationIta.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', JobClassificationIta, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationIta.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', JobClassificationIta, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the JobClassificationIta entity.
     */
    JobClassificationIta._allFields = [
        JobClassificationIta.JOB_CLASSIFICATION_COUNTRY_COUNTRY,
        JobClassificationIta.JOB_CLASSIFICATION_EFFECTIVE_START_DATE,
        JobClassificationIta.JOB_CLASSIFICATION_EXTERNAL_CODE,
        JobClassificationIta.CREATED_BY,
        JobClassificationIta.CREATED_DATE_TIME,
        JobClassificationIta.EXTERNAL_CODE,
        JobClassificationIta.INAIL_CODE,
        JobClassificationIta.LAST_MODIFIED_BY,
        JobClassificationIta.LAST_MODIFIED_DATE_TIME,
        JobClassificationIta.MDF_SYSTEM_RECORD_STATUS,
        JobClassificationIta.CREATED_BY_NAV,
        JobClassificationIta.LAST_MODIFIED_BY_NAV,
        JobClassificationIta.MDF_SYSTEM_RECORD_STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    JobClassificationIta.ALL_FIELDS = new core_1.AllFields('*', JobClassificationIta);
    /**
     * All key fields of the JobClassificationIta entity.
     */
    JobClassificationIta._keyFields = [JobClassificationIta.JOB_CLASSIFICATION_COUNTRY_COUNTRY, JobClassificationIta.JOB_CLASSIFICATION_EFFECTIVE_START_DATE, JobClassificationIta.JOB_CLASSIFICATION_EXTERNAL_CODE, JobClassificationIta.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property JobClassificationIta.
     */
    JobClassificationIta._keys = JobClassificationIta._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobClassificationIta = exports.JobClassificationIta || (exports.JobClassificationIta = {}));
exports.JobClassificationIta = JobClassificationIta;
//# sourceMappingURL=JobClassificationIta.js.map