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
var Form360RaterRequestBuilder_1 = require("./Form360RaterRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Form360Rater" of service "SFOData".
 */
var Form360Rater = /** @class */ (function (_super) {
    __extends(Form360Rater, _super);
    function Form360Rater() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Form360Rater`.
     * @returns A builder that constructs instances of entity type `Form360Rater`.
     */
    Form360Rater.builder = function () {
        return core_1.Entity.entityBuilder(Form360Rater);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Form360Rater` entity type.
     * @returns A `Form360Rater` request builder.
     */
    Form360Rater.requestBuilder = function () {
        return new Form360RaterRequestBuilder_1.Form360RaterRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Form360Rater`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Form360Rater`.
     */
    Form360Rater.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Form360Rater);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Form360Rater.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Form360Rater.
     */
    Form360Rater._entityName = 'Form360Rater';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Form360Rater.
     */
    Form360Rater._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Form360Rater._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Form360Rater;
}(core_1.Entity));
exports.Form360Rater = Form360Rater;
var FormCompetencySection_1 = require("./FormCompetencySection");
var FormCustomSection_1 = require("./FormCustomSection");
var FormObjectiveSection_1 = require("./FormObjectiveSection");
var User_1 = require("./User");
var FormSummarySection_1 = require("./FormSummarySection");
(function (Form360Rater) {
    /**
     * Static representation of the [[category]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360Rater.CATEGORY = new core_1.StringField('category', Form360Rater, 'Edm.String');
    /**
     * Static representation of the [[cellPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360Rater.CELL_PHONE = new core_1.StringField('cellPhone', Form360Rater, 'Edm.String');
    /**
     * Static representation of the [[company]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360Rater.COMPANY = new core_1.StringField('company', Form360Rater, 'Edm.String');
    /**
     * Static representation of the [[department]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360Rater.DEPARTMENT = new core_1.StringField('department', Form360Rater, 'Edm.String');
    /**
     * Static representation of the [[division]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360Rater.DIVISION = new core_1.StringField('division', Form360Rater, 'Edm.String');
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360Rater.FORM_CONTENT_ID = new core_1.BigNumberField('formContentId', Form360Rater, 'Edm.Int64');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360Rater.FORM_DATA_ID = new core_1.BigNumberField('formDataId', Form360Rater, 'Edm.Int64');
    /**
     * Static representation of the [[internalOrExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360Rater.INTERNAL_OR_EXTERNAL = new core_1.StringField('internalOrExternal', Form360Rater, 'Edm.String');
    /**
     * Static representation of the [[jobCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360Rater.JOB_CODE = new core_1.StringField('jobCode', Form360Rater, 'Edm.String');
    /**
     * Static representation of the [[jobTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360Rater.JOB_TITLE = new core_1.StringField('jobTitle', Form360Rater, 'Edm.String');
    /**
     * Static representation of the [[mail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360Rater.MAIL = new core_1.StringField('mail', Form360Rater, 'Edm.String');
    /**
     * Static representation of the [[manager]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360Rater.MANAGER = new core_1.StringField('manager', Form360Rater, 'Edm.String');
    /**
     * Static representation of the [[participantId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360Rater.PARTICIPANT_ID = new core_1.StringField('participantID', Form360Rater, 'Edm.String');
    /**
     * Static representation of the [[participantName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360Rater.PARTICIPANT_NAME = new core_1.StringField('participantName', Form360Rater, 'Edm.String');
    /**
     * Static representation of the [[participantRating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360Rater.PARTICIPANT_RATING = new core_1.StringField('participantRating', Form360Rater, 'Edm.String');
    /**
     * Static representation of the [[participantRatingStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360Rater.PARTICIPANT_RATING_STATUS = new core_1.StringField('participantRatingStatus', Form360Rater, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[competencySections]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360Rater.COMPETENCY_SECTIONS = new core_1.Link('competencySections', Form360Rater, FormCompetencySection_1.FormCompetencySection);
    /**
     * Static representation of the one-to-many navigation property [[customSections]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360Rater.CUSTOM_SECTIONS = new core_1.Link('customSections', Form360Rater, FormCustomSection_1.FormCustomSection);
    /**
     * Static representation of the one-to-many navigation property [[objectiveSections]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360Rater.OBJECTIVE_SECTIONS = new core_1.Link('objectiveSections', Form360Rater, FormObjectiveSection_1.FormObjectiveSection);
    /**
     * Static representation of the one-to-one navigation property [[participantUser]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360Rater.PARTICIPANT_USER = new core_1.OneToOneLink('participantUser', Form360Rater, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[summarySection]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360Rater.SUMMARY_SECTION = new core_1.OneToOneLink('summarySection', Form360Rater, FormSummarySection_1.FormSummarySection);
    /**
     * All fields of the Form360Rater entity.
     */
    Form360Rater._allFields = [
        Form360Rater.CATEGORY,
        Form360Rater.CELL_PHONE,
        Form360Rater.COMPANY,
        Form360Rater.DEPARTMENT,
        Form360Rater.DIVISION,
        Form360Rater.FORM_CONTENT_ID,
        Form360Rater.FORM_DATA_ID,
        Form360Rater.INTERNAL_OR_EXTERNAL,
        Form360Rater.JOB_CODE,
        Form360Rater.JOB_TITLE,
        Form360Rater.MAIL,
        Form360Rater.MANAGER,
        Form360Rater.PARTICIPANT_ID,
        Form360Rater.PARTICIPANT_NAME,
        Form360Rater.PARTICIPANT_RATING,
        Form360Rater.PARTICIPANT_RATING_STATUS,
        Form360Rater.COMPETENCY_SECTIONS,
        Form360Rater.CUSTOM_SECTIONS,
        Form360Rater.OBJECTIVE_SECTIONS,
        Form360Rater.PARTICIPANT_USER,
        Form360Rater.SUMMARY_SECTION
    ];
    /**
     * All fields selector.
     */
    Form360Rater.ALL_FIELDS = new core_1.AllFields('*', Form360Rater);
    /**
     * All key fields of the Form360Rater entity.
     */
    Form360Rater._keyFields = [Form360Rater.FORM_CONTENT_ID, Form360Rater.FORM_DATA_ID];
    /**
     * Mapping of all key field names to the respective static field property Form360Rater.
     */
    Form360Rater._keys = Form360Rater._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Form360Rater = exports.Form360Rater || (exports.Form360Rater = {}));
exports.Form360Rater = Form360Rater;
//# sourceMappingURL=Form360Rater.js.map