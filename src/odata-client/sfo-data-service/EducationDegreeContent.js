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
var EducationDegreeContentRequestBuilder_1 = require("./EducationDegreeContentRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EducationDegreeContent" of service "SFOData".
 */
var EducationDegreeContent = /** @class */ (function (_super) {
    __extends(EducationDegreeContent, _super);
    function EducationDegreeContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EducationDegreeContent`.
     * @returns A builder that constructs instances of entity type `EducationDegreeContent`.
     */
    EducationDegreeContent.builder = function () {
        return core_1.Entity.entityBuilder(EducationDegreeContent);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EducationDegreeContent` entity type.
     * @returns A `EducationDegreeContent` request builder.
     */
    EducationDegreeContent.requestBuilder = function () {
        return new EducationDegreeContentRequestBuilder_1.EducationDegreeContentRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EducationDegreeContent`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EducationDegreeContent`.
     */
    EducationDegreeContent.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EducationDegreeContent);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EducationDegreeContent.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EducationDegreeContent.
     */
    EducationDegreeContent._entityName = 'EducationDegreeContent';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EducationDegreeContent.
     */
    EducationDegreeContent._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EducationDegreeContent._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return EducationDegreeContent;
}(core_1.Entity));
exports.EducationDegreeContent = EducationDegreeContent;
var User_1 = require("./User");
var EducationDegreeEntity_1 = require("./EducationDegreeEntity");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (EducationDegreeContent) {
    /**
     * Static representation of the [[jobProfileExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationDegreeContent.JOB_PROFILE_EXTERNAL_CODE = new core_1.StringField('JobProfile_externalCode', EducationDegreeContent, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationDegreeContent.CREATED_BY = new core_1.StringField('createdBy', EducationDegreeContent, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationDegreeContent.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', EducationDegreeContent, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[entity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationDegreeContent.ENTITY = new core_1.StringField('entity', EducationDegreeContent, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationDegreeContent.EXTERNAL_CODE = new core_1.StringField('externalCode', EducationDegreeContent, 'Edm.String');
    /**
     * Static representation of the [[jobProfileId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationDegreeContent.JOB_PROFILE_ID = new core_1.StringField('jobProfileId', EducationDegreeContent, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationDegreeContent.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', EducationDegreeContent, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationDegreeContent.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', EducationDegreeContent, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationDegreeContent.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', EducationDegreeContent, 'Edm.String');
    /**
     * Static representation of the [[order]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationDegreeContent.ORDER = new core_1.BigNumberField('order', EducationDegreeContent, 'Edm.Int64');
    /**
     * Static representation of the [[sectionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationDegreeContent.SECTION_ID = new core_1.StringField('sectionId', EducationDegreeContent, 'Edm.String');
    /**
     * Static representation of the [[sectionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationDegreeContent.SECTION_TYPE = new core_1.StringField('sectionType', EducationDegreeContent, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationDegreeContent.STATUS = new core_1.StringField('status', EducationDegreeContent, 'Edm.String');
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationDegreeContent.SUB_MODULE = new core_1.StringField('subModule', EducationDegreeContent, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationDegreeContent.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', EducationDegreeContent, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[entityNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationDegreeContent.ENTITY_NAV = new core_1.OneToOneLink('entityNav', EducationDegreeContent, EducationDegreeEntity_1.EducationDegreeEntity);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationDegreeContent.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', EducationDegreeContent, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationDegreeContent.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', EducationDegreeContent, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationDegreeContent.STATUS_NAV = new core_1.OneToOneLink('statusNav', EducationDegreeContent, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the EducationDegreeContent entity.
     */
    EducationDegreeContent._allFields = [
        EducationDegreeContent.JOB_PROFILE_EXTERNAL_CODE,
        EducationDegreeContent.CREATED_BY,
        EducationDegreeContent.CREATED_DATE_TIME,
        EducationDegreeContent.ENTITY,
        EducationDegreeContent.EXTERNAL_CODE,
        EducationDegreeContent.JOB_PROFILE_ID,
        EducationDegreeContent.LAST_MODIFIED_BY,
        EducationDegreeContent.LAST_MODIFIED_DATE_TIME,
        EducationDegreeContent.MDF_SYSTEM_RECORD_STATUS,
        EducationDegreeContent.ORDER,
        EducationDegreeContent.SECTION_ID,
        EducationDegreeContent.SECTION_TYPE,
        EducationDegreeContent.STATUS,
        EducationDegreeContent.SUB_MODULE,
        EducationDegreeContent.CREATED_BY_NAV,
        EducationDegreeContent.ENTITY_NAV,
        EducationDegreeContent.LAST_MODIFIED_BY_NAV,
        EducationDegreeContent.MDF_SYSTEM_RECORD_STATUS_NAV,
        EducationDegreeContent.STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    EducationDegreeContent.ALL_FIELDS = new core_1.AllFields('*', EducationDegreeContent);
    /**
     * All key fields of the EducationDegreeContent entity.
     */
    EducationDegreeContent._keyFields = [EducationDegreeContent.JOB_PROFILE_EXTERNAL_CODE, EducationDegreeContent.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property EducationDegreeContent.
     */
    EducationDegreeContent._keys = EducationDegreeContent._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EducationDegreeContent = exports.EducationDegreeContent || (exports.EducationDegreeContent = {}));
exports.EducationDegreeContent = EducationDegreeContent;
//# sourceMappingURL=EducationDegreeContent.js.map