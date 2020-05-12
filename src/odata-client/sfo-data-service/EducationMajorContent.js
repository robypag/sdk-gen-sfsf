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
var EducationMajorContentRequestBuilder_1 = require("./EducationMajorContentRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EducationMajorContent" of service "SFOData".
 */
var EducationMajorContent = /** @class */ (function (_super) {
    __extends(EducationMajorContent, _super);
    function EducationMajorContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EducationMajorContent`.
     * @returns A builder that constructs instances of entity type `EducationMajorContent`.
     */
    EducationMajorContent.builder = function () {
        return core_1.Entity.entityBuilder(EducationMajorContent);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EducationMajorContent` entity type.
     * @returns A `EducationMajorContent` request builder.
     */
    EducationMajorContent.requestBuilder = function () {
        return new EducationMajorContentRequestBuilder_1.EducationMajorContentRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EducationMajorContent`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EducationMajorContent`.
     */
    EducationMajorContent.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EducationMajorContent);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EducationMajorContent.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EducationMajorContent.
     */
    EducationMajorContent._entityName = 'EducationMajorContent';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EducationMajorContent.
     */
    EducationMajorContent._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EducationMajorContent._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return EducationMajorContent;
}(core_1.Entity));
exports.EducationMajorContent = EducationMajorContent;
var User_1 = require("./User");
var EducationMajorEntity_1 = require("./EducationMajorEntity");
var EducationDegreeEntity_1 = require("./EducationDegreeEntity");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (EducationMajorContent) {
    /**
     * Static representation of the [[jobProfileExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationMajorContent.JOB_PROFILE_EXTERNAL_CODE = new core_1.StringField('JobProfile_externalCode', EducationMajorContent, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationMajorContent.CREATED_BY = new core_1.StringField('createdBy', EducationMajorContent, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationMajorContent.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', EducationMajorContent, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[entity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationMajorContent.ENTITY = new core_1.StringField('entity', EducationMajorContent, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationMajorContent.EXTERNAL_CODE = new core_1.StringField('externalCode', EducationMajorContent, 'Edm.String');
    /**
     * Static representation of the [[jobProfileId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationMajorContent.JOB_PROFILE_ID = new core_1.StringField('jobProfileId', EducationMajorContent, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationMajorContent.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', EducationMajorContent, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationMajorContent.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', EducationMajorContent, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mappedDegreeId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationMajorContent.MAPPED_DEGREE_ID = new core_1.StringField('mappedDegreeId', EducationMajorContent, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationMajorContent.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', EducationMajorContent, 'Edm.String');
    /**
     * Static representation of the [[order]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationMajorContent.ORDER = new core_1.BigNumberField('order', EducationMajorContent, 'Edm.Int64');
    /**
     * Static representation of the [[sectionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationMajorContent.SECTION_ID = new core_1.StringField('sectionId', EducationMajorContent, 'Edm.String');
    /**
     * Static representation of the [[sectionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationMajorContent.SECTION_TYPE = new core_1.StringField('sectionType', EducationMajorContent, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationMajorContent.STATUS = new core_1.StringField('status', EducationMajorContent, 'Edm.String');
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationMajorContent.SUB_MODULE = new core_1.StringField('subModule', EducationMajorContent, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationMajorContent.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', EducationMajorContent, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[entityNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationMajorContent.ENTITY_NAV = new core_1.OneToOneLink('entityNav', EducationMajorContent, EducationMajorEntity_1.EducationMajorEntity);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationMajorContent.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', EducationMajorContent, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mappedDegreeIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationMajorContent.MAPPED_DEGREE_ID_NAV = new core_1.OneToOneLink('mappedDegreeIdNav', EducationMajorContent, EducationDegreeEntity_1.EducationDegreeEntity);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationMajorContent.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', EducationMajorContent, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EducationMajorContent.STATUS_NAV = new core_1.OneToOneLink('statusNav', EducationMajorContent, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the EducationMajorContent entity.
     */
    EducationMajorContent._allFields = [
        EducationMajorContent.JOB_PROFILE_EXTERNAL_CODE,
        EducationMajorContent.CREATED_BY,
        EducationMajorContent.CREATED_DATE_TIME,
        EducationMajorContent.ENTITY,
        EducationMajorContent.EXTERNAL_CODE,
        EducationMajorContent.JOB_PROFILE_ID,
        EducationMajorContent.LAST_MODIFIED_BY,
        EducationMajorContent.LAST_MODIFIED_DATE_TIME,
        EducationMajorContent.MAPPED_DEGREE_ID,
        EducationMajorContent.MDF_SYSTEM_RECORD_STATUS,
        EducationMajorContent.ORDER,
        EducationMajorContent.SECTION_ID,
        EducationMajorContent.SECTION_TYPE,
        EducationMajorContent.STATUS,
        EducationMajorContent.SUB_MODULE,
        EducationMajorContent.CREATED_BY_NAV,
        EducationMajorContent.ENTITY_NAV,
        EducationMajorContent.LAST_MODIFIED_BY_NAV,
        EducationMajorContent.MAPPED_DEGREE_ID_NAV,
        EducationMajorContent.MDF_SYSTEM_RECORD_STATUS_NAV,
        EducationMajorContent.STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    EducationMajorContent.ALL_FIELDS = new core_1.AllFields('*', EducationMajorContent);
    /**
     * All key fields of the EducationMajorContent entity.
     */
    EducationMajorContent._keyFields = [EducationMajorContent.JOB_PROFILE_EXTERNAL_CODE, EducationMajorContent.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property EducationMajorContent.
     */
    EducationMajorContent._keys = EducationMajorContent._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EducationMajorContent = exports.EducationMajorContent || (exports.EducationMajorContent = {}));
exports.EducationMajorContent = EducationMajorContent;
//# sourceMappingURL=EducationMajorContent.js.map