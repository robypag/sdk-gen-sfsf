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
var EmEventAttributeRequestBuilder_1 = require("./EmEventAttributeRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EMEventAttribute" of service "SFOData".
 */
var EmEventAttribute = /** @class */ (function (_super) {
    __extends(EmEventAttribute, _super);
    function EmEventAttribute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmEventAttribute`.
     * @returns A builder that constructs instances of entity type `EmEventAttribute`.
     */
    EmEventAttribute.builder = function () {
        return core_1.Entity.entityBuilder(EmEventAttribute);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmEventAttribute` entity type.
     * @returns A `EmEventAttribute` request builder.
     */
    EmEventAttribute.requestBuilder = function () {
        return new EmEventAttributeRequestBuilder_1.EmEventAttributeRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmEventAttribute`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmEventAttribute`.
     */
    EmEventAttribute.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EmEventAttribute);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmEventAttribute.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmEventAttribute.
     */
    EmEventAttribute._entityName = 'EMEventAttribute';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmEventAttribute.
     */
    EmEventAttribute._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmEventAttribute._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return EmEventAttribute;
}(core_1.Entity));
exports.EmEventAttribute = EmEventAttribute;
(function (EmEventAttribute) {
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmEventAttribute.ID = new core_1.BigNumberField('id', EmEventAttribute, 'Edm.Int64');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmEventAttribute.NAME = new core_1.StringField('name', EmEventAttribute, 'Edm.String');
    /**
     * Static representation of the [[value]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmEventAttribute.VALUE = new core_1.StringField('value', EmEventAttribute, 'Edm.String');
    /**
     * All fields of the EmEventAttribute entity.
     */
    EmEventAttribute._allFields = [
        EmEventAttribute.ID,
        EmEventAttribute.NAME,
        EmEventAttribute.VALUE
    ];
    /**
     * All fields selector.
     */
    EmEventAttribute.ALL_FIELDS = new core_1.AllFields('*', EmEventAttribute);
    /**
     * All key fields of the EmEventAttribute entity.
     */
    EmEventAttribute._keyFields = [EmEventAttribute.ID];
    /**
     * Mapping of all key field names to the respective static field property EmEventAttribute.
     */
    EmEventAttribute._keys = EmEventAttribute._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmEventAttribute = exports.EmEventAttribute || (exports.EmEventAttribute = {}));
exports.EmEventAttribute = EmEventAttribute;
//# sourceMappingURL=EmEventAttribute.js.map