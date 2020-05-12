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
Object.defineProperty(exports, "__esModule", { value: true });
var CoUserInfoElementBean_1 = require("./CoUserInfoElementBean");
var CoSocialAccountBean_1 = require("./CoSocialAccountBean");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated since v1.6.0. Use [[PeopleProfileHeaderResponse.build]] instead.
 */
function createPeopleProfileHeaderResponse(json) {
    return PeopleProfileHeaderResponse.build(json);
}
exports.createPeopleProfileHeaderResponse = createPeopleProfileHeaderResponse;
/**
 * PeopleProfileHeaderResponseField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PeopleProfileHeaderResponseField = /** @class */ (function (_super) {
    __extends(PeopleProfileHeaderResponseField, _super);
    function PeopleProfileHeaderResponseField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[PeopleProfileHeaderResponse.aboutMeVideoDeleteUrl]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.aboutMeVideoDeleteUrl = new core_1.ComplexTypeStringPropertyField('aboutMeVideoDeleteUrl', _this, 'Edm.String');
        /**
         * Representation of the [[PeopleProfileHeaderResponse.aboutMeVideoEnabled]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.aboutMeVideoEnabled = new core_1.ComplexTypeBooleanPropertyField('aboutMeVideoEnabled', _this, 'Edm.Boolean');
        /**
         * Representation of the [[PeopleProfileHeaderResponse.aboutMeVideoGetFileUrl]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.aboutMeVideoGetFileUrl = new core_1.ComplexTypeStringPropertyField('aboutMeVideoGetFileUrl', _this, 'Edm.String');
        /**
         * Representation of the [[PeopleProfileHeaderResponse.aboutMeVideoStatusUrl]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.aboutMeVideoStatusUrl = new core_1.ComplexTypeStringPropertyField('aboutMeVideoStatusUrl', _this, 'Edm.String');
        /**
         * Representation of the [[PeopleProfileHeaderResponse.aboutMeVideoToken]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.aboutMeVideoToken = new core_1.ComplexTypeStringPropertyField('aboutMeVideoToken', _this, 'Edm.String');
        /**
         * Representation of the [[PeopleProfileHeaderResponse.aboutMeVideoUploadId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.aboutMeVideoUploadId = new core_1.ComplexTypeStringPropertyField('aboutMeVideoUploadId', _this, 'Edm.String');
        /**
         * Representation of the [[PeopleProfileHeaderResponse.aboutMeVideoUploadUrl]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.aboutMeVideoUploadUrl = new core_1.ComplexTypeStringPropertyField('aboutMeVideoUploadUrl', _this, 'Edm.String');
        /**
         * Representation of the [[PeopleProfileHeaderResponse.applicationId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.applicationId = new core_1.ComplexTypeStringPropertyField('applicationId', _this, 'Edm.String');
        /**
         * Representation of the [[PeopleProfileHeaderResponse.businessPhone]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.businessPhone = new core_1.ComplexTypeStringPropertyField('businessPhone', _this, 'Edm.String');
        /**
         * Representation of the [[PeopleProfileHeaderResponse.cellPhone]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cellPhone = new core_1.ComplexTypeStringPropertyField('cellPhone', _this, 'Edm.String');
        /**
         * Representation of the [[PeopleProfileHeaderResponse.customFields]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customFields = new CoUserInfoElementBean_1.CoUserInfoElementBeanField('customFields', _this);
        /**
         * Representation of the [[PeopleProfileHeaderResponse.dStSavings]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dStSavings = new core_1.ComplexTypeNumberPropertyField('dSTSavings', _this, 'Edm.Int32');
        /**
         * Representation of the [[PeopleProfileHeaderResponse.department]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.department = new core_1.ComplexTypeStringPropertyField('department', _this, 'Edm.String');
        /**
         * Representation of the [[PeopleProfileHeaderResponse.division]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.division = new core_1.ComplexTypeStringPropertyField('division', _this, 'Edm.String');
        /**
         * Representation of the [[PeopleProfileHeaderResponse.email]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.email = new core_1.ComplexTypeStringPropertyField('email', _this, 'Edm.String');
        /**
         * Representation of the [[PeopleProfileHeaderResponse.expressivePhotoMod]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expressivePhotoMod = new core_1.ComplexTypeStringPropertyField('expressivePhotoMod', _this, 'Edm.String');
        /**
         * Representation of the [[PeopleProfileHeaderResponse.fullName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fullName = new core_1.ComplexTypeStringPropertyField('fullName', _this, 'Edm.String');
        /**
         * Representation of the [[PeopleProfileHeaderResponse.introduction]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.introduction = new core_1.ComplexTypeStringPropertyField('introduction', _this, 'Edm.String');
        /**
         * Representation of the [[PeopleProfileHeaderResponse.isAboutMeTextEnabled]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.isAboutMeTextEnabled = new core_1.ComplexTypeBooleanPropertyField('isAboutMeTextEnabled', _this, 'Edm.Boolean');
        /**
         * Representation of the [[PeopleProfileHeaderResponse.isAllowUploadBgPhoto]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.isAllowUploadBgPhoto = new core_1.ComplexTypeBooleanPropertyField('isAllowUploadBGPhoto', _this, 'Edm.Boolean');
        /**
         * Representation of the [[PeopleProfileHeaderResponse.isPercentCompleteEnabled]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.isPercentCompleteEnabled = new core_1.ComplexTypeBooleanPropertyField('isPercentCompleteEnabled', _this, 'Edm.Boolean');
        /**
         * Representation of the [[PeopleProfileHeaderResponse.isShowAsOfDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.isShowAsOfDate = new core_1.ComplexTypeBooleanPropertyField('isShowAsOfDate', _this, 'Edm.Boolean');
        /**
         * Representation of the [[PeopleProfileHeaderResponse.isShowEditLink]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.isShowEditLink = new core_1.ComplexTypeBooleanPropertyField('isShowEditLink', _this, 'Edm.Boolean');
        /**
         * Representation of the [[PeopleProfileHeaderResponse.isTimeZoneInDaylightTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.isTimeZoneInDaylightTime = new core_1.ComplexTypeBooleanPropertyField('isTimeZoneInDaylightTime', _this, 'Edm.Boolean');
        /**
         * Representation of the [[PeopleProfileHeaderResponse.liveProfileOriginalPhotoId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.liveProfileOriginalPhotoId = new core_1.ComplexTypeBigNumberPropertyField('liveProfileOriginalPhotoId', _this, 'Edm.Int64');
        /**
         * Representation of the [[PeopleProfileHeaderResponse.liveProfilePhotoId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.liveProfilePhotoId = new core_1.ComplexTypeBigNumberPropertyField('liveProfilePhotoId', _this, 'Edm.Int64');
        /**
         * Representation of the [[PeopleProfileHeaderResponse.liveProfilePhotoMod]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.liveProfilePhotoMod = new core_1.ComplexTypeStringPropertyField('liveProfilePhotoMod', _this, 'Edm.String');
        /**
         * Representation of the [[PeopleProfileHeaderResponse.localTimeEnabled]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.localTimeEnabled = new core_1.ComplexTypeBooleanPropertyField('localTimeEnabled', _this, 'Edm.Boolean');
        /**
         * Representation of the [[PeopleProfileHeaderResponse.location]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.location = new core_1.ComplexTypeStringPropertyField('location', _this, 'Edm.String');
        /**
         * Representation of the [[PeopleProfileHeaderResponse.mediaServiceBaseUrl]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.mediaServiceBaseUrl = new core_1.ComplexTypeStringPropertyField('mediaServiceBaseUrl', _this, 'Edm.String');
        /**
         * Representation of the [[PeopleProfileHeaderResponse.myNameAudioDeleteUrl]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.myNameAudioDeleteUrl = new core_1.ComplexTypeStringPropertyField('myNameAudioDeleteUrl', _this, 'Edm.String');
        /**
         * Representation of the [[PeopleProfileHeaderResponse.myNameAudioGetFileUrl]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.myNameAudioGetFileUrl = new core_1.ComplexTypeStringPropertyField('myNameAudioGetFileUrl', _this, 'Edm.String');
        /**
         * Representation of the [[PeopleProfileHeaderResponse.myNameAudioStatusUrl]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.myNameAudioStatusUrl = new core_1.ComplexTypeStringPropertyField('myNameAudioStatusUrl', _this, 'Edm.String');
        /**
         * Representation of the [[PeopleProfileHeaderResponse.myNameAudioUploadUrl]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.myNameAudioUploadUrl = new core_1.ComplexTypeStringPropertyField('myNameAudioUploadUrl', _this, 'Edm.String');
        /**
         * Representation of the [[PeopleProfileHeaderResponse.myNameEnabled]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.myNameEnabled = new core_1.ComplexTypeBooleanPropertyField('myNameEnabled', _this, 'Edm.Boolean');
        /**
         * Representation of the [[PeopleProfileHeaderResponse.myNameText]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.myNameText = new core_1.ComplexTypeStringPropertyField('myNameText', _this, 'Edm.String');
        /**
         * Representation of the [[PeopleProfileHeaderResponse.myNameToken]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.myNameToken = new core_1.ComplexTypeStringPropertyField('myNameToken', _this, 'Edm.String');
        /**
         * Representation of the [[PeopleProfileHeaderResponse.myNameUploadId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.myNameUploadId = new core_1.ComplexTypeStringPropertyField('myNameUploadId', _this, 'Edm.String');
        /**
         * Representation of the [[PeopleProfileHeaderResponse.phoneNumbers]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.phoneNumbers = new CoUserInfoElementBean_1.CoUserInfoElementBeanField('phoneNumbers', _this);
        /**
         * Representation of the [[PeopleProfileHeaderResponse.showLiveProfilePhoto]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.showLiveProfilePhoto = new core_1.ComplexTypeBooleanPropertyField('showLiveProfilePhoto', _this, 'Edm.Boolean');
        /**
         * Representation of the [[PeopleProfileHeaderResponse.socialAccounts]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.socialAccounts = new CoSocialAccountBean_1.CoSocialAccountBeanField('socialAccounts', _this);
        /**
         * Representation of the [[PeopleProfileHeaderResponse.socialNetworks]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.socialNetworks = new CoUserInfoElementBean_1.CoUserInfoElementBeanField('socialNetworks', _this);
        /**
         * Representation of the [[PeopleProfileHeaderResponse.targetUserId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.targetUserId = new core_1.ComplexTypeStringPropertyField('targetUserId', _this, 'Edm.String');
        /**
         * Representation of the [[PeopleProfileHeaderResponse.timezone]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.timezone = new core_1.ComplexTypeStringPropertyField('timezone', _this, 'Edm.String');
        /**
         * Representation of the [[PeopleProfileHeaderResponse.title]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.title = new core_1.ComplexTypeStringPropertyField('title', _this, 'Edm.String');
        /**
         * Representation of the [[PeopleProfileHeaderResponse.userName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.userName = new core_1.ComplexTypeStringPropertyField('userName', _this, 'Edm.String');
        /**
         * Representation of the [[PeopleProfileHeaderResponse.utcOffset]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.utcOffset = new core_1.ComplexTypeNumberPropertyField('utcOffset', _this, 'Edm.Int32');
        return _this;
    }
    return PeopleProfileHeaderResponseField;
}(core_1.ComplexTypeField));
exports.PeopleProfileHeaderResponseField = PeopleProfileHeaderResponseField;
var PeopleProfileHeaderResponse;
(function (PeopleProfileHeaderResponse) {
    function build(json) {
        return core_1.createComplexType(json, {
            aboutMeVideoDeleteUrl: function (aboutMeVideoDeleteUrl) { return ({ aboutMeVideoDeleteUrl: core_1.edmToTs(aboutMeVideoDeleteUrl, 'Edm.String') }); },
            aboutMeVideoEnabled: function (aboutMeVideoEnabled) { return ({ aboutMeVideoEnabled: core_1.edmToTs(aboutMeVideoEnabled, 'Edm.Boolean') }); },
            aboutMeVideoGetFileUrl: function (aboutMeVideoGetFileUrl) { return ({ aboutMeVideoGetFileUrl: core_1.edmToTs(aboutMeVideoGetFileUrl, 'Edm.String') }); },
            aboutMeVideoStatusUrl: function (aboutMeVideoStatusUrl) { return ({ aboutMeVideoStatusUrl: core_1.edmToTs(aboutMeVideoStatusUrl, 'Edm.String') }); },
            aboutMeVideoToken: function (aboutMeVideoToken) { return ({ aboutMeVideoToken: core_1.edmToTs(aboutMeVideoToken, 'Edm.String') }); },
            aboutMeVideoUploadId: function (aboutMeVideoUploadId) { return ({ aboutMeVideoUploadId: core_1.edmToTs(aboutMeVideoUploadId, 'Edm.String') }); },
            aboutMeVideoUploadUrl: function (aboutMeVideoUploadUrl) { return ({ aboutMeVideoUploadUrl: core_1.edmToTs(aboutMeVideoUploadUrl, 'Edm.String') }); },
            applicationId: function (applicationId) { return ({ applicationId: core_1.edmToTs(applicationId, 'Edm.String') }); },
            businessPhone: function (businessPhone) { return ({ businessPhone: core_1.edmToTs(businessPhone, 'Edm.String') }); },
            cellPhone: function (cellPhone) { return ({ cellPhone: core_1.edmToTs(cellPhone, 'Edm.String') }); },
            customFields: function (customFields) { return ({ customFields: CoUserInfoElementBean_1.CoUserInfoElementBean.build(customFields) }); },
            dSTSavings: function (dStSavings) { return ({ dStSavings: core_1.edmToTs(dStSavings, 'Edm.Int32') }); },
            department: function (department) { return ({ department: core_1.edmToTs(department, 'Edm.String') }); },
            division: function (division) { return ({ division: core_1.edmToTs(division, 'Edm.String') }); },
            email: function (email) { return ({ email: core_1.edmToTs(email, 'Edm.String') }); },
            expressivePhotoMod: function (expressivePhotoMod) { return ({ expressivePhotoMod: core_1.edmToTs(expressivePhotoMod, 'Edm.String') }); },
            fullName: function (fullName) { return ({ fullName: core_1.edmToTs(fullName, 'Edm.String') }); },
            introduction: function (introduction) { return ({ introduction: core_1.edmToTs(introduction, 'Edm.String') }); },
            isAboutMeTextEnabled: function (isAboutMeTextEnabled) { return ({ isAboutMeTextEnabled: core_1.edmToTs(isAboutMeTextEnabled, 'Edm.Boolean') }); },
            isAllowUploadBGPhoto: function (isAllowUploadBgPhoto) { return ({ isAllowUploadBgPhoto: core_1.edmToTs(isAllowUploadBgPhoto, 'Edm.Boolean') }); },
            isPercentCompleteEnabled: function (isPercentCompleteEnabled) { return ({ isPercentCompleteEnabled: core_1.edmToTs(isPercentCompleteEnabled, 'Edm.Boolean') }); },
            isShowAsOfDate: function (isShowAsOfDate) { return ({ isShowAsOfDate: core_1.edmToTs(isShowAsOfDate, 'Edm.Boolean') }); },
            isShowEditLink: function (isShowEditLink) { return ({ isShowEditLink: core_1.edmToTs(isShowEditLink, 'Edm.Boolean') }); },
            isTimeZoneInDaylightTime: function (isTimeZoneInDaylightTime) { return ({ isTimeZoneInDaylightTime: core_1.edmToTs(isTimeZoneInDaylightTime, 'Edm.Boolean') }); },
            liveProfileOriginalPhotoId: function (liveProfileOriginalPhotoId) { return ({ liveProfileOriginalPhotoId: core_1.edmToTs(liveProfileOriginalPhotoId, 'Edm.Int64') }); },
            liveProfilePhotoId: function (liveProfilePhotoId) { return ({ liveProfilePhotoId: core_1.edmToTs(liveProfilePhotoId, 'Edm.Int64') }); },
            liveProfilePhotoMod: function (liveProfilePhotoMod) { return ({ liveProfilePhotoMod: core_1.edmToTs(liveProfilePhotoMod, 'Edm.String') }); },
            localTimeEnabled: function (localTimeEnabled) { return ({ localTimeEnabled: core_1.edmToTs(localTimeEnabled, 'Edm.Boolean') }); },
            location: function (location) { return ({ location: core_1.edmToTs(location, 'Edm.String') }); },
            mediaServiceBaseUrl: function (mediaServiceBaseUrl) { return ({ mediaServiceBaseUrl: core_1.edmToTs(mediaServiceBaseUrl, 'Edm.String') }); },
            myNameAudioDeleteUrl: function (myNameAudioDeleteUrl) { return ({ myNameAudioDeleteUrl: core_1.edmToTs(myNameAudioDeleteUrl, 'Edm.String') }); },
            myNameAudioGetFileUrl: function (myNameAudioGetFileUrl) { return ({ myNameAudioGetFileUrl: core_1.edmToTs(myNameAudioGetFileUrl, 'Edm.String') }); },
            myNameAudioStatusUrl: function (myNameAudioStatusUrl) { return ({ myNameAudioStatusUrl: core_1.edmToTs(myNameAudioStatusUrl, 'Edm.String') }); },
            myNameAudioUploadUrl: function (myNameAudioUploadUrl) { return ({ myNameAudioUploadUrl: core_1.edmToTs(myNameAudioUploadUrl, 'Edm.String') }); },
            myNameEnabled: function (myNameEnabled) { return ({ myNameEnabled: core_1.edmToTs(myNameEnabled, 'Edm.Boolean') }); },
            myNameText: function (myNameText) { return ({ myNameText: core_1.edmToTs(myNameText, 'Edm.String') }); },
            myNameToken: function (myNameToken) { return ({ myNameToken: core_1.edmToTs(myNameToken, 'Edm.String') }); },
            myNameUploadId: function (myNameUploadId) { return ({ myNameUploadId: core_1.edmToTs(myNameUploadId, 'Edm.String') }); },
            phoneNumbers: function (phoneNumbers) { return ({ phoneNumbers: CoUserInfoElementBean_1.CoUserInfoElementBean.build(phoneNumbers) }); },
            showLiveProfilePhoto: function (showLiveProfilePhoto) { return ({ showLiveProfilePhoto: core_1.edmToTs(showLiveProfilePhoto, 'Edm.Boolean') }); },
            socialAccounts: function (socialAccounts) { return ({ socialAccounts: CoSocialAccountBean_1.CoSocialAccountBean.build(socialAccounts) }); },
            socialNetworks: function (socialNetworks) { return ({ socialNetworks: CoUserInfoElementBean_1.CoUserInfoElementBean.build(socialNetworks) }); },
            targetUserId: function (targetUserId) { return ({ targetUserId: core_1.edmToTs(targetUserId, 'Edm.String') }); },
            timezone: function (timezone) { return ({ timezone: core_1.edmToTs(timezone, 'Edm.String') }); },
            title: function (title) { return ({ title: core_1.edmToTs(title, 'Edm.String') }); },
            userName: function (userName) { return ({ userName: core_1.edmToTs(userName, 'Edm.String') }); },
            utcOffset: function (utcOffset) { return ({ utcOffset: core_1.edmToTs(utcOffset, 'Edm.Int32') }); }
        });
    }
    PeopleProfileHeaderResponse.build = build;
})(PeopleProfileHeaderResponse = exports.PeopleProfileHeaderResponse || (exports.PeopleProfileHeaderResponse = {}));
//# sourceMappingURL=PeopleProfileHeaderResponse.js.map