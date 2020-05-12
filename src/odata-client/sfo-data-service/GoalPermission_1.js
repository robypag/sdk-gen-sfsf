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
var GoalPermission_1RequestBuilder_1 = require("./GoalPermission_1RequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "GoalPermission_1" of service "SFOData".
 */
var GoalPermission_1 = /** @class */ (function (_super) {
    __extends(GoalPermission_1, _super);
    function GoalPermission_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `GoalPermission_1`.
     * @returns A builder that constructs instances of entity type `GoalPermission_1`.
     */
    GoalPermission_1.builder = function () {
        return core_1.Entity.entityBuilder(GoalPermission_1);
    };
    /**
     * Returns a request builder to construct requests for operations on the `GoalPermission_1` entity type.
     * @returns A `GoalPermission_1` request builder.
     */
    GoalPermission_1.requestBuilder = function () {
        return new GoalPermission_1RequestBuilder_1.GoalPermission_1RequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `GoalPermission_1`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `GoalPermission_1`.
     */
    GoalPermission_1.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, GoalPermission_1);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    GoalPermission_1.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for GoalPermission_1.
     */
    GoalPermission_1._entityName = 'GoalPermission_1';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for GoalPermission_1.
     */
    GoalPermission_1._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    GoalPermission_1._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return GoalPermission_1;
}(core_1.Entity));
exports.GoalPermission_1 = GoalPermission_1;
(function (GoalPermission_1) {
    /**
     * Static representation of the [[category]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalPermission_1.CATEGORY = new core_1.NumberField('category', GoalPermission_1, 'Edm.Byte');
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalPermission_1.COMMENTS = new core_1.NumberField('comments', GoalPermission_1, 'Edm.Byte');
    /**
     * Static representation of the [[create]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalPermission_1.CREATE = new core_1.BooleanField('create', GoalPermission_1, 'Edm.Boolean');
    /**
     * Static representation of the [[delete]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalPermission_1.DELETE = new core_1.BooleanField('delete', GoalPermission_1, 'Edm.Boolean');
    /**
     * Static representation of the [[due]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalPermission_1.DUE = new core_1.NumberField('due', GoalPermission_1, 'Edm.Byte');
    /**
     * Static representation of the [[edit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalPermission_1.EDIT = new core_1.BooleanField('edit', GoalPermission_1, 'Edm.Boolean');
    /**
     * Static representation of the [[flag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalPermission_1.FLAG = new core_1.NumberField('flag', GoalPermission_1, 'Edm.Int32');
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalPermission_1.ID = new core_1.BigNumberField('id', GoalPermission_1, 'Edm.Int64');
    /**
     * Static representation of the [[metric]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalPermission_1.METRIC = new core_1.NumberField('metric', GoalPermission_1, 'Edm.Byte');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalPermission_1.NAME = new core_1.NumberField('name', GoalPermission_1, 'Edm.Byte');
    /**
     * Static representation of the [[privateAccess]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalPermission_1.PRIVATE_ACCESS = new core_1.BooleanField('privateAccess', GoalPermission_1, 'Edm.Boolean');
    /**
     * Static representation of the [[start]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalPermission_1.START = new core_1.NumberField('start', GoalPermission_1, 'Edm.Byte');
    /**
     * Static representation of the [[state]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalPermission_1.STATE = new core_1.NumberField('state', GoalPermission_1, 'Edm.Byte');
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalPermission_1.TYPE = new core_1.StringField('type', GoalPermission_1, 'Edm.String');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalPermission_1.USER_ID = new core_1.StringField('userId', GoalPermission_1, 'Edm.String');
    /**
     * Static representation of the [[view]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalPermission_1.VIEW = new core_1.BooleanField('view', GoalPermission_1, 'Edm.Boolean');
    /**
     * Static representation of the [[weight]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalPermission_1.WEIGHT = new core_1.NumberField('weight', GoalPermission_1, 'Edm.Byte');
    /**
     * All fields of the GoalPermission_1 entity.
     */
    GoalPermission_1._allFields = [
        GoalPermission_1.CATEGORY,
        GoalPermission_1.COMMENTS,
        GoalPermission_1.CREATE,
        GoalPermission_1.DELETE,
        GoalPermission_1.DUE,
        GoalPermission_1.EDIT,
        GoalPermission_1.FLAG,
        GoalPermission_1.ID,
        GoalPermission_1.METRIC,
        GoalPermission_1.NAME,
        GoalPermission_1.PRIVATE_ACCESS,
        GoalPermission_1.START,
        GoalPermission_1.STATE,
        GoalPermission_1.TYPE,
        GoalPermission_1.USER_ID,
        GoalPermission_1.VIEW,
        GoalPermission_1.WEIGHT
    ];
    /**
     * All fields selector.
     */
    GoalPermission_1.ALL_FIELDS = new core_1.AllFields('*', GoalPermission_1);
    /**
     * All key fields of the GoalPermission_1 entity.
     */
    GoalPermission_1._keyFields = [GoalPermission_1.ID];
    /**
     * Mapping of all key field names to the respective static field property GoalPermission_1.
     */
    GoalPermission_1._keys = GoalPermission_1._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(GoalPermission_1 = exports.GoalPermission_1 || (exports.GoalPermission_1 = {}));
exports.GoalPermission_1 = GoalPermission_1;
//# sourceMappingURL=GoalPermission_1.js.map