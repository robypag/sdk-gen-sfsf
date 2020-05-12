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
var TimeManagementAlertRequestBuilder_1 = require("./TimeManagementAlertRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "TimeManagementAlert" of service "SFOData".
 */
var TimeManagementAlert = /** @class */ (function (_super) {
    __extends(TimeManagementAlert, _super);
    function TimeManagementAlert() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `TimeManagementAlert`.
     * @returns A builder that constructs instances of entity type `TimeManagementAlert`.
     */
    TimeManagementAlert.builder = function () {
        return core_1.Entity.entityBuilder(TimeManagementAlert);
    };
    /**
     * Returns a request builder to construct requests for operations on the `TimeManagementAlert` entity type.
     * @returns A `TimeManagementAlert` request builder.
     */
    TimeManagementAlert.requestBuilder = function () {
        return new TimeManagementAlertRequestBuilder_1.TimeManagementAlertRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeManagementAlert`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TimeManagementAlert`.
     */
    TimeManagementAlert.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, TimeManagementAlert);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    TimeManagementAlert.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for TimeManagementAlert.
     */
    TimeManagementAlert._entityName = 'TimeManagementAlert';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TimeManagementAlert.
     */
    TimeManagementAlert._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    TimeManagementAlert._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return TimeManagementAlert;
}(core_1.Entity));
exports.TimeManagementAlert = TimeManagementAlert;
var MdfEnumValue_1 = require("./MdfEnumValue");
var User_1 = require("./User");
var TimeManagementAlertMessage_1 = require("./TimeManagementAlertMessage");
var WfRequest_1 = require("./WfRequest");
(function (TimeManagementAlert) {
    /**
     * Static representation of the [[category]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeManagementAlert.CATEGORY = new core_1.StringField('category', TimeManagementAlert, 'Edm.String');
    /**
     * Static representation of the [[concatenatedMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeManagementAlert.CONCATENATED_MESSAGE = new core_1.StringField('concatenatedMessage', TimeManagementAlert, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeManagementAlert.CREATED_BY = new core_1.StringField('createdBy', TimeManagementAlert, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeManagementAlert.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', TimeManagementAlert, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[date]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeManagementAlert.DATE = new core_1.DateField('date', TimeManagementAlert, 'Edm.DateTime');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeManagementAlert.EXTERNAL_CODE = new core_1.StringField('externalCode', TimeManagementAlert, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeManagementAlert.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', TimeManagementAlert, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeManagementAlert.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', TimeManagementAlert, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeManagementAlert.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', TimeManagementAlert, 'Edm.String');
    /**
     * Static representation of the [[severity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeManagementAlert.SEVERITY = new core_1.StringField('severity', TimeManagementAlert, 'Edm.String');
    /**
     * Static representation of the [[severityName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeManagementAlert.SEVERITY_NAME = new core_1.StringField('severityName', TimeManagementAlert, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeManagementAlert.STATUS = new core_1.StringField('status', TimeManagementAlert, 'Edm.String');
    /**
     * Static representation of the [[targetId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeManagementAlert.TARGET_ID = new core_1.StringField('targetId', TimeManagementAlert, 'Edm.String');
    /**
     * Static representation of the [[targetType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeManagementAlert.TARGET_TYPE = new core_1.StringField('targetType', TimeManagementAlert, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[categoryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeManagementAlert.CATEGORY_NAV = new core_1.OneToOneLink('categoryNav', TimeManagementAlert, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeManagementAlert.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', TimeManagementAlert, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeManagementAlert.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', TimeManagementAlert, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeManagementAlert.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', TimeManagementAlert, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[severityNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeManagementAlert.SEVERITY_NAV = new core_1.OneToOneLink('severityNav', TimeManagementAlert, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeManagementAlert.STATUS_NAV = new core_1.OneToOneLink('statusNav', TimeManagementAlert, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[targetIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeManagementAlert.TARGET_ID_NAV = new core_1.OneToOneLink('targetIdNav', TimeManagementAlert, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[targetTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeManagementAlert.TARGET_TYPE_NAV = new core_1.OneToOneLink('targetTypeNav', TimeManagementAlert, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[timeManagementAlertMessage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeManagementAlert.TIME_MANAGEMENT_ALERT_MESSAGE = new core_1.Link('timeManagementAlertMessage', TimeManagementAlert, TimeManagementAlertMessage_1.TimeManagementAlertMessage);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeManagementAlert.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', TimeManagementAlert, WfRequest_1.WfRequest);
    /**
     * All fields of the TimeManagementAlert entity.
     */
    TimeManagementAlert._allFields = [
        TimeManagementAlert.CATEGORY,
        TimeManagementAlert.CONCATENATED_MESSAGE,
        TimeManagementAlert.CREATED_BY,
        TimeManagementAlert.CREATED_DATE_TIME,
        TimeManagementAlert.DATE,
        TimeManagementAlert.EXTERNAL_CODE,
        TimeManagementAlert.LAST_MODIFIED_BY,
        TimeManagementAlert.LAST_MODIFIED_DATE_TIME,
        TimeManagementAlert.MDF_SYSTEM_RECORD_STATUS,
        TimeManagementAlert.SEVERITY,
        TimeManagementAlert.SEVERITY_NAME,
        TimeManagementAlert.STATUS,
        TimeManagementAlert.TARGET_ID,
        TimeManagementAlert.TARGET_TYPE,
        TimeManagementAlert.CATEGORY_NAV,
        TimeManagementAlert.CREATED_BY_NAV,
        TimeManagementAlert.LAST_MODIFIED_BY_NAV,
        TimeManagementAlert.MDF_SYSTEM_RECORD_STATUS_NAV,
        TimeManagementAlert.SEVERITY_NAV,
        TimeManagementAlert.STATUS_NAV,
        TimeManagementAlert.TARGET_ID_NAV,
        TimeManagementAlert.TARGET_TYPE_NAV,
        TimeManagementAlert.TIME_MANAGEMENT_ALERT_MESSAGE,
        TimeManagementAlert.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    TimeManagementAlert.ALL_FIELDS = new core_1.AllFields('*', TimeManagementAlert);
    /**
     * All key fields of the TimeManagementAlert entity.
     */
    TimeManagementAlert._keyFields = [TimeManagementAlert.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property TimeManagementAlert.
     */
    TimeManagementAlert._keys = TimeManagementAlert._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(TimeManagementAlert = exports.TimeManagementAlert || (exports.TimeManagementAlert = {}));
exports.TimeManagementAlert = TimeManagementAlert;
//# sourceMappingURL=TimeManagementAlert.js.map