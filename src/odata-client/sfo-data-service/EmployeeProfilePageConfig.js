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
var EmployeeProfilePageConfigRequestBuilder_1 = require("./EmployeeProfilePageConfigRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EmployeeProfilePageConfig" of service "SFOData".
 */
var EmployeeProfilePageConfig = /** @class */ (function (_super) {
    __extends(EmployeeProfilePageConfig, _super);
    function EmployeeProfilePageConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmployeeProfilePageConfig`.
     * @returns A builder that constructs instances of entity type `EmployeeProfilePageConfig`.
     */
    EmployeeProfilePageConfig.builder = function () {
        return core_1.Entity.entityBuilder(EmployeeProfilePageConfig);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeProfilePageConfig` entity type.
     * @returns A `EmployeeProfilePageConfig` request builder.
     */
    EmployeeProfilePageConfig.requestBuilder = function () {
        return new EmployeeProfilePageConfigRequestBuilder_1.EmployeeProfilePageConfigRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeProfilePageConfig`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeProfilePageConfig`.
     */
    EmployeeProfilePageConfig.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EmployeeProfilePageConfig);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmployeeProfilePageConfig.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmployeeProfilePageConfig.
     */
    EmployeeProfilePageConfig._entityName = 'EmployeeProfilePageConfig';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeProfilePageConfig.
     */
    EmployeeProfilePageConfig._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmployeeProfilePageConfig._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return EmployeeProfilePageConfig;
}(core_1.Entity));
exports.EmployeeProfilePageConfig = EmployeeProfilePageConfig;
var User_1 = require("./User");
var EmployeeProfileHeaderConfig_1 = require("./EmployeeProfileHeaderConfig");
var MdfEnumValue_1 = require("./MdfEnumValue");
var EmployeeProfileSectionConfig_1 = require("./EmployeeProfileSectionConfig");
var WfRequest_1 = require("./WfRequest");
(function (EmployeeProfilePageConfig) {
    /**
     * Static representation of the [[aboutMeVideoUpdateBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfilePageConfig.ABOUT_ME_VIDEO_UPDATE_BY = new core_1.StringField('aboutMeVideoUpdateBy', EmployeeProfilePageConfig, 'Edm.String');
    /**
     * Static representation of the [[aboutMeVideoUpdateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfilePageConfig.ABOUT_ME_VIDEO_UPDATE_DATE = new core_1.DateField('aboutMeVideoUpdateDate', EmployeeProfilePageConfig, 'Edm.DateTime');
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfilePageConfig.CODE = new core_1.StringField('code', EmployeeProfilePageConfig, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfilePageConfig.CREATED_BY = new core_1.StringField('createdBy', EmployeeProfilePageConfig, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfilePageConfig.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', EmployeeProfilePageConfig, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[currentPeriodEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfilePageConfig.CURRENT_PERIOD_END_DATE = new core_1.DateField('currentPeriodEndDate', EmployeeProfilePageConfig, 'Edm.DateTime');
    /**
     * Static representation of the [[currentPeriodStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfilePageConfig.CURRENT_PERIOD_START_DATE = new core_1.DateField('currentPeriodStartDate', EmployeeProfilePageConfig, 'Edm.DateTime');
    /**
     * Static representation of the [[employmentDifferentiatorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfilePageConfig.EMPLOYMENT_DIFFERENTIATOR_CODE = new core_1.StringField('employmentDifferentiatorCode', EmployeeProfilePageConfig, 'Edm.String');
    /**
     * Static representation of the [[headerOverlayFontColor]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfilePageConfig.HEADER_OVERLAY_FONT_COLOR = new core_1.StringField('headerOverlayFontColor', EmployeeProfilePageConfig, 'Edm.String');
    /**
     * Static representation of the [[includeInProgressDocs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfilePageConfig.INCLUDE_IN_PROGRESS_DOCS = new core_1.BooleanField('includeInProgressDocs', EmployeeProfilePageConfig, 'Edm.Boolean');
    /**
     * Static representation of the [[isAboutMeTextEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfilePageConfig.IS_ABOUT_ME_TEXT_ENABLED = new core_1.BooleanField('isAboutMeTextEnabled', EmployeeProfilePageConfig, 'Edm.Boolean');
    /**
     * Static representation of the [[isAboutMeVideoEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfilePageConfig.IS_ABOUT_ME_VIDEO_ENABLED = new core_1.BooleanField('isAboutMeVideoEnabled', EmployeeProfilePageConfig, 'Edm.Boolean');
    /**
     * Static representation of the [[isAllowUploadBgPhoto]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfilePageConfig.IS_ALLOW_UPLOAD_BG_PHOTO = new core_1.BooleanField('isAllowUploadBGPhoto', EmployeeProfilePageConfig, 'Edm.Boolean');
    /**
     * Static representation of the [[isHeaderOverlayDisabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfilePageConfig.IS_HEADER_OVERLAY_DISABLED = new core_1.BooleanField('isHeaderOverlayDisabled', EmployeeProfilePageConfig, 'Edm.Boolean');
    /**
     * Static representation of the [[isMyNameEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfilePageConfig.IS_MY_NAME_ENABLED = new core_1.BooleanField('isMyNameEnabled', EmployeeProfilePageConfig, 'Edm.Boolean');
    /**
     * Static representation of the [[isPercentCompleteEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfilePageConfig.IS_PERCENT_COMPLETE_ENABLED = new core_1.BooleanField('isPercentCompleteEnabled', EmployeeProfilePageConfig, 'Edm.Boolean');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfilePageConfig.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', EmployeeProfilePageConfig, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfilePageConfig.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', EmployeeProfilePageConfig, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfilePageConfig.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', EmployeeProfilePageConfig, 'Edm.String');
    /**
     * Static representation of the [[myNameUpdateBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfilePageConfig.MY_NAME_UPDATE_BY = new core_1.StringField('myNameUpdateBy', EmployeeProfilePageConfig, 'Edm.String');
    /**
     * Static representation of the [[myNameUpdateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfilePageConfig.MY_NAME_UPDATE_DATE = new core_1.DateField('myNameUpdateDate', EmployeeProfilePageConfig, 'Edm.DateTime');
    /**
     * Static representation of the [[nameFormatCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfilePageConfig.NAME_FORMAT_CODE = new core_1.StringField('nameFormatCode', EmployeeProfilePageConfig, 'Edm.String');
    /**
     * Static representation of the [[pptcSelectedSectionCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfilePageConfig.PPTC_SELECTED_SECTION_CODE = new core_1.StringField('pptcSelectedSectionCode', EmployeeProfilePageConfig, 'Edm.String');
    /**
     * Static representation of the [[templateLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfilePageConfig.TEMPLATE_LABEL = new core_1.StringField('templateLabel', EmployeeProfilePageConfig, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfilePageConfig.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', EmployeeProfilePageConfig, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[headerConfig]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfilePageConfig.HEADER_CONFIG = new core_1.OneToOneLink('headerConfig', EmployeeProfilePageConfig, EmployeeProfileHeaderConfig_1.EmployeeProfileHeaderConfig);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfilePageConfig.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', EmployeeProfilePageConfig, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfilePageConfig.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', EmployeeProfilePageConfig, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[sections]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfilePageConfig.SECTIONS = new core_1.Link('sections', EmployeeProfilePageConfig, EmployeeProfileSectionConfig_1.EmployeeProfileSectionConfig);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeProfilePageConfig.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', EmployeeProfilePageConfig, WfRequest_1.WfRequest);
    /**
     * All fields of the EmployeeProfilePageConfig entity.
     */
    EmployeeProfilePageConfig._allFields = [
        EmployeeProfilePageConfig.ABOUT_ME_VIDEO_UPDATE_BY,
        EmployeeProfilePageConfig.ABOUT_ME_VIDEO_UPDATE_DATE,
        EmployeeProfilePageConfig.CODE,
        EmployeeProfilePageConfig.CREATED_BY,
        EmployeeProfilePageConfig.CREATED_DATE_TIME,
        EmployeeProfilePageConfig.CURRENT_PERIOD_END_DATE,
        EmployeeProfilePageConfig.CURRENT_PERIOD_START_DATE,
        EmployeeProfilePageConfig.EMPLOYMENT_DIFFERENTIATOR_CODE,
        EmployeeProfilePageConfig.HEADER_OVERLAY_FONT_COLOR,
        EmployeeProfilePageConfig.INCLUDE_IN_PROGRESS_DOCS,
        EmployeeProfilePageConfig.IS_ABOUT_ME_TEXT_ENABLED,
        EmployeeProfilePageConfig.IS_ABOUT_ME_VIDEO_ENABLED,
        EmployeeProfilePageConfig.IS_ALLOW_UPLOAD_BG_PHOTO,
        EmployeeProfilePageConfig.IS_HEADER_OVERLAY_DISABLED,
        EmployeeProfilePageConfig.IS_MY_NAME_ENABLED,
        EmployeeProfilePageConfig.IS_PERCENT_COMPLETE_ENABLED,
        EmployeeProfilePageConfig.LAST_MODIFIED_BY,
        EmployeeProfilePageConfig.LAST_MODIFIED_DATE_TIME,
        EmployeeProfilePageConfig.MDF_SYSTEM_RECORD_STATUS,
        EmployeeProfilePageConfig.MY_NAME_UPDATE_BY,
        EmployeeProfilePageConfig.MY_NAME_UPDATE_DATE,
        EmployeeProfilePageConfig.NAME_FORMAT_CODE,
        EmployeeProfilePageConfig.PPTC_SELECTED_SECTION_CODE,
        EmployeeProfilePageConfig.TEMPLATE_LABEL,
        EmployeeProfilePageConfig.CREATED_BY_NAV,
        EmployeeProfilePageConfig.HEADER_CONFIG,
        EmployeeProfilePageConfig.LAST_MODIFIED_BY_NAV,
        EmployeeProfilePageConfig.MDF_SYSTEM_RECORD_STATUS_NAV,
        EmployeeProfilePageConfig.SECTIONS,
        EmployeeProfilePageConfig.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    EmployeeProfilePageConfig.ALL_FIELDS = new core_1.AllFields('*', EmployeeProfilePageConfig);
    /**
     * All key fields of the EmployeeProfilePageConfig entity.
     */
    EmployeeProfilePageConfig._keyFields = [EmployeeProfilePageConfig.CODE];
    /**
     * Mapping of all key field names to the respective static field property EmployeeProfilePageConfig.
     */
    EmployeeProfilePageConfig._keys = EmployeeProfilePageConfig._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmployeeProfilePageConfig = exports.EmployeeProfilePageConfig || (exports.EmployeeProfilePageConfig = {}));
exports.EmployeeProfilePageConfig = EmployeeProfilePageConfig;
//# sourceMappingURL=EmployeeProfilePageConfig.js.map