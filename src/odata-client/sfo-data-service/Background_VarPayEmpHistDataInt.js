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
var Background_VarPayEmpHistDataIntRequestBuilder_1 = require("./Background_VarPayEmpHistDataIntRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Background_VarPayEmpHistDataInt" of service "SFOData".
 */
var Background_VarPayEmpHistDataInt = /** @class */ (function (_super) {
    __extends(Background_VarPayEmpHistDataInt, _super);
    function Background_VarPayEmpHistDataInt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Background_VarPayEmpHistDataInt`.
     * @returns A builder that constructs instances of entity type `Background_VarPayEmpHistDataInt`.
     */
    Background_VarPayEmpHistDataInt.builder = function () {
        return core_1.Entity.entityBuilder(Background_VarPayEmpHistDataInt);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Background_VarPayEmpHistDataInt` entity type.
     * @returns A `Background_VarPayEmpHistDataInt` request builder.
     */
    Background_VarPayEmpHistDataInt.requestBuilder = function () {
        return new Background_VarPayEmpHistDataIntRequestBuilder_1.Background_VarPayEmpHistDataIntRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_VarPayEmpHistDataInt`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Background_VarPayEmpHistDataInt`.
     */
    Background_VarPayEmpHistDataInt.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Background_VarPayEmpHistDataInt);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Background_VarPayEmpHistDataInt.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Background_VarPayEmpHistDataInt.
     */
    Background_VarPayEmpHistDataInt._entityName = 'Background_VarPayEmpHistDataInt';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Background_VarPayEmpHistDataInt.
     */
    Background_VarPayEmpHistDataInt._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Background_VarPayEmpHistDataInt._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Background_VarPayEmpHistDataInt;
}(core_1.Entity));
exports.Background_VarPayEmpHistDataInt = Background_VarPayEmpHistDataInt;
(function (Background_VarPayEmpHistDataInt) {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_VarPayEmpHistDataInt.BACKGROUND_ELEMENT_ID = new core_1.BigNumberField('backgroundElementId', Background_VarPayEmpHistDataInt, 'Edm.Int64');
    /**
     * Static representation of the [[basis]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_VarPayEmpHistDataInt.BASIS = new core_1.NumberField('basis', Background_VarPayEmpHistDataInt, 'Edm.Double');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_VarPayEmpHistDataInt.COUNTRY = new core_1.StringField('country', Background_VarPayEmpHistDataInt, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_VarPayEmpHistDataInt.END_DATE = new core_1.DateField('endDate', Background_VarPayEmpHistDataInt, 'Edm.DateTime');
    /**
     * Static representation of the [[incentivePlan]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_VarPayEmpHistDataInt.INCENTIVE_PLAN = new core_1.StringField('incentivePlan', Background_VarPayEmpHistDataInt, 'Edm.String');
    /**
     * Static representation of the [[jobGrade]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_VarPayEmpHistDataInt.JOB_GRADE = new core_1.StringField('jobGrade', Background_VarPayEmpHistDataInt, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_VarPayEmpHistDataInt.LAST_MODIFIED_DATE = new core_1.DateField('lastModifiedDate', Background_VarPayEmpHistDataInt, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[localCurrencyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_VarPayEmpHistDataInt.LOCAL_CURRENCY_CODE = new core_1.StringField('localCurrencyCode', Background_VarPayEmpHistDataInt, 'Edm.String');
    /**
     * Static representation of the [[recordType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_VarPayEmpHistDataInt.RECORD_TYPE = new core_1.StringField('recordType', Background_VarPayEmpHistDataInt, 'Edm.String');
    /**
     * Static representation of the [[salary]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_VarPayEmpHistDataInt.SALARY = new core_1.NumberField('salary', Background_VarPayEmpHistDataInt, 'Edm.Double');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_VarPayEmpHistDataInt.START_DATE = new core_1.DateField('startDate', Background_VarPayEmpHistDataInt, 'Edm.DateTime');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_VarPayEmpHistDataInt.USER_ID = new core_1.StringField('userId', Background_VarPayEmpHistDataInt, 'Edm.String');
    /**
     * Static representation of the [[varPayProgramName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_VarPayEmpHistDataInt.VAR_PAY_PROGRAM_NAME = new core_1.NumberField('varPayProgramName', Background_VarPayEmpHistDataInt, 'Edm.Int32');
    /**
     * All fields of the Background_VarPayEmpHistDataInt entity.
     */
    Background_VarPayEmpHistDataInt._allFields = [
        Background_VarPayEmpHistDataInt.BACKGROUND_ELEMENT_ID,
        Background_VarPayEmpHistDataInt.BASIS,
        Background_VarPayEmpHistDataInt.COUNTRY,
        Background_VarPayEmpHistDataInt.END_DATE,
        Background_VarPayEmpHistDataInt.INCENTIVE_PLAN,
        Background_VarPayEmpHistDataInt.JOB_GRADE,
        Background_VarPayEmpHistDataInt.LAST_MODIFIED_DATE,
        Background_VarPayEmpHistDataInt.LOCAL_CURRENCY_CODE,
        Background_VarPayEmpHistDataInt.RECORD_TYPE,
        Background_VarPayEmpHistDataInt.SALARY,
        Background_VarPayEmpHistDataInt.START_DATE,
        Background_VarPayEmpHistDataInt.USER_ID,
        Background_VarPayEmpHistDataInt.VAR_PAY_PROGRAM_NAME
    ];
    /**
     * All fields selector.
     */
    Background_VarPayEmpHistDataInt.ALL_FIELDS = new core_1.AllFields('*', Background_VarPayEmpHistDataInt);
    /**
     * All key fields of the Background_VarPayEmpHistDataInt entity.
     */
    Background_VarPayEmpHistDataInt._keyFields = [Background_VarPayEmpHistDataInt.BACKGROUND_ELEMENT_ID];
    /**
     * Mapping of all key field names to the respective static field property Background_VarPayEmpHistDataInt.
     */
    Background_VarPayEmpHistDataInt._keys = Background_VarPayEmpHistDataInt._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Background_VarPayEmpHistDataInt = exports.Background_VarPayEmpHistDataInt || (exports.Background_VarPayEmpHistDataInt = {}));
exports.Background_VarPayEmpHistDataInt = Background_VarPayEmpHistDataInt;
//# sourceMappingURL=Background_VarPayEmpHistDataInt.js.map