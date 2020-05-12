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
var GoalDetailRequestBuilder_1 = require("./GoalDetailRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "GoalDetail" of service "SFOData".
 */
var GoalDetail = /** @class */ (function (_super) {
    __extends(GoalDetail, _super);
    function GoalDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `GoalDetail`.
     * @returns A builder that constructs instances of entity type `GoalDetail`.
     */
    GoalDetail.builder = function () {
        return core_1.Entity.entityBuilder(GoalDetail);
    };
    /**
     * Returns a request builder to construct requests for operations on the `GoalDetail` entity type.
     * @returns A `GoalDetail` request builder.
     */
    GoalDetail.requestBuilder = function () {
        return new GoalDetailRequestBuilder_1.GoalDetailRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `GoalDetail`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `GoalDetail`.
     */
    GoalDetail.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, GoalDetail);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    GoalDetail.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for GoalDetail.
     */
    GoalDetail._entityName = 'GoalDetail';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for GoalDetail.
     */
    GoalDetail._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    GoalDetail._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return GoalDetail;
}(core_1.Entity));
exports.GoalDetail = GoalDetail;
var User_1 = require("./User");
var SimpleGoal_1 = require("./SimpleGoal");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (GoalDetail) {
    /**
     * Static representation of the [[activityActivityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalDetail.ACTIVITY_ACTIVITY_ID = new core_1.BigNumberField('Activity_activityId', GoalDetail, 'Edm.Int64');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalDetail.CREATED_BY = new core_1.StringField('createdBy', GoalDetail, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalDetail.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', GoalDetail, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalDetail.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', GoalDetail, 'Edm.Int64');
    /**
     * Static representation of the [[goalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalDetail.GOAL_ID = new core_1.BigNumberField('goalId', GoalDetail, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalDetail.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', GoalDetail, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalDetail.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', GoalDetail, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalDetail.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', GoalDetail, 'Edm.String');
    /**
     * Static representation of the [[recordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalDetail.RECORD_ID = new core_1.StringField('recordId', GoalDetail, 'Edm.String');
    /**
     * Static representation of the [[snapshot]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalDetail.SNAPSHOT = new core_1.BooleanField('snapshot', GoalDetail, 'Edm.Boolean');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalDetail.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', GoalDetail, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalDetail.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', GoalDetail, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfGoalDetailToSimpleGoalNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalDetail.MDF_GOAL_DETAIL_TO_SIMPLE_GOAL_NAV = new core_1.OneToOneLink('mdfGoalDetailToSimpleGoalNav', GoalDetail, SimpleGoal_1.SimpleGoal);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalDetail.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', GoalDetail, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the GoalDetail entity.
     */
    GoalDetail._allFields = [
        GoalDetail.ACTIVITY_ACTIVITY_ID,
        GoalDetail.CREATED_BY,
        GoalDetail.CREATED_DATE_TIME,
        GoalDetail.EXTERNAL_CODE,
        GoalDetail.GOAL_ID,
        GoalDetail.LAST_MODIFIED_BY,
        GoalDetail.LAST_MODIFIED_DATE_TIME,
        GoalDetail.MDF_SYSTEM_RECORD_STATUS,
        GoalDetail.RECORD_ID,
        GoalDetail.SNAPSHOT,
        GoalDetail.CREATED_BY_NAV,
        GoalDetail.LAST_MODIFIED_BY_NAV,
        GoalDetail.MDF_GOAL_DETAIL_TO_SIMPLE_GOAL_NAV,
        GoalDetail.MDF_SYSTEM_RECORD_STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    GoalDetail.ALL_FIELDS = new core_1.AllFields('*', GoalDetail);
    /**
     * All key fields of the GoalDetail entity.
     */
    GoalDetail._keyFields = [GoalDetail.ACTIVITY_ACTIVITY_ID, GoalDetail.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property GoalDetail.
     */
    GoalDetail._keys = GoalDetail._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(GoalDetail = exports.GoalDetail || (exports.GoalDetail = {}));
exports.GoalDetail = GoalDetail;
//# sourceMappingURL=GoalDetail.js.map