import { TimeZoneRequestBuilder } from './TimeZoneRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "TimeZone" of service "SFOData".
 */
export declare class TimeZone extends Entity implements TimeZoneType {
    /**
     * Technical entity name for TimeZone.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TimeZone.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Comment.
     * Maximum length: 255.
     * @nullable
     */
    comment?: string;
    /**
     * Country/Region.
     * Maximum length: 128.
     * @nullable
     */
    country?: string;
    /**
     * Created By.
     * Maximum length: 100.
     * @nullable
     */
    createdBy?: string;
    /**
     * Created On.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * Effective as of.
     */
    effectiveStartDate: Moment;
    /**
     * Status.
     * Maximum length: 255.
     * @nullable
     */
    effectiveStatus?: string;
    /**
     * Code.
     * Maximum length: 128.
     */
    externalCode: string;
    /**
     * Last Modified By.
     * Maximum length: 100.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * Last Modified Date.
     * @nullable
     */
    lastModifiedDateTime?: Moment;
    /**
     * Effective End Date.
     * @nullable
     */
    mdfSystemEffectiveEndDate?: Moment;
    /**
     * Record Status.
     * Maximum length: 255.
     * @nullable
     */
    mdfSystemRecordStatus?: string;
    /**
     * Name.
     * Maximum length: 255.
     * @nullable
     */
    nameDeDe?: string;
    /**
     * Name.
     * Maximum length: 255.
     * @nullable
     */
    nameDefaultValue?: string;
    /**
     * Name.
     * Maximum length: 255.
     * @nullable
     */
    nameEnDebug?: string;
    /**
     * Name.
     * Maximum length: 255.
     * @nullable
     */
    nameEnGb?: string;
    /**
     * Name.
     * Maximum length: 255.
     * @nullable
     */
    nameEnUs?: string;
    /**
     * Name.
     * Maximum length: 255.
     * @nullable
     */
    nameEsEs?: string;
    /**
     * Name.
     * Maximum length: 255.
     * @nullable
     */
    nameEsMx?: string;
    /**
     * Name.
     * Maximum length: 255.
     * @nullable
     */
    nameFrCa?: string;
    /**
     * Name.
     * Maximum length: 255.
     * @nullable
     */
    nameFrFr?: string;
    /**
     * Name.
     * Maximum length: 255.
     * @nullable
     */
    nameItIt?: string;
    /**
     * Name.
     * Maximum length: 255.
     * @nullable
     */
    nameLocalized?: string;
    /**
     * Name.
     * Maximum length: 255.
     * @nullable
     */
    nameNlNl?: string;
    /**
     * Name.
     * Maximum length: 255.
     * @nullable
     */
    namePtBr?: string;
    /**
     * Name.
     * Maximum length: 255.
     * @nullable
     */
    nameZhCn?: string;
    /**
     * Time Zone is supported.
     * @nullable
     */
    supported?: boolean;
    /**
     * DST offset to UTC.
     * Maximum length: 255.
     * @nullable
     */
    utcDstOffset?: string;
    /**
     * Offset to UTC.
     * Maximum length: 255.
     * @nullable
     */
    utcOffset?: string;
    /**
     * One-to-one navigation property to the [[Country]] entity.
     */
    countryNav: Country;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    effectiveStatusNav: MdfEnumValue;
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
    nameTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `TimeZone`.
     * @returns A builder that constructs instances of entity type `TimeZone`.
     */
    static builder(): EntityBuilderType<TimeZone, TimeZoneTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `TimeZone` entity type.
     * @returns A `TimeZone` request builder.
     */
    static requestBuilder(): TimeZoneRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeZone`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TimeZone`.
     */
    static customField(fieldName: string): CustomField<TimeZone>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Country, CountryType } from './Country';
