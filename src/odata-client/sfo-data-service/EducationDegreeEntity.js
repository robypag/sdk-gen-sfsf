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
var EducationDegreeEntityRequestBuilder_1 = require("./EducationDegreeEntityRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EducationDegreeEntity" of service "SFOData".
 */
var EducationDegreeEntity = /** @class */ (function (_super) {
    __extends(EducationDegreeEntity, _super);
    function EducationDegreeEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EducationDegreeEntity`.
     * @returns A builder that constructs instances of entity type `EducationDegreeEntity`.
     */
    EducationDegreeEntity.builder = function () {
        return core_1.Entity.entityBuilder(EducationDegreeEntity);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EducationDegreeEntity` entity type.
     * @returns A `EducationDegreeEntity` request builder.
     */
    EducationDegreeEntity.requestBuilder = function () {
        return new EducationDegreeEntityRequestBuilder_1.EducationDegreeEntityRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EducationDegreeEntity`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EducationDegreeEntity`.
     */
    EducationDegreeEntity.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EducationDegreeEntity);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EducationDegreeEntity.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EducationDegreeEntity.
     */
    EducationDegreeEntity._entityName = 'EducationDegreeEntity';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EducationDegreeEntity.
     */
    EducationDegreeEntity._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EducationDegreeEntity._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return EducationDegreeEntity;
}(core_1.Entity));
exports.EducationDegreeEntity = EducationDegreeEntity;
var User_1 = require("./User");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var MdfEnumValue_1 = require("./MdfEnumValue");
var WfRequest_1 = require("./WfRequest");
(function (EducationDegreeEntity) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationDegreeEntity.CREATED_BY = new core_1.StringField('createdBy', EducationDegreeEntity, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationDegreeEntity.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', EducationDegreeEntity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[degreeDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationDegreeEntity.DEGREE_DE_DE = new core_1.StringField('degree_de_DE', EducationDegreeEntity, 'Edm.String');
    /**
     * Static representation of the [[degreeDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationDegreeEntity.DEGREE_DEFAULT_VALUE = new core_1.StringField('degree_defaultValue', EducationDegreeEntity, 'Edm.String');
    /**
     * Static representation of the [[degreeEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationDegreeEntity.DEGREE_EN_DEBUG = new core_1.StringField('degree_en_DEBUG', EducationDegreeEntity, 'Edm.String');
    /**
     * Static representation of the [[degreeEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationDegreeEntity.DEGREE_EN_GB = new core_1.StringField('degree_en_GB', EducationDegreeEntity, 'Edm.String');
    /**
     * Static representation of the [[degreeEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationDegreeEntity.DEGREE_EN_US = new core_1.StringField('degree_en_US', EducationDegreeEntity, 'Edm.String');
    /**
     * Static representation of the [[degreeEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationDegreeEntity.DEGREE_ES_ES = new core_1.StringField('degree_es_ES', EducationDegreeEntity, 'Edm.String');
    /**
     * Static representation of the [[degreeEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationDegreeEntity.DEGREE_ES_MX = new core_1.StringField('degree_es_MX', EducationDegreeEntity, 'Edm.String');
    /**
     * Static representation of the [[degreeFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationDegreeEntity.DEGREE_FR_CA = new core_1.StringField('degree_fr_CA', EducationDegreeEntity, 'Edm.String');
    /**
     * Static representation of the [[degreeFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationDegreeEntity.DEGREE_FR_FR = new core_1.StringField('degree_fr_FR', EducationDegreeEntity, 'Edm.String');
    /**
     * Static representation of the [[degreeItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationDegreeEntity.DEGREE_IT_IT = new core_1.StringField('degree_it_IT', EducationDegreeEntity, 'Edm.String');
    /**
     * Static representation of the [[degreeLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationDegreeEntity.DEGREE_LOCALIZED = new core_1.StringField('degree_localized', EducationDegreeEntity, 'Edm.String');
    /**
     * Static representation of the [[degreeNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationDegreeEntity.DEGREE_NL_NL = new core_1.StringField('degree_nl_NL', EducationDegreeEntity, 'Edm.String');
    /**
     * Static representation of the [[degreePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationDegreeEntity.DEGREE_PT_BR = new core_1.StringField('degree_pt_BR', EducationDegreeEntity, 'Edm.String');
    /**
     * Static representation of the [[degreeZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationDegreeEntity.DEGREE_ZH_CN = new core_1.StringField('degree_zh_CN', EducationDegreeEntity, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationDegreeEntity.EXTERNAL_CODE = new core_1.StringField('externalCode', EducationDegreeEntity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationDegreeEntity.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', EducationDegreeEntity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationDegreeEntity.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', EducationDegreeEntity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationDegreeEntity.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', EducationDegreeEntity, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationDegreeEntity.STATUS = new core_1.StringField('status', EducationDegreeEntity, 'Edm.String');
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationDegreeEntity.SUB_MODULE = new core_1.StringField('subModule', EducationDegreeEntity, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationDegreeEntity.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', EducationDegreeEntity, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[degreeTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationDegreeEntity.DEGREE_TRANSLATION_TEXT_NAV = new core_1.Link('degreeTranslationTextNav', EducationDegreeEntity, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationDegreeEntity.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', EducationDegreeEntity, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationDegreeEntity.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', EducationDegreeEntity, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationDegreeEntity.STATUS_NAV = new core_1.OneToOneLink('statusNav', EducationDegreeEntity, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationDegreeEntity.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', EducationDegreeEntity, WfRequest_1.WfRequest);
    /**
     * All fields of the EducationDegreeEntity entity.
     */
    EducationDegreeEntity._allFields = [
        EducationDegreeEntity.CREATED_BY,
        EducationDegreeEntity.CREATED_DATE_TIME,
        EducationDegreeEntity.DEGREE_DE_DE,
        EducationDegreeEntity.DEGREE_DEFAULT_VALUE,
        EducationDegreeEntity.DEGREE_EN_DEBUG,
        EducationDegreeEntity.DEGREE_EN_GB,
        EducationDegreeEntity.DEGREE_EN_US,
        EducationDegreeEntity.DEGREE_ES_ES,
        EducationDegreeEntity.DEGREE_ES_MX,
        EducationDegreeEntity.DEGREE_FR_CA,
        EducationDegreeEntity.DEGREE_FR_FR,
        EducationDegreeEntity.DEGREE_IT_IT,
        EducationDegreeEntity.DEGREE_LOCALIZED,
        EducationDegreeEntity.DEGREE_NL_NL,
        EducationDegreeEntity.DEGREE_PT_BR,
        EducationDegreeEntity.DEGREE_ZH_CN,
        EducationDegreeEntity.EXTERNAL_CODE,
        EducationDegreeEntity.LAST_MODIFIED_BY,
        EducationDegreeEntity.LAST_MODIFIED_DATE_TIME,
        EducationDegreeEntity.MDF_SYSTEM_RECORD_STATUS,
        EducationDegreeEntity.STATUS,
        EducationDegreeEntity.SUB_MODULE,
        EducationDegreeEntity.CREATED_BY_NAV,
        EducationDegreeEntity.DEGREE_TRANSLATION_TEXT_NAV,
        EducationDegreeEntity.LAST_MODIFIED_BY_NAV,
        EducationDegreeEntity.MDF_SYSTEM_RECORD_STATUS_NAV,
        EducationDegreeEntity.STATUS_NAV,
        EducationDegreeEntity.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    EducationDegreeEntity.ALL_FIELDS = new core_1.AllFields('*', EducationDegreeEntity);
    /**
     * All key fields of the EducationDegreeEntity entity.
     */
    EducationDegreeEntity._keyFields = [EducationDegreeEntity.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property EducationDegreeEntity.
     */
    EducationDegreeEntity._keys = EducationDegreeEntity._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EducationDegreeEntity = exports.EducationDegreeEntity || (exports.EducationDegreeEntity = {}));
exports.EducationDegreeEntity = EducationDegreeEntity;
//# sourceMappingURL=EducationDegreeEntity.js.map