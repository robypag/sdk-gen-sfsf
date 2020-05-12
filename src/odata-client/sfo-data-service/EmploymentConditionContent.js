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
var EmploymentConditionContentRequestBuilder_1 = require("./EmploymentConditionContentRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EmploymentConditionContent" of service "SFOData".
 */
var EmploymentConditionContent = /** @class */ (function (_super) {
    __extends(EmploymentConditionContent, _super);
    function EmploymentConditionContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmploymentConditionContent`.
     * @returns A builder that constructs instances of entity type `EmploymentConditionContent`.
     */
    EmploymentConditionContent.builder = function () {
        return core_1.Entity.entityBuilder(EmploymentConditionContent);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmploymentConditionContent` entity type.
     * @returns A `EmploymentConditionContent` request builder.
     */
    EmploymentConditionContent.requestBuilder = function () {
        return new EmploymentConditionContentRequestBuilder_1.EmploymentConditionContentRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmploymentConditionContent`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmploymentConditionContent`.
     */
    EmploymentConditionContent.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EmploymentConditionContent);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmploymentConditionContent.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmploymentConditionContent.
     */
    EmploymentConditionContent._entityName = 'EmploymentConditionContent';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmploymentConditionContent.
     */
    EmploymentConditionContent._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmploymentConditionContent._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return EmploymentConditionContent;
}(core_1.Entity));
exports.EmploymentConditionContent = EmploymentConditionContent;
var User_1 = require("./User");
var EmploymentConditionEntity_1 = require("./EmploymentConditionEntity");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (EmploymentConditionContent) {
    /**
     * Static representation of the [[jobProfileExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmploymentConditionContent.JOB_PROFILE_EXTERNAL_CODE = new core_1.StringField('JobProfile_externalCode', EmploymentConditionContent, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmploymentConditionContent.CREATED_BY = new core_1.StringField('createdBy', EmploymentConditionContent, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmploymentConditionContent.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', EmploymentConditionContent, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[entity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmploymentConditionContent.ENTITY = new core_1.StringField('entity', EmploymentConditionContent, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmploymentConditionContent.EXTERNAL_CODE = new core_1.StringField('externalCode', EmploymentConditionContent, 'Edm.String');
    /**
     * Static representation of the [[jobProfileId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmploymentConditionContent.JOB_PROFILE_ID = new core_1.StringField('jobProfileId', EmploymentConditionContent, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmploymentConditionContent.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', EmploymentConditionContent, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmploymentConditionContent.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', EmploymentConditionContent, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmploymentConditionContent.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', EmploymentConditionContent, 'Edm.String');
    /**
     * Static representation of the [[order]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmploymentConditionContent.ORDER = new core_1.BigNumberField('order', EmploymentConditionContent, 'Edm.Int64');
    /**
     * Static representation of the [[sectionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmploymentConditionContent.SECTION_ID = new core_1.StringField('sectionId', EmploymentConditionContent, 'Edm.String');
    /**
     * Static representation of the [[sectionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmploymentConditionContent.SECTION_TYPE = new core_1.StringField('sectionType', EmploymentConditionContent, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmploymentConditionContent.STATUS = new core_1.StringField('status', EmploymentConditionContent, 'Edm.String');
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmploymentConditionContent.SUB_MODULE = new core_1.StringField('subModule', EmploymentConditionContent, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmploymentConditionContent.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', EmploymentConditionContent, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[entityNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmploymentConditionContent.ENTITY_NAV = new core_1.OneToOneLink('entityNav', EmploymentConditionContent, EmploymentConditionEntity_1.EmploymentConditionEntity);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmploymentConditionContent.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', EmploymentConditionContent, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmploymentConditionContent.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', EmploymentConditionContent, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmploymentConditionContent.STATUS_NAV = new core_1.OneToOneLink('statusNav', EmploymentConditionContent, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the EmploymentConditionContent entity.
     */
    EmploymentConditionContent._allFields = [
        EmploymentConditionContent.JOB_PROFILE_EXTERNAL_CODE,
        EmploymentConditionContent.CREATED_BY,
        EmploymentConditionContent.CREATED_DATE_TIME,
        EmploymentConditionContent.ENTITY,
        EmploymentConditionContent.EXTERNAL_CODE,
        EmploymentConditionContent.JOB_PROFILE_ID,
        EmploymentConditionContent.LAST_MODIFIED_BY,
        EmploymentConditionContent.LAST_MODIFIED_DATE_TIME,
        EmploymentConditionContent.MDF_SYSTEM_RECORD_STATUS,
        EmploymentConditionContent.ORDER,
        EmploymentConditionContent.SECTION_ID,
        EmploymentConditionContent.SECTION_TYPE,
        EmploymentConditionContent.STATUS,
        EmploymentConditionContent.SUB_MODULE,
        EmploymentConditionContent.CREATED_BY_NAV,
        EmploymentConditionContent.ENTITY_NAV,
        EmploymentConditionContent.LAST_MODIFIED_BY_NAV,
        EmploymentConditionContent.MDF_SYSTEM_RECORD_STATUS_NAV,
        EmploymentConditionContent.STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    EmploymentConditionContent.ALL_FIELDS = new core_1.AllFields('*', EmploymentConditionContent);
    /**
     * All key fields of the EmploymentConditionContent entity.
     */
    EmploymentConditionContent._keyFields = [EmploymentConditionContent.JOB_PROFILE_EXTERNAL_CODE, EmploymentConditionContent.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property EmploymentConditionContent.
     */
    EmploymentConditionContent._keys = EmploymentConditionContent._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmploymentConditionContent = exports.EmploymentConditionContent || (exports.EmploymentConditionContent = {}));
exports.EmploymentConditionContent = EmploymentConditionContent;
//# sourceMappingURL=EmploymentConditionContent.js.map