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
var TimeAccountRequestBuilder_1 = require("./TimeAccountRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "TimeAccount" of service "SFOData".
 */
var TimeAccount = /** @class */ (function (_super) {
    __extends(TimeAccount, _super);
    function TimeAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `TimeAccount`.
     * @returns A builder that constructs instances of entity type `TimeAccount`.
     */
    TimeAccount.builder = function () {
        return core_1.Entity.entityBuilder(TimeAccount);
    };
    /**
     * Returns a request builder to construct requests for operations on the `TimeAccount` entity type.
     * @returns A `TimeAccount` request builder.
     */
    TimeAccount.requestBuilder = function () {
        return new TimeAccountRequestBuilder_1.TimeAccountRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeAccount`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TimeAccount`.
     */
    TimeAccount.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, TimeAccount);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    TimeAccount.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for TimeAccount.
     */
    TimeAccount._entityName = 'TimeAccount';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TimeAccount.
     */
    TimeAccount._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    TimeAccount._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return TimeAccount;
}(core_1.Entity));
exports.TimeAccount = TimeAccount;
var TimeAccountType_1 = require("./TimeAccountType");
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var TimeAccountDetail_1 = require("./TimeAccountDetail");
var WfRequest_1 = require("./WfRequest");
(function (TimeAccount) {
    /**
     * Static representation of the [[accountClosed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccount.ACCOUNT_CLOSED = new core_1.BooleanField('accountClosed', TimeAccount, 'Edm.Boolean');
    /**
     * Static representation of the [[accountType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccount.ACCOUNT_TYPE = new core_1.StringField('accountType', TimeAccount, 'Edm.String');
    /**
     * Static representation of the [[bookingEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccount.BOOKING_END_DATE = new core_1.DateField('bookingEndDate', TimeAccount, 'Edm.DateTime');
    /**
     * Static representation of the [[bookingStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccount.BOOKING_START_DATE = new core_1.DateField('bookingStartDate', TimeAccount, 'Edm.DateTime');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccount.CREATED_BY = new core_1.StringField('createdBy', TimeAccount, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccount.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', TimeAccount, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccount.END_DATE = new core_1.DateField('endDate', TimeAccount, 'Edm.DateTime');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccount.EXTERNAL_CODE = new core_1.StringField('externalCode', TimeAccount, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccount.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', TimeAccount, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccount.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', TimeAccount, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccount.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', TimeAccount, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccount.START_DATE = new core_1.DateField('startDate', TimeAccount, 'Edm.DateTime');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccount.USER_ID = new core_1.StringField('userId', TimeAccount, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[accountTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccount.ACCOUNT_TYPE_NAV = new core_1.OneToOneLink('accountTypeNav', TimeAccount, TimeAccountType_1.TimeAccountType);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccount.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', TimeAccount, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccount.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', TimeAccount, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccount.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', TimeAccount, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[timeAccountDetails]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccount.TIME_ACCOUNT_DETAILS = new core_1.Link('timeAccountDetails', TimeAccount, TimeAccountDetail_1.TimeAccountDetail);
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccount.USER_ID_NAV = new core_1.OneToOneLink('userIdNav', TimeAccount, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TimeAccount.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', TimeAccount, WfRequest_1.WfRequest);
    /**
     * All fields of the TimeAccount entity.
     */
    TimeAccount._allFields = [
        TimeAccount.ACCOUNT_CLOSED,
        TimeAccount.ACCOUNT_TYPE,
        TimeAccount.BOOKING_END_DATE,
        TimeAccount.BOOKING_START_DATE,
        TimeAccount.CREATED_BY,
        TimeAccount.CREATED_DATE_TIME,
        TimeAccount.END_DATE,
        TimeAccount.EXTERNAL_CODE,
        TimeAccount.LAST_MODIFIED_BY,
        TimeAccount.LAST_MODIFIED_DATE_TIME,
        TimeAccount.MDF_SYSTEM_RECORD_STATUS,
        TimeAccount.START_DATE,
        TimeAccount.USER_ID,
        TimeAccount.ACCOUNT_TYPE_NAV,
        TimeAccount.CREATED_BY_NAV,
        TimeAccount.LAST_MODIFIED_BY_NAV,
        TimeAccount.MDF_SYSTEM_RECORD_STATUS_NAV,
        TimeAccount.TIME_ACCOUNT_DETAILS,
        TimeAccount.USER_ID_NAV,
        TimeAccount.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    TimeAccount.ALL_FIELDS = new core_1.AllFields('*', TimeAccount);
    /**
     * All key fields of the TimeAccount entity.
     */
    TimeAccount._keyFields = [TimeAccount.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property TimeAccount.
     */
    TimeAccount._keys = TimeAccount._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(TimeAccount = exports.TimeAccount || (exports.TimeAccount = {}));
exports.TimeAccount = TimeAccount;
//# sourceMappingURL=TimeAccount.js.map