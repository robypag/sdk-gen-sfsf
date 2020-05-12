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
var ExtEmailInfoRequestBuilder_1 = require("./ExtEmailInfoRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ExtEmailInfo" of service "SFOData".
 */
var ExtEmailInfo = /** @class */ (function (_super) {
    __extends(ExtEmailInfo, _super);
    function ExtEmailInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `ExtEmailInfo`.
     * @returns A builder that constructs instances of entity type `ExtEmailInfo`.
     */
    ExtEmailInfo.builder = function () {
        return core_1.Entity.entityBuilder(ExtEmailInfo);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ExtEmailInfo` entity type.
     * @returns A `ExtEmailInfo` request builder.
     */
    ExtEmailInfo.requestBuilder = function () {
        return new ExtEmailInfoRequestBuilder_1.ExtEmailInfoRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ExtEmailInfo`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ExtEmailInfo`.
     */
    ExtEmailInfo.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, ExtEmailInfo);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ExtEmailInfo.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ExtEmailInfo.
     */
    ExtEmailInfo._entityName = 'ExtEmailInfo';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ExtEmailInfo.
     */
    ExtEmailInfo._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    ExtEmailInfo._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return ExtEmailInfo;
}(core_1.Entity));
exports.ExtEmailInfo = ExtEmailInfo;
var PicklistOption_1 = require("./PicklistOption");
(function (ExtEmailInfo) {
    /**
     * Static representation of the [[emailAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExtEmailInfo.EMAIL_ADDRESS = new core_1.StringField('emailAddress', ExtEmailInfo, 'Edm.String');
    /**
     * Static representation of the [[emailInfoId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExtEmailInfo.EMAIL_INFO_ID = new core_1.BigNumberField('emailInfoId', ExtEmailInfo, 'Edm.Int64');
    /**
     * Static representation of the [[emailType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExtEmailInfo.EMAIL_TYPE = new core_1.StringField('emailType', ExtEmailInfo, 'Edm.String');
    /**
     * Static representation of the [[isPrimary]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExtEmailInfo.IS_PRIMARY = new core_1.StringField('isPrimary', ExtEmailInfo, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExtEmailInfo.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', ExtEmailInfo, 'Edm.DateTimeOffset');
    /**
     * Static representation of the one-to-one navigation property [[emailTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExtEmailInfo.EMAIL_TYPE_NAV = new core_1.OneToOneLink('emailTypeNav', ExtEmailInfo, PicklistOption_1.PicklistOption);
    /**
     * All fields of the ExtEmailInfo entity.
     */
    ExtEmailInfo._allFields = [
        ExtEmailInfo.EMAIL_ADDRESS,
        ExtEmailInfo.EMAIL_INFO_ID,
        ExtEmailInfo.EMAIL_TYPE,
        ExtEmailInfo.IS_PRIMARY,
        ExtEmailInfo.LAST_MODIFIED_DATE_TIME,
        ExtEmailInfo.EMAIL_TYPE_NAV
    ];
    /**
     * All fields selector.
     */
    ExtEmailInfo.ALL_FIELDS = new core_1.AllFields('*', ExtEmailInfo);
    /**
     * All key fields of the ExtEmailInfo entity.
     */
    ExtEmailInfo._keyFields = [ExtEmailInfo.EMAIL_INFO_ID];
    /**
     * Mapping of all key field names to the respective static field property ExtEmailInfo.
     */
    ExtEmailInfo._keys = ExtEmailInfo._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ExtEmailInfo = exports.ExtEmailInfo || (exports.ExtEmailInfo = {}));
exports.ExtEmailInfo = ExtEmailInfo;
//# sourceMappingURL=ExtEmailInfo.js.map