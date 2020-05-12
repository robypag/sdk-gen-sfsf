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
var AchievementRequestBuilder_1 = require("./AchievementRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Achievement" of service "SFOData".
 */
var Achievement = /** @class */ (function (_super) {
    __extends(Achievement, _super);
    function Achievement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Achievement`.
     * @returns A builder that constructs instances of entity type `Achievement`.
     */
    Achievement.builder = function () {
        return core_1.Entity.entityBuilder(Achievement);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Achievement` entity type.
     * @returns A `Achievement` request builder.
     */
    Achievement.requestBuilder = function () {
        return new AchievementRequestBuilder_1.AchievementRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Achievement`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Achievement`.
     */
    Achievement.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Achievement);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Achievement.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Achievement.
     */
    Achievement._entityName = 'Achievement';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Achievement.
     */
    Achievement._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Achievement._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Achievement;
}(core_1.Entity));
exports.Achievement = Achievement;
var User_1 = require("./User");
var AchievementDevGoalDetail_1 = require("./AchievementDevGoalDetail");
var AchievementGoalDetail_1 = require("./AchievementGoalDetail");
var MdfEnumValue_1 = require("./MdfEnumValue");
var WfRequest_1 = require("./WfRequest");
(function (Achievement) {
    /**
     * Static representation of the [[achievementDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Achievement.ACHIEVEMENT_DATE = new core_1.DateField('achievementDate', Achievement, 'Edm.DateTime');
    /**
     * Static representation of the [[achievementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Achievement.ACHIEVEMENT_ID = new core_1.BigNumberField('achievementId', Achievement, 'Edm.Int64');
    /**
     * Static representation of the [[achievementName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Achievement.ACHIEVEMENT_NAME = new core_1.StringField('achievementName', Achievement, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Achievement.CREATED_BY = new core_1.StringField('createdBy', Achievement, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Achievement.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', Achievement, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Achievement.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', Achievement, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Achievement.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', Achievement, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Achievement.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', Achievement, 'Edm.String');
    /**
     * Static representation of the [[parentExternalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Achievement.PARENT_EXTERNAL_ID = new core_1.BigNumberField('parentExternalId', Achievement, 'Edm.Int64');
    /**
     * Static representation of the [[parentTypeEnum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Achievement.PARENT_TYPE_ENUM = new core_1.StringField('parentTypeEnum', Achievement, 'Edm.String');
    /**
     * Static representation of the [[recordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Achievement.RECORD_ID = new core_1.StringField('recordId', Achievement, 'Edm.String');
    /**
     * Static representation of the [[reviewed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Achievement.REVIEWED = new core_1.BooleanField('reviewed', Achievement, 'Edm.Boolean');
    /**
     * Static representation of the [[snapshot]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Achievement.SNAPSHOT = new core_1.BooleanField('snapshot', Achievement, 'Edm.Boolean');
    /**
     * Static representation of the [[subjectUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Achievement.SUBJECT_USER_ID = new core_1.StringField('subjectUserId', Achievement, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Achievement.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', Achievement, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[devGoalDetailList]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Achievement.DEV_GOAL_DETAIL_LIST = new core_1.Link('devGoalDetailList', Achievement, AchievementDevGoalDetail_1.AchievementDevGoalDetail);
    /**
     * Static representation of the one-to-many navigation property [[goalDetailList]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Achievement.GOAL_DETAIL_LIST = new core_1.Link('goalDetailList', Achievement, AchievementGoalDetail_1.AchievementGoalDetail);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Achievement.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', Achievement, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Achievement.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', Achievement, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[parentTypeEnumNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Achievement.PARENT_TYPE_ENUM_NAV = new core_1.OneToOneLink('parentTypeEnumNav', Achievement, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[subjectUserIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Achievement.SUBJECT_USER_ID_NAV = new core_1.OneToOneLink('subjectUserIdNav', Achievement, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Achievement.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', Achievement, WfRequest_1.WfRequest);
    /**
     * All fields of the Achievement entity.
     */
    Achievement._allFields = [
        Achievement.ACHIEVEMENT_DATE,
        Achievement.ACHIEVEMENT_ID,
        Achievement.ACHIEVEMENT_NAME,
        Achievement.CREATED_BY,
        Achievement.CREATED_DATE_TIME,
        Achievement.LAST_MODIFIED_BY,
        Achievement.LAST_MODIFIED_DATE_TIME,
        Achievement.MDF_SYSTEM_RECORD_STATUS,
        Achievement.PARENT_EXTERNAL_ID,
        Achievement.PARENT_TYPE_ENUM,
        Achievement.RECORD_ID,
        Achievement.REVIEWED,
        Achievement.SNAPSHOT,
        Achievement.SUBJECT_USER_ID,
        Achievement.CREATED_BY_NAV,
        Achievement.DEV_GOAL_DETAIL_LIST,
        Achievement.GOAL_DETAIL_LIST,
        Achievement.LAST_MODIFIED_BY_NAV,
        Achievement.MDF_SYSTEM_RECORD_STATUS_NAV,
        Achievement.PARENT_TYPE_ENUM_NAV,
        Achievement.SUBJECT_USER_ID_NAV,
        Achievement.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    Achievement.ALL_FIELDS = new core_1.AllFields('*', Achievement);
    /**
     * All key fields of the Achievement entity.
     */
    Achievement._keyFields = [Achievement.ACHIEVEMENT_ID];
    /**
     * Mapping of all key field names to the respective static field property Achievement.
     */
    Achievement._keys = Achievement._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Achievement = exports.Achievement || (exports.Achievement = {}));
exports.Achievement = Achievement;
//# sourceMappingURL=Achievement.js.map