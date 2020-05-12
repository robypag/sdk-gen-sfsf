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
var PersonTypeRequestBuilder_1 = require("./PersonTypeRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PersonType" of service "SFOData".
 */
var PersonType = /** @class */ (function (_super) {
    __extends(PersonType, _super);
    function PersonType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PersonType`.
     * @returns A builder that constructs instances of entity type `PersonType`.
     */
    PersonType.builder = function () {
        return core_1.Entity.entityBuilder(PersonType);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PersonType` entity type.
     * @returns A `PersonType` request builder.
     */
    PersonType.requestBuilder = function () {
        return new PersonTypeRequestBuilder_1.PersonTypeRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PersonType`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PersonType`.
     */
    PersonType.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PersonType);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PersonType.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PersonType.
     */
    PersonType._entityName = 'PersonType';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PersonType.
     */
    PersonType._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PersonType._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PersonType;
}(core_1.Entity));
exports.PersonType = PersonType;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var WfRequest_1 = require("./WfRequest");
(function (PersonType) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PersonType.CREATED_BY = new core_1.StringField('createdBy', PersonType, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PersonType.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PersonType, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PersonType.EXTERNAL_CODE = new core_1.StringField('externalCode', PersonType, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PersonType.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PersonType, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PersonType.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PersonType, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PersonType.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', PersonType, 'Edm.String');
    /**
     * Static representation of the [[personType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PersonType.PERSON_TYPE = new core_1.StringField('personType', PersonType, 'Edm.String');
    /**
     * Static representation of the [[personTypeNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PersonType.PERSON_TYPE_NAME_DE_DE = new core_1.StringField('personTypeName_de_DE', PersonType, 'Edm.String');
    /**
     * Static representation of the [[personTypeNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PersonType.PERSON_TYPE_NAME_DEFAULT_VALUE = new core_1.StringField('personTypeName_defaultValue', PersonType, 'Edm.String');
    /**
     * Static representation of the [[personTypeNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PersonType.PERSON_TYPE_NAME_EN_DEBUG = new core_1.StringField('personTypeName_en_DEBUG', PersonType, 'Edm.String');
    /**
     * Static representation of the [[personTypeNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PersonType.PERSON_TYPE_NAME_EN_GB = new core_1.StringField('personTypeName_en_GB', PersonType, 'Edm.String');
    /**
     * Static representation of the [[personTypeNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PersonType.PERSON_TYPE_NAME_EN_US = new core_1.StringField('personTypeName_en_US', PersonType, 'Edm.String');
    /**
     * Static representation of the [[personTypeNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PersonType.PERSON_TYPE_NAME_ES_ES = new core_1.StringField('personTypeName_es_ES', PersonType, 'Edm.String');
    /**
     * Static representation of the [[personTypeNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PersonType.PERSON_TYPE_NAME_ES_MX = new core_1.StringField('personTypeName_es_MX', PersonType, 'Edm.String');
    /**
     * Static representation of the [[personTypeNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PersonType.PERSON_TYPE_NAME_FR_CA = new core_1.StringField('personTypeName_fr_CA', PersonType, 'Edm.String');
    /**
     * Static representation of the [[personTypeNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PersonType.PERSON_TYPE_NAME_FR_FR = new core_1.StringField('personTypeName_fr_FR', PersonType, 'Edm.String');
    /**
     * Static representation of the [[personTypeNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PersonType.PERSON_TYPE_NAME_IT_IT = new core_1.StringField('personTypeName_it_IT', PersonType, 'Edm.String');
    /**
     * Static representation of the [[personTypeNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PersonType.PERSON_TYPE_NAME_LOCALIZED = new core_1.StringField('personTypeName_localized', PersonType, 'Edm.String');
    /**
     * Static representation of the [[personTypeNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PersonType.PERSON_TYPE_NAME_NL_NL = new core_1.StringField('personTypeName_nl_NL', PersonType, 'Edm.String');
    /**
     * Static representation of the [[personTypeNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PersonType.PERSON_TYPE_NAME_PT_BR = new core_1.StringField('personTypeName_pt_BR', PersonType, 'Edm.String');
    /**
     * Static representation of the [[personTypeNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PersonType.PERSON_TYPE_NAME_ZH_CN = new core_1.StringField('personTypeName_zh_CN', PersonType, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PersonType.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', PersonType, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PersonType.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', PersonType, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PersonType.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', PersonType, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[personTypeNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PersonType.PERSON_TYPE_NAME_TRANSLATION_TEXT_NAV = new core_1.Link('personTypeNameTranslationTextNav', PersonType, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[personTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PersonType.PERSON_TYPE_NAV = new core_1.OneToOneLink('personTypeNav', PersonType, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PersonType.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', PersonType, WfRequest_1.WfRequest);
    /**
     * All fields of the PersonType entity.
     */
    PersonType._allFields = [
        PersonType.CREATED_BY,
        PersonType.CREATED_DATE_TIME,
        PersonType.EXTERNAL_CODE,
        PersonType.LAST_MODIFIED_BY,
        PersonType.LAST_MODIFIED_DATE_TIME,
        PersonType.MDF_SYSTEM_RECORD_STATUS,
        PersonType.PERSON_TYPE,
        PersonType.PERSON_TYPE_NAME_DE_DE,
        PersonType.PERSON_TYPE_NAME_DEFAULT_VALUE,
        PersonType.PERSON_TYPE_NAME_EN_DEBUG,
        PersonType.PERSON_TYPE_NAME_EN_GB,
        PersonType.PERSON_TYPE_NAME_EN_US,
        PersonType.PERSON_TYPE_NAME_ES_ES,
        PersonType.PERSON_TYPE_NAME_ES_MX,
        PersonType.PERSON_TYPE_NAME_FR_CA,
        PersonType.PERSON_TYPE_NAME_FR_FR,
        PersonType.PERSON_TYPE_NAME_IT_IT,
        PersonType.PERSON_TYPE_NAME_LOCALIZED,
        PersonType.PERSON_TYPE_NAME_NL_NL,
        PersonType.PERSON_TYPE_NAME_PT_BR,
        PersonType.PERSON_TYPE_NAME_ZH_CN,
        PersonType.CREATED_BY_NAV,
        PersonType.LAST_MODIFIED_BY_NAV,
        PersonType.MDF_SYSTEM_RECORD_STATUS_NAV,
        PersonType.PERSON_TYPE_NAME_TRANSLATION_TEXT_NAV,
        PersonType.PERSON_TYPE_NAV,
        PersonType.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    PersonType.ALL_FIELDS = new core_1.AllFields('*', PersonType);
    /**
     * All key fields of the PersonType entity.
     */
    PersonType._keyFields = [PersonType.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property PersonType.
     */
    PersonType._keys = PersonType._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PersonType = exports.PersonType || (exports.PersonType = {}));
exports.PersonType = PersonType;
//# sourceMappingURL=PersonType.js.map