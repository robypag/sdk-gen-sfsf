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
var InitiativeAlignmentBeanRequestBuilder_1 = require("./InitiativeAlignmentBeanRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "InitiativeAlignmentBean" of service "SFOData".
 */
var InitiativeAlignmentBean = /** @class */ (function (_super) {
    __extends(InitiativeAlignmentBean, _super);
    function InitiativeAlignmentBean() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `InitiativeAlignmentBean`.
     * @returns A builder that constructs instances of entity type `InitiativeAlignmentBean`.
     */
    InitiativeAlignmentBean.builder = function () {
        return core_1.Entity.entityBuilder(InitiativeAlignmentBean);
    };
    /**
     * Returns a request builder to construct requests for operations on the `InitiativeAlignmentBean` entity type.
     * @returns A `InitiativeAlignmentBean` request builder.
     */
    InitiativeAlignmentBean.requestBuilder = function () {
        return new InitiativeAlignmentBeanRequestBuilder_1.InitiativeAlignmentBeanRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `InitiativeAlignmentBean`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `InitiativeAlignmentBean`.
     */
    InitiativeAlignmentBean.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, InitiativeAlignmentBean);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    InitiativeAlignmentBean.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for InitiativeAlignmentBean.
     */
    InitiativeAlignmentBean._entityName = 'InitiativeAlignmentBean';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for InitiativeAlignmentBean.
     */
    InitiativeAlignmentBean._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    InitiativeAlignmentBean._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return InitiativeAlignmentBean;
}(core_1.Entity));
exports.InitiativeAlignmentBean = InitiativeAlignmentBean;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var WfRequest_1 = require("./WfRequest");
(function (InitiativeAlignmentBean) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InitiativeAlignmentBean.CREATED_BY = new core_1.StringField('createdBy', InitiativeAlignmentBean, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InitiativeAlignmentBean.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', InitiativeAlignmentBean, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InitiativeAlignmentBean.EXTERNAL_CODE = new core_1.StringField('externalCode', InitiativeAlignmentBean, 'Edm.String');
    /**
     * Static representation of the [[goalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InitiativeAlignmentBean.GOAL_ID = new core_1.BigNumberField('goalId', InitiativeAlignmentBean, 'Edm.Int64');
    /**
     * Static representation of the [[goalName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InitiativeAlignmentBean.GOAL_NAME = new core_1.StringField('goalName', InitiativeAlignmentBean, 'Edm.String');
    /**
     * Static representation of the [[goalType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InitiativeAlignmentBean.GOAL_TYPE = new core_1.StringField('goalType', InitiativeAlignmentBean, 'Edm.String');
    /**
     * Static representation of the [[initiativeGroupBeanRowId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InitiativeAlignmentBean.INITIATIVE_GROUP_BEAN_ROW_ID = new core_1.BigNumberField('initiativeGroupBeanRowId', InitiativeAlignmentBean, 'Edm.Int64');
    /**
     * Static representation of the [[initiativeId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InitiativeAlignmentBean.INITIATIVE_ID = new core_1.BigNumberField('initiativeId', InitiativeAlignmentBean, 'Edm.Int64');
    /**
     * Static representation of the [[initiativeName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InitiativeAlignmentBean.INITIATIVE_NAME = new core_1.StringField('initiativeName', InitiativeAlignmentBean, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InitiativeAlignmentBean.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', InitiativeAlignmentBean, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InitiativeAlignmentBean.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', InitiativeAlignmentBean, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InitiativeAlignmentBean.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', InitiativeAlignmentBean, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InitiativeAlignmentBean.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', InitiativeAlignmentBean, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InitiativeAlignmentBean.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', InitiativeAlignmentBean, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InitiativeAlignmentBean.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', InitiativeAlignmentBean, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InitiativeAlignmentBean.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', InitiativeAlignmentBean, WfRequest_1.WfRequest);
    /**
     * All fields of the InitiativeAlignmentBean entity.
     */
    InitiativeAlignmentBean._allFields = [
        InitiativeAlignmentBean.CREATED_BY,
        InitiativeAlignmentBean.CREATED_DATE_TIME,
        InitiativeAlignmentBean.EXTERNAL_CODE,
        InitiativeAlignmentBean.GOAL_ID,
        InitiativeAlignmentBean.GOAL_NAME,
        InitiativeAlignmentBean.GOAL_TYPE,
        InitiativeAlignmentBean.INITIATIVE_GROUP_BEAN_ROW_ID,
        InitiativeAlignmentBean.INITIATIVE_ID,
        InitiativeAlignmentBean.INITIATIVE_NAME,
        InitiativeAlignmentBean.LAST_MODIFIED_BY,
        InitiativeAlignmentBean.LAST_MODIFIED_DATE_TIME,
        InitiativeAlignmentBean.MDF_SYSTEM_RECORD_STATUS,
        InitiativeAlignmentBean.CREATED_BY_NAV,
        InitiativeAlignmentBean.LAST_MODIFIED_BY_NAV,
        InitiativeAlignmentBean.MDF_SYSTEM_RECORD_STATUS_NAV,
        InitiativeAlignmentBean.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    InitiativeAlignmentBean.ALL_FIELDS = new core_1.AllFields('*', InitiativeAlignmentBean);
    /**
     * All key fields of the InitiativeAlignmentBean entity.
     */
    InitiativeAlignmentBean._keyFields = [InitiativeAlignmentBean.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property InitiativeAlignmentBean.
     */
    InitiativeAlignmentBean._keys = InitiativeAlignmentBean._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(InitiativeAlignmentBean = exports.InitiativeAlignmentBean || (exports.InitiativeAlignmentBean = {}));
exports.InitiativeAlignmentBean = InitiativeAlignmentBean;
//# sourceMappingURL=InitiativeAlignmentBean.js.map