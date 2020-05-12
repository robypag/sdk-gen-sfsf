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
var JobClassificationGbrRequestBuilder_1 = require("./JobClassificationGbrRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobClassificationGBR" of service "SFOData".
 */
var JobClassificationGbr = /** @class */ (function (_super) {
    __extends(JobClassificationGbr, _super);
    function JobClassificationGbr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobClassificationGbr`.
     * @returns A builder that constructs instances of entity type `JobClassificationGbr`.
     */
    JobClassificationGbr.builder = function () {
        return core_1.Entity.entityBuilder(JobClassificationGbr);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobClassificationGbr` entity type.
     * @returns A `JobClassificationGbr` request builder.
     */
    JobClassificationGbr.requestBuilder = function () {
        return new JobClassificationGbrRequestBuilder_1.JobClassificationGbrRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobClassificationGbr`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobClassificationGbr`.
     */
    JobClassificationGbr.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobClassificationGbr);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobClassificationGbr.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobClassificationGbr.
     */
    JobClassificationGbr._entityName = 'JobClassificationGBR';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobClassificationGbr.
     */
    JobClassificationGbr._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobClassificationGbr._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobClassificationGbr;
}(core_1.Entity));
exports.JobClassificationGbr = JobClassificationGbr;
var User_1 = require("./User");
var PickListValueV2_1 = require("./PickListValueV2");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (JobClassificationGbr) {
    /**
     * Static representation of the [[jobClassificationCountryCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationGbr.JOB_CLASSIFICATION_COUNTRY_COUNTRY = new core_1.StringField('JobClassificationCountry_country', JobClassificationGbr, 'Edm.String');
    /**
     * Static representation of the [[jobClassificationEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationGbr.JOB_CLASSIFICATION_EFFECTIVE_START_DATE = new core_1.DateField('JobClassification_effectiveStartDate', JobClassificationGbr, 'Edm.DateTime');
    /**
     * Static representation of the [[jobClassificationExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationGbr.JOB_CLASSIFICATION_EXTERNAL_CODE = new core_1.StringField('JobClassification_externalCode', JobClassificationGbr, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationGbr.CREATED_BY = new core_1.StringField('createdBy', JobClassificationGbr, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationGbr.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', JobClassificationGbr, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[custStandardOccupationalClassificationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationGbr.CUST_STANDARD_OCCUPATIONAL_CLASSIFICATION_CODE = new core_1.StringField('cust_standardOccupationalClassificationCode', JobClassificationGbr, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationGbr.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', JobClassificationGbr, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationGbr.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', JobClassificationGbr, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationGbr.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', JobClassificationGbr, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationGbr.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', JobClassificationGbr, 'Edm.String');
    /**
     * Static representation of the [[occupationalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationGbr.OCCUPATIONAL_CODE = new core_1.BigNumberField('occupationalCode', JobClassificationGbr, 'Edm.Int64');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationGbr.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', JobClassificationGbr, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[custStandardOccupationalClassificationCodeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationGbr.CUST_STANDARD_OCCUPATIONAL_CLASSIFICATION_CODE_NAV = new core_1.Link('cust_standardOccupationalClassificationCodeNav', JobClassificationGbr, PickListValueV2_1.PickListValueV2);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationGbr.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', JobClassificationGbr, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationGbr.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', JobClassificationGbr, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the JobClassificationGbr entity.
     */
    JobClassificationGbr._allFields = [
        JobClassificationGbr.JOB_CLASSIFICATION_COUNTRY_COUNTRY,
        JobClassificationGbr.JOB_CLASSIFICATION_EFFECTIVE_START_DATE,
        JobClassificationGbr.JOB_CLASSIFICATION_EXTERNAL_CODE,
        JobClassificationGbr.CREATED_BY,
        JobClassificationGbr.CREATED_DATE_TIME,
        JobClassificationGbr.CUST_STANDARD_OCCUPATIONAL_CLASSIFICATION_CODE,
        JobClassificationGbr.EXTERNAL_CODE,
        JobClassificationGbr.LAST_MODIFIED_BY,
        JobClassificationGbr.LAST_MODIFIED_DATE_TIME,
        JobClassificationGbr.MDF_SYSTEM_RECORD_STATUS,
        JobClassificationGbr.OCCUPATIONAL_CODE,
        JobClassificationGbr.CREATED_BY_NAV,
        JobClassificationGbr.CUST_STANDARD_OCCUPATIONAL_CLASSIFICATION_CODE_NAV,
        JobClassificationGbr.LAST_MODIFIED_BY_NAV,
        JobClassificationGbr.MDF_SYSTEM_RECORD_STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    JobClassificationGbr.ALL_FIELDS = new core_1.AllFields('*', JobClassificationGbr);
    /**
     * All key fields of the JobClassificationGbr entity.
     */
    JobClassificationGbr._keyFields = [JobClassificationGbr.JOB_CLASSIFICATION_COUNTRY_COUNTRY, JobClassificationGbr.JOB_CLASSIFICATION_EFFECTIVE_START_DATE, JobClassificationGbr.JOB_CLASSIFICATION_EXTERNAL_CODE, JobClassificationGbr.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property JobClassificationGbr.
     */
    JobClassificationGbr._keys = JobClassificationGbr._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobClassificationGbr = exports.JobClassificationGbr || (exports.JobClassificationGbr = {}));
exports.JobClassificationGbr = JobClassificationGbr;
//# sourceMappingURL=JobClassificationGbr.js.map