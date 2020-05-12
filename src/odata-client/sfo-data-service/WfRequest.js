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
var WfRequestRequestBuilder_1 = require("./WfRequestRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "WfRequest" of service "SFOData".
 */
var WfRequest = /** @class */ (function (_super) {
    __extends(WfRequest, _super);
    function WfRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `WfRequest`.
     * @returns A builder that constructs instances of entity type `WfRequest`.
     */
    WfRequest.builder = function () {
        return core_1.Entity.entityBuilder(WfRequest);
    };
    /**
     * Returns a request builder to construct requests for operations on the `WfRequest` entity type.
     * @returns A `WfRequest` request builder.
     */
    WfRequest.requestBuilder = function () {
        return new WfRequestRequestBuilder_1.WfRequestRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `WfRequest`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `WfRequest`.
     */
    WfRequest.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, WfRequest);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    WfRequest.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for WfRequest.
     */
    WfRequest._entityName = 'WfRequest';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for WfRequest.
     */
    WfRequest._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    WfRequest._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return WfRequest;
}(core_1.Entity));
exports.WfRequest = WfRequest;
var EmpWfRequest_1 = require("./EmpWfRequest");
var WfRequestComments_1 = require("./WfRequestComments");
var WfRequestParticipator_1 = require("./WfRequestParticipator");
var WfRequestStep_1 = require("./WfRequestStep");
var WfRequestUiData_1 = require("./WfRequestUiData");
var WorkflowAllowedActionList_1 = require("./WorkflowAllowedActionList");
(function (WfRequest) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequest.CREATED_BY = new core_1.StringField('createdBy', WfRequest, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequest.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', WfRequest, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequest.CREATED_ON = new core_1.DateField('createdOn', WfRequest, 'Edm.DateTime');
    /**
     * Static representation of the [[currentStepNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequest.CURRENT_STEP_NUM = new core_1.NumberField('currentStepNum', WfRequest, 'Edm.Int32');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequest.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', WfRequest, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequest.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', WfRequest, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequest.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', WfRequest, 'Edm.DateTime');
    /**
     * Static representation of the [[module]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequest.MODULE = new core_1.StringField('module', WfRequest, 'Edm.String');
    /**
     * Static representation of the [[parentWfRequestId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequest.PARENT_WF_REQUEST_ID = new core_1.BigNumberField('parentWfRequestId', WfRequest, 'Edm.Int64');
    /**
     * Static representation of the [[reminderSentDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequest.REMINDER_SENT_DATE = new core_1.DateField('reminderSentDate', WfRequest, 'Edm.DateTime');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequest.STATUS = new core_1.StringField('status', WfRequest, 'Edm.String');
    /**
     * Static representation of the [[totalSteps]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequest.TOTAL_STEPS = new core_1.NumberField('totalSteps', WfRequest, 'Edm.Int32');
    /**
     * Static representation of the [[url]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequest.URL = new core_1.StringField('url', WfRequest, 'Edm.String');
    /**
     * Static representation of the [[wfRequestId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequest.WF_REQUEST_ID = new core_1.BigNumberField('wfRequestId', WfRequest, 'Edm.Int64');
    /**
     * Static representation of the one-to-one navigation property [[empWfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequest.EMP_WF_REQUEST_NAV = new core_1.OneToOneLink('empWfRequestNav', WfRequest, EmpWfRequest_1.EmpWfRequest);
    /**
     * Static representation of the one-to-one navigation property [[parentWfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequest.PARENT_WF_REQUEST_NAV = new core_1.OneToOneLink('parentWfRequestNav', WfRequest, WfRequest);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestCommentsNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequest.WF_REQUEST_COMMENTS_NAV = new core_1.Link('wfRequestCommentsNav', WfRequest, WfRequestComments_1.WfRequestComments);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestParticipatorNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequest.WF_REQUEST_PARTICIPATOR_NAV = new core_1.Link('wfRequestParticipatorNav', WfRequest, WfRequestParticipator_1.WfRequestParticipator);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestStepNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequest.WF_REQUEST_STEP_NAV = new core_1.Link('wfRequestStepNav', WfRequest, WfRequestStep_1.WfRequestStep);
    /**
     * Static representation of the one-to-one navigation property [[wfRequestUiNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequest.WF_REQUEST_UI_NAV = new core_1.OneToOneLink('wfRequestUINav', WfRequest, WfRequestUiData_1.WfRequestUiData);
    /**
     * Static representation of the one-to-many navigation property [[workflowAllowedActionListNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequest.WORKFLOW_ALLOWED_ACTION_LIST_NAV = new core_1.Link('workflowAllowedActionListNav', WfRequest, WorkflowAllowedActionList_1.WorkflowAllowedActionList);
    /**
     * All fields of the WfRequest entity.
     */
    WfRequest._allFields = [
        WfRequest.CREATED_BY,
        WfRequest.CREATED_DATE_TIME,
        WfRequest.CREATED_ON,
        WfRequest.CURRENT_STEP_NUM,
        WfRequest.LAST_MODIFIED_BY,
        WfRequest.LAST_MODIFIED_DATE_TIME,
        WfRequest.LAST_MODIFIED_ON,
        WfRequest.MODULE,
        WfRequest.PARENT_WF_REQUEST_ID,
        WfRequest.REMINDER_SENT_DATE,
        WfRequest.STATUS,
        WfRequest.TOTAL_STEPS,
        WfRequest.URL,
        WfRequest.WF_REQUEST_ID,
        WfRequest.EMP_WF_REQUEST_NAV,
        WfRequest.PARENT_WF_REQUEST_NAV,
        WfRequest.WF_REQUEST_COMMENTS_NAV,
        WfRequest.WF_REQUEST_PARTICIPATOR_NAV,
        WfRequest.WF_REQUEST_STEP_NAV,
        WfRequest.WF_REQUEST_UI_NAV,
        WfRequest.WORKFLOW_ALLOWED_ACTION_LIST_NAV
    ];
    /**
     * All fields selector.
     */
    WfRequest.ALL_FIELDS = new core_1.AllFields('*', WfRequest);
    /**
     * All key fields of the WfRequest entity.
     */
    WfRequest._keyFields = [WfRequest.WF_REQUEST_ID];
    /**
     * Mapping of all key field names to the respective static field property WfRequest.
     */
    WfRequest._keys = WfRequest._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(WfRequest = exports.WfRequest || (exports.WfRequest = {}));
exports.WfRequest = WfRequest;
//# sourceMappingURL=WfRequest.js.map