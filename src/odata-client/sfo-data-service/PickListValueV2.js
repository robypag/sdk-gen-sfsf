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
var PickListValueV2RequestBuilder_1 = require("./PickListValueV2RequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PickListValueV2" of service "SFOData".
 */
var PickListValueV2 = /** @class */ (function (_super) {
    __extends(PickListValueV2, _super);
    function PickListValueV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PickListValueV2`.
     * @returns A builder that constructs instances of entity type `PickListValueV2`.
     */
    PickListValueV2.builder = function () {
        return core_1.Entity.entityBuilder(PickListValueV2);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PickListValueV2` entity type.
     * @returns A `PickListValueV2` request builder.
     */
    PickListValueV2.requestBuilder = function () {
        return new PickListValueV2RequestBuilder_1.PickListValueV2RequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PickListValueV2`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PickListValueV2`.
     */
    PickListValueV2.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PickListValueV2);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PickListValueV2.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PickListValueV2.
     */
    PickListValueV2._entityName = 'PickListValueV2';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PickListValueV2.
     */
    PickListValueV2._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PickListValueV2._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PickListValueV2;
}(core_1.Entity));
exports.PickListValueV2 = PickListValueV2;
var User_1 = require("./User");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (PickListValueV2) {
    /**
     * Static representation of the [[pickListV2EffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListValueV2.PICK_LIST_V_2_EFFECTIVE_START_DATE = new core_1.DateField('PickListV2_effectiveStartDate', PickListValueV2, 'Edm.DateTime');
    /**
     * Static representation of the [[pickListV2Id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListValueV2.PICK_LIST_V_2_ID = new core_1.StringField('PickListV2_id', PickListValueV2, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListValueV2.CREATED_BY = new core_1.StringField('createdBy', PickListValueV2, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListValueV2.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PickListValueV2, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListValueV2.EXTERNAL_CODE = new core_1.StringField('externalCode', PickListValueV2, 'Edm.String');
    /**
     * Static representation of the [[lValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListValueV2.L_VALUE = new core_1.BigNumberField('lValue', PickListValueV2, 'Edm.Int64');
    /**
     * Static representation of the [[labelDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListValueV2.LABEL_DE_DE = new core_1.StringField('label_de_DE', PickListValueV2, 'Edm.String');
    /**
     * Static representation of the [[labelDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListValueV2.LABEL_DEFAULT_VALUE = new core_1.StringField('label_defaultValue', PickListValueV2, 'Edm.String');
    /**
     * Static representation of the [[labelEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListValueV2.LABEL_EN_DEBUG = new core_1.StringField('label_en_DEBUG', PickListValueV2, 'Edm.String');
    /**
     * Static representation of the [[labelEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListValueV2.LABEL_EN_GB = new core_1.StringField('label_en_GB', PickListValueV2, 'Edm.String');
    /**
     * Static representation of the [[labelEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListValueV2.LABEL_EN_US = new core_1.StringField('label_en_US', PickListValueV2, 'Edm.String');
    /**
     * Static representation of the [[labelEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListValueV2.LABEL_ES_ES = new core_1.StringField('label_es_ES', PickListValueV2, 'Edm.String');
    /**
     * Static representation of the [[labelEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListValueV2.LABEL_ES_MX = new core_1.StringField('label_es_MX', PickListValueV2, 'Edm.String');
    /**
     * Static representation of the [[labelFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListValueV2.LABEL_FR_CA = new core_1.StringField('label_fr_CA', PickListValueV2, 'Edm.String');
    /**
     * Static representation of the [[labelFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListValueV2.LABEL_FR_FR = new core_1.StringField('label_fr_FR', PickListValueV2, 'Edm.String');
    /**
     * Static representation of the [[labelItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListValueV2.LABEL_IT_IT = new core_1.StringField('label_it_IT', PickListValueV2, 'Edm.String');
    /**
     * Static representation of the [[labelLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListValueV2.LABEL_LOCALIZED = new core_1.StringField('label_localized', PickListValueV2, 'Edm.String');
    /**
     * Static representation of the [[labelNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListValueV2.LABEL_NL_NL = new core_1.StringField('label_nl_NL', PickListValueV2, 'Edm.String');
    /**
     * Static representation of the [[labelPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListValueV2.LABEL_PT_BR = new core_1.StringField('label_pt_BR', PickListValueV2, 'Edm.String');
    /**
     * Static representation of the [[labelZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListValueV2.LABEL_ZH_CN = new core_1.StringField('label_zh_CN', PickListValueV2, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListValueV2.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PickListValueV2, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListValueV2.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PickListValueV2, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[legacyStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListValueV2.LEGACY_STATUS = new core_1.BigNumberField('legacyStatus', PickListValueV2, 'Edm.Int64');
    /**
     * Static representation of the [[maxVal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListValueV2.MAX_VAL = new core_1.BigNumberField('maxVal', PickListValueV2, 'Edm.Decimal');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListValueV2.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', PickListValueV2, 'Edm.String');
    /**
     * Static representation of the [[minVal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListValueV2.MIN_VAL = new core_1.BigNumberField('minVal', PickListValueV2, 'Edm.Decimal');
    /**
     * Static representation of the [[nonUniqueExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListValueV2.NON_UNIQUE_EXTERNAL_CODE = new core_1.StringField('nonUniqueExternalCode', PickListValueV2, 'Edm.String');
    /**
     * Static representation of the [[optValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListValueV2.OPT_VALUE = new core_1.BigNumberField('optValue', PickListValueV2, 'Edm.Decimal');
    /**
     * Static representation of the [[optionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListValueV2.OPTION_ID = new core_1.BigNumberField('optionId', PickListValueV2, 'Edm.Int64');
    /**
     * Static representation of the [[parentPickListValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListValueV2.PARENT_PICK_LIST_VALUE = new core_1.StringField('parentPickListValue', PickListValueV2, 'Edm.String');
    /**
     * Static representation of the [[rValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListValueV2.R_VALUE = new core_1.BigNumberField('rValue', PickListValueV2, 'Edm.Int64');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListValueV2.STATUS = new core_1.StringField('status', PickListValueV2, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListValueV2.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', PickListValueV2, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[labelTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListValueV2.LABEL_TRANSLATION_TEXT_NAV = new core_1.Link('labelTranslationTextNav', PickListValueV2, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListValueV2.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', PickListValueV2, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListValueV2.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', PickListValueV2, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[parentPickListValueNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListValueV2.PARENT_PICK_LIST_VALUE_NAV = new core_1.Link('parentPickListValueNav', PickListValueV2, PickListValueV2);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListValueV2.STATUS_NAV = new core_1.OneToOneLink('statusNav', PickListValueV2, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the PickListValueV2 entity.
     */
    PickListValueV2._allFields = [
        PickListValueV2.PICK_LIST_V_2_EFFECTIVE_START_DATE,
        PickListValueV2.PICK_LIST_V_2_ID,
        PickListValueV2.CREATED_BY,
        PickListValueV2.CREATED_DATE_TIME,
        PickListValueV2.EXTERNAL_CODE,
        PickListValueV2.L_VALUE,
        PickListValueV2.LABEL_DE_DE,
        PickListValueV2.LABEL_DEFAULT_VALUE,
        PickListValueV2.LABEL_EN_DEBUG,
        PickListValueV2.LABEL_EN_GB,
        PickListValueV2.LABEL_EN_US,
        PickListValueV2.LABEL_ES_ES,
        PickListValueV2.LABEL_ES_MX,
        PickListValueV2.LABEL_FR_CA,
        PickListValueV2.LABEL_FR_FR,
        PickListValueV2.LABEL_IT_IT,
        PickListValueV2.LABEL_LOCALIZED,
        PickListValueV2.LABEL_NL_NL,
        PickListValueV2.LABEL_PT_BR,
        PickListValueV2.LABEL_ZH_CN,
        PickListValueV2.LAST_MODIFIED_BY,
        PickListValueV2.LAST_MODIFIED_DATE_TIME,
        PickListValueV2.LEGACY_STATUS,
        PickListValueV2.MAX_VAL,
        PickListValueV2.MDF_SYSTEM_RECORD_STATUS,
        PickListValueV2.MIN_VAL,
        PickListValueV2.NON_UNIQUE_EXTERNAL_CODE,
        PickListValueV2.OPT_VALUE,
        PickListValueV2.OPTION_ID,
        PickListValueV2.PARENT_PICK_LIST_VALUE,
        PickListValueV2.R_VALUE,
        PickListValueV2.STATUS,
        PickListValueV2.CREATED_BY_NAV,
        PickListValueV2.LABEL_TRANSLATION_TEXT_NAV,
        PickListValueV2.LAST_MODIFIED_BY_NAV,
        PickListValueV2.MDF_SYSTEM_RECORD_STATUS_NAV,
        PickListValueV2.PARENT_PICK_LIST_VALUE_NAV,
        PickListValueV2.STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    PickListValueV2.ALL_FIELDS = new core_1.AllFields('*', PickListValueV2);
    /**
     * All key fields of the PickListValueV2 entity.
     */
    PickListValueV2._keyFields = [PickListValueV2.PICK_LIST_V_2_EFFECTIVE_START_DATE, PickListValueV2.PICK_LIST_V_2_ID, PickListValueV2.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property PickListValueV2.
     */
    PickListValueV2._keys = PickListValueV2._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PickListValueV2 = exports.PickListValueV2 || (exports.PickListValueV2 = {}));
exports.PickListValueV2 = PickListValueV2;
//# sourceMappingURL=PickListValueV2.js.map