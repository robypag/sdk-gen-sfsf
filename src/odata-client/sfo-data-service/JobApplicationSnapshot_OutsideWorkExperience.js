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
var JobApplicationSnapshot_OutsideWorkExperienceRequestBuilder_1 = require("./JobApplicationSnapshot_OutsideWorkExperienceRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobApplicationSnapshot_OutsideWorkExperience" of service "SFOData".
 */
var JobApplicationSnapshot_OutsideWorkExperience = /** @class */ (function (_super) {
    __extends(JobApplicationSnapshot_OutsideWorkExperience, _super);
    function JobApplicationSnapshot_OutsideWorkExperience() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobApplicationSnapshot_OutsideWorkExperience`.
     * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_OutsideWorkExperience`.
     */
    JobApplicationSnapshot_OutsideWorkExperience.builder = function () {
        return core_1.Entity.entityBuilder(JobApplicationSnapshot_OutsideWorkExperience);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobApplicationSnapshot_OutsideWorkExperience` entity type.
     * @returns A `JobApplicationSnapshot_OutsideWorkExperience` request builder.
     */
    JobApplicationSnapshot_OutsideWorkExperience.requestBuilder = function () {
        return new JobApplicationSnapshot_OutsideWorkExperienceRequestBuilder_1.JobApplicationSnapshot_OutsideWorkExperienceRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationSnapshot_OutsideWorkExperience`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_OutsideWorkExperience`.
     */
    JobApplicationSnapshot_OutsideWorkExperience.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobApplicationSnapshot_OutsideWorkExperience);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobApplicationSnapshot_OutsideWorkExperience.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobApplicationSnapshot_OutsideWorkExperience.
     */
    JobApplicationSnapshot_OutsideWorkExperience._entityName = 'JobApplicationSnapshot_OutsideWorkExperience';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplicationSnapshot_OutsideWorkExperience.
     */
    JobApplicationSnapshot_OutsideWorkExperience._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobApplicationSnapshot_OutsideWorkExperience._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobApplicationSnapshot_OutsideWorkExperience;
}(core_1.Entity));
exports.JobApplicationSnapshot_OutsideWorkExperience = JobApplicationSnapshot_OutsideWorkExperience;
var JobApplication_1 = require("./JobApplication");
var PicklistOption_1 = require("./PicklistOption");
(function (JobApplicationSnapshot_OutsideWorkExperience) {
    /**
     * Static representation of the [[applicationId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_OutsideWorkExperience.APPLICATION_ID = new core_1.BigNumberField('applicationId', JobApplicationSnapshot_OutsideWorkExperience, 'Edm.Int64');
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_OutsideWorkExperience.BACKGROUND_ELEMENT_ID = new core_1.BigNumberField('backgroundElementId', JobApplicationSnapshot_OutsideWorkExperience, 'Edm.Int64');
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_OutsideWorkExperience.BG_ORDER_POS = new core_1.BigNumberField('bgOrderPos', JobApplicationSnapshot_OutsideWorkExperience, 'Edm.Int64');
    /**
     * Static representation of the [[businessType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_OutsideWorkExperience.BUSINESS_TYPE = new core_1.StringField('businessType', JobApplicationSnapshot_OutsideWorkExperience, 'Edm.String');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_OutsideWorkExperience.COUNTRY = new core_1.StringField('country', JobApplicationSnapshot_OutsideWorkExperience, 'Edm.String');
    /**
     * Static representation of the [[employer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_OutsideWorkExperience.EMPLOYER = new core_1.StringField('employer', JobApplicationSnapshot_OutsideWorkExperience, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_OutsideWorkExperience.END_DATE = new core_1.DateField('endDate', JobApplicationSnapshot_OutsideWorkExperience, 'Edm.DateTime');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_OutsideWorkExperience.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', JobApplicationSnapshot_OutsideWorkExperience, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[presentEmployer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_OutsideWorkExperience.PRESENT_EMPLOYER = new core_1.StringField('presentEmployer', JobApplicationSnapshot_OutsideWorkExperience, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_OutsideWorkExperience.START_DATE = new core_1.DateField('startDate', JobApplicationSnapshot_OutsideWorkExperience, 'Edm.DateTime');
    /**
     * Static representation of the [[startTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_OutsideWorkExperience.START_TITLE = new core_1.StringField('startTitle', JobApplicationSnapshot_OutsideWorkExperience, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[application]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_OutsideWorkExperience.APPLICATION = new core_1.OneToOneLink('application', JobApplicationSnapshot_OutsideWorkExperience, JobApplication_1.JobApplication);
    /**
     * Static representation of the one-to-one navigation property [[businessTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_OutsideWorkExperience.BUSINESS_TYPE_NAV = new core_1.OneToOneLink('businessTypeNav', JobApplicationSnapshot_OutsideWorkExperience, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_OutsideWorkExperience.COUNTRY_NAV = new core_1.OneToOneLink('countryNav', JobApplicationSnapshot_OutsideWorkExperience, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[presentEmployerNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_OutsideWorkExperience.PRESENT_EMPLOYER_NAV = new core_1.OneToOneLink('presentEmployerNav', JobApplicationSnapshot_OutsideWorkExperience, PicklistOption_1.PicklistOption);
    /**
     * All fields of the JobApplicationSnapshot_OutsideWorkExperience entity.
     */
    JobApplicationSnapshot_OutsideWorkExperience._allFields = [
        JobApplicationSnapshot_OutsideWorkExperience.APPLICATION_ID,
        JobApplicationSnapshot_OutsideWorkExperience.BACKGROUND_ELEMENT_ID,
        JobApplicationSnapshot_OutsideWorkExperience.BG_ORDER_POS,
        JobApplicationSnapshot_OutsideWorkExperience.BUSINESS_TYPE,
        JobApplicationSnapshot_OutsideWorkExperience.COUNTRY,
        JobApplicationSnapshot_OutsideWorkExperience.EMPLOYER,
        JobApplicationSnapshot_OutsideWorkExperience.END_DATE,
        JobApplicationSnapshot_OutsideWorkExperience.LAST_MODIFIED_DATE_TIME,
        JobApplicationSnapshot_OutsideWorkExperience.PRESENT_EMPLOYER,
        JobApplicationSnapshot_OutsideWorkExperience.START_DATE,
        JobApplicationSnapshot_OutsideWorkExperience.START_TITLE,
        JobApplicationSnapshot_OutsideWorkExperience.APPLICATION,
        JobApplicationSnapshot_OutsideWorkExperience.BUSINESS_TYPE_NAV,
        JobApplicationSnapshot_OutsideWorkExperience.COUNTRY_NAV,
        JobApplicationSnapshot_OutsideWorkExperience.PRESENT_EMPLOYER_NAV
    ];
    /**
     * All fields selector.
     */
    JobApplicationSnapshot_OutsideWorkExperience.ALL_FIELDS = new core_1.AllFields('*', JobApplicationSnapshot_OutsideWorkExperience);
    /**
     * All key fields of the JobApplicationSnapshot_OutsideWorkExperience entity.
     */
    JobApplicationSnapshot_OutsideWorkExperience._keyFields = [JobApplicationSnapshot_OutsideWorkExperience.BACKGROUND_ELEMENT_ID];
    /**
     * Mapping of all key field names to the respective static field property JobApplicationSnapshot_OutsideWorkExperience.
     */
    JobApplicationSnapshot_OutsideWorkExperience._keys = JobApplicationSnapshot_OutsideWorkExperience._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobApplicationSnapshot_OutsideWorkExperience = exports.JobApplicationSnapshot_OutsideWorkExperience || (exports.JobApplicationSnapshot_OutsideWorkExperience = {}));
exports.JobApplicationSnapshot_OutsideWorkExperience = JobApplicationSnapshot_OutsideWorkExperience;
//# sourceMappingURL=JobApplicationSnapshot_OutsideWorkExperience.js.map