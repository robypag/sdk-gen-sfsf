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
var AbsenceCountingMethodRequestBuilder_1 = require("./AbsenceCountingMethodRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "AbsenceCountingMethod" of service "SFOData".
 */
var AbsenceCountingMethod = /** @class */ (function (_super) {
    __extends(AbsenceCountingMethod, _super);
    function AbsenceCountingMethod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `AbsenceCountingMethod`.
     * @returns A builder that constructs instances of entity type `AbsenceCountingMethod`.
     */
    AbsenceCountingMethod.builder = function () {
        return core_1.Entity.entityBuilder(AbsenceCountingMethod);
    };
    /**
     * Returns a request builder to construct requests for operations on the `AbsenceCountingMethod` entity type.
     * @returns A `AbsenceCountingMethod` request builder.
     */
    AbsenceCountingMethod.requestBuilder = function () {
        return new AbsenceCountingMethodRequestBuilder_1.AbsenceCountingMethodRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AbsenceCountingMethod`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AbsenceCountingMethod`.
     */
    AbsenceCountingMethod.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, AbsenceCountingMethod);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    AbsenceCountingMethod.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for AbsenceCountingMethod.
     */
    AbsenceCountingMethod._entityName = 'AbsenceCountingMethod';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for AbsenceCountingMethod.
     */
    AbsenceCountingMethod._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    AbsenceCountingMethod._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return AbsenceCountingMethod;
}(core_1.Entity));
exports.AbsenceCountingMethod = AbsenceCountingMethod;
var MdfEnumValue_1 = require("./MdfEnumValue");
var Country_1 = require("./Country");
var User_1 = require("./User");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var WfRequest_1 = require("./WfRequest");
(function (AbsenceCountingMethod) {
    /**
     * Static representation of the [[base]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.BASE = new core_1.StringField('base', AbsenceCountingMethod, 'Edm.String');
    /**
     * Static representation of the [[considerHolidays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.CONSIDER_HOLIDAYS = new core_1.BooleanField('considerHolidays', AbsenceCountingMethod, 'Edm.Boolean');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.COUNTRY = new core_1.StringField('country', AbsenceCountingMethod, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.CREATED_BY = new core_1.StringField('createdBy', AbsenceCountingMethod, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', AbsenceCountingMethod, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[deductionFactor]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.DEDUCTION_FACTOR = new core_1.BigNumberField('deductionFactor', AbsenceCountingMethod, 'Edm.Decimal');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.EXTERNAL_CODE = new core_1.StringField('externalCode', AbsenceCountingMethod, 'Edm.String');
    /**
     * Static representation of the [[externalNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.EXTERNAL_NAME_DE_DE = new core_1.StringField('externalName_de_DE', AbsenceCountingMethod, 'Edm.String');
    /**
     * Static representation of the [[externalNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.EXTERNAL_NAME_DEFAULT_VALUE = new core_1.StringField('externalName_defaultValue', AbsenceCountingMethod, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.EXTERNAL_NAME_EN_DEBUG = new core_1.StringField('externalName_en_DEBUG', AbsenceCountingMethod, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.EXTERNAL_NAME_EN_GB = new core_1.StringField('externalName_en_GB', AbsenceCountingMethod, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.EXTERNAL_NAME_EN_US = new core_1.StringField('externalName_en_US', AbsenceCountingMethod, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.EXTERNAL_NAME_ES_ES = new core_1.StringField('externalName_es_ES', AbsenceCountingMethod, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.EXTERNAL_NAME_ES_MX = new core_1.StringField('externalName_es_MX', AbsenceCountingMethod, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.EXTERNAL_NAME_FR_CA = new core_1.StringField('externalName_fr_CA', AbsenceCountingMethod, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.EXTERNAL_NAME_FR_FR = new core_1.StringField('externalName_fr_FR', AbsenceCountingMethod, 'Edm.String');
    /**
     * Static representation of the [[externalNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.EXTERNAL_NAME_IT_IT = new core_1.StringField('externalName_it_IT', AbsenceCountingMethod, 'Edm.String');
    /**
     * Static representation of the [[externalNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.EXTERNAL_NAME_LOCALIZED = new core_1.StringField('externalName_localized', AbsenceCountingMethod, 'Edm.String');
    /**
     * Static representation of the [[externalNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.EXTERNAL_NAME_NL_NL = new core_1.StringField('externalName_nl_NL', AbsenceCountingMethod, 'Edm.String');
    /**
     * Static representation of the [[externalNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.EXTERNAL_NAME_PT_BR = new core_1.StringField('externalName_pt_BR', AbsenceCountingMethod, 'Edm.String');
    /**
     * Static representation of the [[externalNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.EXTERNAL_NAME_ZH_CN = new core_1.StringField('externalName_zh_CN', AbsenceCountingMethod, 'Edm.String');
    /**
     * Static representation of the [[friday]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.FRIDAY = new core_1.BooleanField('friday', AbsenceCountingMethod, 'Edm.Boolean');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', AbsenceCountingMethod, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', AbsenceCountingMethod, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', AbsenceCountingMethod, 'Edm.String');
    /**
     * Static representation of the [[monday]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.MONDAY = new core_1.BooleanField('monday', AbsenceCountingMethod, 'Edm.Boolean');
    /**
     * Static representation of the [[saturday]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.SATURDAY = new core_1.BooleanField('saturday', AbsenceCountingMethod, 'Edm.Boolean');
    /**
     * Static representation of the [[sunday]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.SUNDAY = new core_1.BooleanField('sunday', AbsenceCountingMethod, 'Edm.Boolean');
    /**
     * Static representation of the [[thursday]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.THURSDAY = new core_1.BooleanField('thursday', AbsenceCountingMethod, 'Edm.Boolean');
    /**
     * Static representation of the [[tuesday]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.TUESDAY = new core_1.BooleanField('tuesday', AbsenceCountingMethod, 'Edm.Boolean');
    /**
     * Static representation of the [[wednesday]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.WEDNESDAY = new core_1.BooleanField('wednesday', AbsenceCountingMethod, 'Edm.Boolean');
    /**
     * Static representation of the one-to-one navigation property [[baseNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.BASE_NAV = new core_1.OneToOneLink('baseNav', AbsenceCountingMethod, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.COUNTRY_NAV = new core_1.Link('countryNav', AbsenceCountingMethod, Country_1.Country);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', AbsenceCountingMethod, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.EXTERNAL_NAME_TRANSLATION_TEXT_NAV = new core_1.Link('externalNameTranslationTextNav', AbsenceCountingMethod, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', AbsenceCountingMethod, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', AbsenceCountingMethod, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AbsenceCountingMethod.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', AbsenceCountingMethod, WfRequest_1.WfRequest);
    /**
     * All fields of the AbsenceCountingMethod entity.
     */
    AbsenceCountingMethod._allFields = [
        AbsenceCountingMethod.BASE,
        AbsenceCountingMethod.CONSIDER_HOLIDAYS,
        AbsenceCountingMethod.COUNTRY,
        AbsenceCountingMethod.CREATED_BY,
        AbsenceCountingMethod.CREATED_DATE_TIME,
        AbsenceCountingMethod.DEDUCTION_FACTOR,
        AbsenceCountingMethod.EXTERNAL_CODE,
        AbsenceCountingMethod.EXTERNAL_NAME_DE_DE,
        AbsenceCountingMethod.EXTERNAL_NAME_DEFAULT_VALUE,
        AbsenceCountingMethod.EXTERNAL_NAME_EN_DEBUG,
        AbsenceCountingMethod.EXTERNAL_NAME_EN_GB,
        AbsenceCountingMethod.EXTERNAL_NAME_EN_US,
        AbsenceCountingMethod.EXTERNAL_NAME_ES_ES,
        AbsenceCountingMethod.EXTERNAL_NAME_ES_MX,
        AbsenceCountingMethod.EXTERNAL_NAME_FR_CA,
        AbsenceCountingMethod.EXTERNAL_NAME_FR_FR,
        AbsenceCountingMethod.EXTERNAL_NAME_IT_IT,
        AbsenceCountingMethod.EXTERNAL_NAME_LOCALIZED,
        AbsenceCountingMethod.EXTERNAL_NAME_NL_NL,
        AbsenceCountingMethod.EXTERNAL_NAME_PT_BR,
        AbsenceCountingMethod.EXTERNAL_NAME_ZH_CN,
        AbsenceCountingMethod.FRIDAY,
        AbsenceCountingMethod.LAST_MODIFIED_BY,
        AbsenceCountingMethod.LAST_MODIFIED_DATE_TIME,
        AbsenceCountingMethod.MDF_SYSTEM_RECORD_STATUS,
        AbsenceCountingMethod.MONDAY,
        AbsenceCountingMethod.SATURDAY,
        AbsenceCountingMethod.SUNDAY,
        AbsenceCountingMethod.THURSDAY,
        AbsenceCountingMethod.TUESDAY,
        AbsenceCountingMethod.WEDNESDAY,
        AbsenceCountingMethod.BASE_NAV,
        AbsenceCountingMethod.COUNTRY_NAV,
        AbsenceCountingMethod.CREATED_BY_NAV,
        AbsenceCountingMethod.EXTERNAL_NAME_TRANSLATION_TEXT_NAV,
        AbsenceCountingMethod.LAST_MODIFIED_BY_NAV,
        AbsenceCountingMethod.MDF_SYSTEM_RECORD_STATUS_NAV,
        AbsenceCountingMethod.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    AbsenceCountingMethod.ALL_FIELDS = new core_1.AllFields('*', AbsenceCountingMethod);
    /**
     * All key fields of the AbsenceCountingMethod entity.
     */
    AbsenceCountingMethod._keyFields = [AbsenceCountingMethod.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property AbsenceCountingMethod.
     */
    AbsenceCountingMethod._keys = AbsenceCountingMethod._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(AbsenceCountingMethod = exports.AbsenceCountingMethod || (exports.AbsenceCountingMethod = {}));
exports.AbsenceCountingMethod = AbsenceCountingMethod;
//# sourceMappingURL=AbsenceCountingMethod.js.map