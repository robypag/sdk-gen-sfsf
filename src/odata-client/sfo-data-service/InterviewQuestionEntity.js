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
var InterviewQuestionEntityRequestBuilder_1 = require("./InterviewQuestionEntityRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "InterviewQuestionEntity" of service "SFOData".
 */
var InterviewQuestionEntity = /** @class */ (function (_super) {
    __extends(InterviewQuestionEntity, _super);
    function InterviewQuestionEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `InterviewQuestionEntity`.
     * @returns A builder that constructs instances of entity type `InterviewQuestionEntity`.
     */
    InterviewQuestionEntity.builder = function () {
        return core_1.Entity.entityBuilder(InterviewQuestionEntity);
    };
    /**
     * Returns a request builder to construct requests for operations on the `InterviewQuestionEntity` entity type.
     * @returns A `InterviewQuestionEntity` request builder.
     */
    InterviewQuestionEntity.requestBuilder = function () {
        return new InterviewQuestionEntityRequestBuilder_1.InterviewQuestionEntityRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `InterviewQuestionEntity`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `InterviewQuestionEntity`.
     */
    InterviewQuestionEntity.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, InterviewQuestionEntity);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    InterviewQuestionEntity.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for InterviewQuestionEntity.
     */
    InterviewQuestionEntity._entityName = 'InterviewQuestionEntity';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for InterviewQuestionEntity.
     */
    InterviewQuestionEntity._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    InterviewQuestionEntity._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return InterviewQuestionEntity;
}(core_1.Entity));
exports.InterviewQuestionEntity = InterviewQuestionEntity;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
var WfRequest_1 = require("./WfRequest");
(function (InterviewQuestionEntity) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionEntity.CREATED_BY = new core_1.StringField('createdBy', InterviewQuestionEntity, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionEntity.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', InterviewQuestionEntity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionEntity.EXTERNAL_CODE = new core_1.StringField('externalCode', InterviewQuestionEntity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionEntity.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', InterviewQuestionEntity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionEntity.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', InterviewQuestionEntity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionEntity.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', InterviewQuestionEntity, 'Edm.String');
    /**
     * Static representation of the [[questionDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionEntity.QUESTION_DE_DE = new core_1.StringField('question_de_DE', InterviewQuestionEntity, 'Edm.String');
    /**
     * Static representation of the [[questionDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionEntity.QUESTION_DEFAULT_VALUE = new core_1.StringField('question_defaultValue', InterviewQuestionEntity, 'Edm.String');
    /**
     * Static representation of the [[questionEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionEntity.QUESTION_EN_DEBUG = new core_1.StringField('question_en_DEBUG', InterviewQuestionEntity, 'Edm.String');
    /**
     * Static representation of the [[questionEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionEntity.QUESTION_EN_GB = new core_1.StringField('question_en_GB', InterviewQuestionEntity, 'Edm.String');
    /**
     * Static representation of the [[questionEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionEntity.QUESTION_EN_US = new core_1.StringField('question_en_US', InterviewQuestionEntity, 'Edm.String');
    /**
     * Static representation of the [[questionEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionEntity.QUESTION_ES_ES = new core_1.StringField('question_es_ES', InterviewQuestionEntity, 'Edm.String');
    /**
     * Static representation of the [[questionEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionEntity.QUESTION_ES_MX = new core_1.StringField('question_es_MX', InterviewQuestionEntity, 'Edm.String');
    /**
     * Static representation of the [[questionFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionEntity.QUESTION_FR_CA = new core_1.StringField('question_fr_CA', InterviewQuestionEntity, 'Edm.String');
    /**
     * Static representation of the [[questionFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionEntity.QUESTION_FR_FR = new core_1.StringField('question_fr_FR', InterviewQuestionEntity, 'Edm.String');
    /**
     * Static representation of the [[questionItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionEntity.QUESTION_IT_IT = new core_1.StringField('question_it_IT', InterviewQuestionEntity, 'Edm.String');
    /**
     * Static representation of the [[questionLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionEntity.QUESTION_LOCALIZED = new core_1.StringField('question_localized', InterviewQuestionEntity, 'Edm.String');
    /**
     * Static representation of the [[questionNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionEntity.QUESTION_NL_NL = new core_1.StringField('question_nl_NL', InterviewQuestionEntity, 'Edm.String');
    /**
     * Static representation of the [[questionPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionEntity.QUESTION_PT_BR = new core_1.StringField('question_pt_BR', InterviewQuestionEntity, 'Edm.String');
    /**
     * Static representation of the [[questionZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionEntity.QUESTION_ZH_CN = new core_1.StringField('question_zh_CN', InterviewQuestionEntity, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionEntity.STATUS = new core_1.StringField('status', InterviewQuestionEntity, 'Edm.String');
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionEntity.SUB_MODULE = new core_1.StringField('subModule', InterviewQuestionEntity, 'Edm.String');
    /**
     * Static representation of the [[typeDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionEntity.TYPE_DE_DE = new core_1.StringField('type_de_DE', InterviewQuestionEntity, 'Edm.String');
    /**
     * Static representation of the [[typeDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionEntity.TYPE_DEFAULT_VALUE = new core_1.StringField('type_defaultValue', InterviewQuestionEntity, 'Edm.String');
    /**
     * Static representation of the [[typeEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionEntity.TYPE_EN_DEBUG = new core_1.StringField('type_en_DEBUG', InterviewQuestionEntity, 'Edm.String');
    /**
     * Static representation of the [[typeEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionEntity.TYPE_EN_GB = new core_1.StringField('type_en_GB', InterviewQuestionEntity, 'Edm.String');
    /**
     * Static representation of the [[typeEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionEntity.TYPE_EN_US = new core_1.StringField('type_en_US', InterviewQuestionEntity, 'Edm.String');
    /**
     * Static representation of the [[typeEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionEntity.TYPE_ES_ES = new core_1.StringField('type_es_ES', InterviewQuestionEntity, 'Edm.String');
    /**
     * Static representation of the [[typeEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionEntity.TYPE_ES_MX = new core_1.StringField('type_es_MX', InterviewQuestionEntity, 'Edm.String');
    /**
     * Static representation of the [[typeFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionEntity.TYPE_FR_CA = new core_1.StringField('type_fr_CA', InterviewQuestionEntity, 'Edm.String');
    /**
     * Static representation of the [[typeFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionEntity.TYPE_FR_FR = new core_1.StringField('type_fr_FR', InterviewQuestionEntity, 'Edm.String');
    /**
     * Static representation of the [[typeItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionEntity.TYPE_IT_IT = new core_1.StringField('type_it_IT', InterviewQuestionEntity, 'Edm.String');
    /**
     * Static representation of the [[typeLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionEntity.TYPE_LOCALIZED = new core_1.StringField('type_localized', InterviewQuestionEntity, 'Edm.String');
    /**
     * Static representation of the [[typeNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionEntity.TYPE_NL_NL = new core_1.StringField('type_nl_NL', InterviewQuestionEntity, 'Edm.String');
    /**
     * Static representation of the [[typePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionEntity.TYPE_PT_BR = new core_1.StringField('type_pt_BR', InterviewQuestionEntity, 'Edm.String');
    /**
     * Static representation of the [[typeZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionEntity.TYPE_ZH_CN = new core_1.StringField('type_zh_CN', InterviewQuestionEntity, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionEntity.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', InterviewQuestionEntity, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionEntity.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', InterviewQuestionEntity, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionEntity.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', InterviewQuestionEntity, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[questionTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionEntity.QUESTION_TRANSLATION_TEXT_NAV = new core_1.Link('questionTranslationTextNav', InterviewQuestionEntity, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionEntity.STATUS_NAV = new core_1.OneToOneLink('statusNav', InterviewQuestionEntity, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[typeTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionEntity.TYPE_TRANSLATION_TEXT_NAV = new core_1.Link('typeTranslationTextNav', InterviewQuestionEntity, MdfLocalizedValue_1.MdfLocalizedValue);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionEntity.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', InterviewQuestionEntity, WfRequest_1.WfRequest);
    /**
     * All fields of the InterviewQuestionEntity entity.
     */
    InterviewQuestionEntity._allFields = [
        InterviewQuestionEntity.CREATED_BY,
        InterviewQuestionEntity.CREATED_DATE_TIME,
        InterviewQuestionEntity.EXTERNAL_CODE,
        InterviewQuestionEntity.LAST_MODIFIED_BY,
        InterviewQuestionEntity.LAST_MODIFIED_DATE_TIME,
        InterviewQuestionEntity.MDF_SYSTEM_RECORD_STATUS,
        InterviewQuestionEntity.QUESTION_DE_DE,
        InterviewQuestionEntity.QUESTION_DEFAULT_VALUE,
        InterviewQuestionEntity.QUESTION_EN_DEBUG,
        InterviewQuestionEntity.QUESTION_EN_GB,
        InterviewQuestionEntity.QUESTION_EN_US,
        InterviewQuestionEntity.QUESTION_ES_ES,
        InterviewQuestionEntity.QUESTION_ES_MX,
        InterviewQuestionEntity.QUESTION_FR_CA,
        InterviewQuestionEntity.QUESTION_FR_FR,
        InterviewQuestionEntity.QUESTION_IT_IT,
        InterviewQuestionEntity.QUESTION_LOCALIZED,
        InterviewQuestionEntity.QUESTION_NL_NL,
        InterviewQuestionEntity.QUESTION_PT_BR,
        InterviewQuestionEntity.QUESTION_ZH_CN,
        InterviewQuestionEntity.STATUS,
        InterviewQuestionEntity.SUB_MODULE,
        InterviewQuestionEntity.TYPE_DE_DE,
        InterviewQuestionEntity.TYPE_DEFAULT_VALUE,
        InterviewQuestionEntity.TYPE_EN_DEBUG,
        InterviewQuestionEntity.TYPE_EN_GB,
        InterviewQuestionEntity.TYPE_EN_US,
        InterviewQuestionEntity.TYPE_ES_ES,
        InterviewQuestionEntity.TYPE_ES_MX,
        InterviewQuestionEntity.TYPE_FR_CA,
        InterviewQuestionEntity.TYPE_FR_FR,
        InterviewQuestionEntity.TYPE_IT_IT,
        InterviewQuestionEntity.TYPE_LOCALIZED,
        InterviewQuestionEntity.TYPE_NL_NL,
        InterviewQuestionEntity.TYPE_PT_BR,
        InterviewQuestionEntity.TYPE_ZH_CN,
        InterviewQuestionEntity.CREATED_BY_NAV,
        InterviewQuestionEntity.LAST_MODIFIED_BY_NAV,
        InterviewQuestionEntity.MDF_SYSTEM_RECORD_STATUS_NAV,
        InterviewQuestionEntity.QUESTION_TRANSLATION_TEXT_NAV,
        InterviewQuestionEntity.STATUS_NAV,
        InterviewQuestionEntity.TYPE_TRANSLATION_TEXT_NAV,
        InterviewQuestionEntity.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    InterviewQuestionEntity.ALL_FIELDS = new core_1.AllFields('*', InterviewQuestionEntity);
    /**
     * All key fields of the InterviewQuestionEntity entity.
     */
    InterviewQuestionEntity._keyFields = [InterviewQuestionEntity.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property InterviewQuestionEntity.
     */
    InterviewQuestionEntity._keys = InterviewQuestionEntity._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(InterviewQuestionEntity = exports.InterviewQuestionEntity || (exports.InterviewQuestionEntity = {}));
exports.InterviewQuestionEntity = InterviewQuestionEntity;
//# sourceMappingURL=InterviewQuestionEntity.js.map