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
var DataReplicationProxyRequestBuilder_1 = require("./DataReplicationProxyRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "DataReplicationProxy" of service "SFOData".
 */
var DataReplicationProxy = /** @class */ (function (_super) {
    __extends(DataReplicationProxy, _super);
    function DataReplicationProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `DataReplicationProxy`.
     * @returns A builder that constructs instances of entity type `DataReplicationProxy`.
     */
    DataReplicationProxy.builder = function () {
        return core_1.Entity.entityBuilder(DataReplicationProxy);
    };
    /**
     * Returns a request builder to construct requests for operations on the `DataReplicationProxy` entity type.
     * @returns A `DataReplicationProxy` request builder.
     */
    DataReplicationProxy.requestBuilder = function () {
        return new DataReplicationProxyRequestBuilder_1.DataReplicationProxyRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DataReplicationProxy`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DataReplicationProxy`.
     */
    DataReplicationProxy.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, DataReplicationProxy);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    DataReplicationProxy.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for DataReplicationProxy.
     */
    DataReplicationProxy._entityName = 'DataReplicationProxy';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DataReplicationProxy.
     */
    DataReplicationProxy._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    DataReplicationProxy._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return DataReplicationProxy;
}(core_1.Entity));
exports.DataReplicationProxy = DataReplicationProxy;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var EmployeeTime_1 = require("./EmployeeTime");
var EmployeeTimeValuationResult_1 = require("./EmployeeTimeValuationResult");
var FoCompany_1 = require("./FoCompany");
var ReplicationTargetSystem_1 = require("./ReplicationTargetSystem");
var TimeAccount_1 = require("./TimeAccount");
var TimeAccountSnapshot_1 = require("./TimeAccountSnapshot");
var WfRequest_1 = require("./WfRequest");
(function (DataReplicationProxy) {
    /**
     * Static representation of the [[allowReplicationInCorrectionPhase]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DataReplicationProxy.ALLOW_REPLICATION_IN_CORRECTION_PHASE = new core_1.BooleanField('allowReplicationInCorrectionPhase', DataReplicationProxy, 'Edm.Boolean');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DataReplicationProxy.CREATED_BY = new core_1.StringField('createdBy', DataReplicationProxy, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DataReplicationProxy.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', DataReplicationProxy, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[dataReplicationProxyStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DataReplicationProxy.DATA_REPLICATION_PROXY_STATUS = new core_1.StringField('dataReplicationProxyStatus', DataReplicationProxy, 'Edm.String');
    /**
     * Static representation of the [[earliestReplicationDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DataReplicationProxy.EARLIEST_REPLICATION_DATE_TIME = new core_1.DateField('earliestReplicationDateTime', DataReplicationProxy, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[employeeTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DataReplicationProxy.EMPLOYEE_TIME = new core_1.StringField('employeeTime', DataReplicationProxy, 'Edm.String');
    /**
     * Static representation of the [[employeeTimeValuationResult]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DataReplicationProxy.EMPLOYEE_TIME_VALUATION_RESULT = new core_1.StringField('employeeTimeValuationResult', DataReplicationProxy, 'Edm.String');
    /**
     * Static representation of the [[employeeTimeWithAccountDetail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DataReplicationProxy.EMPLOYEE_TIME_WITH_ACCOUNT_DETAIL = new core_1.StringField('employeeTimeWithAccountDetail', DataReplicationProxy, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DataReplicationProxy.EXTERNAL_CODE = new core_1.StringField('externalCode', DataReplicationProxy, 'Edm.String');
    /**
     * Static representation of the [[isSubsequentChange]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DataReplicationProxy.IS_SUBSEQUENT_CHANGE = new core_1.BooleanField('isSubsequentChange', DataReplicationProxy, 'Edm.Boolean');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DataReplicationProxy.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', DataReplicationProxy, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DataReplicationProxy.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', DataReplicationProxy, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[legalEntity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DataReplicationProxy.LEGAL_ENTITY = new core_1.StringField('legalEntity', DataReplicationProxy, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DataReplicationProxy.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', DataReplicationProxy, 'Edm.String');
    /**
     * Static representation of the [[plannedWorkingTimeEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DataReplicationProxy.PLANNED_WORKING_TIME_END_DATE = new core_1.DateField('plannedWorkingTimeEndDate', DataReplicationProxy, 'Edm.DateTime');
    /**
     * Static representation of the [[plannedWorkingTimeStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DataReplicationProxy.PLANNED_WORKING_TIME_START_DATE = new core_1.DateField('plannedWorkingTimeStartDate', DataReplicationProxy, 'Edm.DateTime');
    /**
     * Static representation of the [[replicationContentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DataReplicationProxy.REPLICATION_CONTENT_TYPE = new core_1.StringField('replicationContentType', DataReplicationProxy, 'Edm.String');
    /**
     * Static representation of the [[replicationScenarioObject]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DataReplicationProxy.REPLICATION_SCENARIO_OBJECT = new core_1.StringField('replicationScenarioObject', DataReplicationProxy, 'Edm.String');
    /**
     * Static representation of the [[replicationTargetSystem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DataReplicationProxy.REPLICATION_TARGET_SYSTEM = new core_1.StringField('replicationTargetSystem', DataReplicationProxy, 'Edm.String');
    /**
     * Static representation of the [[sourceGenericObjectExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DataReplicationProxy.SOURCE_GENERIC_OBJECT_EXTERNAL_CODE = new core_1.StringField('sourceGenericObjectExternalCode', DataReplicationProxy, 'Edm.String');
    /**
     * Static representation of the [[sourceGenericObjectInternalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DataReplicationProxy.SOURCE_GENERIC_OBJECT_INTERNAL_ID = new core_1.StringField('sourceGenericObjectInternalId', DataReplicationProxy, 'Edm.String');
    /**
     * Static representation of the [[timeAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DataReplicationProxy.TIME_ACCOUNT = new core_1.StringField('timeAccount', DataReplicationProxy, 'Edm.String');
    /**
     * Static representation of the [[timeAccountPayout]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DataReplicationProxy.TIME_ACCOUNT_PAYOUT = new core_1.StringField('timeAccountPayout', DataReplicationProxy, 'Edm.String');
    /**
     * Static representation of the [[timeAccountSnapshot]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DataReplicationProxy.TIME_ACCOUNT_SNAPSHOT = new core_1.StringField('timeAccountSnapshot', DataReplicationProxy, 'Edm.String');
    /**
     * Static representation of the [[useCostCenterExternalObjectId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DataReplicationProxy.USE_COST_CENTER_EXTERNAL_OBJECT_ID = new core_1.BooleanField('useCostCenterExternalObjectId', DataReplicationProxy, 'Edm.Boolean');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DataReplicationProxy.USER_ID = new core_1.StringField('userId', DataReplicationProxy, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DataReplicationProxy.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', DataReplicationProxy, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[dataReplicationProxyStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DataReplicationProxy.DATA_REPLICATION_PROXY_STATUS_NAV = new core_1.OneToOneLink('dataReplicationProxyStatusNav', DataReplicationProxy, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[employeeTimeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DataReplicationProxy.EMPLOYEE_TIME_NAV = new core_1.OneToOneLink('employeeTimeNav', DataReplicationProxy, EmployeeTime_1.EmployeeTime);
    /**
     * Static representation of the one-to-one navigation property [[employeeTimeValuationResultNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DataReplicationProxy.EMPLOYEE_TIME_VALUATION_RESULT_NAV = new core_1.OneToOneLink('employeeTimeValuationResultNav', DataReplicationProxy, EmployeeTimeValuationResult_1.EmployeeTimeValuationResult);
    /**
     * Static representation of the one-to-one navigation property [[employeeTimeWithAccountDetailNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DataReplicationProxy.EMPLOYEE_TIME_WITH_ACCOUNT_DETAIL_NAV = new core_1.OneToOneLink('employeeTimeWithAccountDetailNav', DataReplicationProxy, EmployeeTime_1.EmployeeTime);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DataReplicationProxy.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', DataReplicationProxy, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[legalEntityNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DataReplicationProxy.LEGAL_ENTITY_NAV = new core_1.Link('legalEntityNav', DataReplicationProxy, FoCompany_1.FoCompany);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DataReplicationProxy.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', DataReplicationProxy, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[replicationContentTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DataReplicationProxy.REPLICATION_CONTENT_TYPE_NAV = new core_1.OneToOneLink('replicationContentTypeNav', DataReplicationProxy, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[replicationScenarioObjectNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DataReplicationProxy.REPLICATION_SCENARIO_OBJECT_NAV = new core_1.OneToOneLink('replicationScenarioObjectNav', DataReplicationProxy, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[replicationTargetSystemNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DataReplicationProxy.REPLICATION_TARGET_SYSTEM_NAV = new core_1.OneToOneLink('replicationTargetSystemNav', DataReplicationProxy, ReplicationTargetSystem_1.ReplicationTargetSystem);
    /**
     * Static representation of the one-to-one navigation property [[timeAccountNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DataReplicationProxy.TIME_ACCOUNT_NAV = new core_1.OneToOneLink('timeAccountNav', DataReplicationProxy, TimeAccount_1.TimeAccount);
    /**
     * Static representation of the one-to-one navigation property [[timeAccountSnapshotNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DataReplicationProxy.TIME_ACCOUNT_SNAPSHOT_NAV = new core_1.OneToOneLink('timeAccountSnapshotNav', DataReplicationProxy, TimeAccountSnapshot_1.TimeAccountSnapshot);
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DataReplicationProxy.USER_ID_NAV = new core_1.OneToOneLink('userIdNav', DataReplicationProxy, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DataReplicationProxy.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', DataReplicationProxy, WfRequest_1.WfRequest);
    /**
     * All fields of the DataReplicationProxy entity.
     */
    DataReplicationProxy._allFields = [
        DataReplicationProxy.ALLOW_REPLICATION_IN_CORRECTION_PHASE,
        DataReplicationProxy.CREATED_BY,
        DataReplicationProxy.CREATED_DATE_TIME,
        DataReplicationProxy.DATA_REPLICATION_PROXY_STATUS,
        DataReplicationProxy.EARLIEST_REPLICATION_DATE_TIME,
        DataReplicationProxy.EMPLOYEE_TIME,
        DataReplicationProxy.EMPLOYEE_TIME_VALUATION_RESULT,
        DataReplicationProxy.EMPLOYEE_TIME_WITH_ACCOUNT_DETAIL,
        DataReplicationProxy.EXTERNAL_CODE,
        DataReplicationProxy.IS_SUBSEQUENT_CHANGE,
        DataReplicationProxy.LAST_MODIFIED_BY,
        DataReplicationProxy.LAST_MODIFIED_DATE_TIME,
        DataReplicationProxy.LEGAL_ENTITY,
        DataReplicationProxy.MDF_SYSTEM_RECORD_STATUS,
        DataReplicationProxy.PLANNED_WORKING_TIME_END_DATE,
        DataReplicationProxy.PLANNED_WORKING_TIME_START_DATE,
        DataReplicationProxy.REPLICATION_CONTENT_TYPE,
        DataReplicationProxy.REPLICATION_SCENARIO_OBJECT,
        DataReplicationProxy.REPLICATION_TARGET_SYSTEM,
        DataReplicationProxy.SOURCE_GENERIC_OBJECT_EXTERNAL_CODE,
        DataReplicationProxy.SOURCE_GENERIC_OBJECT_INTERNAL_ID,
        DataReplicationProxy.TIME_ACCOUNT,
        DataReplicationProxy.TIME_ACCOUNT_PAYOUT,
        DataReplicationProxy.TIME_ACCOUNT_SNAPSHOT,
        DataReplicationProxy.USE_COST_CENTER_EXTERNAL_OBJECT_ID,
        DataReplicationProxy.USER_ID,
        DataReplicationProxy.CREATED_BY_NAV,
        DataReplicationProxy.DATA_REPLICATION_PROXY_STATUS_NAV,
        DataReplicationProxy.EMPLOYEE_TIME_NAV,
        DataReplicationProxy.EMPLOYEE_TIME_VALUATION_RESULT_NAV,
        DataReplicationProxy.EMPLOYEE_TIME_WITH_ACCOUNT_DETAIL_NAV,
        DataReplicationProxy.LAST_MODIFIED_BY_NAV,
        DataReplicationProxy.LEGAL_ENTITY_NAV,
        DataReplicationProxy.MDF_SYSTEM_RECORD_STATUS_NAV,
        DataReplicationProxy.REPLICATION_CONTENT_TYPE_NAV,
        DataReplicationProxy.REPLICATION_SCENARIO_OBJECT_NAV,
        DataReplicationProxy.REPLICATION_TARGET_SYSTEM_NAV,
        DataReplicationProxy.TIME_ACCOUNT_NAV,
        DataReplicationProxy.TIME_ACCOUNT_SNAPSHOT_NAV,
        DataReplicationProxy.USER_ID_NAV,
        DataReplicationProxy.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    DataReplicationProxy.ALL_FIELDS = new core_1.AllFields('*', DataReplicationProxy);
    /**
     * All key fields of the DataReplicationProxy entity.
     */
    DataReplicationProxy._keyFields = [DataReplicationProxy.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property DataReplicationProxy.
     */
    DataReplicationProxy._keys = DataReplicationProxy._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(DataReplicationProxy = exports.DataReplicationProxy || (exports.DataReplicationProxy = {}));
exports.DataReplicationProxy = DataReplicationProxy;
//# sourceMappingURL=DataReplicationProxy.js.map