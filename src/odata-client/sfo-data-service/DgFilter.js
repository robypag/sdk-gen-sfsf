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
var DgFilterRequestBuilder_1 = require("./DgFilterRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "DGFilter" of service "SFOData".
 */
var DgFilter = /** @class */ (function (_super) {
    __extends(DgFilter, _super);
    function DgFilter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `DgFilter`.
     * @returns A builder that constructs instances of entity type `DgFilter`.
     */
    DgFilter.builder = function () {
        return core_1.Entity.entityBuilder(DgFilter);
    };
    /**
     * Returns a request builder to construct requests for operations on the `DgFilter` entity type.
     * @returns A `DgFilter` request builder.
     */
    DgFilter.requestBuilder = function () {
        return new DgFilterRequestBuilder_1.DgFilterRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DgFilter`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DgFilter`.
     */
    DgFilter.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, DgFilter);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    DgFilter.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for DgFilter.
     */
    DgFilter._entityName = 'DGFilter';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DgFilter.
     */
    DgFilter._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    DgFilter._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return DgFilter;
}(core_1.Entity));
exports.DgFilter = DgFilter;
var DgExpression_1 = require("./DgExpression");
var DgField_1 = require("./DgField");
(function (DgFilter) {
    /**
     * Static representation of the [[filterId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DgFilter.FILTER_ID = new core_1.StringField('filterId', DgFilter, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[expressions]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DgFilter.EXPRESSIONS = new core_1.Link('expressions', DgFilter, DgExpression_1.DgExpression);
    /**
     * Static representation of the one-to-one navigation property [[field]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DgFilter.FIELD = new core_1.OneToOneLink('field', DgFilter, DgField_1.DgField);
    /**
     * All fields of the DgFilter entity.
     */
    DgFilter._allFields = [
        DgFilter.FILTER_ID,
        DgFilter.EXPRESSIONS,
        DgFilter.FIELD
    ];
    /**
     * All fields selector.
     */
    DgFilter.ALL_FIELDS = new core_1.AllFields('*', DgFilter);
    /**
     * All key fields of the DgFilter entity.
     */
    DgFilter._keyFields = [DgFilter.FILTER_ID];
    /**
     * Mapping of all key field names to the respective static field property DgFilter.
     */
    DgFilter._keys = DgFilter._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(DgFilter = exports.DgFilter || (exports.DgFilter = {}));
exports.DgFilter = DgFilter;
//# sourceMappingURL=DgFilter.js.map