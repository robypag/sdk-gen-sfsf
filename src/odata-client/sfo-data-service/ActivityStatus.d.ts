import { ActivityStatusRequestBuilder } from './ActivityStatusRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "ActivityStatus" of service "SFOData".
 */
export declare class ActivityStatus extends Entity implements ActivityStatusType {
    /**
     * Technical entity name for ActivityStatus.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ActivityStatus.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Activity Status ID.
     * Maximum length: 128.
     */
    activityStatusId: string;
    /**
     * Activity Status Color Code.
     * Maximum length: 255.
     * @nullable
     */
    colorRgbCode?: string;
    /**
     * Prompt Achievement Creation.
     * @nullable
     */
    createAchievement?: boolean;
    /**
     * Activity Status Created By.
     * Maximum length: 255.
     * @nullable
     */
    createdBy?: string;
    /**
     * Activity Status Created Date.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * Default Status.
     * @nullable
     */
    defaultStatus?: boolean;
    /**
     * Deleted.
     * @nullable
     */
    deleted?: boolean;
    /**
     * Activity Status Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionDeDe?: string;
    /**
     * Activity Status Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionDefaultValue?: string;
    /**
     * Activity Status Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionEnDebug?: string;
    /**
     * Activity Status Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionEnGb?: string;
    /**
     * Activity Status Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionEnUs?: string;
    /**
     * Activity Status Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionEsEs?: string;
    /**
     * Activity Status Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionEsMx?: string;
    /**
     * Activity Status Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionFrCa?: string;
    /**
     * Activity Status Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionFrFr?: string;
    /**
     * Activity Status Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionItIt?: string;
    /**
     * Activity Status Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionLocalized?: string;
    /**
     * Activity Status Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionNlNl?: string;
    /**
     * Activity Status Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionPtBr?: string;
    /**
     * Activity Status Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionZhCn?: string;
    /**
     * Activity Status Icon Name.
     * Maximum length: 255.
     * @nullable
     */
    iconName?: string;
    /**
     * Activity Status Last Modified By.
     * Maximum length: 255.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * Activity Status Last Modified Date.
     * @nullable
     */
    lastModifiedDateTime?: Moment;
    /**
     * Record Status.
     * Maximum length: 128.
     * @nullable
     */
    mdfSystemRecordStatus?: string;
    /**
     * Activity Status Priority.
     * @nullable
     */
    priority?: BigNumber;
    /**
     * mdfSystemRecordId.
     * Maximum length: 255.
     * @nullable
     */
    recordId?: string;
    /**
     * Clear after Capturing Meeting.
     * @nullable
     */
    removeActivityFromMeeting?: boolean;
    /**
     * snapshot.
     * @nullable
     */
    snapshot?: boolean;
    /**
     * Activity Status Name.
     * Maximum length: 4000.
     * @nullable
     */
    statusNameDeDe?: string;
    /**
     * Activity Status Name.
     * Maximum length: 4000.
     * @nullable
     */
    statusNameDefaultValue?: string;
    /**
     * Activity Status Name.
     * Maximum length: 4000.
     * @nullable
     */
    statusNameEnDebug?: string;
    /**
     * Activity Status Name.
     * Maximum length: 4000.
     * @nullable
     */
    statusNameEnGb?: string;
    /**
     * Activity Status Name.
     * Maximum length: 4000.
     * @nullable
     */
    statusNameEnUs?: string;
    /**
     * Activity Status Name.
     * Maximum length: 4000.
     * @nullable
     */
    statusNameEsEs?: string;
    /**
     * Activity Status Name.
     * Maximum length: 4000.
     * @nullable
     */
    statusNameEsMx?: string;
    /**
     * Activity Status Name.
     * Maximum length: 4000.
     * @nullable
     */
    statusNameFrCa?: string;
    /**
     * Activity Status Name.
     * Maximum length: 4000.
     * @nullable
     */
    statusNameFrFr?: string;
    /**
     * Activity Status Name.
     * Maximum length: 4000.
     * @nullable
     */
    statusNameItIt?: string;
    /**
     * Activity Status Name.
     * Maximum length: 4000.
     * @nullable
     */
    statusNameLocalized?: string;
    /**
     * Activity Status Name.
     * Maximum length: 4000.
     * @nullable
     */
    statusNameNlNl?: string;
    /**
     * Activity Status Name.
     * Maximum length: 4000.
     * @nullable
     */
    statusNamePtBr?: string;
    /**
     * Activity Status Name.
     * Maximum length: 4000.
     * @nullable
     */
    statusNameZhCn?: string;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
     */
    descriptionTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
     */
    statusNameTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `ActivityStatus`.
     * @returns A builder that constructs instances of entity type `ActivityStatus`.
     */
    static builder(): EntityBuilderType<ActivityStatus, ActivityStatusTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `ActivityStatus` entity type.
     * @returns A `ActivityStatus` request builder.
     */
    static requestBuilder(): ActivityStatusRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ActivityStatus`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ActivityStatus`.
     */
    static customField(fieldName: string): CustomField<ActivityStatus>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { WfRequest, WfRequestType } from './WfRequest';
export interface ActivityStatusType {
    activityStatusId: string;
    colorRgbCode?: string;
    createAchievement?: boolean;
    createdBy?: string;
    createdDateTime?: Moment;
    defaultStatus?: boolean;
    deleted?: boolean;
    descriptionDeDe?: string;
    descriptionDefaultValue?: string;
    descriptionEnDebug?: string;
    descriptionEnGb?: string;
    descriptionEnUs?: string;
    descriptionEsEs?: string;
    descriptionEsMx?: string;
    descriptionFrCa?: string;
    descriptionFrFr?: string;
    descriptionItIt?: string;
    descriptionLocalized?: string;
    descriptionNlNl?: string;
    descriptionPtBr?: string;
    descriptionZhCn?: string;
    iconName?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    priority?: BigNumber;
    recordId?: string;
    removeActivityFromMeeting?: boolean;
    snapshot?: boolean;
    statusNameDeDe?: string;
    statusNameDefaultValue?: string;
    statusNameEnDebug?: string;
    statusNameEnGb?: string;
    statusNameEnUs?: string;
    statusNameEsEs?: string;
    statusNameEsMx?: string;
    statusNameFrCa?: string;
    statusNameFrFr?: string;
    statusNameItIt?: string;
    statusNameLocalized?: string;
    statusNameNlNl?: string;
    statusNamePtBr?: string;
    statusNameZhCn?: string;
    createdByNav: UserType;
    descriptionTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    statusNameTranslationTextNav: MdfLocalizedValueType[];
    wfRequestNav: WfRequestType[];
}
export interface ActivityStatusTypeForceMandatory {
    activityStatusId: string;
    colorRgbCode: string;
    createAchievement: boolean;
    createdBy: string;
    createdDateTime: Moment;
    defaultStatus: boolean;
    deleted: boolean;
    descriptionDeDe: string;
    descriptionDefaultValue: string;
    descriptionEnDebug: string;
    descriptionEnGb: string;
    descriptionEnUs: string;
    descriptionEsEs: string;
    descriptionEsMx: string;
    descriptionFrCa: string;
    descriptionFrFr: string;
    descriptionItIt: string;
    descriptionLocalized: string;
    descriptionNlNl: string;
    descriptionPtBr: string;
    descriptionZhCn: string;
    iconName: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    priority: BigNumber;
    recordId: string;
    removeActivityFromMeeting: boolean;
    snapshot: boolean;
    statusNameDeDe: string;
    statusNameDefaultValue: string;
    statusNameEnDebug: string;
    statusNameEnGb: string;
    statusNameEnUs: string;
    statusNameEsEs: string;
    statusNameEsMx: string;
    statusNameFrCa: string;
    statusNameFrFr: string;
    statusNameItIt: string;
    statusNameLocalized: string;
    statusNameNlNl: string;
    statusNamePtBr: string;
    statusNameZhCn: string;
    createdByNav: UserType;
    descriptionTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    statusNameTranslationTextNav: MdfLocalizedValueType[];
    wfRequestNav: WfRequestType[];
}
export declare namespace ActivityStatus {
    /**
     * Static representation of the [[activityStatusId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVITY_STATUS_ID: StringField<ActivityStatus>;
    /**
     * Static representation of the [[colorRgbCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COLOR_RGB_CODE: StringField<ActivityStatus>;
    /**
     * Static representation of the [[createAchievement]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATE_ACHIEVEMENT: BooleanField<ActivityStatus>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<ActivityStatus>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<ActivityStatus>;
    /**
     * Static representation of the [[defaultStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_STATUS: BooleanField<ActivityStatus>;
    /**
     * Static representation of the [[deleted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELETED: BooleanField<ActivityStatus>;
    /**
     * Static representation of the [[descriptionDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_DE_DE: StringField<ActivityStatus>;
    /**
     * Static representation of the [[descriptionDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_DEFAULT_VALUE: StringField<ActivityStatus>;
    /**
     * Static representation of the [[descriptionEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_EN_DEBUG: StringField<ActivityStatus>;
    /**
     * Static representation of the [[descriptionEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_EN_GB: StringField<ActivityStatus>;
    /**
     * Static representation of the [[descriptionEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_EN_US: StringField<ActivityStatus>;
    /**
     * Static representation of the [[descriptionEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_ES_ES: StringField<ActivityStatus>;
    /**
     * Static representation of the [[descriptionEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_ES_MX: StringField<ActivityStatus>;
    /**
     * Static representation of the [[descriptionFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_FR_CA: StringField<ActivityStatus>;
    /**
     * Static representation of the [[descriptionFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_FR_FR: StringField<ActivityStatus>;
    /**
     * Static representation of the [[descriptionItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_IT_IT: StringField<ActivityStatus>;
    /**
     * Static representation of the [[descriptionLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_LOCALIZED: StringField<ActivityStatus>;
    /**
     * Static representation of the [[descriptionNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_NL_NL: StringField<ActivityStatus>;
    /**
     * Static representation of the [[descriptionPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_PT_BR: StringField<ActivityStatus>;
    /**
     * Static representation of the [[descriptionZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_ZH_CN: StringField<ActivityStatus>;
    /**
     * Static representation of the [[iconName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ICON_NAME: StringField<ActivityStatus>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<ActivityStatus>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<ActivityStatus>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<ActivityStatus>;
    /**
     * Static representation of the [[priority]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRIORITY: BigNumberField<ActivityStatus>;
    /**
     * Static representation of the [[recordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECORD_ID: StringField<ActivityStatus>;
    /**
     * Static representation of the [[removeActivityFromMeeting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REMOVE_ACTIVITY_FROM_MEETING: BooleanField<ActivityStatus>;
    /**
     * Static representation of the [[snapshot]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SNAPSHOT: BooleanField<ActivityStatus>;
    /**
     * Static representation of the [[statusNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAME_DE_DE: StringField<ActivityStatus>;
    /**
     * Static representation of the [[statusNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAME_DEFAULT_VALUE: StringField<ActivityStatus>;
    /**
     * Static representation of the [[statusNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAME_EN_DEBUG: StringField<ActivityStatus>;
    /**
     * Static representation of the [[statusNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAME_EN_GB: StringField<ActivityStatus>;
    /**
     * Static representation of the [[statusNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAME_EN_US: StringField<ActivityStatus>;
    /**
     * Static representation of the [[statusNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAME_ES_ES: StringField<ActivityStatus>;
    /**
     * Static representation of the [[statusNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAME_ES_MX: StringField<ActivityStatus>;
    /**
     * Static representation of the [[statusNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAME_FR_CA: StringField<ActivityStatus>;
    /**
     * Static representation of the [[statusNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAME_FR_FR: StringField<ActivityStatus>;
    /**
     * Static representation of the [[statusNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAME_IT_IT: StringField<ActivityStatus>;
    /**
     * Static representation of the [[statusNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAME_LOCALIZED: StringField<ActivityStatus>;
    /**
     * Static representation of the [[statusNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAME_NL_NL: StringField<ActivityStatus>;
    /**
     * Static representation of the [[statusNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAME_PT_BR: StringField<ActivityStatus>;
    /**
     * Static representation of the [[statusNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAME_ZH_CN: StringField<ActivityStatus>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<ActivityStatus, User>;
    /**
     * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_TRANSLATION_TEXT_NAV: Link<ActivityStatus, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<ActivityStatus, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<ActivityStatus, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[statusNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAME_TRANSLATION_TEXT_NAV: Link<ActivityStatus, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<ActivityStatus, WfRequest>;
    /**
     * All fields of the ActivityStatus entity.
     */
    const _allFields: Array<StringField<ActivityStatus> | BooleanField<ActivityStatus> | DateField<ActivityStatus> | BigNumberField<ActivityStatus> | OneToOneLink<ActivityStatus, User> | Link<ActivityStatus, MdfLocalizedValue> | OneToOneLink<ActivityStatus, MdfEnumValue> | Link<ActivityStatus, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ActivityStatus>;
    /**
     * All key fields of the ActivityStatus entity.
     */
    const _keyFields: Array<Selectable<ActivityStatus>>;
    /**
     * Mapping of all key field names to the respective static field property ActivityStatus.
     */
    const _keys: {
        [keys: string]: Selectable<ActivityStatus>;
    };
}
//# sourceMappingURL=ActivityStatus.d.ts.map