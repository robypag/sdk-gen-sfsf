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
var DgFieldOperatorRequestBuilder_1 = require("./DgFieldOperatorRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "DGFieldOperator" of service "SFOData".
 */
var DgFieldOperator = /** @class */ (function (_super) {
    __extends(DgFieldOperator, _super);
    function DgFieldOperator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `DgFieldOperator`.
     * @returns A builder that constructs instances of entity type `DgFieldOperator`.
     */
    DgFieldOperator.builder = function () {
        return core_1.Entity.entityBuilder(DgFieldOperator);
    };
    /**
     * Returns a request builder to construct requests for operations on the `DgFieldOperator` entity type.
     * @returns A `DgFieldOperator` request builder.
     */
    DgFieldOperator.requestBuilder = function () {
        return new DgFieldOperatorRequestBuilder_1.DgFieldOperatorRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DgFieldOperator`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DgFieldOperator`.
     */
    DgFieldOperator.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, DgFieldOperator);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    DgFieldOperator.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for DgFieldOperator.
     */
    DgFieldOperator._entityName = 'DGFieldOperator';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DgFieldOperator.
     */
    DgFieldOperator._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    DgFieldOperator._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return DgFieldOperator;
}(core_1.Entity));
exports.DgFieldOperator = DgFieldOperator;
(function (DgFieldOperator) {
    /**
     * Static representation of the [[label]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DgFieldOperator.LABEL = new core_1.StringField('label', DgFieldOperator, 'Edm.String');
    /**
     * Static representation of the [[token]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DgFieldOperator.TOKEN = new core_1.StringField('token', DgFieldOperator, 'Edm.String');
    /**
     * All fields of the DgFieldOperator entity.
     */
    DgFieldOperator._allFields = [
        DgFieldOperator.LABEL,
        DgFieldOperator.TOKEN
    ];
    /**
     * All fields selector.
     */
    DgFieldOperator.ALL_FIELDS = new core_1.AllFields('*', DgFieldOperator);
    /**
     * All key fields of the DgFieldOperator entity.
     */
    DgFieldOperator._keyFields = [DgFieldOperator.TOKEN];
    /**
     * Mapping of all key field names to the respective static field property DgFieldOperator.
     */
    DgFieldOperator._keys = DgFieldOperator._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(DgFieldOperator = exports.DgFieldOperator || (exports.DgFieldOperator = {}));
exports.DgFieldOperator = DgFieldOperator;
//# sourceMappingURL=DgFieldOperator.js.map