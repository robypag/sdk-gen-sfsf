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
var SimpleGoalRequestBuilder_1 = require("./SimpleGoalRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "SimpleGoal" of service "SFOData".
 */
var SimpleGoal = /** @class */ (function (_super) {
    __extends(SimpleGoal, _super);
    function SimpleGoal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `SimpleGoal`.
     * @returns A builder that constructs instances of entity type `SimpleGoal`.
     */
    SimpleGoal.builder = function () {
        return core_1.Entity.entityBuilder(SimpleGoal);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SimpleGoal` entity type.
     * @returns A `SimpleGoal` request builder.
     */
    SimpleGoal.requestBuilder = function () {
        return new SimpleGoalRequestBuilder_1.SimpleGoalRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SimpleGoal`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SimpleGoal`.
     */
    SimpleGoal.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, SimpleGoal);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SimpleGoal.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SimpleGoal.
     */
    SimpleGoal._entityName = 'SimpleGoal';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SimpleGoal.
     */
    SimpleGoal._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    SimpleGoal._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return SimpleGoal;
}(core_1.Entity));
exports.SimpleGoal = SimpleGoal;
(function (SimpleGoal) {
    /**
     * Static representation of the [[flag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SimpleGoal.FLAG = new core_1.NumberField('flag', SimpleGoal, 'Edm.Int32');
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SimpleGoal.ID = new core_1.BigNumberField('id', SimpleGoal, 'Edm.Int64');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SimpleGoal.NAME = new core_1.StringField('name', SimpleGoal, 'Edm.String');
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SimpleGoal.TYPE = new core_1.StringField('type', SimpleGoal, 'Edm.String');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SimpleGoal.USER_ID = new core_1.StringField('userId', SimpleGoal, 'Edm.String');
    /**
     * All fields of the SimpleGoal entity.
     */
    SimpleGoal._allFields = [
        SimpleGoal.FLAG,
        SimpleGoal.ID,
        SimpleGoal.NAME,
        SimpleGoal.TYPE,
        SimpleGoal.USER_ID
    ];
    /**
     * All fields selector.
     */
    SimpleGoal.ALL_FIELDS = new core_1.AllFields('*', SimpleGoal);
    /**
     * All key fields of the SimpleGoal entity.
     */
    SimpleGoal._keyFields = [SimpleGoal.ID];
    /**
     * Mapping of all key field names to the respective static field property SimpleGoal.
     */
    SimpleGoal._keys = SimpleGoal._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SimpleGoal = exports.SimpleGoal || (exports.SimpleGoal = {}));
exports.SimpleGoal = SimpleGoal;
//# sourceMappingURL=SimpleGoal.js.map