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
var PhysicalReqContentRequestBuilder_1 = require("./PhysicalReqContentRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PhysicalReqContent" of service "SFOData".
 */
var PhysicalReqContent = /** @class */ (function (_super) {
    __extends(PhysicalReqContent, _super);
    function PhysicalReqContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PhysicalReqContent`.
     * @returns A builder that constructs instances of entity type `PhysicalReqContent`.
     */
    PhysicalReqContent.builder = function () {
        return core_1.Entity.entityBuilder(PhysicalReqContent);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PhysicalReqContent` entity type.
     * @returns A `PhysicalReqContent` request builder.
     */
    PhysicalReqContent.requestBuilder = function () {
        return new PhysicalReqContentRequestBuilder_1.PhysicalReqContentRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PhysicalReqContent`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PhysicalReqContent`.
     */
    PhysicalReqContent.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PhysicalReqContent);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PhysicalReqContent.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PhysicalReqContent.
     */
    PhysicalReqContent._entityName = 'PhysicalReqContent';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PhysicalReqContent.
     */
    PhysicalReqContent._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PhysicalReqContent._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PhysicalReqContent;
}(core_1.Entity));
exports.PhysicalReqContent = PhysicalReqContent;
var User_1 = require("./User");
var PhysicalReqEntity_1 = require("./PhysicalReqEntity");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (PhysicalReqContent) {
    /**
     * Static representation of the [[jobProfileExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqContent.JOB_PROFILE_EXTERNAL_CODE = new core_1.StringField('JobProfile_externalCode', PhysicalReqContent, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqContent.CREATED_BY = new core_1.StringField('createdBy', PhysicalReqContent, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqContent.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PhysicalReqContent, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[entity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqContent.ENTITY = new core_1.StringField('entity', PhysicalReqContent, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqContent.EXTERNAL_CODE = new core_1.StringField('externalCode', PhysicalReqContent, 'Edm.String');
    /**
     * Static representation of the [[jobProfileId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqContent.JOB_PROFILE_ID = new core_1.StringField('jobProfileId', PhysicalReqContent, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqContent.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PhysicalReqContent, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqContent.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PhysicalReqContent, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqContent.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', PhysicalReqContent, 'Edm.String');
    /**
     * Static representation of the [[order]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqContent.ORDER = new core_1.BigNumberField('order', PhysicalReqContent, 'Edm.Int64');
    /**
     * Static representation of the [[sectionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqContent.SECTION_ID = new core_1.StringField('sectionId', PhysicalReqContent, 'Edm.String');
    /**
     * Static representation of the [[sectionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqContent.SECTION_TYPE = new core_1.StringField('sectionType', PhysicalReqContent, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqContent.STATUS = new core_1.StringField('status', PhysicalReqContent, 'Edm.String');
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqContent.SUB_MODULE = new core_1.StringField('subModule', PhysicalReqContent, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqContent.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', PhysicalReqContent, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[entityNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqContent.ENTITY_NAV = new core_1.OneToOneLink('entityNav', PhysicalReqContent, PhysicalReqEntity_1.PhysicalReqEntity);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqContent.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', PhysicalReqContent, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqContent.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', PhysicalReqContent, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PhysicalReqContent.STATUS_NAV = new core_1.OneToOneLink('statusNav', PhysicalReqContent, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the PhysicalReqContent entity.
     */
    PhysicalReqContent._allFields = [
        PhysicalReqContent.JOB_PROFILE_EXTERNAL_CODE,
        PhysicalReqContent.CREATED_BY,
        PhysicalReqContent.CREATED_DATE_TIME,
        PhysicalReqContent.ENTITY,
        PhysicalReqContent.EXTERNAL_CODE,
        PhysicalReqContent.JOB_PROFILE_ID,
        PhysicalReqContent.LAST_MODIFIED_BY,
        PhysicalReqContent.LAST_MODIFIED_DATE_TIME,
        PhysicalReqContent.MDF_SYSTEM_RECORD_STATUS,
        PhysicalReqContent.ORDER,
        PhysicalReqContent.SECTION_ID,
        PhysicalReqContent.SECTION_TYPE,
        PhysicalReqContent.STATUS,
        PhysicalReqContent.SUB_MODULE,
        PhysicalReqContent.CREATED_BY_NAV,
        PhysicalReqContent.ENTITY_NAV,
        PhysicalReqContent.LAST_MODIFIED_BY_NAV,
        PhysicalReqContent.MDF_SYSTEM_RECORD_STATUS_NAV,
        PhysicalReqContent.STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    PhysicalReqContent.ALL_FIELDS = new core_1.AllFields('*', PhysicalReqContent);
    /**
     * All key fields of the PhysicalReqContent entity.
     */
    PhysicalReqContent._keyFields = [PhysicalReqContent.JOB_PROFILE_EXTERNAL_CODE, PhysicalReqContent.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property PhysicalReqContent.
     */
    PhysicalReqContent._keys = PhysicalReqContent._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PhysicalReqContent = exports.PhysicalReqContent || (exports.PhysicalReqContent = {}));
exports.PhysicalReqContent = PhysicalReqContent;
//# sourceMappingURL=PhysicalReqContent.js.map