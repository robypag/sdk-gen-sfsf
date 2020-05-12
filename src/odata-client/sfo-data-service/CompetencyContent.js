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
var CompetencyContentRequestBuilder_1 = require("./CompetencyContentRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "CompetencyContent" of service "SFOData".
 */
var CompetencyContent = /** @class */ (function (_super) {
    __extends(CompetencyContent, _super);
    function CompetencyContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `CompetencyContent`.
     * @returns A builder that constructs instances of entity type `CompetencyContent`.
     */
    CompetencyContent.builder = function () {
        return core_1.Entity.entityBuilder(CompetencyContent);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CompetencyContent` entity type.
     * @returns A `CompetencyContent` request builder.
     */
    CompetencyContent.requestBuilder = function () {
        return new CompetencyContentRequestBuilder_1.CompetencyContentRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CompetencyContent`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CompetencyContent`.
     */
    CompetencyContent.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, CompetencyContent);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CompetencyContent.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CompetencyContent.
     */
    CompetencyContent._entityName = 'CompetencyContent';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CompetencyContent.
     */
    CompetencyContent._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    CompetencyContent._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return CompetencyContent;
}(core_1.Entity));
exports.CompetencyContent = CompetencyContent;
var User_1 = require("./User");
var CompetencyEntity_1 = require("./CompetencyEntity");
var MdfEnumValue_1 = require("./MdfEnumValue");
var RoleEntity_1 = require("./RoleEntity");
(function (CompetencyContent) {
    /**
     * Static representation of the [[jobProfileExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyContent.JOB_PROFILE_EXTERNAL_CODE = new core_1.StringField('JobProfile_externalCode', CompetencyContent, 'Edm.String');
    /**
     * Static representation of the [[competencyMappingId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyContent.COMPETENCY_MAPPING_ID = new core_1.StringField('competencyMappingId', CompetencyContent, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyContent.CREATED_BY = new core_1.StringField('createdBy', CompetencyContent, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyContent.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', CompetencyContent, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[entity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyContent.ENTITY = new core_1.StringField('entity', CompetencyContent, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyContent.EXTERNAL_CODE = new core_1.StringField('externalCode', CompetencyContent, 'Edm.String');
    /**
     * Static representation of the [[jobProfileId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyContent.JOB_PROFILE_ID = new core_1.StringField('jobProfileId', CompetencyContent, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyContent.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', CompetencyContent, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyContent.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', CompetencyContent, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyContent.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', CompetencyContent, 'Edm.String');
    /**
     * Static representation of the [[order]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyContent.ORDER = new core_1.BigNumberField('order', CompetencyContent, 'Edm.Int64');
    /**
     * Static representation of the [[role]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyContent.ROLE = new core_1.StringField('role', CompetencyContent, 'Edm.String');
    /**
     * Static representation of the [[sectionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyContent.SECTION_ID = new core_1.StringField('sectionId', CompetencyContent, 'Edm.String');
    /**
     * Static representation of the [[sectionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyContent.SECTION_TYPE = new core_1.StringField('sectionType', CompetencyContent, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyContent.STATUS = new core_1.StringField('status', CompetencyContent, 'Edm.String');
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyContent.SUB_MODULE = new core_1.StringField('subModule', CompetencyContent, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyContent.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', CompetencyContent, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[entityNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyContent.ENTITY_NAV = new core_1.OneToOneLink('entityNav', CompetencyContent, CompetencyEntity_1.CompetencyEntity);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyContent.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', CompetencyContent, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyContent.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', CompetencyContent, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[roleNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyContent.ROLE_NAV = new core_1.OneToOneLink('roleNav', CompetencyContent, RoleEntity_1.RoleEntity);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyContent.STATUS_NAV = new core_1.OneToOneLink('statusNav', CompetencyContent, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the CompetencyContent entity.
     */
    CompetencyContent._allFields = [
        CompetencyContent.JOB_PROFILE_EXTERNAL_CODE,
        CompetencyContent.COMPETENCY_MAPPING_ID,
        CompetencyContent.CREATED_BY,
        CompetencyContent.CREATED_DATE_TIME,
        CompetencyContent.ENTITY,
        CompetencyContent.EXTERNAL_CODE,
        CompetencyContent.JOB_PROFILE_ID,
        CompetencyContent.LAST_MODIFIED_BY,
        CompetencyContent.LAST_MODIFIED_DATE_TIME,
        CompetencyContent.MDF_SYSTEM_RECORD_STATUS,
        CompetencyContent.ORDER,
        CompetencyContent.ROLE,
        CompetencyContent.SECTION_ID,
        CompetencyContent.SECTION_TYPE,
        CompetencyContent.STATUS,
        CompetencyContent.SUB_MODULE,
        CompetencyContent.CREATED_BY_NAV,
        CompetencyContent.ENTITY_NAV,
        CompetencyContent.LAST_MODIFIED_BY_NAV,
        CompetencyContent.MDF_SYSTEM_RECORD_STATUS_NAV,
        CompetencyContent.ROLE_NAV,
        CompetencyContent.STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    CompetencyContent.ALL_FIELDS = new core_1.AllFields('*', CompetencyContent);
    /**
     * All key fields of the CompetencyContent entity.
     */
    CompetencyContent._keyFields = [CompetencyContent.JOB_PROFILE_EXTERNAL_CODE, CompetencyContent.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property CompetencyContent.
     */
    CompetencyContent._keys = CompetencyContent._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CompetencyContent = exports.CompetencyContent || (exports.CompetencyContent = {}));
exports.CompetencyContent = CompetencyContent;
//# sourceMappingURL=CompetencyContent.js.map