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
var JobClassificationBraRequestBuilder_1 = require("./JobClassificationBraRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobClassificationBRA" of service "SFOData".
 */
var JobClassificationBra = /** @class */ (function (_super) {
    __extends(JobClassificationBra, _super);
    function JobClassificationBra() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobClassificationBra`.
     * @returns A builder that constructs instances of entity type `JobClassificationBra`.
     */
    JobClassificationBra.builder = function () {
        return core_1.Entity.entityBuilder(JobClassificationBra);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobClassificationBra` entity type.
     * @returns A `JobClassificationBra` request builder.
     */
    JobClassificationBra.requestBuilder = function () {
        return new JobClassificationBraRequestBuilder_1.JobClassificationBraRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobClassificationBra`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobClassificationBra`.
     */
    JobClassificationBra.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobClassificationBra);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobClassificationBra.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobClassificationBra.
     */
    JobClassificationBra._entityName = 'JobClassificationBRA';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobClassificationBra.
     */
    JobClassificationBra._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobClassificationBra._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobClassificationBra;
}(core_1.Entity));
exports.JobClassificationBra = JobClassificationBra;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var PickListValueV2_1 = require("./PickListValueV2");
(function (JobClassificationBra) {
    /**
     * Static representation of the [[jobClassificationCountryCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationBra.JOB_CLASSIFICATION_COUNTRY_COUNTRY = new core_1.StringField('JobClassificationCountry_country', JobClassificationBra, 'Edm.String');
    /**
     * Static representation of the [[jobClassificationEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationBra.JOB_CLASSIFICATION_EFFECTIVE_START_DATE = new core_1.DateField('JobClassification_effectiveStartDate', JobClassificationBra, 'Edm.DateTime');
    /**
     * Static representation of the [[jobClassificationExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationBra.JOB_CLASSIFICATION_EXTERNAL_CODE = new core_1.StringField('JobClassification_externalCode', JobClassificationBra, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationBra.CREATED_BY = new core_1.StringField('createdBy', JobClassificationBra, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationBra.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', JobClassificationBra, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationBra.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', JobClassificationBra, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationBra.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', JobClassificationBra, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationBra.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', JobClassificationBra, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationBra.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', JobClassificationBra, 'Edm.String');
    /**
     * Static representation of the [[occupationalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationBra.OCCUPATIONAL_CODE = new core_1.StringField('occupationalCode', JobClassificationBra, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationBra.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', JobClassificationBra, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationBra.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', JobClassificationBra, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationBra.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', JobClassificationBra, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[occupationalCodeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobClassificationBra.OCCUPATIONAL_CODE_NAV = new core_1.Link('occupationalCodeNav', JobClassificationBra, PickListValueV2_1.PickListValueV2);
    /**
     * All fields of the JobClassificationBra entity.
     */
    JobClassificationBra._allFields = [
        JobClassificationBra.JOB_CLASSIFICATION_COUNTRY_COUNTRY,
        JobClassificationBra.JOB_CLASSIFICATION_EFFECTIVE_START_DATE,
        JobClassificationBra.JOB_CLASSIFICATION_EXTERNAL_CODE,
        JobClassificationBra.CREATED_BY,
        JobClassificationBra.CREATED_DATE_TIME,
        JobClassificationBra.EXTERNAL_CODE,
        JobClassificationBra.LAST_MODIFIED_BY,
        JobClassificationBra.LAST_MODIFIED_DATE_TIME,
        JobClassificationBra.MDF_SYSTEM_RECORD_STATUS,
        JobClassificationBra.OCCUPATIONAL_CODE,
        JobClassificationBra.CREATED_BY_NAV,
        JobClassificationBra.LAST_MODIFIED_BY_NAV,
        JobClassificationBra.MDF_SYSTEM_RECORD_STATUS_NAV,
        JobClassificationBra.OCCUPATIONAL_CODE_NAV
    ];
    /**
     * All fields selector.
     */
    JobClassificationBra.ALL_FIELDS = new core_1.AllFields('*', JobClassificationBra);
    /**
     * All key fields of the JobClassificationBra entity.
     */
    JobClassificationBra._keyFields = [JobClassificationBra.JOB_CLASSIFICATION_COUNTRY_COUNTRY, JobClassificationBra.JOB_CLASSIFICATION_EFFECTIVE_START_DATE, JobClassificationBra.JOB_CLASSIFICATION_EXTERNAL_CODE, JobClassificationBra.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property JobClassificationBra.
     */
    JobClassificationBra._keys = JobClassificationBra._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobClassificationBra = exports.JobClassificationBra || (exports.JobClassificationBra = {}));
exports.JobClassificationBra = JobClassificationBra;
//# sourceMappingURL=JobClassificationBra.js.map