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
var DevGoalEnumRequestBuilder_1 = require("./DevGoalEnumRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "DevGoalEnum" of service "SFOData".
 */
var DevGoalEnum = /** @class */ (function (_super) {
    __extends(DevGoalEnum, _super);
    function DevGoalEnum() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `DevGoalEnum`.
     * @returns A builder that constructs instances of entity type `DevGoalEnum`.
     */
    DevGoalEnum.builder = function () {
        return core_1.Entity.entityBuilder(DevGoalEnum);
    };
    /**
     * Returns a request builder to construct requests for operations on the `DevGoalEnum` entity type.
     * @returns A `DevGoalEnum` request builder.
     */
    DevGoalEnum.requestBuilder = function () {
        return new DevGoalEnumRequestBuilder_1.DevGoalEnumRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DevGoalEnum`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DevGoalEnum`.
     */
    DevGoalEnum.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, DevGoalEnum);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    DevGoalEnum.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for DevGoalEnum.
     */
    DevGoalEnum._entityName = 'DevGoalEnum';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DevGoalEnum.
     */
    DevGoalEnum._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    DevGoalEnum._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return DevGoalEnum;
}(core_1.Entity));
exports.DevGoalEnum = DevGoalEnum;
(function (DevGoalEnum) {
    /**
     * Static representation of the [[fieldId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalEnum.FIELD_ID = new core_1.StringField('fieldId', DevGoalEnum, 'Edm.String');
    /**
     * Static representation of the [[label]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalEnum.LABEL = new core_1.StringField('label', DevGoalEnum, 'Edm.String');
    /**
     * Static representation of the [[planId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalEnum.PLAN_ID = new core_1.BigNumberField('planId', DevGoalEnum, 'Edm.Int64');
    /**
     * Static representation of the [[value]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalEnum.VALUE = new core_1.StringField('value', DevGoalEnum, 'Edm.String');
    /**
     * All fields of the DevGoalEnum entity.
     */
    DevGoalEnum._allFields = [
        DevGoalEnum.FIELD_ID,
        DevGoalEnum.LABEL,
        DevGoalEnum.PLAN_ID,
        DevGoalEnum.VALUE
    ];
    /**
     * All fields selector.
     */
    DevGoalEnum.ALL_FIELDS = new core_1.AllFields('*', DevGoalEnum);
    /**
     * All key fields of the DevGoalEnum entity.
     */
    DevGoalEnum._keyFields = [DevGoalEnum.FIELD_ID, DevGoalEnum.PLAN_ID, DevGoalEnum.VALUE];
    /**
     * Mapping of all key field names to the respective static field property DevGoalEnum.
     */
    DevGoalEnum._keys = DevGoalEnum._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(DevGoalEnum = exports.DevGoalEnum || (exports.DevGoalEnum = {}));
exports.DevGoalEnum = DevGoalEnum;
//# sourceMappingURL=DevGoalEnum.js.map