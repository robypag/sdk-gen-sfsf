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
var UserBadgesRequestBuilder_1 = require("./UserBadgesRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "UserBadges" of service "SFOData".
 */
var UserBadges = /** @class */ (function (_super) {
    __extends(UserBadges, _super);
    function UserBadges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `UserBadges`.
     * @returns A builder that constructs instances of entity type `UserBadges`.
     */
    UserBadges.builder = function () {
        return core_1.Entity.entityBuilder(UserBadges);
    };
    /**
     * Returns a request builder to construct requests for operations on the `UserBadges` entity type.
     * @returns A `UserBadges` request builder.
     */
    UserBadges.requestBuilder = function () {
        return new UserBadgesRequestBuilder_1.UserBadgesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `UserBadges`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `UserBadges`.
     */
    UserBadges.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, UserBadges);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    UserBadges.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for UserBadges.
     */
    UserBadges._entityName = 'UserBadges';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for UserBadges.
     */
    UserBadges._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    UserBadges._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return UserBadges;
}(core_1.Entity));
exports.UserBadges = UserBadges;
(function (UserBadges) {
    /**
     * Static representation of the [[badgeCreatorName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserBadges.BADGE_CREATOR_NAME = new core_1.StringField('badgeCreatorName', UserBadges, 'Edm.String');
    /**
     * Static representation of the [[badgeId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserBadges.BADGE_ID = new core_1.NumberField('badgeId', UserBadges, 'Edm.Int32');
    /**
     * Static representation of the [[badgeInstanceId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserBadges.BADGE_INSTANCE_ID = new core_1.NumberField('badgeInstanceId', UserBadges, 'Edm.Int32');
    /**
     * Static representation of the [[badgeTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserBadges.BADGE_TITLE = new core_1.StringField('badgeTitle', UserBadges, 'Edm.String');
    /**
     * Static representation of the [[comment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserBadges.COMMENT = new core_1.StringField('comment', UserBadges, 'Edm.String');
    /**
     * Static representation of the [[creatorUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserBadges.CREATOR_USER_ID = new core_1.StringField('creatorUserID', UserBadges, 'Edm.String');
    /**
     * Static representation of the [[lastModified]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserBadges.LAST_MODIFIED = new core_1.DateField('lastModified', UserBadges, 'Edm.DateTime');
    /**
     * Static representation of the [[photo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserBadges.PHOTO = new core_1.BinaryField('photo', UserBadges, 'Edm.Binary');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserBadges.USER_ID = new core_1.StringField('userId', UserBadges, 'Edm.String');
    /**
     * All fields of the UserBadges entity.
     */
    UserBadges._allFields = [
        UserBadges.BADGE_CREATOR_NAME,
        UserBadges.BADGE_ID,
        UserBadges.BADGE_INSTANCE_ID,
        UserBadges.BADGE_TITLE,
        UserBadges.COMMENT,
        UserBadges.CREATOR_USER_ID,
        UserBadges.LAST_MODIFIED,
        UserBadges.PHOTO,
        UserBadges.USER_ID
    ];
    /**
     * All fields selector.
     */
    UserBadges.ALL_FIELDS = new core_1.AllFields('*', UserBadges);
    /**
     * All key fields of the UserBadges entity.
     */
    UserBadges._keyFields = [UserBadges.BADGE_INSTANCE_ID, UserBadges.USER_ID];
    /**
     * Mapping of all key field names to the respective static field property UserBadges.
     */
    UserBadges._keys = UserBadges._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(UserBadges = exports.UserBadges || (exports.UserBadges = {}));
exports.UserBadges = UserBadges;
//# sourceMappingURL=UserBadges.js.map