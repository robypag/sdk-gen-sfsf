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
var UserAccountRequestBuilder_1 = require("./UserAccountRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "UserAccount" of service "SFOData".
 */
var UserAccount = /** @class */ (function (_super) {
    __extends(UserAccount, _super);
    function UserAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `UserAccount`.
     * @returns A builder that constructs instances of entity type `UserAccount`.
     */
    UserAccount.builder = function () {
        return core_1.Entity.entityBuilder(UserAccount);
    };
    /**
     * Returns a request builder to construct requests for operations on the `UserAccount` entity type.
     * @returns A `UserAccount` request builder.
     */
    UserAccount.requestBuilder = function () {
        return new UserAccountRequestBuilder_1.UserAccountRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `UserAccount`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `UserAccount`.
     */
    UserAccount.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, UserAccount);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    UserAccount.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for UserAccount.
     */
    UserAccount._entityName = 'UserAccount';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for UserAccount.
     */
    UserAccount._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    UserAccount._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return UserAccount;
}(core_1.Entity));
exports.UserAccount = UserAccount;
var User_1 = require("./User");
(function (UserAccount) {
    /**
     * Static representation of the [[accountId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserAccount.ACCOUNT_ID = new core_1.BigNumberField('accountId', UserAccount, 'Edm.Int64');
    /**
     * Static representation of the [[accountStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserAccount.ACCOUNT_STATUS = new core_1.StringField('accountStatus', UserAccount, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserAccount.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', UserAccount, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[defaultLocale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserAccount.DEFAULT_LOCALE = new core_1.StringField('defaultLocale', UserAccount, 'Edm.String');
    /**
     * Static representation of the [[lastInactivationDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserAccount.LAST_INACTIVATION_DATE_TIME = new core_1.DateField('lastInactivationDateTime', UserAccount, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastLoginFailedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserAccount.LAST_LOGIN_FAILED_DATE_TIME = new core_1.DateField('lastLoginFailedDateTime', UserAccount, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserAccount.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', UserAccount, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserAccount.PERSON_ID_EXTERNAL = new core_1.StringField('personIdExternal', UserAccount, 'Edm.String');
    /**
     * Static representation of the [[sapGlobalUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserAccount.SAP_GLOBAL_USER_ID = new core_1.StringField('sapGlobalUserId', UserAccount, 'Edm.String');
    /**
     * Static representation of the [[username]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserAccount.USERNAME = new core_1.StringField('username', UserAccount, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[user]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserAccount.USER = new core_1.Link('user', UserAccount, User_1.User);
    /**
     * All fields of the UserAccount entity.
     */
    UserAccount._allFields = [
        UserAccount.ACCOUNT_ID,
        UserAccount.ACCOUNT_STATUS,
        UserAccount.CREATED_DATE_TIME,
        UserAccount.DEFAULT_LOCALE,
        UserAccount.LAST_INACTIVATION_DATE_TIME,
        UserAccount.LAST_LOGIN_FAILED_DATE_TIME,
        UserAccount.LAST_MODIFIED_DATE_TIME,
        UserAccount.PERSON_ID_EXTERNAL,
        UserAccount.SAP_GLOBAL_USER_ID,
        UserAccount.USERNAME,
        UserAccount.USER
    ];
    /**
     * All fields selector.
     */
    UserAccount.ALL_FIELDS = new core_1.AllFields('*', UserAccount);
    /**
     * All key fields of the UserAccount entity.
     */
    UserAccount._keyFields = [UserAccount.USERNAME];
    /**
     * Mapping of all key field names to the respective static field property UserAccount.
     */
    UserAccount._keys = UserAccount._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(UserAccount = exports.UserAccount || (exports.UserAccount = {}));
exports.UserAccount = UserAccount;
//# sourceMappingURL=UserAccount.js.map