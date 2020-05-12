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
var TerritoryRequestBuilder_1 = require("./TerritoryRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Territory" of service "SFOData".
 */
var Territory = /** @class */ (function (_super) {
    __extends(Territory, _super);
    function Territory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Territory`.
     * @returns A builder that constructs instances of entity type `Territory`.
     */
    Territory.builder = function () {
        return core_1.Entity.entityBuilder(Territory);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Territory` entity type.
     * @returns A `Territory` request builder.
     */
    Territory.requestBuilder = function () {
        return new TerritoryRequestBuilder_1.TerritoryRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Territory`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Territory`.
     */
    Territory.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Territory);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Territory.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Territory.
     */
    Territory._entityName = 'Territory';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Territory.
     */
    Territory._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Territory._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Territory;
}(core_1.Entity));
exports.Territory = Territory;
(function (Territory) {
    /**
     * Static representation of the [[territoryCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Territory.TERRITORY_CODE = new core_1.StringField('territoryCode', Territory, 'Edm.String');
    /**
     * Static representation of the [[territoryName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Territory.TERRITORY_NAME = new core_1.StringField('territoryName', Territory, 'Edm.String');
    /**
     * All fields of the Territory entity.
     */
    Territory._allFields = [
        Territory.TERRITORY_CODE,
        Territory.TERRITORY_NAME
    ];
    /**
     * All fields selector.
     */
    Territory.ALL_FIELDS = new core_1.AllFields('*', Territory);
    /**
     * All key fields of the Territory entity.
     */
    Territory._keyFields = [Territory.TERRITORY_CODE];
    /**
     * Mapping of all key field names to the respective static field property Territory.
     */
    Territory._keys = Territory._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Territory = exports.Territory || (exports.Territory = {}));
exports.Territory = Territory;
//# sourceMappingURL=Territory.js.map