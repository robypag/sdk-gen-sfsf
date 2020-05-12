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
var ExtPhoneInfoRequestBuilder_1 = require("./ExtPhoneInfoRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ExtPhoneInfo" of service "SFOData".
 */
var ExtPhoneInfo = /** @class */ (function (_super) {
    __extends(ExtPhoneInfo, _super);
    function ExtPhoneInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `ExtPhoneInfo`.
     * @returns A builder that constructs instances of entity type `ExtPhoneInfo`.
     */
    ExtPhoneInfo.builder = function () {
        return core_1.Entity.entityBuilder(ExtPhoneInfo);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ExtPhoneInfo` entity type.
     * @returns A `ExtPhoneInfo` request builder.
     */
    ExtPhoneInfo.requestBuilder = function () {
        return new ExtPhoneInfoRequestBuilder_1.ExtPhoneInfoRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ExtPhoneInfo`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ExtPhoneInfo`.
     */
    ExtPhoneInfo.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, ExtPhoneInfo);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ExtPhoneInfo.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ExtPhoneInfo.
     */
    ExtPhoneInfo._entityName = 'ExtPhoneInfo';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ExtPhoneInfo.
     */
    ExtPhoneInfo._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    ExtPhoneInfo._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return ExtPhoneInfo;
}(core_1.Entity));
exports.ExtPhoneInfo = ExtPhoneInfo;
var PicklistOption_1 = require("./PicklistOption");
(function (ExtPhoneInfo) {
    /**
     * Static representation of the [[areaCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExtPhoneInfo.AREA_CODE = new core_1.StringField('areaCode', ExtPhoneInfo, 'Edm.String');
    /**
     * Static representation of the [[countryCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExtPhoneInfo.COUNTRY_CODE = new core_1.StringField('countryCode', ExtPhoneInfo, 'Edm.String');
    /**
     * Static representation of the [[extension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExtPhoneInfo.EXTENSION = new core_1.StringField('extension', ExtPhoneInfo, 'Edm.String');
    /**
     * Static representation of the [[isPrimary]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExtPhoneInfo.IS_PRIMARY = new core_1.StringField('isPrimary', ExtPhoneInfo, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExtPhoneInfo.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', ExtPhoneInfo, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[phoneInfoId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExtPhoneInfo.PHONE_INFO_ID = new core_1.BigNumberField('phoneInfoId', ExtPhoneInfo, 'Edm.Int64');
    /**
     * Static representation of the [[phoneNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExtPhoneInfo.PHONE_NUMBER = new core_1.StringField('phoneNumber', ExtPhoneInfo, 'Edm.String');
    /**
     * Static representation of the [[phoneType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExtPhoneInfo.PHONE_TYPE = new core_1.StringField('phoneType', ExtPhoneInfo, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[phoneTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExtPhoneInfo.PHONE_TYPE_NAV = new core_1.OneToOneLink('phoneTypeNav', ExtPhoneInfo, PicklistOption_1.PicklistOption);
    /**
     * All fields of the ExtPhoneInfo entity.
     */
    ExtPhoneInfo._allFields = [
        ExtPhoneInfo.AREA_CODE,
        ExtPhoneInfo.COUNTRY_CODE,
        ExtPhoneInfo.EXTENSION,
        ExtPhoneInfo.IS_PRIMARY,
        ExtPhoneInfo.LAST_MODIFIED_DATE_TIME,
        ExtPhoneInfo.PHONE_INFO_ID,
        ExtPhoneInfo.PHONE_NUMBER,
        ExtPhoneInfo.PHONE_TYPE,
        ExtPhoneInfo.PHONE_TYPE_NAV
    ];
    /**
     * All fields selector.
     */
    ExtPhoneInfo.ALL_FIELDS = new core_1.AllFields('*', ExtPhoneInfo);
    /**
     * All key fields of the ExtPhoneInfo entity.
     */
    ExtPhoneInfo._keyFields = [ExtPhoneInfo.PHONE_INFO_ID];
    /**
     * Mapping of all key field names to the respective static field property ExtPhoneInfo.
     */
    ExtPhoneInfo._keys = ExtPhoneInfo._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ExtPhoneInfo = exports.ExtPhoneInfo || (exports.ExtPhoneInfo = {}));
exports.ExtPhoneInfo = ExtPhoneInfo;
//# sourceMappingURL=ExtPhoneInfo.js.map