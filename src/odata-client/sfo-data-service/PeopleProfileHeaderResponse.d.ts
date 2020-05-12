import { BigNumber } from 'bignumber.js';
import { CoUserInfoElementBean, CoUserInfoElementBeanField } from './CoUserInfoElementBean';
import { CoSocialAccountBean, CoSocialAccountBeanField } from './CoSocialAccountBean';
import { ComplexTypeBigNumberPropertyField, ComplexTypeBooleanPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * PeopleProfileHeaderResponse
 */
export interface PeopleProfileHeaderResponse {
    /**
     * aboutMeVideoDeleteUrl.
     * @nullable
     */
    aboutMeVideoDeleteUrl?: string;
    /**
     * aboutMeVideoEnabled.
     * @nullable
     */
    aboutMeVideoEnabled?: boolean;
    /**
     * aboutMeVideoGetFileUrl.
     * @nullable
     */
    aboutMeVideoGetFileUrl?: string;
    /**
     * aboutMeVideoStatusUrl.
     * @nullable
     */
    aboutMeVideoStatusUrl?: string;
    /**
     * aboutMeVideoToken.
     * @nullable
     */
    aboutMeVideoToken?: string;
    /**
     * aboutMeVideoUploadId.
     * @nullable
     */
    aboutMeVideoUploadId?: string;
    /**
     * aboutMeVideoUploadUrl.
     * @nullable
     */
    aboutMeVideoUploadUrl?: string;
    /**
     * applicationId.
     * @nullable
     */
    applicationId?: string;
    /**
     * businessPhone.
     * @nullable
     */
    businessPhone?: string;
    /**
     * cellPhone.
     * @nullable
     */
    cellPhone?: string;
    /**
     * customFields.
     * @nullable
     */
    customFields?: CoUserInfoElementBean;
    /**
     * dSTSavings.
     * @nullable
     */
    dStSavings?: number;
    /**
     * department.
     * @nullable
     */
    department?: string;
    /**
     * division.
     * @nullable
     */
    division?: string;
    /**
     * email.
     * @nullable
     */
    email?: string;
    /**
     * expressivePhotoMod.
     * @nullable
     */
    expressivePhotoMod?: string;
    /**
     * fullName.
     * @nullable
     */
    fullName?: string;
    /**
     * introduction.
     * @nullable
     */
    introduction?: string;
    /**
     * isAboutMeTextEnabled.
     * @nullable
     */
    isAboutMeTextEnabled?: boolean;
    /**
     * isAllowUploadBGPhoto.
     * @nullable
     */
    isAllowUploadBgPhoto?: boolean;
    /**
     * isPercentCompleteEnabled.
     * @nullable
     */
    isPercentCompleteEnabled?: boolean;
    /**
     * isShowAsOfDate.
     * @nullable
     */
    isShowAsOfDate?: boolean;
    /**
     * isShowEditLink.
     * @nullable
     */
    isShowEditLink?: boolean;
    /**
     * isTimeZoneInDaylightTime.
     * @nullable
     */
    isTimeZoneInDaylightTime?: boolean;
    /**
     * liveProfileOriginalPhotoId.
     * @nullable
     */
    liveProfileOriginalPhotoId?: BigNumber;
    /**
     * liveProfilePhotoId.
     * @nullable
     */
    liveProfilePhotoId?: BigNumber;
    /**
     * liveProfilePhotoMod.
     * @nullable
     */
    liveProfilePhotoMod?: string;
    /**
     * localTimeEnabled.
     * @nullable
     */
    localTimeEnabled?: boolean;
    /**
     * location.
     * @nullable
     */
    location?: string;
    /**
     * mediaServiceBaseUrl.
     * @nullable
     */
    mediaServiceBaseUrl?: string;
    /**
     * myNameAudioDeleteUrl.
     * @nullable
     */
    myNameAudioDeleteUrl?: string;
    /**
     * myNameAudioGetFileUrl.
     * @nullable
     */
    myNameAudioGetFileUrl?: string;
    /**
     * myNameAudioStatusUrl.
     * @nullable
     */
    myNameAudioStatusUrl?: string;
    /**
     * myNameAudioUploadUrl.
     * @nullable
     */
    myNameAudioUploadUrl?: string;
    /**
     * myNameEnabled.
     * @nullable
     */
    myNameEnabled?: boolean;
    /**
     * myNameText.
     * @nullable
     */
    myNameText?: string;
    /**
     * myNameToken.
     * @nullable
     */
    myNameToken?: string;
    /**
     * myNameUploadId.
     * @nullable
     */
    myNameUploadId?: string;
    /**
     * phoneNumbers.
     * @nullable
     */
    phoneNumbers?: CoUserInfoElementBean;
    /**
     * showLiveProfilePhoto.
     * @nullable
     */
    showLiveProfilePhoto?: boolean;
    /**
     * socialAccounts.
     * @nullable
     */
    socialAccounts?: CoSocialAccountBean;
    /**
     * socialNetworks.
     * @nullable
     */
    socialNetworks?: CoUserInfoElementBean;
    /**
     * targetUserId.
     */
    targetUserId: string;
    /**
     * timezone.
     * @nullable
     */
    timezone?: string;
    /**
     * title.
     * @nullable
     */
    title?: string;
    /**
     * userName.
     * @nullable
     */
    userName?: string;
    /**
     * utcOffset.
     * @nullable
     */
    utcOffset?: number;
}
/**
 * @deprecated since v1.6.0. Use [[PeopleProfileHeaderResponse.build]] instead.
 */
export declare function createPeopleProfileHeaderResponse(json: any): PeopleProfileHeaderResponse;
/**
 * PeopleProfileHeaderResponseField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PeopleProfileHeaderResponseField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[PeopleProfileHeaderResponse.aboutMeVideoDeleteUrl]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    aboutMeVideoDeleteUrl: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeopleProfileHeaderResponse.aboutMeVideoEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    aboutMeVideoEnabled: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[PeopleProfileHeaderResponse.aboutMeVideoGetFileUrl]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    aboutMeVideoGetFileUrl: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeopleProfileHeaderResponse.aboutMeVideoStatusUrl]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    aboutMeVideoStatusUrl: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeopleProfileHeaderResponse.aboutMeVideoToken]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    aboutMeVideoToken: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeopleProfileHeaderResponse.aboutMeVideoUploadId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    aboutMeVideoUploadId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeopleProfileHeaderResponse.aboutMeVideoUploadUrl]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    aboutMeVideoUploadUrl: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeopleProfileHeaderResponse.applicationId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    applicationId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeopleProfileHeaderResponse.businessPhone]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    businessPhone: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeopleProfileHeaderResponse.cellPhone]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cellPhone: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeopleProfileHeaderResponse.customFields]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    customFields: CoUserInfoElementBeanField<EntityT>;
    /**
     * Representation of the [[PeopleProfileHeaderResponse.dStSavings]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dStSavings: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PeopleProfileHeaderResponse.department]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    department: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeopleProfileHeaderResponse.division]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    division: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeopleProfileHeaderResponse.email]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    email: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeopleProfileHeaderResponse.expressivePhotoMod]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    expressivePhotoMod: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeopleProfileHeaderResponse.fullName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fullName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeopleProfileHeaderResponse.introduction]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    introduction: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeopleProfileHeaderResponse.isAboutMeTextEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    isAboutMeTextEnabled: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[PeopleProfileHeaderResponse.isAllowUploadBgPhoto]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    isAllowUploadBgPhoto: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[PeopleProfileHeaderResponse.isPercentCompleteEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    isPercentCompleteEnabled: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[PeopleProfileHeaderResponse.isShowAsOfDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    isShowAsOfDate: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[PeopleProfileHeaderResponse.isShowEditLink]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    isShowEditLink: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[PeopleProfileHeaderResponse.isTimeZoneInDaylightTime]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    isTimeZoneInDaylightTime: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[PeopleProfileHeaderResponse.liveProfileOriginalPhotoId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    liveProfileOriginalPhotoId: ComplexTypeBigNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PeopleProfileHeaderResponse.liveProfilePhotoId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    liveProfilePhotoId: ComplexTypeBigNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PeopleProfileHeaderResponse.liveProfilePhotoMod]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    liveProfilePhotoMod: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeopleProfileHeaderResponse.localTimeEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    localTimeEnabled: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[PeopleProfileHeaderResponse.location]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    location: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeopleProfileHeaderResponse.mediaServiceBaseUrl]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    mediaServiceBaseUrl: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeopleProfileHeaderResponse.myNameAudioDeleteUrl]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    myNameAudioDeleteUrl: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeopleProfileHeaderResponse.myNameAudioGetFileUrl]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    myNameAudioGetFileUrl: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeopleProfileHeaderResponse.myNameAudioStatusUrl]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    myNameAudioStatusUrl: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeopleProfileHeaderResponse.myNameAudioUploadUrl]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    myNameAudioUploadUrl: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeopleProfileHeaderResponse.myNameEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    myNameEnabled: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[PeopleProfileHeaderResponse.myNameText]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    myNameText: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeopleProfileHeaderResponse.myNameToken]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    myNameToken: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeopleProfileHeaderResponse.myNameUploadId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    myNameUploadId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeopleProfileHeaderResponse.phoneNumbers]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    phoneNumbers: CoUserInfoElementBeanField<EntityT>;
    /**
     * Representation of the [[PeopleProfileHeaderResponse.showLiveProfilePhoto]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    showLiveProfilePhoto: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[PeopleProfileHeaderResponse.socialAccounts]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    socialAccounts: CoSocialAccountBeanField<EntityT>;
    /**
     * Representation of the [[PeopleProfileHeaderResponse.socialNetworks]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    socialNetworks: CoUserInfoElementBeanField<EntityT>;
    /**
     * Representation of the [[PeopleProfileHeaderResponse.targetUserId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    targetUserId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeopleProfileHeaderResponse.timezone]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    timezone: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeopleProfileHeaderResponse.title]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    title: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeopleProfileHeaderResponse.userName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    userName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeopleProfileHeaderResponse.utcOffset]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    utcOffset: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace PeopleProfileHeaderResponse {
    function build(json: {
        [keys: string]: FieldType;
    }): PeopleProfileHeaderResponse;
}
//# sourceMappingURL=PeopleProfileHeaderResponse.d.ts.map