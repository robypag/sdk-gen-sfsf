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
var WorkflowAllowedActionListRequestBuilder_1 = require("./WorkflowAllowedActionListRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "WorkflowAllowedActionList" of service "SFOData".
 */
var WorkflowAllowedActionList = /** @class */ (function (_super) {
    __extends(WorkflowAllowedActionList, _super);
    function WorkflowAllowedActionList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `WorkflowAllowedActionList`.
     * @returns A builder that constructs instances of entity type `WorkflowAllowedActionList`.
     */
    WorkflowAllowedActionList.builder = function () {
        return core_1.Entity.entityBuilder(WorkflowAllowedActionList);
    };
    /**
     * Returns a request builder to construct requests for operations on the `WorkflowAllowedActionList` entity type.
     * @returns A `WorkflowAllowedActionList` request builder.
     */
    WorkflowAllowedActionList.requestBuilder = function () {
        return new WorkflowAllowedActionListRequestBuilder_1.WorkflowAllowedActionListRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `WorkflowAllowedActionList`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `WorkflowAllowedActionList`.
     */
    WorkflowAllowedActionList.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, WorkflowAllowedActionList);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    WorkflowAllowedActionList.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for WorkflowAllowedActionList.
     */
    WorkflowAllowedActionList._entityName = 'WorkflowAllowedActionList';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for WorkflowAllowedActionList.
     */
    WorkflowAllowedActionList._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    WorkflowAllowedActionList._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return WorkflowAllowedActionList;
}(core_1.Entity));
exports.WorkflowAllowedActionList = WorkflowAllowedActionList;
(function (WorkflowAllowedActionList) {
    /**
     * Static representation of the [[allowApprove]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkflowAllowedActionList.ALLOW_APPROVE = new core_1.BooleanField('allowApprove', WorkflowAllowedActionList, 'Edm.Boolean');
    /**
     * Static representation of the [[allowDelegateDecline]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkflowAllowedActionList.ALLOW_DELEGATE_DECLINE = new core_1.BooleanField('allowDelegateDecline', WorkflowAllowedActionList, 'Edm.Boolean');
    /**
     * Static representation of the [[allowDelegateGrant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkflowAllowedActionList.ALLOW_DELEGATE_GRANT = new core_1.BooleanField('allowDelegateGrant', WorkflowAllowedActionList, 'Edm.Boolean');
    /**
     * Static representation of the [[allowDelegateRevoke]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkflowAllowedActionList.ALLOW_DELEGATE_REVOKE = new core_1.BooleanField('allowDelegateRevoke', WorkflowAllowedActionList, 'Edm.Boolean');
    /**
     * Static representation of the [[allowPostComment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkflowAllowedActionList.ALLOW_POST_COMMENT = new core_1.BooleanField('allowPostComment', WorkflowAllowedActionList, 'Edm.Boolean');
    /**
     * Static representation of the [[allowReject]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkflowAllowedActionList.ALLOW_REJECT = new core_1.BooleanField('allowReject', WorkflowAllowedActionList, 'Edm.Boolean');
    /**
     * Static representation of the [[allowResubmit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkflowAllowedActionList.ALLOW_RESUBMIT = new core_1.BooleanField('allowResubmit', WorkflowAllowedActionList, 'Edm.Boolean');
    /**
     * Static representation of the [[allowSendback]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkflowAllowedActionList.ALLOW_SENDBACK = new core_1.BooleanField('allowSendback', WorkflowAllowedActionList, 'Edm.Boolean');
    /**
     * Static representation of the [[allowUpdateRequest]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkflowAllowedActionList.ALLOW_UPDATE_REQUEST = new core_1.BooleanField('allowUpdateRequest', WorkflowAllowedActionList, 'Edm.Boolean');
    /**
     * Static representation of the [[allowWithdraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkflowAllowedActionList.ALLOW_WITHDRAW = new core_1.BooleanField('allowWithdraw', WorkflowAllowedActionList, 'Edm.Boolean');
    /**
     * Static representation of the [[wfRequestId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkflowAllowedActionList.WF_REQUEST_ID = new core_1.BigNumberField('wfRequestId', WorkflowAllowedActionList, 'Edm.Int64');
    /**
     * All fields of the WorkflowAllowedActionList entity.
     */
    WorkflowAllowedActionList._allFields = [
        WorkflowAllowedActionList.ALLOW_APPROVE,
        WorkflowAllowedActionList.ALLOW_DELEGATE_DECLINE,
        WorkflowAllowedActionList.ALLOW_DELEGATE_GRANT,
        WorkflowAllowedActionList.ALLOW_DELEGATE_REVOKE,
        WorkflowAllowedActionList.ALLOW_POST_COMMENT,
        WorkflowAllowedActionList.ALLOW_REJECT,
        WorkflowAllowedActionList.ALLOW_RESUBMIT,
        WorkflowAllowedActionList.ALLOW_SENDBACK,
        WorkflowAllowedActionList.ALLOW_UPDATE_REQUEST,
        WorkflowAllowedActionList.ALLOW_WITHDRAW,
        WorkflowAllowedActionList.WF_REQUEST_ID
    ];
    /**
     * All fields selector.
     */
    WorkflowAllowedActionList.ALL_FIELDS = new core_1.AllFields('*', WorkflowAllowedActionList);
    /**
     * All key fields of the WorkflowAllowedActionList entity.
     */
    WorkflowAllowedActionList._keyFields = [WorkflowAllowedActionList.WF_REQUEST_ID];
    /**
     * Mapping of all key field names to the respective static field property WorkflowAllowedActionList.
     */
    WorkflowAllowedActionList._keys = WorkflowAllowedActionList._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(WorkflowAllowedActionList = exports.WorkflowAllowedActionList || (exports.WorkflowAllowedActionList = {}));
exports.WorkflowAllowedActionList = WorkflowAllowedActionList;
//# sourceMappingURL=WorkflowAllowedActionList.js.map