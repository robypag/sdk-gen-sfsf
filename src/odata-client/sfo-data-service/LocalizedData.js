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
var LocalizedDataRequestBuilder_1 = require("./LocalizedDataRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "LocalizedData" of service "SFOData".
 */
var LocalizedData = /** @class */ (function (_super) {
    __extends(LocalizedData, _super);
    function LocalizedData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `LocalizedData`.
     * @returns A builder that constructs instances of entity type `LocalizedData`.
     */
    LocalizedData.builder = function () {
        return core_1.Entity.entityBuilder(LocalizedData);
    };
    /**
     * Returns a request builder to construct requests for operations on the `LocalizedData` entity type.
     * @returns A `LocalizedData` request builder.
     */
    LocalizedData.requestBuilder = function () {
        return new LocalizedDataRequestBuilder_1.LocalizedDataRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `LocalizedData`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `LocalizedData`.
     */
    LocalizedData.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, LocalizedData);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    LocalizedData.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for LocalizedData.
     */
    LocalizedData._entityName = 'LocalizedData';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for LocalizedData.
     */
    LocalizedData._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    LocalizedData._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return LocalizedData;
}(core_1.Entity));
exports.LocalizedData = LocalizedData;
(function (LocalizedData) {
    /**
     * Static representation of the [[localizedDataCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LocalizedData.LOCALIZED_DATA_CODE = new core_1.StringField('localizedDataCode', LocalizedData, 'Edm.String');
    /**
     * Static representation of the [[localizedDataLocale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LocalizedData.LOCALIZED_DATA_LOCALE = new core_1.StringField('localizedDataLocale', LocalizedData, 'Edm.String');
    /**
     * Static representation of the [[localizedDataTranslation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LocalizedData.LOCALIZED_DATA_TRANSLATION = new core_1.StringField('localizedDataTranslation', LocalizedData, 'Edm.String');
    /**
     * All fields of the LocalizedData entity.
     */
    LocalizedData._allFields = [
        LocalizedData.LOCALIZED_DATA_CODE,
        LocalizedData.LOCALIZED_DATA_LOCALE,
        LocalizedData.LOCALIZED_DATA_TRANSLATION
    ];
    /**
     * All fields selector.
     */
    LocalizedData.ALL_FIELDS = new core_1.AllFields('*', LocalizedData);
    /**
     * All key fields of the LocalizedData entity.
     */
    LocalizedData._keyFields = [LocalizedData.LOCALIZED_DATA_CODE, LocalizedData.LOCALIZED_DATA_LOCALE];
    /**
     * Mapping of all key field names to the respective static field property LocalizedData.
     */
    LocalizedData._keys = LocalizedData._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(LocalizedData = exports.LocalizedData || (exports.LocalizedData = {}));
exports.LocalizedData = LocalizedData;
//# sourceMappingURL=LocalizedData.js.map