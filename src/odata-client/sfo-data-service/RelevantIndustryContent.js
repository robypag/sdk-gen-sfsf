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
var RelevantIndustryContentRequestBuilder_1 = require("./RelevantIndustryContentRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "RelevantIndustryContent" of service "SFOData".
 */
var RelevantIndustryContent = /** @class */ (function (_super) {
    __extends(RelevantIndustryContent, _super);
    function RelevantIndustryContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `RelevantIndustryContent`.
     * @returns A builder that constructs instances of entity type `RelevantIndustryContent`.
     */
    RelevantIndustryContent.builder = function () {
        return core_1.Entity.entityBuilder(RelevantIndustryContent);
    };
    /**
     * Returns a request builder to construct requests for operations on the `RelevantIndustryContent` entity type.
     * @returns A `RelevantIndustryContent` request builder.
     */
    RelevantIndustryContent.requestBuilder = function () {
        return new RelevantIndustryContentRequestBuilder_1.RelevantIndustryContentRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `RelevantIndustryContent`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `RelevantIndustryContent`.
     */
    RelevantIndustryContent.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, RelevantIndustryContent);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    RelevantIndustryContent.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for RelevantIndustryContent.
     */
    RelevantIndustryContent._entityName = 'RelevantIndustryContent';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for RelevantIndustryContent.
     */
    RelevantIndustryContent._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    RelevantIndustryContent._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return RelevantIndustryContent;
}(core_1.Entity));
exports.RelevantIndustryContent = RelevantIndustryContent;
var User_1 = require("./User");
var RelevantIndustryEntity_1 = require("./RelevantIndustryEntity");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (RelevantIndustryContent) {
    /**
     * Static representation of the [[jobProfileExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RelevantIndustryContent.JOB_PROFILE_EXTERNAL_CODE = new core_1.StringField('JobProfile_externalCode', RelevantIndustryContent, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RelevantIndustryContent.CREATED_BY = new core_1.StringField('createdBy', RelevantIndustryContent, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RelevantIndustryContent.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', RelevantIndustryContent, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[entity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RelevantIndustryContent.ENTITY = new core_1.StringField('entity', RelevantIndustryContent, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RelevantIndustryContent.EXTERNAL_CODE = new core_1.StringField('externalCode', RelevantIndustryContent, 'Edm.String');
    /**
     * Static representation of the [[jobProfileId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RelevantIndustryContent.JOB_PROFILE_ID = new core_1.StringField('jobProfileId', RelevantIndustryContent, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RelevantIndustryContent.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', RelevantIndustryContent, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RelevantIndustryContent.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', RelevantIndustryContent, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RelevantIndustryContent.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', RelevantIndustryContent, 'Edm.String');
    /**
     * Static representation of the [[order]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RelevantIndustryContent.ORDER = new core_1.BigNumberField('order', RelevantIndustryContent, 'Edm.Int64');
    /**
     * Static representation of the [[sectionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RelevantIndustryContent.SECTION_ID = new core_1.StringField('sectionId', RelevantIndustryContent, 'Edm.String');
    /**
     * Static representation of the [[sectionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RelevantIndustryContent.SECTION_TYPE = new core_1.StringField('sectionType', RelevantIndustryContent, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RelevantIndustryContent.STATUS = new core_1.StringField('status', RelevantIndustryContent, 'Edm.String');
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RelevantIndustryContent.SUB_MODULE = new core_1.StringField('subModule', RelevantIndustryContent, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RelevantIndustryContent.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', RelevantIndustryContent, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[entityNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RelevantIndustryContent.ENTITY_NAV = new core_1.OneToOneLink('entityNav', RelevantIndustryContent, RelevantIndustryEntity_1.RelevantIndustryEntity);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RelevantIndustryContent.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', RelevantIndustryContent, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RelevantIndustryContent.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', RelevantIndustryContent, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RelevantIndustryContent.STATUS_NAV = new core_1.OneToOneLink('statusNav', RelevantIndustryContent, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the RelevantIndustryContent entity.
     */
    RelevantIndustryContent._allFields = [
        RelevantIndustryContent.JOB_PROFILE_EXTERNAL_CODE,
        RelevantIndustryContent.CREATED_BY,
        RelevantIndustryContent.CREATED_DATE_TIME,
        RelevantIndustryContent.ENTITY,
        RelevantIndustryContent.EXTERNAL_CODE,
        RelevantIndustryContent.JOB_PROFILE_ID,
        RelevantIndustryContent.LAST_MODIFIED_BY,
        RelevantIndustryContent.LAST_MODIFIED_DATE_TIME,
        RelevantIndustryContent.MDF_SYSTEM_RECORD_STATUS,
        RelevantIndustryContent.ORDER,
        RelevantIndustryContent.SECTION_ID,
        RelevantIndustryContent.SECTION_TYPE,
        RelevantIndustryContent.STATUS,
        RelevantIndustryContent.SUB_MODULE,
        RelevantIndustryContent.CREATED_BY_NAV,
        RelevantIndustryContent.ENTITY_NAV,
        RelevantIndustryContent.LAST_MODIFIED_BY_NAV,
        RelevantIndustryContent.MDF_SYSTEM_RECORD_STATUS_NAV,
        RelevantIndustryContent.STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    RelevantIndustryContent.ALL_FIELDS = new core_1.AllFields('*', RelevantIndustryContent);
    /**
     * All key fields of the RelevantIndustryContent entity.
     */
    RelevantIndustryContent._keyFields = [RelevantIndustryContent.JOB_PROFILE_EXTERNAL_CODE, RelevantIndustryContent.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property RelevantIndustryContent.
     */
    RelevantIndustryContent._keys = RelevantIndustryContent._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(RelevantIndustryContent = exports.RelevantIndustryContent || (exports.RelevantIndustryContent = {}));
exports.RelevantIndustryContent = RelevantIndustryContent;
//# sourceMappingURL=RelevantIndustryContent.js.map