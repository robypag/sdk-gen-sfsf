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
var ActivityStatusRequestBuilder_1 = require("./ActivityStatusRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ActivityStatus" of service "SFOData".
 */
var ActivityStatus = /** @class */ (function (_super) {
    __extends(ActivityStatus, _super);
    function ActivityStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `ActivityStatus`.
     * @returns A builder that constructs instances of entity type `ActivityStatus`.
     */
    ActivityStatus.builder = function () {
        return core_1.Entity.entityBuilder(ActivityStatus);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ActivityStatus` entity type.
     * @returns A `ActivityStatus` request builder.
     */
    ActivityStatus.requestBuilder = function () {
        return new ActivityStatusRequestBuilder_1.ActivityStatusRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ActivityStatus`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ActivityStatus`.
     */
    ActivityStatus.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, ActivityStatus);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ActivityStatus.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ActivityStatus.
     */
    ActivityStatus._entityName = 'ActivityStatus';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ActivityStatus.
     */
    ActivityStatus._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    ActivityStatus._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return ActivityStatus;
}(core_1.Entity));
exports.ActivityStatus = ActivityStatus;
var User_1 = require("./User");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var MdfEnumValue_1 = require("./MdfEnumValue");
var WfRequest_1 = require("./WfRequest");
(function (ActivityStatus) {
    /**
     * Static representation of the [[activityStatusId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatus.ACTIVITY_STATUS_ID = new core_1.StringField('activityStatusId', ActivityStatus, 'Edm.String');
    /**
     * Static representation of the [[colorRgbCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatus.COLOR_RGB_CODE = new core_1.StringField('colorRGBCode', ActivityStatus, 'Edm.String');
    /**
     * Static representation of the [[createAchievement]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatus.CREATE_ACHIEVEMENT = new core_1.BooleanField('createAchievement', ActivityStatus, 'Edm.Boolean');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatus.CREATED_BY = new core_1.StringField('createdBy', ActivityStatus, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatus.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', ActivityStatus, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[defaultStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatus.DEFAULT_STATUS = new core_1.BooleanField('defaultStatus', ActivityStatus, 'Edm.Boolean');
    /**
     * Static representation of the [[deleted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatus.DELETED = new core_1.BooleanField('deleted', ActivityStatus, 'Edm.Boolean');
    /**
     * Static representation of the [[descriptionDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatus.DESCRIPTION_DE_DE = new core_1.StringField('description_de_DE', ActivityStatus, 'Edm.String');
    /**
     * Static representation of the [[descriptionDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatus.DESCRIPTION_DEFAULT_VALUE = new core_1.StringField('description_defaultValue', ActivityStatus, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatus.DESCRIPTION_EN_DEBUG = new core_1.StringField('description_en_DEBUG', ActivityStatus, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatus.DESCRIPTION_EN_GB = new core_1.StringField('description_en_GB', ActivityStatus, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatus.DESCRIPTION_EN_US = new core_1.StringField('description_en_US', ActivityStatus, 'Edm.String');
    /**
     * Static representation of the [[descriptionEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatus.DESCRIPTION_ES_ES = new core_1.StringField('description_es_ES', ActivityStatus, 'Edm.String');
    /**
     * Static representation of the [[descriptionEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatus.DESCRIPTION_ES_MX = new core_1.StringField('description_es_MX', ActivityStatus, 'Edm.String');
    /**
     * Static representation of the [[descriptionFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatus.DESCRIPTION_FR_CA = new core_1.StringField('description_fr_CA', ActivityStatus, 'Edm.String');
    /**
     * Static representation of the [[descriptionFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatus.DESCRIPTION_FR_FR = new core_1.StringField('description_fr_FR', ActivityStatus, 'Edm.String');
    /**
     * Static representation of the [[descriptionItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatus.DESCRIPTION_IT_IT = new core_1.StringField('description_it_IT', ActivityStatus, 'Edm.String');
    /**
     * Static representation of the [[descriptionLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatus.DESCRIPTION_LOCALIZED = new core_1.StringField('description_localized', ActivityStatus, 'Edm.String');
    /**
     * Static representation of the [[descriptionNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatus.DESCRIPTION_NL_NL = new core_1.StringField('description_nl_NL', ActivityStatus, 'Edm.String');
    /**
     * Static representation of the [[descriptionPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatus.DESCRIPTION_PT_BR = new core_1.StringField('description_pt_BR', ActivityStatus, 'Edm.String');
    /**
     * Static representation of the [[descriptionZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatus.DESCRIPTION_ZH_CN = new core_1.StringField('description_zh_CN', ActivityStatus, 'Edm.String');
    /**
     * Static representation of the [[iconName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatus.ICON_NAME = new core_1.StringField('iconName', ActivityStatus, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatus.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', ActivityStatus, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatus.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', ActivityStatus, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatus.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', ActivityStatus, 'Edm.String');
    /**
     * Static representation of the [[priority]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatus.PRIORITY = new core_1.BigNumberField('priority', ActivityStatus, 'Edm.Int64');
    /**
     * Static representation of the [[recordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatus.RECORD_ID = new core_1.StringField('recordId', ActivityStatus, 'Edm.String');
    /**
     * Static representation of the [[removeActivityFromMeeting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatus.REMOVE_ACTIVITY_FROM_MEETING = new core_1.BooleanField('removeActivityFromMeeting', ActivityStatus, 'Edm.Boolean');
    /**
     * Static representation of the [[snapshot]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatus.SNAPSHOT = new core_1.BooleanField('snapshot', ActivityStatus, 'Edm.Boolean');
    /**
     * Static representation of the [[statusNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatus.STATUS_NAME_DE_DE = new core_1.StringField('statusName_de_DE', ActivityStatus, 'Edm.String');
    /**
     * Static representation of the [[statusNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatus.STATUS_NAME_DEFAULT_VALUE = new core_1.StringField('statusName_defaultValue', ActivityStatus, 'Edm.String');
    /**
     * Static representation of the [[statusNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatus.STATUS_NAME_EN_DEBUG = new core_1.StringField('statusName_en_DEBUG', ActivityStatus, 'Edm.String');
    /**
     * Static representation of the [[statusNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatus.STATUS_NAME_EN_GB = new core_1.StringField('statusName_en_GB', ActivityStatus, 'Edm.String');
    /**
     * Static representation of the [[statusNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatus.STATUS_NAME_EN_US = new core_1.StringField('statusName_en_US', ActivityStatus, 'Edm.String');
    /**
     * Static representation of the [[statusNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatus.STATUS_NAME_ES_ES = new core_1.StringField('statusName_es_ES', ActivityStatus, 'Edm.String');
    /**
     * Static representation of the [[statusNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatus.STATUS_NAME_ES_MX = new core_1.StringField('statusName_es_MX', ActivityStatus, 'Edm.String');
    /**
     * Static representation of the [[statusNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatus.STATUS_NAME_FR_CA = new core_1.StringField('statusName_fr_CA', ActivityStatus, 'Edm.String');
    /**
     * Static representation of the [[statusNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatus.STATUS_NAME_FR_FR = new core_1.StringField('statusName_fr_FR', ActivityStatus, 'Edm.String');
    /**
     * Static representation of the [[statusNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatus.STATUS_NAME_IT_IT = new core_1.StringField('statusName_it_IT', ActivityStatus, 'Edm.String');
    /**
     * Static representation of the [[statusNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatus.STATUS_NAME_LOCALIZED = new core_1.StringField('statusName_localized', ActivityStatus, 'Edm.String');
    /**
     * Static representation of the [[statusNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatus.STATUS_NAME_NL_NL = new core_1.StringField('statusName_nl_NL', ActivityStatus, 'Edm.String');
    /**
     * Static representation of the [[statusNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatus.STATUS_NAME_PT_BR = new core_1.StringField('statusName_pt_BR', ActivityStatus, 'Edm.String');
    /**
     * Static representation of the [[statusNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatus.STATUS_NAME_ZH_CN = new core_1.StringField('statusName_zh_CN', ActivityStatus, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatus.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', ActivityStatus, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatus.DESCRIPTION_TRANSLATION_TEXT_NAV = new core_1.Link('descriptionTranslationTextNav', ActivityStatus, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatus.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', ActivityStatus, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatus.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', ActivityStatus, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[statusNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatus.STATUS_NAME_TRANSLATION_TEXT_NAV = new core_1.Link('statusNameTranslationTextNav', ActivityStatus, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatus.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', ActivityStatus, WfRequest_1.WfRequest);
    /**
     * All fields of the ActivityStatus entity.
     */
    ActivityStatus._allFields = [
        ActivityStatus.ACTIVITY_STATUS_ID,
        ActivityStatus.COLOR_RGB_CODE,
        ActivityStatus.CREATE_ACHIEVEMENT,
        ActivityStatus.CREATED_BY,
        ActivityStatus.CREATED_DATE_TIME,
        ActivityStatus.DEFAULT_STATUS,
        ActivityStatus.DELETED,
        ActivityStatus.DESCRIPTION_DE_DE,
        ActivityStatus.DESCRIPTION_DEFAULT_VALUE,
        ActivityStatus.DESCRIPTION_EN_DEBUG,
        ActivityStatus.DESCRIPTION_EN_GB,
        ActivityStatus.DESCRIPTION_EN_US,
        ActivityStatus.DESCRIPTION_ES_ES,
        ActivityStatus.DESCRIPTION_ES_MX,
        ActivityStatus.DESCRIPTION_FR_CA,
        ActivityStatus.DESCRIPTION_FR_FR,
        ActivityStatus.DESCRIPTION_IT_IT,
        ActivityStatus.DESCRIPTION_LOCALIZED,
        ActivityStatus.DESCRIPTION_NL_NL,
        ActivityStatus.DESCRIPTION_PT_BR,
        ActivityStatus.DESCRIPTION_ZH_CN,
        ActivityStatus.ICON_NAME,
        ActivityStatus.LAST_MODIFIED_BY,
        ActivityStatus.LAST_MODIFIED_DATE_TIME,
        ActivityStatus.MDF_SYSTEM_RECORD_STATUS,
        ActivityStatus.PRIORITY,
        ActivityStatus.RECORD_ID,
        ActivityStatus.REMOVE_ACTIVITY_FROM_MEETING,
        ActivityStatus.SNAPSHOT,
        ActivityStatus.STATUS_NAME_DE_DE,
        ActivityStatus.STATUS_NAME_DEFAULT_VALUE,
        ActivityStatus.STATUS_NAME_EN_DEBUG,
        ActivityStatus.STATUS_NAME_EN_GB,
        ActivityStatus.STATUS_NAME_EN_US,
        ActivityStatus.STATUS_NAME_ES_ES,
        ActivityStatus.STATUS_NAME_ES_MX,
        ActivityStatus.STATUS_NAME_FR_CA,
        ActivityStatus.STATUS_NAME_FR_FR,
        ActivityStatus.STATUS_NAME_IT_IT,
        ActivityStatus.STATUS_NAME_LOCALIZED,
        ActivityStatus.STATUS_NAME_NL_NL,
        ActivityStatus.STATUS_NAME_PT_BR,
        ActivityStatus.STATUS_NAME_ZH_CN,
        ActivityStatus.CREATED_BY_NAV,
        ActivityStatus.DESCRIPTION_TRANSLATION_TEXT_NAV,
        ActivityStatus.LAST_MODIFIED_BY_NAV,
        ActivityStatus.MDF_SYSTEM_RECORD_STATUS_NAV,
        ActivityStatus.STATUS_NAME_TRANSLATION_TEXT_NAV,
        ActivityStatus.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    ActivityStatus.ALL_FIELDS = new core_1.AllFields('*', ActivityStatus);
    /**
     * All key fields of the ActivityStatus entity.
     */
    ActivityStatus._keyFields = [ActivityStatus.ACTIVITY_STATUS_ID];
    /**
     * Mapping of all key field names to the respective static field property ActivityStatus.
     */
    ActivityStatus._keys = ActivityStatus._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ActivityStatus = exports.ActivityStatus || (exports.ActivityStatus = {}));
exports.ActivityStatus = ActivityStatus;
//# sourceMappingURL=ActivityStatus.js.map