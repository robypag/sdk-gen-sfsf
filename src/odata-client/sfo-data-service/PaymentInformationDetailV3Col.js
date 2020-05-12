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
var PaymentInformationDetailV3ColRequestBuilder_1 = require("./PaymentInformationDetailV3ColRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PaymentInformationDetailV3COL" of service "SFOData".
 */
var PaymentInformationDetailV3Col = /** @class */ (function (_super) {
    __extends(PaymentInformationDetailV3Col, _super);
    function PaymentInformationDetailV3Col() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PaymentInformationDetailV3Col`.
     * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Col`.
     */
    PaymentInformationDetailV3Col.builder = function () {
        return core_1.Entity.entityBuilder(PaymentInformationDetailV3Col);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PaymentInformationDetailV3Col` entity type.
     * @returns A `PaymentInformationDetailV3Col` request builder.
     */
    PaymentInformationDetailV3Col.requestBuilder = function () {
        return new PaymentInformationDetailV3ColRequestBuilder_1.PaymentInformationDetailV3ColRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PaymentInformationDetailV3Col`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Col`.
     */
    PaymentInformationDetailV3Col.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PaymentInformationDetailV3Col);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PaymentInformationDetailV3Col.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PaymentInformationDetailV3Col.
     */
    PaymentInformationDetailV3Col._entityName = 'PaymentInformationDetailV3COL';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PaymentInformationDetailV3Col.
     */
    PaymentInformationDetailV3Col._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PaymentInformationDetailV3Col._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PaymentInformationDetailV3Col;
}(core_1.Entity));
exports.PaymentInformationDetailV3Col = PaymentInformationDetailV3Col;
var MdfEnumValue_1 = require("./MdfEnumValue");
var User_1 = require("./User");
(function (PaymentInformationDetailV3Col) {
    /**
     * Static representation of the [[paymentInformationDetailV3ExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Col.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE = new core_1.BigNumberField('PaymentInformationDetailV3_externalCode', PaymentInformationDetailV3Col, 'Edm.Int64');
    /**
     * Static representation of the [[paymentInformationV3EffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Col.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE = new core_1.DateField('PaymentInformationV3_effectiveStartDate', PaymentInformationDetailV3Col, 'Edm.DateTime');
    /**
     * Static representation of the [[paymentInformationV3Worker]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Col.PAYMENT_INFORMATION_V_3_WORKER = new core_1.StringField('PaymentInformationV3_worker', PaymentInformationDetailV3Col, 'Edm.String');
    /**
     * Static representation of the [[accountType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Col.ACCOUNT_TYPE = new core_1.StringField('accountType', PaymentInformationDetailV3Col, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Col.CREATED_BY = new core_1.StringField('createdBy', PaymentInformationDetailV3Col, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Col.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PaymentInformationDetailV3Col, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Col.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', PaymentInformationDetailV3Col, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Col.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PaymentInformationDetailV3Col, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Col.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PaymentInformationDetailV3Col, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Col.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', PaymentInformationDetailV3Col, 'Edm.String');
    /**
     * Static representation of the [[newAccountIdType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Col.NEW_ACCOUNT_ID_TYPE = new core_1.StringField('newAccountIdType', PaymentInformationDetailV3Col, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[accountTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Col.ACCOUNT_TYPE_NAV = new core_1.OneToOneLink('accountTypeNav', PaymentInformationDetailV3Col, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Col.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', PaymentInformationDetailV3Col, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Col.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', PaymentInformationDetailV3Col, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Col.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', PaymentInformationDetailV3Col, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[newAccountIdTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Col.NEW_ACCOUNT_ID_TYPE_NAV = new core_1.OneToOneLink('newAccountIdTypeNav', PaymentInformationDetailV3Col, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the PaymentInformationDetailV3Col entity.
     */
    PaymentInformationDetailV3Col._allFields = [
        PaymentInformationDetailV3Col.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE,
        PaymentInformationDetailV3Col.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE,
        PaymentInformationDetailV3Col.PAYMENT_INFORMATION_V_3_WORKER,
        PaymentInformationDetailV3Col.ACCOUNT_TYPE,
        PaymentInformationDetailV3Col.CREATED_BY,
        PaymentInformationDetailV3Col.CREATED_DATE_TIME,
        PaymentInformationDetailV3Col.EXTERNAL_CODE,
        PaymentInformationDetailV3Col.LAST_MODIFIED_BY,
        PaymentInformationDetailV3Col.LAST_MODIFIED_DATE_TIME,
        PaymentInformationDetailV3Col.MDF_SYSTEM_RECORD_STATUS,
        PaymentInformationDetailV3Col.NEW_ACCOUNT_ID_TYPE,
        PaymentInformationDetailV3Col.ACCOUNT_TYPE_NAV,
        PaymentInformationDetailV3Col.CREATED_BY_NAV,
        PaymentInformationDetailV3Col.LAST_MODIFIED_BY_NAV,
        PaymentInformationDetailV3Col.MDF_SYSTEM_RECORD_STATUS_NAV,
        PaymentInformationDetailV3Col.NEW_ACCOUNT_ID_TYPE_NAV
    ];
    /**
     * All fields selector.
     */
    PaymentInformationDetailV3Col.ALL_FIELDS = new core_1.AllFields('*', PaymentInformationDetailV3Col);
    /**
     * All key fields of the PaymentInformationDetailV3Col entity.
     */
    PaymentInformationDetailV3Col._keyFields = [PaymentInformationDetailV3Col.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE, PaymentInformationDetailV3Col.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE, PaymentInformationDetailV3Col.PAYMENT_INFORMATION_V_3_WORKER, PaymentInformationDetailV3Col.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property PaymentInformationDetailV3Col.
     */
    PaymentInformationDetailV3Col._keys = PaymentInformationDetailV3Col._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PaymentInformationDetailV3Col = exports.PaymentInformationDetailV3Col || (exports.PaymentInformationDetailV3Col = {}));
exports.PaymentInformationDetailV3Col = PaymentInformationDetailV3Col;
//# sourceMappingURL=PaymentInformationDetailV3Col.js.map