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
var DgFieldValueRequestBuilder_1 = require("./DgFieldValueRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "DGFieldValue" of service "SFOData".
 */
var DgFieldValue = /** @class */ (function (_super) {
    __extends(DgFieldValue, _super);
    function DgFieldValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `DgFieldValue`.
     * @returns A builder that constructs instances of entity type `DgFieldValue`.
     */
    DgFieldValue.builder = function () {
        return core_1.Entity.entityBuilder(DgFieldValue);
    };
    /**
     * Returns a request builder to construct requests for operations on the `DgFieldValue` entity type.
     * @returns A `DgFieldValue` request builder.
     */
    DgFieldValue.requestBuilder = function () {
        return new DgFieldValueRequestBuilder_1.DgFieldValueRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DgFieldValue`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DgFieldValue`.
     */
    DgFieldValue.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, DgFieldValue);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    DgFieldValue.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for DgFieldValue.
     */
    DgFieldValue._entityName = 'DGFieldValue';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DgFieldValue.
     */
    DgFieldValue._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    DgFieldValue._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return DgFieldValue;
}(core_1.Entity));
exports.DgFieldValue = DgFieldValue;
var PicklistOption_1 = require("./PicklistOption");
(function (DgFieldValue) {
    /**
     * Static representation of the [[fieldValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DgFieldValue.FIELD_VALUE = new core_1.StringField('fieldValue', DgFieldValue, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[fieldValuePickListOption]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DgFieldValue.FIELD_VALUE_PICK_LIST_OPTION = new core_1.OneToOneLink('fieldValuePickListOption', DgFieldValue, PicklistOption_1.PicklistOption);
    /**
     * All fields of the DgFieldValue entity.
     */
    DgFieldValue._allFields = [
        DgFieldValue.FIELD_VALUE,
        DgFieldValue.FIELD_VALUE_PICK_LIST_OPTION
    ];
    /**
     * All fields selector.
     */
    DgFieldValue.ALL_FIELDS = new core_1.AllFields('*', DgFieldValue);
    /**
     * All key fields of the DgFieldValue entity.
     */
    DgFieldValue._keyFields = [DgFieldValue.FIELD_VALUE];
    /**
     * Mapping of all key field names to the respective static field property DgFieldValue.
     */
    DgFieldValue._keys = DgFieldValue._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(DgFieldValue = exports.DgFieldValue || (exports.DgFieldValue = {}));
exports.DgFieldValue = DgFieldValue;
//# sourceMappingURL=DgFieldValue.js.map