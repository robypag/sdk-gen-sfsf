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
var FormRatingScaleRequestBuilder_1 = require("./FormRatingScaleRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FormRatingScale" of service "SFOData".
 */
var FormRatingScale = /** @class */ (function (_super) {
    __extends(FormRatingScale, _super);
    function FormRatingScale() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FormRatingScale`.
     * @returns A builder that constructs instances of entity type `FormRatingScale`.
     */
    FormRatingScale.builder = function () {
        return core_1.Entity.entityBuilder(FormRatingScale);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FormRatingScale` entity type.
     * @returns A `FormRatingScale` request builder.
     */
    FormRatingScale.requestBuilder = function () {
        return new FormRatingScaleRequestBuilder_1.FormRatingScaleRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormRatingScale`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormRatingScale`.
     */
    FormRatingScale.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FormRatingScale);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FormRatingScale.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FormRatingScale.
     */
    FormRatingScale._entityName = 'FormRatingScale';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormRatingScale.
     */
    FormRatingScale._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FormRatingScale._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FormRatingScale;
}(core_1.Entity));
exports.FormRatingScale = FormRatingScale;
var FormRatingScaleValue_1 = require("./FormRatingScaleValue");
(function (FormRatingScale) {
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormRatingScale.FORM_CONTENT_ID = new core_1.BigNumberField('formContentId', FormRatingScale, 'Edm.Int64');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormRatingScale.FORM_DATA_ID = new core_1.BigNumberField('formDataId', FormRatingScale, 'Edm.Int64');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormRatingScale.NAME = new core_1.StringField('name', FormRatingScale, 'Edm.String');
    /**
     * Static representation of the [[reverseScale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormRatingScale.REVERSE_SCALE = new core_1.BooleanField('reverseScale', FormRatingScale, 'Edm.Boolean');
    /**
     * Static representation of the [[scaleId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormRatingScale.SCALE_ID = new core_1.StringField('scaleId', FormRatingScale, 'Edm.String');
    /**
     * Static representation of the [[scaleType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormRatingScale.SCALE_TYPE = new core_1.StringField('scaleType', FormRatingScale, 'Edm.String');
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormRatingScale.SECTION_INDEX = new core_1.NumberField('sectionIndex', FormRatingScale, 'Edm.Int32');
    /**
     * Static representation of the [[showValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormRatingScale.SHOW_VALUE = new core_1.BooleanField('showValue', FormRatingScale, 'Edm.Boolean');
    /**
     * Static representation of the one-to-many navigation property [[ratingScaleList]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormRatingScale.RATING_SCALE_LIST = new core_1.Link('ratingScaleList', FormRatingScale, FormRatingScaleValue_1.FormRatingScaleValue);
    /**
     * All fields of the FormRatingScale entity.
     */
    FormRatingScale._allFields = [
        FormRatingScale.FORM_CONTENT_ID,
        FormRatingScale.FORM_DATA_ID,
        FormRatingScale.NAME,
        FormRatingScale.REVERSE_SCALE,
        FormRatingScale.SCALE_ID,
        FormRatingScale.SCALE_TYPE,
        FormRatingScale.SECTION_INDEX,
        FormRatingScale.SHOW_VALUE,
        FormRatingScale.RATING_SCALE_LIST
    ];
    /**
     * All fields selector.
     */
    FormRatingScale.ALL_FIELDS = new core_1.AllFields('*', FormRatingScale);
    /**
     * All key fields of the FormRatingScale entity.
     */
    FormRatingScale._keyFields = [FormRatingScale.FORM_CONTENT_ID, FormRatingScale.FORM_DATA_ID, FormRatingScale.SECTION_INDEX];
    /**
     * Mapping of all key field names to the respective static field property FormRatingScale.
     */
    FormRatingScale._keys = FormRatingScale._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FormRatingScale = exports.FormRatingScale || (exports.FormRatingScale = {}));
exports.FormRatingScale = FormRatingScale;
//# sourceMappingURL=FormRatingScale.js.map