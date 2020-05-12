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
var DevGoalPermission_2005RequestBuilder_1 = require("./DevGoalPermission_2005RequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "DevGoalPermission_2005" of service "SFOData".
 */
var DevGoalPermission_2005 = /** @class */ (function (_super) {
    __extends(DevGoalPermission_2005, _super);
    function DevGoalPermission_2005() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `DevGoalPermission_2005`.
     * @returns A builder that constructs instances of entity type `DevGoalPermission_2005`.
     */
    DevGoalPermission_2005.builder = function () {
        return core_1.Entity.entityBuilder(DevGoalPermission_2005);
    };
    /**
     * Returns a request builder to construct requests for operations on the `DevGoalPermission_2005` entity type.
     * @returns A `DevGoalPermission_2005` request builder.
     */
    DevGoalPermission_2005.requestBuilder = function () {
        return new DevGoalPermission_2005RequestBuilder_1.DevGoalPermission_2005RequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DevGoalPermission_2005`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DevGoalPermission_2005`.
     */
    DevGoalPermission_2005.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, DevGoalPermission_2005);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    DevGoalPermission_2005.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for DevGoalPermission_2005.
     */
    DevGoalPermission_2005._entityName = 'DevGoalPermission_2005';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DevGoalPermission_2005.
     */
    DevGoalPermission_2005._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    DevGoalPermission_2005._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return DevGoalPermission_2005;
}(core_1.Entity));
exports.DevGoalPermission_2005 = DevGoalPermission_2005;
(function (DevGoalPermission_2005) {
    /**
     * Static representation of the [[category]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalPermission_2005.CATEGORY = new core_1.NumberField('category', DevGoalPermission_2005, 'Edm.Byte');
    /**
     * Static representation of the [[competency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalPermission_2005.COMPETENCY = new core_1.NumberField('competency', DevGoalPermission_2005, 'Edm.Byte');
    /**
     * Static representation of the [[create]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalPermission_2005.CREATE = new core_1.BooleanField('create', DevGoalPermission_2005, 'Edm.Boolean');
    /**
     * Static representation of the [[delete]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalPermission_2005.DELETE = new core_1.BooleanField('delete', DevGoalPermission_2005, 'Edm.Boolean');
    /**
     * Static representation of the [[due]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalPermission_2005.DUE = new core_1.NumberField('due', DevGoalPermission_2005, 'Edm.Byte');
    /**
     * Static representation of the [[edit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalPermission_2005.EDIT = new core_1.BooleanField('edit', DevGoalPermission_2005, 'Edm.Boolean');
    /**
     * Static representation of the [[flag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalPermission_2005.FLAG = new core_1.NumberField('flag', DevGoalPermission_2005, 'Edm.Int32');
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalPermission_2005.ID = new core_1.BigNumberField('id', DevGoalPermission_2005, 'Edm.Int64');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalPermission_2005.NAME = new core_1.NumberField('name', DevGoalPermission_2005, 'Edm.Byte');
    /**
     * Static representation of the [[privateAccess]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalPermission_2005.PRIVATE_ACCESS = new core_1.BooleanField('privateAccess', DevGoalPermission_2005, 'Edm.Boolean');
    /**
     * Static representation of the [[purpose]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalPermission_2005.PURPOSE = new core_1.NumberField('purpose', DevGoalPermission_2005, 'Edm.Byte');
    /**
     * Static representation of the [[start]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalPermission_2005.START = new core_1.NumberField('start', DevGoalPermission_2005, 'Edm.Byte');
    /**
     * Static representation of the [[state]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalPermission_2005.STATE = new core_1.NumberField('state', DevGoalPermission_2005, 'Edm.Byte');
    /**
     * Static representation of the [[tasks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalPermission_2005.TASKS = new core_1.NumberField('tasks', DevGoalPermission_2005, 'Edm.Byte');
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalPermission_2005.TYPE = new core_1.StringField('type', DevGoalPermission_2005, 'Edm.String');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalPermission_2005.USER_ID = new core_1.StringField('userId', DevGoalPermission_2005, 'Edm.String');
    /**
     * Static representation of the [[view]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalPermission_2005.VIEW = new core_1.BooleanField('view', DevGoalPermission_2005, 'Edm.Boolean');
    /**
     * All fields of the DevGoalPermission_2005 entity.
     */
    DevGoalPermission_2005._allFields = [
        DevGoalPermission_2005.CATEGORY,
        DevGoalPermission_2005.COMPETENCY,
        DevGoalPermission_2005.CREATE,
        DevGoalPermission_2005.DELETE,
        DevGoalPermission_2005.DUE,
        DevGoalPermission_2005.EDIT,
        DevGoalPermission_2005.FLAG,
        DevGoalPermission_2005.ID,
        DevGoalPermission_2005.NAME,
        DevGoalPermission_2005.PRIVATE_ACCESS,
        DevGoalPermission_2005.PURPOSE,
        DevGoalPermission_2005.START,
        DevGoalPermission_2005.STATE,
        DevGoalPermission_2005.TASKS,
        DevGoalPermission_2005.TYPE,
        DevGoalPermission_2005.USER_ID,
        DevGoalPermission_2005.VIEW
    ];
    /**
     * All fields selector.
     */
    DevGoalPermission_2005.ALL_FIELDS = new core_1.AllFields('*', DevGoalPermission_2005);
    /**
     * All key fields of the DevGoalPermission_2005 entity.
     */
    DevGoalPermission_2005._keyFields = [DevGoalPermission_2005.ID];
    /**
     * Mapping of all key field names to the respective static field property DevGoalPermission_2005.
     */
    DevGoalPermission_2005._keys = DevGoalPermission_2005._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(DevGoalPermission_2005 = exports.DevGoalPermission_2005 || (exports.DevGoalPermission_2005 = {}));
exports.DevGoalPermission_2005 = DevGoalPermission_2005;
//# sourceMappingURL=DevGoalPermission_2005.js.map