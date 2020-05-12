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
var CandidateLightRequestBuilder_1 = require("./CandidateLightRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "CandidateLight" of service "SFOData".
 */
var CandidateLight = /** @class */ (function (_super) {
    __extends(CandidateLight, _super);
    function CandidateLight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `CandidateLight`.
     * @returns A builder that constructs instances of entity type `CandidateLight`.
     */
    CandidateLight.builder = function () {
        return core_1.Entity.entityBuilder(CandidateLight);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CandidateLight` entity type.
     * @returns A `CandidateLight` request builder.
     */
    CandidateLight.requestBuilder = function () {
        return new CandidateLightRequestBuilder_1.CandidateLightRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CandidateLight`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CandidateLight`.
     */
    CandidateLight.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, CandidateLight);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CandidateLight.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CandidateLight.
     */
    CandidateLight._entityName = 'CandidateLight';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CandidateLight.
     */
    CandidateLight._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    CandidateLight._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return CandidateLight;
}(core_1.Entity));
exports.CandidateLight = CandidateLight;
var Attachment_1 = require("./Attachment");
var CandidateProfileConversionInfo_1 = require("./CandidateProfileConversionInfo");
var CandidateProfileExtension_1 = require("./CandidateProfileExtension");
var CandidateComments_1 = require("./CandidateComments");
var CandidateBackground_Education_1 = require("./CandidateBackground_Education");
var CandidateBackground_InsideWorkExperience_1 = require("./CandidateBackground_InsideWorkExperience");
var JobReqFwdCandidates_1 = require("./JobReqFwdCandidates");
var JobApplication_1 = require("./JobApplication");
var CandidateBackground_Languages_1 = require("./CandidateBackground_Languages");
var CandidateBackground_Mobility_1 = require("./CandidateBackground_Mobility");
var CandidateBackground_OutsideWorkExperience_1 = require("./CandidateBackground_OutsideWorkExperience");
var PicklistOption_1 = require("./PicklistOption");
var CandidateTags_1 = require("./CandidateTags");
(function (CandidateLight) {
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.ADDRESS = new core_1.StringField('address', CandidateLight, 'Edm.String');
    /**
     * Static representation of the [[agreeToPrivacyStatement]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.AGREE_TO_PRIVACY_STATEMENT = new core_1.StringField('agreeToPrivacyStatement', CandidateLight, 'Edm.String');
    /**
     * Static representation of the [[anonymized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.ANONYMIZED = new core_1.StringField('anonymized', CandidateLight, 'Edm.String');
    /**
     * Static representation of the [[anonymizedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.ANONYMIZED_DATE_TIME = new core_1.DateField('anonymizedDateTime', CandidateLight, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[businessPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.BUSINESS_PHONE = new core_1.StringField('businessPhone', CandidateLight, 'Edm.String');
    /**
     * Static representation of the [[candidateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.CANDIDATE_ID = new core_1.BigNumberField('candidateId', CandidateLight, 'Edm.Int64');
    /**
     * Static representation of the [[candidateLocale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.CANDIDATE_LOCALE = new core_1.StringField('candidateLocale', CandidateLight, 'Edm.String');
    /**
     * Static representation of the [[cellPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.CELL_PHONE = new core_1.StringField('cellPhone', CandidateLight, 'Edm.String');
    /**
     * Static representation of the [[city]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.CITY = new core_1.StringField('city', CandidateLight, 'Edm.String');
    /**
     * Static representation of the [[consentToMarketing]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.CONSENT_TO_MARKETING = new core_1.StringField('consentToMarketing', CandidateLight, 'Edm.String');
    /**
     * Static representation of the [[contactEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.CONTACT_EMAIL = new core_1.StringField('contactEmail', CandidateLight, 'Edm.String');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.COUNTRY = new core_1.StringField('country', CandidateLight, 'Edm.String');
    /**
     * Static representation of the [[creationDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.CREATION_DATE_TIME = new core_1.DateField('creationDateTime', CandidateLight, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[currentCompany]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.CURRENT_COMPANY = new core_1.StringField('currentCompany', CandidateLight, 'Edm.String');
    /**
     * Static representation of the [[currentTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.CURRENT_TITLE = new core_1.StringField('currentTitle', CandidateLight, 'Edm.String');
    /**
     * Static representation of the [[dataPrivacyId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.DATA_PRIVACY_ID = new core_1.BigNumberField('dataPrivacyId', CandidateLight, 'Edm.Int64');
    /**
     * Static representation of the [[dateofAvailability]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.DATEOF_AVAILABILITY = new core_1.DateField('dateofAvailability', CandidateLight, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCandidate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.EXTERNAL_CANDIDATE = new core_1.BooleanField('externalCandidate', CandidateLight, 'Edm.Boolean');
    /**
     * Static representation of the [[firstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.FIRST_NAME = new core_1.StringField('firstName', CandidateLight, 'Edm.String');
    /**
     * Static representation of the [[homePhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.HOME_PHONE = new core_1.StringField('homePhone', CandidateLight, 'Edm.String');
    /**
     * Static representation of the [[lastLoginDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.LAST_LOGIN_DATE_TIME = new core_1.DateField('lastLoginDateTime', CandidateLight, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', CandidateLight, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.LAST_NAME = new core_1.StringField('lastName', CandidateLight, 'Edm.String');
    /**
     * Static representation of the [[middleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.MIDDLE_NAME = new core_1.StringField('middleName', CandidateLight, 'Edm.String');
    /**
     * Static representation of the [[partnerMemberId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.PARTNER_MEMBER_ID = new core_1.StringField('partnerMemberId', CandidateLight, 'Edm.String');
    /**
     * Static representation of the [[partnerSource]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.PARTNER_SOURCE = new core_1.BigNumberField('partnerSource', CandidateLight, 'Edm.Int64');
    /**
     * Static representation of the [[password]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.PASSWORD = new core_1.StringField('password', CandidateLight, 'Edm.String');
    /**
     * Static representation of the [[primaryEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.PRIMARY_EMAIL = new core_1.StringField('primaryEmail', CandidateLight, 'Edm.String');
    /**
     * Static representation of the [[privacyAcceptDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.PRIVACY_ACCEPT_DATE_TIME = new core_1.DateField('privacyAcceptDateTime', CandidateLight, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[publicIntranet]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.PUBLIC_INTRANET = new core_1.BooleanField('publicIntranet', CandidateLight, 'Edm.Boolean');
    /**
     * Static representation of the [[sendCandWelcomeEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.SEND_CAND_WELCOME_EMAIL = new core_1.StringField('sendCandWelcomeEmail', CandidateLight, 'Edm.String');
    /**
     * Static representation of the [[shareProfile]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.SHARE_PROFILE = new core_1.StringField('shareProfile', CandidateLight, 'Edm.String');
    /**
     * Static representation of the [[usersSysId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.USERS_SYS_ID = new core_1.StringField('usersSysId', CandidateLight, 'Edm.String');
    /**
     * Static representation of the [[visibilityOption]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.VISIBILITY_OPTION = new core_1.BooleanField('visibilityOption', CandidateLight, 'Edm.Boolean');
    /**
     * Static representation of the [[zip]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.ZIP = new core_1.StringField('zip', CandidateLight, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[attachment1]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.ATTACHMENT_1 = new core_1.Link('attachment1', CandidateLight, Attachment_1.Attachment);
    /**
     * Static representation of the one-to-one navigation property [[candidateProfileConversionInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.CANDIDATE_PROFILE_CONVERSION_INFO = new core_1.OneToOneLink('candidateProfileConversionInfo', CandidateLight, CandidateProfileConversionInfo_1.CandidateProfileConversionInfo);
    /**
     * Static representation of the one-to-one navigation property [[candidateProfileExtension]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.CANDIDATE_PROFILE_EXTENSION = new core_1.OneToOneLink('candidateProfileExtension', CandidateLight, CandidateProfileExtension_1.CandidateProfileExtension);
    /**
     * Static representation of the one-to-many navigation property [[comments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.COMMENTS = new core_1.Link('comments', CandidateLight, CandidateComments_1.CandidateComments);
    /**
     * Static representation of the one-to-one navigation property [[coverLetter]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.COVER_LETTER = new core_1.OneToOneLink('coverLetter', CandidateLight, Attachment_1.Attachment);
    /**
     * Static representation of the one-to-many navigation property [[education]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.EDUCATION = new core_1.Link('education', CandidateLight, CandidateBackground_Education_1.CandidateBackground_Education);
    /**
     * Static representation of the one-to-many navigation property [[insideWorkExperience]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.INSIDE_WORK_EXPERIENCE = new core_1.Link('insideWorkExperience', CandidateLight, CandidateBackground_InsideWorkExperience_1.CandidateBackground_InsideWorkExperience);
    /**
     * Static representation of the one-to-many navigation property [[jobReqFwdCandidates]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.JOB_REQ_FWD_CANDIDATES = new core_1.Link('jobReqFwdCandidates', CandidateLight, JobReqFwdCandidates_1.JobReqFwdCandidates);
    /**
     * Static representation of the one-to-many navigation property [[jobsApplied]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.JOBS_APPLIED = new core_1.Link('jobsApplied', CandidateLight, JobApplication_1.JobApplication);
    /**
     * Static representation of the one-to-many navigation property [[languages]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.LANGUAGES = new core_1.Link('languages', CandidateLight, CandidateBackground_Languages_1.CandidateBackground_Languages);
    /**
     * Static representation of the one-to-many navigation property [[mobility]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.MOBILITY = new core_1.Link('mobility', CandidateLight, CandidateBackground_Mobility_1.CandidateBackground_Mobility);
    /**
     * Static representation of the one-to-many navigation property [[outsideWorkExperience]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.OUTSIDE_WORK_EXPERIENCE = new core_1.Link('outsideWorkExperience', CandidateLight, CandidateBackground_OutsideWorkExperience_1.CandidateBackground_OutsideWorkExperience);
    /**
     * Static representation of the one-to-one navigation property [[resume]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.RESUME = new core_1.OneToOneLink('resume', CandidateLight, Attachment_1.Attachment);
    /**
     * Static representation of the one-to-many navigation property [[state]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.STATE = new core_1.Link('state', CandidateLight, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-many navigation property [[tags]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateLight.TAGS = new core_1.Link('tags', CandidateLight, CandidateTags_1.CandidateTags);
    /**
     * All fields of the CandidateLight entity.
     */
    CandidateLight._allFields = [
        CandidateLight.ADDRESS,
        CandidateLight.AGREE_TO_PRIVACY_STATEMENT,
        CandidateLight.ANONYMIZED,
        CandidateLight.ANONYMIZED_DATE_TIME,
        CandidateLight.BUSINESS_PHONE,
        CandidateLight.CANDIDATE_ID,
        CandidateLight.CANDIDATE_LOCALE,
        CandidateLight.CELL_PHONE,
        CandidateLight.CITY,
        CandidateLight.CONSENT_TO_MARKETING,
        CandidateLight.CONTACT_EMAIL,
        CandidateLight.COUNTRY,
        CandidateLight.CREATION_DATE_TIME,
        CandidateLight.CURRENT_COMPANY,
        CandidateLight.CURRENT_TITLE,
        CandidateLight.DATA_PRIVACY_ID,
        CandidateLight.DATEOF_AVAILABILITY,
        CandidateLight.EXTERNAL_CANDIDATE,
        CandidateLight.FIRST_NAME,
        CandidateLight.HOME_PHONE,
        CandidateLight.LAST_LOGIN_DATE_TIME,
        CandidateLight.LAST_MODIFIED_DATE_TIME,
        CandidateLight.LAST_NAME,
        CandidateLight.MIDDLE_NAME,
        CandidateLight.PARTNER_MEMBER_ID,
        CandidateLight.PARTNER_SOURCE,
        CandidateLight.PASSWORD,
        CandidateLight.PRIMARY_EMAIL,
        CandidateLight.PRIVACY_ACCEPT_DATE_TIME,
        CandidateLight.PUBLIC_INTRANET,
        CandidateLight.SEND_CAND_WELCOME_EMAIL,
        CandidateLight.SHARE_PROFILE,
        CandidateLight.USERS_SYS_ID,
        CandidateLight.VISIBILITY_OPTION,
        CandidateLight.ZIP,
        CandidateLight.ATTACHMENT_1,
        CandidateLight.CANDIDATE_PROFILE_CONVERSION_INFO,
        CandidateLight.CANDIDATE_PROFILE_EXTENSION,
        CandidateLight.COMMENTS,
        CandidateLight.COVER_LETTER,
        CandidateLight.EDUCATION,
        CandidateLight.INSIDE_WORK_EXPERIENCE,
        CandidateLight.JOB_REQ_FWD_CANDIDATES,
        CandidateLight.JOBS_APPLIED,
        CandidateLight.LANGUAGES,
        CandidateLight.MOBILITY,
        CandidateLight.OUTSIDE_WORK_EXPERIENCE,
        CandidateLight.RESUME,
        CandidateLight.STATE,
        CandidateLight.TAGS
    ];
    /**
     * All fields selector.
     */
    CandidateLight.ALL_FIELDS = new core_1.AllFields('*', CandidateLight);
    /**
     * All key fields of the CandidateLight entity.
     */
    CandidateLight._keyFields = [CandidateLight.CANDIDATE_ID];
    /**
     * Mapping of all key field names to the respective static field property CandidateLight.
     */
    CandidateLight._keys = CandidateLight._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CandidateLight = exports.CandidateLight || (exports.CandidateLight = {}));
exports.CandidateLight = CandidateLight;
//# sourceMappingURL=CandidateLight.js.map