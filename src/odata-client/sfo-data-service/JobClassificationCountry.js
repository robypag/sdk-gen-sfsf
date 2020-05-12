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
var JobClassificationCountryRequestBuilder_1 = require("./JobClassificationCountryRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobClassificationCountry" of service "SFOData".
 */
var JobClassificationCountry = /** @class */ (function (_super) {
    __extends(JobClassificationCountry, _super);
    function JobClassificationCountry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobClassificationCountry`.
     * @returns A builder that constructs instances of entity type `JobClassificationCountry`.
     */
    JobClassificationCountry.builder = function () {
        return core_1.Entity.entityBuilder(JobClassificationCountry);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobClassificationCountry` entity type.
     * @returns A `JobClassificationCountry` request builder.
     */
    JobClassificationCountry.requestBuilder = function () {
        return new JobClassificationCountryRequestBuilder_1.JobClassificationCountryRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobClassificationCountry`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobClassificationCountry`.
     */
    JobClassificationCountry.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobClassificationCountry);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobClassificationCountry.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobClassificationCountry.
     */
    JobClassificationCountry._entityName = 'JobClassificationCountry';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobClassificationCountry.
     */
    JobClassificationCountry._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobClassificationCountry._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobClassificationCountry;
}(core_1.Entity));
exports.JobClassificationCountry = JobClassificationCountry;
var Country_1 = require("./Country");
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var JobClassificationAus_1 = require("./JobClassificationAus");
var JobClassificationBra_1 = require("./JobClassificationBra");
var JobClassificationCan_1 = require("./JobClassificationCan");
var JobClassificationFra_1 = require("./JobClassificationFra");
var JobClassificationGbr_1 = require("./JobClassificationGbr");
var JobClassificationIta_1 = require("./JobClassificationIta");
var JobClassificationUsa_1 = require("./JobClassificationUsa");
var JobClassificationZaf_1 = require("./JobClassificationZaf");
(function (JobClassificationCountry) {
    /**
     * Static representation of the [[jobClassificationEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationCountry.JOB_CLASSIFICATION_EFFECTIVE_START_DATE = new core_1.DateField('JobClassification_effectiveStartDate', JobClassificationCountry, 'Edm.DateTime');
    /**
     * Static representation of the [[jobClassificationExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationCountry.JOB_CLASSIFICATION_EXTERNAL_CODE = new core_1.StringField('JobClassification_externalCode', JobClassificationCountry, 'Edm.String');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationCountry.COUNTRY = new core_1.StringField('country', JobClassificationCountry, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationCountry.CREATED_BY = new core_1.StringField('createdBy', JobClassificationCountry, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationCountry.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', JobClassificationCountry, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationCountry.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', JobClassificationCountry, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationCountry.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', JobClassificationCountry, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationCountry.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', JobClassificationCountry, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationCountry.COUNTRY_NAV = new core_1.Link('countryNav', JobClassificationCountry, Country_1.Country);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationCountry.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', JobClassificationCountry, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationCountry.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', JobClassificationCountry, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationCountry.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', JobClassificationCountry, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[toJobClassificationAus]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationCountry.TO_JOB_CLASSIFICATION_AUS = new core_1.OneToOneLink('toJobClassificationAUS', JobClassificationCountry, JobClassificationAus_1.JobClassificationAus);
    /**
     * Static representation of the one-to-one navigation property [[toJobClassificationBra]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationCountry.TO_JOB_CLASSIFICATION_BRA = new core_1.OneToOneLink('toJobClassificationBRA', JobClassificationCountry, JobClassificationBra_1.JobClassificationBra);
    /**
     * Static representation of the one-to-one navigation property [[toJobClassificationCan]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationCountry.TO_JOB_CLASSIFICATION_CAN = new core_1.OneToOneLink('toJobClassificationCAN', JobClassificationCountry, JobClassificationCan_1.JobClassificationCan);
    /**
     * Static representation of the one-to-one navigation property [[toJobClassificationFra]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationCountry.TO_JOB_CLASSIFICATION_FRA = new core_1.OneToOneLink('toJobClassificationFRA', JobClassificationCountry, JobClassificationFra_1.JobClassificationFra);
    /**
     * Static representation of the one-to-one navigation property [[toJobClassificationGbr]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationCountry.TO_JOB_CLASSIFICATION_GBR = new core_1.OneToOneLink('toJobClassificationGBR', JobClassificationCountry, JobClassificationGbr_1.JobClassificationGbr);
    /**
     * Static representation of the one-to-one navigation property [[toJobClassificationIta]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationCountry.TO_JOB_CLASSIFICATION_ITA = new core_1.OneToOneLink('toJobClassificationITA', JobClassificationCountry, JobClassificationIta_1.JobClassificationIta);
    /**
     * Static representation of the one-to-one navigation property [[toJobClassificationUsa]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationCountry.TO_JOB_CLASSIFICATION_USA = new core_1.OneToOneLink('toJobClassificationUSA', JobClassificationCountry, JobClassificationUsa_1.JobClassificationUsa);
    /**
     * Static representation of the one-to-one navigation property [[toJobClassificationZaf]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationCountry.TO_JOB_CLASSIFICATION_ZAF = new core_1.OneToOneLink('toJobClassificationZAF', JobClassificationCountry, JobClassificationZaf_1.JobClassificationZaf);
    /**
     * All fields of the JobClassificationCountry entity.
     */
    JobClassificationCountry._allFields = [
        JobClassificationCountry.JOB_CLASSIFICATION_EFFECTIVE_START_DATE,
        JobClassificationCountry.JOB_CLASSIFICATION_EXTERNAL_CODE,
        JobClassificationCountry.COUNTRY,
        JobClassificationCountry.CREATED_BY,
        JobClassificationCountry.CREATED_DATE_TIME,
        JobClassificationCountry.LAST_MODIFIED_BY,
        JobClassificationCountry.LAST_MODIFIED_DATE_TIME,
        JobClassificationCountry.MDF_SYSTEM_RECORD_STATUS,
        JobClassificationCountry.COUNTRY_NAV,
        JobClassificationCountry.CREATED_BY_NAV,
        JobClassificationCountry.LAST_MODIFIED_BY_NAV,
        JobClassificationCountry.MDF_SYSTEM_RECORD_STATUS_NAV,
        JobClassificationCountry.TO_JOB_CLASSIFICATION_AUS,
        JobClassificationCountry.TO_JOB_CLASSIFICATION_BRA,
        JobClassificationCountry.TO_JOB_CLASSIFICATION_CAN,
        JobClassificationCountry.TO_JOB_CLASSIFICATION_FRA,
        JobClassificationCountry.TO_JOB_CLASSIFICATION_GBR,
        JobClassificationCountry.TO_JOB_CLASSIFICATION_ITA,
        JobClassificationCountry.TO_JOB_CLASSIFICATION_USA,
        JobClassificationCountry.TO_JOB_CLASSIFICATION_ZAF
    ];
    /**
     * All fields selector.
     */
    JobClassificationCountry.ALL_FIELDS = new core_1.AllFields('*', JobClassificationCountry);
    /**
     * All key fields of the JobClassificationCountry entity.
     */
    JobClassificationCountry._keyFields = [JobClassificationCountry.JOB_CLASSIFICATION_EFFECTIVE_START_DATE, JobClassificationCountry.JOB_CLASSIFICATION_EXTERNAL_CODE, JobClassificationCountry.COUNTRY];
    /**
     * Mapping of all key field names to the respective static field property JobClassificationCountry.
     */
    JobClassificationCountry._keys = JobClassificationCountry._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobClassificationCountry = exports.JobClassificationCountry || (exports.JobClassificationCountry = {}));
exports.JobClassificationCountry = JobClassificationCountry;
//# sourceMappingURL=JobClassificationCountry.js.map