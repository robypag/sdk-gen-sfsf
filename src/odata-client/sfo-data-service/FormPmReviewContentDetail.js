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
var FormPmReviewContentDetailRequestBuilder_1 = require("./FormPmReviewContentDetailRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FormPMReviewContentDetail" of service "SFOData".
 */
var FormPmReviewContentDetail = /** @class */ (function (_super) {
    __extends(FormPmReviewContentDetail, _super);
    function FormPmReviewContentDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FormPmReviewContentDetail`.
     * @returns A builder that constructs instances of entity type `FormPmReviewContentDetail`.
     */
    FormPmReviewContentDetail.builder = function () {
        return core_1.Entity.entityBuilder(FormPmReviewContentDetail);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FormPmReviewContentDetail` entity type.
     * @returns A `FormPmReviewContentDetail` request builder.
     */
    FormPmReviewContentDetail.requestBuilder = function () {
        return new FormPmReviewContentDetailRequestBuilder_1.FormPmReviewContentDetailRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormPmReviewContentDetail`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormPmReviewContentDetail`.
     */
    FormPmReviewContentDetail.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FormPmReviewContentDetail);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FormPmReviewContentDetail.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FormPmReviewContentDetail.
     */
    FormPmReviewContentDetail._entityName = 'FormPMReviewContentDetail';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormPmReviewContentDetail.
     */
    FormPmReviewContentDetail._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FormPmReviewContentDetail._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FormPmReviewContentDetail;
}(core_1.Entity));
exports.FormPmReviewContentDetail = FormPmReviewContentDetail;
var FormCompetencySection_1 = require("./FormCompetencySection");
var FormCustomSection_1 = require("./FormCustomSection");
var FormIntroductionSection_1 = require("./FormIntroductionSection");
var FormObjCompSummarySection_1 = require("./FormObjCompSummarySection");
var FormObjectiveSection_1 = require("./FormObjectiveSection");
var FormPerfPotSummarySection_1 = require("./FormPerfPotSummarySection");
var FormSignatureSection_1 = require("./FormSignatureSection");
var FormSummarySection_1 = require("./FormSummarySection");
var FormUserInformationSection_1 = require("./FormUserInformationSection");
(function (FormPmReviewContentDetail) {
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormPmReviewContentDetail.FORM_CONTENT_ID = new core_1.BigNumberField('formContentId', FormPmReviewContentDetail, 'Edm.Int64');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormPmReviewContentDetail.FORM_DATA_ID = new core_1.BigNumberField('formDataId', FormPmReviewContentDetail, 'Edm.Int64');
    /**
     * Static representation of the one-to-many navigation property [[competencySections]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormPmReviewContentDetail.COMPETENCY_SECTIONS = new core_1.Link('competencySections', FormPmReviewContentDetail, FormCompetencySection_1.FormCompetencySection);
    /**
     * Static representation of the one-to-many navigation property [[customSections]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormPmReviewContentDetail.CUSTOM_SECTIONS = new core_1.Link('customSections', FormPmReviewContentDetail, FormCustomSection_1.FormCustomSection);
    /**
     * Static representation of the one-to-one navigation property [[introductionSection]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormPmReviewContentDetail.INTRODUCTION_SECTION = new core_1.OneToOneLink('introductionSection', FormPmReviewContentDetail, FormIntroductionSection_1.FormIntroductionSection);
    /**
     * Static representation of the one-to-one navigation property [[objCompSummarySection]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormPmReviewContentDetail.OBJ_COMP_SUMMARY_SECTION = new core_1.OneToOneLink('objCompSummarySection', FormPmReviewContentDetail, FormObjCompSummarySection_1.FormObjCompSummarySection);
    /**
     * Static representation of the one-to-many navigation property [[objectiveSections]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormPmReviewContentDetail.OBJECTIVE_SECTIONS = new core_1.Link('objectiveSections', FormPmReviewContentDetail, FormObjectiveSection_1.FormObjectiveSection);
    /**
     * Static representation of the one-to-one navigation property [[perfPotSummarySection]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormPmReviewContentDetail.PERF_POT_SUMMARY_SECTION = new core_1.OneToOneLink('perfPotSummarySection', FormPmReviewContentDetail, FormPerfPotSummarySection_1.FormPerfPotSummarySection);
    /**
     * Static representation of the one-to-one navigation property [[signatureSection]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormPmReviewContentDetail.SIGNATURE_SECTION = new core_1.OneToOneLink('signatureSection', FormPmReviewContentDetail, FormSignatureSection_1.FormSignatureSection);
    /**
     * Static representation of the one-to-one navigation property [[summarySection]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormPmReviewContentDetail.SUMMARY_SECTION = new core_1.OneToOneLink('summarySection', FormPmReviewContentDetail, FormSummarySection_1.FormSummarySection);
    /**
     * Static representation of the one-to-one navigation property [[userInformationSection]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormPmReviewContentDetail.USER_INFORMATION_SECTION = new core_1.OneToOneLink('userInformationSection', FormPmReviewContentDetail, FormUserInformationSection_1.FormUserInformationSection);
    /**
     * All fields of the FormPmReviewContentDetail entity.
     */
    FormPmReviewContentDetail._allFields = [
        FormPmReviewContentDetail.FORM_CONTENT_ID,
        FormPmReviewContentDetail.FORM_DATA_ID,
        FormPmReviewContentDetail.COMPETENCY_SECTIONS,
        FormPmReviewContentDetail.CUSTOM_SECTIONS,
        FormPmReviewContentDetail.INTRODUCTION_SECTION,
        FormPmReviewContentDetail.OBJ_COMP_SUMMARY_SECTION,
        FormPmReviewContentDetail.OBJECTIVE_SECTIONS,
        FormPmReviewContentDetail.PERF_POT_SUMMARY_SECTION,
        FormPmReviewContentDetail.SIGNATURE_SECTION,
        FormPmReviewContentDetail.SUMMARY_SECTION,
        FormPmReviewContentDetail.USER_INFORMATION_SECTION
    ];
    /**
     * All fields selector.
     */
    FormPmReviewContentDetail.ALL_FIELDS = new core_1.AllFields('*', FormPmReviewContentDetail);
    /**
     * All key fields of the FormPmReviewContentDetail entity.
     */
    FormPmReviewContentDetail._keyFields = [FormPmReviewContentDetail.FORM_CONTENT_ID, FormPmReviewContentDetail.FORM_DATA_ID];
    /**
     * Mapping of all key field names to the respective static field property FormPmReviewContentDetail.
     */
    FormPmReviewContentDetail._keys = FormPmReviewContentDetail._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FormPmReviewContentDetail = exports.FormPmReviewContentDetail || (exports.FormPmReviewContentDetail = {}));
exports.FormPmReviewContentDetail = FormPmReviewContentDetail;
//# sourceMappingURL=FormPmReviewContentDetail.js.map