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
var EmpCompensationGroupSumCalculatedRequestBuilder_1 = require("./EmpCompensationGroupSumCalculatedRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EmpCompensationGroupSumCalculated" of service "SFOData".
 */
var EmpCompensationGroupSumCalculated = /** @class */ (function (_super) {
    __extends(EmpCompensationGroupSumCalculated, _super);
    function EmpCompensationGroupSumCalculated() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmpCompensationGroupSumCalculated`.
     * @returns A builder that constructs instances of entity type `EmpCompensationGroupSumCalculated`.
     */
    EmpCompensationGroupSumCalculated.builder = function () {
        return core_1.Entity.entityBuilder(EmpCompensationGroupSumCalculated);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmpCompensationGroupSumCalculated` entity type.
     * @returns A `EmpCompensationGroupSumCalculated` request builder.
     */
    EmpCompensationGroupSumCalculated.requestBuilder = function () {
        return new EmpCompensationGroupSumCalculatedRequestBuilder_1.EmpCompensationGroupSumCalculatedRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmpCompensationGroupSumCalculated`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmpCompensationGroupSumCalculated`.
     */
    EmpCompensationGroupSumCalculated.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EmpCompensationGroupSumCalculated);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmpCompensationGroupSumCalculated.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmpCompensationGroupSumCalculated.
     */
    EmpCompensationGroupSumCalculated._entityName = 'EmpCompensationGroupSumCalculated';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmpCompensationGroupSumCalculated.
     */
    EmpCompensationGroupSumCalculated._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmpCompensationGroupSumCalculated._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return EmpCompensationGroupSumCalculated;
}(core_1.Entity));
exports.EmpCompensationGroupSumCalculated = EmpCompensationGroupSumCalculated;
(function (EmpCompensationGroupSumCalculated) {
    /**
     * Static representation of the [[amount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCompensationGroupSumCalculated.AMOUNT = new core_1.NumberField('amount', EmpCompensationGroupSumCalculated, 'Edm.Double');
    /**
     * Static representation of the [[currencyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCompensationGroupSumCalculated.CURRENCY_CODE = new core_1.StringField('currencyCode', EmpCompensationGroupSumCalculated, 'Edm.String');
    /**
     * Static representation of the [[errorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCompensationGroupSumCalculated.ERROR_CODE = new core_1.StringField('errorCode', EmpCompensationGroupSumCalculated, 'Edm.String');
    /**
     * Static representation of the [[errorMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCompensationGroupSumCalculated.ERROR_MESSAGE = new core_1.StringField('errorMessage', EmpCompensationGroupSumCalculated, 'Edm.String');
    /**
     * Static representation of the [[payComponentGroupId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCompensationGroupSumCalculated.PAY_COMPONENT_GROUP_ID = new core_1.StringField('payComponentGroupId', EmpCompensationGroupSumCalculated, 'Edm.String');
    /**
     * Static representation of the [[seqNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCompensationGroupSumCalculated.SEQ_NUMBER = new core_1.BigNumberField('seqNumber', EmpCompensationGroupSumCalculated, 'Edm.Int64');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCompensationGroupSumCalculated.START_DATE = new core_1.DateField('startDate', EmpCompensationGroupSumCalculated, 'Edm.DateTime');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCompensationGroupSumCalculated.USER_ID = new core_1.StringField('userId', EmpCompensationGroupSumCalculated, 'Edm.String');
    /**
     * All fields of the EmpCompensationGroupSumCalculated entity.
     */
    EmpCompensationGroupSumCalculated._allFields = [
        EmpCompensationGroupSumCalculated.AMOUNT,
        EmpCompensationGroupSumCalculated.CURRENCY_CODE,
        EmpCompensationGroupSumCalculated.ERROR_CODE,
        EmpCompensationGroupSumCalculated.ERROR_MESSAGE,
        EmpCompensationGroupSumCalculated.PAY_COMPONENT_GROUP_ID,
        EmpCompensationGroupSumCalculated.SEQ_NUMBER,
        EmpCompensationGroupSumCalculated.START_DATE,
        EmpCompensationGroupSumCalculated.USER_ID
    ];
    /**
     * All fields selector.
     */
    EmpCompensationGroupSumCalculated.ALL_FIELDS = new core_1.AllFields('*', EmpCompensationGroupSumCalculated);
    /**
     * All key fields of the EmpCompensationGroupSumCalculated entity.
     */
    EmpCompensationGroupSumCalculated._keyFields = [EmpCompensationGroupSumCalculated.SEQ_NUMBER, EmpCompensationGroupSumCalculated.START_DATE, EmpCompensationGroupSumCalculated.USER_ID];
    /**
     * Mapping of all key field names to the respective static field property EmpCompensationGroupSumCalculated.
     */
    EmpCompensationGroupSumCalculated._keys = EmpCompensationGroupSumCalculated._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmpCompensationGroupSumCalculated = exports.EmpCompensationGroupSumCalculated || (exports.EmpCompensationGroupSumCalculated = {}));
exports.EmpCompensationGroupSumCalculated = EmpCompensationGroupSumCalculated;
//# sourceMappingURL=EmpCompensationGroupSumCalculated.js.map