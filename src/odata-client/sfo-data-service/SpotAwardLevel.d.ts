import { SpotAwardLevelRequestBuilder } from './SpotAwardLevelRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "SpotAwardLevel" of service "SFOData".
 */
export declare class SpotAwardLevel extends Entity implements SpotAwardLevelType {
    /**
     * Technical entity name for SpotAwardLevel.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SpotAwardLevel.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Spot Award Program_Code.
     * Maximum length: 38.
     */
    spotAwardProgramExternalCode: string;
    /**
     * Created By.
     * Maximum length: 255.
     * @nullable
     */
    createdBy?: string;
    /**
     * Created Date.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionDeDe?: string;
    /**
     * Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionDefaultValue?: string;
    /**
     * Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionEnDebug?: string;
    /**
     * Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionEnGb?: string;
    /**
     * Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionEnUs?: string;
    /**
     * Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionEsEs?: string;
    /**
     * Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionEsMx?: string;
    /**
     * Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionFrCa?: string;
    /**
     * Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionFrFr?: string;
    /**
     * Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionItIt?: string;
    /**
     * Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionLocalized?: string;
    /**
     * Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionNlNl?: string;
    /**
     * Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionPtBr?: string;
    /**
     * Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionZhCn?: string;
    /**
     * Code.
     * Maximum length: 38.
     */
    externalCode: string;
    /**
     * Last Modified By.
     * Maximum length: 255.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * Last Modified Date.
     * @nullable
     */
    lastModifiedDateTime?: Moment;
    /**
     * Record Status.
     * Maximum length: 255.
     * @nullable
     */
    mdfSystemRecordStatus?: string;
    /**
     * mdfSystemRecordId.
     * Maximum length: 255.
     * @nullable
     */
    recordId?: string;
    /**
     * Award Level Name.
     * Maximum length: 255.
     * @nullable
     */
    titleDeDe?: string;
    /**
     * Award Level Name.
     * Maximum length: 255.
     * @nullable
     */
    titleDefaultValue?: string;
    /**
     * Award Level Name.
     * Maximum length: 255.
     * @nullable
     */
    titleEnDebug?: string;
    /**
     * Award Level Name.
     * Maximum length: 255.
     * @nullable
     */
    titleEnGb?: string;
    /**
     * Award Level Name.
     * Maximum length: 255.
     * @nullable
     */
    titleEnUs?: string;
    /**
     * Award Level Name.
     * Maximum length: 255.
     * @nullable
     */
    titleEsEs?: string;
    /**
     * Award Level Name.
     * Maximum length: 255.
     * @nullable
     */
    titleEsMx?: string;
    /**
     * Award Level Name.
     * Maximum length: 255.
     * @nullable
     */
    titleFrCa?: string;
    /**
     * Award Level Name.
     * Maximum length: 255.
     * @nullable
     */
    titleFrFr?: string;
    /**
     * Award Level Name.
     * Maximum length: 255.
     * @nullable
     */
    titleItIt?: string;
    /**
     * Award Level Name.
     * Maximum length: 255.
     * @nullable
     */
    titleLocalized?: string;
    /**
     * Award Level Name.
     * Maximum length: 255.
     * @nullable
     */
    titleNlNl?: string;
    /**
     * Award Level Name.
     * Maximum length: 255.
     * @nullable
     */
    titlePtBr?: string;
    /**
     * Award Level Name.
     * Maximum length: 255.
     * @nullable
     */
    titleZhCn?: string;
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
     * One-to-one navigation property to the [[Attachment]] entity.
     */
    levelImageNav: Attachment;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
     */
    titleTranslationTextNav: MdfLocalizedValue[];
    /**
     * Returns an entity builder to construct instances `SpotAwardLevel`.
     * @returns A builder that constructs instances of entity type `SpotAwardLevel`.
     */
    static builder(): EntityBuilderType<SpotAwardLevel, SpotAwardLevelTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `SpotAwardLevel` entity type.
     * @returns A `SpotAwardLevel` request builder.
     */
    static requestBuilder(): SpotAwardLevelRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SpotAwardLevel`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SpotAwardLevel`.
     */
    static customField(fieldName: string): CustomField<SpotAwardLevel>;
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
import { Attachment, AttachmentType } from './Attachment';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
export interface SpotAwardLevelType {
    spotAwardProgramExternalCode: string;
    createdBy?: string;
    createdDateTime?: Moment;
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
    externalCode: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    recordId?: string;
    titleDeDe?: string;
    titleDefaultValue?: string;
    titleEnDebug?: string;
    titleEnGb?: string;
    titleEnUs?: string;
    titleEsEs?: string;
    titleEsMx?: string;
    titleFrCa?: string;
    titleFrFr?: string;
    titleItIt?: string;
    titleLocalized?: string;
    titleNlNl?: string;
    titlePtBr?: string;
    titleZhCn?: string;
    createdByNav: UserType;
    descriptionTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    levelImageNav: AttachmentType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    titleTranslationTextNav: MdfLocalizedValueType[];
}
export interface SpotAwardLevelTypeForceMandatory {
    spotAwardProgramExternalCode: string;
    createdBy: string;
    createdDateTime: Moment;
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
    externalCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    recordId: string;
    titleDeDe: string;
    titleDefaultValue: string;
    titleEnDebug: string;
    titleEnGb: string;
    titleEnUs: string;
    titleEsEs: string;
    titleEsMx: string;
    titleFrCa: string;
    titleFrFr: string;
    titleItIt: string;
    titleLocalized: string;
    titleNlNl: string;
    titlePtBr: string;
    titleZhCn: string;
    createdByNav: UserType;
    descriptionTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    levelImageNav: AttachmentType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    titleTranslationTextNav: MdfLocalizedValueType[];
}
export declare namespace SpotAwardLevel {
    /**
     * Static representation of the [[spotAwardProgramExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SPOT_AWARD_PROGRAM_EXTERNAL_CODE: StringField<SpotAwardLevel>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<SpotAwardLevel>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<SpotAwardLevel>;
    /**
     * Static representation of the [[descriptionDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_DE_DE: StringField<SpotAwardLevel>;
    /**
     * Static representation of the [[descriptionDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_DEFAULT_VALUE: StringField<SpotAwardLevel>;
    /**
     * Static representation of the [[descriptionEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_EN_DEBUG: StringField<SpotAwardLevel>;
    /**
     * Static representation of the [[descriptionEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_EN_GB: StringField<SpotAwardLevel>;
    /**
     * Static representation of the [[descriptionEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_EN_US: StringField<SpotAwardLevel>;
    /**
     * Static representation of the [[descriptionEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_ES_ES: StringField<SpotAwardLevel>;
    /**
     * Static representation of the [[descriptionEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_ES_MX: StringField<SpotAwardLevel>;
    /**
     * Static representation of the [[descriptionFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_FR_CA: StringField<SpotAwardLevel>;
    /**
     * Static representation of the [[descriptionFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_FR_FR: StringField<SpotAwardLevel>;
    /**
     * Static representation of the [[descriptionItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_IT_IT: StringField<SpotAwardLevel>;
    /**
     * Static representation of the [[descriptionLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_LOCALIZED: StringField<SpotAwardLevel>;
    /**
     * Static representation of the [[descriptionNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_NL_NL: StringField<SpotAwardLevel>;
    /**
     * Static representation of the [[descriptionPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_PT_BR: StringField<SpotAwardLevel>;
    /**
     * Static representation of the [[descriptionZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_ZH_CN: StringField<SpotAwardLevel>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<SpotAwardLevel>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<SpotAwardLevel>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<SpotAwardLevel>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<SpotAwardLevel>;
    /**
     * Static representation of the [[recordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECORD_ID: StringField<SpotAwardLevel>;
    /**
     * Static representation of the [[titleDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_DE_DE: StringField<SpotAwardLevel>;
    /**
     * Static representation of the [[titleDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_DEFAULT_VALUE: StringField<SpotAwardLevel>;
    /**
     * Static representation of the [[titleEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_EN_DEBUG: StringField<SpotAwardLevel>;
    /**
     * Static representation of the [[titleEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_EN_GB: StringField<SpotAwardLevel>;
    /**
     * Static representation of the [[titleEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_EN_US: StringField<SpotAwardLevel>;
    /**
     * Static representation of the [[titleEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_ES_ES: StringField<SpotAwardLevel>;
    /**
     * Static representation of the [[titleEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_ES_MX: StringField<SpotAwardLevel>;
    /**
     * Static representation of the [[titleFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_FR_CA: StringField<SpotAwardLevel>;
    /**
     * Static representation of the [[titleFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_FR_FR: StringField<SpotAwardLevel>;
    /**
     * Static representation of the [[titleItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_IT_IT: StringField<SpotAwardLevel>;
    /**
     * Static representation of the [[titleLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_LOCALIZED: StringField<SpotAwardLevel>;
    /**
     * Static representation of the [[titleNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_NL_NL: StringField<SpotAwardLevel>;
    /**
     * Static representation of the [[titlePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_PT_BR: StringField<SpotAwardLevel>;
    /**
     * Static representation of the [[titleZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_ZH_CN: StringField<SpotAwardLevel>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<SpotAwardLevel, User>;
    /**
     * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_TRANSLATION_TEXT_NAV: Link<SpotAwardLevel, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<SpotAwardLevel, User>;
    /**
     * Static representation of the one-to-one navigation property [[levelImageNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEVEL_IMAGE_NAV: OneToOneLink<SpotAwardLevel, Attachment>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<SpotAwardLevel, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[titleTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_TRANSLATION_TEXT_NAV: Link<SpotAwardLevel, MdfLocalizedValue>;
    /**
     * All fields of the SpotAwardLevel entity.
     */
    const _allFields: Array<StringField<SpotAwardLevel> | DateField<SpotAwardLevel> | OneToOneLink<SpotAwardLevel, User> | Link<SpotAwardLevel, MdfLocalizedValue> | OneToOneLink<SpotAwardLevel, Attachment> | OneToOneLink<SpotAwardLevel, MdfEnumValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SpotAwardLevel>;
    /**
     * All key fields of the SpotAwardLevel entity.
     */
    const _keyFields: Array<Selectable<SpotAwardLevel>>;
    /**
     * Mapping of all key field names to the respective static field property SpotAwardLevel.
     */
    const _keys: {
        [keys: string]: Selectable<SpotAwardLevel>;
    };
}
//# sourceMappingURL=SpotAwardLevel.d.ts.map