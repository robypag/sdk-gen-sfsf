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
var PositionEntityRequestBuilder_1 = require("./PositionEntityRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PositionEntity" of service "SFOData".
 */
var PositionEntity = /** @class */ (function (_super) {
    __extends(PositionEntity, _super);
    function PositionEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PositionEntity`.
     * @returns A builder that constructs instances of entity type `PositionEntity`.
     */
    PositionEntity.builder = function () {
        return core_1.Entity.entityBuilder(PositionEntity);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PositionEntity` entity type.
     * @returns A `PositionEntity` request builder.
     */
    PositionEntity.requestBuilder = function () {
        return new PositionEntityRequestBuilder_1.PositionEntityRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PositionEntity`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PositionEntity`.
     */
    PositionEntity.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PositionEntity);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PositionEntity.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PositionEntity.
     */
    PositionEntity._entityName = 'PositionEntity';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PositionEntity.
     */
    PositionEntity._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PositionEntity._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PositionEntity;
}(core_1.Entity));
exports.PositionEntity = PositionEntity;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var PositionCompetencyMappingEntity_1 = require("./PositionCompetencyMappingEntity");
var Position_1 = require("./Position");
var PositionSkillMappingEntity_1 = require("./PositionSkillMappingEntity");
var WfRequest_1 = require("./WfRequest");
(function (PositionEntity) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionEntity.CREATED_BY = new core_1.StringField('createdBy', PositionEntity, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionEntity.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PositionEntity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionEntity.EXTERNAL_CODE = new core_1.StringField('externalCode', PositionEntity, 'Edm.String');
    /**
     * Static representation of the [[jobCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionEntity.JOB_CODE = new core_1.StringField('jobCode', PositionEntity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionEntity.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PositionEntity, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionEntity.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PositionEntity, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionEntity.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', PositionEntity, 'Edm.String');
    /**
     * Static representation of the [[position]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionEntity.POSITION = new core_1.StringField('position', PositionEntity, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionEntity.STATUS = new core_1.StringField('status', PositionEntity, 'Edm.String');
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionEntity.SUB_MODULE = new core_1.StringField('subModule', PositionEntity, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionEntity.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', PositionEntity, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionEntity.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', PositionEntity, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionEntity.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', PositionEntity, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[positionCompetencyMappings]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionEntity.POSITION_COMPETENCY_MAPPINGS = new core_1.Link('positionCompetencyMappings', PositionEntity, PositionCompetencyMappingEntity_1.PositionCompetencyMappingEntity);
    /**
     * Static representation of the one-to-many navigation property [[positionNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionEntity.POSITION_NAV = new core_1.Link('positionNav', PositionEntity, Position_1.Position);
    /**
     * Static representation of the one-to-many navigation property [[positionSkillMappings]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionEntity.POSITION_SKILL_MAPPINGS = new core_1.Link('positionSkillMappings', PositionEntity, PositionSkillMappingEntity_1.PositionSkillMappingEntity);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionEntity.STATUS_NAV = new core_1.OneToOneLink('statusNav', PositionEntity, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionEntity.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', PositionEntity, WfRequest_1.WfRequest);
    /**
     * All fields of the PositionEntity entity.
     */
    PositionEntity._allFields = [
        PositionEntity.CREATED_BY,
        PositionEntity.CREATED_DATE_TIME,
        PositionEntity.EXTERNAL_CODE,
        PositionEntity.JOB_CODE,
        PositionEntity.LAST_MODIFIED_BY,
        PositionEntity.LAST_MODIFIED_DATE_TIME,
        PositionEntity.MDF_SYSTEM_RECORD_STATUS,
        PositionEntity.POSITION,
        PositionEntity.STATUS,
        PositionEntity.SUB_MODULE,
        PositionEntity.CREATED_BY_NAV,
        PositionEntity.LAST_MODIFIED_BY_NAV,
        PositionEntity.MDF_SYSTEM_RECORD_STATUS_NAV,
        PositionEntity.POSITION_COMPETENCY_MAPPINGS,
        PositionEntity.POSITION_NAV,
        PositionEntity.POSITION_SKILL_MAPPINGS,
        PositionEntity.STATUS_NAV,
        PositionEntity.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    PositionEntity.ALL_FIELDS = new core_1.AllFields('*', PositionEntity);
    /**
     * All key fields of the PositionEntity entity.
     */
    PositionEntity._keyFields = [PositionEntity.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property PositionEntity.
     */
    PositionEntity._keys = PositionEntity._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PositionEntity = exports.PositionEntity || (exports.PositionEntity = {}));
exports.PositionEntity = PositionEntity;
//# sourceMappingURL=PositionEntity.js.map