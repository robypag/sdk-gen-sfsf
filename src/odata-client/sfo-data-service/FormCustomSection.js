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
var FormCustomSectionRequestBuilder_1 = require("./FormCustomSectionRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FormCustomSection" of service "SFOData".
 */
var FormCustomSection = /** @class */ (function (_super) {
    __extends(FormCustomSection, _super);
    function FormCustomSection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FormCustomSection`.
     * @returns A builder that constructs instances of entity type `FormCustomSection`.
     */
    FormCustomSection.builder = function () {
        return core_1.Entity.entityBuilder(FormCustomSection);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FormCustomSection` entity type.
     * @returns A `FormCustomSection` request builder.
     */
    FormCustomSection.requestBuilder = function () {
        return new FormCustomSectionRequestBuilder_1.FormCustomSectionRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormCustomSection`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormCustomSection`.
     */
    FormCustomSection.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FormCustomSection);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FormCustomSection.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FormCustomSection.
     */
    FormCustomSection._entityName = 'FormCustomSection';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormCustomSection.
     */
    FormCustomSection._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FormCustomSection._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FormCustomSection;
}(core_1.Entity));
exports.FormCustomSection = FormCustomSection;
var FormCustomElement_1 = require("./FormCustomElement");
var FormUserRatingComment_1 = require("./FormUserRatingComment");
var FormSectionConfiguration_1 = require("./FormSectionConfiguration");
(function (FormCustomSection) {
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCustomSection.FORM_CONTENT_ID = new core_1.BigNumberField('formContentId', FormCustomSection, 'Edm.Int64');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCustomSection.FORM_DATA_ID = new core_1.BigNumberField('formDataId', FormCustomSection, 'Edm.Int64');
    /**
     * Static representation of the [[sectionDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCustomSection.SECTION_DESCRIPTION = new core_1.StringField('sectionDescription', FormCustomSection, 'Edm.String');
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCustomSection.SECTION_INDEX = new core_1.NumberField('sectionIndex', FormCustomSection, 'Edm.Int32');
    /**
     * Static representation of the [[sectionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCustomSection.SECTION_NAME = new core_1.StringField('sectionName', FormCustomSection, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[customElement]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCustomSection.CUSTOM_ELEMENT = new core_1.Link('customElement', FormCustomSection, FormCustomElement_1.FormCustomElement);
    /**
     * Static representation of the one-to-many navigation property [[othersRatingComment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCustomSection.OTHERS_RATING_COMMENT = new core_1.Link('othersRatingComment', FormCustomSection, FormUserRatingComment_1.FormUserRatingComment);
    /**
     * Static representation of the one-to-one navigation property [[sectionConfiguration]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCustomSection.SECTION_CONFIGURATION = new core_1.OneToOneLink('sectionConfiguration', FormCustomSection, FormSectionConfiguration_1.FormSectionConfiguration);
    /**
     * Static representation of the one-to-one navigation property [[selfRatingComment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormCustomSection.SELF_RATING_COMMENT = new core_1.OneToOneLink('selfRatingComment', FormCustomSection, FormUserRatingComment_1.FormUserRatingComment);
    /**
     * All fields of the FormCustomSection entity.
     */
    FormCustomSection._allFields = [
        FormCustomSection.FORM_CONTENT_ID,
        FormCustomSection.FORM_DATA_ID,
        FormCustomSection.SECTION_DESCRIPTION,
        FormCustomSection.SECTION_INDEX,
        FormCustomSection.SECTION_NAME,
        FormCustomSection.CUSTOM_ELEMENT,
        FormCustomSection.OTHERS_RATING_COMMENT,
        FormCustomSection.SECTION_CONFIGURATION,
        FormCustomSection.SELF_RATING_COMMENT
    ];
    /**
     * All fields selector.
     */
    FormCustomSection.ALL_FIELDS = new core_1.AllFields('*', FormCustomSection);
    /**
     * All key fields of the FormCustomSection entity.
     */
    FormCustomSection._keyFields = [FormCustomSection.FORM_CONTENT_ID, FormCustomSection.FORM_DATA_ID, FormCustomSection.SECTION_INDEX];
    /**
     * Mapping of all key field names to the respective static field property FormCustomSection.
     */
    FormCustomSection._keys = FormCustomSection._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FormCustomSection = exports.FormCustomSection || (exports.FormCustomSection = {}));
exports.FormCustomSection = FormCustomSection;
//# sourceMappingURL=FormCustomSection.js.map