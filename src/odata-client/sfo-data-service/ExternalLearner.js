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
var ExternalLearnerRequestBuilder_1 = require("./ExternalLearnerRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ExternalLearner" of service "SFOData".
 */
var ExternalLearner = /** @class */ (function (_super) {
    __extends(ExternalLearner, _super);
    function ExternalLearner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `ExternalLearner`.
     * @returns A builder that constructs instances of entity type `ExternalLearner`.
     */
    ExternalLearner.builder = function () {
        return core_1.Entity.entityBuilder(ExternalLearner);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ExternalLearner` entity type.
     * @returns A `ExternalLearner` request builder.
     */
    ExternalLearner.requestBuilder = function () {
        return new ExternalLearnerRequestBuilder_1.ExternalLearnerRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ExternalLearner`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ExternalLearner`.
     */
    ExternalLearner.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, ExternalLearner);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ExternalLearner.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ExternalLearner.
     */
    ExternalLearner._entityName = 'ExternalLearner';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ExternalLearner.
     */
    ExternalLearner._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    ExternalLearner._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return ExternalLearner;
}(core_1.Entity));
exports.ExternalLearner = ExternalLearner;
var ExternalLearnerEmailInfo_1 = require("./ExternalLearnerEmailInfo");
var ExternalLearnerAddressInfo_1 = require("./ExternalLearnerAddressInfo");
var ExternalLearnerPersonalInfo_1 = require("./ExternalLearnerPersonalInfo");
var ExternalLearnerPhoneInfo_1 = require("./ExternalLearnerPhoneInfo");
var PicklistOption_1 = require("./PicklistOption");
(function (ExternalLearner) {
    /**
     * Static representation of the [[defaultLocale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearner.DEFAULT_LOCALE = new core_1.StringField('defaultLocale', ExternalLearner, 'Edm.String');
    /**
     * Static representation of the [[isDeleted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearner.IS_DELETED = new core_1.BooleanField('is_deleted', ExternalLearner, 'Edm.Boolean');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearner.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', ExternalLearner, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[loginMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearner.LOGIN_METHOD = new core_1.StringField('loginMethod', ExternalLearner, 'Edm.String');
    /**
     * Static representation of the [[password]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearner.PASSWORD = new core_1.StringField('password', ExternalLearner, 'Edm.String');
    /**
     * Static representation of the [[personGuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearner.PERSON_GUID = new core_1.StringField('personGUID', ExternalLearner, 'Edm.String');
    /**
     * Static representation of the [[personId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearner.PERSON_ID = new core_1.BigNumberField('personId', ExternalLearner, 'Edm.Decimal');
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearner.PERSON_ID_EXTERNAL = new core_1.StringField('personIdExternal', ExternalLearner, 'Edm.String');
    /**
     * Static representation of the [[productName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearner.PRODUCT_NAME = new core_1.StringField('productName', ExternalLearner, 'Edm.String');
    /**
     * Static representation of the [[sourceChannel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearner.SOURCE_CHANNEL = new core_1.StringField('sourceChannel', ExternalLearner, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearner.STATUS = new core_1.StringField('status', ExternalLearner, 'Edm.String');
    /**
     * Static representation of the [[timeZone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearner.TIME_ZONE = new core_1.StringField('timeZone', ExternalLearner, 'Edm.String');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearner.USER_ID = new core_1.StringField('userId', ExternalLearner, 'Edm.String');
    /**
     * Static representation of the [[userName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearner.USER_NAME = new core_1.StringField('userName', ExternalLearner, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[emailInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearner.EMAIL_INFO = new core_1.Link('emailInfo', ExternalLearner, ExternalLearnerEmailInfo_1.ExternalLearnerEmailInfo);
    /**
     * Static representation of the one-to-many navigation property [[homeAddress]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearner.HOME_ADDRESS = new core_1.Link('homeAddress', ExternalLearner, ExternalLearnerAddressInfo_1.ExternalLearnerAddressInfo);
    /**
     * Static representation of the one-to-one navigation property [[personalInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearner.PERSONAL_INFO = new core_1.OneToOneLink('personalInfo', ExternalLearner, ExternalLearnerPersonalInfo_1.ExternalLearnerPersonalInfo);
    /**
     * Static representation of the one-to-many navigation property [[phoneInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearner.PHONE_INFO = new core_1.Link('phoneInfo', ExternalLearner, ExternalLearnerPhoneInfo_1.ExternalLearnerPhoneInfo);
    /**
     * Static representation of the one-to-one navigation property [[sourceChannelNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearner.SOURCE_CHANNEL_NAV = new core_1.OneToOneLink('sourceChannelNav', ExternalLearner, PicklistOption_1.PicklistOption);
    /**
     * All fields of the ExternalLearner entity.
     */
    ExternalLearner._allFields = [
        ExternalLearner.DEFAULT_LOCALE,
        ExternalLearner.IS_DELETED,
        ExternalLearner.LAST_MODIFIED_DATE_TIME,
        ExternalLearner.LOGIN_METHOD,
        ExternalLearner.PASSWORD,
        ExternalLearner.PERSON_GUID,
        ExternalLearner.PERSON_ID,
        ExternalLearner.PERSON_ID_EXTERNAL,
        ExternalLearner.PRODUCT_NAME,
        ExternalLearner.SOURCE_CHANNEL,
        ExternalLearner.STATUS,
        ExternalLearner.TIME_ZONE,
        ExternalLearner.USER_ID,
        ExternalLearner.USER_NAME,
        ExternalLearner.EMAIL_INFO,
        ExternalLearner.HOME_ADDRESS,
        ExternalLearner.PERSONAL_INFO,
        ExternalLearner.PHONE_INFO,
        ExternalLearner.SOURCE_CHANNEL_NAV
    ];
    /**
     * All fields selector.
     */
    ExternalLearner.ALL_FIELDS = new core_1.AllFields('*', ExternalLearner);
    /**
     * All key fields of the ExternalLearner entity.
     */
    ExternalLearner._keyFields = [ExternalLearner.USER_ID];
    /**
     * Mapping of all key field names to the respective static field property ExternalLearner.
     */
    ExternalLearner._keys = ExternalLearner._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ExternalLearner = exports.ExternalLearner || (exports.ExternalLearner = {}));
exports.ExternalLearner = ExternalLearner;
//# sourceMappingURL=ExternalLearner.js.map