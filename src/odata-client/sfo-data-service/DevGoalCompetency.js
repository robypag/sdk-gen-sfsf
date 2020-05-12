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
var DevGoalCompetencyRequestBuilder_1 = require("./DevGoalCompetencyRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "DevGoalCompetency" of service "SFOData".
 */
var DevGoalCompetency = /** @class */ (function (_super) {
    __extends(DevGoalCompetency, _super);
    function DevGoalCompetency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `DevGoalCompetency`.
     * @returns A builder that constructs instances of entity type `DevGoalCompetency`.
     */
    DevGoalCompetency.builder = function () {
        return core_1.Entity.entityBuilder(DevGoalCompetency);
    };
    /**
     * Returns a request builder to construct requests for operations on the `DevGoalCompetency` entity type.
     * @returns A `DevGoalCompetency` request builder.
     */
    DevGoalCompetency.requestBuilder = function () {
        return new DevGoalCompetencyRequestBuilder_1.DevGoalCompetencyRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DevGoalCompetency`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DevGoalCompetency`.
     */
    DevGoalCompetency.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, DevGoalCompetency);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    DevGoalCompetency.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for DevGoalCompetency.
     */
    DevGoalCompetency._entityName = 'DevGoalCompetency';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DevGoalCompetency.
     */
    DevGoalCompetency._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    DevGoalCompetency._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return DevGoalCompetency;
}(core_1.Entity));
exports.DevGoalCompetency = DevGoalCompetency;
(function (DevGoalCompetency) {
    /**
     * Static representation of the [[category]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalCompetency.CATEGORY = new core_1.StringField('category', DevGoalCompetency, 'Edm.String');
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalCompetency.ID = new core_1.BigNumberField('id', DevGoalCompetency, 'Edm.Int64');
    /**
     * Static representation of the [[library]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalCompetency.LIBRARY = new core_1.StringField('library', DevGoalCompetency, 'Edm.String');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalCompetency.NAME = new core_1.StringField('name', DevGoalCompetency, 'Edm.String');
    /**
     * Static representation of the [[objId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalCompetency.OBJ_ID = new core_1.BigNumberField('objId', DevGoalCompetency, 'Edm.Int64');
    /**
     * Static representation of the [[planId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalCompetency.PLAN_ID = new core_1.BigNumberField('planId', DevGoalCompetency, 'Edm.Int64');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalCompetency.USER_ID = new core_1.StringField('userId', DevGoalCompetency, 'Edm.String');
    /**
     * All fields of the DevGoalCompetency entity.
     */
    DevGoalCompetency._allFields = [
        DevGoalCompetency.CATEGORY,
        DevGoalCompetency.ID,
        DevGoalCompetency.LIBRARY,
        DevGoalCompetency.NAME,
        DevGoalCompetency.OBJ_ID,
        DevGoalCompetency.PLAN_ID,
        DevGoalCompetency.USER_ID
    ];
    /**
     * All fields selector.
     */
    DevGoalCompetency.ALL_FIELDS = new core_1.AllFields('*', DevGoalCompetency);
    /**
     * All key fields of the DevGoalCompetency entity.
     */
    DevGoalCompetency._keyFields = [DevGoalCompetency.ID];
    /**
     * Mapping of all key field names to the respective static field property DevGoalCompetency.
     */
    DevGoalCompetency._keys = DevGoalCompetency._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(DevGoalCompetency = exports.DevGoalCompetency || (exports.DevGoalCompetency = {}));
exports.DevGoalCompetency = DevGoalCompetency;
//# sourceMappingURL=DevGoalCompetency.js.map