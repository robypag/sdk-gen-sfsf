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
var FormObjectiveDetailsRequestBuilder_1 = require("./FormObjectiveDetailsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FormObjectiveDetails" of service "SFOData".
 */
var FormObjectiveDetails = /** @class */ (function (_super) {
    __extends(FormObjectiveDetails, _super);
    function FormObjectiveDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FormObjectiveDetails`.
     * @returns A builder that constructs instances of entity type `FormObjectiveDetails`.
     */
    FormObjectiveDetails.builder = function () {
        return core_1.Entity.entityBuilder(FormObjectiveDetails);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FormObjectiveDetails` entity type.
     * @returns A `FormObjectiveDetails` request builder.
     */
    FormObjectiveDetails.requestBuilder = function () {
        return new FormObjectiveDetailsRequestBuilder_1.FormObjectiveDetailsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormObjectiveDetails`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormObjectiveDetails`.
     */
    FormObjectiveDetails.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FormObjectiveDetails);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FormObjectiveDetails.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FormObjectiveDetails.
     */
    FormObjectiveDetails._entityName = 'FormObjectiveDetails';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormObjectiveDetails.
     */
    FormObjectiveDetails._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FormObjectiveDetails._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FormObjectiveDetails;
}(core_1.Entity));
exports.FormObjectiveDetails = FormObjectiveDetails;
(function (FormObjectiveDetails) {
    /**
     * Static representation of the [[fieldDataType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveDetails.FIELD_DATA_TYPE = new core_1.StringField('fieldDataType', FormObjectiveDetails, 'Edm.String');
    /**
     * Static representation of the [[fieldId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveDetails.FIELD_ID = new core_1.StringField('fieldId', FormObjectiveDetails, 'Edm.String');
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveDetails.FORM_CONTENT_ID = new core_1.BigNumberField('formContentId', FormObjectiveDetails, 'Edm.Int64');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveDetails.FORM_DATA_ID = new core_1.BigNumberField('formDataId', FormObjectiveDetails, 'Edm.Int64');
    /**
     * Static representation of the [[itemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveDetails.ITEM_ID = new core_1.BigNumberField('itemId', FormObjectiveDetails, 'Edm.Int64');
    /**
     * Static representation of the [[label]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveDetails.LABEL = new core_1.StringField('label', FormObjectiveDetails, 'Edm.String');
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveDetails.SECTION_INDEX = new core_1.NumberField('sectionIndex', FormObjectiveDetails, 'Edm.Int32');
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveDetails.TYPE = new core_1.NumberField('type', FormObjectiveDetails, 'Edm.Int32');
    /**
     * Static representation of the [[value]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveDetails.VALUE = new core_1.StringField('value', FormObjectiveDetails, 'Edm.String');
    /**
     * All fields of the FormObjectiveDetails entity.
     */
    FormObjectiveDetails._allFields = [
        FormObjectiveDetails.FIELD_DATA_TYPE,
        FormObjectiveDetails.FIELD_ID,
        FormObjectiveDetails.FORM_CONTENT_ID,
        FormObjectiveDetails.FORM_DATA_ID,
        FormObjectiveDetails.ITEM_ID,
        FormObjectiveDetails.LABEL,
        FormObjectiveDetails.SECTION_INDEX,
        FormObjectiveDetails.TYPE,
        FormObjectiveDetails.VALUE
    ];
    /**
     * All fields selector.
     */
    FormObjectiveDetails.ALL_FIELDS = new core_1.AllFields('*', FormObjectiveDetails);
    /**
     * All key fields of the FormObjectiveDetails entity.
     */
    FormObjectiveDetails._keyFields = [FormObjectiveDetails.FORM_CONTENT_ID, FormObjectiveDetails.FORM_DATA_ID, FormObjectiveDetails.ITEM_ID, FormObjectiveDetails.SECTION_INDEX, FormObjectiveDetails.TYPE];
    /**
     * Mapping of all key field names to the respective static field property FormObjectiveDetails.
     */
    FormObjectiveDetails._keys = FormObjectiveDetails._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FormObjectiveDetails = exports.FormObjectiveDetails || (exports.FormObjectiveDetails = {}));
exports.FormObjectiveDetails = FormObjectiveDetails;
//# sourceMappingURL=FormObjectiveDetails.js.map