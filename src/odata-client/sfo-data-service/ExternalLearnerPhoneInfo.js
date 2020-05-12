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
var ExternalLearnerPhoneInfoRequestBuilder_1 = require("./ExternalLearnerPhoneInfoRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ExternalLearnerPhoneInfo" of service "SFOData".
 */
var ExternalLearnerPhoneInfo = /** @class */ (function (_super) {
    __extends(ExternalLearnerPhoneInfo, _super);
    function ExternalLearnerPhoneInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `ExternalLearnerPhoneInfo`.
     * @returns A builder that constructs instances of entity type `ExternalLearnerPhoneInfo`.
     */
    ExternalLearnerPhoneInfo.builder = function () {
        return core_1.Entity.entityBuilder(ExternalLearnerPhoneInfo);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ExternalLearnerPhoneInfo` entity type.
     * @returns A `ExternalLearnerPhoneInfo` request builder.
     */
    ExternalLearnerPhoneInfo.requestBuilder = function () {
        return new ExternalLearnerPhoneInfoRequestBuilder_1.ExternalLearnerPhoneInfoRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ExternalLearnerPhoneInfo`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ExternalLearnerPhoneInfo`.
     */
    ExternalLearnerPhoneInfo.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, ExternalLearnerPhoneInfo);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ExternalLearnerPhoneInfo.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ExternalLearnerPhoneInfo.
     */
    ExternalLearnerPhoneInfo._entityName = 'ExternalLearnerPhoneInfo';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ExternalLearnerPhoneInfo.
     */
    ExternalLearnerPhoneInfo._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    ExternalLearnerPhoneInfo._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return ExternalLearnerPhoneInfo;
}(core_1.Entity));
exports.ExternalLearnerPhoneInfo = ExternalLearnerPhoneInfo;
var PicklistOption_1 = require("./PicklistOption");
(function (ExternalLearnerPhoneInfo) {
    /**
     * Static representation of the [[areaCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPhoneInfo.AREA_CODE = new core_1.StringField('areaCode', ExternalLearnerPhoneInfo, 'Edm.String');
    /**
     * Static representation of the [[countryCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPhoneInfo.COUNTRY_CODE = new core_1.StringField('countryCode', ExternalLearnerPhoneInfo, 'Edm.String');
    /**
     * Static representation of the [[extension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPhoneInfo.EXTENSION = new core_1.StringField('extension', ExternalLearnerPhoneInfo, 'Edm.String');
    /**
     * Static representation of the [[isPrimary]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPhoneInfo.IS_PRIMARY = new core_1.BooleanField('isPrimary', ExternalLearnerPhoneInfo, 'Edm.Boolean');
    /**
     * Static representation of the [[isDeleted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPhoneInfo.IS_DELETED = new core_1.BooleanField('is_deleted', ExternalLearnerPhoneInfo, 'Edm.Boolean');
    /**
     * Static representation of the [[itemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPhoneInfo.ITEM_ID = new core_1.BigNumberField('itemId', ExternalLearnerPhoneInfo, 'Edm.Decimal');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPhoneInfo.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', ExternalLearnerPhoneInfo, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[phoneNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPhoneInfo.PHONE_NUMBER = new core_1.StringField('phoneNumber', ExternalLearnerPhoneInfo, 'Edm.String');
    /**
     * Static representation of the [[phoneType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPhoneInfo.PHONE_TYPE = new core_1.StringField('phoneType', ExternalLearnerPhoneInfo, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[phoneTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerPhoneInfo.PHONE_TYPE_NAV = new core_1.OneToOneLink('phoneTypeNav', ExternalLearnerPhoneInfo, PicklistOption_1.PicklistOption);
    /**
     * All fields of the ExternalLearnerPhoneInfo entity.
     */
    ExternalLearnerPhoneInfo._allFields = [
        ExternalLearnerPhoneInfo.AREA_CODE,
        ExternalLearnerPhoneInfo.COUNTRY_CODE,
        ExternalLearnerPhoneInfo.EXTENSION,
        ExternalLearnerPhoneInfo.IS_PRIMARY,
        ExternalLearnerPhoneInfo.IS_DELETED,
        ExternalLearnerPhoneInfo.ITEM_ID,
        ExternalLearnerPhoneInfo.LAST_MODIFIED_DATE_TIME,
        ExternalLearnerPhoneInfo.PHONE_NUMBER,
        ExternalLearnerPhoneInfo.PHONE_TYPE,
        ExternalLearnerPhoneInfo.PHONE_TYPE_NAV
    ];
    /**
     * All fields selector.
     */
    ExternalLearnerPhoneInfo.ALL_FIELDS = new core_1.AllFields('*', ExternalLearnerPhoneInfo);
    /**
     * All key fields of the ExternalLearnerPhoneInfo entity.
     */
    ExternalLearnerPhoneInfo._keyFields = [ExternalLearnerPhoneInfo.ITEM_ID];
    /**
     * Mapping of all key field names to the respective static field property ExternalLearnerPhoneInfo.
     */
    ExternalLearnerPhoneInfo._keys = ExternalLearnerPhoneInfo._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ExternalLearnerPhoneInfo = exports.ExternalLearnerPhoneInfo || (exports.ExternalLearnerPhoneInfo = {}));
exports.ExternalLearnerPhoneInfo = ExternalLearnerPhoneInfo;
//# sourceMappingURL=ExternalLearnerPhoneInfo.js.map