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
var RoleTalentPoolMappingEntityRequestBuilder_1 = require("./RoleTalentPoolMappingEntityRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "RoleTalentPoolMappingEntity" of service "SFOData".
 */
var RoleTalentPoolMappingEntity = /** @class */ (function (_super) {
    __extends(RoleTalentPoolMappingEntity, _super);
    function RoleTalentPoolMappingEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `RoleTalentPoolMappingEntity`.
     * @returns A builder that constructs instances of entity type `RoleTalentPoolMappingEntity`.
     */
    RoleTalentPoolMappingEntity.builder = function () {
        return core_1.Entity.entityBuilder(RoleTalentPoolMappingEntity);
    };
    /**
     * Returns a request builder to construct requests for operations on the `RoleTalentPoolMappingEntity` entity type.
     * @returns A `RoleTalentPoolMappingEntity` request builder.
     */
    RoleTalentPoolMappingEntity.requestBuilder = function () {
        return new RoleTalentPoolMappingEntityRequestBuilder_1.RoleTalentPoolMappingEntityRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `RoleTalentPoolMappingEntity`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `RoleTalentPoolMappingEntity`.
     */
    RoleTalentPoolMappingEntity.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, RoleTalentPoolMappingEntity);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    RoleTalentPoolMappingEntity.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for RoleTalentPoolMappingEntity.
     */
    RoleTalentPoolMappingEntity._entityName = 'RoleTalentPoolMappingEntity';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for RoleTalentPoolMappingEntity.
     */
    RoleTalentPoolMappingEntity._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    RoleTalentPoolMappingEntity._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return RoleTalentPoolMappingEntity;
}(core_1.Entity));
exports.RoleTalentPoolMappingEntity = RoleTalentPoolMappingEntity;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var TalentPool_1 = require("./TalentPool");
(function (RoleTalentPoolMappingEntity) {
    /**
     * Static representation of the [[roleEntityExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleTalentPoolMappingEntity.ROLE_ENTITY_EXTERNAL_CODE = new core_1.StringField('RoleEntity_externalCode', RoleTalentPoolMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleTalentPoolMappingEntity.CREATED_BY = new core_1.StringField('createdBy', RoleTalentPoolMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleTalentPoolMappingEntity.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', RoleTalentPoolMappingEntity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleTalentPoolMappingEntity.DESCRIPTION = new core_1.StringField('description', RoleTalentPoolMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleTalentPoolMappingEntity.EXTERNAL_CODE = new core_1.StringField('externalCode', RoleTalentPoolMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleTalentPoolMappingEntity.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', RoleTalentPoolMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleTalentPoolMappingEntity.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', RoleTalentPoolMappingEntity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleTalentPoolMappingEntity.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', RoleTalentPoolMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[mdfTalentPool]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleTalentPoolMappingEntity.MDF_TALENT_POOL = new core_1.StringField('mdfTalentPool', RoleTalentPoolMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleTalentPoolMappingEntity.NAME = new core_1.StringField('name', RoleTalentPoolMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleTalentPoolMappingEntity.STATUS = new core_1.StringField('status', RoleTalentPoolMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleTalentPoolMappingEntity.SUB_MODULE = new core_1.StringField('subModule', RoleTalentPoolMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[talentPoolId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleTalentPoolMappingEntity.TALENT_POOL_ID = new core_1.BigNumberField('talentPoolId', RoleTalentPoolMappingEntity, 'Edm.Int64');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleTalentPoolMappingEntity.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', RoleTalentPoolMappingEntity, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleTalentPoolMappingEntity.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', RoleTalentPoolMappingEntity, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleTalentPoolMappingEntity.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', RoleTalentPoolMappingEntity, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[mdfTalentPoolNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleTalentPoolMappingEntity.MDF_TALENT_POOL_NAV = new core_1.Link('mdfTalentPoolNav', RoleTalentPoolMappingEntity, TalentPool_1.TalentPool);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RoleTalentPoolMappingEntity.STATUS_NAV = new core_1.OneToOneLink('statusNav', RoleTalentPoolMappingEntity, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the RoleTalentPoolMappingEntity entity.
     */
    RoleTalentPoolMappingEntity._allFields = [
        RoleTalentPoolMappingEntity.ROLE_ENTITY_EXTERNAL_CODE,
        RoleTalentPoolMappingEntity.CREATED_BY,
        RoleTalentPoolMappingEntity.CREATED_DATE_TIME,
        RoleTalentPoolMappingEntity.DESCRIPTION,
        RoleTalentPoolMappingEntity.EXTERNAL_CODE,
        RoleTalentPoolMappingEntity.LAST_MODIFIED_BY,
        RoleTalentPoolMappingEntity.LAST_MODIFIED_DATE_TIME,
        RoleTalentPoolMappingEntity.MDF_SYSTEM_RECORD_STATUS,
        RoleTalentPoolMappingEntity.MDF_TALENT_POOL,
        RoleTalentPoolMappingEntity.NAME,
        RoleTalentPoolMappingEntity.STATUS,
        RoleTalentPoolMappingEntity.SUB_MODULE,
        RoleTalentPoolMappingEntity.TALENT_POOL_ID,
        RoleTalentPoolMappingEntity.CREATED_BY_NAV,
        RoleTalentPoolMappingEntity.LAST_MODIFIED_BY_NAV,
        RoleTalentPoolMappingEntity.MDF_SYSTEM_RECORD_STATUS_NAV,
        RoleTalentPoolMappingEntity.MDF_TALENT_POOL_NAV,
        RoleTalentPoolMappingEntity.STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    RoleTalentPoolMappingEntity.ALL_FIELDS = new core_1.AllFields('*', RoleTalentPoolMappingEntity);
    /**
     * All key fields of the RoleTalentPoolMappingEntity entity.
     */
    RoleTalentPoolMappingEntity._keyFields = [RoleTalentPoolMappingEntity.ROLE_ENTITY_EXTERNAL_CODE, RoleTalentPoolMappingEntity.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property RoleTalentPoolMappingEntity.
     */
    RoleTalentPoolMappingEntity._keys = RoleTalentPoolMappingEntity._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(RoleTalentPoolMappingEntity = exports.RoleTalentPoolMappingEntity || (exports.RoleTalentPoolMappingEntity = {}));
exports.RoleTalentPoolMappingEntity = RoleTalentPoolMappingEntity;
//# sourceMappingURL=RoleTalentPoolMappingEntity.js.map