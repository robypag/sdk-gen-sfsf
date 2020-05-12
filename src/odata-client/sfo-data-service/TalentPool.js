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
var TalentPoolRequestBuilder_1 = require("./TalentPoolRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "TalentPool" of service "SFOData".
 */
var TalentPool = /** @class */ (function (_super) {
    __extends(TalentPool, _super);
    function TalentPool() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `TalentPool`.
     * @returns A builder that constructs instances of entity type `TalentPool`.
     */
    TalentPool.builder = function () {
        return core_1.Entity.entityBuilder(TalentPool);
    };
    /**
     * Returns a request builder to construct requests for operations on the `TalentPool` entity type.
     * @returns A `TalentPool` request builder.
     */
    TalentPool.requestBuilder = function () {
        return new TalentPoolRequestBuilder_1.TalentPoolRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TalentPool`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TalentPool`.
     */
    TalentPool.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, TalentPool);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    TalentPool.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for TalentPool.
     */
    TalentPool._entityName = 'TalentPool';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TalentPool.
     */
    TalentPool._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    TalentPool._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return TalentPool;
}(core_1.Entity));
exports.TalentPool = TalentPool;
var User_1 = require("./User");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var MdfEnumValue_1 = require("./MdfEnumValue");
var Successor_1 = require("./Successor");
var PickListValueV2_1 = require("./PickListValueV2");
var WfRequest_1 = require("./WfRequest");
(function (TalentPool) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.CODE = new core_1.StringField('code', TalentPool, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.CREATED_BY = new core_1.StringField('createdBy', TalentPool, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', TalentPool, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[descriptionDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.DESCRIPTION_DE_DE = new core_1.StringField('description_de_DE', TalentPool, 'Edm.String');
    /**
     * Static representation of the [[descriptionDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.DESCRIPTION_DEFAULT_VALUE = new core_1.StringField('description_defaultValue', TalentPool, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.DESCRIPTION_EN_DEBUG = new core_1.StringField('description_en_DEBUG', TalentPool, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.DESCRIPTION_EN_GB = new core_1.StringField('description_en_GB', TalentPool, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.DESCRIPTION_EN_US = new core_1.StringField('description_en_US', TalentPool, 'Edm.String');
    /**
     * Static representation of the [[descriptionEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.DESCRIPTION_ES_ES = new core_1.StringField('description_es_ES', TalentPool, 'Edm.String');
    /**
     * Static representation of the [[descriptionEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.DESCRIPTION_ES_MX = new core_1.StringField('description_es_MX', TalentPool, 'Edm.String');
    /**
     * Static representation of the [[descriptionFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.DESCRIPTION_FR_CA = new core_1.StringField('description_fr_CA', TalentPool, 'Edm.String');
    /**
     * Static representation of the [[descriptionFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.DESCRIPTION_FR_FR = new core_1.StringField('description_fr_FR', TalentPool, 'Edm.String');
    /**
     * Static representation of the [[descriptionItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.DESCRIPTION_IT_IT = new core_1.StringField('description_it_IT', TalentPool, 'Edm.String');
    /**
     * Static representation of the [[descriptionLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.DESCRIPTION_LOCALIZED = new core_1.StringField('description_localized', TalentPool, 'Edm.String');
    /**
     * Static representation of the [[descriptionNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.DESCRIPTION_NL_NL = new core_1.StringField('description_nl_NL', TalentPool, 'Edm.String');
    /**
     * Static representation of the [[descriptionPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.DESCRIPTION_PT_BR = new core_1.StringField('description_pt_BR', TalentPool, 'Edm.String');
    /**
     * Static representation of the [[descriptionZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.DESCRIPTION_ZH_CN = new core_1.StringField('description_zh_CN', TalentPool, 'Edm.String');
    /**
     * Static representation of the [[effectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.EFFECTIVE_END_DATE = new core_1.DateField('effectiveEndDate', TalentPool, 'Edm.DateTime');
    /**
     * Static representation of the [[effectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.EFFECTIVE_START_DATE = new core_1.DateField('effectiveStartDate', TalentPool, 'Edm.DateTime');
    /**
     * Static representation of the [[effectiveStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.EFFECTIVE_STATUS = new core_1.StringField('effectiveStatus', TalentPool, 'Edm.String');
    /**
     * Static representation of the [[enableReadiness]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.ENABLE_READINESS = new core_1.BooleanField('enableReadiness', TalentPool, 'Edm.Boolean');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', TalentPool, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', TalentPool, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', TalentPool, 'Edm.String');
    /**
     * Static representation of the [[nameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.NAME_DE_DE = new core_1.StringField('name_de_DE', TalentPool, 'Edm.String');
    /**
     * Static representation of the [[nameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.NAME_DEFAULT_VALUE = new core_1.StringField('name_defaultValue', TalentPool, 'Edm.String');
    /**
     * Static representation of the [[nameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.NAME_EN_DEBUG = new core_1.StringField('name_en_DEBUG', TalentPool, 'Edm.String');
    /**
     * Static representation of the [[nameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.NAME_EN_GB = new core_1.StringField('name_en_GB', TalentPool, 'Edm.String');
    /**
     * Static representation of the [[nameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.NAME_EN_US = new core_1.StringField('name_en_US', TalentPool, 'Edm.String');
    /**
     * Static representation of the [[nameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.NAME_ES_ES = new core_1.StringField('name_es_ES', TalentPool, 'Edm.String');
    /**
     * Static representation of the [[nameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.NAME_ES_MX = new core_1.StringField('name_es_MX', TalentPool, 'Edm.String');
    /**
     * Static representation of the [[nameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.NAME_FR_CA = new core_1.StringField('name_fr_CA', TalentPool, 'Edm.String');
    /**
     * Static representation of the [[nameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.NAME_FR_FR = new core_1.StringField('name_fr_FR', TalentPool, 'Edm.String');
    /**
     * Static representation of the [[nameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.NAME_IT_IT = new core_1.StringField('name_it_IT', TalentPool, 'Edm.String');
    /**
     * Static representation of the [[nameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.NAME_LOCALIZED = new core_1.StringField('name_localized', TalentPool, 'Edm.String');
    /**
     * Static representation of the [[nameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.NAME_NL_NL = new core_1.StringField('name_nl_NL', TalentPool, 'Edm.String');
    /**
     * Static representation of the [[namePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.NAME_PT_BR = new core_1.StringField('name_pt_BR', TalentPool, 'Edm.String');
    /**
     * Static representation of the [[nameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.NAME_ZH_CN = new core_1.StringField('name_zh_CN', TalentPool, 'Edm.String');
    /**
     * Static representation of the [[owner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.OWNER = new core_1.StringField('owner', TalentPool, 'Edm.String');
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.TYPE = new core_1.StringField('type', TalentPool, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', TalentPool, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.DESCRIPTION_TRANSLATION_TEXT_NAV = new core_1.Link('descriptionTranslationTextNav', TalentPool, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[effectiveStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.EFFECTIVE_STATUS_NAV = new core_1.OneToOneLink('effectiveStatusNav', TalentPool, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', TalentPool, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', TalentPool, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[nameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.NAME_TRANSLATION_TEXT_NAV = new core_1.Link('nameTranslationTextNav', TalentPool, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[ownerNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.OWNER_NAV = new core_1.OneToOneLink('ownerNav', TalentPool, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[successorNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.SUCCESSOR_NAV = new core_1.Link('successorNav', TalentPool, Successor_1.Successor);
    /**
     * Static representation of the one-to-one navigation property [[typeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.TYPE_NAV = new core_1.OneToOneLink('typeNav', TalentPool, PickListValueV2_1.PickListValueV2);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentPool.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', TalentPool, WfRequest_1.WfRequest);
    /**
     * All fields of the TalentPool entity.
     */
    TalentPool._allFields = [
        TalentPool.CODE,
        TalentPool.CREATED_BY,
        TalentPool.CREATED_DATE_TIME,
        TalentPool.DESCRIPTION_DE_DE,
        TalentPool.DESCRIPTION_DEFAULT_VALUE,
        TalentPool.DESCRIPTION_EN_DEBUG,
        TalentPool.DESCRIPTION_EN_GB,
        TalentPool.DESCRIPTION_EN_US,
        TalentPool.DESCRIPTION_ES_ES,
        TalentPool.DESCRIPTION_ES_MX,
        TalentPool.DESCRIPTION_FR_CA,
        TalentPool.DESCRIPTION_FR_FR,
        TalentPool.DESCRIPTION_IT_IT,
        TalentPool.DESCRIPTION_LOCALIZED,
        TalentPool.DESCRIPTION_NL_NL,
        TalentPool.DESCRIPTION_PT_BR,
        TalentPool.DESCRIPTION_ZH_CN,
        TalentPool.EFFECTIVE_END_DATE,
        TalentPool.EFFECTIVE_START_DATE,
        TalentPool.EFFECTIVE_STATUS,
        TalentPool.ENABLE_READINESS,
        TalentPool.LAST_MODIFIED_BY,
        TalentPool.LAST_MODIFIED_DATE_TIME,
        TalentPool.MDF_SYSTEM_RECORD_STATUS,
        TalentPool.NAME_DE_DE,
        TalentPool.NAME_DEFAULT_VALUE,
        TalentPool.NAME_EN_DEBUG,
        TalentPool.NAME_EN_GB,
        TalentPool.NAME_EN_US,
        TalentPool.NAME_ES_ES,
        TalentPool.NAME_ES_MX,
        TalentPool.NAME_FR_CA,
        TalentPool.NAME_FR_FR,
        TalentPool.NAME_IT_IT,
        TalentPool.NAME_LOCALIZED,
        TalentPool.NAME_NL_NL,
        TalentPool.NAME_PT_BR,
        TalentPool.NAME_ZH_CN,
        TalentPool.OWNER,
        TalentPool.TYPE,
        TalentPool.CREATED_BY_NAV,
        TalentPool.DESCRIPTION_TRANSLATION_TEXT_NAV,
        TalentPool.EFFECTIVE_STATUS_NAV,
        TalentPool.LAST_MODIFIED_BY_NAV,
        TalentPool.MDF_SYSTEM_RECORD_STATUS_NAV,
        TalentPool.NAME_TRANSLATION_TEXT_NAV,
        TalentPool.OWNER_NAV,
        TalentPool.SUCCESSOR_NAV,
        TalentPool.TYPE_NAV,
        TalentPool.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    TalentPool.ALL_FIELDS = new core_1.AllFields('*', TalentPool);
    /**
     * All key fields of the TalentPool entity.
     */
    TalentPool._keyFields = [TalentPool.CODE, TalentPool.EFFECTIVE_START_DATE];
    /**
     * Mapping of all key field names to the respective static field property TalentPool.
     */
    TalentPool._keys = TalentPool._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(TalentPool = exports.TalentPool || (exports.TalentPool = {}));
exports.TalentPool = TalentPool;
//# sourceMappingURL=TalentPool.js.map