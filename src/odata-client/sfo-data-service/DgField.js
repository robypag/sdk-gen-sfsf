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
var DgFieldRequestBuilder_1 = require("./DgFieldRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "DGField" of service "SFOData".
 */
var DgField = /** @class */ (function (_super) {
    __extends(DgField, _super);
    function DgField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `DgField`.
     * @returns A builder that constructs instances of entity type `DgField`.
     */
    DgField.builder = function () {
        return core_1.Entity.entityBuilder(DgField);
    };
    /**
     * Returns a request builder to construct requests for operations on the `DgField` entity type.
     * @returns A `DgField` request builder.
     */
    DgField.requestBuilder = function () {
        return new DgFieldRequestBuilder_1.DgFieldRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DgField`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DgField`.
     */
    DgField.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, DgField);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    DgField.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for DgField.
     */
    DgField._entityName = 'DGField';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DgField.
     */
    DgField._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    DgField._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return DgField;
}(core_1.Entity));
exports.DgField = DgField;
var DgFieldOperator_1 = require("./DgFieldOperator");
(function (DgField) {
    /**
     * Static representation of the [[dataType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DgField.DATA_TYPE = new core_1.StringField('dataType', DgField, 'Edm.String');
    /**
     * Static representation of the [[label]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DgField.LABEL = new core_1.StringField('label', DgField, 'Edm.String');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DgField.NAME = new core_1.StringField('name', DgField, 'Edm.String');
    /**
     * Static representation of the [[picklistId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DgField.PICKLIST_ID = new core_1.StringField('picklistId', DgField, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[allowedOperators]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DgField.ALLOWED_OPERATORS = new core_1.Link('allowedOperators', DgField, DgFieldOperator_1.DgFieldOperator);
    /**
     * All fields of the DgField entity.
     */
    DgField._allFields = [
        DgField.DATA_TYPE,
        DgField.LABEL,
        DgField.NAME,
        DgField.PICKLIST_ID,
        DgField.ALLOWED_OPERATORS
    ];
    /**
     * All fields selector.
     */
    DgField.ALL_FIELDS = new core_1.AllFields('*', DgField);
    /**
     * All key fields of the DgField entity.
     */
    DgField._keyFields = [DgField.NAME];
    /**
     * Mapping of all key field names to the respective static field property DgField.
     */
    DgField._keys = DgField._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(DgField = exports.DgField || (exports.DgField = {}));
exports.DgField = DgField;
//# sourceMappingURL=DgField.js.map