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
var PaymentInformationDetailV3UsaRequestBuilder_1 = require("./PaymentInformationDetailV3UsaRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PaymentInformationDetailV3USA" of service "SFOData".
 */
var PaymentInformationDetailV3Usa = /** @class */ (function (_super) {
    __extends(PaymentInformationDetailV3Usa, _super);
    function PaymentInformationDetailV3Usa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PaymentInformationDetailV3Usa`.
     * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Usa`.
     */
    PaymentInformationDetailV3Usa.builder = function () {
        return core_1.Entity.entityBuilder(PaymentInformationDetailV3Usa);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PaymentInformationDetailV3Usa` entity type.
     * @returns A `PaymentInformationDetailV3Usa` request builder.
     */
    PaymentInformationDetailV3Usa.requestBuilder = function () {
        return new PaymentInformationDetailV3UsaRequestBuilder_1.PaymentInformationDetailV3UsaRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PaymentInformationDetailV3Usa`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Usa`.
     */
    PaymentInformationDetailV3Usa.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PaymentInformationDetailV3Usa);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PaymentInformationDetailV3Usa.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PaymentInformationDetailV3Usa.
     */
    PaymentInformationDetailV3Usa._entityName = 'PaymentInformationDetailV3USA';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PaymentInformationDetailV3Usa.
     */
    PaymentInformationDetailV3Usa._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PaymentInformationDetailV3Usa._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PaymentInformationDetailV3Usa;
}(core_1.Entity));
exports.PaymentInformationDetailV3Usa = PaymentInformationDetailV3Usa;
var MdfEnumValue_1 = require("./MdfEnumValue");
var User_1 = require("./User");
(function (PaymentInformationDetailV3Usa) {
    /**
     * Static representation of the [[paymentInformationDetailV3ExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Usa.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE = new core_1.BigNumberField('PaymentInformationDetailV3_externalCode', PaymentInformationDetailV3Usa, 'Edm.Int64');
    /**
     * Static representation of the [[paymentInformationV3EffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Usa.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE = new core_1.DateField('PaymentInformationV3_effectiveStartDate', PaymentInformationDetailV3Usa, 'Edm.DateTime');
    /**
     * Static representation of the [[paymentInformationV3Worker]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Usa.PAYMENT_INFORMATION_V_3_WORKER = new core_1.StringField('PaymentInformationV3_worker', PaymentInformationDetailV3Usa, 'Edm.String');
    /**
     * Static representation of the [[accountType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Usa.ACCOUNT_TYPE = new core_1.StringField('accountType', PaymentInformationDetailV3Usa, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Usa.CREATED_BY = new core_1.StringField('createdBy', PaymentInformationDetailV3Usa, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Usa.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PaymentInformationDetailV3Usa, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Usa.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', PaymentInformationDetailV3Usa, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Usa.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PaymentInformationDetailV3Usa, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Usa.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PaymentInformationDetailV3Usa, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Usa.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', PaymentInformationDetailV3Usa, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[accountTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Usa.ACCOUNT_TYPE_NAV = new core_1.OneToOneLink('accountTypeNav', PaymentInformationDetailV3Usa, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Usa.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', PaymentInformationDetailV3Usa, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Usa.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', PaymentInformationDetailV3Usa, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentInformationDetailV3Usa.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', PaymentInformationDetailV3Usa, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the PaymentInformationDetailV3Usa entity.
     */
    PaymentInformationDetailV3Usa._allFields = [
        PaymentInformationDetailV3Usa.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE,
        PaymentInformationDetailV3Usa.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE,
        PaymentInformationDetailV3Usa.PAYMENT_INFORMATION_V_3_WORKER,
        PaymentInformationDetailV3Usa.ACCOUNT_TYPE,
        PaymentInformationDetailV3Usa.CREATED_BY,
        PaymentInformationDetailV3Usa.CREATED_DATE_TIME,
        PaymentInformationDetailV3Usa.EXTERNAL_CODE,
        PaymentInformationDetailV3Usa.LAST_MODIFIED_BY,
        PaymentInformationDetailV3Usa.LAST_MODIFIED_DATE_TIME,
        PaymentInformationDetailV3Usa.MDF_SYSTEM_RECORD_STATUS,
        PaymentInformationDetailV3Usa.ACCOUNT_TYPE_NAV,
        PaymentInformationDetailV3Usa.CREATED_BY_NAV,
        PaymentInformationDetailV3Usa.LAST_MODIFIED_BY_NAV,
        PaymentInformationDetailV3Usa.MDF_SYSTEM_RECORD_STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    PaymentInformationDetailV3Usa.ALL_FIELDS = new core_1.AllFields('*', PaymentInformationDetailV3Usa);
    /**
     * All key fields of the PaymentInformationDetailV3Usa entity.
     */
    PaymentInformationDetailV3Usa._keyFields = [PaymentInformationDetailV3Usa.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE, PaymentInformationDetailV3Usa.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE, PaymentInformationDetailV3Usa.PAYMENT_INFORMATION_V_3_WORKER, PaymentInformationDetailV3Usa.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property PaymentInformationDetailV3Usa.
     */
    PaymentInformationDetailV3Usa._keys = PaymentInformationDetailV3Usa._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PaymentInformationDetailV3Usa = exports.PaymentInformationDetailV3Usa || (exports.PaymentInformationDetailV3Usa = {}));
exports.PaymentInformationDetailV3Usa = PaymentInformationDetailV3Usa;
//# sourceMappingURL=PaymentInformationDetailV3Usa.js.map