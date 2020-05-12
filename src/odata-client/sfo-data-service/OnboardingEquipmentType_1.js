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
var OnboardingEquipmentType_1RequestBuilder_1 = require("./OnboardingEquipmentType_1RequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "OnboardingEquipmentType" of service "SFOData".
 */
var OnboardingEquipmentType_1 = /** @class */ (function (_super) {
    __extends(OnboardingEquipmentType_1, _super);
    function OnboardingEquipmentType_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `OnboardingEquipmentType_1`.
     * @returns A builder that constructs instances of entity type `OnboardingEquipmentType_1`.
     */
    OnboardingEquipmentType_1.builder = function () {
        return core_1.Entity.entityBuilder(OnboardingEquipmentType_1);
    };
    /**
     * Returns a request builder to construct requests for operations on the `OnboardingEquipmentType_1` entity type.
     * @returns A `OnboardingEquipmentType_1` request builder.
     */
    OnboardingEquipmentType_1.requestBuilder = function () {
        return new OnboardingEquipmentType_1RequestBuilder_1.OnboardingEquipmentType_1RequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `OnboardingEquipmentType_1`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `OnboardingEquipmentType_1`.
     */
    OnboardingEquipmentType_1.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, OnboardingEquipmentType_1);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    OnboardingEquipmentType_1.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for OnboardingEquipmentType_1.
     */
    OnboardingEquipmentType_1._entityName = 'OnboardingEquipmentType';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for OnboardingEquipmentType_1.
     */
    OnboardingEquipmentType_1._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    OnboardingEquipmentType_1._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return OnboardingEquipmentType_1;
}(core_1.Entity));
exports.OnboardingEquipmentType_1 = OnboardingEquipmentType_1;
var User_1 = require("./User");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var Attachment_1 = require("./Attachment");
var MdfEnumValue_1 = require("./MdfEnumValue");
var WfRequest_1 = require("./WfRequest");
(function (OnboardingEquipmentType_1) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentType_1.CODE = new core_1.StringField('code', OnboardingEquipmentType_1, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentType_1.CREATED_BY = new core_1.StringField('createdBy', OnboardingEquipmentType_1, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentType_1.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', OnboardingEquipmentType_1, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[descriptionDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentType_1.DESCRIPTION_DE_DE = new core_1.StringField('description_de_DE', OnboardingEquipmentType_1, 'Edm.String');
    /**
     * Static representation of the [[descriptionDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentType_1.DESCRIPTION_DEFAULT_VALUE = new core_1.StringField('description_defaultValue', OnboardingEquipmentType_1, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentType_1.DESCRIPTION_EN_DEBUG = new core_1.StringField('description_en_DEBUG', OnboardingEquipmentType_1, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentType_1.DESCRIPTION_EN_GB = new core_1.StringField('description_en_GB', OnboardingEquipmentType_1, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentType_1.DESCRIPTION_EN_US = new core_1.StringField('description_en_US', OnboardingEquipmentType_1, 'Edm.String');
    /**
     * Static representation of the [[descriptionEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentType_1.DESCRIPTION_ES_ES = new core_1.StringField('description_es_ES', OnboardingEquipmentType_1, 'Edm.String');
    /**
     * Static representation of the [[descriptionEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentType_1.DESCRIPTION_ES_MX = new core_1.StringField('description_es_MX', OnboardingEquipmentType_1, 'Edm.String');
    /**
     * Static representation of the [[descriptionFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentType_1.DESCRIPTION_FR_CA = new core_1.StringField('description_fr_CA', OnboardingEquipmentType_1, 'Edm.String');
    /**
     * Static representation of the [[descriptionFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentType_1.DESCRIPTION_FR_FR = new core_1.StringField('description_fr_FR', OnboardingEquipmentType_1, 'Edm.String');
    /**
     * Static representation of the [[descriptionItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentType_1.DESCRIPTION_IT_IT = new core_1.StringField('description_it_IT', OnboardingEquipmentType_1, 'Edm.String');
    /**
     * Static representation of the [[descriptionLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentType_1.DESCRIPTION_LOCALIZED = new core_1.StringField('description_localized', OnboardingEquipmentType_1, 'Edm.String');
    /**
     * Static representation of the [[descriptionNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentType_1.DESCRIPTION_NL_NL = new core_1.StringField('description_nl_NL', OnboardingEquipmentType_1, 'Edm.String');
    /**
     * Static representation of the [[descriptionPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentType_1.DESCRIPTION_PT_BR = new core_1.StringField('description_pt_BR', OnboardingEquipmentType_1, 'Edm.String');
    /**
     * Static representation of the [[descriptionZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentType_1.DESCRIPTION_ZH_CN = new core_1.StringField('description_zh_CN', OnboardingEquipmentType_1, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentType_1.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', OnboardingEquipmentType_1, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentType_1.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', OnboardingEquipmentType_1, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentType_1.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', OnboardingEquipmentType_1, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentType_1.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', OnboardingEquipmentType_1, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentType_1.DESCRIPTION_TRANSLATION_TEXT_NAV = new core_1.Link('descriptionTranslationTextNav', OnboardingEquipmentType_1, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[iconNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentType_1.ICON_NAV = new core_1.OneToOneLink('iconNav', OnboardingEquipmentType_1, Attachment_1.Attachment);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentType_1.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', OnboardingEquipmentType_1, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentType_1.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', OnboardingEquipmentType_1, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OnboardingEquipmentType_1.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', OnboardingEquipmentType_1, WfRequest_1.WfRequest);
    /**
     * All fields of the OnboardingEquipmentType_1 entity.
     */
    OnboardingEquipmentType_1._allFields = [
        OnboardingEquipmentType_1.CODE,
        OnboardingEquipmentType_1.CREATED_BY,
        OnboardingEquipmentType_1.CREATED_DATE_TIME,
        OnboardingEquipmentType_1.DESCRIPTION_DE_DE,
        OnboardingEquipmentType_1.DESCRIPTION_DEFAULT_VALUE,
        OnboardingEquipmentType_1.DESCRIPTION_EN_DEBUG,
        OnboardingEquipmentType_1.DESCRIPTION_EN_GB,
        OnboardingEquipmentType_1.DESCRIPTION_EN_US,
        OnboardingEquipmentType_1.DESCRIPTION_ES_ES,
        OnboardingEquipmentType_1.DESCRIPTION_ES_MX,
        OnboardingEquipmentType_1.DESCRIPTION_FR_CA,
        OnboardingEquipmentType_1.DESCRIPTION_FR_FR,
        OnboardingEquipmentType_1.DESCRIPTION_IT_IT,
        OnboardingEquipmentType_1.DESCRIPTION_LOCALIZED,
        OnboardingEquipmentType_1.DESCRIPTION_NL_NL,
        OnboardingEquipmentType_1.DESCRIPTION_PT_BR,
        OnboardingEquipmentType_1.DESCRIPTION_ZH_CN,
        OnboardingEquipmentType_1.LAST_MODIFIED_BY,
        OnboardingEquipmentType_1.LAST_MODIFIED_DATE_TIME,
        OnboardingEquipmentType_1.MDF_SYSTEM_RECORD_STATUS,
        OnboardingEquipmentType_1.CREATED_BY_NAV,
        OnboardingEquipmentType_1.DESCRIPTION_TRANSLATION_TEXT_NAV,
        OnboardingEquipmentType_1.ICON_NAV,
        OnboardingEquipmentType_1.LAST_MODIFIED_BY_NAV,
        OnboardingEquipmentType_1.MDF_SYSTEM_RECORD_STATUS_NAV,
        OnboardingEquipmentType_1.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    OnboardingEquipmentType_1.ALL_FIELDS = new core_1.AllFields('*', OnboardingEquipmentType_1);
    /**
     * All key fields of the OnboardingEquipmentType_1 entity.
     */
    OnboardingEquipmentType_1._keyFields = [OnboardingEquipmentType_1.CODE];
    /**
     * Mapping of all key field names to the respective static field property OnboardingEquipmentType_1.
     */
    OnboardingEquipmentType_1._keys = OnboardingEquipmentType_1._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(OnboardingEquipmentType_1 = exports.OnboardingEquipmentType_1 || (exports.OnboardingEquipmentType_1 = {}));
exports.OnboardingEquipmentType_1 = OnboardingEquipmentType_1;
//# sourceMappingURL=OnboardingEquipmentType_1.js.map