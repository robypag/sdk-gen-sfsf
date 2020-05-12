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
var FormCompetencySectionRequestBuilder_1 = require("./FormCompetencySectionRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FormCompetencySection" of service "SFOData".
 */
var FormCompetencySection = /** @class */ (function (_super) {
    __extends(FormCompetencySection, _super);
    function FormCompetencySection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FormCompetencySection`.
     * @returns A builder that constructs instances of entity type `FormCompetencySection`.
     */
    FormCompetencySection.builder = function () {
        return core_1.Entity.entityBuilder(FormCompetencySection);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FormCompetencySection` entity type.
     * @returns A `FormCompetencySection` request builder.
     */
    FormCompetencySection.requestBuilder = function () {
        return new FormCompetencySectionRequestBuilder_1.FormCompetencySectionRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormCompetencySection`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormCompetencySection`.
     */
    FormCompetencySection.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FormCompetencySection);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FormCompetencySection.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FormCompetencySection.
     */
    FormCompetencySection._entityName = 'FormCompetencySection';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormCompetencySection.
     */
    FormCompetencySection._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FormCompetencySection._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FormCompetencySection;
}(core_1.Entity));
exports.FormCompetencySection = FormCompetencySection;
var FormCompetency_1 = require("./FormCompetency");
var FormUserRatingComment_1 = require("./FormUserRatingComment");
var FormSectionConfiguration_1 = require("./FormSectionConfiguration");
(function (FormCompetencySection) {
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCompetencySection.FORM_CONTENT_ID = new core_1.BigNumberField('formContentId', FormCompetencySection, 'Edm.Int64');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCompetencySection.FORM_DATA_ID = new core_1.BigNumberField('formDataId', FormCompetencySection, 'Edm.Int64');
    /**
     * Static representation of the [[sectionDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCompetencySection.SECTION_DESCRIPTION = new core_1.StringField('sectionDescription', FormCompetencySection, 'Edm.String');
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCompetencySection.SECTION_INDEX = new core_1.NumberField('sectionIndex', FormCompetencySection, 'Edm.Int32');
    /**
     * Static representation of the [[sectionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCompetencySection.SECTION_NAME = new core_1.StringField('sectionName', FormCompetencySection, 'Edm.String');
    /**
     * Static representation of the [[sectionWeight]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCompetencySection.SECTION_WEIGHT = new core_1.StringField('sectionWeight', FormCompetencySection, 'Edm.String');
    /**
     * Static representation of the [[sectionWeightKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCompetencySection.SECTION_WEIGHT_KEY = new core_1.StringField('sectionWeightKey', FormCompetencySection, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[competencies]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCompetencySection.COMPETENCIES = new core_1.Link('competencies', FormCompetencySection, FormCompetency_1.FormCompetency);
    /**
     * Static representation of the one-to-many navigation property [[othersRatingComment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCompetencySection.OTHERS_RATING_COMMENT = new core_1.Link('othersRatingComment', FormCompetencySection, FormUserRatingComment_1.FormUserRatingComment);
    /**
     * Static representation of the one-to-one navigation property [[sectionConfiguration]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCompetencySection.SECTION_CONFIGURATION = new core_1.OneToOneLink('sectionConfiguration', FormCompetencySection, FormSectionConfiguration_1.FormSectionConfiguration);
    /**
     * Static representation of the one-to-one navigation property [[selfRatingComment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCompetencySection.SELF_RATING_COMMENT = new core_1.OneToOneLink('selfRatingComment', FormCompetencySection, FormUserRatingComment_1.FormUserRatingComment);
    /**
     * All fields of the FormCompetencySection entity.
     */
    FormCompetencySection._allFields = [
        FormCompetencySection.FORM_CONTENT_ID,
        FormCompetencySection.FORM_DATA_ID,
        FormCompetencySection.SECTION_DESCRIPTION,
        FormCompetencySection.SECTION_INDEX,
        FormCompetencySection.SECTION_NAME,
        FormCompetencySection.SECTION_WEIGHT,
        FormCompetencySection.SECTION_WEIGHT_KEY,
        FormCompetencySection.COMPETENCIES,
        FormCompetencySection.OTHERS_RATING_COMMENT,
        FormCompetencySection.SECTION_CONFIGURATION,
        FormCompetencySection.SELF_RATING_COMMENT
    ];
    /**
     * All fields selector.
     */
    FormCompetencySection.ALL_FIELDS = new core_1.AllFields('*', FormCompetencySection);
    /**
     * All key fields of the FormCompetencySection entity.
     */
    FormCompetencySection._keyFields = [FormCompetencySection.FORM_CONTENT_ID, FormCompetencySection.FORM_DATA_ID, FormCompetencySection.SECTION_INDEX];
    /**
     * Mapping of all key field names to the respective static field property FormCompetencySection.
     */
    FormCompetencySection._keys = FormCompetencySection._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FormCompetencySection = exports.FormCompetencySection || (exports.FormCompetencySection = {}));
exports.FormCompetencySection = FormCompetencySection;
//# sourceMappingURL=FormCompetencySection.js.map