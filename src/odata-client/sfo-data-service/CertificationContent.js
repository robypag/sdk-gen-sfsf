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
var CertificationContentRequestBuilder_1 = require("./CertificationContentRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "CertificationContent" of service "SFOData".
 */
var CertificationContent = /** @class */ (function (_super) {
    __extends(CertificationContent, _super);
    function CertificationContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `CertificationContent`.
     * @returns A builder that constructs instances of entity type `CertificationContent`.
     */
    CertificationContent.builder = function () {
        return core_1.Entity.entityBuilder(CertificationContent);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CertificationContent` entity type.
     * @returns A `CertificationContent` request builder.
     */
    CertificationContent.requestBuilder = function () {
        return new CertificationContentRequestBuilder_1.CertificationContentRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CertificationContent`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CertificationContent`.
     */
    CertificationContent.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, CertificationContent);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CertificationContent.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CertificationContent.
     */
    CertificationContent._entityName = 'CertificationContent';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CertificationContent.
     */
    CertificationContent._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    CertificationContent._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return CertificationContent;
}(core_1.Entity));
exports.CertificationContent = CertificationContent;
var User_1 = require("./User");
var CertificationEntity_1 = require("./CertificationEntity");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (CertificationContent) {
    /**
     * Static representation of the [[jobProfileExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationContent.JOB_PROFILE_EXTERNAL_CODE = new core_1.StringField('JobProfile_externalCode', CertificationContent, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationContent.CREATED_BY = new core_1.StringField('createdBy', CertificationContent, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationContent.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', CertificationContent, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[entity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationContent.ENTITY = new core_1.StringField('entity', CertificationContent, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationContent.EXTERNAL_CODE = new core_1.StringField('externalCode', CertificationContent, 'Edm.String');
    /**
     * Static representation of the [[jobProfileId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationContent.JOB_PROFILE_ID = new core_1.StringField('jobProfileId', CertificationContent, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationContent.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', CertificationContent, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationContent.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', CertificationContent, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationContent.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', CertificationContent, 'Edm.String');
    /**
     * Static representation of the [[order]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationContent.ORDER = new core_1.BigNumberField('order', CertificationContent, 'Edm.Int64');
    /**
     * Static representation of the [[sectionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationContent.SECTION_ID = new core_1.StringField('sectionId', CertificationContent, 'Edm.String');
    /**
     * Static representation of the [[sectionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationContent.SECTION_TYPE = new core_1.StringField('sectionType', CertificationContent, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationContent.STATUS = new core_1.StringField('status', CertificationContent, 'Edm.String');
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationContent.SUB_MODULE = new core_1.StringField('subModule', CertificationContent, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationContent.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', CertificationContent, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[entityNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationContent.ENTITY_NAV = new core_1.OneToOneLink('entityNav', CertificationContent, CertificationEntity_1.CertificationEntity);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationContent.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', CertificationContent, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationContent.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', CertificationContent, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificationContent.STATUS_NAV = new core_1.OneToOneLink('statusNav', CertificationContent, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the CertificationContent entity.
     */
    CertificationContent._allFields = [
        CertificationContent.JOB_PROFILE_EXTERNAL_CODE,
        CertificationContent.CREATED_BY,
        CertificationContent.CREATED_DATE_TIME,
        CertificationContent.ENTITY,
        CertificationContent.EXTERNAL_CODE,
        CertificationContent.JOB_PROFILE_ID,
        CertificationContent.LAST_MODIFIED_BY,
        CertificationContent.LAST_MODIFIED_DATE_TIME,
        CertificationContent.MDF_SYSTEM_RECORD_STATUS,
        CertificationContent.ORDER,
        CertificationContent.SECTION_ID,
        CertificationContent.SECTION_TYPE,
        CertificationContent.STATUS,
        CertificationContent.SUB_MODULE,
        CertificationContent.CREATED_BY_NAV,
        CertificationContent.ENTITY_NAV,
        CertificationContent.LAST_MODIFIED_BY_NAV,
        CertificationContent.MDF_SYSTEM_RECORD_STATUS_NAV,
        CertificationContent.STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    CertificationContent.ALL_FIELDS = new core_1.AllFields('*', CertificationContent);
    /**
     * All key fields of the CertificationContent entity.
     */
    CertificationContent._keyFields = [CertificationContent.JOB_PROFILE_EXTERNAL_CODE, CertificationContent.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property CertificationContent.
     */
    CertificationContent._keys = CertificationContent._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CertificationContent = exports.CertificationContent || (exports.CertificationContent = {}));
exports.CertificationContent = CertificationContent;
//# sourceMappingURL=CertificationContent.js.map