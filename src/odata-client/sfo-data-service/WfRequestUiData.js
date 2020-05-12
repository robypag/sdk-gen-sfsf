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
var WfRequestUiDataRequestBuilder_1 = require("./WfRequestUiDataRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "WfRequestUIData" of service "SFOData".
 */
var WfRequestUiData = /** @class */ (function (_super) {
    __extends(WfRequestUiData, _super);
    function WfRequestUiData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `WfRequestUiData`.
     * @returns A builder that constructs instances of entity type `WfRequestUiData`.
     */
    WfRequestUiData.builder = function () {
        return core_1.Entity.entityBuilder(WfRequestUiData);
    };
    /**
     * Returns a request builder to construct requests for operations on the `WfRequestUiData` entity type.
     * @returns A `WfRequestUiData` request builder.
     */
    WfRequestUiData.requestBuilder = function () {
        return new WfRequestUiDataRequestBuilder_1.WfRequestUiDataRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `WfRequestUiData`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `WfRequestUiData`.
     */
    WfRequestUiData.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, WfRequestUiData);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    WfRequestUiData.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for WfRequestUiData.
     */
    WfRequestUiData._entityName = 'WfRequestUIData';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for WfRequestUiData.
     */
    WfRequestUiData._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    WfRequestUiData._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return WfRequestUiData;
}(core_1.Entity));
exports.WfRequestUiData = WfRequestUiData;
(function (WfRequestUiData) {
    /**
     * Static representation of the [[actionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestUiData.ACTION_TYPE = new core_1.StringField('actionType', WfRequestUiData, 'Edm.String');
    /**
     * Static representation of the [[actions]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestUiData.ACTIONS = new core_1.StringField('actions', WfRequestUiData, 'Edm.String');
    /**
     * Static representation of the [[assigneeUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestUiData.ASSIGNEE_USER_ID = new core_1.StringField('assigneeUserId', WfRequestUiData, 'Edm.String');
    /**
     * Static representation of the [[assigneeUserName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestUiData.ASSIGNEE_USER_NAME = new core_1.StringField('assigneeUserName', WfRequestUiData, 'Edm.String');
    /**
     * Static representation of the [[businessUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestUiData.BUSINESS_UNIT = new core_1.StringField('businessUnit', WfRequestUiData, 'Edm.String');
    /**
     * Static representation of the [[changedData]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestUiData.CHANGED_DATA = new core_1.StringField('changedData', WfRequestUiData, 'Edm.String');
    /**
     * Static representation of the [[costCenter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestUiData.COST_CENTER = new core_1.StringField('costCenter', WfRequestUiData, 'Edm.String');
    /**
     * Static representation of the [[deeplink]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestUiData.DEEPLINK = new core_1.StringField('deeplink', WfRequestUiData, 'Edm.String');
    /**
     * Static representation of the [[department]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestUiData.DEPARTMENT = new core_1.StringField('department', WfRequestUiData, 'Edm.String');
    /**
     * Static representation of the [[division]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestUiData.DIVISION = new core_1.StringField('division', WfRequestUiData, 'Edm.String');
    /**
     * Static representation of the [[effectiveDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestUiData.EFFECTIVE_DATE = new core_1.StringField('effectiveDate', WfRequestUiData, 'Edm.String');
    /**
     * Static representation of the [[eventReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestUiData.EVENT_REASON = new core_1.StringField('eventReason', WfRequestUiData, 'Edm.String');
    /**
     * Static representation of the [[isAssigned]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestUiData.IS_ASSIGNED = new core_1.BooleanField('isAssigned', WfRequestUiData, 'Edm.Boolean');
    /**
     * Static representation of the [[isEffectiveDateType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestUiData.IS_EFFECTIVE_DATE_TYPE = new core_1.BooleanField('isEffectiveDateType', WfRequestUiData, 'Edm.Boolean');
    /**
     * Static representation of the [[isObjectBase]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestUiData.IS_OBJECT_BASE = new core_1.BooleanField('isObjectBase', WfRequestUiData, 'Edm.Boolean');
    /**
     * Static representation of the [[jobTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestUiData.JOB_TITLE = new core_1.StringField('jobTitle', WfRequestUiData, 'Edm.String');
    /**
     * Static representation of the [[legalEntity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestUiData.LEGAL_ENTITY = new core_1.StringField('legalEntity', WfRequestUiData, 'Edm.String');
    /**
     * Static representation of the [[location]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestUiData.LOCATION = new core_1.StringField('location', WfRequestUiData, 'Edm.String');
    /**
     * Static representation of the [[objectName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestUiData.OBJECT_NAME = new core_1.StringField('objectName', WfRequestUiData, 'Edm.String');
    /**
     * Static representation of the [[objectType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestUiData.OBJECT_TYPE = new core_1.StringField('objectType', WfRequestUiData, 'Edm.String');
    /**
     * Static representation of the [[operateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestUiData.OPERATE_DATE = new core_1.StringField('operateDate', WfRequestUiData, 'Edm.String');
    /**
     * Static representation of the [[operateType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestUiData.OPERATE_TYPE = new core_1.StringField('operateType', WfRequestUiData, 'Edm.String');
    /**
     * Static representation of the [[operateUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestUiData.OPERATE_USER_ID = new core_1.StringField('operateUserId', WfRequestUiData, 'Edm.String');
    /**
     * Static representation of the [[operateUserName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestUiData.OPERATE_USER_NAME = new core_1.StringField('operateUserName', WfRequestUiData, 'Edm.String');
    /**
     * Static representation of the [[receivedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestUiData.RECEIVED_ON = new core_1.StringField('receivedOn', WfRequestUiData, 'Edm.String');
    /**
     * Static representation of the [[subjectUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestUiData.SUBJECT_USER_ID = new core_1.StringField('subjectUserId', WfRequestUiData, 'Edm.String');
    /**
     * Static representation of the [[subjectUserName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestUiData.SUBJECT_USER_NAME = new core_1.StringField('subjectUserName', WfRequestUiData, 'Edm.String');
    /**
     * Static representation of the [[todoSubjectLine]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestUiData.TODO_SUBJECT_LINE = new core_1.StringField('todoSubjectLine', WfRequestUiData, 'Edm.String');
    /**
     * Static representation of the [[wfRequestId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestUiData.WF_REQUEST_ID = new core_1.BigNumberField('wfRequestId', WfRequestUiData, 'Edm.Int64');
    /**
     * All fields of the WfRequestUiData entity.
     */
    WfRequestUiData._allFields = [
        WfRequestUiData.ACTION_TYPE,
        WfRequestUiData.ACTIONS,
        WfRequestUiData.ASSIGNEE_USER_ID,
        WfRequestUiData.ASSIGNEE_USER_NAME,
        WfRequestUiData.BUSINESS_UNIT,
        WfRequestUiData.CHANGED_DATA,
        WfRequestUiData.COST_CENTER,
        WfRequestUiData.DEEPLINK,
        WfRequestUiData.DEPARTMENT,
        WfRequestUiData.DIVISION,
        WfRequestUiData.EFFECTIVE_DATE,
        WfRequestUiData.EVENT_REASON,
        WfRequestUiData.IS_ASSIGNED,
        WfRequestUiData.IS_EFFECTIVE_DATE_TYPE,
        WfRequestUiData.IS_OBJECT_BASE,
        WfRequestUiData.JOB_TITLE,
        WfRequestUiData.LEGAL_ENTITY,
        WfRequestUiData.LOCATION,
        WfRequestUiData.OBJECT_NAME,
        WfRequestUiData.OBJECT_TYPE,
        WfRequestUiData.OPERATE_DATE,
        WfRequestUiData.OPERATE_TYPE,
        WfRequestUiData.OPERATE_USER_ID,
        WfRequestUiData.OPERATE_USER_NAME,
        WfRequestUiData.RECEIVED_ON,
        WfRequestUiData.SUBJECT_USER_ID,
        WfRequestUiData.SUBJECT_USER_NAME,
        WfRequestUiData.TODO_SUBJECT_LINE,
        WfRequestUiData.WF_REQUEST_ID
    ];
    /**
     * All fields selector.
     */
    WfRequestUiData.ALL_FIELDS = new core_1.AllFields('*', WfRequestUiData);
    /**
     * All key fields of the WfRequestUiData entity.
     */
    WfRequestUiData._keyFields = [WfRequestUiData.WF_REQUEST_ID];
    /**
     * Mapping of all key field names to the respective static field property WfRequestUiData.
     */
    WfRequestUiData._keys = WfRequestUiData._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(WfRequestUiData = exports.WfRequestUiData || (exports.WfRequestUiData = {}));
exports.WfRequestUiData = WfRequestUiData;
//# sourceMappingURL=WfRequestUiData.js.map