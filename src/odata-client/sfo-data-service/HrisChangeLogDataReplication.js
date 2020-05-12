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
var HrisChangeLogDataReplicationRequestBuilder_1 = require("./HrisChangeLogDataReplicationRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "HRISChangeLogDataReplication" of service "SFOData".
 */
var HrisChangeLogDataReplication = /** @class */ (function (_super) {
    __extends(HrisChangeLogDataReplication, _super);
    function HrisChangeLogDataReplication() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `HrisChangeLogDataReplication`.
     * @returns A builder that constructs instances of entity type `HrisChangeLogDataReplication`.
     */
    HrisChangeLogDataReplication.builder = function () {
        return core_1.Entity.entityBuilder(HrisChangeLogDataReplication);
    };
    /**
     * Returns a request builder to construct requests for operations on the `HrisChangeLogDataReplication` entity type.
     * @returns A `HrisChangeLogDataReplication` request builder.
     */
    HrisChangeLogDataReplication.requestBuilder = function () {
        return new HrisChangeLogDataReplicationRequestBuilder_1.HrisChangeLogDataReplicationRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `HrisChangeLogDataReplication`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `HrisChangeLogDataReplication`.
     */
    HrisChangeLogDataReplication.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, HrisChangeLogDataReplication);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    HrisChangeLogDataReplication.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for HrisChangeLogDataReplication.
     */
    HrisChangeLogDataReplication._entityName = 'HRISChangeLogDataReplication';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for HrisChangeLogDataReplication.
     */
    HrisChangeLogDataReplication._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    HrisChangeLogDataReplication._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return HrisChangeLogDataReplication;
}(core_1.Entity));
exports.HrisChangeLogDataReplication = HrisChangeLogDataReplication;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var WfRequest_1 = require("./WfRequest");
(function (HrisChangeLogDataReplication) {
    /**
     * Static representation of the [[changedEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisChangeLogDataReplication.CHANGED_EFFECTIVE_START_DATE = new core_1.DateField('changedEffectiveStartDate', HrisChangeLogDataReplication, 'Edm.DateTime');
    /**
     * Static representation of the [[changedExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisChangeLogDataReplication.CHANGED_EXTERNAL_CODE = new core_1.StringField('changedExternalCode', HrisChangeLogDataReplication, 'Edm.String');
    /**
     * Static representation of the [[changedInternalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisChangeLogDataReplication.CHANGED_INTERNAL_ID = new core_1.BigNumberField('changedInternalId', HrisChangeLogDataReplication, 'Edm.Int64');
    /**
     * Static representation of the [[changedObjectType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisChangeLogDataReplication.CHANGED_OBJECT_TYPE = new core_1.StringField('changedObjectType', HrisChangeLogDataReplication, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisChangeLogDataReplication.CREATED_BY = new core_1.StringField('createdBy', HrisChangeLogDataReplication, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisChangeLogDataReplication.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', HrisChangeLogDataReplication, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisChangeLogDataReplication.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', HrisChangeLogDataReplication, 'Edm.Int64');
    /**
     * Static representation of the [[field2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisChangeLogDataReplication.FIELD_2 = new core_1.StringField('field2', HrisChangeLogDataReplication, 'Edm.String');
    /**
     * Static representation of the [[field3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisChangeLogDataReplication.FIELD_3 = new core_1.StringField('field3', HrisChangeLogDataReplication, 'Edm.String');
    /**
     * Static representation of the [[field4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisChangeLogDataReplication.FIELD_4 = new core_1.StringField('field4', HrisChangeLogDataReplication, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisChangeLogDataReplication.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', HrisChangeLogDataReplication, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisChangeLogDataReplication.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', HrisChangeLogDataReplication, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisChangeLogDataReplication.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', HrisChangeLogDataReplication, 'Edm.String');
    /**
     * Static representation of the [[performanceChangedExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisChangeLogDataReplication.PERFORMANCE_CHANGED_EXTERNAL_CODE = new core_1.StringField('performanceChangedExternalCode', HrisChangeLogDataReplication, 'Edm.String');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisChangeLogDataReplication.USER_ID = new core_1.StringField('userId', HrisChangeLogDataReplication, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisChangeLogDataReplication.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', HrisChangeLogDataReplication, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisChangeLogDataReplication.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', HrisChangeLogDataReplication, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisChangeLogDataReplication.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', HrisChangeLogDataReplication, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisChangeLogDataReplication.USER_ID_NAV = new core_1.OneToOneLink('userIdNav', HrisChangeLogDataReplication, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HrisChangeLogDataReplication.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', HrisChangeLogDataReplication, WfRequest_1.WfRequest);
    /**
     * All fields of the HrisChangeLogDataReplication entity.
     */
    HrisChangeLogDataReplication._allFields = [
        HrisChangeLogDataReplication.CHANGED_EFFECTIVE_START_DATE,
        HrisChangeLogDataReplication.CHANGED_EXTERNAL_CODE,
        HrisChangeLogDataReplication.CHANGED_INTERNAL_ID,
        HrisChangeLogDataReplication.CHANGED_OBJECT_TYPE,
        HrisChangeLogDataReplication.CREATED_BY,
        HrisChangeLogDataReplication.CREATED_DATE_TIME,
        HrisChangeLogDataReplication.EXTERNAL_CODE,
        HrisChangeLogDataReplication.FIELD_2,
        HrisChangeLogDataReplication.FIELD_3,
        HrisChangeLogDataReplication.FIELD_4,
        HrisChangeLogDataReplication.LAST_MODIFIED_BY,
        HrisChangeLogDataReplication.LAST_MODIFIED_DATE_TIME,
        HrisChangeLogDataReplication.MDF_SYSTEM_RECORD_STATUS,
        HrisChangeLogDataReplication.PERFORMANCE_CHANGED_EXTERNAL_CODE,
        HrisChangeLogDataReplication.USER_ID,
        HrisChangeLogDataReplication.CREATED_BY_NAV,
        HrisChangeLogDataReplication.LAST_MODIFIED_BY_NAV,
        HrisChangeLogDataReplication.MDF_SYSTEM_RECORD_STATUS_NAV,
        HrisChangeLogDataReplication.USER_ID_NAV,
        HrisChangeLogDataReplication.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    HrisChangeLogDataReplication.ALL_FIELDS = new core_1.AllFields('*', HrisChangeLogDataReplication);
    /**
     * All key fields of the HrisChangeLogDataReplication entity.
     */
    HrisChangeLogDataReplication._keyFields = [HrisChangeLogDataReplication.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property HrisChangeLogDataReplication.
     */
    HrisChangeLogDataReplication._keys = HrisChangeLogDataReplication._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(HrisChangeLogDataReplication = exports.HrisChangeLogDataReplication || (exports.HrisChangeLogDataReplication = {}));
exports.HrisChangeLogDataReplication = HrisChangeLogDataReplication;
//# sourceMappingURL=HrisChangeLogDataReplication.js.map