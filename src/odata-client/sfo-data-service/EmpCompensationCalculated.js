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
var EmpCompensationCalculatedRequestBuilder_1 = require("./EmpCompensationCalculatedRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EmpCompensationCalculated" of service "SFOData".
 */
var EmpCompensationCalculated = /** @class */ (function (_super) {
    __extends(EmpCompensationCalculated, _super);
    function EmpCompensationCalculated() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmpCompensationCalculated`.
     * @returns A builder that constructs instances of entity type `EmpCompensationCalculated`.
     */
    EmpCompensationCalculated.builder = function () {
        return core_1.Entity.entityBuilder(EmpCompensationCalculated);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmpCompensationCalculated` entity type.
     * @returns A `EmpCompensationCalculated` request builder.
     */
    EmpCompensationCalculated.requestBuilder = function () {
        return new EmpCompensationCalculatedRequestBuilder_1.EmpCompensationCalculatedRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmpCompensationCalculated`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmpCompensationCalculated`.
     */
    EmpCompensationCalculated.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EmpCompensationCalculated);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmpCompensationCalculated.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmpCompensationCalculated.
     */
    EmpCompensationCalculated._entityName = 'EmpCompensationCalculated';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmpCompensationCalculated.
     */
    EmpCompensationCalculated._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmpCompensationCalculated._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return EmpCompensationCalculated;
}(core_1.Entity));
exports.EmpCompensationCalculated = EmpCompensationCalculated;
(function (EmpCompensationCalculated) {
    /**
     * Static representation of the [[compaRatio]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCompensationCalculated.COMPA_RATIO = new core_1.NumberField('compaRatio', EmpCompensationCalculated, 'Edm.Double');
    /**
     * Static representation of the [[errorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCompensationCalculated.ERROR_CODE = new core_1.StringField('errorCode', EmpCompensationCalculated, 'Edm.String');
    /**
     * Static representation of the [[errorMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCompensationCalculated.ERROR_MESSAGE = new core_1.StringField('errorMessage', EmpCompensationCalculated, 'Edm.String');
    /**
     * Static representation of the [[rangePenetration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCompensationCalculated.RANGE_PENETRATION = new core_1.NumberField('rangePenetration', EmpCompensationCalculated, 'Edm.Double');
    /**
     * Static representation of the [[seqNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCompensationCalculated.SEQ_NUMBER = new core_1.BigNumberField('seqNumber', EmpCompensationCalculated, 'Edm.Int64');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCompensationCalculated.START_DATE = new core_1.DateField('startDate', EmpCompensationCalculated, 'Edm.DateTime');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpCompensationCalculated.USER_ID = new core_1.StringField('userId', EmpCompensationCalculated, 'Edm.String');
    /**
     * All fields of the EmpCompensationCalculated entity.
     */
    EmpCompensationCalculated._allFields = [
        EmpCompensationCalculated.COMPA_RATIO,
        EmpCompensationCalculated.ERROR_CODE,
        EmpCompensationCalculated.ERROR_MESSAGE,
        EmpCompensationCalculated.RANGE_PENETRATION,
        EmpCompensationCalculated.SEQ_NUMBER,
        EmpCompensationCalculated.START_DATE,
        EmpCompensationCalculated.USER_ID
    ];
    /**
     * All fields selector.
     */
    EmpCompensationCalculated.ALL_FIELDS = new core_1.AllFields('*', EmpCompensationCalculated);
    /**
     * All key fields of the EmpCompensationCalculated entity.
     */
    EmpCompensationCalculated._keyFields = [EmpCompensationCalculated.SEQ_NUMBER, EmpCompensationCalculated.START_DATE, EmpCompensationCalculated.USER_ID];
    /**
     * Mapping of all key field names to the respective static field property EmpCompensationCalculated.
     */
    EmpCompensationCalculated._keys = EmpCompensationCalculated._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmpCompensationCalculated = exports.EmpCompensationCalculated || (exports.EmpCompensationCalculated = {}));
exports.EmpCompensationCalculated = EmpCompensationCalculated;
//# sourceMappingURL=EmpCompensationCalculated.js.map