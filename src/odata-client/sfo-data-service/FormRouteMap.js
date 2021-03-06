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
var FormRouteMapRequestBuilder_1 = require("./FormRouteMapRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FormRouteMap" of service "SFOData".
 */
var FormRouteMap = /** @class */ (function (_super) {
    __extends(FormRouteMap, _super);
    function FormRouteMap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FormRouteMap`.
     * @returns A builder that constructs instances of entity type `FormRouteMap`.
     */
    FormRouteMap.builder = function () {
        return core_1.Entity.entityBuilder(FormRouteMap);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FormRouteMap` entity type.
     * @returns A `FormRouteMap` request builder.
     */
    FormRouteMap.requestBuilder = function () {
        return new FormRouteMapRequestBuilder_1.FormRouteMapRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormRouteMap`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormRouteMap`.
     */
    FormRouteMap.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FormRouteMap);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FormRouteMap.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FormRouteMap.
     */
    FormRouteMap._entityName = 'FormRouteMap';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormRouteMap.
     */
    FormRouteMap._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FormRouteMap._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FormRouteMap;
}(core_1.Entity));
exports.FormRouteMap = FormRouteMap;
var FormRouteStep_1 = require("./FormRouteStep");
(function (FormRouteMap) {
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormRouteMap.FORM_DATA_ID = new core_1.BigNumberField('formDataId', FormRouteMap, 'Edm.Int64');
    /**
     * Static representation of the [[routeId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormRouteMap.ROUTE_ID = new core_1.NumberField('routeId', FormRouteMap, 'Edm.Int32');
    /**
     * Static representation of the [[routeName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormRouteMap.ROUTE_NAME = new core_1.StringField('routeName', FormRouteMap, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[routeStep]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormRouteMap.ROUTE_STEP = new core_1.Link('routeStep', FormRouteMap, FormRouteStep_1.FormRouteStep);
    /**
     * All fields of the FormRouteMap entity.
     */
    FormRouteMap._allFields = [
        FormRouteMap.FORM_DATA_ID,
        FormRouteMap.ROUTE_ID,
        FormRouteMap.ROUTE_NAME,
        FormRouteMap.ROUTE_STEP
    ];
    /**
     * All fields selector.
     */
    FormRouteMap.ALL_FIELDS = new core_1.AllFields('*', FormRouteMap);
    /**
     * All key fields of the FormRouteMap entity.
     */
    FormRouteMap._keyFields = [FormRouteMap.FORM_DATA_ID];
    /**
     * Mapping of all key field names to the respective static field property FormRouteMap.
     */
    FormRouteMap._keys = FormRouteMap._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FormRouteMap = exports.FormRouteMap || (exports.FormRouteMap = {}));
exports.FormRouteMap = FormRouteMap;
//# sourceMappingURL=FormRouteMap.js.map