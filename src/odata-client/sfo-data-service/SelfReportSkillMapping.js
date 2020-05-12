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
var SelfReportSkillMappingRequestBuilder_1 = require("./SelfReportSkillMappingRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "SelfReportSkillMapping" of service "SFOData".
 */
var SelfReportSkillMapping = /** @class */ (function (_super) {
    __extends(SelfReportSkillMapping, _super);
    function SelfReportSkillMapping() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `SelfReportSkillMapping`.
     * @returns A builder that constructs instances of entity type `SelfReportSkillMapping`.
     */
    SelfReportSkillMapping.builder = function () {
        return core_1.Entity.entityBuilder(SelfReportSkillMapping);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SelfReportSkillMapping` entity type.
     * @returns A `SelfReportSkillMapping` request builder.
     */
    SelfReportSkillMapping.requestBuilder = function () {
        return new SelfReportSkillMappingRequestBuilder_1.SelfReportSkillMappingRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SelfReportSkillMapping`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SelfReportSkillMapping`.
     */
    SelfReportSkillMapping.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, SelfReportSkillMapping);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SelfReportSkillMapping.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SelfReportSkillMapping.
     */
    SelfReportSkillMapping._entityName = 'SelfReportSkillMapping';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SelfReportSkillMapping.
     */
    SelfReportSkillMapping._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    SelfReportSkillMapping._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return SelfReportSkillMapping;
}(core_1.Entity));
exports.SelfReportSkillMapping = SelfReportSkillMapping;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var SkillEntity_1 = require("./SkillEntity");
(function (SelfReportSkillMapping) {
    /**
     * Static representation of the [[skillProfileExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SelfReportSkillMapping.SKILL_PROFILE_EXTERNAL_CODE = new core_1.StringField('SkillProfile_externalCode', SelfReportSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SelfReportSkillMapping.CREATED_BY = new core_1.StringField('createdBy', SelfReportSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SelfReportSkillMapping.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', SelfReportSkillMapping, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SelfReportSkillMapping.EXTERNAL_CODE = new core_1.StringField('externalCode', SelfReportSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SelfReportSkillMapping.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', SelfReportSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SelfReportSkillMapping.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', SelfReportSkillMapping, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SelfReportSkillMapping.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', SelfReportSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[skill]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SelfReportSkillMapping.SKILL = new core_1.StringField('skill', SelfReportSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SelfReportSkillMapping.STATUS = new core_1.StringField('status', SelfReportSkillMapping, 'Edm.String');
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SelfReportSkillMapping.SUB_MODULE = new core_1.StringField('subModule', SelfReportSkillMapping, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SelfReportSkillMapping.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', SelfReportSkillMapping, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SelfReportSkillMapping.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', SelfReportSkillMapping, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SelfReportSkillMapping.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', SelfReportSkillMapping, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[skillNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SelfReportSkillMapping.SKILL_NAV = new core_1.OneToOneLink('skillNav', SelfReportSkillMapping, SkillEntity_1.SkillEntity);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SelfReportSkillMapping.STATUS_NAV = new core_1.OneToOneLink('statusNav', SelfReportSkillMapping, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the SelfReportSkillMapping entity.
     */
    SelfReportSkillMapping._allFields = [
        SelfReportSkillMapping.SKILL_PROFILE_EXTERNAL_CODE,
        SelfReportSkillMapping.CREATED_BY,
        SelfReportSkillMapping.CREATED_DATE_TIME,
        SelfReportSkillMapping.EXTERNAL_CODE,
        SelfReportSkillMapping.LAST_MODIFIED_BY,
        SelfReportSkillMapping.LAST_MODIFIED_DATE_TIME,
        SelfReportSkillMapping.MDF_SYSTEM_RECORD_STATUS,
        SelfReportSkillMapping.SKILL,
        SelfReportSkillMapping.STATUS,
        SelfReportSkillMapping.SUB_MODULE,
        SelfReportSkillMapping.CREATED_BY_NAV,
        SelfReportSkillMapping.LAST_MODIFIED_BY_NAV,
        SelfReportSkillMapping.MDF_SYSTEM_RECORD_STATUS_NAV,
        SelfReportSkillMapping.SKILL_NAV,
        SelfReportSkillMapping.STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    SelfReportSkillMapping.ALL_FIELDS = new core_1.AllFields('*', SelfReportSkillMapping);
    /**
     * All key fields of the SelfReportSkillMapping entity.
     */
    SelfReportSkillMapping._keyFields = [SelfReportSkillMapping.SKILL_PROFILE_EXTERNAL_CODE, SelfReportSkillMapping.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property SelfReportSkillMapping.
     */
    SelfReportSkillMapping._keys = SelfReportSkillMapping._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SelfReportSkillMapping = exports.SelfReportSkillMapping || (exports.SelfReportSkillMapping = {}));
exports.SelfReportSkillMapping = SelfReportSkillMapping;
//# sourceMappingURL=SelfReportSkillMapping.js.map