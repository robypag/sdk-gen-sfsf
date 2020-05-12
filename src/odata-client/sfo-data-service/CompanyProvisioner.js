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
var CompanyProvisionerRequestBuilder_1 = require("./CompanyProvisionerRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "CompanyProvisioner" of service "SFOData".
 */
var CompanyProvisioner = /** @class */ (function (_super) {
    __extends(CompanyProvisioner, _super);
    function CompanyProvisioner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `CompanyProvisioner`.
     * @returns A builder that constructs instances of entity type `CompanyProvisioner`.
     */
    CompanyProvisioner.builder = function () {
        return core_1.Entity.entityBuilder(CompanyProvisioner);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CompanyProvisioner` entity type.
     * @returns A `CompanyProvisioner` request builder.
     */
    CompanyProvisioner.requestBuilder = function () {
        return new CompanyProvisionerRequestBuilder_1.CompanyProvisionerRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CompanyProvisioner`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CompanyProvisioner`.
     */
    CompanyProvisioner.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, CompanyProvisioner);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CompanyProvisioner.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CompanyProvisioner.
     */
    CompanyProvisioner._entityName = 'CompanyProvisioner';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CompanyProvisioner.
     */
    CompanyProvisioner._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    CompanyProvisioner._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return CompanyProvisioner;
}(core_1.Entity));
exports.CompanyProvisioner = CompanyProvisioner;
(function (CompanyProvisioner) {
    /**
     * Static representation of the [[createdAdminAccountNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompanyProvisioner.CREATED_ADMIN_ACCOUNT_NUMBER = new core_1.NumberField('createdAdminAccountNumber', CompanyProvisioner, 'Edm.Int32');
    /**
     * Static representation of the [[email]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompanyProvisioner.EMAIL = new core_1.StringField('email', CompanyProvisioner, 'Edm.String');
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompanyProvisioner.ID = new core_1.StringField('id', CompanyProvisioner, 'Edm.String');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompanyProvisioner.NAME = new core_1.StringField('name', CompanyProvisioner, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompanyProvisioner.STATUS = new core_1.StringField('status', CompanyProvisioner, 'Edm.String');
    /**
     * All fields of the CompanyProvisioner entity.
     */
    CompanyProvisioner._allFields = [
        CompanyProvisioner.CREATED_ADMIN_ACCOUNT_NUMBER,
        CompanyProvisioner.EMAIL,
        CompanyProvisioner.ID,
        CompanyProvisioner.NAME,
        CompanyProvisioner.STATUS
    ];
    /**
     * All fields selector.
     */
    CompanyProvisioner.ALL_FIELDS = new core_1.AllFields('*', CompanyProvisioner);
    /**
     * All key fields of the CompanyProvisioner entity.
     */
    CompanyProvisioner._keyFields = [CompanyProvisioner.ID];
    /**
     * Mapping of all key field names to the respective static field property CompanyProvisioner.
     */
    CompanyProvisioner._keys = CompanyProvisioner._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CompanyProvisioner = exports.CompanyProvisioner || (exports.CompanyProvisioner = {}));
exports.CompanyProvisioner = CompanyProvisioner;
//# sourceMappingURL=CompanyProvisioner.js.map