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
var EmpPayCompRecurringRequestBuilder_1 = require("./EmpPayCompRecurringRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EmpPayCompRecurring" of service "SFOData".
 */
var EmpPayCompRecurring = /** @class */ (function (_super) {
    __extends(EmpPayCompRecurring, _super);
    function EmpPayCompRecurring() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmpPayCompRecurring`.
     * @returns A builder that constructs instances of entity type `EmpPayCompRecurring`.
     */
    EmpPayCompRecurring.builder = function () {
        return core_1.Entity.entityBuilder(EmpPayCompRecurring);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmpPayCompRecurring` entity type.
     * @returns A `EmpPayCompRecurring` request builder.
     */
    EmpPayCompRecurring.requestBuilder = function () {
        return new EmpPayCompRecurringRequestBuilder_1.EmpPayCompRecurringRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmpPayCompRecurring`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmpPayCompRecurring`.
     */
    EmpPayCompRecurring.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EmpPayCompRecurring);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmpPayCompRecurring.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmpPayCompRecurring.
     */
    EmpPayCompRecurring._entityName = 'EmpPayCompRecurring';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmpPayCompRecurring.
     */
    EmpPayCompRecurring._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmpPayCompRecurring._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return EmpPayCompRecurring;
}(core_1.Entity));
exports.EmpPayCompRecurring = EmpPayCompRecurring;
var EmpCompensation_1 = require("./EmpCompensation");
var EmpEmployment_1 = require("./EmpEmployment");
var FoFrequency_1 = require("./FoFrequency");
var FoPayComponent_1 = require("./FoPayComponent");
var User_1 = require("./User");
(function (EmpPayCompRecurring) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpPayCompRecurring.CREATED_BY = new core_1.StringField('createdBy', EmpPayCompRecurring, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpPayCompRecurring.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', EmpPayCompRecurring, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpPayCompRecurring.CREATED_ON = new core_1.DateField('createdOn', EmpPayCompRecurring, 'Edm.DateTime');
    /**
     * Static representation of the [[currencyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpPayCompRecurring.CURRENCY_CODE = new core_1.StringField('currencyCode', EmpPayCompRecurring, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpPayCompRecurring.END_DATE = new core_1.DateField('endDate', EmpPayCompRecurring, 'Edm.DateTime');
    /**
     * Static representation of the [[frequency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpPayCompRecurring.FREQUENCY = new core_1.StringField('frequency', EmpPayCompRecurring, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpPayCompRecurring.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', EmpPayCompRecurring, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpPayCompRecurring.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', EmpPayCompRecurring, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpPayCompRecurring.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', EmpPayCompRecurring, 'Edm.DateTime');
    /**
     * Static representation of the [[notes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpPayCompRecurring.NOTES = new core_1.StringField('notes', EmpPayCompRecurring, 'Edm.String');
    /**
     * Static representation of the [[operation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpPayCompRecurring.OPERATION = new core_1.StringField('operation', EmpPayCompRecurring, 'Edm.String');
    /**
     * Static representation of the [[payComponent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpPayCompRecurring.PAY_COMPONENT = new core_1.StringField('payComponent', EmpPayCompRecurring, 'Edm.String');
    /**
     * Static representation of the [[paycompvalue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpPayCompRecurring.PAYCOMPVALUE = new core_1.NumberField('paycompvalue', EmpPayCompRecurring, 'Edm.Double');
    /**
     * Static representation of the [[seqNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpPayCompRecurring.SEQ_NUMBER = new core_1.BigNumberField('seqNumber', EmpPayCompRecurring, 'Edm.Int64');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpPayCompRecurring.START_DATE = new core_1.DateField('startDate', EmpPayCompRecurring, 'Edm.DateTime');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpPayCompRecurring.USER_ID = new core_1.StringField('userId', EmpPayCompRecurring, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[compensationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpPayCompRecurring.COMPENSATION_NAV = new core_1.OneToOneLink('compensationNav', EmpPayCompRecurring, EmpCompensation_1.EmpCompensation);
    /**
     * Static representation of the one-to-one navigation property [[employmentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpPayCompRecurring.EMPLOYMENT_NAV = new core_1.OneToOneLink('employmentNav', EmpPayCompRecurring, EmpEmployment_1.EmpEmployment);
    /**
     * Static representation of the one-to-one navigation property [[frequencyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpPayCompRecurring.FREQUENCY_NAV = new core_1.OneToOneLink('frequencyNav', EmpPayCompRecurring, FoFrequency_1.FoFrequency);
    /**
     * Static representation of the one-to-one navigation property [[payComponentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpPayCompRecurring.PAY_COMPONENT_NAV = new core_1.OneToOneLink('payComponentNav', EmpPayCompRecurring, FoPayComponent_1.FoPayComponent);
    /**
     * Static representation of the one-to-one navigation property [[userNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpPayCompRecurring.USER_NAV = new core_1.OneToOneLink('userNav', EmpPayCompRecurring, User_1.User);
    /**
     * All fields of the EmpPayCompRecurring entity.
     */
    EmpPayCompRecurring._allFields = [
        EmpPayCompRecurring.CREATED_BY,
        EmpPayCompRecurring.CREATED_DATE_TIME,
        EmpPayCompRecurring.CREATED_ON,
        EmpPayCompRecurring.CURRENCY_CODE,
        EmpPayCompRecurring.END_DATE,
        EmpPayCompRecurring.FREQUENCY,
        EmpPayCompRecurring.LAST_MODIFIED_BY,
        EmpPayCompRecurring.LAST_MODIFIED_DATE_TIME,
        EmpPayCompRecurring.LAST_MODIFIED_ON,
        EmpPayCompRecurring.NOTES,
        EmpPayCompRecurring.OPERATION,
        EmpPayCompRecurring.PAY_COMPONENT,
        EmpPayCompRecurring.PAYCOMPVALUE,
        EmpPayCompRecurring.SEQ_NUMBER,
        EmpPayCompRecurring.START_DATE,
        EmpPayCompRecurring.USER_ID,
        EmpPayCompRecurring.COMPENSATION_NAV,
        EmpPayCompRecurring.EMPLOYMENT_NAV,
        EmpPayCompRecurring.FREQUENCY_NAV,
        EmpPayCompRecurring.PAY_COMPONENT_NAV,
        EmpPayCompRecurring.USER_NAV
    ];
    /**
     * All fields selector.
     */
    EmpPayCompRecurring.ALL_FIELDS = new core_1.AllFields('*', EmpPayCompRecurring);
    /**
     * All key fields of the EmpPayCompRecurring entity.
     */
    EmpPayCompRecurring._keyFields = [EmpPayCompRecurring.PAY_COMPONENT, EmpPayCompRecurring.SEQ_NUMBER, EmpPayCompRecurring.START_DATE, EmpPayCompRecurring.USER_ID];
    /**
     * Mapping of all key field names to the respective static field property EmpPayCompRecurring.
     */
    EmpPayCompRecurring._keys = EmpPayCompRecurring._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmpPayCompRecurring = exports.EmpPayCompRecurring || (exports.EmpPayCompRecurring = {}));
exports.EmpPayCompRecurring = EmpPayCompRecurring;
//# sourceMappingURL=EmpPayCompRecurring.js.map