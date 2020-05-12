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
var PayScalePayComponentRequestBuilder_1 = require("./PayScalePayComponentRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PayScalePayComponent" of service "SFOData".
 */
var PayScalePayComponent = /** @class */ (function (_super) {
    __extends(PayScalePayComponent, _super);
    function PayScalePayComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PayScalePayComponent`.
     * @returns A builder that constructs instances of entity type `PayScalePayComponent`.
     */
    PayScalePayComponent.builder = function () {
        return core_1.Entity.entityBuilder(PayScalePayComponent);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PayScalePayComponent` entity type.
     * @returns A `PayScalePayComponent` request builder.
     */
    PayScalePayComponent.requestBuilder = function () {
        return new PayScalePayComponentRequestBuilder_1.PayScalePayComponentRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PayScalePayComponent`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PayScalePayComponent`.
     */
    PayScalePayComponent.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PayScalePayComponent);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PayScalePayComponent.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PayScalePayComponent.
     */
    PayScalePayComponent._entityName = 'PayScalePayComponent';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PayScalePayComponent.
     */
    PayScalePayComponent._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PayScalePayComponent._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PayScalePayComponent;
}(core_1.Entity));
exports.PayScalePayComponent = PayScalePayComponent;
var FoPayComponent_1 = require("./FoPayComponent");
var User_1 = require("./User");
var Currency_1 = require("./Currency");
var FoFrequency_1 = require("./FoFrequency");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (PayScalePayComponent) {
    /**
     * Static representation of the [[payScaleLevelCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScalePayComponent.PAY_SCALE_LEVEL_CODE = new core_1.StringField('PayScaleLevel_code', PayScalePayComponent, 'Edm.String');
    /**
     * Static representation of the [[payScaleLevelEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScalePayComponent.PAY_SCALE_LEVEL_EFFECTIVE_START_DATE = new core_1.DateField('PayScaleLevel_effectiveStartDate', PayScalePayComponent, 'Edm.DateTime');
    /**
     * Static representation of the [[amount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScalePayComponent.AMOUNT = new core_1.BigNumberField('amount', PayScalePayComponent, 'Edm.Decimal');
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScalePayComponent.CODE = new core_1.StringField('code', PayScalePayComponent, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScalePayComponent.CREATED_BY = new core_1.StringField('createdBy', PayScalePayComponent, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScalePayComponent.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PayScalePayComponent, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScalePayComponent.CURRENCY = new core_1.StringField('currency', PayScalePayComponent, 'Edm.String');
    /**
     * Static representation of the [[frequency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScalePayComponent.FREQUENCY = new core_1.StringField('frequency', PayScalePayComponent, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScalePayComponent.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PayScalePayComponent, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScalePayComponent.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PayScalePayComponent, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScalePayComponent.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', PayScalePayComponent, 'Edm.String');
    /**
     * Static representation of the [[number]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScalePayComponent.NUMBER = new core_1.BigNumberField('number', PayScalePayComponent, 'Edm.Decimal');
    /**
     * Static representation of the [[percentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScalePayComponent.PERCENTAGE = new core_1.BigNumberField('percentage', PayScalePayComponent, 'Edm.Decimal');
    /**
     * Static representation of the [[rate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScalePayComponent.RATE = new core_1.BigNumberField('rate', PayScalePayComponent, 'Edm.Decimal');
    /**
     * Static representation of the [[unit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScalePayComponent.UNIT = new core_1.StringField('unit', PayScalePayComponent, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[codeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScalePayComponent.CODE_NAV = new core_1.Link('codeNav', PayScalePayComponent, FoPayComponent_1.FoPayComponent);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScalePayComponent.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', PayScalePayComponent, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[currencyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScalePayComponent.CURRENCY_NAV = new core_1.Link('currencyNav', PayScalePayComponent, Currency_1.Currency);
    /**
     * Static representation of the one-to-one navigation property [[frequencyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScalePayComponent.FREQUENCY_NAV = new core_1.OneToOneLink('frequencyNav', PayScalePayComponent, FoFrequency_1.FoFrequency);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScalePayComponent.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', PayScalePayComponent, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PayScalePayComponent.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', PayScalePayComponent, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the PayScalePayComponent entity.
     */
    PayScalePayComponent._allFields = [
        PayScalePayComponent.PAY_SCALE_LEVEL_CODE,
        PayScalePayComponent.PAY_SCALE_LEVEL_EFFECTIVE_START_DATE,
        PayScalePayComponent.AMOUNT,
        PayScalePayComponent.CODE,
        PayScalePayComponent.CREATED_BY,
        PayScalePayComponent.CREATED_DATE_TIME,
        PayScalePayComponent.CURRENCY,
        PayScalePayComponent.FREQUENCY,
        PayScalePayComponent.LAST_MODIFIED_BY,
        PayScalePayComponent.LAST_MODIFIED_DATE_TIME,
        PayScalePayComponent.MDF_SYSTEM_RECORD_STATUS,
        PayScalePayComponent.NUMBER,
        PayScalePayComponent.PERCENTAGE,
        PayScalePayComponent.RATE,
        PayScalePayComponent.UNIT,
        PayScalePayComponent.CODE_NAV,
        PayScalePayComponent.CREATED_BY_NAV,
        PayScalePayComponent.CURRENCY_NAV,
        PayScalePayComponent.FREQUENCY_NAV,
        PayScalePayComponent.LAST_MODIFIED_BY_NAV,
        PayScalePayComponent.MDF_SYSTEM_RECORD_STATUS_NAV
    ];
    /**
     * All fields selector.
     */
    PayScalePayComponent.ALL_FIELDS = new core_1.AllFields('*', PayScalePayComponent);
    /**
     * All key fields of the PayScalePayComponent entity.
     */
    PayScalePayComponent._keyFields = [PayScalePayComponent.PAY_SCALE_LEVEL_CODE, PayScalePayComponent.PAY_SCALE_LEVEL_EFFECTIVE_START_DATE, PayScalePayComponent.CODE];
    /**
     * Mapping of all key field names to the respective static field property PayScalePayComponent.
     */
    PayScalePayComponent._keys = PayScalePayComponent._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PayScalePayComponent = exports.PayScalePayComponent || (exports.PayScalePayComponent = {}));
exports.PayScalePayComponent = PayScalePayComponent;
//# sourceMappingURL=PayScalePayComponent.js.map