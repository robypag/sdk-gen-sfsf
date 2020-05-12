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
var RbpRoleRequestBuilder_1 = require("./RbpRoleRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "RBPRole" of service "SFOData".
 */
var RbpRole = /** @class */ (function (_super) {
    __extends(RbpRole, _super);
    function RbpRole() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `RbpRole`.
     * @returns A builder that constructs instances of entity type `RbpRole`.
     */
    RbpRole.builder = function () {
        return core_1.Entity.entityBuilder(RbpRole);
    };
    /**
     * Returns a request builder to construct requests for operations on the `RbpRole` entity type.
     * @returns A `RbpRole` request builder.
     */
    RbpRole.requestBuilder = function () {
        return new RbpRoleRequestBuilder_1.RbpRoleRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `RbpRole`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `RbpRole`.
     */
    RbpRole.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, RbpRole);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    RbpRole.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for RbpRole.
     */
    RbpRole._entityName = 'RBPRole';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for RbpRole.
     */
    RbpRole._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    RbpRole._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return RbpRole;
}(core_1.Entity));
exports.RbpRole = RbpRole;
var RbpBasicPermission_1 = require("./RbpBasicPermission");
var RbpRule_1 = require("./RbpRule");
(function (RbpRole) {
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RbpRole.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', RbpRole, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RbpRole.LAST_MODIFIED_DATE = new core_1.DateField('lastModifiedDate', RbpRole, 'Edm.DateTime');
    /**
     * Static representation of the [[roleDesc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RbpRole.ROLE_DESC = new core_1.StringField('roleDesc', RbpRole, 'Edm.String');
    /**
     * Static representation of the [[roleId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RbpRole.ROLE_ID = new core_1.BigNumberField('roleId', RbpRole, 'Edm.Int64');
    /**
     * Static representation of the [[roleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RbpRole.ROLE_NAME = new core_1.StringField('roleName', RbpRole, 'Edm.String');
    /**
     * Static representation of the [[userType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RbpRole.USER_TYPE = new core_1.StringField('userType', RbpRole, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[permissions]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RbpRole.PERMISSIONS = new core_1.Link('permissions', RbpRole, RbpBasicPermission_1.RbpBasicPermission);
    /**
     * Static representation of the one-to-many navigation property [[rules]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RbpRole.RULES = new core_1.Link('rules', RbpRole, RbpRule_1.RbpRule);
    /**
     * All fields of the RbpRole entity.
     */
    RbpRole._allFields = [
        RbpRole.LAST_MODIFIED_BY,
        RbpRole.LAST_MODIFIED_DATE,
        RbpRole.ROLE_DESC,
        RbpRole.ROLE_ID,
        RbpRole.ROLE_NAME,
        RbpRole.USER_TYPE,
        RbpRole.PERMISSIONS,
        RbpRole.RULES
    ];
    /**
     * All fields selector.
     */
    RbpRole.ALL_FIELDS = new core_1.AllFields('*', RbpRole);
    /**
     * All key fields of the RbpRole entity.
     */
    RbpRole._keyFields = [RbpRole.ROLE_ID];
    /**
     * Mapping of all key field names to the respective static field property RbpRole.
     */
    RbpRole._keys = RbpRole._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(RbpRole = exports.RbpRole || (exports.RbpRole = {}));
exports.RbpRole = RbpRole;
//# sourceMappingURL=RbpRole.js.map