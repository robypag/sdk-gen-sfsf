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
var FormObjectiveOtherDetailsItemValueCellRequestBuilder_1 = require("./FormObjectiveOtherDetailsItemValueCellRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FormObjectiveOtherDetailsItemValueCell" of service "SFOData".
 */
var FormObjectiveOtherDetailsItemValueCell = /** @class */ (function (_super) {
    __extends(FormObjectiveOtherDetailsItemValueCell, _super);
    function FormObjectiveOtherDetailsItemValueCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FormObjectiveOtherDetailsItemValueCell`.
     * @returns A builder that constructs instances of entity type `FormObjectiveOtherDetailsItemValueCell`.
     */
    FormObjectiveOtherDetailsItemValueCell.builder = function () {
        return core_1.Entity.entityBuilder(FormObjectiveOtherDetailsItemValueCell);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FormObjectiveOtherDetailsItemValueCell` entity type.
     * @returns A `FormObjectiveOtherDetailsItemValueCell` request builder.
     */
    FormObjectiveOtherDetailsItemValueCell.requestBuilder = function () {
        return new FormObjectiveOtherDetailsItemValueCellRequestBuilder_1.FormObjectiveOtherDetailsItemValueCellRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormObjectiveOtherDetailsItemValueCell`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormObjectiveOtherDetailsItemValueCell`.
     */
    FormObjectiveOtherDetailsItemValueCell.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FormObjectiveOtherDetailsItemValueCell);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FormObjectiveOtherDetailsItemValueCell.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FormObjectiveOtherDetailsItemValueCell.
     */
    FormObjectiveOtherDetailsItemValueCell._entityName = 'FormObjectiveOtherDetailsItemValueCell';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormObjectiveOtherDetailsItemValueCell.
     */
    FormObjectiveOtherDetailsItemValueCell._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FormObjectiveOtherDetailsItemValueCell._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FormObjectiveOtherDetailsItemValueCell;
}(core_1.Entity));
exports.FormObjectiveOtherDetailsItemValueCell = FormObjectiveOtherDetailsItemValueCell;
(function (FormObjectiveOtherDetailsItemValueCell) {
    /**
     * Static representation of the [[colId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveOtherDetailsItemValueCell.COL_ID = new core_1.StringField('colId', FormObjectiveOtherDetailsItemValueCell, 'Edm.String');
    /**
     * Static representation of the [[colIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveOtherDetailsItemValueCell.COL_INDEX = new core_1.NumberField('colIndex', FormObjectiveOtherDetailsItemValueCell, 'Edm.Int32');
    /**
     * Static representation of the [[datatype]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveOtherDetailsItemValueCell.DATATYPE = new core_1.StringField('datatype', FormObjectiveOtherDetailsItemValueCell, 'Edm.String');
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveOtherDetailsItemValueCell.FORM_CONTENT_ID = new core_1.BigNumberField('formContentId', FormObjectiveOtherDetailsItemValueCell, 'Edm.Int64');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveOtherDetailsItemValueCell.FORM_DATA_ID = new core_1.BigNumberField('formDataId', FormObjectiveOtherDetailsItemValueCell, 'Edm.Int64');
    /**
     * Static representation of the [[itemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveOtherDetailsItemValueCell.ITEM_ID = new core_1.BigNumberField('itemId', FormObjectiveOtherDetailsItemValueCell, 'Edm.Int64');
    /**
     * Static representation of the [[rowIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveOtherDetailsItemValueCell.ROW_INDEX = new core_1.NumberField('rowIndex', FormObjectiveOtherDetailsItemValueCell, 'Edm.Int32');
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveOtherDetailsItemValueCell.SECTION_INDEX = new core_1.NumberField('sectionIndex', FormObjectiveOtherDetailsItemValueCell, 'Edm.Int32');
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveOtherDetailsItemValueCell.TYPE = new core_1.NumberField('type', FormObjectiveOtherDetailsItemValueCell, 'Edm.Int32');
    /**
     * Static representation of the [[value]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveOtherDetailsItemValueCell.VALUE = new core_1.StringField('value', FormObjectiveOtherDetailsItemValueCell, 'Edm.String');
    /**
     * All fields of the FormObjectiveOtherDetailsItemValueCell entity.
     */
    FormObjectiveOtherDetailsItemValueCell._allFields = [
        FormObjectiveOtherDetailsItemValueCell.COL_ID,
        FormObjectiveOtherDetailsItemValueCell.COL_INDEX,
        FormObjectiveOtherDetailsItemValueCell.DATATYPE,
        FormObjectiveOtherDetailsItemValueCell.FORM_CONTENT_ID,
        FormObjectiveOtherDetailsItemValueCell.FORM_DATA_ID,
        FormObjectiveOtherDetailsItemValueCell.ITEM_ID,
        FormObjectiveOtherDetailsItemValueCell.ROW_INDEX,
        FormObjectiveOtherDetailsItemValueCell.SECTION_INDEX,
        FormObjectiveOtherDetailsItemValueCell.TYPE,
        FormObjectiveOtherDetailsItemValueCell.VALUE
    ];
    /**
     * All fields selector.
     */
    FormObjectiveOtherDetailsItemValueCell.ALL_FIELDS = new core_1.AllFields('*', FormObjectiveOtherDetailsItemValueCell);
    /**
     * All key fields of the FormObjectiveOtherDetailsItemValueCell entity.
     */
    FormObjectiveOtherDetailsItemValueCell._keyFields = [FormObjectiveOtherDetailsItemValueCell.FORM_CONTENT_ID, FormObjectiveOtherDetailsItemValueCell.FORM_DATA_ID, FormObjectiveOtherDetailsItemValueCell.ITEM_ID, FormObjectiveOtherDetailsItemValueCell.SECTION_INDEX, FormObjectiveOtherDetailsItemValueCell.TYPE];
    /**
     * Mapping of all key field names to the respective static field property FormObjectiveOtherDetailsItemValueCell.
     */
    FormObjectiveOtherDetailsItemValueCell._keys = FormObjectiveOtherDetailsItemValueCell._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FormObjectiveOtherDetailsItemValueCell = exports.FormObjectiveOtherDetailsItemValueCell || (exports.FormObjectiveOtherDetailsItemValueCell = {}));
exports.FormObjectiveOtherDetailsItemValueCell = FormObjectiveOtherDetailsItemValueCell;
//# sourceMappingURL=FormObjectiveOtherDetailsItemValueCell.js.map