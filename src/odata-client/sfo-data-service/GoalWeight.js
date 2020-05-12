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
var GoalWeightRequestBuilder_1 = require("./GoalWeightRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "GoalWeight" of service "SFOData".
 */
var GoalWeight = /** @class */ (function (_super) {
    __extends(GoalWeight, _super);
    function GoalWeight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `GoalWeight`.
     * @returns A builder that constructs instances of entity type `GoalWeight`.
     */
    GoalWeight.builder = function () {
        return core_1.Entity.entityBuilder(GoalWeight);
    };
    /**
     * Returns a request builder to construct requests for operations on the `GoalWeight` entity type.
     * @returns A `GoalWeight` request builder.
     */
    GoalWeight.requestBuilder = function () {
        return new GoalWeightRequestBuilder_1.GoalWeightRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `GoalWeight`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `GoalWeight`.
     */
    GoalWeight.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, GoalWeight);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    GoalWeight.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for GoalWeight.
     */
    GoalWeight._entityName = 'GoalWeight';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for GoalWeight.
     */
    GoalWeight._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    GoalWeight._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return GoalWeight;
}(core_1.Entity));
exports.GoalWeight = GoalWeight;
(function (GoalWeight) {
    /**
     * Static representation of the [[maxValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalWeight.MAX_VALUE = new core_1.NumberField('maxValue', GoalWeight, 'Edm.Double');
    /**
     * Static representation of the [[minValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalWeight.MIN_VALUE = new core_1.NumberField('minValue', GoalWeight, 'Edm.Double');
    /**
     * Static representation of the [[planId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalWeight.PLAN_ID = new core_1.BigNumberField('planId', GoalWeight, 'Edm.Int64');
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalWeight.TYPE = new core_1.StringField('type', GoalWeight, 'Edm.String');
    /**
     * All fields of the GoalWeight entity.
     */
    GoalWeight._allFields = [
        GoalWeight.MAX_VALUE,
        GoalWeight.MIN_VALUE,
        GoalWeight.PLAN_ID,
        GoalWeight.TYPE
    ];
    /**
     * All fields selector.
     */
    GoalWeight.ALL_FIELDS = new core_1.AllFields('*', GoalWeight);
    /**
     * All key fields of the GoalWeight entity.
     */
    GoalWeight._keyFields = [GoalWeight.PLAN_ID, GoalWeight.TYPE];
    /**
     * Mapping of all key field names to the respective static field property GoalWeight.
     */
    GoalWeight._keys = GoalWeight._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(GoalWeight = exports.GoalWeight || (exports.GoalWeight = {}));
exports.GoalWeight = GoalWeight;
//# sourceMappingURL=GoalWeight.js.map