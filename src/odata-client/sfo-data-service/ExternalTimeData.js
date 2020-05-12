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
var ExternalTimeDataRequestBuilder_1 = require("./ExternalTimeDataRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ExternalTimeData" of service "SFOData".
 */
var ExternalTimeData = /** @class */ (function (_super) {
    __extends(ExternalTimeData, _super);
    function ExternalTimeData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `ExternalTimeData`.
     * @returns A builder that constructs instances of entity type `ExternalTimeData`.
     */
    ExternalTimeData.builder = function () {
        return core_1.Entity.entityBuilder(ExternalTimeData);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ExternalTimeData` entity type.
     * @returns A `ExternalTimeData` request builder.
     */
    ExternalTimeData.requestBuilder = function () {
        return new ExternalTimeDataRequestBuilder_1.ExternalTimeDataRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ExternalTimeData`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ExternalTimeData`.
     */
    ExternalTimeData.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, ExternalTimeData);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ExternalTimeData.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ExternalTimeData.
     */
    ExternalTimeData._entityName = 'ExternalTimeData';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ExternalTimeData.
     */
    ExternalTimeData._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    ExternalTimeData._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return ExternalTimeData;
}(core_1.Entity));
exports.ExternalTimeData = ExternalTimeData;
var MdfEnumValue_1 = require("./MdfEnumValue");
var User_1 = require("./User");
var WfRequest_1 = require("./WfRequest");
(function (ExternalTimeData) {
    /**
     * Static representation of the [[category]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeData.CATEGORY = new core_1.StringField('category', ExternalTimeData, 'Edm.String');
    /**
     * Static representation of the [[costCenter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeData.COST_CENTER = new core_1.StringField('costCenter', ExternalTimeData, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeData.CREATED_BY = new core_1.StringField('createdBy', ExternalTimeData, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeData.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', ExternalTimeData, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[deleteExternalTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeData.DELETE_EXTERNAL_TIME = new core_1.BooleanField('deleteExternalTime', ExternalTimeData, 'Edm.Boolean');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeData.END_DATE = new core_1.DateField('endDate', ExternalTimeData, 'Edm.DateTime');
    /**
     * Static representation of the [[endTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeData.END_TIME = new core_1.TimeField('endTime', ExternalTimeData, 'Edm.Time');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeData.EXTERNAL_CODE = new core_1.StringField('externalCode', ExternalTimeData, 'Edm.String');
    /**
     * Static representation of the [[hours]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeData.HOURS = new core_1.BigNumberField('hours', ExternalTimeData, 'Edm.Decimal');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeData.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', ExternalTimeData, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeData.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', ExternalTimeData, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeData.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', ExternalTimeData, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeData.START_DATE = new core_1.DateField('startDate', ExternalTimeData, 'Edm.DateTime');
    /**
     * Static representation of the [[startTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeData.START_TIME = new core_1.TimeField('startTime', ExternalTimeData, 'Edm.Time');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeData.STATUS = new core_1.StringField('status', ExternalTimeData, 'Edm.String');
    /**
     * Static representation of the [[timeType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeData.TIME_TYPE = new core_1.StringField('timeType', ExternalTimeData, 'Edm.String');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeData.USER_ID = new core_1.StringField('userId', ExternalTimeData, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[categoryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeData.CATEGORY_NAV = new core_1.OneToOneLink('categoryNav', ExternalTimeData, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeData.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', ExternalTimeData, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeData.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', ExternalTimeData, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeData.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', ExternalTimeData, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeData.STATUS_NAV = new core_1.OneToOneLink('statusNav', ExternalTimeData, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeData.USER_ID_NAV = new core_1.OneToOneLink('userIdNav', ExternalTimeData, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeData.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', ExternalTimeData, WfRequest_1.WfRequest);
    /**
     * All fields of the ExternalTimeData entity.
     */
    ExternalTimeData._allFields = [
        ExternalTimeData.CATEGORY,
        ExternalTimeData.COST_CENTER,
        ExternalTimeData.CREATED_BY,
        ExternalTimeData.CREATED_DATE_TIME,
        ExternalTimeData.DELETE_EXTERNAL_TIME,
        ExternalTimeData.END_DATE,
        ExternalTimeData.END_TIME,
        ExternalTimeData.EXTERNAL_CODE,
        ExternalTimeData.HOURS,
        ExternalTimeData.LAST_MODIFIED_BY,
        ExternalTimeData.LAST_MODIFIED_DATE_TIME,
        ExternalTimeData.MDF_SYSTEM_RECORD_STATUS,
        ExternalTimeData.START_DATE,
        ExternalTimeData.START_TIME,
        ExternalTimeData.STATUS,
        ExternalTimeData.TIME_TYPE,
        ExternalTimeData.USER_ID,
        ExternalTimeData.CATEGORY_NAV,
        ExternalTimeData.CREATED_BY_NAV,
        ExternalTimeData.LAST_MODIFIED_BY_NAV,
        ExternalTimeData.MDF_SYSTEM_RECORD_STATUS_NAV,
        ExternalTimeData.STATUS_NAV,
        ExternalTimeData.USER_ID_NAV,
        ExternalTimeData.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    ExternalTimeData.ALL_FIELDS = new core_1.AllFields('*', ExternalTimeData);
    /**
     * All key fields of the ExternalTimeData entity.
     */
    ExternalTimeData._keyFields = [ExternalTimeData.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property ExternalTimeData.
     */
    ExternalTimeData._keys = ExternalTimeData._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ExternalTimeData = exports.ExternalTimeData || (exports.ExternalTimeData = {}));
exports.ExternalTimeData = ExternalTimeData;
//# sourceMappingURL=ExternalTimeData.js.map