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
var RbpBasicPermissionRequestBuilder_1 = require("./RbpBasicPermissionRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "RBPBasicPermission" of service "SFOData".
 */
var RbpBasicPermission = /** @class */ (function (_super) {
    __extends(RbpBasicPermission, _super);
    function RbpBasicPermission() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `RbpBasicPermission`.
     * @returns A builder that constructs instances of entity type `RbpBasicPermission`.
     */
    RbpBasicPermission.builder = function () {
        return core_1.Entity.entityBuilder(RbpBasicPermission);
    };
    /**
     * Returns a request builder to construct requests for operations on the `RbpBasicPermission` entity type.
     * @returns A `RbpBasicPermission` request builder.
     */
    RbpBasicPermission.requestBuilder = function () {
        return new RbpBasicPermissionRequestBuilder_1.RbpBasicPermissionRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `RbpBasicPermission`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `RbpBasicPermission`.
     */
    RbpBasicPermission.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, RbpBasicPermission);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    RbpBasicPermission.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for RbpBasicPermission.
     */
    RbpBasicPermission._entityName = 'RBPBasicPermission';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for RbpBasicPermission.
     */
    RbpBasicPermission._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    RbpBasicPermission._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return RbpBasicPermission;
}(core_1.Entity));
exports.RbpBasicPermission = RbpBasicPermission;
(function (RbpBasicPermission) {
    /**
     * Static representation of the [[permissionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RbpBasicPermission.PERMISSION_ID = new core_1.BigNumberField('permissionId', RbpBasicPermission, 'Edm.Int64');
    /**
     * Static representation of the [[permissionLongValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RbpBasicPermission.PERMISSION_LONG_VALUE = new core_1.BigNumberField('permissionLongValue', RbpBasicPermission, 'Edm.Int64');
    /**
     * Static representation of the [[permissionStringValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RbpBasicPermission.PERMISSION_STRING_VALUE = new core_1.StringField('permissionStringValue', RbpBasicPermission, 'Edm.String');
    /**
     * Static representation of the [[permissionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RbpBasicPermission.PERMISSION_TYPE = new core_1.StringField('permissionType', RbpBasicPermission, 'Edm.String');
    /**
     * All fields of the RbpBasicPermission entity.
     */
    RbpBasicPermission._allFields = [
        RbpBasicPermission.PERMISSION_ID,
        RbpBasicPermission.PERMISSION_LONG_VALUE,
        RbpBasicPermission.PERMISSION_STRING_VALUE,
        RbpBasicPermission.PERMISSION_TYPE
    ];
    /**
     * All fields selector.
     */
    RbpBasicPermission.ALL_FIELDS = new core_1.AllFields('*', RbpBasicPermission);
    /**
     * All key fields of the RbpBasicPermission entity.
     */
    RbpBasicPermission._keyFields = [RbpBasicPermission.PERMISSION_ID];
    /**
     * Mapping of all key field names to the respective static field property RbpBasicPermission.
     */
    RbpBasicPermission._keys = RbpBasicPermission._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(RbpBasicPermission = exports.RbpBasicPermission || (exports.RbpBasicPermission = {}));
exports.RbpBasicPermission = RbpBasicPermission;
//# sourceMappingURL=RbpBasicPermission.js.map