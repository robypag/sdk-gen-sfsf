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
var OnboardingEquipmentTypeValueRequestBuilder_1 = require("./OnboardingEquipmentTypeValueRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "OnboardingEquipmentTypeValue" of service "SFOData".
 */
var OnboardingEquipmentTypeValue = /** @class */ (function (_super) {
    __extends(OnboardingEquipmentTypeValue, _super);
    function OnboardingEquipmentTypeValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `OnboardingEquipmentTypeValue`.
     * @returns A builder that constructs instances of entity type `OnboardingEquipmentTypeValue`.
     */
    OnboardingEquipmentTypeValue.builder = function () {
        return core_1.Entity.entityBuilder(OnboardingEquipmentTypeValue);
    };
    /**
     * Returns a request builder to construct requests for operations on the `OnboardingEquipmentTypeValue` entity type.
     * @returns A `OnboardingEquipmentTypeValue` request builder.
     */
    OnboardingEquipmentTypeValue.requestBuilder = function () {
        return new OnboardingEquipmentTypeValueRequestBuilder_1.OnboardingEquipmentTypeValueRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `OnboardingEquipmentTypeValue`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `OnboardingEquipmentTypeValue`.
     */
    OnboardingEquipmentTypeValue.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, OnboardingEquipmentTypeValue);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    OnboardingEquipmentTypeValue.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for OnboardingEquipmentTypeValue.
     */
    OnboardingEquipmentTypeValue._entityName = 'OnboardingEquipmentTypeValue';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for OnboardingEquipmentTypeValue.
     */
    OnboardingEquipmentTypeValue._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    OnboardingEquipmentTypeValue._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return OnboardingEquipmentTypeValue;
}(core_1.Entity));
exports.OnboardingEquipmentTypeValue = OnboardingEquipmentTypeValue;
var User_1 = require("./User");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var MdfEnumValue_1 = require("./MdfEnumValue");
var OnboardingEquipmentType_1_1 = require("./OnboardingEquipmentType_1");
var WfRequest_1 = require("./WfRequest");
(function (OnboardingEquipmentTypeValue) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentTypeValue.CODE = new core_1.StringField('code', OnboardingEquipmentTypeValue, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentTypeValue.CREATED_BY = new core_1.StringField('createdBy', OnboardingEquipmentTypeValue, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentTypeValue.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', OnboardingEquipmentTypeValue, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[descriptionDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentTypeValue.DESCRIPTION_DE_DE = new core_1.StringField('description_de_DE', OnboardingEquipmentTypeValue, 'Edm.String');
    /**
     * Static representation of the [[descriptionDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentTypeValue.DESCRIPTION_DEFAULT_VALUE = new core_1.StringField('description_defaultValue', OnboardingEquipmentTypeValue, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentTypeValue.DESCRIPTION_EN_DEBUG = new core_1.StringField('description_en_DEBUG', OnboardingEquipmentTypeValue, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentTypeValue.DESCRIPTION_EN_GB = new core_1.StringField('description_en_GB', OnboardingEquipmentTypeValue, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentTypeValue.DESCRIPTION_EN_US = new core_1.StringField('description_en_US', OnboardingEquipmentTypeValue, 'Edm.String');
    /**
     * Static representation of the [[descriptionEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentTypeValue.DESCRIPTION_ES_ES = new core_1.StringField('description_es_ES', OnboardingEquipmentTypeValue, 'Edm.String');
    /**
     * Static representation of the [[descriptionEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentTypeValue.DESCRIPTION_ES_MX = new core_1.StringField('description_es_MX', OnboardingEquipmentTypeValue, 'Edm.String');
    /**
     * Static representation of the [[descriptionFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentTypeValue.DESCRIPTION_FR_CA = new core_1.StringField('description_fr_CA', OnboardingEquipmentTypeValue, 'Edm.String');
    /**
     * Static representation of the [[descriptionFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentTypeValue.DESCRIPTION_FR_FR = new core_1.StringField('description_fr_FR', OnboardingEquipmentTypeValue, 'Edm.String');
    /**
     * Static representation of the [[descriptionItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentTypeValue.DESCRIPTION_IT_IT = new core_1.StringField('description_it_IT', OnboardingEquipmentTypeValue, 'Edm.String');
    /**
     * Static representation of the [[descriptionLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentTypeValue.DESCRIPTION_LOCALIZED = new core_1.StringField('description_localized', OnboardingEquipmentTypeValue, 'Edm.String');
    /**
     * Static representation of the [[descriptionNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentTypeValue.DESCRIPTION_NL_NL = new core_1.StringField('description_nl_NL', OnboardingEquipmentTypeValue, 'Edm.String');
    /**
     * Static representation of the [[descriptionPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentTypeValue.DESCRIPTION_PT_BR = new core_1.StringField('description_pt_BR', OnboardingEquipmentTypeValue, 'Edm.String');
    /**
     * Static representation of the [[descriptionZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentTypeValue.DESCRIPTION_ZH_CN = new core_1.StringField('description_zh_CN', OnboardingEquipmentTypeValue, 'Edm.String');
    /**
     * Static representation of the [[equipmentNotRequired]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentTypeValue.EQUIPMENT_NOT_REQUIRED = new core_1.BooleanField('equipmentNotRequired', OnboardingEquipmentTypeValue, 'Edm.Boolean');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentTypeValue.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', OnboardingEquipmentTypeValue, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentTypeValue.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', OnboardingEquipmentTypeValue, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentTypeValue.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', OnboardingEquipmentTypeValue, 'Edm.String');
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentTypeValue.TYPE = new core_1.StringField('type', OnboardingEquipmentTypeValue, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentTypeValue.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', OnboardingEquipmentTypeValue, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentTypeValue.DESCRIPTION_TRANSLATION_TEXT_NAV = new core_1.Link('descriptionTranslationTextNav', OnboardingEquipmentTypeValue, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentTypeValue.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', OnboardingEquipmentTypeValue, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentTypeValue.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', OnboardingEquipmentTypeValue, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[typeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentTypeValue.TYPE_NAV = new core_1.OneToOneLink('typeNav', OnboardingEquipmentTypeValue, OnboardingEquipmentType_1_1.OnboardingEquipmentType_1);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentTypeValue.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', OnboardingEquipmentTypeValue, WfRequest_1.WfRequest);
    /**
     * All fields of the OnboardingEquipmentTypeValue entity.
     */
    OnboardingEquipmentTypeValue._allFields = [
        OnboardingEquipmentTypeValue.CODE,
        OnboardingEquipmentTypeValue.CREATED_BY,
        OnboardingEquipmentTypeValue.CREATED_DATE_TIME,
        OnboardingEquipmentTypeValue.DESCRIPTION_DE_DE,
        OnboardingEquipmentTypeValue.DESCRIPTION_DEFAULT_VALUE,
        OnboardingEquipmentTypeValue.DESCRIPTION_EN_DEBUG,
        OnboardingEquipmentTypeValue.DESCRIPTION_EN_GB,
        OnboardingEquipmentTypeValue.DESCRIPTION_EN_US,
        OnboardingEquipmentTypeValue.DESCRIPTION_ES_ES,
        OnboardingEquipmentTypeValue.DESCRIPTION_ES_MX,
        OnboardingEquipmentTypeValue.DESCRIPTION_FR_CA,
        OnboardingEquipmentTypeValue.DESCRIPTION_FR_FR,
        OnboardingEquipmentTypeValue.DESCRIPTION_IT_IT,
        OnboardingEquipmentTypeValue.DESCRIPTION_LOCALIZED,
        OnboardingEquipmentTypeValue.DESCRIPTION_NL_NL,
        OnboardingEquipmentTypeValue.DESCRIPTION_PT_BR,
        OnboardingEquipmentTypeValue.DESCRIPTION_ZH_CN,
        OnboardingEquipmentTypeValue.EQUIPMENT_NOT_REQUIRED,
        OnboardingEquipmentTypeValue.LAST_MODIFIED_BY,
        OnboardingEquipmentTypeValue.LAST_MODIFIED_DATE_TIME,
        OnboardingEquipmentTypeValue.MDF_SYSTEM_RECORD_STATUS,
        OnboardingEquipmentTypeValue.TYPE,
        OnboardingEquipmentTypeValue.CREATED_BY_NAV,
        OnboardingEquipmentTypeValue.DESCRIPTION_TRANSLATION_TEXT_NAV,
        OnboardingEquipmentTypeValue.LAST_MODIFIED_BY_NAV,
        OnboardingEquipmentTypeValue.MDF_SYSTEM_RECORD_STATUS_NAV,
        OnboardingEquipmentTypeValue.TYPE_NAV,
        OnboardingEquipmentTypeValue.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    OnboardingEquipmentTypeValue.ALL_FIELDS = new core_1.AllFields('*', OnboardingEquipmentTypeValue);
    /**
     * All key fields of the OnboardingEquipmentTypeValue entity.
     */
    OnboardingEquipmentTypeValue._keyFields = [OnboardingEquipmentTypeValue.CODE];
    /**
     * Mapping of all key field names to the respective static field property OnboardingEquipmentTypeValue.
     */
    OnboardingEquipmentTypeValue._keys = OnboardingEquipmentTypeValue._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(OnboardingEquipmentTypeValue = exports.OnboardingEquipmentTypeValue || (exports.OnboardingEquipmentTypeValue = {}));
exports.OnboardingEquipmentTypeValue = OnboardingEquipmentTypeValue;
//# sourceMappingURL=OnboardingEquipmentTypeValue.js.map