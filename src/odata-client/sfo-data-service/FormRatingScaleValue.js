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
var FormRatingScaleValueRequestBuilder_1 = require("./FormRatingScaleValueRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FormRatingScaleValue" of service "SFOData".
 */
var FormRatingScaleValue = /** @class */ (function (_super) {
    __extends(FormRatingScaleValue, _super);
    function FormRatingScaleValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FormRatingScaleValue`.
     * @returns A builder that constructs instances of entity type `FormRatingScaleValue`.
     */
    FormRatingScaleValue.builder = function () {
        return core_1.Entity.entityBuilder(FormRatingScaleValue);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FormRatingScaleValue` entity type.
     * @returns A `FormRatingScaleValue` request builder.
     */
    FormRatingScaleValue.requestBuilder = function () {
        return new FormRatingScaleValueRequestBuilder_1.FormRatingScaleValueRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormRatingScaleValue`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormRatingScaleValue`.
     */
    FormRatingScaleValue.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FormRatingScaleValue);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FormRatingScaleValue.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FormRatingScaleValue.
     */
    FormRatingScaleValue._entityName = 'FormRatingScaleValue';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormRatingScaleValue.
     */
    FormRatingScaleValue._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FormRatingScaleValue._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FormRatingScaleValue;
}(core_1.Entity));
exports.FormRatingScaleValue = FormRatingScaleValue;
(function (FormRatingScaleValue) {
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormRatingScaleValue.DESCRIPTION = new core_1.StringField('description', FormRatingScaleValue, 'Edm.String');
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormRatingScaleValue.FORM_CONTENT_ID = new core_1.BigNumberField('formContentId', FormRatingScaleValue, 'Edm.Int64');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormRatingScaleValue.FORM_DATA_ID = new core_1.BigNumberField('formDataId', FormRatingScaleValue, 'Edm.Int64');
    /**
     * Static representation of the [[longDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormRatingScaleValue.LONG_DESCRIPTION = new core_1.StringField('longDescription', FormRatingScaleValue, 'Edm.String');
    /**
     * Static representation of the [[scaleId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormRatingScaleValue.SCALE_ID = new core_1.StringField('scaleId', FormRatingScaleValue, 'Edm.String');
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormRatingScaleValue.SECTION_INDEX = new core_1.NumberField('sectionIndex', FormRatingScaleValue, 'Edm.Int32');
    /**
     * Static representation of the [[value]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormRatingScaleValue.VALUE = new core_1.StringField('value', FormRatingScaleValue, 'Edm.String');
    /**
     * All fields of the FormRatingScaleValue entity.
     */
    FormRatingScaleValue._allFields = [
        FormRatingScaleValue.DESCRIPTION,
        FormRatingScaleValue.FORM_CONTENT_ID,
        FormRatingScaleValue.FORM_DATA_ID,
        FormRatingScaleValue.LONG_DESCRIPTION,
        FormRatingScaleValue.SCALE_ID,
        FormRatingScaleValue.SECTION_INDEX,
        FormRatingScaleValue.VALUE
    ];
    /**
     * All fields selector.
     */
    FormRatingScaleValue.ALL_FIELDS = new core_1.AllFields('*', FormRatingScaleValue);
    /**
     * All key fields of the FormRatingScaleValue entity.
     */
    FormRatingScaleValue._keyFields = [FormRatingScaleValue.FORM_CONTENT_ID, FormRatingScaleValue.FORM_DATA_ID, FormRatingScaleValue.SCALE_ID, FormRatingScaleValue.SECTION_INDEX, FormRatingScaleValue.VALUE];
    /**
     * Mapping of all key field names to the respective static field property FormRatingScaleValue.
     */
    FormRatingScaleValue._keys = FormRatingScaleValue._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FormRatingScaleValue = exports.FormRatingScaleValue || (exports.FormRatingScaleValue = {}));
exports.FormRatingScaleValue = FormRatingScaleValue;
//# sourceMappingURL=FormRatingScaleValue.js.map