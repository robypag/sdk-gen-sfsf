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
var CustomPayTypeRequestBuilder_1 = require("./CustomPayTypeRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "CustomPayType" of service "SFOData".
 */
var CustomPayType = /** @class */ (function (_super) {
    __extends(CustomPayType, _super);
    function CustomPayType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `CustomPayType`.
     * @returns A builder that constructs instances of entity type `CustomPayType`.
     */
    CustomPayType.builder = function () {
        return core_1.Entity.entityBuilder(CustomPayType);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CustomPayType` entity type.
     * @returns A `CustomPayType` request builder.
     */
    CustomPayType.requestBuilder = function () {
        return new CustomPayTypeRequestBuilder_1.CustomPayTypeRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustomPayType`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CustomPayType`.
     */
    CustomPayType.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, CustomPayType);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CustomPayType.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CustomPayType.
     */
    CustomPayType._entityName = 'CustomPayType';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CustomPayType.
     */
    CustomPayType._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    CustomPayType._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return CustomPayType;
}(core_1.Entity));
exports.CustomPayType = CustomPayType;
var User_1 = require("./User");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var MdfEnumValue_1 = require("./MdfEnumValue");
var CustomPayTypeAssignment_1 = require("./CustomPayTypeAssignment");
var WfRequest_1 = require("./WfRequest");
(function (CustomPayType) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomPayType.CREATED_BY = new core_1.StringField('createdBy', CustomPayType, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomPayType.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', CustomPayType, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomPayType.EXTERNAL_CODE = new core_1.StringField('externalCode', CustomPayType, 'Edm.String');
    /**
     * Static representation of the [[externalNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomPayType.EXTERNAL_NAME_DE_DE = new core_1.StringField('externalName_de_DE', CustomPayType, 'Edm.String');
    /**
     * Static representation of the [[externalNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomPayType.EXTERNAL_NAME_DEFAULT_VALUE = new core_1.StringField('externalName_defaultValue', CustomPayType, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomPayType.EXTERNAL_NAME_EN_DEBUG = new core_1.StringField('externalName_en_DEBUG', CustomPayType, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomPayType.EXTERNAL_NAME_EN_GB = new core_1.StringField('externalName_en_GB', CustomPayType, 'Edm.String');
    /**
     * Static representation of the [[externalNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomPayType.EXTERNAL_NAME_EN_US = new core_1.StringField('externalName_en_US', CustomPayType, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomPayType.EXTERNAL_NAME_ES_ES = new core_1.StringField('externalName_es_ES', CustomPayType, 'Edm.String');
    /**
     * Static representation of the [[externalNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomPayType.EXTERNAL_NAME_ES_MX = new core_1.StringField('externalName_es_MX', CustomPayType, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomPayType.EXTERNAL_NAME_FR_CA = new core_1.StringField('externalName_fr_CA', CustomPayType, 'Edm.String');
    /**
     * Static representation of the [[externalNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomPayType.EXTERNAL_NAME_FR_FR = new core_1.StringField('externalName_fr_FR', CustomPayType, 'Edm.String');
    /**
     * Static representation of the [[externalNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomPayType.EXTERNAL_NAME_IT_IT = new core_1.StringField('externalName_it_IT', CustomPayType, 'Edm.String');
    /**
     * Static representation of the [[externalNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomPayType.EXTERNAL_NAME_LOCALIZED = new core_1.StringField('externalName_localized', CustomPayType, 'Edm.String');
    /**
     * Static representation of the [[externalNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomPayType.EXTERNAL_NAME_NL_NL = new core_1.StringField('externalName_nl_NL', CustomPayType, 'Edm.String');
    /**
     * Static representation of the [[externalNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomPayType.EXTERNAL_NAME_PT_BR = new core_1.StringField('externalName_pt_BR', CustomPayType, 'Edm.String');
    /**
     * Static representation of the [[externalNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomPayType.EXTERNAL_NAME_ZH_CN = new core_1.StringField('externalName_zh_CN', CustomPayType, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomPayType.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', CustomPayType, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomPayType.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', CustomPayType, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomPayType.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', CustomPayType, 'Edm.String');
    /**
     * Static representation of the [[standardPayType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomPayType.STANDARD_PAY_TYPE = new core_1.StringField('standardPayType', CustomPayType, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomPayType.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', CustomPayType, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomPayType.EXTERNAL_NAME_TRANSLATION_TEXT_NAV = new core_1.Link('externalNameTranslationTextNav', CustomPayType, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomPayType.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', CustomPayType, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomPayType.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', CustomPayType, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[standardPayTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomPayType.STANDARD_PAY_TYPE_NAV = new core_1.OneToOneLink('standardPayTypeNav', CustomPayType, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[toCustomPayTypeAssignment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomPayType.TO_CUSTOM_PAY_TYPE_ASSIGNMENT = new core_1.Link('toCustomPayTypeAssignment', CustomPayType, CustomPayTypeAssignment_1.CustomPayTypeAssignment);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomPayType.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', CustomPayType, WfRequest_1.WfRequest);
    /**
     * All fields of the CustomPayType entity.
     */
    CustomPayType._allFields = [
        CustomPayType.CREATED_BY,
        CustomPayType.CREATED_DATE_TIME,
        CustomPayType.EXTERNAL_CODE,
        CustomPayType.EXTERNAL_NAME_DE_DE,
        CustomPayType.EXTERNAL_NAME_DEFAULT_VALUE,
        CustomPayType.EXTERNAL_NAME_EN_DEBUG,
        CustomPayType.EXTERNAL_NAME_EN_GB,
        CustomPayType.EXTERNAL_NAME_EN_US,
        CustomPayType.EXTERNAL_NAME_ES_ES,
        CustomPayType.EXTERNAL_NAME_ES_MX,
        CustomPayType.EXTERNAL_NAME_FR_CA,
        CustomPayType.EXTERNAL_NAME_FR_FR,
        CustomPayType.EXTERNAL_NAME_IT_IT,
        CustomPayType.EXTERNAL_NAME_LOCALIZED,
        CustomPayType.EXTERNAL_NAME_NL_NL,
        CustomPayType.EXTERNAL_NAME_PT_BR,
        CustomPayType.EXTERNAL_NAME_ZH_CN,
        CustomPayType.LAST_MODIFIED_BY,
        CustomPayType.LAST_MODIFIED_DATE_TIME,
        CustomPayType.MDF_SYSTEM_RECORD_STATUS,
        CustomPayType.STANDARD_PAY_TYPE,
        CustomPayType.CREATED_BY_NAV,
        CustomPayType.EXTERNAL_NAME_TRANSLATION_TEXT_NAV,
        CustomPayType.LAST_MODIFIED_BY_NAV,
        CustomPayType.MDF_SYSTEM_RECORD_STATUS_NAV,
        CustomPayType.STANDARD_PAY_TYPE_NAV,
        CustomPayType.TO_CUSTOM_PAY_TYPE_ASSIGNMENT,
        CustomPayType.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    CustomPayType.ALL_FIELDS = new core_1.AllFields('*', CustomPayType);
    /**
     * All key fields of the CustomPayType entity.
     */
    CustomPayType._keyFields = [CustomPayType.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property CustomPayType.
     */
    CustomPayType._keys = CustomPayType._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CustomPayType = exports.CustomPayType || (exports.CustomPayType = {}));
exports.CustomPayType = CustomPayType;
//# sourceMappingURL=CustomPayType.js.map