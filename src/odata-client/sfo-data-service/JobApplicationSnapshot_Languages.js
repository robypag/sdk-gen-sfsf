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
var JobApplicationSnapshot_LanguagesRequestBuilder_1 = require("./JobApplicationSnapshot_LanguagesRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JobApplicationSnapshot_Languages" of service "SFOData".
 */
var JobApplicationSnapshot_Languages = /** @class */ (function (_super) {
    __extends(JobApplicationSnapshot_Languages, _super);
    function JobApplicationSnapshot_Languages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `JobApplicationSnapshot_Languages`.
     * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_Languages`.
     */
    JobApplicationSnapshot_Languages.builder = function () {
        return core_1.Entity.entityBuilder(JobApplicationSnapshot_Languages);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JobApplicationSnapshot_Languages` entity type.
     * @returns A `JobApplicationSnapshot_Languages` request builder.
     */
    JobApplicationSnapshot_Languages.requestBuilder = function () {
        return new JobApplicationSnapshot_LanguagesRequestBuilder_1.JobApplicationSnapshot_LanguagesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationSnapshot_Languages`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_Languages`.
     */
    JobApplicationSnapshot_Languages.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, JobApplicationSnapshot_Languages);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JobApplicationSnapshot_Languages.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JobApplicationSnapshot_Languages.
     */
    JobApplicationSnapshot_Languages._entityName = 'JobApplicationSnapshot_Languages';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplicationSnapshot_Languages.
     */
    JobApplicationSnapshot_Languages._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    JobApplicationSnapshot_Languages._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return JobApplicationSnapshot_Languages;
}(core_1.Entity));
exports.JobApplicationSnapshot_Languages = JobApplicationSnapshot_Languages;
var JobApplication_1 = require("./JobApplication");
var PicklistOption_1 = require("./PicklistOption");
(function (JobApplicationSnapshot_Languages) {
    /**
     * Static representation of the [[applicationId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Languages.APPLICATION_ID = new core_1.BigNumberField('applicationId', JobApplicationSnapshot_Languages, 'Edm.Int64');
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Languages.BACKGROUND_ELEMENT_ID = new core_1.BigNumberField('backgroundElementId', JobApplicationSnapshot_Languages, 'Edm.Int64');
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Languages.BG_ORDER_POS = new core_1.BigNumberField('bgOrderPos', JobApplicationSnapshot_Languages, 'Edm.Int64');
    /**
     * Static representation of the [[language]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Languages.LANGUAGE = new core_1.StringField('language', JobApplicationSnapshot_Languages, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Languages.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', JobApplicationSnapshot_Languages, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[readingProf]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Languages.READING_PROF = new core_1.StringField('readingProf', JobApplicationSnapshot_Languages, 'Edm.String');
    /**
     * Static representation of the [[speakingProf]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Languages.SPEAKING_PROF = new core_1.StringField('speakingProf', JobApplicationSnapshot_Languages, 'Edm.String');
    /**
     * Static representation of the [[variant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Languages.VARIANT = new core_1.StringField('variant', JobApplicationSnapshot_Languages, 'Edm.String');
    /**
     * Static representation of the [[writingProf]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Languages.WRITING_PROF = new core_1.StringField('writingProf', JobApplicationSnapshot_Languages, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[application]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Languages.APPLICATION = new core_1.OneToOneLink('application', JobApplicationSnapshot_Languages, JobApplication_1.JobApplication);
    /**
     * Static representation of the one-to-one navigation property [[languageNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Languages.LANGUAGE_NAV = new core_1.OneToOneLink('languageNav', JobApplicationSnapshot_Languages, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[readingProfNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Languages.READING_PROF_NAV = new core_1.OneToOneLink('readingProfNav', JobApplicationSnapshot_Languages, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[speakingProfNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Languages.SPEAKING_PROF_NAV = new core_1.OneToOneLink('speakingProfNav', JobApplicationSnapshot_Languages, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[variantNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Languages.VARIANT_NAV = new core_1.OneToOneLink('variantNav', JobApplicationSnapshot_Languages, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[writingProfNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JobApplicationSnapshot_Languages.WRITING_PROF_NAV = new core_1.OneToOneLink('writingProfNav', JobApplicationSnapshot_Languages, PicklistOption_1.PicklistOption);
    /**
     * All fields of the JobApplicationSnapshot_Languages entity.
     */
    JobApplicationSnapshot_Languages._allFields = [
        JobApplicationSnapshot_Languages.APPLICATION_ID,
        JobApplicationSnapshot_Languages.BACKGROUND_ELEMENT_ID,
        JobApplicationSnapshot_Languages.BG_ORDER_POS,
        JobApplicationSnapshot_Languages.LANGUAGE,
        JobApplicationSnapshot_Languages.LAST_MODIFIED_DATE_TIME,
        JobApplicationSnapshot_Languages.READING_PROF,
        JobApplicationSnapshot_Languages.SPEAKING_PROF,
        JobApplicationSnapshot_Languages.VARIANT,
        JobApplicationSnapshot_Languages.WRITING_PROF,
        JobApplicationSnapshot_Languages.APPLICATION,
        JobApplicationSnapshot_Languages.LANGUAGE_NAV,
        JobApplicationSnapshot_Languages.READING_PROF_NAV,
        JobApplicationSnapshot_Languages.SPEAKING_PROF_NAV,
        JobApplicationSnapshot_Languages.VARIANT_NAV,
        JobApplicationSnapshot_Languages.WRITING_PROF_NAV
    ];
    /**
     * All fields selector.
     */
    JobApplicationSnapshot_Languages.ALL_FIELDS = new core_1.AllFields('*', JobApplicationSnapshot_Languages);
    /**
     * All key fields of the JobApplicationSnapshot_Languages entity.
     */
    JobApplicationSnapshot_Languages._keyFields = [JobApplicationSnapshot_Languages.BACKGROUND_ELEMENT_ID];
    /**
     * Mapping of all key field names to the respective static field property JobApplicationSnapshot_Languages.
     */
    JobApplicationSnapshot_Languages._keys = JobApplicationSnapshot_Languages._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JobApplicationSnapshot_Languages = exports.JobApplicationSnapshot_Languages || (exports.JobApplicationSnapshot_Languages = {}));
exports.JobApplicationSnapshot_Languages = JobApplicationSnapshot_Languages;
//# sourceMappingURL=JobApplicationSnapshot_Languages.js.map