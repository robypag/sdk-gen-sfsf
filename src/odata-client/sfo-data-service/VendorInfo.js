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
var VendorInfoRequestBuilder_1 = require("./VendorInfoRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "VendorInfo" of service "SFOData".
 */
var VendorInfo = /** @class */ (function (_super) {
    __extends(VendorInfo, _super);
    function VendorInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `VendorInfo`.
     * @returns A builder that constructs instances of entity type `VendorInfo`.
     */
    VendorInfo.builder = function () {
        return core_1.Entity.entityBuilder(VendorInfo);
    };
    /**
     * Returns a request builder to construct requests for operations on the `VendorInfo` entity type.
     * @returns A `VendorInfo` request builder.
     */
    VendorInfo.requestBuilder = function () {
        return new VendorInfoRequestBuilder_1.VendorInfoRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `VendorInfo`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `VendorInfo`.
     */
    VendorInfo.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, VendorInfo);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    VendorInfo.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for VendorInfo.
     */
    VendorInfo._entityName = 'VendorInfo';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for VendorInfo.
     */
    VendorInfo._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    VendorInfo._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return VendorInfo;
}(core_1.Entity));
exports.VendorInfo = VendorInfo;
var User_1 = require("./User");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var MdfEnumValue_1 = require("./MdfEnumValue");
var WfRequest_1 = require("./WfRequest");
(function (VendorInfo) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorInfo.CREATED_BY = new core_1.StringField('createdBy', VendorInfo, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorInfo.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', VendorInfo, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[descriptionDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorInfo.DESCRIPTION_DE_DE = new core_1.StringField('description_de_DE', VendorInfo, 'Edm.String');
    /**
     * Static representation of the [[descriptionDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorInfo.DESCRIPTION_DEFAULT_VALUE = new core_1.StringField('description_defaultValue', VendorInfo, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorInfo.DESCRIPTION_EN_DEBUG = new core_1.StringField('description_en_DEBUG', VendorInfo, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorInfo.DESCRIPTION_EN_GB = new core_1.StringField('description_en_GB', VendorInfo, 'Edm.String');
    /**
     * Static representation of the [[descriptionEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorInfo.DESCRIPTION_EN_US = new core_1.StringField('description_en_US', VendorInfo, 'Edm.String');
    /**
     * Static representation of the [[descriptionEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorInfo.DESCRIPTION_ES_ES = new core_1.StringField('description_es_ES', VendorInfo, 'Edm.String');
    /**
     * Static representation of the [[descriptionEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorInfo.DESCRIPTION_ES_MX = new core_1.StringField('description_es_MX', VendorInfo, 'Edm.String');
    /**
     * Static representation of the [[descriptionFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorInfo.DESCRIPTION_FR_CA = new core_1.StringField('description_fr_CA', VendorInfo, 'Edm.String');
    /**
     * Static representation of the [[descriptionFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorInfo.DESCRIPTION_FR_FR = new core_1.StringField('description_fr_FR', VendorInfo, 'Edm.String');
    /**
     * Static representation of the [[descriptionItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorInfo.DESCRIPTION_IT_IT = new core_1.StringField('description_it_IT', VendorInfo, 'Edm.String');
    /**
     * Static representation of the [[descriptionLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorInfo.DESCRIPTION_LOCALIZED = new core_1.StringField('description_localized', VendorInfo, 'Edm.String');
    /**
     * Static representation of the [[descriptionNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorInfo.DESCRIPTION_NL_NL = new core_1.StringField('description_nl_NL', VendorInfo, 'Edm.String');
    /**
     * Static representation of the [[descriptionPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorInfo.DESCRIPTION_PT_BR = new core_1.StringField('description_pt_BR', VendorInfo, 'Edm.String');
    /**
     * Static representation of the [[descriptionZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorInfo.DESCRIPTION_ZH_CN = new core_1.StringField('description_zh_CN', VendorInfo, 'Edm.String');
    /**
     * Static representation of the [[effectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorInfo.EFFECTIVE_START_DATE = new core_1.DateField('effectiveStartDate', VendorInfo, 'Edm.DateTime');
    /**
     * Static representation of the [[effectiveStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorInfo.EFFECTIVE_STATUS = new core_1.StringField('effectiveStatus', VendorInfo, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorInfo.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', VendorInfo, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorInfo.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', VendorInfo, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorInfo.MDF_SYSTEM_EFFECTIVE_END_DATE = new core_1.DateField('mdfSystemEffectiveEndDate', VendorInfo, 'Edm.DateTime');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorInfo.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', VendorInfo, 'Edm.String');
    /**
     * Static representation of the [[vendorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorInfo.VENDOR_CODE = new core_1.StringField('vendorCode', VendorInfo, 'Edm.String');
    /**
     * Static representation of the [[vendorName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorInfo.VENDOR_NAME = new core_1.StringField('vendorName', VendorInfo, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorInfo.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', VendorInfo, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorInfo.DESCRIPTION_TRANSLATION_TEXT_NAV = new core_1.Link('descriptionTranslationTextNav', VendorInfo, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[effectiveStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorInfo.EFFECTIVE_STATUS_NAV = new core_1.OneToOneLink('effectiveStatusNav', VendorInfo, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorInfo.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', VendorInfo, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorInfo.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', VendorInfo, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorInfo.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', VendorInfo, WfRequest_1.WfRequest);
    /**
     * All fields of the VendorInfo entity.
     */
    VendorInfo._allFields = [
        VendorInfo.CREATED_BY,
        VendorInfo.CREATED_DATE_TIME,
        VendorInfo.DESCRIPTION_DE_DE,
        VendorInfo.DESCRIPTION_DEFAULT_VALUE,
        VendorInfo.DESCRIPTION_EN_DEBUG,
        VendorInfo.DESCRIPTION_EN_GB,
        VendorInfo.DESCRIPTION_EN_US,
        VendorInfo.DESCRIPTION_ES_ES,
        VendorInfo.DESCRIPTION_ES_MX,
        VendorInfo.DESCRIPTION_FR_CA,
        VendorInfo.DESCRIPTION_FR_FR,
        VendorInfo.DESCRIPTION_IT_IT,
        VendorInfo.DESCRIPTION_LOCALIZED,
        VendorInfo.DESCRIPTION_NL_NL,
        VendorInfo.DESCRIPTION_PT_BR,
        VendorInfo.DESCRIPTION_ZH_CN,
        VendorInfo.EFFECTIVE_START_DATE,
        VendorInfo.EFFECTIVE_STATUS,
        VendorInfo.LAST_MODIFIED_BY,
        VendorInfo.LAST_MODIFIED_DATE_TIME,
        VendorInfo.MDF_SYSTEM_EFFECTIVE_END_DATE,
        VendorInfo.MDF_SYSTEM_RECORD_STATUS,
        VendorInfo.VENDOR_CODE,
        VendorInfo.VENDOR_NAME,
        VendorInfo.CREATED_BY_NAV,
        VendorInfo.DESCRIPTION_TRANSLATION_TEXT_NAV,
        VendorInfo.EFFECTIVE_STATUS_NAV,
        VendorInfo.LAST_MODIFIED_BY_NAV,
        VendorInfo.MDF_SYSTEM_RECORD_STATUS_NAV,
        VendorInfo.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    VendorInfo.ALL_FIELDS = new core_1.AllFields('*', VendorInfo);
    /**
     * All key fields of the VendorInfo entity.
     */
    VendorInfo._keyFields = [VendorInfo.EFFECTIVE_START_DATE, VendorInfo.VENDOR_CODE];
    /**
     * Mapping of all key field names to the respective static field property VendorInfo.
     */
    VendorInfo._keys = VendorInfo._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(VendorInfo = exports.VendorInfo || (exports.VendorInfo = {}));
exports.VendorInfo = VendorInfo;
//# sourceMappingURL=VendorInfo.js.map