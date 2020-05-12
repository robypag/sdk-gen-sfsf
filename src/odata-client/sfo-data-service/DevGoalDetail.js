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
var DevGoalDetailRequestBuilder_1 = require("./DevGoalDetailRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "DevGoalDetail" of service "SFOData".
 */
var DevGoalDetail = /** @class */ (function (_super) {
    __extends(DevGoalDetail, _super);
    function DevGoalDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `DevGoalDetail`.
     * @returns A builder that constructs instances of entity type `DevGoalDetail`.
     */
    DevGoalDetail.builder = function () {
        return core_1.Entity.entityBuilder(DevGoalDetail);
    };
    /**
     * Returns a request builder to construct requests for operations on the `DevGoalDetail` entity type.
     * @returns A `DevGoalDetail` request builder.
     */
    DevGoalDetail.requestBuilder = function () {
        return new DevGoalDetailRequestBuilder_1.DevGoalDetailRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DevGoalDetail`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DevGoalDetail`.
     */
    DevGoalDetail.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, DevGoalDetail);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    DevGoalDetail.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for DevGoalDetail.
     */
    DevGoalDetail._entityName = 'DevGoalDetail';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DevGoalDetail.
     */
    DevGoalDetail._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    DevGoalDetail._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return DevGoalDetail;
}(core_1.Entity));
exports.DevGoalDetail = DevGoalDetail;
var User_1 = require("./User");
var SimpleDevGoal_1 = require("./SimpleDevGoal");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (DevGoalDetail) {
    /**
     * Static representation of the [[activityActivityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalDetail.ACTIVITY_ACTIVITY_ID = new core_1.BigNumberField('Activity_activityId', DevGoalDetail, 'Edm.Int64');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalDetail.CREATED_BY = new core_1.StringField('createdBy', DevGoalDetail, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalDetail.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', DevGoalDetail, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalDetail.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', DevGoalDetail, 'Edm.Int64');
    /**
     * Static representation of the [[goalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalDetail.GOAL_ID = new core_1.BigNumberField('goalId', DevGoalDetail, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalDetail.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', DevGoalDetail, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalDetail.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', DevGoalDetail, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalDetail.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', DevGoalDetail, 'Edm.String');
    /**
     * Static representation of the [[recordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalDetail.RECORD_ID = new core_1.StringField('recordId', DevGoalDetail, 'Edm.String');
    /**
     * Static representation of the [[snapshot]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalDetail.SNAPSHOT = new core_1.BooleanField('snapshot', DevGoalDetail, 'Edm.Boolean');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalDetail.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', DevGoalDetail, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalDetail.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', DevGoalDetail, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfDevGoalDetailToSimpleDevGoalNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalDetail.MDF_DEV_GOAL_DETAIL_TO_SIMPLE_DEV_GOAL_NAV = new core_1.OneToOneLink('mdfDevGoalDetailToSimpleDevGoalNav', DevGoalDetail, SimpleDevGoal_1.SimpleDevGoal);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalDetail.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', DevGoalDetail, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the DevGoalDetail entity.
     */
    DevGoalDetail._allFields = [
        DevGoalDetail.ACTIVITY_ACTIVITY_ID,
        DevGoalDetail.CREATED_BY,
        DevGoalDetail.CREATED_DATE_TIME,
        DevGoalDetail.EXTERNAL_CODE,
        DevGoalDetail.GOAL_ID,
        DevGoalDetail.LAST_MODIFIED_BY,
        DevGoalDetail.LAST_MODIFIED_DATE_TIME,
        DevGoalDetail.MDF_SYSTEM_RECORD_STATUS,
        DevGoalDetail.RECORD_ID,
        DevGoalDetail.SNAPSHOT,
        DevGoalDetail.CREATED_BY_NAV,
        DevGoalDetail.LAST_MODIFIED_BY_NAV,
        DevGoalDetail.MDF_DEV_GOAL_DETAIL_TO_SIMPLE_DEV_GOAL_NAV,
        DevGoalDetail.MDF_SYSTEM_RECORD_STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    DevGoalDetail.ALL_FIELDS = new core_1.AllFields('*', DevGoalDetail);
    /**
     * All key fields of the DevGoalDetail entity.
     */
    DevGoalDetail._keyFields = [DevGoalDetail.ACTIVITY_ACTIVITY_ID, DevGoalDetail.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property DevGoalDetail.
     */
    DevGoalDetail._keys = DevGoalDetail._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(DevGoalDetail = exports.DevGoalDetail || (exports.DevGoalDetail = {}));
exports.DevGoalDetail = DevGoalDetail;
//# sourceMappingURL=DevGoalDetail.js.map