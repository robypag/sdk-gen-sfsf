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
var AutoDelegateDetailRequestBuilder_1 = require("./AutoDelegateDetailRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "AutoDelegateDetail" of service "SFOData".
 */
var AutoDelegateDetail = /** @class */ (function (_super) {
    __extends(AutoDelegateDetail, _super);
    function AutoDelegateDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `AutoDelegateDetail`.
     * @returns A builder that constructs instances of entity type `AutoDelegateDetail`.
     */
    AutoDelegateDetail.builder = function () {
        return core_1.Entity.entityBuilder(AutoDelegateDetail);
    };
    /**
     * Returns a request builder to construct requests for operations on the `AutoDelegateDetail` entity type.
     * @returns A `AutoDelegateDetail` request builder.
     */
    AutoDelegateDetail.requestBuilder = function () {
        return new AutoDelegateDetailRequestBuilder_1.AutoDelegateDetailRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AutoDelegateDetail`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AutoDelegateDetail`.
     */
    AutoDelegateDetail.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, AutoDelegateDetail);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    AutoDelegateDetail.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for AutoDelegateDetail.
     */
    AutoDelegateDetail._entityName = 'AutoDelegateDetail';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for AutoDelegateDetail.
     */
    AutoDelegateDetail._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    AutoDelegateDetail._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return AutoDelegateDetail;
}(core_1.Entity));
exports.AutoDelegateDetail = AutoDelegateDetail;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (AutoDelegateDetail) {
    /**
     * Static representation of the [[autoDelegateConfigDelegator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AutoDelegateDetail.AUTO_DELEGATE_CONFIG_DELEGATOR = new core_1.StringField('AutoDelegateConfig_delegator', AutoDelegateDetail, 'Edm.String');
    /**
     * Static representation of the [[alwaysOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AutoDelegateDetail.ALWAYS_ON = new core_1.BooleanField('alwaysOn', AutoDelegateDetail, 'Edm.Boolean');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AutoDelegateDetail.CREATED_BY = new core_1.StringField('createdBy', AutoDelegateDetail, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AutoDelegateDetail.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', AutoDelegateDetail, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[delegatee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AutoDelegateDetail.DELEGATEE = new core_1.StringField('delegatee', AutoDelegateDetail, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AutoDelegateDetail.EXTERNAL_CODE = new core_1.StringField('externalCode', AutoDelegateDetail, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AutoDelegateDetail.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', AutoDelegateDetail, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AutoDelegateDetail.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', AutoDelegateDetail, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AutoDelegateDetail.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', AutoDelegateDetail, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AutoDelegateDetail.STATUS = new core_1.StringField('status', AutoDelegateDetail, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AutoDelegateDetail.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', AutoDelegateDetail, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[delegateeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AutoDelegateDetail.DELEGATEE_NAV = new core_1.OneToOneLink('delegateeNav', AutoDelegateDetail, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AutoDelegateDetail.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', AutoDelegateDetail, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AutoDelegateDetail.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', AutoDelegateDetail, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AutoDelegateDetail.STATUS_NAV = new core_1.OneToOneLink('statusNav', AutoDelegateDetail, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the AutoDelegateDetail entity.
     */
    AutoDelegateDetail._allFields = [
        AutoDelegateDetail.AUTO_DELEGATE_CONFIG_DELEGATOR,
        AutoDelegateDetail.ALWAYS_ON,
        AutoDelegateDetail.CREATED_BY,
        AutoDelegateDetail.CREATED_DATE_TIME,
        AutoDelegateDetail.DELEGATEE,
        AutoDelegateDetail.EXTERNAL_CODE,
        AutoDelegateDetail.LAST_MODIFIED_BY,
        AutoDelegateDetail.LAST_MODIFIED_DATE_TIME,
        AutoDelegateDetail.MDF_SYSTEM_RECORD_STATUS,
        AutoDelegateDetail.STATUS,
        AutoDelegateDetail.CREATED_BY_NAV,
        AutoDelegateDetail.DELEGATEE_NAV,
        AutoDelegateDetail.LAST_MODIFIED_BY_NAV,
        AutoDelegateDetail.MDF_SYSTEM_RECORD_STATUS_NAV,
        AutoDelegateDetail.STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    AutoDelegateDetail.ALL_FIELDS = new core_1.AllFields('*', AutoDelegateDetail);
    /**
     * All key fields of the AutoDelegateDetail entity.
     */
    AutoDelegateDetail._keyFields = [AutoDelegateDetail.AUTO_DELEGATE_CONFIG_DELEGATOR, AutoDelegateDetail.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property AutoDelegateDetail.
     */
    AutoDelegateDetail._keys = AutoDelegateDetail._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(AutoDelegateDetail = exports.AutoDelegateDetail || (exports.AutoDelegateDetail = {}));
exports.AutoDelegateDetail = AutoDelegateDetail;
//# sourceMappingURL=AutoDelegateDetail.js.map