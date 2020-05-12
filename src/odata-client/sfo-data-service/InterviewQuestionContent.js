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
var InterviewQuestionContentRequestBuilder_1 = require("./InterviewQuestionContentRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "InterviewQuestionContent" of service "SFOData".
 */
var InterviewQuestionContent = /** @class */ (function (_super) {
    __extends(InterviewQuestionContent, _super);
    function InterviewQuestionContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `InterviewQuestionContent`.
     * @returns A builder that constructs instances of entity type `InterviewQuestionContent`.
     */
    InterviewQuestionContent.builder = function () {
        return core_1.Entity.entityBuilder(InterviewQuestionContent);
    };
    /**
     * Returns a request builder to construct requests for operations on the `InterviewQuestionContent` entity type.
     * @returns A `InterviewQuestionContent` request builder.
     */
    InterviewQuestionContent.requestBuilder = function () {
        return new InterviewQuestionContentRequestBuilder_1.InterviewQuestionContentRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `InterviewQuestionContent`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `InterviewQuestionContent`.
     */
    InterviewQuestionContent.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, InterviewQuestionContent);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    InterviewQuestionContent.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for InterviewQuestionContent.
     */
    InterviewQuestionContent._entityName = 'InterviewQuestionContent';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for InterviewQuestionContent.
     */
    InterviewQuestionContent._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    InterviewQuestionContent._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return InterviewQuestionContent;
}(core_1.Entity));
exports.InterviewQuestionContent = InterviewQuestionContent;
var User_1 = require("./User");
var InterviewQuestionEntity_1 = require("./InterviewQuestionEntity");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (InterviewQuestionContent) {
    /**
     * Static representation of the [[jobProfileExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionContent.JOB_PROFILE_EXTERNAL_CODE = new core_1.StringField('JobProfile_externalCode', InterviewQuestionContent, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionContent.CREATED_BY = new core_1.StringField('createdBy', InterviewQuestionContent, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionContent.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', InterviewQuestionContent, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[entity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionContent.ENTITY = new core_1.StringField('entity', InterviewQuestionContent, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionContent.EXTERNAL_CODE = new core_1.StringField('externalCode', InterviewQuestionContent, 'Edm.String');
    /**
     * Static representation of the [[jobProfileId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionContent.JOB_PROFILE_ID = new core_1.StringField('jobProfileId', InterviewQuestionContent, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionContent.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', InterviewQuestionContent, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionContent.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', InterviewQuestionContent, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionContent.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', InterviewQuestionContent, 'Edm.String');
    /**
     * Static representation of the [[order]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionContent.ORDER = new core_1.BigNumberField('order', InterviewQuestionContent, 'Edm.Int64');
    /**
     * Static representation of the [[sectionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionContent.SECTION_ID = new core_1.StringField('sectionId', InterviewQuestionContent, 'Edm.String');
    /**
     * Static representation of the [[sectionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionContent.SECTION_TYPE = new core_1.StringField('sectionType', InterviewQuestionContent, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionContent.STATUS = new core_1.StringField('status', InterviewQuestionContent, 'Edm.String');
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionContent.SUB_MODULE = new core_1.StringField('subModule', InterviewQuestionContent, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionContent.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', InterviewQuestionContent, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[entityNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionContent.ENTITY_NAV = new core_1.OneToOneLink('entityNav', InterviewQuestionContent, InterviewQuestionEntity_1.InterviewQuestionEntity);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionContent.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', InterviewQuestionContent, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionContent.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', InterviewQuestionContent, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InterviewQuestionContent.STATUS_NAV = new core_1.OneToOneLink('statusNav', InterviewQuestionContent, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the InterviewQuestionContent entity.
     */
    InterviewQuestionContent._allFields = [
        InterviewQuestionContent.JOB_PROFILE_EXTERNAL_CODE,
        InterviewQuestionContent.CREATED_BY,
        InterviewQuestionContent.CREATED_DATE_TIME,
        InterviewQuestionContent.ENTITY,
        InterviewQuestionContent.EXTERNAL_CODE,
        InterviewQuestionContent.JOB_PROFILE_ID,
        InterviewQuestionContent.LAST_MODIFIED_BY,
        InterviewQuestionContent.LAST_MODIFIED_DATE_TIME,
        InterviewQuestionContent.MDF_SYSTEM_RECORD_STATUS,
        InterviewQuestionContent.ORDER,
        InterviewQuestionContent.SECTION_ID,
        InterviewQuestionContent.SECTION_TYPE,
        InterviewQuestionContent.STATUS,
        InterviewQuestionContent.SUB_MODULE,
        InterviewQuestionContent.CREATED_BY_NAV,
        InterviewQuestionContent.ENTITY_NAV,
        InterviewQuestionContent.LAST_MODIFIED_BY_NAV,
        InterviewQuestionContent.MDF_SYSTEM_RECORD_STATUS_NAV,
        InterviewQuestionContent.STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    InterviewQuestionContent.ALL_FIELDS = new core_1.AllFields('*', InterviewQuestionContent);
    /**
     * All key fields of the InterviewQuestionContent entity.
     */
    InterviewQuestionContent._keyFields = [InterviewQuestionContent.JOB_PROFILE_EXTERNAL_CODE, InterviewQuestionContent.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property InterviewQuestionContent.
     */
    InterviewQuestionContent._keys = InterviewQuestionContent._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(InterviewQuestionContent = exports.InterviewQuestionContent || (exports.InterviewQuestionContent = {}));
exports.InterviewQuestionContent = InterviewQuestionContent;
//# sourceMappingURL=InterviewQuestionContent.js.map