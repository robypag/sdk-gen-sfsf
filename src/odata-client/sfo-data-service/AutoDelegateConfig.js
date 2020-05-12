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
var AutoDelegateConfigRequestBuilder_1 = require("./AutoDelegateConfigRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "AutoDelegateConfig" of service "SFOData".
 */
var AutoDelegateConfig = /** @class */ (function (_super) {
    __extends(AutoDelegateConfig, _super);
    function AutoDelegateConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `AutoDelegateConfig`.
     * @returns A builder that constructs instances of entity type `AutoDelegateConfig`.
     */
    AutoDelegateConfig.builder = function () {
        return core_1.Entity.entityBuilder(AutoDelegateConfig);
    };
    /**
     * Returns a request builder to construct requests for operations on the `AutoDelegateConfig` entity type.
     * @returns A `AutoDelegateConfig` request builder.
     */
    AutoDelegateConfig.requestBuilder = function () {
        return new AutoDelegateConfigRequestBuilder_1.AutoDelegateConfigRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AutoDelegateConfig`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AutoDelegateConfig`.
     */
    AutoDelegateConfig.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, AutoDelegateConfig);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    AutoDelegateConfig.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for AutoDelegateConfig.
     */
    AutoDelegateConfig._entityName = 'AutoDelegateConfig';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for AutoDelegateConfig.
     */
    AutoDelegateConfig._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    AutoDelegateConfig._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return AutoDelegateConfig;
}(core_1.Entity));
exports.AutoDelegateConfig = AutoDelegateConfig;
var AutoDelegateDetail_1 = require("./AutoDelegateDetail");
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var WfRequest_1 = require("./WfRequest");
(function (AutoDelegateConfig) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AutoDelegateConfig.CREATED_BY = new core_1.StringField('createdBy', AutoDelegateConfig, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AutoDelegateConfig.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', AutoDelegateConfig, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[delegationStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AutoDelegateConfig.DELEGATION_STATUS = new core_1.StringField('delegationStatus', AutoDelegateConfig, 'Edm.String');
    /**
     * Static representation of the [[delegator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AutoDelegateConfig.DELEGATOR = new core_1.StringField('delegator', AutoDelegateConfig, 'Edm.String');
    /**
     * Static representation of the [[endTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AutoDelegateConfig.END_TIME = new core_1.DateField('endTime', AutoDelegateConfig, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AutoDelegateConfig.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', AutoDelegateConfig, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AutoDelegateConfig.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', AutoDelegateConfig, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AutoDelegateConfig.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', AutoDelegateConfig, 'Edm.String');
    /**
     * Static representation of the [[optimisticLockUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AutoDelegateConfig.OPTIMISTIC_LOCK_UUID = new core_1.StringField('optimisticLockUUID', AutoDelegateConfig, 'Edm.String');
    /**
     * Static representation of the [[startTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AutoDelegateConfig.START_TIME = new core_1.DateField('startTime', AutoDelegateConfig, 'Edm.DateTimeOffset');
    /**
     * Static representation of the one-to-many navigation property [[autoDelegateDetails]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AutoDelegateConfig.AUTO_DELEGATE_DETAILS = new core_1.Link('autoDelegateDetails', AutoDelegateConfig, AutoDelegateDetail_1.AutoDelegateDetail);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AutoDelegateConfig.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', AutoDelegateConfig, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[delegationStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AutoDelegateConfig.DELEGATION_STATUS_NAV = new core_1.OneToOneLink('delegationStatusNav', AutoDelegateConfig, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[delegatorNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AutoDelegateConfig.DELEGATOR_NAV = new core_1.OneToOneLink('delegatorNav', AutoDelegateConfig, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AutoDelegateConfig.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', AutoDelegateConfig, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AutoDelegateConfig.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', AutoDelegateConfig, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AutoDelegateConfig.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', AutoDelegateConfig, WfRequest_1.WfRequest);
    /**
     * All fields of the AutoDelegateConfig entity.
     */
    AutoDelegateConfig._allFields = [
        AutoDelegateConfig.CREATED_BY,
        AutoDelegateConfig.CREATED_DATE_TIME,
        AutoDelegateConfig.DELEGATION_STATUS,
        AutoDelegateConfig.DELEGATOR,
        AutoDelegateConfig.END_TIME,
        AutoDelegateConfig.LAST_MODIFIED_BY,
        AutoDelegateConfig.LAST_MODIFIED_DATE_TIME,
        AutoDelegateConfig.MDF_SYSTEM_RECORD_STATUS,
        AutoDelegateConfig.OPTIMISTIC_LOCK_UUID,
        AutoDelegateConfig.START_TIME,
        AutoDelegateConfig.AUTO_DELEGATE_DETAILS,
        AutoDelegateConfig.CREATED_BY_NAV,
        AutoDelegateConfig.DELEGATION_STATUS_NAV,
        AutoDelegateConfig.DELEGATOR_NAV,
        AutoDelegateConfig.LAST_MODIFIED_BY_NAV,
        AutoDelegateConfig.MDF_SYSTEM_RECORD_STATUS_NAV,
        AutoDelegateConfig.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    AutoDelegateConfig.ALL_FIELDS = new core_1.AllFields('*', AutoDelegateConfig);
    /**
     * All key fields of the AutoDelegateConfig entity.
     */
    AutoDelegateConfig._keyFields = [AutoDelegateConfig.DELEGATOR];
    /**
     * Mapping of all key field names to the respective static field property AutoDelegateConfig.
     */
    AutoDelegateConfig._keys = AutoDelegateConfig._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(AutoDelegateConfig = exports.AutoDelegateConfig || (exports.AutoDelegateConfig = {}));
exports.AutoDelegateConfig = AutoDelegateConfig;
//# sourceMappingURL=AutoDelegateConfig.js.map