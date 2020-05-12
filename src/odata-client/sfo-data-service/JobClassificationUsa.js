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
var JobClassificationUsaRequestBuilder_1 = require("./JobClassificationUsaRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobClassificationUSA" of service "SFOData".
 */
var JobClassificationUsa = /** @class */ (function (_super) {
    __extends(JobClassificationUsa, _super);
    function JobClassificationUsa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobClassificationUsa`.
     * @returns A builder that constructs instances of entity type `JobClassificationUsa`.
     */
    JobClassificationUsa.builder = function () {
        return core_1.Entity.entityBuilder(JobClassificationUsa);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobClassificationUsa` entity type.
     * @returns A `JobClassificationUsa` request builder.
     */
    JobClassificationUsa.requestBuilder = function () {
        return new JobClassificationUsaRequestBuilder_1.JobClassificationUsaRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobClassificationUsa`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobClassificationUsa`.
     */
    JobClassificationUsa.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobClassificationUsa);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobClassificationUsa.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobClassificationUsa.
     */
    JobClassificationUsa._entityName = 'JobClassificationUSA';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobClassificationUsa.
     */
    JobClassificationUsa._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobClassificationUsa._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobClassificationUsa;
}(core_1.Entity));
exports.JobClassificationUsa = JobClassificationUsa;
var User_1 = require("./User");
var PickListValueV2_1 = require("./PickListValueV2");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (JobClassificationUsa) {
    /**
     * Static representation of the [[jobClassificationCountryCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationUsa.JOB_CLASSIFICATION_COUNTRY_COUNTRY = new core_1.StringField('JobClassificationCountry_country', JobClassificationUsa, 'Edm.String');
    /**
     * Static representation of the [[jobClassificationEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationUsa.JOB_CLASSIFICATION_EFFECTIVE_START_DATE = new core_1.DateField('JobClassification_effectiveStartDate', JobClassificationUsa, 'Edm.DateTime');
    /**
     * Static representation of the [[jobClassificationExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationUsa.JOB_CLASSIFICATION_EXTERNAL_CODE = new core_1.StringField('JobClassification_externalCode', JobClassificationUsa, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationUsa.CREATED_BY = new core_1.StringField('createdBy', JobClassificationUsa, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationUsa.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', JobClassificationUsa, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[custWorkersCompCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationUsa.CUST_WORKERS_COMP_CODE = new core_1.StringField('cust_WorkersCompCode', JobClassificationUsa, 'Edm.String');
    /**
     * Static representation of the [[eeo1JobCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationUsa.EEO_1_JOB_CATEGORY = new core_1.StringField('eeo1JobCategory', JobClassificationUsa, 'Edm.String');
    /**
     * Static representation of the [[eeo4JobCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationUsa.EEO_4_JOB_CATEGORY = new core_1.StringField('eeo4JobCategory', JobClassificationUsa, 'Edm.String');
    /**
     * Static representation of the [[eeo5JobCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationUsa.EEO_5_JOB_CATEGORY = new core_1.StringField('eeo5JobCategory', JobClassificationUsa, 'Edm.String');
    /**
     * Static representation of the [[eeo6JobCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationUsa.EEO_6_JOB_CATEGORY = new core_1.StringField('eeo6JobCategory', JobClassificationUsa, 'Edm.String');
    /**
     * Static representation of the [[eeoJobGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationUsa.EEO_JOB_GROUP = new core_1.StringField('eeoJobGroup', JobClassificationUsa, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationUsa.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', JobClassificationUsa, 'Edm.Int64');
    /**
     * Static representation of the [[flsaStatusUsa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationUsa.FLSA_STATUS_USA = new core_1.StringField('flsaStatusUSA', JobClassificationUsa, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationUsa.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', JobClassificationUsa, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationUsa.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', JobClassificationUsa, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[localJobTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationUsa.LOCAL_JOB_TITLE = new core_1.StringField('localJobTitle', JobClassificationUsa, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationUsa.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', JobClassificationUsa, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationUsa.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', JobClassificationUsa, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[eeo1JobCategoryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationUsa.EEO_1_JOB_CATEGORY_NAV = new core_1.Link('eeo1JobCategoryNav', JobClassificationUsa, PickListValueV2_1.PickListValueV2);
    /**
     * Static representation of the one-to-many navigation property [[eeo4JobCategoryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationUsa.EEO_4_JOB_CATEGORY_NAV = new core_1.Link('eeo4JobCategoryNav', JobClassificationUsa, PickListValueV2_1.PickListValueV2);
    /**
     * Static representation of the one-to-many navigation property [[eeo5JobCategoryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationUsa.EEO_5_JOB_CATEGORY_NAV = new core_1.Link('eeo5JobCategoryNav', JobClassificationUsa, PickListValueV2_1.PickListValueV2);
    /**
     * Static representation of the one-to-many navigation property [[eeo6JobCategoryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationUsa.EEO_6_JOB_CATEGORY_NAV = new core_1.Link('eeo6JobCategoryNav', JobClassificationUsa, PickListValueV2_1.PickListValueV2);
    /**
     * Static representation of the one-to-many navigation property [[eeoJobGroupNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationUsa.EEO_JOB_GROUP_NAV = new core_1.Link('eeoJobGroupNav', JobClassificationUsa, PickListValueV2_1.PickListValueV2);
    /**
     * Static representation of the one-to-many navigation property [[flsaStatusUsaNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationUsa.FLSA_STATUS_USA_NAV = new core_1.Link('flsaStatusUSANav', JobClassificationUsa, PickListValueV2_1.PickListValueV2);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationUsa.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', JobClassificationUsa, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationUsa.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', JobClassificationUsa, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the JobClassificationUsa entity.
     */
    JobClassificationUsa._allFields = [
        JobClassificationUsa.JOB_CLASSIFICATION_COUNTRY_COUNTRY,
        JobClassificationUsa.JOB_CLASSIFICATION_EFFECTIVE_START_DATE,
        JobClassificationUsa.JOB_CLASSIFICATION_EXTERNAL_CODE,
        JobClassificationUsa.CREATED_BY,
        JobClassificationUsa.CREATED_DATE_TIME,
        JobClassificationUsa.CUST_WORKERS_COMP_CODE,
        JobClassificationUsa.EEO_1_JOB_CATEGORY,
        JobClassificationUsa.EEO_4_JOB_CATEGORY,
        JobClassificationUsa.EEO_5_JOB_CATEGORY,
        JobClassificationUsa.EEO_6_JOB_CATEGORY,
        JobClassificationUsa.EEO_JOB_GROUP,
        JobClassificationUsa.EXTERNAL_CODE,
        JobClassificationUsa.FLSA_STATUS_USA,
        JobClassificationUsa.LAST_MODIFIED_BY,
        JobClassificationUsa.LAST_MODIFIED_DATE_TIME,
        JobClassificationUsa.LOCAL_JOB_TITLE,
        JobClassificationUsa.MDF_SYSTEM_RECORD_STATUS,
        JobClassificationUsa.CREATED_BY_NAV,
        JobClassificationUsa.EEO_1_JOB_CATEGORY_NAV,
        JobClassificationUsa.EEO_4_JOB_CATEGORY_NAV,
        JobClassificationUsa.EEO_5_JOB_CATEGORY_NAV,
        JobClassificationUsa.EEO_6_JOB_CATEGORY_NAV,
        JobClassificationUsa.EEO_JOB_GROUP_NAV,
        JobClassificationUsa.FLSA_STATUS_USA_NAV,
        JobClassificationUsa.LAST_MODIFIED_BY_NAV,
        JobClassificationUsa.MDF_SYSTEM_RECORD_STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    JobClassificationUsa.ALL_FIELDS = new core_1.AllFields('*', JobClassificationUsa);
    /**
     * All key fields of the JobClassificationUsa entity.
     */
    JobClassificationUsa._keyFields = [JobClassificationUsa.JOB_CLASSIFICATION_COUNTRY_COUNTRY, JobClassificationUsa.JOB_CLASSIFICATION_EFFECTIVE_START_DATE, JobClassificationUsa.JOB_CLASSIFICATION_EXTERNAL_CODE, JobClassificationUsa.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property JobClassificationUsa.
     */
    JobClassificationUsa._keys = JobClassificationUsa._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobClassificationUsa = exports.JobClassificationUsa || (exports.JobClassificationUsa = {}));
exports.JobClassificationUsa = JobClassificationUsa;
//# sourceMappingURL=JobClassificationUsa.js.map