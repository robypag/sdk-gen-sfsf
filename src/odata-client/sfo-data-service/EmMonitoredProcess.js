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
var EmMonitoredProcessRequestBuilder_1 = require("./EmMonitoredProcessRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EMMonitoredProcess" of service "SFOData".
 */
var EmMonitoredProcess = /** @class */ (function (_super) {
    __extends(EmMonitoredProcess, _super);
    function EmMonitoredProcess() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmMonitoredProcess`.
     * @returns A builder that constructs instances of entity type `EmMonitoredProcess`.
     */
    EmMonitoredProcess.builder = function () {
        return core_1.Entity.entityBuilder(EmMonitoredProcess);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmMonitoredProcess` entity type.
     * @returns A `EmMonitoredProcess` request builder.
     */
    EmMonitoredProcess.requestBuilder = function () {
        return new EmMonitoredProcessRequestBuilder_1.EmMonitoredProcessRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmMonitoredProcess`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmMonitoredProcess`.
     */
    EmMonitoredProcess.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EmMonitoredProcess);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmMonitoredProcess.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmMonitoredProcess.
     */
    EmMonitoredProcess._entityName = 'EMMonitoredProcess';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmMonitoredProcess.
     */
    EmMonitoredProcess._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmMonitoredProcess._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return EmMonitoredProcess;
}(core_1.Entity));
exports.EmMonitoredProcess = EmMonitoredProcess;
(function (EmMonitoredProcess) {
    /**
     * Static representation of the [[coRelatorId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmMonitoredProcess.CO_RELATOR_ID = new core_1.StringField('coRelatorId', EmMonitoredProcess, 'Edm.String');
    /**
     * Static representation of the [[firstEventTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmMonitoredProcess.FIRST_EVENT_TIME = new core_1.DateField('firstEventTime', EmMonitoredProcess, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[hasErrors]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmMonitoredProcess.HAS_ERRORS = new core_1.StringField('hasErrors', EmMonitoredProcess, 'Edm.String');
    /**
     * Static representation of the [[hasWarnings]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmMonitoredProcess.HAS_WARNINGS = new core_1.StringField('hasWarnings', EmMonitoredProcess, 'Edm.String');
    /**
     * Static representation of the [[lastEventTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmMonitoredProcess.LAST_EVENT_TIME = new core_1.DateField('lastEventTime', EmMonitoredProcess, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[moduleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmMonitoredProcess.MODULE_NAME = new core_1.StringField('moduleName', EmMonitoredProcess, 'Edm.String');
    /**
     * Static representation of the [[monitoredProcessId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmMonitoredProcess.MONITORED_PROCESS_ID = new core_1.BigNumberField('monitoredProcessId', EmMonitoredProcess, 'Edm.Int64');
    /**
     * Static representation of the [[processDefinitionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmMonitoredProcess.PROCESS_DEFINITION_ID = new core_1.StringField('processDefinitionId', EmMonitoredProcess, 'Edm.String');
    /**
     * Static representation of the [[processDefinitionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmMonitoredProcess.PROCESS_DEFINITION_NAME = new core_1.StringField('processDefinitionName', EmMonitoredProcess, 'Edm.String');
    /**
     * Static representation of the [[processInstanceId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmMonitoredProcess.PROCESS_INSTANCE_ID = new core_1.StringField('processInstanceId', EmMonitoredProcess, 'Edm.String');
    /**
     * Static representation of the [[processInstanceName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmMonitoredProcess.PROCESS_INSTANCE_NAME = new core_1.StringField('processInstanceName', EmMonitoredProcess, 'Edm.String');
    /**
     * Static representation of the [[processState]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmMonitoredProcess.PROCESS_STATE = new core_1.StringField('processState', EmMonitoredProcess, 'Edm.String');
    /**
     * Static representation of the [[processType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmMonitoredProcess.PROCESS_TYPE = new core_1.StringField('processType', EmMonitoredProcess, 'Edm.String');
    /**
     * All fields of the EmMonitoredProcess entity.
     */
    EmMonitoredProcess._allFields = [
        EmMonitoredProcess.CO_RELATOR_ID,
        EmMonitoredProcess.FIRST_EVENT_TIME,
        EmMonitoredProcess.HAS_ERRORS,
        EmMonitoredProcess.HAS_WARNINGS,
        EmMonitoredProcess.LAST_EVENT_TIME,
        EmMonitoredProcess.MODULE_NAME,
        EmMonitoredProcess.MONITORED_PROCESS_ID,
        EmMonitoredProcess.PROCESS_DEFINITION_ID,
        EmMonitoredProcess.PROCESS_DEFINITION_NAME,
        EmMonitoredProcess.PROCESS_INSTANCE_ID,
        EmMonitoredProcess.PROCESS_INSTANCE_NAME,
        EmMonitoredProcess.PROCESS_STATE,
        EmMonitoredProcess.PROCESS_TYPE
    ];
    /**
     * All fields selector.
     */
    EmMonitoredProcess.ALL_FIELDS = new core_1.AllFields('*', EmMonitoredProcess);
    /**
     * All key fields of the EmMonitoredProcess entity.
     */
    EmMonitoredProcess._keyFields = [EmMonitoredProcess.PROCESS_DEFINITION_ID, EmMonitoredProcess.PROCESS_INSTANCE_ID, EmMonitoredProcess.PROCESS_TYPE];
    /**
     * Mapping of all key field names to the respective static field property EmMonitoredProcess.
     */
    EmMonitoredProcess._keys = EmMonitoredProcess._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmMonitoredProcess = exports.EmMonitoredProcess || (exports.EmMonitoredProcess = {}));
exports.EmMonitoredProcess = EmMonitoredProcess;
//# sourceMappingURL=EmMonitoredProcess.js.map