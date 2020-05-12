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
var TalentGraphicOptionRequestBuilder_1 = require("./TalentGraphicOptionRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "TalentGraphicOption" of service "SFOData".
 */
var TalentGraphicOption = /** @class */ (function (_super) {
    __extends(TalentGraphicOption, _super);
    function TalentGraphicOption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `TalentGraphicOption`.
     * @returns A builder that constructs instances of entity type `TalentGraphicOption`.
     */
    TalentGraphicOption.builder = function () {
        return core_1.Entity.entityBuilder(TalentGraphicOption);
    };
    /**
     * Returns a request builder to construct requests for operations on the `TalentGraphicOption` entity type.
     * @returns A `TalentGraphicOption` request builder.
     */
    TalentGraphicOption.requestBuilder = function () {
        return new TalentGraphicOptionRequestBuilder_1.TalentGraphicOptionRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TalentGraphicOption`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TalentGraphicOption`.
     */
    TalentGraphicOption.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, TalentGraphicOption);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    TalentGraphicOption.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for TalentGraphicOption.
     */
    TalentGraphicOption._entityName = 'TalentGraphicOption';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TalentGraphicOption.
     */
    TalentGraphicOption._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    TalentGraphicOption._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return TalentGraphicOption;
}(core_1.Entity));
exports.TalentGraphicOption = TalentGraphicOption;
(function (TalentGraphicOption) {
    /**
     * Static representation of the [[dataImage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentGraphicOption.DATA_IMAGE = new core_1.StringField('dataImage', TalentGraphicOption, 'Edm.String');
    /**
     * Static representation of the [[dataIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentGraphicOption.DATA_INDEX = new core_1.StringField('dataIndex', TalentGraphicOption, 'Edm.String');
    /**
     * Static representation of the [[dataLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentGraphicOption.DATA_LABEL = new core_1.StringField('dataLabel', TalentGraphicOption, 'Edm.String');
    /**
     * Static representation of the [[dataShortLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentGraphicOption.DATA_SHORT_LABEL = new core_1.StringField('dataShortLabel', TalentGraphicOption, 'Edm.String');
    /**
     * Static representation of the [[dataValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentGraphicOption.DATA_VALUE = new core_1.StringField('dataValue', TalentGraphicOption, 'Edm.String');
    /**
     * Static representation of the [[gradientBackgroundColor]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentGraphicOption.GRADIENT_BACKGROUND_COLOR = new core_1.StringField('gradientBackgroundColor', TalentGraphicOption, 'Edm.String');
    /**
     * Static representation of the [[optionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentGraphicOption.OPTION_INDEX = new core_1.NumberField('optionIndex', TalentGraphicOption, 'Edm.Int32');
    /**
     * Static representation of the [[optionKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentGraphicOption.OPTION_KEY = new core_1.StringField('optionKey', TalentGraphicOption, 'Edm.String');
    /**
     * Static representation of the [[optionLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentGraphicOption.OPTION_LABEL = new core_1.StringField('optionLabel', TalentGraphicOption, 'Edm.String');
    /**
     * Static representation of the [[optionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentGraphicOption.OPTION_NAME = new core_1.StringField('optionName', TalentGraphicOption, 'Edm.String');
    /**
     * Static representation of the [[optionScaleId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentGraphicOption.OPTION_SCALE_ID = new core_1.StringField('optionScaleId', TalentGraphicOption, 'Edm.String');
    /**
     * Static representation of the [[optionTarget]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentGraphicOption.OPTION_TARGET = new core_1.StringField('optionTarget', TalentGraphicOption, 'Edm.String');
    /**
     * Static representation of the [[optionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentGraphicOption.OPTION_TYPE = new core_1.StringField('optionType', TalentGraphicOption, 'Edm.String');
    /**
     * All fields of the TalentGraphicOption entity.
     */
    TalentGraphicOption._allFields = [
        TalentGraphicOption.DATA_IMAGE,
        TalentGraphicOption.DATA_INDEX,
        TalentGraphicOption.DATA_LABEL,
        TalentGraphicOption.DATA_SHORT_LABEL,
        TalentGraphicOption.DATA_VALUE,
        TalentGraphicOption.GRADIENT_BACKGROUND_COLOR,
        TalentGraphicOption.OPTION_INDEX,
        TalentGraphicOption.OPTION_KEY,
        TalentGraphicOption.OPTION_LABEL,
        TalentGraphicOption.OPTION_NAME,
        TalentGraphicOption.OPTION_SCALE_ID,
        TalentGraphicOption.OPTION_TARGET,
        TalentGraphicOption.OPTION_TYPE
    ];
    /**
     * All fields selector.
     */
    TalentGraphicOption.ALL_FIELDS = new core_1.AllFields('*', TalentGraphicOption);
    /**
     * All key fields of the TalentGraphicOption entity.
     */
    TalentGraphicOption._keyFields = [TalentGraphicOption.DATA_INDEX, TalentGraphicOption.OPTION_KEY];
    /**
     * Mapping of all key field names to the respective static field property TalentGraphicOption.
     */
    TalentGraphicOption._keys = TalentGraphicOption._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(TalentGraphicOption = exports.TalentGraphicOption || (exports.TalentGraphicOption = {}));
exports.TalentGraphicOption = TalentGraphicOption;
//# sourceMappingURL=TalentGraphicOption.js.map