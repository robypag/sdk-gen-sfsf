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
var FormObjectiveSectionRequestBuilder_1 = require("./FormObjectiveSectionRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FormObjectiveSection" of service "SFOData".
 */
var FormObjectiveSection = /** @class */ (function (_super) {
    __extends(FormObjectiveSection, _super);
    function FormObjectiveSection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FormObjectiveSection`.
     * @returns A builder that constructs instances of entity type `FormObjectiveSection`.
     */
    FormObjectiveSection.builder = function () {
        return core_1.Entity.entityBuilder(FormObjectiveSection);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FormObjectiveSection` entity type.
     * @returns A `FormObjectiveSection` request builder.
     */
    FormObjectiveSection.requestBuilder = function () {
        return new FormObjectiveSectionRequestBuilder_1.FormObjectiveSectionRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormObjectiveSection`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormObjectiveSection`.
     */
    FormObjectiveSection.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FormObjectiveSection);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FormObjectiveSection.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FormObjectiveSection.
     */
    FormObjectiveSection._entityName = 'FormObjectiveSection';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormObjectiveSection.
     */
    FormObjectiveSection._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FormObjectiveSection._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FormObjectiveSection;
}(core_1.Entity));
exports.FormObjectiveSection = FormObjectiveSection;
var FormObjective_1 = require("./FormObjective");
var FormUserRatingComment_1 = require("./FormUserRatingComment");
var FormSectionConfiguration_1 = require("./FormSectionConfiguration");
(function (FormObjectiveSection) {
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveSection.FORM_CONTENT_ID = new core_1.BigNumberField('formContentId', FormObjectiveSection, 'Edm.Int64');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveSection.FORM_DATA_ID = new core_1.BigNumberField('formDataId', FormObjectiveSection, 'Edm.Int64');
    /**
     * Static representation of the [[objPlanId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveSection.OBJ_PLAN_ID = new core_1.BigNumberField('objPlanId', FormObjectiveSection, 'Edm.Int64');
    /**
     * Static representation of the [[objPlanType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveSection.OBJ_PLAN_TYPE = new core_1.StringField('objPlanType', FormObjectiveSection, 'Edm.String');
    /**
     * Static representation of the [[sectionDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveSection.SECTION_DESCRIPTION = new core_1.StringField('sectionDescription', FormObjectiveSection, 'Edm.String');
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveSection.SECTION_INDEX = new core_1.NumberField('sectionIndex', FormObjectiveSection, 'Edm.Int32');
    /**
     * Static representation of the [[sectionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveSection.SECTION_NAME = new core_1.StringField('sectionName', FormObjectiveSection, 'Edm.String');
    /**
     * Static representation of the [[sectionWeight]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveSection.SECTION_WEIGHT = new core_1.StringField('sectionWeight', FormObjectiveSection, 'Edm.String');
    /**
     * Static representation of the [[sectionWeightKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveSection.SECTION_WEIGHT_KEY = new core_1.StringField('sectionWeightKey', FormObjectiveSection, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[objectives]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveSection.OBJECTIVES = new core_1.Link('objectives', FormObjectiveSection, FormObjective_1.FormObjective);
    /**
     * Static representation of the one-to-many navigation property [[othersRatingComment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveSection.OTHERS_RATING_COMMENT = new core_1.Link('othersRatingComment', FormObjectiveSection, FormUserRatingComment_1.FormUserRatingComment);
    /**
     * Static representation of the one-to-one navigation property [[sectionConfiguration]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveSection.SECTION_CONFIGURATION = new core_1.OneToOneLink('sectionConfiguration', FormObjectiveSection, FormSectionConfiguration_1.FormSectionConfiguration);
    /**
     * Static representation of the one-to-one navigation property [[selfRatingComment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveSection.SELF_RATING_COMMENT = new core_1.OneToOneLink('selfRatingComment', FormObjectiveSection, FormUserRatingComment_1.FormUserRatingComment);
    /**
     * All fields of the FormObjectiveSection entity.
     */
    FormObjectiveSection._allFields = [
        FormObjectiveSection.FORM_CONTENT_ID,
        FormObjectiveSection.FORM_DATA_ID,
        FormObjectiveSection.OBJ_PLAN_ID,
        FormObjectiveSection.OBJ_PLAN_TYPE,
        FormObjectiveSection.SECTION_DESCRIPTION,
        FormObjectiveSection.SECTION_INDEX,
        FormObjectiveSection.SECTION_NAME,
        FormObjectiveSection.SECTION_WEIGHT,
        FormObjectiveSection.SECTION_WEIGHT_KEY,
        FormObjectiveSection.OBJECTIVES,
        FormObjectiveSection.OTHERS_RATING_COMMENT,
        FormObjectiveSection.SECTION_CONFIGURATION,
        FormObjectiveSection.SELF_RATING_COMMENT
    ];
    /**
     * All fields selector.
     */
    FormObjectiveSection.ALL_FIELDS = new core_1.AllFields('*', FormObjectiveSection);
    /**
     * All key fields of the FormObjectiveSection entity.
     */
    FormObjectiveSection._keyFields = [FormObjectiveSection.FORM_CONTENT_ID, FormObjectiveSection.FORM_DATA_ID, FormObjectiveSection.SECTION_INDEX];
    /**
     * Mapping of all key field names to the respective static field property FormObjectiveSection.
     */
    FormObjectiveSection._keys = FormObjectiveSection._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FormObjectiveSection = exports.FormObjectiveSection || (exports.FormObjectiveSection = {}));
exports.FormObjectiveSection = FormObjectiveSection;
//# sourceMappingURL=FormObjectiveSection.js.map