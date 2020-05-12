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
var AchievementGoalDetailRequestBuilder_1 = require("./AchievementGoalDetailRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "AchievementGoalDetail" of service "SFOData".
 */
var AchievementGoalDetail = /** @class */ (function (_super) {
    __extends(AchievementGoalDetail, _super);
    function AchievementGoalDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `AchievementGoalDetail`.
     * @returns A builder that constructs instances of entity type `AchievementGoalDetail`.
     */
    AchievementGoalDetail.builder = function () {
        return core_1.Entity.entityBuilder(AchievementGoalDetail);
    };
    /**
     * Returns a request builder to construct requests for operations on the `AchievementGoalDetail` entity type.
     * @returns A `AchievementGoalDetail` request builder.
     */
    AchievementGoalDetail.requestBuilder = function () {
        return new AchievementGoalDetailRequestBuilder_1.AchievementGoalDetailRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AchievementGoalDetail`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AchievementGoalDetail`.
     */
    AchievementGoalDetail.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, AchievementGoalDetail);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    AchievementGoalDetail.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for AchievementGoalDetail.
     */
    AchievementGoalDetail._entityName = 'AchievementGoalDetail';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for AchievementGoalDetail.
     */
    AchievementGoalDetail._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    AchievementGoalDetail._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return AchievementGoalDetail;
}(core_1.Entity));
exports.AchievementGoalDetail = AchievementGoalDetail;
var User_1 = require("./User");
var SimpleGoal_1 = require("./SimpleGoal");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (AchievementGoalDetail) {
    /**
     * Static representation of the [[achievementAchievementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AchievementGoalDetail.ACHIEVEMENT_ACHIEVEMENT_ID = new core_1.BigNumberField('Achievement_achievementId', AchievementGoalDetail, 'Edm.Int64');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AchievementGoalDetail.CREATED_BY = new core_1.StringField('createdBy', AchievementGoalDetail, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AchievementGoalDetail.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', AchievementGoalDetail, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AchievementGoalDetail.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', AchievementGoalDetail, 'Edm.Int64');
    /**
     * Static representation of the [[goalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AchievementGoalDetail.GOAL_ID = new core_1.BigNumberField('goalId', AchievementGoalDetail, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AchievementGoalDetail.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', AchievementGoalDetail, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AchievementGoalDetail.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', AchievementGoalDetail, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AchievementGoalDetail.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', AchievementGoalDetail, 'Edm.String');
    /**
     * Static representation of the [[recordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AchievementGoalDetail.RECORD_ID = new core_1.StringField('recordId', AchievementGoalDetail, 'Edm.String');
    /**
     * Static representation of the [[snapshot]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AchievementGoalDetail.SNAPSHOT = new core_1.BooleanField('snapshot', AchievementGoalDetail, 'Edm.Boolean');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AchievementGoalDetail.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', AchievementGoalDetail, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AchievementGoalDetail.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', AchievementGoalDetail, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfAchievementGoalDetailToSimpleGoalNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AchievementGoalDetail.MDF_ACHIEVEMENT_GOAL_DETAIL_TO_SIMPLE_GOAL_NAV = new core_1.OneToOneLink('mdfAchievementGoalDetailToSimpleGoalNav', AchievementGoalDetail, SimpleGoal_1.SimpleGoal);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AchievementGoalDetail.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', AchievementGoalDetail, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the AchievementGoalDetail entity.
     */
    AchievementGoalDetail._allFields = [
        AchievementGoalDetail.ACHIEVEMENT_ACHIEVEMENT_ID,
        AchievementGoalDetail.CREATED_BY,
        AchievementGoalDetail.CREATED_DATE_TIME,
        AchievementGoalDetail.EXTERNAL_CODE,
        AchievementGoalDetail.GOAL_ID,
        AchievementGoalDetail.LAST_MODIFIED_BY,
        AchievementGoalDetail.LAST_MODIFIED_DATE_TIME,
        AchievementGoalDetail.MDF_SYSTEM_RECORD_STATUS,
        AchievementGoalDetail.RECORD_ID,
        AchievementGoalDetail.SNAPSHOT,
        AchievementGoalDetail.CREATED_BY_NAV,
        AchievementGoalDetail.LAST_MODIFIED_BY_NAV,
        AchievementGoalDetail.MDF_ACHIEVEMENT_GOAL_DETAIL_TO_SIMPLE_GOAL_NAV,
        AchievementGoalDetail.MDF_SYSTEM_RECORD_STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    AchievementGoalDetail.ALL_FIELDS = new core_1.AllFields('*', AchievementGoalDetail);
    /**
     * All key fields of the AchievementGoalDetail entity.
     */
    AchievementGoalDetail._keyFields = [AchievementGoalDetail.ACHIEVEMENT_ACHIEVEMENT_ID, AchievementGoalDetail.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property AchievementGoalDetail.
     */
    AchievementGoalDetail._keys = AchievementGoalDetail._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(AchievementGoalDetail = exports.AchievementGoalDetail || (exports.AchievementGoalDetail = {}));
exports.AchievementGoalDetail = AchievementGoalDetail;
//# sourceMappingURL=AchievementGoalDetail.js.map