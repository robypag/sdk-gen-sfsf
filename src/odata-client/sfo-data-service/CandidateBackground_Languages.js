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
var CandidateBackground_LanguagesRequestBuilder_1 = require("./CandidateBackground_LanguagesRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "CandidateBackground_Languages" of service "SFOData".
 */
var CandidateBackground_Languages = /** @class */ (function (_super) {
    __extends(CandidateBackground_Languages, _super);
    function CandidateBackground_Languages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `CandidateBackground_Languages`.
     * @returns A builder that constructs instances of entity type `CandidateBackground_Languages`.
     */
    CandidateBackground_Languages.builder = function () {
        return core_1.Entity.entityBuilder(CandidateBackground_Languages);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CandidateBackground_Languages` entity type.
     * @returns A `CandidateBackground_Languages` request builder.
     */
    CandidateBackground_Languages.requestBuilder = function () {
        return new CandidateBackground_LanguagesRequestBuilder_1.CandidateBackground_LanguagesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CandidateBackground_Languages`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CandidateBackground_Languages`.
     */
    CandidateBackground_Languages.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, CandidateBackground_Languages);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CandidateBackground_Languages.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CandidateBackground_Languages.
     */
    CandidateBackground_Languages._entityName = 'CandidateBackground_Languages';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CandidateBackground_Languages.
     */
    CandidateBackground_Languages._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    CandidateBackground_Languages._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return CandidateBackground_Languages;
}(core_1.Entity));
exports.CandidateBackground_Languages = CandidateBackground_Languages;
var Candidate_1 = require("./Candidate");
var PicklistOption_1 = require("./PicklistOption");
(function (CandidateBackground_Languages) {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Languages.BACKGROUND_ELEMENT_ID = new core_1.BigNumberField('backgroundElementId', CandidateBackground_Languages, 'Edm.Int64');
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Languages.BG_ORDER_POS = new core_1.BigNumberField('bgOrderPos', CandidateBackground_Languages, 'Edm.Int64');
    /**
     * Static representation of the [[candidateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Languages.CANDIDATE_ID = new core_1.BigNumberField('candidateId', CandidateBackground_Languages, 'Edm.Int64');
    /**
     * Static representation of the [[language]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Languages.LANGUAGE = new core_1.StringField('language', CandidateBackground_Languages, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Languages.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', CandidateBackground_Languages, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[readingProf]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Languages.READING_PROF = new core_1.StringField('readingProf', CandidateBackground_Languages, 'Edm.String');
    /**
     * Static representation of the [[speakingProf]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Languages.SPEAKING_PROF = new core_1.StringField('speakingProf', CandidateBackground_Languages, 'Edm.String');
    /**
     * Static representation of the [[variant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Languages.VARIANT = new core_1.StringField('variant', CandidateBackground_Languages, 'Edm.String');
    /**
     * Static representation of the [[writingProf]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Languages.WRITING_PROF = new core_1.StringField('writingProf', CandidateBackground_Languages, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[candidate]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Languages.CANDIDATE = new core_1.OneToOneLink('candidate', CandidateBackground_Languages, Candidate_1.Candidate);
    /**
     * Static representation of the one-to-one navigation property [[languageNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Languages.LANGUAGE_NAV = new core_1.OneToOneLink('languageNav', CandidateBackground_Languages, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[readingProfNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Languages.READING_PROF_NAV = new core_1.OneToOneLink('readingProfNav', CandidateBackground_Languages, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[speakingProfNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Languages.SPEAKING_PROF_NAV = new core_1.OneToOneLink('speakingProfNav', CandidateBackground_Languages, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[variantNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Languages.VARIANT_NAV = new core_1.OneToOneLink('variantNav', CandidateBackground_Languages, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[writingProfNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Languages.WRITING_PROF_NAV = new core_1.OneToOneLink('writingProfNav', CandidateBackground_Languages, PicklistOption_1.PicklistOption);
    /**
     * All fields of the CandidateBackground_Languages entity.
     */
    CandidateBackground_Languages._allFields = [
        CandidateBackground_Languages.BACKGROUND_ELEMENT_ID,
        CandidateBackground_Languages.BG_ORDER_POS,
        CandidateBackground_Languages.CANDIDATE_ID,
        CandidateBackground_Languages.LANGUAGE,
        CandidateBackground_Languages.LAST_MODIFIED_DATE_TIME,
        CandidateBackground_Languages.READING_PROF,
        CandidateBackground_Languages.SPEAKING_PROF,
        CandidateBackground_Languages.VARIANT,
        CandidateBackground_Languages.WRITING_PROF,
        CandidateBackground_Languages.CANDIDATE,
        CandidateBackground_Languages.LANGUAGE_NAV,
        CandidateBackground_Languages.READING_PROF_NAV,
        CandidateBackground_Languages.SPEAKING_PROF_NAV,
        CandidateBackground_Languages.VARIANT_NAV,
        CandidateBackground_Languages.WRITING_PROF_NAV
    ];
    /**
     * All fields selector.
     */
    CandidateBackground_Languages.ALL_FIELDS = new core_1.AllFields('*', CandidateBackground_Languages);
    /**
     * All key fields of the CandidateBackground_Languages entity.
     */
    CandidateBackground_Languages._keyFields = [CandidateBackground_Languages.BACKGROUND_ELEMENT_ID];
    /**
     * Mapping of all key field names to the respective static field property CandidateBackground_Languages.
     */
    CandidateBackground_Languages._keys = CandidateBackground_Languages._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CandidateBackground_Languages = exports.CandidateBackground_Languages || (exports.CandidateBackground_Languages = {}));
exports.CandidateBackground_Languages = CandidateBackground_Languages;
//# sourceMappingURL=CandidateBackground_Languages.js.map