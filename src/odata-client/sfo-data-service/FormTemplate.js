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
var FormTemplateRequestBuilder_1 = require("./FormTemplateRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FormTemplate" of service "SFOData".
 */
var FormTemplate = /** @class */ (function (_super) {
    __extends(FormTemplate, _super);
    function FormTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FormTemplate`.
     * @returns A builder that constructs instances of entity type `FormTemplate`.
     */
    FormTemplate.builder = function () {
        return core_1.Entity.entityBuilder(FormTemplate);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FormTemplate` entity type.
     * @returns A `FormTemplate` request builder.
     */
    FormTemplate.requestBuilder = function () {
        return new FormTemplateRequestBuilder_1.FormTemplateRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormTemplate`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormTemplate`.
     */
    FormTemplate.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FormTemplate);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FormTemplate.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FormTemplate.
     */
    FormTemplate._entityName = 'FormTemplate';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormTemplate.
     */
    FormTemplate._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FormTemplate._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FormTemplate;
}(core_1.Entity));
exports.FormTemplate = FormTemplate;
var FormHeader_1 = require("./FormHeader");
(function (FormTemplate) {
    /**
     * Static representation of the [[formTemplateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormTemplate.FORM_TEMPLATE_ID = new core_1.BigNumberField('formTemplateId', FormTemplate, 'Edm.Int64');
    /**
     * Static representation of the [[formTemplateName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormTemplate.FORM_TEMPLATE_NAME = new core_1.StringField('formTemplateName', FormTemplate, 'Edm.String');
    /**
     * Static representation of the [[formTemplateType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormTemplate.FORM_TEMPLATE_TYPE = new core_1.StringField('formTemplateType', FormTemplate, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[associatedForms]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormTemplate.ASSOCIATED_FORMS = new core_1.Link('associatedForms', FormTemplate, FormHeader_1.FormHeader);
    /**
     * All fields of the FormTemplate entity.
     */
    FormTemplate._allFields = [
        FormTemplate.FORM_TEMPLATE_ID,
        FormTemplate.FORM_TEMPLATE_NAME,
        FormTemplate.FORM_TEMPLATE_TYPE,
        FormTemplate.ASSOCIATED_FORMS
    ];
    /**
     * All fields selector.
     */
    FormTemplate.ALL_FIELDS = new core_1.AllFields('*', FormTemplate);
    /**
     * All key fields of the FormTemplate entity.
     */
    FormTemplate._keyFields = [FormTemplate.FORM_TEMPLATE_ID];
    /**
     * Mapping of all key field names to the respective static field property FormTemplate.
     */
    FormTemplate._keys = FormTemplate._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FormTemplate = exports.FormTemplate || (exports.FormTemplate = {}));
exports.FormTemplate = FormTemplate;
//# sourceMappingURL=FormTemplate.js.map