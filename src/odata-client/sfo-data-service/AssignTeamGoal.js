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
var AssignTeamGoalRequestBuilder_1 = require("./AssignTeamGoalRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "AssignTeamGoal" of service "SFOData".
 */
var AssignTeamGoal = /** @class */ (function (_super) {
    __extends(AssignTeamGoal, _super);
    function AssignTeamGoal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `AssignTeamGoal`.
     * @returns A builder that constructs instances of entity type `AssignTeamGoal`.
     */
    AssignTeamGoal.builder = function () {
        return core_1.Entity.entityBuilder(AssignTeamGoal);
    };
    /**
     * Returns a request builder to construct requests for operations on the `AssignTeamGoal` entity type.
     * @returns A `AssignTeamGoal` request builder.
     */
    AssignTeamGoal.requestBuilder = function () {
        return new AssignTeamGoalRequestBuilder_1.AssignTeamGoalRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AssignTeamGoal`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AssignTeamGoal`.
     */
    AssignTeamGoal.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, AssignTeamGoal);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    AssignTeamGoal.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for AssignTeamGoal.
     */
    AssignTeamGoal._entityName = 'AssignTeamGoal';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for AssignTeamGoal.
     */
    AssignTeamGoal._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    AssignTeamGoal._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return AssignTeamGoal;
}(core_1.Entity));
exports.AssignTeamGoal = AssignTeamGoal;
(function (AssignTeamGoal) {
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssignTeamGoal.ID = new core_1.BigNumberField('id', AssignTeamGoal, 'Edm.Int64');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssignTeamGoal.USER_ID = new core_1.StringField('userId', AssignTeamGoal, 'Edm.String');
    /**
     * All fields of the AssignTeamGoal entity.
     */
    AssignTeamGoal._allFields = [
        AssignTeamGoal.ID,
        AssignTeamGoal.USER_ID
    ];
    /**
     * All fields selector.
     */
    AssignTeamGoal.ALL_FIELDS = new core_1.AllFields('*', AssignTeamGoal);
    /**
     * All key fields of the AssignTeamGoal entity.
     */
    AssignTeamGoal._keyFields = [AssignTeamGoal.ID];
    /**
     * Mapping of all key field names to the respective static field property AssignTeamGoal.
     */
    AssignTeamGoal._keys = AssignTeamGoal._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(AssignTeamGoal = exports.AssignTeamGoal || (exports.AssignTeamGoal = {}));
exports.AssignTeamGoal = AssignTeamGoal;
//# sourceMappingURL=AssignTeamGoal.js.map