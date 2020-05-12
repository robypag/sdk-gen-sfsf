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
var InlineResultRequestBuilder_1 = require("./InlineResultRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "InlineResult" of service "SFOData".
 */
var InlineResult = /** @class */ (function (_super) {
    __extends(InlineResult, _super);
    function InlineResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `InlineResult`.
     * @returns A builder that constructs instances of entity type `InlineResult`.
     */
    InlineResult.builder = function () {
        return core_1.Entity.entityBuilder(InlineResult);
    };
    /**
     * Returns a request builder to construct requests for operations on the `InlineResult` entity type.
     * @returns A `InlineResult` request builder.
     */
    InlineResult.requestBuilder = function () {
        return new InlineResultRequestBuilder_1.InlineResultRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `InlineResult`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `InlineResult`.
     */
    InlineResult.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, InlineResult);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    InlineResult.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for InlineResult.
     */
    InlineResult._entityName = 'InlineResult';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for InlineResult.
     */
    InlineResult._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    InlineResult._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return InlineResult;
}(core_1.Entity));
exports.InlineResult = InlineResult;
var UpsertResult_1 = require("./UpsertResult");
(function (InlineResult) {
    /**
     * Static representation of the [[inlineProperty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InlineResult.INLINE_PROPERTY = new core_1.StringField('inlineProperty', InlineResult, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[results]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InlineResult.RESULTS = new core_1.Link('results', InlineResult, UpsertResult_1.UpsertResult);
    /**
     * All fields of the InlineResult entity.
     */
    InlineResult._allFields = [
        InlineResult.INLINE_PROPERTY,
        InlineResult.RESULTS
    ];
    /**
     * All fields selector.
     */
    InlineResult.ALL_FIELDS = new core_1.AllFields('*', InlineResult);
    /**
     * All key fields of the InlineResult entity.
     */
    InlineResult._keyFields = [InlineResult.INLINE_PROPERTY];
    /**
     * Mapping of all key field names to the respective static field property InlineResult.
     */
    InlineResult._keys = InlineResult._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(InlineResult = exports.InlineResult || (exports.InlineResult = {}));
exports.InlineResult = InlineResult;
//# sourceMappingURL=InlineResult.js.map