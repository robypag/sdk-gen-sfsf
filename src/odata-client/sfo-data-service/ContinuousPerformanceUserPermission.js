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
var ContinuousPerformanceUserPermissionRequestBuilder_1 = require("./ContinuousPerformanceUserPermissionRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ContinuousPerformanceUserPermission" of service "SFOData".
 */
var ContinuousPerformanceUserPermission = /** @class */ (function (_super) {
    __extends(ContinuousPerformanceUserPermission, _super);
    function ContinuousPerformanceUserPermission() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `ContinuousPerformanceUserPermission`.
     * @returns A builder that constructs instances of entity type `ContinuousPerformanceUserPermission`.
     */
    ContinuousPerformanceUserPermission.builder = function () {
        return core_1.Entity.entityBuilder(ContinuousPerformanceUserPermission);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ContinuousPerformanceUserPermission` entity type.
     * @returns A `ContinuousPerformanceUserPermission` request builder.
     */
    ContinuousPerformanceUserPermission.requestBuilder = function () {
        return new ContinuousPerformanceUserPermissionRequestBuilder_1.ContinuousPerformanceUserPermissionRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ContinuousPerformanceUserPermission`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ContinuousPerformanceUserPermission`.
     */
    ContinuousPerformanceUserPermission.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, ContinuousPerformanceUserPermission);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ContinuousPerformanceUserPermission.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ContinuousPerformanceUserPermission.
     */
    ContinuousPerformanceUserPermission._entityName = 'ContinuousPerformanceUserPermission';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ContinuousPerformanceUserPermission.
     */
    ContinuousPerformanceUserPermission._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    ContinuousPerformanceUserPermission._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return ContinuousPerformanceUserPermission;
}(core_1.Entity));
exports.ContinuousPerformanceUserPermission = ContinuousPerformanceUserPermission;
(function (ContinuousPerformanceUserPermission) {
    /**
     * Static representation of the [[hasPermission]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContinuousPerformanceUserPermission.HAS_PERMISSION = new core_1.BooleanField('hasPermission', ContinuousPerformanceUserPermission, 'Edm.Boolean');
    /**
     * Static representation of the [[permStringValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContinuousPerformanceUserPermission.PERM_STRING_VALUE = new core_1.StringField('permStringValue', ContinuousPerformanceUserPermission, 'Edm.String');
    /**
     * Static representation of the [[permType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContinuousPerformanceUserPermission.PERM_TYPE = new core_1.StringField('permType', ContinuousPerformanceUserPermission, 'Edm.String');
    /**
     * Static representation of the [[targetUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContinuousPerformanceUserPermission.TARGET_USER_ID = new core_1.StringField('targetUserId', ContinuousPerformanceUserPermission, 'Edm.String');
    /**
     * All fields of the ContinuousPerformanceUserPermission entity.
     */
    ContinuousPerformanceUserPermission._allFields = [
        ContinuousPerformanceUserPermission.HAS_PERMISSION,
        ContinuousPerformanceUserPermission.PERM_STRING_VALUE,
        ContinuousPerformanceUserPermission.PERM_TYPE,
        ContinuousPerformanceUserPermission.TARGET_USER_ID
    ];
    /**
     * All fields selector.
     */
    ContinuousPerformanceUserPermission.ALL_FIELDS = new core_1.AllFields('*', ContinuousPerformanceUserPermission);
    /**
     * All key fields of the ContinuousPerformanceUserPermission entity.
     */
    ContinuousPerformanceUserPermission._keyFields = [ContinuousPerformanceUserPermission.PERM_STRING_VALUE, ContinuousPerformanceUserPermission.PERM_TYPE, ContinuousPerformanceUserPermission.TARGET_USER_ID];
    /**
     * Mapping of all key field names to the respective static field property ContinuousPerformanceUserPermission.
     */
    ContinuousPerformanceUserPermission._keys = ContinuousPerformanceUserPermission._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ContinuousPerformanceUserPermission = exports.ContinuousPerformanceUserPermission || (exports.ContinuousPerformanceUserPermission = {}));
exports.ContinuousPerformanceUserPermission = ContinuousPerformanceUserPermission;
//# sourceMappingURL=ContinuousPerformanceUserPermission.js.map