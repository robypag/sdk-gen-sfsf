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
var MdfEnumValueRequestBuilder_1 = require("./MdfEnumValueRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "MDFEnumValue" of service "SFOData".
 */
var MdfEnumValue = /** @class */ (function (_super) {
    __extends(MdfEnumValue, _super);
    function MdfEnumValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `MdfEnumValue`.
     * @returns A builder that constructs instances of entity type `MdfEnumValue`.
     */
    MdfEnumValue.builder = function () {
        return core_1.Entity.entityBuilder(MdfEnumValue);
    };
    /**
     * Returns a request builder to construct requests for operations on the `MdfEnumValue` entity type.
     * @returns A `MdfEnumValue` request builder.
     */
    MdfEnumValue.requestBuilder = function () {
        return new MdfEnumValueRequestBuilder_1.MdfEnumValueRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `MdfEnumValue`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `MdfEnumValue`.
     */
    MdfEnumValue.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, MdfEnumValue);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    MdfEnumValue.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for MdfEnumValue.
     */
    MdfEnumValue._entityName = 'MDFEnumValue';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for MdfEnumValue.
     */
    MdfEnumValue._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    MdfEnumValue._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return MdfEnumValue;
}(core_1.Entity));
exports.MdfEnumValue = MdfEnumValue;
(function (MdfEnumValue) {
    /**
     * Static representation of the [[deDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MdfEnumValue.DE_DE = new core_1.StringField('de_DE', MdfEnumValue, 'Edm.String');
    /**
     * Static representation of the [[enDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MdfEnumValue.EN_DEBUG = new core_1.StringField('en_DEBUG', MdfEnumValue, 'Edm.String');
    /**
     * Static representation of the [[enGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MdfEnumValue.EN_GB = new core_1.StringField('en_GB', MdfEnumValue, 'Edm.String');
    /**
     * Static representation of the [[enUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MdfEnumValue.EN_US = new core_1.StringField('en_US', MdfEnumValue, 'Edm.String');
    /**
     * Static representation of the [[esEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MdfEnumValue.ES_ES = new core_1.StringField('es_ES', MdfEnumValue, 'Edm.String');
    /**
     * Static representation of the [[esMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MdfEnumValue.ES_MX = new core_1.StringField('es_MX', MdfEnumValue, 'Edm.String');
    /**
     * Static representation of the [[frCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MdfEnumValue.FR_CA = new core_1.StringField('fr_CA', MdfEnumValue, 'Edm.String');
    /**
     * Static representation of the [[frFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MdfEnumValue.FR_FR = new core_1.StringField('fr_FR', MdfEnumValue, 'Edm.String');
    /**
     * Static representation of the [[itIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MdfEnumValue.IT_IT = new core_1.StringField('it_IT', MdfEnumValue, 'Edm.String');
    /**
     * Static representation of the [[key]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MdfEnumValue.KEY = new core_1.StringField('key', MdfEnumValue, 'Edm.String');
    /**
     * Static representation of the [[localized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MdfEnumValue.LOCALIZED = new core_1.StringField('localized', MdfEnumValue, 'Edm.String');
    /**
     * Static representation of the [[nlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MdfEnumValue.NL_NL = new core_1.StringField('nl_NL', MdfEnumValue, 'Edm.String');
    /**
     * Static representation of the [[ptBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MdfEnumValue.PT_BR = new core_1.StringField('pt_BR', MdfEnumValue, 'Edm.String');
    /**
     * Static representation of the [[value]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MdfEnumValue.VALUE = new core_1.StringField('value', MdfEnumValue, 'Edm.String');
    /**
     * Static representation of the [[zhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MdfEnumValue.ZH_CN = new core_1.StringField('zh_CN', MdfEnumValue, 'Edm.String');
    /**
     * All fields of the MdfEnumValue entity.
     */
    MdfEnumValue._allFields = [
        MdfEnumValue.DE_DE,
        MdfEnumValue.EN_DEBUG,
        MdfEnumValue.EN_GB,
        MdfEnumValue.EN_US,
        MdfEnumValue.ES_ES,
        MdfEnumValue.ES_MX,
        MdfEnumValue.FR_CA,
        MdfEnumValue.FR_FR,
        MdfEnumValue.IT_IT,
        MdfEnumValue.KEY,
        MdfEnumValue.LOCALIZED,
        MdfEnumValue.NL_NL,
        MdfEnumValue.PT_BR,
        MdfEnumValue.VALUE,
        MdfEnumValue.ZH_CN
    ];
    /**
     * All fields selector.
     */
    MdfEnumValue.ALL_FIELDS = new core_1.AllFields('*', MdfEnumValue);
    /**
     * All key fields of the MdfEnumValue entity.
     */
    MdfEnumValue._keyFields = [MdfEnumValue.KEY, MdfEnumValue.VALUE];
    /**
     * Mapping of all key field names to the respective static field property MdfEnumValue.
     */
    MdfEnumValue._keys = MdfEnumValue._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(MdfEnumValue = exports.MdfEnumValue || (exports.MdfEnumValue = {}));
exports.MdfEnumValue = MdfEnumValue;
//# sourceMappingURL=MdfEnumValue.js.map