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
var MdfLocalizedValueRequestBuilder_1 = require("./MdfLocalizedValueRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "MDFLocalizedValue" of service "SFOData".
 */
var MdfLocalizedValue = /** @class */ (function (_super) {
    __extends(MdfLocalizedValue, _super);
    function MdfLocalizedValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `MdfLocalizedValue`.
     * @returns A builder that constructs instances of entity type `MdfLocalizedValue`.
     */
    MdfLocalizedValue.builder = function () {
        return core_1.Entity.entityBuilder(MdfLocalizedValue);
    };
    /**
     * Returns a request builder to construct requests for operations on the `MdfLocalizedValue` entity type.
     * @returns A `MdfLocalizedValue` request builder.
     */
    MdfLocalizedValue.requestBuilder = function () {
        return new MdfLocalizedValueRequestBuilder_1.MdfLocalizedValueRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `MdfLocalizedValue`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `MdfLocalizedValue`.
     */
    MdfLocalizedValue.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, MdfLocalizedValue);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    MdfLocalizedValue.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for MdfLocalizedValue.
     */
    MdfLocalizedValue._entityName = 'MDFLocalizedValue';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for MdfLocalizedValue.
     */
    MdfLocalizedValue._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    MdfLocalizedValue._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return MdfLocalizedValue;
}(core_1.Entity));
exports.MdfLocalizedValue = MdfLocalizedValue;
(function (MdfLocalizedValue) {
    /**
     * Static representation of the [[locale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MdfLocalizedValue.LOCALE = new core_1.StringField('locale', MdfLocalizedValue, 'Edm.String');
    /**
     * Static representation of the [[value]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MdfLocalizedValue.VALUE = new core_1.StringField('value', MdfLocalizedValue, 'Edm.String');
    /**
     * All fields of the MdfLocalizedValue entity.
     */
    MdfLocalizedValue._allFields = [
        MdfLocalizedValue.LOCALE,
        MdfLocalizedValue.VALUE
    ];
    /**
     * All fields selector.
     */
    MdfLocalizedValue.ALL_FIELDS = new core_1.AllFields('*', MdfLocalizedValue);
    /**
     * All key fields of the MdfLocalizedValue entity.
     */
    MdfLocalizedValue._keyFields = [MdfLocalizedValue.LOCALE];
    /**
     * Mapping of all key field names to the respective static field property MdfLocalizedValue.
     */
    MdfLocalizedValue._keys = MdfLocalizedValue._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(MdfLocalizedValue = exports.MdfLocalizedValue || (exports.MdfLocalizedValue = {}));
exports.MdfLocalizedValue = MdfLocalizedValue;
//# sourceMappingURL=MdfLocalizedValue.js.map