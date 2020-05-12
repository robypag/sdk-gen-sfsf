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
var EpPublicProfileRequestBuilder_1 = require("./EpPublicProfileRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EPPublicProfile" of service "SFOData".
 */
var EpPublicProfile = /** @class */ (function (_super) {
    __extends(EpPublicProfile, _super);
    function EpPublicProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EpPublicProfile`.
     * @returns A builder that constructs instances of entity type `EpPublicProfile`.
     */
    EpPublicProfile.builder = function () {
        return core_1.Entity.entityBuilder(EpPublicProfile);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EpPublicProfile` entity type.
     * @returns A `EpPublicProfile` request builder.
     */
    EpPublicProfile.requestBuilder = function () {
        return new EpPublicProfileRequestBuilder_1.EpPublicProfileRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EpPublicProfile`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EpPublicProfile`.
     */
    EpPublicProfile.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EpPublicProfile);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EpPublicProfile.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EpPublicProfile.
     */
    EpPublicProfile._entityName = 'EPPublicProfile';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EpPublicProfile.
     */
    EpPublicProfile._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EpPublicProfile._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return EpPublicProfile;
}(core_1.Entity));
exports.EpPublicProfile = EpPublicProfile;
(function (EpPublicProfile) {
    /**
     * Static representation of the [[aboutMeVideoToken]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpPublicProfile.ABOUT_ME_VIDEO_TOKEN = new core_1.StringField('aboutMeVideoToken', EpPublicProfile, 'Edm.String');
    /**
     * Static representation of the [[aboutMeVideoUploadId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpPublicProfile.ABOUT_ME_VIDEO_UPLOAD_ID = new core_1.StringField('aboutMeVideoUploadId', EpPublicProfile, 'Edm.String');
    /**
     * Static representation of the [[applicationId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpPublicProfile.APPLICATION_ID = new core_1.StringField('applicationId', EpPublicProfile, 'Edm.String');
    /**
     * Static representation of the [[hasAboutMeVideo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpPublicProfile.HAS_ABOUT_ME_VIDEO = new core_1.BooleanField('hasAboutMeVideo', EpPublicProfile, 'Edm.Boolean');
    /**
     * Static representation of the [[hasIntroduction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpPublicProfile.HAS_INTRODUCTION = new core_1.BooleanField('hasIntroduction', EpPublicProfile, 'Edm.Boolean');
    /**
     * Static representation of the [[hasMyName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpPublicProfile.HAS_MY_NAME = new core_1.BooleanField('hasMyName', EpPublicProfile, 'Edm.Boolean');
    /**
     * Static representation of the [[hasMyNameAudio]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpPublicProfile.HAS_MY_NAME_AUDIO = new core_1.BooleanField('hasMyNameAudio', EpPublicProfile, 'Edm.Boolean');
    /**
     * Static representation of the [[introduction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpPublicProfile.INTRODUCTION = new core_1.StringField('introduction', EpPublicProfile, 'Edm.String');
    /**
     * Static representation of the [[isAddBadgeAllowed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpPublicProfile.IS_ADD_BADGE_ALLOWED = new core_1.BooleanField('isAddBadgeAllowed', EpPublicProfile, 'Edm.Boolean');
    /**
     * Static representation of the [[isBadgesSectionEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpPublicProfile.IS_BADGES_SECTION_ENABLED = new core_1.BooleanField('isBadgesSectionEnabled', EpPublicProfile, 'Edm.Boolean');
    /**
     * Static representation of the [[isExpressiveMode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpPublicProfile.IS_EXPRESSIVE_MODE = new core_1.BooleanField('isExpressiveMode', EpPublicProfile, 'Edm.Boolean');
    /**
     * Static representation of the [[isExpressivePhotoEditable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpPublicProfile.IS_EXPRESSIVE_PHOTO_EDITABLE = new core_1.BooleanField('isExpressivePhotoEditable', EpPublicProfile, 'Edm.Boolean');
    /**
     * Static representation of the [[mediaServiceBaseUrl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpPublicProfile.MEDIA_SERVICE_BASE_URL = new core_1.StringField('mediaServiceBaseUrl', EpPublicProfile, 'Edm.String');
    /**
     * Static representation of the [[myNameAudioToken]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpPublicProfile.MY_NAME_AUDIO_TOKEN = new core_1.StringField('myNameAudioToken', EpPublicProfile, 'Edm.String');
    /**
     * Static representation of the [[myNameAudioUploadId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpPublicProfile.MY_NAME_AUDIO_UPLOAD_ID = new core_1.StringField('myNameAudioUploadId', EpPublicProfile, 'Edm.String');
    /**
     * Static representation of the [[myNameText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpPublicProfile.MY_NAME_TEXT = new core_1.StringField('myNameText', EpPublicProfile, 'Edm.String');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpPublicProfile.USER_ID = new core_1.StringField('userId', EpPublicProfile, 'Edm.String');
    /**
     * All fields of the EpPublicProfile entity.
     */
    EpPublicProfile._allFields = [
        EpPublicProfile.ABOUT_ME_VIDEO_TOKEN,
        EpPublicProfile.ABOUT_ME_VIDEO_UPLOAD_ID,
        EpPublicProfile.APPLICATION_ID,
        EpPublicProfile.HAS_ABOUT_ME_VIDEO,
        EpPublicProfile.HAS_INTRODUCTION,
        EpPublicProfile.HAS_MY_NAME,
        EpPublicProfile.HAS_MY_NAME_AUDIO,
        EpPublicProfile.INTRODUCTION,
        EpPublicProfile.IS_ADD_BADGE_ALLOWED,
        EpPublicProfile.IS_BADGES_SECTION_ENABLED,
        EpPublicProfile.IS_EXPRESSIVE_MODE,
        EpPublicProfile.IS_EXPRESSIVE_PHOTO_EDITABLE,
        EpPublicProfile.MEDIA_SERVICE_BASE_URL,
        EpPublicProfile.MY_NAME_AUDIO_TOKEN,
        EpPublicProfile.MY_NAME_AUDIO_UPLOAD_ID,
        EpPublicProfile.MY_NAME_TEXT,
        EpPublicProfile.USER_ID
    ];
    /**
     * All fields selector.
     */
    EpPublicProfile.ALL_FIELDS = new core_1.AllFields('*', EpPublicProfile);
    /**
     * All key fields of the EpPublicProfile entity.
     */
    EpPublicProfile._keyFields = [EpPublicProfile.USER_ID];
    /**
     * Mapping of all key field names to the respective static field property EpPublicProfile.
     */
    EpPublicProfile._keys = EpPublicProfile._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EpPublicProfile = exports.EpPublicProfile || (exports.EpPublicProfile = {}));
exports.EpPublicProfile = EpPublicProfile;
//# sourceMappingURL=EpPublicProfile.js.map