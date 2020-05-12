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
var FormJobRoleRequestBuilder_1 = require("./FormJobRoleRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FormJobRole" of service "SFOData".
 */
var FormJobRole = /** @class */ (function (_super) {
    __extends(FormJobRole, _super);
    function FormJobRole() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FormJobRole`.
     * @returns A builder that constructs instances of entity type `FormJobRole`.
     */
    FormJobRole.builder = function () {
        return core_1.Entity.entityBuilder(FormJobRole);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FormJobRole` entity type.
     * @returns A `FormJobRole` request builder.
     */
    FormJobRole.requestBuilder = function () {
        return new FormJobRoleRequestBuilder_1.FormJobRoleRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormJobRole`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormJobRole`.
     */
    FormJobRole.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FormJobRole);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FormJobRole.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FormJobRole.
     */
    FormJobRole._entityName = 'FormJobRole';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormJobRole.
     */
    FormJobRole._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FormJobRole._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FormJobRole;
}(core_1.Entity));
exports.FormJobRole = FormJobRole;
(function (FormJobRole) {
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormJobRole.FORM_CONTENT_ID = new core_1.BigNumberField('formContentId', FormJobRole, 'Edm.Int64');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormJobRole.FORM_DATA_ID = new core_1.BigNumberField('formDataId', FormJobRole, 'Edm.Int64');
    /**
     * Static representation of the [[order]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormJobRole.ORDER = new core_1.NumberField('order', FormJobRole, 'Edm.Int32');
    /**
     * Static representation of the [[roleDesc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormJobRole.ROLE_DESC = new core_1.StringField('roleDesc', FormJobRole, 'Edm.String');
    /**
     * Static representation of the [[roleId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormJobRole.ROLE_ID = new core_1.BigNumberField('roleId', FormJobRole, 'Edm.Int64');
    /**
     * Static representation of the [[roleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormJobRole.ROLE_NAME = new core_1.StringField('roleName', FormJobRole, 'Edm.String');
    /**
     * All fields of the FormJobRole entity.
     */
    FormJobRole._allFields = [
        FormJobRole.FORM_CONTENT_ID,
        FormJobRole.FORM_DATA_ID,
        FormJobRole.ORDER,
        FormJobRole.ROLE_DESC,
        FormJobRole.ROLE_ID,
        FormJobRole.ROLE_NAME
    ];
    /**
     * All fields selector.
     */
    FormJobRole.ALL_FIELDS = new core_1.AllFields('*', FormJobRole);
    /**
     * All key fields of the FormJobRole entity.
     */
    FormJobRole._keyFields = [FormJobRole.FORM_CONTENT_ID, FormJobRole.FORM_DATA_ID, FormJobRole.ROLE_ID];
    /**
     * Mapping of all key field names to the respective static field property FormJobRole.
     */
    FormJobRole._keys = FormJobRole._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FormJobRole = exports.FormJobRole || (exports.FormJobRole = {}));
exports.FormJobRole = FormJobRole;
//# sourceMappingURL=FormJobRole.js.map