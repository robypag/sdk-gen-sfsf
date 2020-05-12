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
var JobAnalyzerReportingDataRequestBuilder_1 = require("./JobAnalyzerReportingDataRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobAnalyzerReportingData" of service "SFOData".
 */
var JobAnalyzerReportingData = /** @class */ (function (_super) {
    __extends(JobAnalyzerReportingData, _super);
    function JobAnalyzerReportingData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobAnalyzerReportingData`.
     * @returns A builder that constructs instances of entity type `JobAnalyzerReportingData`.
     */
    JobAnalyzerReportingData.builder = function () {
        return core_1.Entity.entityBuilder(JobAnalyzerReportingData);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobAnalyzerReportingData` entity type.
     * @returns A `JobAnalyzerReportingData` request builder.
     */
    JobAnalyzerReportingData.requestBuilder = function () {
        return new JobAnalyzerReportingDataRequestBuilder_1.JobAnalyzerReportingDataRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobAnalyzerReportingData`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobAnalyzerReportingData`.
     */
    JobAnalyzerReportingData.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobAnalyzerReportingData);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobAnalyzerReportingData.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobAnalyzerReportingData.
     */
    JobAnalyzerReportingData._entityName = 'JobAnalyzerReportingData';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobAnalyzerReportingData.
     */
    JobAnalyzerReportingData._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobAnalyzerReportingData._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobAnalyzerReportingData;
}(core_1.Entity));
exports.JobAnalyzerReportingData = JobAnalyzerReportingData;
var User_1 = require("./User");
var Currency_1 = require("./Currency");
var MdfEnumValue_1 = require("./MdfEnumValue");
var WfRequest_1 = require("./WfRequest");
(function (JobAnalyzerReportingData) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAnalyzerReportingData.CREATED_BY = new core_1.StringField('createdBy', JobAnalyzerReportingData, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAnalyzerReportingData.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', JobAnalyzerReportingData, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAnalyzerReportingData.CURRENCY = new core_1.StringField('currency', JobAnalyzerReportingData, 'Edm.String');
    /**
     * Static representation of the [[detectedSkills]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAnalyzerReportingData.DETECTED_SKILLS = new core_1.StringField('detectedSkills', JobAnalyzerReportingData, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAnalyzerReportingData.EXTERNAL_CODE = new core_1.StringField('externalCode', JobAnalyzerReportingData, 'Edm.String');
    /**
     * Static representation of the [[femaleScore]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAnalyzerReportingData.FEMALE_SCORE = new core_1.BigNumberField('femaleScore', JobAnalyzerReportingData, 'Edm.Decimal');
    /**
     * Static representation of the [[feminineBiasedTerms]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAnalyzerReportingData.FEMININE_BIASED_TERMS = new core_1.StringField('feminineBiasedTerms', JobAnalyzerReportingData, 'Edm.String');
    /**
     * Static representation of the [[jobReqId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAnalyzerReportingData.JOB_REQ_ID = new core_1.BigNumberField('jobReqId', JobAnalyzerReportingData, 'Edm.Int64');
    /**
     * Static representation of the [[languageScore]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAnalyzerReportingData.LANGUAGE_SCORE = new core_1.BigNumberField('languageScore', JobAnalyzerReportingData, 'Edm.Decimal');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAnalyzerReportingData.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', JobAnalyzerReportingData, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAnalyzerReportingData.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', JobAnalyzerReportingData, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[maleScore]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAnalyzerReportingData.MALE_SCORE = new core_1.BigNumberField('maleScore', JobAnalyzerReportingData, 'Edm.Decimal');
    /**
     * Static representation of the [[marketSkills]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAnalyzerReportingData.MARKET_SKILLS = new core_1.StringField('marketSkills', JobAnalyzerReportingData, 'Edm.String');
    /**
     * Static representation of the [[masculineBiasedTerms]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAnalyzerReportingData.MASCULINE_BIASED_TERMS = new core_1.StringField('masculineBiasedTerms', JobAnalyzerReportingData, 'Edm.String');
    /**
     * Static representation of the [[matchedJobFamilyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAnalyzerReportingData.MATCHED_JOB_FAMILY_CODE = new core_1.StringField('matchedJobFamilyCode', JobAnalyzerReportingData, 'Edm.String');
    /**
     * Static representation of the [[matchedJobFamilyLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAnalyzerReportingData.MATCHED_JOB_FAMILY_LABEL = new core_1.StringField('matchedJobFamilyLabel', JobAnalyzerReportingData, 'Edm.String');
    /**
     * Static representation of the [[matchedJobFamilyType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAnalyzerReportingData.MATCHED_JOB_FAMILY_TYPE = new core_1.StringField('matchedJobFamilyType', JobAnalyzerReportingData, 'Edm.String');
    /**
     * Static representation of the [[matchedJobLocationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAnalyzerReportingData.MATCHED_JOB_LOCATION_CODE = new core_1.StringField('matchedJobLocationCode', JobAnalyzerReportingData, 'Edm.String');
    /**
     * Static representation of the [[matchedJobLocationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAnalyzerReportingData.MATCHED_JOB_LOCATION_TYPE = new core_1.StringField('matchedJobLocationType', JobAnalyzerReportingData, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAnalyzerReportingData.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', JobAnalyzerReportingData, 'Edm.String');
    /**
     * Static representation of the [[neutralScore]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAnalyzerReportingData.NEUTRAL_SCORE = new core_1.BigNumberField('neutralScore', JobAnalyzerReportingData, 'Edm.Decimal');
    /**
     * Static representation of the [[predictedSalary]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAnalyzerReportingData.PREDICTED_SALARY = new core_1.BigNumberField('predictedSalary', JobAnalyzerReportingData, 'Edm.Decimal');
    /**
     * Static representation of the [[salaryRangeHigh]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAnalyzerReportingData.SALARY_RANGE_HIGH = new core_1.BigNumberField('salaryRangeHigh', JobAnalyzerReportingData, 'Edm.Decimal');
    /**
     * Static representation of the [[salaryRangeLow]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAnalyzerReportingData.SALARY_RANGE_LOW = new core_1.BigNumberField('salaryRangeLow', JobAnalyzerReportingData, 'Edm.Decimal');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAnalyzerReportingData.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', JobAnalyzerReportingData, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[currencyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAnalyzerReportingData.CURRENCY_NAV = new core_1.Link('currencyNav', JobAnalyzerReportingData, Currency_1.Currency);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAnalyzerReportingData.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', JobAnalyzerReportingData, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAnalyzerReportingData.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', JobAnalyzerReportingData, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobAnalyzerReportingData.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', JobAnalyzerReportingData, WfRequest_1.WfRequest);
    /**
     * All fields of the JobAnalyzerReportingData entity.
     */
    JobAnalyzerReportingData._allFields = [
        JobAnalyzerReportingData.CREATED_BY,
        JobAnalyzerReportingData.CREATED_DATE_TIME,
        JobAnalyzerReportingData.CURRENCY,
        JobAnalyzerReportingData.DETECTED_SKILLS,
        JobAnalyzerReportingData.EXTERNAL_CODE,
        JobAnalyzerReportingData.FEMALE_SCORE,
        JobAnalyzerReportingData.FEMININE_BIASED_TERMS,
        JobAnalyzerReportingData.JOB_REQ_ID,
        JobAnalyzerReportingData.LANGUAGE_SCORE,
        JobAnalyzerReportingData.LAST_MODIFIED_BY,
        JobAnalyzerReportingData.LAST_MODIFIED_DATE_TIME,
        JobAnalyzerReportingData.MALE_SCORE,
        JobAnalyzerReportingData.MARKET_SKILLS,
        JobAnalyzerReportingData.MASCULINE_BIASED_TERMS,
        JobAnalyzerReportingData.MATCHED_JOB_FAMILY_CODE,
        JobAnalyzerReportingData.MATCHED_JOB_FAMILY_LABEL,
        JobAnalyzerReportingData.MATCHED_JOB_FAMILY_TYPE,
        JobAnalyzerReportingData.MATCHED_JOB_LOCATION_CODE,
        JobAnalyzerReportingData.MATCHED_JOB_LOCATION_TYPE,
        JobAnalyzerReportingData.MDF_SYSTEM_RECORD_STATUS,
        JobAnalyzerReportingData.NEUTRAL_SCORE,
        JobAnalyzerReportingData.PREDICTED_SALARY,
        JobAnalyzerReportingData.SALARY_RANGE_HIGH,
        JobAnalyzerReportingData.SALARY_RANGE_LOW,
        JobAnalyzerReportingData.CREATED_BY_NAV,
        JobAnalyzerReportingData.CURRENCY_NAV,
        JobAnalyzerReportingData.LAST_MODIFIED_BY_NAV,
        JobAnalyzerReportingData.MDF_SYSTEM_RECORD_STATUS_NAV,
        JobAnalyzerReportingData.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    JobAnalyzerReportingData.ALL_FIELDS = new core_1.AllFields('*', JobAnalyzerReportingData);
    /**
     * All key fields of the JobAnalyzerReportingData entity.
     */
    JobAnalyzerReportingData._keyFields = [JobAnalyzerReportingData.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property JobAnalyzerReportingData.
     */
    JobAnalyzerReportingData._keys = JobAnalyzerReportingData._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobAnalyzerReportingData = exports.JobAnalyzerReportingData || (exports.JobAnalyzerReportingData = {}));
exports.JobAnalyzerReportingData = JobAnalyzerReportingData;
//# sourceMappingURL=JobAnalyzerReportingData.js.map