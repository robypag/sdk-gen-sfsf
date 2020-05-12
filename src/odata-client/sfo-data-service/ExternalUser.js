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
var ExternalUserRequestBuilder_1 = require("./ExternalUserRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ExternalUser" of service "SFOData".
 */
var ExternalUser = /** @class */ (function (_super) {
    __extends(ExternalUser, _super);
    function ExternalUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `ExternalUser`.
     * @returns A builder that constructs instances of entity type `ExternalUser`.
     */
    ExternalUser.builder = function () {
        return core_1.Entity.entityBuilder(ExternalUser);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ExternalUser` entity type.
     * @returns A `ExternalUser` request builder.
     */
    ExternalUser.requestBuilder = function () {
        return new ExternalUserRequestBuilder_1.ExternalUserRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ExternalUser`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ExternalUser`.
     */
    ExternalUser.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, ExternalUser);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ExternalUser.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ExternalUser.
     */
    ExternalUser._entityName = 'ExternalUser';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ExternalUser.
     */
    ExternalUser._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    ExternalUser._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return ExternalUser;
}(core_1.Entity));
exports.ExternalUser = ExternalUser;
var ExtAddressInfo_1 = require("./ExtAddressInfo");
var ExtEmailInfo_1 = require("./ExtEmailInfo");
var ExtPersonalInfo_1 = require("./ExtPersonalInfo");
var ExtPhoneInfo_1 = require("./ExtPhoneInfo");
(function (ExternalUser) {
    /**
     * Static representation of the [[defaultLocale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalUser.DEFAULT_LOCALE = new core_1.StringField('defaultLocale', ExternalUser, 'Edm.String');
    /**
     * Static representation of the [[isDeleted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalUser.IS_DELETED = new core_1.BooleanField('is_deleted', ExternalUser, 'Edm.Boolean');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalUser.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', ExternalUser, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[loginMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalUser.LOGIN_METHOD = new core_1.StringField('loginMethod', ExternalUser, 'Edm.String');
    /**
     * Static representation of the [[password]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalUser.PASSWORD = new core_1.StringField('password', ExternalUser, 'Edm.String');
    /**
     * Static representation of the [[personGuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalUser.PERSON_GUID = new core_1.StringField('personGUID', ExternalUser, 'Edm.String');
    /**
     * Static representation of the [[personId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalUser.PERSON_ID = new core_1.BigNumberField('personId', ExternalUser, 'Edm.Decimal');
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalUser.PERSON_ID_EXTERNAL = new core_1.StringField('personIdExternal', ExternalUser, 'Edm.String');
    /**
     * Static representation of the [[productName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalUser.PRODUCT_NAME = new core_1.StringField('productName', ExternalUser, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalUser.STATUS = new core_1.StringField('status', ExternalUser, 'Edm.String');
    /**
     * Static representation of the [[timeZone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalUser.TIME_ZONE = new core_1.StringField('timeZone', ExternalUser, 'Edm.String');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalUser.USER_ID = new core_1.StringField('userId', ExternalUser, 'Edm.String');
    /**
     * Static representation of the [[userName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalUser.USER_NAME = new core_1.StringField('userName', ExternalUser, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[extAddressInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalUser.EXT_ADDRESS_INFO = new core_1.Link('extAddressInfo', ExternalUser, ExtAddressInfo_1.ExtAddressInfo);
    /**
     * Static representation of the one-to-many navigation property [[extEmailInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalUser.EXT_EMAIL_INFO = new core_1.Link('extEmailInfo', ExternalUser, ExtEmailInfo_1.ExtEmailInfo);
    /**
     * Static representation of the one-to-one navigation property [[extPersonalInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalUser.EXT_PERSONAL_INFO = new core_1.OneToOneLink('extPersonalInfo', ExternalUser, ExtPersonalInfo_1.ExtPersonalInfo);
    /**
     * Static representation of the one-to-many navigation property [[extPhoneInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalUser.EXT_PHONE_INFO = new core_1.Link('extPhoneInfo', ExternalUser, ExtPhoneInfo_1.ExtPhoneInfo);
    /**
     * All fields of the ExternalUser entity.
     */
    ExternalUser._allFields = [
        ExternalUser.DEFAULT_LOCALE,
        ExternalUser.IS_DELETED,
        ExternalUser.LAST_MODIFIED_DATE_TIME,
        ExternalUser.LOGIN_METHOD,
        ExternalUser.PASSWORD,
        ExternalUser.PERSON_GUID,
        ExternalUser.PERSON_ID,
        ExternalUser.PERSON_ID_EXTERNAL,
        ExternalUser.PRODUCT_NAME,
        ExternalUser.STATUS,
        ExternalUser.TIME_ZONE,
        ExternalUser.USER_ID,
        ExternalUser.USER_NAME,
        ExternalUser.EXT_ADDRESS_INFO,
        ExternalUser.EXT_EMAIL_INFO,
        ExternalUser.EXT_PERSONAL_INFO,
        ExternalUser.EXT_PHONE_INFO
    ];
    /**
     * All fields selector.
     */
    ExternalUser.ALL_FIELDS = new core_1.AllFields('*', ExternalUser);
    /**
     * All key fields of the ExternalUser entity.
     */
    ExternalUser._keyFields = [ExternalUser.USER_ID];
    /**
     * Mapping of all key field names to the respective static field property ExternalUser.
     */
    ExternalUser._keys = ExternalUser._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ExternalUser = exports.ExternalUser || (exports.ExternalUser = {}));
exports.ExternalUser = ExternalUser;
//# sourceMappingURL=ExternalUser.js.map