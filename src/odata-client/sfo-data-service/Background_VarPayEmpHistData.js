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
var Background_VarPayEmpHistDataRequestBuilder_1 = require("./Background_VarPayEmpHistDataRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Background_VarPayEmpHistData" of service "SFOData".
 */
var Background_VarPayEmpHistData = /** @class */ (function (_super) {
    __extends(Background_VarPayEmpHistData, _super);
    function Background_VarPayEmpHistData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Background_VarPayEmpHistData`.
     * @returns A builder that constructs instances of entity type `Background_VarPayEmpHistData`.
     */
    Background_VarPayEmpHistData.builder = function () {
        return core_1.Entity.entityBuilder(Background_VarPayEmpHistData);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Background_VarPayEmpHistData` entity type.
     * @returns A `Background_VarPayEmpHistData` request builder.
     */
    Background_VarPayEmpHistData.requestBuilder = function () {
        return new Background_VarPayEmpHistDataRequestBuilder_1.Background_VarPayEmpHistDataRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_VarPayEmpHistData`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Background_VarPayEmpHistData`.
     */
    Background_VarPayEmpHistData.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Background_VarPayEmpHistData);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Background_VarPayEmpHistData.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Background_VarPayEmpHistData.
     */
    Background_VarPayEmpHistData._entityName = 'Background_VarPayEmpHistData';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Background_VarPayEmpHistData.
     */
    Background_VarPayEmpHistData._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Background_VarPayEmpHistData._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Background_VarPayEmpHistData;
}(core_1.Entity));
exports.Background_VarPayEmpHistData = Background_VarPayEmpHistData;
(function (Background_VarPayEmpHistData) {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_VarPayEmpHistData.BACKGROUND_ELEMENT_ID = new core_1.BigNumberField('backgroundElementId', Background_VarPayEmpHistData, 'Edm.Int64');
    /**
     * Static representation of the [[basis]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_VarPayEmpHistData.BASIS = new core_1.NumberField('basis', Background_VarPayEmpHistData, 'Edm.Double');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_VarPayEmpHistData.COUNTRY = new core_1.StringField('country', Background_VarPayEmpHistData, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_VarPayEmpHistData.END_DATE = new core_1.DateField('endDate', Background_VarPayEmpHistData, 'Edm.DateTime');
    /**
     * Static representation of the [[jobGrade]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_VarPayEmpHistData.JOB_GRADE = new core_1.StringField('jobGrade', Background_VarPayEmpHistData, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_VarPayEmpHistData.LAST_MODIFIED_DATE = new core_1.DateField('lastModifiedDate', Background_VarPayEmpHistData, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[location]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_VarPayEmpHistData.LOCATION = new core_1.StringField('location', Background_VarPayEmpHistData, 'Edm.String');
    /**
     * Static representation of the [[salary]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_VarPayEmpHistData.SALARY = new core_1.StringField('salary', Background_VarPayEmpHistData, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_VarPayEmpHistData.START_DATE = new core_1.DateField('startDate', Background_VarPayEmpHistData, 'Edm.DateTime');
    /**
     * Static representation of the [[tgtPct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_VarPayEmpHistData.TGT_PCT = new core_1.StringField('tgtPct', Background_VarPayEmpHistData, 'Edm.String');
    /**
     * Static representation of the [[title]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_VarPayEmpHistData.TITLE = new core_1.StringField('title', Background_VarPayEmpHistData, 'Edm.String');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_VarPayEmpHistData.USER_ID = new core_1.StringField('userId', Background_VarPayEmpHistData, 'Edm.String');
    /**
     * Static representation of the [[varPayProgramName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_VarPayEmpHistData.VAR_PAY_PROGRAM_NAME = new core_1.NumberField('varPayProgramName', Background_VarPayEmpHistData, 'Edm.Int32');
    /**
     * All fields of the Background_VarPayEmpHistData entity.
     */
    Background_VarPayEmpHistData._allFields = [
        Background_VarPayEmpHistData.BACKGROUND_ELEMENT_ID,
        Background_VarPayEmpHistData.BASIS,
        Background_VarPayEmpHistData.COUNTRY,
        Background_VarPayEmpHistData.END_DATE,
        Background_VarPayEmpHistData.JOB_GRADE,
        Background_VarPayEmpHistData.LAST_MODIFIED_DATE,
        Background_VarPayEmpHistData.LOCATION,
        Background_VarPayEmpHistData.SALARY,
        Background_VarPayEmpHistData.START_DATE,
        Background_VarPayEmpHistData.TGT_PCT,
        Background_VarPayEmpHistData.TITLE,
        Background_VarPayEmpHistData.USER_ID,
        Background_VarPayEmpHistData.VAR_PAY_PROGRAM_NAME
    ];
    /**
     * All fields selector.
     */
    Background_VarPayEmpHistData.ALL_FIELDS = new core_1.AllFields('*', Background_VarPayEmpHistData);
    /**
     * All key fields of the Background_VarPayEmpHistData entity.
     */
    Background_VarPayEmpHistData._keyFields = [Background_VarPayEmpHistData.BACKGROUND_ELEMENT_ID];
    /**
     * Mapping of all key field names to the respective static field property Background_VarPayEmpHistData.
     */
    Background_VarPayEmpHistData._keys = Background_VarPayEmpHistData._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Background_VarPayEmpHistData = exports.Background_VarPayEmpHistData || (exports.Background_VarPayEmpHistData = {}));
exports.Background_VarPayEmpHistData = Background_VarPayEmpHistData;
//# sourceMappingURL=Background_VarPayEmpHistData.js.map