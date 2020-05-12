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
var SimpleDevGoalRequestBuilder_1 = require("./SimpleDevGoalRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "SimpleDevGoal" of service "SFOData".
 */
var SimpleDevGoal = /** @class */ (function (_super) {
    __extends(SimpleDevGoal, _super);
    function SimpleDevGoal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `SimpleDevGoal`.
     * @returns A builder that constructs instances of entity type `SimpleDevGoal`.
     */
    SimpleDevGoal.builder = function () {
        return core_1.Entity.entityBuilder(SimpleDevGoal);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SimpleDevGoal` entity type.
     * @returns A `SimpleDevGoal` request builder.
     */
    SimpleDevGoal.requestBuilder = function () {
        return new SimpleDevGoalRequestBuilder_1.SimpleDevGoalRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SimpleDevGoal`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SimpleDevGoal`.
     */
    SimpleDevGoal.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, SimpleDevGoal);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SimpleDevGoal.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SimpleDevGoal.
     */
    SimpleDevGoal._entityName = 'SimpleDevGoal';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SimpleDevGoal.
     */
    SimpleDevGoal._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    SimpleDevGoal._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return SimpleDevGoal;
}(core_1.Entity));
exports.SimpleDevGoal = SimpleDevGoal;
var User_1 = require("./User");
(function (SimpleDevGoal) {
    /**
     * Static representation of the [[flag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SimpleDevGoal.FLAG = new core_1.NumberField('flag', SimpleDevGoal, 'Edm.Int32');
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SimpleDevGoal.ID = new core_1.BigNumberField('id', SimpleDevGoal, 'Edm.Int64');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SimpleDevGoal.NAME = new core_1.StringField('name', SimpleDevGoal, 'Edm.String');
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SimpleDevGoal.TYPE = new core_1.StringField('type', SimpleDevGoal, 'Edm.String');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SimpleDevGoal.USER_ID = new core_1.StringField('userId', SimpleDevGoal, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[simpleDevGoalUserIdNavigation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SimpleDevGoal.SIMPLE_DEV_GOAL_USER_ID_NAVIGATION = new core_1.OneToOneLink('simpleDevGoal_UserIdNavigation', SimpleDevGoal, User_1.User);
    /**
     * All fields of the SimpleDevGoal entity.
     */
    SimpleDevGoal._allFields = [
        SimpleDevGoal.FLAG,
        SimpleDevGoal.ID,
        SimpleDevGoal.NAME,
        SimpleDevGoal.TYPE,
        SimpleDevGoal.USER_ID,
        SimpleDevGoal.SIMPLE_DEV_GOAL_USER_ID_NAVIGATION
    ];
    /**
     * All fields selector.
     */
    SimpleDevGoal.ALL_FIELDS = new core_1.AllFields('*', SimpleDevGoal);
    /**
     * All key fields of the SimpleDevGoal entity.
     */
    SimpleDevGoal._keyFields = [SimpleDevGoal.ID];
    /**
     * Mapping of all key field names to the respective static field property SimpleDevGoal.
     */
    SimpleDevGoal._keys = SimpleDevGoal._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SimpleDevGoal = exports.SimpleDevGoal || (exports.SimpleDevGoal = {}));
exports.SimpleDevGoal = SimpleDevGoal;
//# sourceMappingURL=SimpleDevGoal.js.map