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
var FormIntroductionSectionRequestBuilder_1 = require("./FormIntroductionSectionRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FormIntroductionSection" of service "SFOData".
 */
var FormIntroductionSection = /** @class */ (function (_super) {
    __extends(FormIntroductionSection, _super);
    function FormIntroductionSection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FormIntroductionSection`.
     * @returns A builder that constructs instances of entity type `FormIntroductionSection`.
     */
    FormIntroductionSection.builder = function () {
        return core_1.Entity.entityBuilder(FormIntroductionSection);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FormIntroductionSection` entity type.
     * @returns A `FormIntroductionSection` request builder.
     */
    FormIntroductionSection.requestBuilder = function () {
        return new FormIntroductionSectionRequestBuilder_1.FormIntroductionSectionRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormIntroductionSection`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormIntroductionSection`.
     */
    FormIntroductionSection.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FormIntroductionSection);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FormIntroductionSection.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FormIntroductionSection.
     */
    FormIntroductionSection._entityName = 'FormIntroductionSection';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormIntroductionSection.
     */
    FormIntroductionSection._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FormIntroductionSection._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FormIntroductionSection;
}(core_1.Entity));
exports.FormIntroductionSection = FormIntroductionSection;
(function (FormIntroductionSection) {
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormIntroductionSection.FORM_CONTENT_ID = new core_1.BigNumberField('formContentId', FormIntroductionSection, 'Edm.Int64');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormIntroductionSection.FORM_DATA_ID = new core_1.BigNumberField('formDataId', FormIntroductionSection, 'Edm.Int64');
    /**
     * Static representation of the [[sectionDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormIntroductionSection.SECTION_DESCRIPTION = new core_1.StringField('sectionDescription', FormIntroductionSection, 'Edm.String');
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormIntroductionSection.SECTION_INDEX = new core_1.NumberField('sectionIndex', FormIntroductionSection, 'Edm.Int32');
    /**
     * Static representation of the [[sectionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormIntroductionSection.SECTION_NAME = new core_1.StringField('sectionName', FormIntroductionSection, 'Edm.String');
    /**
     * All fields of the FormIntroductionSection entity.
     */
    FormIntroductionSection._allFields = [
        FormIntroductionSection.FORM_CONTENT_ID,
        FormIntroductionSection.FORM_DATA_ID,
        FormIntroductionSection.SECTION_DESCRIPTION,
        FormIntroductionSection.SECTION_INDEX,
        FormIntroductionSection.SECTION_NAME
    ];
    /**
     * All fields selector.
     */
    FormIntroductionSection.ALL_FIELDS = new core_1.AllFields('*', FormIntroductionSection);
    /**
     * All key fields of the FormIntroductionSection entity.
     */
    FormIntroductionSection._keyFields = [FormIntroductionSection.FORM_CONTENT_ID, FormIntroductionSection.FORM_DATA_ID];
    /**
     * Mapping of all key field names to the respective static field property FormIntroductionSection.
     */
    FormIntroductionSection._keys = FormIntroductionSection._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FormIntroductionSection = exports.FormIntroductionSection || (exports.FormIntroductionSection = {}));
exports.FormIntroductionSection = FormIntroductionSection;
//# sourceMappingURL=FormIntroductionSection.js.map