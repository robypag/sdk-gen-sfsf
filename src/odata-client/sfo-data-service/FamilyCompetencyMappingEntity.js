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
var FamilyCompetencyMappingEntityRequestBuilder_1 = require("./FamilyCompetencyMappingEntityRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FamilyCompetencyMappingEntity" of service "SFOData".
 */
var FamilyCompetencyMappingEntity = /** @class */ (function (_super) {
    __extends(FamilyCompetencyMappingEntity, _super);
    function FamilyCompetencyMappingEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FamilyCompetencyMappingEntity`.
     * @returns A builder that constructs instances of entity type `FamilyCompetencyMappingEntity`.
     */
    FamilyCompetencyMappingEntity.builder = function () {
        return core_1.Entity.entityBuilder(FamilyCompetencyMappingEntity);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FamilyCompetencyMappingEntity` entity type.
     * @returns A `FamilyCompetencyMappingEntity` request builder.
     */
    FamilyCompetencyMappingEntity.requestBuilder = function () {
        return new FamilyCompetencyMappingEntityRequestBuilder_1.FamilyCompetencyMappingEntityRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FamilyCompetencyMappingEntity`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FamilyCompetencyMappingEntity`.
     */
    FamilyCompetencyMappingEntity.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FamilyCompetencyMappingEntity);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FamilyCompetencyMappingEntity.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FamilyCompetencyMappingEntity.
     */
    FamilyCompetencyMappingEntity._entityName = 'FamilyCompetencyMappingEntity';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FamilyCompetencyMappingEntity.
     */
    FamilyCompetencyMappingEntity._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FamilyCompetencyMappingEntity._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FamilyCompetencyMappingEntity;
}(core_1.Entity));
exports.FamilyCompetencyMappingEntity = FamilyCompetencyMappingEntity;
var CompetencyEntity_1 = require("./CompetencyEntity");
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (FamilyCompetencyMappingEntity) {
    /**
     * Static representation of the [[familyEntityExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilyCompetencyMappingEntity.FAMILY_ENTITY_EXTERNAL_CODE = new core_1.StringField('FamilyEntity_externalCode', FamilyCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[competency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilyCompetencyMappingEntity.COMPETENCY = new core_1.StringField('competency', FamilyCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilyCompetencyMappingEntity.CREATED_BY = new core_1.StringField('createdBy', FamilyCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilyCompetencyMappingEntity.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', FamilyCompetencyMappingEntity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilyCompetencyMappingEntity.EXTERNAL_CODE = new core_1.StringField('externalCode', FamilyCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilyCompetencyMappingEntity.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', FamilyCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilyCompetencyMappingEntity.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', FamilyCompetencyMappingEntity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilyCompetencyMappingEntity.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', FamilyCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilyCompetencyMappingEntity.STATUS = new core_1.StringField('status', FamilyCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilyCompetencyMappingEntity.SUB_MODULE = new core_1.StringField('subModule', FamilyCompetencyMappingEntity, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[competencyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilyCompetencyMappingEntity.COMPETENCY_NAV = new core_1.OneToOneLink('competencyNav', FamilyCompetencyMappingEntity, CompetencyEntity_1.CompetencyEntity);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilyCompetencyMappingEntity.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', FamilyCompetencyMappingEntity, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilyCompetencyMappingEntity.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', FamilyCompetencyMappingEntity, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilyCompetencyMappingEntity.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', FamilyCompetencyMappingEntity, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FamilyCompetencyMappingEntity.STATUS_NAV = new core_1.OneToOneLink('statusNav', FamilyCompetencyMappingEntity, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the FamilyCompetencyMappingEntity entity.
     */
    FamilyCompetencyMappingEntity._allFields = [
        FamilyCompetencyMappingEntity.FAMILY_ENTITY_EXTERNAL_CODE,
        FamilyCompetencyMappingEntity.COMPETENCY,
        FamilyCompetencyMappingEntity.CREATED_BY,
        FamilyCompetencyMappingEntity.CREATED_DATE_TIME,
        FamilyCompetencyMappingEntity.EXTERNAL_CODE,
        FamilyCompetencyMappingEntity.LAST_MODIFIED_BY,
        FamilyCompetencyMappingEntity.LAST_MODIFIED_DATE_TIME,
        FamilyCompetencyMappingEntity.MDF_SYSTEM_RECORD_STATUS,
        FamilyCompetencyMappingEntity.STATUS,
        FamilyCompetencyMappingEntity.SUB_MODULE,
        FamilyCompetencyMappingEntity.COMPETENCY_NAV,
        FamilyCompetencyMappingEntity.CREATED_BY_NAV,
        FamilyCompetencyMappingEntity.LAST_MODIFIED_BY_NAV,
        FamilyCompetencyMappingEntity.MDF_SYSTEM_RECORD_STATUS_NAV,
        FamilyCompetencyMappingEntity.STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    FamilyCompetencyMappingEntity.ALL_FIELDS = new core_1.AllFields('*', FamilyCompetencyMappingEntity);
    /**
     * All key fields of the FamilyCompetencyMappingEntity entity.
     */
    FamilyCompetencyMappingEntity._keyFields = [FamilyCompetencyMappingEntity.FAMILY_ENTITY_EXTERNAL_CODE, FamilyCompetencyMappingEntity.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property FamilyCompetencyMappingEntity.
     */
    FamilyCompetencyMappingEntity._keys = FamilyCompetencyMappingEntity._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FamilyCompetencyMappingEntity = exports.FamilyCompetencyMappingEntity || (exports.FamilyCompetencyMappingEntity = {}));
exports.FamilyCompetencyMappingEntity = FamilyCompetencyMappingEntity;
//# sourceMappingURL=FamilyCompetencyMappingEntity.js.map