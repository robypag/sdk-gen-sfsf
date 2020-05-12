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
var WfRequestStepRequestBuilder_1 = require("./WfRequestStepRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "WfRequestStep" of service "SFOData".
 */
var WfRequestStep = /** @class */ (function (_super) {
    __extends(WfRequestStep, _super);
    function WfRequestStep() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `WfRequestStep`.
     * @returns A builder that constructs instances of entity type `WfRequestStep`.
     */
    WfRequestStep.builder = function () {
        return core_1.Entity.entityBuilder(WfRequestStep);
    };
    /**
     * Returns a request builder to construct requests for operations on the `WfRequestStep` entity type.
     * @returns A `WfRequestStep` request builder.
     */
    WfRequestStep.requestBuilder = function () {
        return new WfRequestStepRequestBuilder_1.WfRequestStepRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `WfRequestStep`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `WfRequestStep`.
     */
    WfRequestStep.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, WfRequestStep);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    WfRequestStep.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for WfRequestStep.
     */
    WfRequestStep._entityName = 'WfRequestStep';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for WfRequestStep.
     */
    WfRequestStep._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    WfRequestStep._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return WfRequestStep;
}(core_1.Entity));
exports.WfRequestStep = WfRequestStep;
var FoDynamicRole_1 = require("./FoDynamicRole");
var User_1 = require("./User");
var Position_1 = require("./Position");
var WfRequest_1 = require("./WfRequest");
(function (WfRequestStep) {
    /**
     * Static representation of the [[actionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestStep.ACTION_TYPE = new core_1.StringField('actionType', WfRequestStep, 'Edm.String');
    /**
     * Static representation of the [[approverType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestStep.APPROVER_TYPE = new core_1.StringField('approverType', WfRequestStep, 'Edm.String');
    /**
     * Static representation of the [[assignedTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestStep.ASSIGNED_TO = new core_1.StringField('assignedTo', WfRequestStep, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestStep.CREATED_BY = new core_1.StringField('createdBy', WfRequestStep, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestStep.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', WfRequestStep, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestStep.CREATED_ON = new core_1.DateField('createdOn', WfRequestStep, 'Edm.DateTime');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestStep.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', WfRequestStep, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestStep.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', WfRequestStep, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestStep.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', WfRequestStep, 'Edm.DateTime');
    /**
     * Static representation of the [[ownerId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestStep.OWNER_ID = new core_1.StringField('ownerId', WfRequestStep, 'Edm.String');
    /**
     * Static representation of the [[processedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestStep.PROCESSED_BY = new core_1.StringField('processedBy', WfRequestStep, 'Edm.String');
    /**
     * Static representation of the [[relatedTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestStep.RELATED_TO = new core_1.StringField('relatedTo', WfRequestStep, 'Edm.String');
    /**
     * Static representation of the [[role]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestStep.ROLE = new core_1.StringField('role', WfRequestStep, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestStep.STATUS = new core_1.StringField('status', WfRequestStep, 'Edm.String');
    /**
     * Static representation of the [[stepNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestStep.STEP_NUM = new core_1.BigNumberField('stepNum', WfRequestStep, 'Edm.Int64');
    /**
     * Static representation of the [[wfRequestId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestStep.WF_REQUEST_ID = new core_1.BigNumberField('wfRequestId', WfRequestStep, 'Edm.Int64');
    /**
     * Static representation of the [[wfRequestStepId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestStep.WF_REQUEST_STEP_ID = new core_1.BigNumberField('wfRequestStepId', WfRequestStep, 'Edm.Int64');
    /**
     * Static representation of the one-to-one navigation property [[dynamicRoleNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestStep.DYNAMIC_ROLE_NAV = new core_1.OneToOneLink('dynamicRoleNav', WfRequestStep, FoDynamicRole_1.FoDynamicRole);
    /**
     * Static representation of the one-to-one navigation property [[ownerNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestStep.OWNER_NAV = new core_1.OneToOneLink('ownerNav', WfRequestStep, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[positionNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestStep.POSITION_NAV = new core_1.Link('positionNav', WfRequestStep, Position_1.Position);
    /**
     * Static representation of the one-to-one navigation property [[processedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestStep.PROCESSED_BY_NAV = new core_1.OneToOneLink('processedByNav', WfRequestStep, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestStep.WF_REQUEST_NAV = new core_1.OneToOneLink('wfRequestNav', WfRequestStep, WfRequest_1.WfRequest);
    /**
     * All fields of the WfRequestStep entity.
     */
    WfRequestStep._allFields = [
        WfRequestStep.ACTION_TYPE,
        WfRequestStep.APPROVER_TYPE,
        WfRequestStep.ASSIGNED_TO,
        WfRequestStep.CREATED_BY,
        WfRequestStep.CREATED_DATE_TIME,
        WfRequestStep.CREATED_ON,
        WfRequestStep.LAST_MODIFIED_BY,
        WfRequestStep.LAST_MODIFIED_DATE_TIME,
        WfRequestStep.LAST_MODIFIED_ON,
        WfRequestStep.OWNER_ID,
        WfRequestStep.PROCESSED_BY,
        WfRequestStep.RELATED_TO,
        WfRequestStep.ROLE,
        WfRequestStep.STATUS,
        WfRequestStep.STEP_NUM,
        WfRequestStep.WF_REQUEST_ID,
        WfRequestStep.WF_REQUEST_STEP_ID,
        WfRequestStep.DYNAMIC_ROLE_NAV,
        WfRequestStep.OWNER_NAV,
        WfRequestStep.POSITION_NAV,
        WfRequestStep.PROCESSED_BY_NAV,
        WfRequestStep.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    WfRequestStep.ALL_FIELDS = new core_1.AllFields('*', WfRequestStep);
    /**
     * All key fields of the WfRequestStep entity.
     */
    WfRequestStep._keyFields = [WfRequestStep.WF_REQUEST_STEP_ID];
    /**
     * Mapping of all key field names to the respective static field property WfRequestStep.
     */
    WfRequestStep._keys = WfRequestStep._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(WfRequestStep = exports.WfRequestStep || (exports.WfRequestStep = {}));
exports.WfRequestStep = WfRequestStep;
//# sourceMappingURL=WfRequestStep.js.map