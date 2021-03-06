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
var Form360SummaryViewCategoryRequestBuilder_1 = require("./Form360SummaryViewCategoryRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Form360SummaryViewCategory" of service "SFOData".
 */
var Form360SummaryViewCategory = /** @class */ (function (_super) {
    __extends(Form360SummaryViewCategory, _super);
    function Form360SummaryViewCategory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Form360SummaryViewCategory`.
     * @returns A builder that constructs instances of entity type `Form360SummaryViewCategory`.
     */
    Form360SummaryViewCategory.builder = function () {
        return core_1.Entity.entityBuilder(Form360SummaryViewCategory);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Form360SummaryViewCategory` entity type.
     * @returns A `Form360SummaryViewCategory` request builder.
     */
    Form360SummaryViewCategory.requestBuilder = function () {
        return new Form360SummaryViewCategoryRequestBuilder_1.Form360SummaryViewCategoryRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Form360SummaryViewCategory`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Form360SummaryViewCategory`.
     */
    Form360SummaryViewCategory.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Form360SummaryViewCategory);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Form360SummaryViewCategory.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Form360SummaryViewCategory.
     */
    Form360SummaryViewCategory._entityName = 'Form360SummaryViewCategory';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Form360SummaryViewCategory.
     */
    Form360SummaryViewCategory._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Form360SummaryViewCategory._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Form360SummaryViewCategory;
}(core_1.Entity));
exports.Form360SummaryViewCategory = Form360SummaryViewCategory;
(function (Form360SummaryViewCategory) {
    /**
     * Static representation of the [[category]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360SummaryViewCategory.CATEGORY = new core_1.StringField('category', Form360SummaryViewCategory, 'Edm.String');
    /**
     * Static representation of the [[categoryOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360SummaryViewCategory.CATEGORY_ORDER = new core_1.NumberField('categoryOrder', Form360SummaryViewCategory, 'Edm.Int32');
    /**
     * Static representation of the [[categoryWeight]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360SummaryViewCategory.CATEGORY_WEIGHT = new core_1.StringField('categoryWeight', Form360SummaryViewCategory, 'Edm.String');
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360SummaryViewCategory.FORM_CONTENT_ID = new core_1.BigNumberField('formContentId', Form360SummaryViewCategory, 'Edm.Int64');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360SummaryViewCategory.FORM_DATA_ID = new core_1.BigNumberField('formDataId', Form360SummaryViewCategory, 'Edm.Int64');
    /**
     * All fields of the Form360SummaryViewCategory entity.
     */
    Form360SummaryViewCategory._allFields = [
        Form360SummaryViewCategory.CATEGORY,
        Form360SummaryViewCategory.CATEGORY_ORDER,
        Form360SummaryViewCategory.CATEGORY_WEIGHT,
        Form360SummaryViewCategory.FORM_CONTENT_ID,
        Form360SummaryViewCategory.FORM_DATA_ID
    ];
    /**
     * All fields selector.
     */
    Form360SummaryViewCategory.ALL_FIELDS = new core_1.AllFields('*', Form360SummaryViewCategory);
    /**
     * All key fields of the Form360SummaryViewCategory entity.
     */
    Form360SummaryViewCategory._keyFields = [Form360SummaryViewCategory.CATEGORY, Form360SummaryViewCategory.FORM_CONTENT_ID, Form360SummaryViewCategory.FORM_DATA_ID];
    /**
     * Mapping of all key field names to the respective static field property Form360SummaryViewCategory.
     */
    Form360SummaryViewCategory._keys = Form360SummaryViewCategory._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Form360SummaryViewCategory = exports.Form360SummaryViewCategory || (exports.Form360SummaryViewCategory = {}));
exports.Form360SummaryViewCategory = Form360SummaryViewCategory;
//# sourceMappingURL=Form360SummaryViewCategory.js.map