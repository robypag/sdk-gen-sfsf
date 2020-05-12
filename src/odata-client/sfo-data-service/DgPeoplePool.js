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
var DgPeoplePoolRequestBuilder_1 = require("./DgPeoplePoolRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "DGPeoplePool" of service "SFOData".
 */
var DgPeoplePool = /** @class */ (function (_super) {
    __extends(DgPeoplePool, _super);
    function DgPeoplePool() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `DgPeoplePool`.
     * @returns A builder that constructs instances of entity type `DgPeoplePool`.
     */
    DgPeoplePool.builder = function () {
        return core_1.Entity.entityBuilder(DgPeoplePool);
    };
    /**
     * Returns a request builder to construct requests for operations on the `DgPeoplePool` entity type.
     * @returns A `DgPeoplePool` request builder.
     */
    DgPeoplePool.requestBuilder = function () {
        return new DgPeoplePoolRequestBuilder_1.DgPeoplePoolRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DgPeoplePool`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DgPeoplePool`.
     */
    DgPeoplePool.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, DgPeoplePool);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    DgPeoplePool.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for DgPeoplePool.
     */
    DgPeoplePool._entityName = 'DGPeoplePool';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DgPeoplePool.
     */
    DgPeoplePool._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    DgPeoplePool._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return DgPeoplePool;
}(core_1.Entity));
exports.DgPeoplePool = DgPeoplePool;
var DgFilter_1 = require("./DgFilter");
(function (DgPeoplePool) {
    /**
     * Static representation of the [[peoplePoolId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DgPeoplePool.PEOPLE_POOL_ID = new core_1.StringField('peoplePoolId', DgPeoplePool, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[filters]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DgPeoplePool.FILTERS = new core_1.Link('filters', DgPeoplePool, DgFilter_1.DgFilter);
    /**
     * All fields of the DgPeoplePool entity.
     */
    DgPeoplePool._allFields = [
        DgPeoplePool.PEOPLE_POOL_ID,
        DgPeoplePool.FILTERS
    ];
    /**
     * All fields selector.
     */
    DgPeoplePool.ALL_FIELDS = new core_1.AllFields('*', DgPeoplePool);
    /**
     * All key fields of the DgPeoplePool entity.
     */
    DgPeoplePool._keyFields = [DgPeoplePool.PEOPLE_POOL_ID];
    /**
     * Mapping of all key field names to the respective static field property DgPeoplePool.
     */
    DgPeoplePool._keys = DgPeoplePool._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(DgPeoplePool = exports.DgPeoplePool || (exports.DgPeoplePool = {}));
exports.DgPeoplePool = DgPeoplePool;
//# sourceMappingURL=DgPeoplePool.js.map