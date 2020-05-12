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
var JobClassificationZafRequestBuilder_1 = require("./JobClassificationZafRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobClassificationZAF" of service "SFOData".
 */
var JobClassificationZaf = /** @class */ (function (_super) {
    __extends(JobClassificationZaf, _super);
    function JobClassificationZaf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobClassificationZaf`.
     * @returns A builder that constructs instances of entity type `JobClassificationZaf`.
     */
    JobClassificationZaf.builder = function () {
        return core_1.Entity.entityBuilder(JobClassificationZaf);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobClassificationZaf` entity type.
     * @returns A `JobClassificationZaf` request builder.
     */
    JobClassificationZaf.requestBuilder = function () {
        return new JobClassificationZafRequestBuilder_1.JobClassificationZafRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobClassificationZaf`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobClassificationZaf`.
     */
    JobClassificationZaf.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobClassificationZaf);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobClassificationZaf.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobClassificationZaf.
     */
    JobClassificationZaf._entityName = 'JobClassificationZAF';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobClassificationZaf.
     */
    JobClassificationZaf._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobClassificationZaf._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobClassificationZaf;
}(core_1.Entity));
exports.JobClassificationZaf = JobClassificationZaf;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var PickListValueV2_1 = require("./PickListValueV2");
(function (JobClassificationZaf) {
    /**
     * Static representation of the [[jobClassificationCountryCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationZaf.JOB_CLASSIFICATION_COUNTRY_COUNTRY = new core_1.StringField('JobClassificationCountry_country', JobClassificationZaf, 'Edm.String');
    /**
     * Static representation of the [[jobClassificationEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationZaf.JOB_CLASSIFICATION_EFFECTIVE_START_DATE = new core_1.DateField('JobClassification_effectiveStartDate', JobClassificationZaf, 'Edm.DateTime');
    /**
     * Static representation of the [[jobClassificationExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationZaf.JOB_CLASSIFICATION_EXTERNAL_CODE = new core_1.StringField('JobClassification_externalCode', JobClassificationZaf, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationZaf.CREATED_BY = new core_1.StringField('createdBy', JobClassificationZaf, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationZaf.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', JobClassificationZaf, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationZaf.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', JobClassificationZaf, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationZaf.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', JobClassificationZaf, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationZaf.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', JobClassificationZaf, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationZaf.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', JobClassificationZaf, 'Edm.String');
    /**
     * Static representation of the [[occupationalLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationZaf.OCCUPATIONAL_LEVEL = new core_1.StringField('occupationalLevel', JobClassificationZaf, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationZaf.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', JobClassificationZaf, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationZaf.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', JobClassificationZaf, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationZaf.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', JobClassificationZaf, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[occupationalLevelNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationZaf.OCCUPATIONAL_LEVEL_NAV = new core_1.Link('occupationalLevelNav', JobClassificationZaf, PickListValueV2_1.PickListValueV2);
    /**
     * All fields of the JobClassificationZaf entity.
     */
    JobClassificationZaf._allFields = [
        JobClassificationZaf.JOB_CLASSIFICATION_COUNTRY_COUNTRY,
        JobClassificationZaf.JOB_CLASSIFICATION_EFFECTIVE_START_DATE,
        JobClassificationZaf.JOB_CLASSIFICATION_EXTERNAL_CODE,
        JobClassificationZaf.CREATED_BY,
        JobClassificationZaf.CREATED_DATE_TIME,
        JobClassificationZaf.EXTERNAL_CODE,
        JobClassificationZaf.LAST_MODIFIED_BY,
        JobClassificationZaf.LAST_MODIFIED_DATE_TIME,
        JobClassificationZaf.MDF_SYSTEM_RECORD_STATUS,
        JobClassificationZaf.OCCUPATIONAL_LEVEL,
        JobClassificationZaf.CREATED_BY_NAV,
        JobClassificationZaf.LAST_MODIFIED_BY_NAV,
        JobClassificationZaf.MDF_SYSTEM_RECORD_STATUS_NAV,
        JobClassificationZaf.OCCUPATIONAL_LEVEL_NAV
    ];
    /**
     * All fields selector.
     */
    JobClassificationZaf.ALL_FIELDS = new core_1.AllFields('*', JobClassificationZaf);
    /**
     * All key fields of the JobClassificationZaf entity.
     */
    JobClassificationZaf._keyFields = [JobClassificationZaf.JOB_CLASSIFICATION_COUNTRY_COUNTRY, JobClassificationZaf.JOB_CLASSIFICATION_EFFECTIVE_START_DATE, JobClassificationZaf.JOB_CLASSIFICATION_EXTERNAL_CODE, JobClassificationZaf.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property JobClassificationZaf.
     */
    JobClassificationZaf._keys = JobClassificationZaf._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobClassificationZaf = exports.JobClassificationZaf || (exports.JobClassificationZaf = {}));
exports.JobClassificationZaf = JobClassificationZaf;
//# sourceMappingURL=JobClassificationZaf.js.map