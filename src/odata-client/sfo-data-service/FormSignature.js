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
var FormSignatureRequestBuilder_1 = require("./FormSignatureRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FormSignature" of service "SFOData".
 */
var FormSignature = /** @class */ (function (_super) {
    __extends(FormSignature, _super);
    function FormSignature() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FormSignature`.
     * @returns A builder that constructs instances of entity type `FormSignature`.
     */
    FormSignature.builder = function () {
        return core_1.Entity.entityBuilder(FormSignature);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FormSignature` entity type.
     * @returns A `FormSignature` request builder.
     */
    FormSignature.requestBuilder = function () {
        return new FormSignatureRequestBuilder_1.FormSignatureRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormSignature`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormSignature`.
     */
    FormSignature.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FormSignature);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FormSignature.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FormSignature.
     */
    FormSignature._entityName = 'FormSignature';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormSignature.
     */
    FormSignature._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FormSignature._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FormSignature;
}(core_1.Entity));
exports.FormSignature = FormSignature;
var FormUserRatingComment_1 = require("./FormUserRatingComment");
(function (FormSignature) {
    /**
     * Static representation of the [[actionInformation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSignature.ACTION_INFORMATION = new core_1.StringField('actionInformation', FormSignature, 'Edm.String');
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSignature.FORM_CONTENT_ID = new core_1.BigNumberField('formContentId', FormSignature, 'Edm.Int64');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSignature.FORM_DATA_ID = new core_1.BigNumberField('formDataId', FormSignature, 'Edm.Int64');
    /**
     * Static representation of the [[roleType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSignature.ROLE_TYPE = new core_1.StringField('roleType', FormSignature, 'Edm.String');
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSignature.SECTION_INDEX = new core_1.NumberField('sectionIndex', FormSignature, 'Edm.Int32');
    /**
     * Static representation of the [[signedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSignature.SIGNED_BY = new core_1.StringField('signedBy', FormSignature, 'Edm.String');
    /**
     * Static representation of the [[signedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSignature.SIGNED_DATE = new core_1.StringField('signedDate', FormSignature, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSignature.STATUS = new core_1.StringField('status', FormSignature, 'Edm.String');
    /**
     * Static representation of the [[stepId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSignature.STEP_ID = new core_1.StringField('stepId', FormSignature, 'Edm.String');
    /**
     * Static representation of the [[stepOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSignature.STEP_ORDER = new core_1.NumberField('stepOrder', FormSignature, 'Edm.Int32');
    /**
     * Static representation of the one-to-one navigation property [[comment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormSignature.COMMENT = new core_1.OneToOneLink('comment', FormSignature, FormUserRatingComment_1.FormUserRatingComment);
    /**
     * All fields of the FormSignature entity.
     */
    FormSignature._allFields = [
        FormSignature.ACTION_INFORMATION,
        FormSignature.FORM_CONTENT_ID,
        FormSignature.FORM_DATA_ID,
        FormSignature.ROLE_TYPE,
        FormSignature.SECTION_INDEX,
        FormSignature.SIGNED_BY,
        FormSignature.SIGNED_DATE,
        FormSignature.STATUS,
        FormSignature.STEP_ID,
        FormSignature.STEP_ORDER,
        FormSignature.COMMENT
    ];
    /**
     * All fields selector.
     */
    FormSignature.ALL_FIELDS = new core_1.AllFields('*', FormSignature);
    /**
     * All key fields of the FormSignature entity.
     */
    FormSignature._keyFields = [FormSignature.FORM_CONTENT_ID, FormSignature.FORM_DATA_ID, FormSignature.SECTION_INDEX, FormSignature.STEP_ID];
    /**
     * Mapping of all key field names to the respective static field property FormSignature.
     */
    FormSignature._keys = FormSignature._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FormSignature = exports.FormSignature || (exports.FormSignature = {}));
exports.FormSignature = FormSignature;
//# sourceMappingURL=FormSignature.js.map