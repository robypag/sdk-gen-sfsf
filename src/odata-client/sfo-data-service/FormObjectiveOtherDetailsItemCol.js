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
var FormObjectiveOtherDetailsItemColRequestBuilder_1 = require("./FormObjectiveOtherDetailsItemColRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FormObjectiveOtherDetailsItemCol" of service "SFOData".
 */
var FormObjectiveOtherDetailsItemCol = /** @class */ (function (_super) {
    __extends(FormObjectiveOtherDetailsItemCol, _super);
    function FormObjectiveOtherDetailsItemCol() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FormObjectiveOtherDetailsItemCol`.
     * @returns A builder that constructs instances of entity type `FormObjectiveOtherDetailsItemCol`.
     */
    FormObjectiveOtherDetailsItemCol.builder = function () {
        return core_1.Entity.entityBuilder(FormObjectiveOtherDetailsItemCol);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FormObjectiveOtherDetailsItemCol` entity type.
     * @returns A `FormObjectiveOtherDetailsItemCol` request builder.
     */
    FormObjectiveOtherDetailsItemCol.requestBuilder = function () {
        return new FormObjectiveOtherDetailsItemColRequestBuilder_1.FormObjectiveOtherDetailsItemColRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormObjectiveOtherDetailsItemCol`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormObjectiveOtherDetailsItemCol`.
     */
    FormObjectiveOtherDetailsItemCol.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FormObjectiveOtherDetailsItemCol);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FormObjectiveOtherDetailsItemCol.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FormObjectiveOtherDetailsItemCol.
     */
    FormObjectiveOtherDetailsItemCol._entityName = 'FormObjectiveOtherDetailsItemCol';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormObjectiveOtherDetailsItemCol.
     */
    FormObjectiveOtherDetailsItemCol._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FormObjectiveOtherDetailsItemCol._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FormObjectiveOtherDetailsItemCol;
}(core_1.Entity));
exports.FormObjectiveOtherDetailsItemCol = FormObjectiveOtherDetailsItemCol;
(function (FormObjectiveOtherDetailsItemCol) {
    /**
     * Static representation of the [[datatype]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveOtherDetailsItemCol.DATATYPE = new core_1.StringField('datatype', FormObjectiveOtherDetailsItemCol, 'Edm.String');
    /**
     * Static representation of the [[desc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveOtherDetailsItemCol.DESC = new core_1.StringField('desc', FormObjectiveOtherDetailsItemCol, 'Edm.String');
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveOtherDetailsItemCol.FORM_CONTENT_ID = new core_1.BigNumberField('formContentId', FormObjectiveOtherDetailsItemCol, 'Edm.Int64');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveOtherDetailsItemCol.FORM_DATA_ID = new core_1.BigNumberField('formDataId', FormObjectiveOtherDetailsItemCol, 'Edm.Int64');
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveOtherDetailsItemCol.ID = new core_1.StringField('id', FormObjectiveOtherDetailsItemCol, 'Edm.String');
    /**
     * Static representation of the [[index]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveOtherDetailsItemCol.INDEX = new core_1.NumberField('index', FormObjectiveOtherDetailsItemCol, 'Edm.Int32');
    /**
     * Static representation of the [[itemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveOtherDetailsItemCol.ITEM_ID = new core_1.BigNumberField('itemId', FormObjectiveOtherDetailsItemCol, 'Edm.Int64');
    /**
     * Static representation of the [[label]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveOtherDetailsItemCol.LABEL = new core_1.StringField('label', FormObjectiveOtherDetailsItemCol, 'Edm.String');
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveOtherDetailsItemCol.SECTION_INDEX = new core_1.NumberField('sectionIndex', FormObjectiveOtherDetailsItemCol, 'Edm.Int32');
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormObjectiveOtherDetailsItemCol.TYPE = new core_1.NumberField('type', FormObjectiveOtherDetailsItemCol, 'Edm.Int32');
    /**
     * All fields of the FormObjectiveOtherDetailsItemCol entity.
     */
    FormObjectiveOtherDetailsItemCol._allFields = [
        FormObjectiveOtherDetailsItemCol.DATATYPE,
        FormObjectiveOtherDetailsItemCol.DESC,
        FormObjectiveOtherDetailsItemCol.FORM_CONTENT_ID,
        FormObjectiveOtherDetailsItemCol.FORM_DATA_ID,
        FormObjectiveOtherDetailsItemCol.ID,
        FormObjectiveOtherDetailsItemCol.INDEX,
        FormObjectiveOtherDetailsItemCol.ITEM_ID,
        FormObjectiveOtherDetailsItemCol.LABEL,
        FormObjectiveOtherDetailsItemCol.SECTION_INDEX,
        FormObjectiveOtherDetailsItemCol.TYPE
    ];
    /**
     * All fields selector.
     */
    FormObjectiveOtherDetailsItemCol.ALL_FIELDS = new core_1.AllFields('*', FormObjectiveOtherDetailsItemCol);
    /**
     * All key fields of the FormObjectiveOtherDetailsItemCol entity.
     */
    FormObjectiveOtherDetailsItemCol._keyFields = [FormObjectiveOtherDetailsItemCol.FORM_CONTENT_ID, FormObjectiveOtherDetailsItemCol.FORM_DATA_ID, FormObjectiveOtherDetailsItemCol.ITEM_ID, FormObjectiveOtherDetailsItemCol.SECTION_INDEX, FormObjectiveOtherDetailsItemCol.TYPE];
    /**
     * Mapping of all key field names to the respective static field property FormObjectiveOtherDetailsItemCol.
     */
    FormObjectiveOtherDetailsItemCol._keys = FormObjectiveOtherDetailsItemCol._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FormObjectiveOtherDetailsItemCol = exports.FormObjectiveOtherDetailsItemCol || (exports.FormObjectiveOtherDetailsItemCol = {}));
exports.FormObjectiveOtherDetailsItemCol = FormObjectiveOtherDetailsItemCol;
//# sourceMappingURL=FormObjectiveOtherDetailsItemCol.js.map