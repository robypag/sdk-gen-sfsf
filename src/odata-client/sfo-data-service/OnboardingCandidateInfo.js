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
var OnboardingCandidateInfoRequestBuilder_1 = require("./OnboardingCandidateInfoRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "OnboardingCandidateInfo" of service "SFOData".
 */
var OnboardingCandidateInfo = /** @class */ (function (_super) {
    __extends(OnboardingCandidateInfo, _super);
    function OnboardingCandidateInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `OnboardingCandidateInfo`.
     * @returns A builder that constructs instances of entity type `OnboardingCandidateInfo`.
     */
    OnboardingCandidateInfo.builder = function () {
        return core_1.Entity.entityBuilder(OnboardingCandidateInfo);
    };
    /**
     * Returns a request builder to construct requests for operations on the `OnboardingCandidateInfo` entity type.
     * @returns A `OnboardingCandidateInfo` request builder.
     */
    OnboardingCandidateInfo.requestBuilder = function () {
        return new OnboardingCandidateInfoRequestBuilder_1.OnboardingCandidateInfoRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `OnboardingCandidateInfo`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `OnboardingCandidateInfo`.
     */
    OnboardingCandidateInfo.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, OnboardingCandidateInfo);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    OnboardingCandidateInfo.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for OnboardingCandidateInfo.
     */
    OnboardingCandidateInfo._entityName = 'OnboardingCandidateInfo';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for OnboardingCandidateInfo.
     */
    OnboardingCandidateInfo._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    OnboardingCandidateInfo._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return OnboardingCandidateInfo;
}(core_1.Entity));
exports.OnboardingCandidateInfo = OnboardingCandidateInfo;
var User_1 = require("./User");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var MdfEnumValue_1 = require("./MdfEnumValue");
var WfRequest_1 = require("./WfRequest");
(function (OnboardingCandidateInfo) {
    /**
     * Static representation of the [[applicantId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.APPLICANT_ID = new core_1.StringField('applicantId', OnboardingCandidateInfo, 'Edm.String');
    /**
     * Static representation of the [[candidateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.CANDIDATE_ID = new core_1.StringField('candidateId', OnboardingCandidateInfo, 'Edm.String');
    /**
     * Static representation of the [[company]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.COMPANY = new core_1.StringField('company', OnboardingCandidateInfo, 'Edm.String');
    /**
     * Static representation of the [[concurrentEmployment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.CONCURRENT_EMPLOYMENT = new core_1.BooleanField('concurrentEmployment', OnboardingCandidateInfo, 'Edm.Boolean');
    /**
     * Static representation of the [[concurrentUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.CONCURRENT_USER = new core_1.StringField('concurrentUser', OnboardingCandidateInfo, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.CREATED_BY = new core_1.StringField('createdBy', OnboardingCandidateInfo, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', OnboardingCandidateInfo, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[crossboarded]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.CROSSBOARDED = new core_1.BooleanField('crossboarded', OnboardingCandidateInfo, 'Edm.Boolean');
    /**
     * Static representation of the [[department]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.DEPARTMENT = new core_1.StringField('department', OnboardingCandidateInfo, 'Edm.String');
    /**
     * Static representation of the [[division]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.DIVISION = new core_1.StringField('division', OnboardingCandidateInfo, 'Edm.String');
    /**
     * Static representation of the [[email]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.EMAIL = new core_1.StringField('email', OnboardingCandidateInfo, 'Edm.String');
    /**
     * Static representation of the [[externalNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.EXTERNAL_NAME_DE_DE = new core_1.StringField('externalName_de_DE', OnboardingCandidateInfo, 'Edm.String');
    /**
     * Static representation of the [[externalNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.EXTERNAL_NAME_DEFAULT_VALUE = new core_1.StringField('externalName_defaultValue', OnboardingCandidateInfo, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.EXTERNAL_NAME_EN_DEBUG = new core_1.StringField('externalName_en_DEBUG', OnboardingCandidateInfo, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.EXTERNAL_NAME_EN_GB = new core_1.StringField('externalName_en_GB', OnboardingCandidateInfo, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.EXTERNAL_NAME_EN_US = new core_1.StringField('externalName_en_US', OnboardingCandidateInfo, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.EXTERNAL_NAME_ES_ES = new core_1.StringField('externalName_es_ES', OnboardingCandidateInfo, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.EXTERNAL_NAME_ES_MX = new core_1.StringField('externalName_es_MX', OnboardingCandidateInfo, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.EXTERNAL_NAME_FR_CA = new core_1.StringField('externalName_fr_CA', OnboardingCandidateInfo, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.EXTERNAL_NAME_FR_FR = new core_1.StringField('externalName_fr_FR', OnboardingCandidateInfo, 'Edm.String');
    /**
     * Static representation of the [[externalNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.EXTERNAL_NAME_IT_IT = new core_1.StringField('externalName_it_IT', OnboardingCandidateInfo, 'Edm.String');
    /**
     * Static representation of the [[externalNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.EXTERNAL_NAME_LOCALIZED = new core_1.StringField('externalName_localized', OnboardingCandidateInfo, 'Edm.String');
    /**
     * Static representation of the [[externalNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.EXTERNAL_NAME_NL_NL = new core_1.StringField('externalName_nl_NL', OnboardingCandidateInfo, 'Edm.String');
    /**
     * Static representation of the [[externalNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.EXTERNAL_NAME_PT_BR = new core_1.StringField('externalName_pt_BR', OnboardingCandidateInfo, 'Edm.String');
    /**
     * Static representation of the [[externalNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.EXTERNAL_NAME_ZH_CN = new core_1.StringField('externalName_zh_CN', OnboardingCandidateInfo, 'Edm.String');
    /**
     * Static representation of the [[fName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.F_NAME = new core_1.StringField('fName', OnboardingCandidateInfo, 'Edm.String');
    /**
     * Static representation of the [[failedSebEventsOccured]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.FAILED_SEB_EVENTS_OCCURED = new core_1.BooleanField('failedSEBEventsOccured', OnboardingCandidateInfo, 'Edm.Boolean');
    /**
     * Static representation of the [[fromExternalAts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.FROM_EXTERNAL_ATS = new core_1.BooleanField('fromExternalATS', OnboardingCandidateInfo, 'Edm.Boolean');
    /**
     * Static representation of the [[globalAssignment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.GLOBAL_ASSIGNMENT = new core_1.BooleanField('globalAssignment', OnboardingCandidateInfo, 'Edm.Boolean');
    /**
     * Static representation of the [[hireDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.HIRE_DATE = new core_1.StringField('hireDate', OnboardingCandidateInfo, 'Edm.String');
    /**
     * Static representation of the [[hired]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.HIRED = new core_1.BooleanField('hired', OnboardingCandidateInfo, 'Edm.Boolean');
    /**
     * Static representation of the [[hrManagerId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.HR_MANAGER_ID = new core_1.StringField('hrManagerId', OnboardingCandidateInfo, 'Edm.String');
    /**
     * Static representation of the [[internalHire]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.INTERNAL_HIRE = new core_1.BooleanField('internalHire', OnboardingCandidateInfo, 'Edm.Boolean');
    /**
     * Static representation of the [[jobReqId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.JOB_REQ_ID = new core_1.StringField('jobReqId', OnboardingCandidateInfo, 'Edm.String');
    /**
     * Static representation of the [[jobTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.JOB_TITLE = new core_1.StringField('jobTitle', OnboardingCandidateInfo, 'Edm.String');
    /**
     * Static representation of the [[kmsUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.KMS_USER_ID = new core_1.StringField('kmsUserId', OnboardingCandidateInfo, 'Edm.String');
    /**
     * Static representation of the [[lName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.L_NAME = new core_1.StringField('lName', OnboardingCandidateInfo, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', OnboardingCandidateInfo, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', OnboardingCandidateInfo, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[location]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.LOCATION = new core_1.StringField('location', OnboardingCandidateInfo, 'Edm.String');
    /**
     * Static representation of the [[managerId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.MANAGER_ID = new core_1.StringField('managerId', OnboardingCandidateInfo, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', OnboardingCandidateInfo, 'Edm.String');
    /**
     * Static representation of the [[onboardingLocale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.ONBOARDING_LOCALE = new core_1.StringField('onboardingLocale', OnboardingCandidateInfo, 'Edm.String');
    /**
     * Static representation of the [[payGrade]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.PAY_GRADE = new core_1.StringField('payGrade', OnboardingCandidateInfo, 'Edm.String');
    /**
     * Static representation of the [[primaryEmployment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.PRIMARY_EMPLOYMENT = new core_1.BooleanField('primaryEmployment', OnboardingCandidateInfo, 'Edm.Boolean');
    /**
     * Static representation of the [[processorId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.PROCESSOR_ID = new core_1.StringField('processorId', OnboardingCandidateInfo, 'Edm.String');
    /**
     * Static representation of the [[readyToHire]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.READY_TO_HIRE = new core_1.BooleanField('readyToHire', OnboardingCandidateInfo, 'Edm.Boolean');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.USER_ID = new core_1.StringField('userId', OnboardingCandidateInfo, 'Edm.String');
    /**
     * Static representation of the [[workCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.WORK_COUNTRY = new core_1.StringField('workCountry', OnboardingCandidateInfo, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[concurrentUserNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.CONCURRENT_USER_NAV = new core_1.OneToOneLink('concurrentUserNav', OnboardingCandidateInfo, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', OnboardingCandidateInfo, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.EXTERNAL_NAME_TRANSLATION_TEXT_NAV = new core_1.Link('externalNameTranslationTextNav', OnboardingCandidateInfo, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[hrManagerIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.HR_MANAGER_ID_NAV = new core_1.OneToOneLink('hrManagerIdNav', OnboardingCandidateInfo, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', OnboardingCandidateInfo, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[managerIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.MANAGER_ID_NAV = new core_1.OneToOneLink('managerIdNav', OnboardingCandidateInfo, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', OnboardingCandidateInfo, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[processorIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.PROCESSOR_ID_NAV = new core_1.OneToOneLink('processorIdNav', OnboardingCandidateInfo, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.USER_ID_NAV = new core_1.OneToOneLink('userIdNav', OnboardingCandidateInfo, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingCandidateInfo.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', OnboardingCandidateInfo, WfRequest_1.WfRequest);
    /**
     * All fields of the OnboardingCandidateInfo entity.
     */
    OnboardingCandidateInfo._allFields = [
        OnboardingCandidateInfo.APPLICANT_ID,
        OnboardingCandidateInfo.CANDIDATE_ID,
        OnboardingCandidateInfo.COMPANY,
        OnboardingCandidateInfo.CONCURRENT_EMPLOYMENT,
        OnboardingCandidateInfo.CONCURRENT_USER,
        OnboardingCandidateInfo.CREATED_BY,
        OnboardingCandidateInfo.CREATED_DATE_TIME,
        OnboardingCandidateInfo.CROSSBOARDED,
        OnboardingCandidateInfo.DEPARTMENT,
        OnboardingCandidateInfo.DIVISION,
        OnboardingCandidateInfo.EMAIL,
        OnboardingCandidateInfo.EXTERNAL_NAME_DE_DE,
        OnboardingCandidateInfo.EXTERNAL_NAME_DEFAULT_VALUE,
        OnboardingCandidateInfo.EXTERNAL_NAME_EN_DEBUG,
        OnboardingCandidateInfo.EXTERNAL_NAME_EN_GB,
        OnboardingCandidateInfo.EXTERNAL_NAME_EN_US,
        OnboardingCandidateInfo.EXTERNAL_NAME_ES_ES,
        OnboardingCandidateInfo.EXTERNAL_NAME_ES_MX,
        OnboardingCandidateInfo.EXTERNAL_NAME_FR_CA,
        OnboardingCandidateInfo.EXTERNAL_NAME_FR_FR,
        OnboardingCandidateInfo.EXTERNAL_NAME_IT_IT,
        OnboardingCandidateInfo.EXTERNAL_NAME_LOCALIZED,
        OnboardingCandidateInfo.EXTERNAL_NAME_NL_NL,
        OnboardingCandidateInfo.EXTERNAL_NAME_PT_BR,
        OnboardingCandidateInfo.EXTERNAL_NAME_ZH_CN,
        OnboardingCandidateInfo.F_NAME,
        OnboardingCandidateInfo.FAILED_SEB_EVENTS_OCCURED,
        OnboardingCandidateInfo.FROM_EXTERNAL_ATS,
        OnboardingCandidateInfo.GLOBAL_ASSIGNMENT,
        OnboardingCandidateInfo.HIRE_DATE,
        OnboardingCandidateInfo.HIRED,
        OnboardingCandidateInfo.HR_MANAGER_ID,
        OnboardingCandidateInfo.INTERNAL_HIRE,
        OnboardingCandidateInfo.JOB_REQ_ID,
        OnboardingCandidateInfo.JOB_TITLE,
        OnboardingCandidateInfo.KMS_USER_ID,
        OnboardingCandidateInfo.L_NAME,
        OnboardingCandidateInfo.LAST_MODIFIED_BY,
        OnboardingCandidateInfo.LAST_MODIFIED_DATE_TIME,
        OnboardingCandidateInfo.LOCATION,
        OnboardingCandidateInfo.MANAGER_ID,
        OnboardingCandidateInfo.MDF_SYSTEM_RECORD_STATUS,
        OnboardingCandidateInfo.ONBOARDING_LOCALE,
        OnboardingCandidateInfo.PAY_GRADE,
        OnboardingCandidateInfo.PRIMARY_EMPLOYMENT,
        OnboardingCandidateInfo.PROCESSOR_ID,
        OnboardingCandidateInfo.READY_TO_HIRE,
        OnboardingCandidateInfo.USER_ID,
        OnboardingCandidateInfo.WORK_COUNTRY,
        OnboardingCandidateInfo.CONCURRENT_USER_NAV,
        OnboardingCandidateInfo.CREATED_BY_NAV,
        OnboardingCandidateInfo.EXTERNAL_NAME_TRANSLATION_TEXT_NAV,
        OnboardingCandidateInfo.HR_MANAGER_ID_NAV,
        OnboardingCandidateInfo.LAST_MODIFIED_BY_NAV,
        OnboardingCandidateInfo.MANAGER_ID_NAV,
        OnboardingCandidateInfo.MDF_SYSTEM_RECORD_STATUS_NAV,
        OnboardingCandidateInfo.PROCESSOR_ID_NAV,
        OnboardingCandidateInfo.USER_ID_NAV,
        OnboardingCandidateInfo.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    OnboardingCandidateInfo.ALL_FIELDS = new core_1.AllFields('*', OnboardingCandidateInfo);
    /**
     * All key fields of the OnboardingCandidateInfo entity.
     */
    OnboardingCandidateInfo._keyFields = [OnboardingCandidateInfo.APPLICANT_ID];
    /**
     * Mapping of all key field names to the respective static field property OnboardingCandidateInfo.
     */
    OnboardingCandidateInfo._keys = OnboardingCandidateInfo._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(OnboardingCandidateInfo = exports.OnboardingCandidateInfo || (exports.OnboardingCandidateInfo = {}));
exports.OnboardingCandidateInfo = OnboardingCandidateInfo;
//# sourceMappingURL=OnboardingCandidateInfo.js.map