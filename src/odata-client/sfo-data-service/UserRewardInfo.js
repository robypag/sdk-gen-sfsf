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
var UserRewardInfoRequestBuilder_1 = require("./UserRewardInfoRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "UserRewardInfo" of service "SFOData".
 */
var UserRewardInfo = /** @class */ (function (_super) {
    __extends(UserRewardInfo, _super);
    function UserRewardInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `UserRewardInfo`.
     * @returns A builder that constructs instances of entity type `UserRewardInfo`.
     */
    UserRewardInfo.builder = function () {
        return core_1.Entity.entityBuilder(UserRewardInfo);
    };
    /**
     * Returns a request builder to construct requests for operations on the `UserRewardInfo` entity type.
     * @returns A `UserRewardInfo` request builder.
     */
    UserRewardInfo.requestBuilder = function () {
        return new UserRewardInfoRequestBuilder_1.UserRewardInfoRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `UserRewardInfo`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `UserRewardInfo`.
     */
    UserRewardInfo.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, UserRewardInfo);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    UserRewardInfo.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for UserRewardInfo.
     */
    UserRewardInfo._entityName = 'UserRewardInfo';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for UserRewardInfo.
     */
    UserRewardInfo._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    UserRewardInfo._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return UserRewardInfo;
}(core_1.Entity));
exports.UserRewardInfo = UserRewardInfo;
(function (UserRewardInfo) {
    /**
     * Static representation of the [[availableAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserRewardInfo.AVAILABLE_AMOUNT = new core_1.BigNumberField('availableAmount', UserRewardInfo, 'Edm.Decimal');
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserRewardInfo.CURRENCY = new core_1.StringField('currency', UserRewardInfo, 'Edm.String');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserRewardInfo.USER_ID = new core_1.StringField('userId', UserRewardInfo, 'Edm.String');
    /**
     * All fields of the UserRewardInfo entity.
     */
    UserRewardInfo._allFields = [
        UserRewardInfo.AVAILABLE_AMOUNT,
        UserRewardInfo.CURRENCY,
        UserRewardInfo.USER_ID
    ];
    /**
     * All fields selector.
     */
    UserRewardInfo.ALL_FIELDS = new core_1.AllFields('*', UserRewardInfo);
    /**
     * All key fields of the UserRewardInfo entity.
     */
    UserRewardInfo._keyFields = [UserRewardInfo.USER_ID];
    /**
     * Mapping of all key field names to the respective static field property UserRewardInfo.
     */
    UserRewardInfo._keys = UserRewardInfo._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(UserRewardInfo = exports.UserRewardInfo || (exports.UserRewardInfo = {}));
exports.UserRewardInfo = UserRewardInfo;
//# sourceMappingURL=UserRewardInfo.js.map