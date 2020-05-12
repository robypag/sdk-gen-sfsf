import { EpPublicProfileRequestBuilder } from './EpPublicProfileRequestBuilder';
import { AllFields, BooleanField, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EPPublicProfile" of service "SFOData".
 */
export declare class EpPublicProfile extends Entity implements EpPublicProfileType {
    /**
     * Technical entity name for EpPublicProfile.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EpPublicProfile.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
     * applicationId.
     * @nullable
     */
    applicationId?: string;
    /**
     * hasAboutMeVideo.
     * @nullable
     */
    hasAboutMeVideo?: boolean;
    /**
     * hasIntroduction.
     * @nullable
     */
    hasIntroduction?: boolean;
    /**
     * hasMyName.
     * @nullable
     */
    hasMyName?: boolean;
    /**
     * hasMyNameAudio.
     * @nullable
     */
    hasMyNameAudio?: boolean;
    /**
     * introduction.
     * @nullable
     */
    introduction?: string;
    /**
     * isAddBadgeAllowed.
     * @nullable
     */
    isAddBadgeAllowed?: boolean;
    /**
     * isBadgesSectionEnabled.
     * @nullable
     */
    isBadgesSectionEnabled?: boolean;
    /**
     * isExpressiveMode.
     * @nullable
     */
    isExpressiveMode?: boolean;
    /**
     * isExpressivePhotoEditable.
     * @nullable
     */
    isExpressivePhotoEditable?: boolean;
    /**
     * mediaServiceBaseUrl.
     * @nullable
     */
    mediaServiceBaseUrl?: string;
    /**
     * myNameAudioToken.
     * @nullable
     */
    myNameAudioToken?: string;
    /**
     * myNameAudioUploadId.
     * @nullable
     */
    myNameAudioUploadId?: string;
    /**
     * myNameText.
     * @nullable
     */
    myNameText?: string;
    /**
     * userId.
     */
    userId: string;
    /**
     * Returns an entity builder to construct instances `EpPublicProfile`.
     * @returns A builder that constructs instances of entity type `EpPublicProfile`.
     */
    static builder(): EntityBuilderType<EpPublicProfile, EpPublicProfileTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EpPublicProfile` entity type.
     * @returns A `EpPublicProfile` request builder.
     */
    static requestBuilder(): EpPublicProfileRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EpPublicProfile`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EpPublicProfile`.
     */
    static customField(fieldName: string): CustomField<EpPublicProfile>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface EpPublicProfileType {
    aboutMeVideoToken?: string;
    aboutMeVideoUploadId?: string;
    applicationId?: string;
    hasAboutMeVideo?: boolean;
    hasIntroduction?: boolean;
    hasMyName?: boolean;
    hasMyNameAudio?: boolean;
    introduction?: string;
    isAddBadgeAllowed?: boolean;
    isBadgesSectionEnabled?: boolean;
    isExpressiveMode?: boolean;
    isExpressivePhotoEditable?: boolean;
    mediaServiceBaseUrl?: string;
    myNameAudioToken?: string;
    myNameAudioUploadId?: string;
    myNameText?: string;
    userId: string;
}
export interface EpPublicProfileTypeForceMandatory {
    aboutMeVideoToken: string;
    aboutMeVideoUploadId: string;
    applicationId: string;
    hasAboutMeVideo: boolean;
    hasIntroduction: boolean;
    hasMyName: boolean;
    hasMyNameAudio: boolean;
    introduction: string;
    isAddBadgeAllowed: boolean;
    isBadgesSectionEnabled: boolean;
    isExpressiveMode: boolean;
    isExpressivePhotoEditable: boolean;
    mediaServiceBaseUrl: string;
    myNameAudioToken: string;
    myNameAudioUploadId: string;
    myNameText: string;
    userId: string;
}
export declare namespace EpPublicProfile {
    /**
     * Static representation of the [[aboutMeVideoToken]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ABOUT_ME_VIDEO_TOKEN: StringField<EpPublicProfile>;
    /**
     * Static representation of the [[aboutMeVideoUploadId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ABOUT_ME_VIDEO_UPLOAD_ID: StringField<EpPublicProfile>;
    /**
     * Static representation of the [[applicationId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPLICATION_ID: StringField<EpPublicProfile>;
    /**
     * Static representation of the [[hasAboutMeVideo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HAS_ABOUT_ME_VIDEO: BooleanField<EpPublicProfile>;
    /**
     * Static representation of the [[hasIntroduction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HAS_INTRODUCTION: BooleanField<EpPublicProfile>;
    /**
     * Static representation of the [[hasMyName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HAS_MY_NAME: BooleanField<EpPublicProfile>;
    /**
     * Static representation of the [[hasMyNameAudio]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HAS_MY_NAME_AUDIO: BooleanField<EpPublicProfile>;
    /**
     * Static representation of the [[introduction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTRODUCTION: StringField<EpPublicProfile>;
    /**
     * Static representation of the [[isAddBadgeAllowed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_ADD_BADGE_ALLOWED: BooleanField<EpPublicProfile>;
    /**
     * Static representation of the [[isBadgesSectionEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_BADGES_SECTION_ENABLED: BooleanField<EpPublicProfile>;
    /**
     * Static representation of the [[isExpressiveMode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_EXPRESSIVE_MODE: BooleanField<EpPublicProfile>;
    /**
     * Static representation of the [[isExpressivePhotoEditable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_EXPRESSIVE_PHOTO_EDITABLE: BooleanField<EpPublicProfile>;
    /**
     * Static representation of the [[mediaServiceBaseUrl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MEDIA_SERVICE_BASE_URL: StringField<EpPublicProfile>;
    /**
     * Static representation of the [[myNameAudioToken]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MY_NAME_AUDIO_TOKEN: StringField<EpPublicProfile>;
    /**
     * Static representation of the [[myNameAudioUploadId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MY_NAME_AUDIO_UPLOAD_ID: StringField<EpPublicProfile>;
    /**
     * Static representation of the [[myNameText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MY_NAME_TEXT: StringField<EpPublicProfile>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<EpPublicProfile>;
    /**
     * All fields of the EpPublicProfile entity.
     */
    const _allFields: Array<StringField<EpPublicProfile> | BooleanField<EpPublicProfile>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EpPublicProfile>;
    /**
     * All key fields of the EpPublicProfile entity.
     */
    const _keyFields: Array<Selectable<EpPublicProfile>>;
    /**
     * Mapping of all key field names to the respective static field property EpPublicProfile.
     */
    const _keys: {
        [keys: string]: Selectable<EpPublicProfile>;
    };
}
//# sourceMappingURL=EpPublicProfile.d.ts.map