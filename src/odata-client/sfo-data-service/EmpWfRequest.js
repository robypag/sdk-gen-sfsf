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
var EmpWfRequestRequestBuilder_1 = require("./EmpWfRequestRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EmpWfRequest" of service "SFOData".
 */
var EmpWfRequest = /** @class */ (function (_super) {
    __extends(EmpWfRequest, _super);
    function EmpWfRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmpWfRequest`.
     * @returns A builder that constructs instances of entity type `EmpWfRequest`.
     */
    EmpWfRequest.builder = function () {
        return core_1.Entity.entityBuilder(EmpWfRequest);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmpWfRequest` entity type.
     * @returns A `EmpWfRequest` request builder.
     */
    EmpWfRequest.requestBuilder = function () {
        return new EmpWfRequestRequestBuilder_1.EmpWfRequestRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmpWfRequest`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmpWfRequest`.
     */
    EmpWfRequest.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EmpWfRequest);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmpWfRequest.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmpWfRequest.
     */
    EmpWfRequest._entityName = 'EmpWfRequest';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmpWfRequest.
     */
    EmpWfRequest._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmpWfRequest._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return EmpWfRequest;
}(core_1.Entity));
exports.EmpWfRequest = EmpWfRequest;
var FoEventReason_1 = require("./FoEventReason");
var EmpJob_1 = require("./EmpJob");
var FoWfConfig_1 = require("./FoWfConfig");
(function (EmpWfRequest) {
    /**
     * Static representation of the [[actionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpWfRequest.ACTION_TYPE = new core_1.StringField('actionType', EmpWfRequest, 'Edm.String');
    /**
     * Static representation of the [[effectiveDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpWfRequest.EFFECTIVE_DATE = new core_1.DateField('effectiveDate', EmpWfRequest, 'Edm.DateTime');
    /**
     * Static representation of the [[empWfRequestId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpWfRequest.EMP_WF_REQUEST_ID = new core_1.BigNumberField('empWfRequestId', EmpWfRequest, 'Edm.Int64');
    /**
     * Static representation of the [[entityType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpWfRequest.ENTITY_TYPE = new core_1.StringField('entityType', EmpWfRequest, 'Edm.String');
    /**
     * Static representation of the [[eventReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpWfRequest.EVENT_REASON = new core_1.StringField('eventReason', EmpWfRequest, 'Edm.String');
    /**
     * Static representation of the [[requestType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpWfRequest.REQUEST_TYPE = new core_1.StringField('requestType', EmpWfRequest, 'Edm.String');
    /**
     * Static representation of the [[subjectId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpWfRequest.SUBJECT_ID = new core_1.StringField('subjectId', EmpWfRequest, 'Edm.String');
    /**
     * Static representation of the [[wfConfig]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpWfRequest.WF_CONFIG = new core_1.StringField('wfConfig', EmpWfRequest, 'Edm.String');
    /**
     * Static representation of the [[wfRequestId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpWfRequest.WF_REQUEST_ID = new core_1.BigNumberField('wfRequestId', EmpWfRequest, 'Edm.Int64');
    /**
     * Static representation of the one-to-many navigation property [[eventReasonNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpWfRequest.EVENT_REASON_NAV = new core_1.Link('eventReasonNav', EmpWfRequest, FoEventReason_1.FoEventReason);
    /**
     * Static representation of the one-to-many navigation property [[jobInfoNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpWfRequest.JOB_INFO_NAV = new core_1.Link('jobInfoNav', EmpWfRequest, EmpJob_1.EmpJob);
    /**
     * Static representation of the one-to-one navigation property [[wfConfigNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpWfRequest.WF_CONFIG_NAV = new core_1.OneToOneLink('wfConfigNav', EmpWfRequest, FoWfConfig_1.FoWfConfig);
    /**
     * All fields of the EmpWfRequest entity.
     */
    EmpWfRequest._allFields = [
        EmpWfRequest.ACTION_TYPE,
        EmpWfRequest.EFFECTIVE_DATE,
        EmpWfRequest.EMP_WF_REQUEST_ID,
        EmpWfRequest.ENTITY_TYPE,
        EmpWfRequest.EVENT_REASON,
        EmpWfRequest.REQUEST_TYPE,
        EmpWfRequest.SUBJECT_ID,
        EmpWfRequest.WF_CONFIG,
        EmpWfRequest.WF_REQUEST_ID,
        EmpWfRequest.EVENT_REASON_NAV,
        EmpWfRequest.JOB_INFO_NAV,
        EmpWfRequest.WF_CONFIG_NAV
    ];
    /**
     * All fields selector.
     */
    EmpWfRequest.ALL_FIELDS = new core_1.AllFields('*', EmpWfRequest);
    /**
     * All key fields of the EmpWfRequest entity.
     */
    EmpWfRequest._keyFields = [EmpWfRequest.EMP_WF_REQUEST_ID];
    /**
     * Mapping of all key field names to the respective static field property EmpWfRequest.
     */
    EmpWfRequest._keys = EmpWfRequest._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmpWfRequest = exports.EmpWfRequest || (exports.EmpWfRequest = {}));
exports.EmpWfRequest = EmpWfRequest;
//# sourceMappingURL=EmpWfRequest.js.map