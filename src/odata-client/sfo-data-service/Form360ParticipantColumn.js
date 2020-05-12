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
var Form360ParticipantColumnRequestBuilder_1 = require("./Form360ParticipantColumnRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Form360ParticipantColumn" of service "SFOData".
 */
var Form360ParticipantColumn = /** @class */ (function (_super) {
    __extends(Form360ParticipantColumn, _super);
    function Form360ParticipantColumn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Form360ParticipantColumn`.
     * @returns A builder that constructs instances of entity type `Form360ParticipantColumn`.
     */
    Form360ParticipantColumn.builder = function () {
        return core_1.Entity.entityBuilder(Form360ParticipantColumn);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Form360ParticipantColumn` entity type.
     * @returns A `Form360ParticipantColumn` request builder.
     */
    Form360ParticipantColumn.requestBuilder = function () {
        return new Form360ParticipantColumnRequestBuilder_1.Form360ParticipantColumnRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Form360ParticipantColumn`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Form360ParticipantColumn`.
     */
    Form360ParticipantColumn.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Form360ParticipantColumn);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Form360ParticipantColumn.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Form360ParticipantColumn.
     */
    Form360ParticipantColumn._entityName = 'Form360ParticipantColumn';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Form360ParticipantColumn.
     */
    Form360ParticipantColumn._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Form360ParticipantColumn._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Form360ParticipantColumn;
}(core_1.Entity));
exports.Form360ParticipantColumn = Form360ParticipantColumn;
(function (Form360ParticipantColumn) {
    /**
     * Static representation of the [[columnKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ParticipantColumn.COLUMN_KEY = new core_1.StringField('columnKey', Form360ParticipantColumn, 'Edm.String');
    /**
     * Static representation of the [[columnLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ParticipantColumn.COLUMN_LABEL = new core_1.StringField('columnLabel', Form360ParticipantColumn, 'Edm.String');
    /**
     * Static representation of the [[columnOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ParticipantColumn.COLUMN_ORDER = new core_1.NumberField('columnOrder', Form360ParticipantColumn, 'Edm.Int32');
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ParticipantColumn.FORM_CONTENT_ID = new core_1.BigNumberField('formContentId', Form360ParticipantColumn, 'Edm.Int64');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Form360ParticipantColumn.FORM_DATA_ID = new core_1.BigNumberField('formDataId', Form360ParticipantColumn, 'Edm.Int64');
    /**
     * All fields of the Form360ParticipantColumn entity.
     */
    Form360ParticipantColumn._allFields = [
        Form360ParticipantColumn.COLUMN_KEY,
        Form360ParticipantColumn.COLUMN_LABEL,
        Form360ParticipantColumn.COLUMN_ORDER,
        Form360ParticipantColumn.FORM_CONTENT_ID,
        Form360ParticipantColumn.FORM_DATA_ID
    ];
    /**
     * All fields selector.
     */
    Form360ParticipantColumn.ALL_FIELDS = new core_1.AllFields('*', Form360ParticipantColumn);
    /**
     * All key fields of the Form360ParticipantColumn entity.
     */
    Form360ParticipantColumn._keyFields = [Form360ParticipantColumn.COLUMN_KEY, Form360ParticipantColumn.FORM_CONTENT_ID, Form360ParticipantColumn.FORM_DATA_ID];
    /**
     * Mapping of all key field names to the respective static field property Form360ParticipantColumn.
     */
    Form360ParticipantColumn._keys = Form360ParticipantColumn._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Form360ParticipantColumn = exports.Form360ParticipantColumn || (exports.Form360ParticipantColumn = {}));
exports.Form360ParticipantColumn = Form360ParticipantColumn;
//# sourceMappingURL=Form360ParticipantColumn.js.map