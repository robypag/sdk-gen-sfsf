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
var ExternalTimeRecordRequestBuilder_1 = require("./ExternalTimeRecordRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ExternalTimeRecord" of service "SFOData".
 */
var ExternalTimeRecord = /** @class */ (function (_super) {
    __extends(ExternalTimeRecord, _super);
    function ExternalTimeRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `ExternalTimeRecord`.
     * @returns A builder that constructs instances of entity type `ExternalTimeRecord`.
     */
    ExternalTimeRecord.builder = function () {
        return core_1.Entity.entityBuilder(ExternalTimeRecord);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ExternalTimeRecord` entity type.
     * @returns A `ExternalTimeRecord` request builder.
     */
    ExternalTimeRecord.requestBuilder = function () {
        return new ExternalTimeRecordRequestBuilder_1.ExternalTimeRecordRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ExternalTimeRecord`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ExternalTimeRecord`.
     */
    ExternalTimeRecord.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, ExternalTimeRecord);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ExternalTimeRecord.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ExternalTimeRecord.
     */
    ExternalTimeRecord._entityName = 'ExternalTimeRecord';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ExternalTimeRecord.
     */
    ExternalTimeRecord._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    ExternalTimeRecord._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return ExternalTimeRecord;
}(core_1.Entity));
exports.ExternalTimeRecord = ExternalTimeRecord;
var User_1 = require("./User");
var ExternalTimeSegment_1 = require("./ExternalTimeSegment");
var MdfEnumValue_1 = require("./MdfEnumValue");
var WfRequest_1 = require("./WfRequest");
(function (ExternalTimeRecord) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeRecord.CREATED_BY = new core_1.StringField('createdBy', ExternalTimeRecord, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeRecord.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', ExternalTimeRecord, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[date]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeRecord.DATE = new core_1.DateField('date', ExternalTimeRecord, 'Edm.DateTime');
    /**
     * Static representation of the [[deleteExternalTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeRecord.DELETE_EXTERNAL_TIME = new core_1.BooleanField('deleteExternalTime', ExternalTimeRecord, 'Edm.Boolean');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeRecord.EXTERNAL_CODE = new core_1.StringField('externalCode', ExternalTimeRecord, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeRecord.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', ExternalTimeRecord, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeRecord.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', ExternalTimeRecord, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeRecord.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', ExternalTimeRecord, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeRecord.STATUS = new core_1.StringField('status', ExternalTimeRecord, 'Edm.String');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeRecord.USER_ID = new core_1.StringField('userId', ExternalTimeRecord, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeRecord.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', ExternalTimeRecord, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[externalTimeSegments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeRecord.EXTERNAL_TIME_SEGMENTS = new core_1.Link('externalTimeSegments', ExternalTimeRecord, ExternalTimeSegment_1.ExternalTimeSegment);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeRecord.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', ExternalTimeRecord, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeRecord.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', ExternalTimeRecord, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeRecord.STATUS_NAV = new core_1.OneToOneLink('statusNav', ExternalTimeRecord, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeRecord.USER_ID_NAV = new core_1.OneToOneLink('userIdNav', ExternalTimeRecord, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalTimeRecord.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', ExternalTimeRecord, WfRequest_1.WfRequest);
    /**
     * All fields of the ExternalTimeRecord entity.
     */
    ExternalTimeRecord._allFields = [
        ExternalTimeRecord.CREATED_BY,
        ExternalTimeRecord.CREATED_DATE_TIME,
        ExternalTimeRecord.DATE,
        ExternalTimeRecord.DELETE_EXTERNAL_TIME,
        ExternalTimeRecord.EXTERNAL_CODE,
        ExternalTimeRecord.LAST_MODIFIED_BY,
        ExternalTimeRecord.LAST_MODIFIED_DATE_TIME,
        ExternalTimeRecord.MDF_SYSTEM_RECORD_STATUS,
        ExternalTimeRecord.STATUS,
        ExternalTimeRecord.USER_ID,
        ExternalTimeRecord.CREATED_BY_NAV,
        ExternalTimeRecord.EXTERNAL_TIME_SEGMENTS,
        ExternalTimeRecord.LAST_MODIFIED_BY_NAV,
        ExternalTimeRecord.MDF_SYSTEM_RECORD_STATUS_NAV,
        ExternalTimeRecord.STATUS_NAV,
        ExternalTimeRecord.USER_ID_NAV,
        ExternalTimeRecord.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    ExternalTimeRecord.ALL_FIELDS = new core_1.AllFields('*', ExternalTimeRecord);
    /**
     * All key fields of the ExternalTimeRecord entity.
     */
    ExternalTimeRecord._keyFields = [ExternalTimeRecord.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property ExternalTimeRecord.
     */
    ExternalTimeRecord._keys = ExternalTimeRecord._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ExternalTimeRecord = exports.ExternalTimeRecord || (exports.ExternalTimeRecord = {}));
exports.ExternalTimeRecord = ExternalTimeRecord;
//# sourceMappingURL=ExternalTimeRecord.js.map