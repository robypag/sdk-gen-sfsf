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
var FormObjectiveOtherDetailsItemRequestBuilder_1 = require("./FormObjectiveOtherDetailsItemRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FormObjectiveOtherDetailsItem" of service "SFOData".
 */
var FormObjectiveOtherDetailsItem = /** @class */ (function (_super) {
    __extends(FormObjectiveOtherDetailsItem, _super);
    function FormObjectiveOtherDetailsItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FormObjectiveOtherDetailsItem`.
     * @returns A builder that constructs instances of entity type `FormObjectiveOtherDetailsItem`.
     */
    FormObjectiveOtherDetailsItem.builder = function () {
        return core_1.Entity.entityBuilder(FormObjectiveOtherDetailsItem);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FormObjectiveOtherDetailsItem` entity type.
     * @returns A `FormObjectiveOtherDetailsItem` request builder.
     */
    FormObjectiveOtherDetailsItem.requestBuilder = function () {
        return new FormObjectiveOtherDetailsItemRequestBuilder_1.FormObjectiveOtherDetailsItemRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormObjectiveOtherDetailsItem`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormObjectiveOtherDetailsItem`.
     */
    FormObjectiveOtherDetailsItem.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FormObjectiveOtherDetailsItem);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FormObjectiveOtherDetailsItem.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FormObjectiveOtherDetailsItem.
     */
    FormObjectiveOtherDetailsItem._entityName = 'FormObjectiveOtherDetailsItem';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormObjectiveOtherDetailsItem.
     */
    FormObjectiveOtherDetailsItem._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FormObjectiveOtherDetailsItem._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FormObjectiveOtherDetailsItem;
}(core_1.Entity));
exports.FormObjectiveOtherDetailsItem = FormObjectiveOtherDetailsItem;
var FormObjectiveOtherDetailsItemCol_1 = require("./FormObjectiveOtherDetailsItemCol");
var FormObjectiveOtherDetailsItemValueCell_1 = require("./FormObjectiveOtherDetailsItemValueCell");
(function (FormObjectiveOtherDetailsItem) {
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveOtherDetailsItem.FORM_CONTENT_ID = new core_1.BigNumberField('formContentId', FormObjectiveOtherDetailsItem, 'Edm.Int64');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveOtherDetailsItem.FORM_DATA_ID = new core_1.BigNumberField('formDataId', FormObjectiveOtherDetailsItem, 'Edm.Int64');
    /**
     * Static representation of the [[itemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveOtherDetailsItem.ITEM_ID = new core_1.BigNumberField('itemId', FormObjectiveOtherDetailsItem, 'Edm.Int64');
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveOtherDetailsItem.SECTION_INDEX = new core_1.NumberField('sectionIndex', FormObjectiveOtherDetailsItem, 'Edm.Int32');
    /**
     * Static representation of the [[title]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveOtherDetailsItem.TITLE = new core_1.StringField('title', FormObjectiveOtherDetailsItem, 'Edm.String');
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveOtherDetailsItem.TYPE = new core_1.NumberField('type', FormObjectiveOtherDetailsItem, 'Edm.Int32');
    /**
     * Static representation of the one-to-many navigation property [[cols]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveOtherDetailsItem.COLS = new core_1.Link('cols', FormObjectiveOtherDetailsItem, FormObjectiveOtherDetailsItemCol_1.FormObjectiveOtherDetailsItemCol);
    /**
     * Static representation of the one-to-many navigation property [[values]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveOtherDetailsItem.VALUES = new core_1.Link('values', FormObjectiveOtherDetailsItem, FormObjectiveOtherDetailsItemValueCell_1.FormObjectiveOtherDetailsItemValueCell);
    /**
     * All fields of the FormObjectiveOtherDetailsItem entity.
     */
    FormObjectiveOtherDetailsItem._allFields = [
        FormObjectiveOtherDetailsItem.FORM_CONTENT_ID,
        FormObjectiveOtherDetailsItem.FORM_DATA_ID,
        FormObjectiveOtherDetailsItem.ITEM_ID,
        FormObjectiveOtherDetailsItem.SECTION_INDEX,
        FormObjectiveOtherDetailsItem.TITLE,
        FormObjectiveOtherDetailsItem.TYPE,
        FormObjectiveOtherDetailsItem.COLS,
        FormObjectiveOtherDetailsItem.VALUES
    ];
    /**
     * All fields selector.
     */
    FormObjectiveOtherDetailsItem.ALL_FIELDS = new core_1.AllFields('*', FormObjectiveOtherDetailsItem);
    /**
     * All key fields of the FormObjectiveOtherDetailsItem entity.
     */
    FormObjectiveOtherDetailsItem._keyFields = [FormObjectiveOtherDetailsItem.FORM_CONTENT_ID, FormObjectiveOtherDetailsItem.FORM_DATA_ID, FormObjectiveOtherDetailsItem.ITEM_ID, FormObjectiveOtherDetailsItem.SECTION_INDEX, FormObjectiveOtherDetailsItem.TYPE];
    /**
     * Mapping of all key field names to the respective static field property FormObjectiveOtherDetailsItem.
     */
    FormObjectiveOtherDetailsItem._keys = FormObjectiveOtherDetailsItem._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FormObjectiveOtherDetailsItem = exports.FormObjectiveOtherDetailsItem || (exports.FormObjectiveOtherDetailsItem = {}));
exports.FormObjectiveOtherDetailsItem = FormObjectiveOtherDetailsItem;
//# sourceMappingURL=FormObjectiveOtherDetailsItem.js.map