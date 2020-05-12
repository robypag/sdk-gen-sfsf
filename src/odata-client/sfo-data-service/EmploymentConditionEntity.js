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
var EmploymentConditionEntityRequestBuilder_1 = require("./EmploymentConditionEntityRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EmploymentConditionEntity" of service "SFOData".
 */
var EmploymentConditionEntity = /** @class */ (function (_super) {
    __extends(EmploymentConditionEntity, _super);
    function EmploymentConditionEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmploymentConditionEntity`.
     * @returns A builder that constructs instances of entity type `EmploymentConditionEntity`.
     */
    EmploymentConditionEntity.builder = function () {
        return core_1.Entity.entityBuilder(EmploymentConditionEntity);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmploymentConditionEntity` entity type.
     * @returns A `EmploymentConditionEntity` request builder.
     */
    EmploymentConditionEntity.requestBuilder = function () {
        return new EmploymentConditionEntityRequestBuilder_1.EmploymentConditionEntityRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmploymentConditionEntity`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmploymentConditionEntity`.
     */
    EmploymentConditionEntity.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EmploymentConditionEntity);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmploymentConditionEntity.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmploymentConditionEntity.
     */
    EmploymentConditionEntity._entityName = 'EmploymentConditionEntity';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmploymentConditionEntity.
     */
    EmploymentConditionEntity._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmploymentConditionEntity._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return EmploymentConditionEntity;
}(core_1.Entity));
exports.EmploymentConditionEntity = EmploymentConditionEntity;
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var WfRequest_1 = require("./WfRequest");
(function (EmploymentConditionEntity) {
    /**
     * Static representation of the [[conditionDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmploymentConditionEntity.CONDITION_DE_DE = new core_1.StringField('condition_de_DE', EmploymentConditionEntity, 'Edm.String');
    /**
     * Static representation of the [[conditionDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmploymentConditionEntity.CONDITION_DEFAULT_VALUE = new core_1.StringField('condition_defaultValue', EmploymentConditionEntity, 'Edm.String');
    /**
     * Static representation of the [[conditionEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmploymentConditionEntity.CONDITION_EN_DEBUG = new core_1.StringField('condition_en_DEBUG', EmploymentConditionEntity, 'Edm.String');
    /**
     * Static representation of the [[conditionEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmploymentConditionEntity.CONDITION_EN_GB = new core_1.StringField('condition_en_GB', EmploymentConditionEntity, 'Edm.String');
    /**
     * Static representation of the [[conditionEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmploymentConditionEntity.CONDITION_EN_US = new core_1.StringField('condition_en_US', EmploymentConditionEntity, 'Edm.String');
    /**
     * Static representation of the [[conditionEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmploymentConditionEntity.CONDITION_ES_ES = new core_1.StringField('condition_es_ES', EmploymentConditionEntity, 'Edm.String');
    /**
     * Static representation of the [[conditionEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmploymentConditionEntity.CONDITION_ES_MX = new core_1.StringField('condition_es_MX', EmploymentConditionEntity, 'Edm.String');
    /**
     * Static representation of the [[conditionFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmploymentConditionEntity.CONDITION_FR_CA = new core_1.StringField('condition_fr_CA', EmploymentConditionEntity, 'Edm.String');
    /**
     * Static representation of the [[conditionFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmploymentConditionEntity.CONDITION_FR_FR = new core_1.StringField('condition_fr_FR', EmploymentConditionEntity, 'Edm.String');
    /**
     * Static representation of the [[conditionItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmploymentConditionEntity.CONDITION_IT_IT = new core_1.StringField('condition_it_IT', EmploymentConditionEntity, 'Edm.String');
    /**
     * Static representation of the [[conditionLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmploymentConditionEntity.CONDITION_LOCALIZED = new core_1.StringField('condition_localized', EmploymentConditionEntity, 'Edm.String');
    /**
     * Static representation of the [[conditionNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmploymentConditionEntity.CONDITION_NL_NL = new core_1.StringField('condition_nl_NL', EmploymentConditionEntity, 'Edm.String');
    /**
     * Static representation of the [[conditionPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmploymentConditionEntity.CONDITION_PT_BR = new core_1.StringField('condition_pt_BR', EmploymentConditionEntity, 'Edm.String');
    /**
     * Static representation of the [[conditionZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmploymentConditionEntity.CONDITION_ZH_CN = new core_1.StringField('condition_zh_CN', EmploymentConditionEntity, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmploymentConditionEntity.CREATED_BY = new core_1.StringField('createdBy', EmploymentConditionEntity, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmploymentConditionEntity.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', EmploymentConditionEntity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmploymentConditionEntity.EXTERNAL_CODE = new core_1.StringField('externalCode', EmploymentConditionEntity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmploymentConditionEntity.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', EmploymentConditionEntity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmploymentConditionEntity.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', EmploymentConditionEntity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmploymentConditionEntity.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', EmploymentConditionEntity, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmploymentConditionEntity.STATUS = new core_1.StringField('status', EmploymentConditionEntity, 'Edm.String');
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmploymentConditionEntity.SUB_MODULE = new core_1.StringField('subModule', EmploymentConditionEntity, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[conditionTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmploymentConditionEntity.CONDITION_TRANSLATION_TEXT_NAV = new core_1.Link('conditionTranslationTextNav', EmploymentConditionEntity, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmploymentConditionEntity.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', EmploymentConditionEntity, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmploymentConditionEntity.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', EmploymentConditionEntity, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmploymentConditionEntity.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', EmploymentConditionEntity, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmploymentConditionEntity.STATUS_NAV = new core_1.OneToOneLink('statusNav', EmploymentConditionEntity, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmploymentConditionEntity.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', EmploymentConditionEntity, WfRequest_1.WfRequest);
    /**
     * All fields of the EmploymentConditionEntity entity.
     */
    EmploymentConditionEntity._allFields = [
        EmploymentConditionEntity.CONDITION_DE_DE,
        EmploymentConditionEntity.CONDITION_DEFAULT_VALUE,
        EmploymentConditionEntity.CONDITION_EN_DEBUG,
        EmploymentConditionEntity.CONDITION_EN_GB,
        EmploymentConditionEntity.CONDITION_EN_US,
        EmploymentConditionEntity.CONDITION_ES_ES,
        EmploymentConditionEntity.CONDITION_ES_MX,
        EmploymentConditionEntity.CONDITION_FR_CA,
        EmploymentConditionEntity.CONDITION_FR_FR,
        EmploymentConditionEntity.CONDITION_IT_IT,
        EmploymentConditionEntity.CONDITION_LOCALIZED,
        EmploymentConditionEntity.CONDITION_NL_NL,
        EmploymentConditionEntity.CONDITION_PT_BR,
        EmploymentConditionEntity.CONDITION_ZH_CN,
        EmploymentConditionEntity.CREATED_BY,
        EmploymentConditionEntity.CREATED_DATE_TIME,
        EmploymentConditionEntity.EXTERNAL_CODE,
        EmploymentConditionEntity.LAST_MODIFIED_BY,
        EmploymentConditionEntity.LAST_MODIFIED_DATE_TIME,
        EmploymentConditionEntity.MDF_SYSTEM_RECORD_STATUS,
        EmploymentConditionEntity.STATUS,
        EmploymentConditionEntity.SUB_MODULE,
        EmploymentConditionEntity.CONDITION_TRANSLATION_TEXT_NAV,
        EmploymentConditionEntity.CREATED_BY_NAV,
        EmploymentConditionEntity.LAST_MODIFIED_BY_NAV,
        EmploymentConditionEntity.MDF_SYSTEM_RECORD_STATUS_NAV,
        EmploymentConditionEntity.STATUS_NAV,
        EmploymentConditionEntity.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    EmploymentConditionEntity.ALL_FIELDS = new core_1.AllFields('*', EmploymentConditionEntity);
    /**
     * All key fields of the EmploymentConditionEntity entity.
     */
    EmploymentConditionEntity._keyFields = [EmploymentConditionEntity.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property EmploymentConditionEntity.
     */
    EmploymentConditionEntity._keys = EmploymentConditionEntity._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmploymentConditionEntity = exports.EmploymentConditionEntity || (exports.EmploymentConditionEntity = {}));
exports.EmploymentConditionEntity = EmploymentConditionEntity;
//# sourceMappingURL=EmploymentConditionEntity.js.map