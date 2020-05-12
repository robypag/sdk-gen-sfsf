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
var ShiftClassificationRequestBuilder_1 = require("./ShiftClassificationRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ShiftClassification" of service "SFOData".
 */
var ShiftClassification = /** @class */ (function (_super) {
    __extends(ShiftClassification, _super);
    function ShiftClassification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `ShiftClassification`.
     * @returns A builder that constructs instances of entity type `ShiftClassification`.
     */
    ShiftClassification.builder = function () {
        return core_1.Entity.entityBuilder(ShiftClassification);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ShiftClassification` entity type.
     * @returns A `ShiftClassification` request builder.
     */
    ShiftClassification.requestBuilder = function () {
        return new ShiftClassificationRequestBuilder_1.ShiftClassificationRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ShiftClassification`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ShiftClassification`.
     */
    ShiftClassification.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, ShiftClassification);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ShiftClassification.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ShiftClassification.
     */
    ShiftClassification._entityName = 'ShiftClassification';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ShiftClassification.
     */
    ShiftClassification._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    ShiftClassification._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return ShiftClassification;
}(core_1.Entity));
exports.ShiftClassification = ShiftClassification;
var Country_1 = require("./Country");
var User_1 = require("./User");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var MdfEnumValue_1 = require("./MdfEnumValue");
var WfRequest_1 = require("./WfRequest");
(function (ShiftClassification) {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.COUNTRY = new core_1.StringField('country', ShiftClassification, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.CREATED_BY = new core_1.StringField('createdBy', ShiftClassification, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', ShiftClassification, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.EXTERNAL_CODE = new core_1.StringField('externalCode', ShiftClassification, 'Edm.String');
    /**
     * Static representation of the [[externalNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.EXTERNAL_NAME_DE_DE = new core_1.StringField('externalName_de_DE', ShiftClassification, 'Edm.String');
    /**
     * Static representation of the [[externalNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.EXTERNAL_NAME_DEFAULT_VALUE = new core_1.StringField('externalName_defaultValue', ShiftClassification, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.EXTERNAL_NAME_EN_DEBUG = new core_1.StringField('externalName_en_DEBUG', ShiftClassification, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.EXTERNAL_NAME_EN_GB = new core_1.StringField('externalName_en_GB', ShiftClassification, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.EXTERNAL_NAME_EN_US = new core_1.StringField('externalName_en_US', ShiftClassification, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.EXTERNAL_NAME_ES_ES = new core_1.StringField('externalName_es_ES', ShiftClassification, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.EXTERNAL_NAME_ES_MX = new core_1.StringField('externalName_es_MX', ShiftClassification, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.EXTERNAL_NAME_FR_CA = new core_1.StringField('externalName_fr_CA', ShiftClassification, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.EXTERNAL_NAME_FR_FR = new core_1.StringField('externalName_fr_FR', ShiftClassification, 'Edm.String');
    /**
     * Static representation of the [[externalNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.EXTERNAL_NAME_IT_IT = new core_1.StringField('externalName_it_IT', ShiftClassification, 'Edm.String');
    /**
     * Static representation of the [[externalNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.EXTERNAL_NAME_LOCALIZED = new core_1.StringField('externalName_localized', ShiftClassification, 'Edm.String');
    /**
     * Static representation of the [[externalNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.EXTERNAL_NAME_NL_NL = new core_1.StringField('externalName_nl_NL', ShiftClassification, 'Edm.String');
    /**
     * Static representation of the [[externalNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.EXTERNAL_NAME_PT_BR = new core_1.StringField('externalName_pt_BR', ShiftClassification, 'Edm.String');
    /**
     * Static representation of the [[externalNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.EXTERNAL_NAME_ZH_CN = new core_1.StringField('externalName_zh_CN', ShiftClassification, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', ShiftClassification, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', ShiftClassification, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', ShiftClassification, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.COUNTRY_NAV = new core_1.Link('countryNav', ShiftClassification, Country_1.Country);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', ShiftClassification, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.EXTERNAL_NAME_TRANSLATION_TEXT_NAV = new core_1.Link('externalNameTranslationTextNav', ShiftClassification, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', ShiftClassification, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', ShiftClassification, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShiftClassification.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', ShiftClassification, WfRequest_1.WfRequest);
    /**
     * All fields of the ShiftClassification entity.
     */
    ShiftClassification._allFields = [
        ShiftClassification.COUNTRY,
        ShiftClassification.CREATED_BY,
        ShiftClassification.CREATED_DATE_TIME,
        ShiftClassification.EXTERNAL_CODE,
        ShiftClassification.EXTERNAL_NAME_DE_DE,
        ShiftClassification.EXTERNAL_NAME_DEFAULT_VALUE,
        ShiftClassification.EXTERNAL_NAME_EN_DEBUG,
        ShiftClassification.EXTERNAL_NAME_EN_GB,
        ShiftClassification.EXTERNAL_NAME_EN_US,
        ShiftClassification.EXTERNAL_NAME_ES_ES,
        ShiftClassification.EXTERNAL_NAME_ES_MX,
        ShiftClassification.EXTERNAL_NAME_FR_CA,
        ShiftClassification.EXTERNAL_NAME_FR_FR,
        ShiftClassification.EXTERNAL_NAME_IT_IT,
        ShiftClassification.EXTERNAL_NAME_LOCALIZED,
        ShiftClassification.EXTERNAL_NAME_NL_NL,
        ShiftClassification.EXTERNAL_NAME_PT_BR,
        ShiftClassification.EXTERNAL_NAME_ZH_CN,
        ShiftClassification.LAST_MODIFIED_BY,
        ShiftClassification.LAST_MODIFIED_DATE_TIME,
        ShiftClassification.MDF_SYSTEM_RECORD_STATUS,
        ShiftClassification.COUNTRY_NAV,
        ShiftClassification.CREATED_BY_NAV,
        ShiftClassification.EXTERNAL_NAME_TRANSLATION_TEXT_NAV,
        ShiftClassification.LAST_MODIFIED_BY_NAV,
        ShiftClassification.MDF_SYSTEM_RECORD_STATUS_NAV,
        ShiftClassification.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    ShiftClassification.ALL_FIELDS = new core_1.AllFields('*', ShiftClassification);
    /**
     * All key fields of the ShiftClassification entity.
     */
    ShiftClassification._keyFields = [ShiftClassification.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property ShiftClassification.
     */
    ShiftClassification._keys = ShiftClassification._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ShiftClassification = exports.ShiftClassification || (exports.ShiftClassification = {}));
exports.ShiftClassification = ShiftClassification;
//# sourceMappingURL=ShiftClassification.js.map