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
var AchievementDevGoalDetailRequestBuilder_1 = require("./AchievementDevGoalDetailRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "AchievementDevGoalDetail" of service "SFOData".
 */
var AchievementDevGoalDetail = /** @class */ (function (_super) {
    __extends(AchievementDevGoalDetail, _super);
    function AchievementDevGoalDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `AchievementDevGoalDetail`.
     * @returns A builder that constructs instances of entity type `AchievementDevGoalDetail`.
     */
    AchievementDevGoalDetail.builder = function () {
        return core_1.Entity.entityBuilder(AchievementDevGoalDetail);
    };
    /**
     * Returns a request builder to construct requests for operations on the `AchievementDevGoalDetail` entity type.
     * @returns A `AchievementDevGoalDetail` request builder.
     */
    AchievementDevGoalDetail.requestBuilder = function () {
        return new AchievementDevGoalDetailRequestBuilder_1.AchievementDevGoalDetailRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AchievementDevGoalDetail`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AchievementDevGoalDetail`.
     */
    AchievementDevGoalDetail.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, AchievementDevGoalDetail);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    AchievementDevGoalDetail.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for AchievementDevGoalDetail.
     */
    AchievementDevGoalDetail._entityName = 'AchievementDevGoalDetail';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for AchievementDevGoalDetail.
     */
    AchievementDevGoalDetail._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    AchievementDevGoalDetail._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return AchievementDevGoalDetail;
}(core_1.Entity));
exports.AchievementDevGoalDetail = AchievementDevGoalDetail;
var User_1 = require("./User");
var SimpleDevGoal_1 = require("./SimpleDevGoal");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (AchievementDevGoalDetail) {
    /**
     * Static representation of the [[achievementAchievementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AchievementDevGoalDetail.ACHIEVEMENT_ACHIEVEMENT_ID = new core_1.BigNumberField('Achievement_achievementId', AchievementDevGoalDetail, 'Edm.Int64');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AchievementDevGoalDetail.CREATED_BY = new core_1.StringField('createdBy', AchievementDevGoalDetail, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AchievementDevGoalDetail.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', AchievementDevGoalDetail, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AchievementDevGoalDetail.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', AchievementDevGoalDetail, 'Edm.Int64');
    /**
     * Static representation of the [[goalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AchievementDevGoalDetail.GOAL_ID = new core_1.BigNumberField('goalId', AchievementDevGoalDetail, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AchievementDevGoalDetail.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', AchievementDevGoalDetail, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AchievementDevGoalDetail.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', AchievementDevGoalDetail, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AchievementDevGoalDetail.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', AchievementDevGoalDetail, 'Edm.String');
    /**
     * Static representation of the [[recordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AchievementDevGoalDetail.RECORD_ID = new core_1.StringField('recordId', AchievementDevGoalDetail, 'Edm.String');
    /**
     * Static representation of the [[snapshot]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AchievementDevGoalDetail.SNAPSHOT = new core_1.BooleanField('snapshot', AchievementDevGoalDetail, 'Edm.Boolean');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AchievementDevGoalDetail.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', AchievementDevGoalDetail, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AchievementDevGoalDetail.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', AchievementDevGoalDetail, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfAchievementDevGoalDetailToSimpleDevGoalNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AchievementDevGoalDetail.MDF_ACHIEVEMENT_DEV_GOAL_DETAIL_TO_SIMPLE_DEV_GOAL_NAV = new core_1.OneToOneLink('mdfAchievementDevGoalDetailToSimpleDevGoalNav', AchievementDevGoalDetail, SimpleDevGoal_1.SimpleDevGoal);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AchievementDevGoalDetail.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', AchievementDevGoalDetail, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the AchievementDevGoalDetail entity.
     */
    AchievementDevGoalDetail._allFields = [
        AchievementDevGoalDetail.ACHIEVEMENT_ACHIEVEMENT_ID,
        AchievementDevGoalDetail.CREATED_BY,
        AchievementDevGoalDetail.CREATED_DATE_TIME,
        AchievementDevGoalDetail.EXTERNAL_CODE,
        AchievementDevGoalDetail.GOAL_ID,
        AchievementDevGoalDetail.LAST_MODIFIED_BY,
        AchievementDevGoalDetail.LAST_MODIFIED_DATE_TIME,
        AchievementDevGoalDetail.MDF_SYSTEM_RECORD_STATUS,
        AchievementDevGoalDetail.RECORD_ID,
        AchievementDevGoalDetail.SNAPSHOT,
        AchievementDevGoalDetail.CREATED_BY_NAV,
        AchievementDevGoalDetail.LAST_MODIFIED_BY_NAV,
        AchievementDevGoalDetail.MDF_ACHIEVEMENT_DEV_GOAL_DETAIL_TO_SIMPLE_DEV_GOAL_NAV,
        AchievementDevGoalDetail.MDF_SYSTEM_RECORD_STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    AchievementDevGoalDetail.ALL_FIELDS = new core_1.AllFields('*', AchievementDevGoalDetail);
    /**
     * All key fields of the AchievementDevGoalDetail entity.
     */
    AchievementDevGoalDetail._keyFields = [AchievementDevGoalDetail.ACHIEVEMENT_ACHIEVEMENT_ID, AchievementDevGoalDetail.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property AchievementDevGoalDetail.
     */
    AchievementDevGoalDetail._keys = AchievementDevGoalDetail._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(AchievementDevGoalDetail = exports.AchievementDevGoalDetail || (exports.AchievementDevGoalDetail = {}));
exports.AchievementDevGoalDetail = AchievementDevGoalDetail;
//# sourceMappingURL=AchievementDevGoalDetail.js.map