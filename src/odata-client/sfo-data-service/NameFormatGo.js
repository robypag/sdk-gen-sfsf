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
var NameFormatGoRequestBuilder_1 = require("./NameFormatGoRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "NameFormatGO" of service "SFOData".
 */
var NameFormatGo = /** @class */ (function (_super) {
    __extends(NameFormatGo, _super);
    function NameFormatGo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `NameFormatGo`.
     * @returns A builder that constructs instances of entity type `NameFormatGo`.
     */
    NameFormatGo.builder = function () {
        return core_1.Entity.entityBuilder(NameFormatGo);
    };
    /**
     * Returns a request builder to construct requests for operations on the `NameFormatGo` entity type.
     * @returns A `NameFormatGo` request builder.
     */
    NameFormatGo.requestBuilder = function () {
        return new NameFormatGoRequestBuilder_1.NameFormatGoRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `NameFormatGo`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `NameFormatGo`.
     */
    NameFormatGo.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, NameFormatGo);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    NameFormatGo.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for NameFormatGo.
     */
    NameFormatGo._entityName = 'NameFormatGO';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for NameFormatGo.
     */
    NameFormatGo._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    NameFormatGo._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return NameFormatGo;
}(core_1.Entity));
exports.NameFormatGo = NameFormatGo;
var User_1 = require("./User");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var MdfEnumValue_1 = require("./MdfEnumValue");
var NameElementGo_1 = require("./NameElementGo");
var WfRequest_1 = require("./WfRequest");
(function (NameFormatGo) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NameFormatGo.CREATED_BY = new core_1.StringField('createdBy', NameFormatGo, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NameFormatGo.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', NameFormatGo, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NameFormatGo.EXTERNAL_CODE = new core_1.StringField('externalCode', NameFormatGo, 'Edm.String');
    /**
     * Static representation of the [[externalNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NameFormatGo.EXTERNAL_NAME_DE_DE = new core_1.StringField('externalName_de_DE', NameFormatGo, 'Edm.String');
    /**
     * Static representation of the [[externalNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NameFormatGo.EXTERNAL_NAME_DEFAULT_VALUE = new core_1.StringField('externalName_defaultValue', NameFormatGo, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NameFormatGo.EXTERNAL_NAME_EN_DEBUG = new core_1.StringField('externalName_en_DEBUG', NameFormatGo, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NameFormatGo.EXTERNAL_NAME_EN_GB = new core_1.StringField('externalName_en_GB', NameFormatGo, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NameFormatGo.EXTERNAL_NAME_EN_US = new core_1.StringField('externalName_en_US', NameFormatGo, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NameFormatGo.EXTERNAL_NAME_ES_ES = new core_1.StringField('externalName_es_ES', NameFormatGo, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NameFormatGo.EXTERNAL_NAME_ES_MX = new core_1.StringField('externalName_es_MX', NameFormatGo, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NameFormatGo.EXTERNAL_NAME_FR_CA = new core_1.StringField('externalName_fr_CA', NameFormatGo, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NameFormatGo.EXTERNAL_NAME_FR_FR = new core_1.StringField('externalName_fr_FR', NameFormatGo, 'Edm.String');
    /**
     * Static representation of the [[externalNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NameFormatGo.EXTERNAL_NAME_IT_IT = new core_1.StringField('externalName_it_IT', NameFormatGo, 'Edm.String');
    /**
     * Static representation of the [[externalNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NameFormatGo.EXTERNAL_NAME_LOCALIZED = new core_1.StringField('externalName_localized', NameFormatGo, 'Edm.String');
    /**
     * Static representation of the [[externalNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NameFormatGo.EXTERNAL_NAME_NL_NL = new core_1.StringField('externalName_nl_NL', NameFormatGo, 'Edm.String');
    /**
     * Static representation of the [[externalNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NameFormatGo.EXTERNAL_NAME_PT_BR = new core_1.StringField('externalName_pt_BR', NameFormatGo, 'Edm.String');
    /**
     * Static representation of the [[externalNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NameFormatGo.EXTERNAL_NAME_ZH_CN = new core_1.StringField('externalName_zh_CN', NameFormatGo, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NameFormatGo.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', NameFormatGo, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NameFormatGo.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', NameFormatGo, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NameFormatGo.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', NameFormatGo, 'Edm.String');
    /**
     * Static representation of the [[sample]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NameFormatGo.SAMPLE = new core_1.StringField('sample', NameFormatGo, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NameFormatGo.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', NameFormatGo, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NameFormatGo.EXTERNAL_NAME_TRANSLATION_TEXT_NAV = new core_1.Link('externalNameTranslationTextNav', NameFormatGo, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NameFormatGo.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', NameFormatGo, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NameFormatGo.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', NameFormatGo, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[nameElements]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NameFormatGo.NAME_ELEMENTS = new core_1.Link('nameElements', NameFormatGo, NameElementGo_1.NameElementGo);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NameFormatGo.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', NameFormatGo, WfRequest_1.WfRequest);
    /**
     * All fields of the NameFormatGo entity.
     */
    NameFormatGo._allFields = [
        NameFormatGo.CREATED_BY,
        NameFormatGo.CREATED_DATE_TIME,
        NameFormatGo.EXTERNAL_CODE,
        NameFormatGo.EXTERNAL_NAME_DE_DE,
        NameFormatGo.EXTERNAL_NAME_DEFAULT_VALUE,
        NameFormatGo.EXTERNAL_NAME_EN_DEBUG,
        NameFormatGo.EXTERNAL_NAME_EN_GB,
        NameFormatGo.EXTERNAL_NAME_EN_US,
        NameFormatGo.EXTERNAL_NAME_ES_ES,
        NameFormatGo.EXTERNAL_NAME_ES_MX,
        NameFormatGo.EXTERNAL_NAME_FR_CA,
        NameFormatGo.EXTERNAL_NAME_FR_FR,
        NameFormatGo.EXTERNAL_NAME_IT_IT,
        NameFormatGo.EXTERNAL_NAME_LOCALIZED,
        NameFormatGo.EXTERNAL_NAME_NL_NL,
        NameFormatGo.EXTERNAL_NAME_PT_BR,
        NameFormatGo.EXTERNAL_NAME_ZH_CN,
        NameFormatGo.LAST_MODIFIED_BY,
        NameFormatGo.LAST_MODIFIED_DATE_TIME,
        NameFormatGo.MDF_SYSTEM_RECORD_STATUS,
        NameFormatGo.SAMPLE,
        NameFormatGo.CREATED_BY_NAV,
        NameFormatGo.EXTERNAL_NAME_TRANSLATION_TEXT_NAV,
        NameFormatGo.LAST_MODIFIED_BY_NAV,
        NameFormatGo.MDF_SYSTEM_RECORD_STATUS_NAV,
        NameFormatGo.NAME_ELEMENTS,
        NameFormatGo.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    NameFormatGo.ALL_FIELDS = new core_1.AllFields('*', NameFormatGo);
    /**
     * All key fields of the NameFormatGo entity.
     */
    NameFormatGo._keyFields = [NameFormatGo.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property NameFormatGo.
     */
    NameFormatGo._keys = NameFormatGo._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(NameFormatGo = exports.NameFormatGo || (exports.NameFormatGo = {}));
exports.NameFormatGo = NameFormatGo;
//# sourceMappingURL=NameFormatGo.js.map