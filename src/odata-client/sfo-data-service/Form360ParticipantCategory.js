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
var Form360ParticipantCategoryRequestBuilder_1 = require("./Form360ParticipantCategoryRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Form360ParticipantCategory" of service "SFOData".
 */
var Form360ParticipantCategory = /** @class */ (function (_super) {
    __extends(Form360ParticipantCategory, _super);
    function Form360ParticipantCategory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Form360ParticipantCategory`.
     * @returns A builder that constructs instances of entity type `Form360ParticipantCategory`.
     */
    Form360ParticipantCategory.builder = function () {
        return core_1.Entity.entityBuilder(Form360ParticipantCategory);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Form360ParticipantCategory` entity type.
     * @returns A `Form360ParticipantCategory` request builder.
     */
    Form360ParticipantCategory.requestBuilder = function () {
        return new Form360ParticipantCategoryRequestBuilder_1.Form360ParticipantCategoryRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Form360ParticipantCategory`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Form360ParticipantCategory`.
     */
    Form360ParticipantCategory.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Form360ParticipantCategory);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Form360ParticipantCategory.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Form360ParticipantCategory.
     */
    Form360ParticipantCategory._entityName = 'Form360ParticipantCategory';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Form360ParticipantCategory.
     */
    Form360ParticipantCategory._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Form360ParticipantCategory._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Form360ParticipantCategory;
}(core_1.Entity));
exports.Form360ParticipantCategory = Form360ParticipantCategory;
(function (Form360ParticipantCategory) {
    /**
     * Static representation of the [[categoryLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ParticipantCategory.CATEGORY_LABEL = new core_1.StringField('categoryLabel', Form360ParticipantCategory, 'Edm.String');
    /**
     * Static representation of the [[categoryOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ParticipantCategory.CATEGORY_ORDER = new core_1.NumberField('categoryOrder', Form360ParticipantCategory, 'Edm.Int32');
    /**
     * Static representation of the [[categoryValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ParticipantCategory.CATEGORY_VALUE = new core_1.StringField('categoryValue', Form360ParticipantCategory, 'Edm.String');
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ParticipantCategory.FORM_CONTENT_ID = new core_1.BigNumberField('formContentId', Form360ParticipantCategory, 'Edm.Int64');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ParticipantCategory.FORM_DATA_ID = new core_1.BigNumberField('formDataId', Form360ParticipantCategory, 'Edm.Int64');
    /**
     * All fields of the Form360ParticipantCategory entity.
     */
    Form360ParticipantCategory._allFields = [
        Form360ParticipantCategory.CATEGORY_LABEL,
        Form360ParticipantCategory.CATEGORY_ORDER,
        Form360ParticipantCategory.CATEGORY_VALUE,
        Form360ParticipantCategory.FORM_CONTENT_ID,
        Form360ParticipantCategory.FORM_DATA_ID
    ];
    /**
     * All fields selector.
     */
    Form360ParticipantCategory.ALL_FIELDS = new core_1.AllFields('*', Form360ParticipantCategory);
    /**
     * All key fields of the Form360ParticipantCategory entity.
     */
    Form360ParticipantCategory._keyFields = [Form360ParticipantCategory.CATEGORY_VALUE, Form360ParticipantCategory.FORM_CONTENT_ID, Form360ParticipantCategory.FORM_DATA_ID];
    /**
     * Mapping of all key field names to the respective static field property Form360ParticipantCategory.
     */
    Form360ParticipantCategory._keys = Form360ParticipantCategory._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Form360ParticipantCategory = exports.Form360ParticipantCategory || (exports.Form360ParticipantCategory = {}));
exports.Form360ParticipantCategory = Form360ParticipantCategory;
//# sourceMappingURL=Form360ParticipantCategory.js.map