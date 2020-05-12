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
var FoTranslationRequestBuilder_1 = require("./FoTranslationRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FoTranslation" of service "SFOData".
 */
var FoTranslation = /** @class */ (function (_super) {
    __extends(FoTranslation, _super);
    function FoTranslation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FoTranslation`.
     * @returns A builder that constructs instances of entity type `FoTranslation`.
     */
    FoTranslation.builder = function () {
        return core_1.Entity.entityBuilder(FoTranslation);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FoTranslation` entity type.
     * @returns A `FoTranslation` request builder.
     */
    FoTranslation.requestBuilder = function () {
        return new FoTranslationRequestBuilder_1.FoTranslationRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoTranslation`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoTranslation`.
     */
    FoTranslation.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FoTranslation);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FoTranslation.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FoTranslation.
     */
    FoTranslation._entityName = 'FoTranslation';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoTranslation.
     */
    FoTranslation._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FoTranslation._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FoTranslation;
}(core_1.Entity));
exports.FoTranslation = FoTranslation;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var WfRequest_1 = require("./WfRequest");
(function (FoTranslation) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoTranslation.CREATED_BY = new core_1.StringField('createdBy', FoTranslation, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoTranslation.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', FoTranslation, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoTranslation.EXTERNAL_CODE = new core_1.StringField('externalCode', FoTranslation, 'Edm.String');
    /**
     * Static representation of the [[foField]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoTranslation.FO_FIELD = new core_1.StringField('foField', FoTranslation, 'Edm.String');
    /**
     * Static representation of the [[foObjectId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoTranslation.FO_OBJECT_ID = new core_1.StringField('foObjectID', FoTranslation, 'Edm.String');
    /**
     * Static representation of the [[foType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoTranslation.FO_TYPE = new core_1.StringField('foType', FoTranslation, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoTranslation.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', FoTranslation, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoTranslation.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', FoTranslation, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoTranslation.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', FoTranslation, 'Edm.String');
    /**
     * Static representation of the [[valueDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoTranslation.VALUE_DE_DE = new core_1.StringField('value_de_DE', FoTranslation, 'Edm.String');
    /**
     * Static representation of the [[valueDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoTranslation.VALUE_DEFAULT_VALUE = new core_1.StringField('value_defaultValue', FoTranslation, 'Edm.String');
    /**
     * Static representation of the [[valueEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoTranslation.VALUE_EN_DEBUG = new core_1.StringField('value_en_DEBUG', FoTranslation, 'Edm.String');
    /**
     * Static representation of the [[valueEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoTranslation.VALUE_EN_GB = new core_1.StringField('value_en_GB', FoTranslation, 'Edm.String');
    /**
     * Static representation of the [[valueEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoTranslation.VALUE_EN_US = new core_1.StringField('value_en_US', FoTranslation, 'Edm.String');
    /**
     * Static representation of the [[valueEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoTranslation.VALUE_ES_ES = new core_1.StringField('value_es_ES', FoTranslation, 'Edm.String');
    /**
     * Static representation of the [[valueEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoTranslation.VALUE_ES_MX = new core_1.StringField('value_es_MX', FoTranslation, 'Edm.String');
    /**
     * Static representation of the [[valueFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoTranslation.VALUE_FR_CA = new core_1.StringField('value_fr_CA', FoTranslation, 'Edm.String');
    /**
     * Static representation of the [[valueFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoTranslation.VALUE_FR_FR = new core_1.StringField('value_fr_FR', FoTranslation, 'Edm.String');
    /**
     * Static representation of the [[valueItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoTranslation.VALUE_IT_IT = new core_1.StringField('value_it_IT', FoTranslation, 'Edm.String');
    /**
     * Static representation of the [[valueLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoTranslation.VALUE_LOCALIZED = new core_1.StringField('value_localized', FoTranslation, 'Edm.String');
    /**
     * Static representation of the [[valueNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoTranslation.VALUE_NL_NL = new core_1.StringField('value_nl_NL', FoTranslation, 'Edm.String');
    /**
     * Static representation of the [[valuePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoTranslation.VALUE_PT_BR = new core_1.StringField('value_pt_BR', FoTranslation, 'Edm.String');
    /**
     * Static representation of the [[valueZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoTranslation.VALUE_ZH_CN = new core_1.StringField('value_zh_CN', FoTranslation, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoTranslation.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', FoTranslation, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoTranslation.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', FoTranslation, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoTranslation.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', FoTranslation, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[valueTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoTranslation.VALUE_TRANSLATION_TEXT_NAV = new core_1.Link('valueTranslationTextNav', FoTranslation, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoTranslation.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', FoTranslation, WfRequest_1.WfRequest);
    /**
     * All fields of the FoTranslation entity.
     */
    FoTranslation._allFields = [
        FoTranslation.CREATED_BY,
        FoTranslation.CREATED_DATE_TIME,
        FoTranslation.EXTERNAL_CODE,
        FoTranslation.FO_FIELD,
        FoTranslation.FO_OBJECT_ID,
        FoTranslation.FO_TYPE,
        FoTranslation.LAST_MODIFIED_BY,
        FoTranslation.LAST_MODIFIED_DATE_TIME,
        FoTranslation.MDF_SYSTEM_RECORD_STATUS,
        FoTranslation.VALUE_DE_DE,
        FoTranslation.VALUE_DEFAULT_VALUE,
        FoTranslation.VALUE_EN_DEBUG,
        FoTranslation.VALUE_EN_GB,
        FoTranslation.VALUE_EN_US,
        FoTranslation.VALUE_ES_ES,
        FoTranslation.VALUE_ES_MX,
        FoTranslation.VALUE_FR_CA,
        FoTranslation.VALUE_FR_FR,
        FoTranslation.VALUE_IT_IT,
        FoTranslation.VALUE_LOCALIZED,
        FoTranslation.VALUE_NL_NL,
        FoTranslation.VALUE_PT_BR,
        FoTranslation.VALUE_ZH_CN,
        FoTranslation.CREATED_BY_NAV,
        FoTranslation.LAST_MODIFIED_BY_NAV,
        FoTranslation.MDF_SYSTEM_RECORD_STATUS_NAV,
        FoTranslation.VALUE_TRANSLATION_TEXT_NAV,
        FoTranslation.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    FoTranslation.ALL_FIELDS = new core_1.AllFields('*', FoTranslation);
    /**
     * All key fields of the FoTranslation entity.
     */
    FoTranslation._keyFields = [FoTranslation.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property FoTranslation.
     */
    FoTranslation._keys = FoTranslation._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FoTranslation = exports.FoTranslation || (exports.FoTranslation = {}));
exports.FoTranslation = FoTranslation;
//# sourceMappingURL=FoTranslation.js.map