import { User, UserType } from './User';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { WfRequest, WfRequestType } from './WfRequest';
export interface TimeZoneType {
    comment?: string;
    country?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    effectiveStartDate: Moment;
    effectiveStatus?: string;
    externalCode: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemEffectiveEndDate?: Moment;
    mdfSystemRecordStatus?: string;
    nameDeDe?: string;
    nameDefaultValue?: string;
    nameEnDebug?: string;
    nameEnGb?: string;
    nameEnUs?: string;
    nameEsEs?: string;
    nameEsMx?: string;
    nameFrCa?: string;
    nameFrFr?: string;
    nameItIt?: string;
    nameLocalized?: string;
    nameNlNl?: string;
    namePtBr?: string;
    nameZhCn?: string;
    supported?: boolean;
    utcDstOffset?: string;
    utcOffset?: string;
    countryNav: CountryType;
    createdByNav: UserType;
    effectiveStatusNav: MdfEnumValueType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    nameTranslationTextNav: MdfLocalizedValueType[];
    wfRequestNav: WfRequestType[];
}
export interface TimeZoneTypeForceMandatory {
    comment: string;
    country: string;
    createdBy: string;
    createdDateTime: Moment;
    effectiveStartDate: Moment;
    effectiveStatus: string;
    externalCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemEffectiveEndDate: Moment;
    mdfSystemRecordStatus: string;
    nameDeDe: string;
    nameDefaultValue: string;
    nameEnDebug: string;
    nameEnGb: string;
    nameEnUs: string;
    nameEsEs: string;
    nameEsMx: string;
    nameFrCa: string;
    nameFrFr: string;
    nameItIt: string;
    nameLocalized: string;
    nameNlNl: string;
    namePtBr: string;
    nameZhCn: string;
    supported: boolean;
    utcDstOffset: string;
    utcOffset: string;
    countryNav: CountryType;
    createdByNav: UserType;
    effectiveStatusNav: MdfEnumValueType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    nameTranslationTextNav: MdfLocalizedValueType[];
    wfRequestNav: WfRequestType[];
}
export declare namespace TimeZone {
    /**
     * Static representation of the [[comment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMENT: StringField<TimeZone>;
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<TimeZone>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<TimeZone>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<TimeZone>;
    /**
     * Static representation of the [[effectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EFFECTIVE_START_DATE: DateField<TimeZone>;
    /**
     * Static representation of the [[effectiveStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EFFECTIVE_STATUS: StringField<TimeZone>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<TimeZone>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<TimeZone>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<TimeZone>;
    /**
     * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_EFFECTIVE_END_DATE: DateField<TimeZone>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<TimeZone>;
    /**
     * Static representation of the [[nameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_DE_DE: StringField<TimeZone>;
    /**
     * Static representation of the [[nameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_DEFAULT_VALUE: StringField<TimeZone>;
    /**
     * Static representation of the [[nameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_EN_DEBUG: StringField<TimeZone>;
    /**
     * Static representation of the [[nameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_EN_GB: StringField<TimeZone>;
    /**
     * Static representation of the [[nameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_EN_US: StringField<TimeZone>;
    /**
     * Static representation of the [[nameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_ES_ES: StringField<TimeZone>;
    /**
     * Static representation of the [[nameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_ES_MX: StringField<TimeZone>;
    /**
     * Static representation of the [[nameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_FR_CA: StringField<TimeZone>;
    /**
     * Static representation of the [[nameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_FR_FR: StringField<TimeZone>;
    /**
     * Static representation of the [[nameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_IT_IT: StringField<TimeZone>;
    /**
     * Static representation of the [[nameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_LOCALIZED: StringField<TimeZone>;
    /**
     * Static representation of the [[nameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_NL_NL: StringField<TimeZone>;
    /**
     * Static representation of the [[namePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_PT_BR: StringField<TimeZone>;
    /**
     * Static representation of the [[nameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_ZH_CN: StringField<TimeZone>;
    /**
     * Static representation of the [[supported]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPORTED: BooleanField<TimeZone>;
    /**
     * Static representation of the [[utcDstOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UTC_DST_OFFSET: StringField<TimeZone>;
    /**
     * Static representation of the [[utcOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UTC_OFFSET: StringField<TimeZone>;
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_NAV: OneToOneLink<TimeZone, Country>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<TimeZone, User>;
    /**
     * Static representation of the one-to-one navigation property [[effectiveStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EFFECTIVE_STATUS_NAV: OneToOneLink<TimeZone, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<TimeZone, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<TimeZone, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[nameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_TRANSLATION_TEXT_NAV: Link<TimeZone, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<TimeZone, WfRequest>;
    /**
     * All fields of the TimeZone entity.
     */
    const _allFields: Array<StringField<TimeZone> | DateField<TimeZone> | BooleanField<TimeZone> | OneToOneLink<TimeZone, Country> | OneToOneLink<TimeZone, User> | OneToOneLink<TimeZone, MdfEnumValue> | Link<TimeZone, MdfLocalizedValue> | Link<TimeZone, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<TimeZone>;
    /**
     * All key fields of the TimeZone entity.
     */
    const _keyFields: Array<Selectable<TimeZone>>;
    /**
     * Mapping of all key field names to the respective static field property TimeZone.
     */
    const _keys: {
        [keys: string]: Selectable<TimeZone>;
    };
}
//# sourceMappingURL=TimeZone.d.ts.map