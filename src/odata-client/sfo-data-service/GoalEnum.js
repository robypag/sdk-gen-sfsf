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
var GoalEnumRequestBuilder_1 = require("./GoalEnumRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "GoalEnum" of service "SFOData".
 */
var GoalEnum = /** @class */ (function (_super) {
    __extends(GoalEnum, _super);
    function GoalEnum() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `GoalEnum`.
     * @returns A builder that constructs instances of entity type `GoalEnum`.
     */
    GoalEnum.builder = function () {
        return core_1.Entity.entityBuilder(GoalEnum);
    };
    /**
     * Returns a request builder to construct requests for operations on the `GoalEnum` entity type.
     * @returns A `GoalEnum` request builder.
     */
    GoalEnum.requestBuilder = function () {
        return new GoalEnumRequestBuilder_1.GoalEnumRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `GoalEnum`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `GoalEnum`.
     */
    GoalEnum.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, GoalEnum);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    GoalEnum.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for GoalEnum.
     */
    GoalEnum._entityName = 'GoalEnum';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for GoalEnum.
     */
    GoalEnum._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    GoalEnum._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return GoalEnum;
}(core_1.Entity));
exports.GoalEnum = GoalEnum;
(function (GoalEnum) {
    /**
     * Static representation of the [[fieldId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalEnum.FIELD_ID = new core_1.StringField('fieldId', GoalEnum, 'Edm.String');
    /**
     * Static representation of the [[label]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalEnum.LABEL = new core_1.StringField('label', GoalEnum, 'Edm.String');
    /**
     * Static representation of the [[planId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalEnum.PLAN_ID = new core_1.BigNumberField('planId', GoalEnum, 'Edm.Int64');
    /**
     * Static representation of the [[value]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalEnum.VALUE = new core_1.StringField('value', GoalEnum, 'Edm.String');
    /**
     * All fields of the GoalEnum entity.
     */
    GoalEnum._allFields = [
        GoalEnum.FIELD_ID,
        GoalEnum.LABEL,
        GoalEnum.PLAN_ID,
        GoalEnum.VALUE
    ];
    /**
     * All fields selector.
     */
    GoalEnum.ALL_FIELDS = new core_1.AllFields('*', GoalEnum);
    /**
     * All key fields of the GoalEnum entity.
     */
    GoalEnum._keyFields = [GoalEnum.FIELD_ID, GoalEnum.PLAN_ID, GoalEnum.VALUE];
    /**
     * Mapping of all key field names to the respective static field property GoalEnum.
     */
    GoalEnum._keys = GoalEnum._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(GoalEnum = exports.GoalEnum || (exports.GoalEnum = {}));
exports.GoalEnum = GoalEnum;
//# sourceMappingURL=GoalEnum.js.map