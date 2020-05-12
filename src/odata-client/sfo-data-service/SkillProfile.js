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
var SkillProfileRequestBuilder_1 = require("./SkillProfileRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "SkillProfile" of service "SFOData".
 */
var SkillProfile = /** @class */ (function (_super) {
    __extends(SkillProfile, _super);
    function SkillProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `SkillProfile`.
     * @returns A builder that constructs instances of entity type `SkillProfile`.
     */
    SkillProfile.builder = function () {
        return core_1.Entity.entityBuilder(SkillProfile);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SkillProfile` entity type.
     * @returns A `SkillProfile` request builder.
     */
    SkillProfile.requestBuilder = function () {
        return new SkillProfileRequestBuilder_1.SkillProfileRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SkillProfile`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SkillProfile`.
     */
    SkillProfile.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, SkillProfile);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SkillProfile.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SkillProfile.
     */
    SkillProfile._entityName = 'SkillProfile';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SkillProfile.
     */
    SkillProfile._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    SkillProfile._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return SkillProfile;
}(core_1.Entity));
exports.SkillProfile = SkillProfile;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var RatedSkillMapping_1 = require("./RatedSkillMapping");
var SelfReportSkillMapping_1 = require("./SelfReportSkillMapping");
var WfRequest_1 = require("./WfRequest");
(function (SkillProfile) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillProfile.CREATED_BY = new core_1.StringField('createdBy', SkillProfile, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillProfile.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', SkillProfile, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillProfile.EXTERNAL_CODE = new core_1.StringField('externalCode', SkillProfile, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillProfile.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', SkillProfile, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillProfile.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', SkillProfile, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillProfile.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', SkillProfile, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillProfile.STATUS = new core_1.StringField('status', SkillProfile, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillProfile.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', SkillProfile, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[externalCodeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillProfile.EXTERNAL_CODE_NAV = new core_1.OneToOneLink('externalCodeNav', SkillProfile, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillProfile.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', SkillProfile, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillProfile.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', SkillProfile, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[ratedSkills]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillProfile.RATED_SKILLS = new core_1.Link('ratedSkills', SkillProfile, RatedSkillMapping_1.RatedSkillMapping);
    /**
     * Static representation of the one-to-many navigation property [[selfReportSkills]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillProfile.SELF_REPORT_SKILLS = new core_1.Link('selfReportSkills', SkillProfile, SelfReportSkillMapping_1.SelfReportSkillMapping);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillProfile.STATUS_NAV = new core_1.OneToOneLink('statusNav', SkillProfile, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SkillProfile.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', SkillProfile, WfRequest_1.WfRequest);
    /**
     * All fields of the SkillProfile entity.
     */
    SkillProfile._allFields = [
        SkillProfile.CREATED_BY,
        SkillProfile.CREATED_DATE_TIME,
        SkillProfile.EXTERNAL_CODE,
        SkillProfile.LAST_MODIFIED_BY,
        SkillProfile.LAST_MODIFIED_DATE_TIME,
        SkillProfile.MDF_SYSTEM_RECORD_STATUS,
        SkillProfile.STATUS,
        SkillProfile.CREATED_BY_NAV,
        SkillProfile.EXTERNAL_CODE_NAV,
        SkillProfile.LAST_MODIFIED_BY_NAV,
        SkillProfile.MDF_SYSTEM_RECORD_STATUS_NAV,
        SkillProfile.RATED_SKILLS,
        SkillProfile.SELF_REPORT_SKILLS,
        SkillProfile.STATUS_NAV,
        SkillProfile.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    SkillProfile.ALL_FIELDS = new core_1.AllFields('*', SkillProfile);
    /**
     * All key fields of the SkillProfile entity.
     */
    SkillProfile._keyFields = [SkillProfile.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property SkillProfile.
     */
    SkillProfile._keys = SkillProfile._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SkillProfile = exports.SkillProfile || (exports.SkillProfile = {}));
exports.SkillProfile = SkillProfile;
//# sourceMappingURL=SkillProfile.js.map