import { HolidayCalendarRequestBuilder } from './HolidayCalendarRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "HolidayCalendar" of service "SFOData".
 */
export declare class HolidayCalendar extends Entity implements HolidayCalendarType {
    /**
     * Technical entity name for HolidayCalendar.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for HolidayCalendar.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Country/Region.
     * Maximum length: 128.
     * @nullable
     */
    country?: string;
    /**
     * Created By.
     * Maximum length: 255.
     * @nullable
     */
    createdBy?: string;
    /**
     * Created On.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * External Code.
     * Maximum length: 128.
     */
    externalCode: string;
    /**
     * Last Modified By.
     * Maximum length: 255.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * Last Modified On.
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
     * oldName.
     * Maximum length: 255.
     * @nullable
     */
    oldName?: string;
    /**
     * One-to-many navigation property to the [[Country]] entity.
     */
    countryNav: Country[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-many navigation property to the [[HolidayAssignment]] entity.
     */
    holidayAssignments: HolidayAssignment[];
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
     * Returns an entity builder to construct instances `HolidayCalendar`.
     * @returns A builder that constructs instances of entity type `HolidayCalendar`.
     */
    static builder(): EntityBuilderType<HolidayCalendar, HolidayCalendarTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `HolidayCalendar` entity type.
     * @returns A `HolidayCalendar` request builder.
     */
    static requestBuilder(): HolidayCalendarRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `HolidayCalendar`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `HolidayCalendar`.
     */
    static customField(fieldName: string): CustomField<HolidayCalendar>;
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
import { HolidayAssignment, HolidayAssignmentType } from './HolidayAssignment';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { WfRequest, WfRequestType } from './WfRequest';
export interface HolidayCalendarType {
    country?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    externalCode: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
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
    oldName?: string;
    countryNav: CountryType[];
    createdByNav: UserType;
    holidayAssignments: HolidayAssignmentType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    nameTranslationTextNav: MdfLocalizedValueType[];
    wfRequestNav: WfRequestType[];
}
export interface HolidayCalendarTypeForceMandatory {
    country: string;
    createdBy: string;
    createdDateTime: Moment;
    externalCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
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
    oldName: string;
    countryNav: CountryType[];
    createdByNav: UserType;
    holidayAssignments: HolidayAssignmentType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    nameTranslationTextNav: MdfLocalizedValueType[];
    wfRequestNav: WfRequestType[];
}
export declare namespace HolidayCalendar {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<HolidayCalendar>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<HolidayCalendar>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<HolidayCalendar>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<HolidayCalendar>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<HolidayCalendar>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<HolidayCalendar>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<HolidayCalendar>;
    /**
     * Static representation of the [[nameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_DE_DE: StringField<HolidayCalendar>;
    /**
     * Static representation of the [[nameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_DEFAULT_VALUE: StringField<HolidayCalendar>;
    /**
     * Static representation of the [[nameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_EN_DEBUG: StringField<HolidayCalendar>;
    /**
     * Static representation of the [[nameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_EN_GB: StringField<HolidayCalendar>;
    /**
     * Static representation of the [[nameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_EN_US: StringField<HolidayCalendar>;
    /**
     * Static representation of the [[nameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_ES_ES: StringField<HolidayCalendar>;
    /**
     * Static representation of the [[nameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_ES_MX: StringField<HolidayCalendar>;
    /**
     * Static representation of the [[nameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_FR_CA: StringField<HolidayCalendar>;
    /**
     * Static representation of the [[nameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_FR_FR: StringField<HolidayCalendar>;
    /**
     * Static representation of the [[nameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_IT_IT: StringField<HolidayCalendar>;
    /**
     * Static representation of the [[nameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_LOCALIZED: StringField<HolidayCalendar>;
    /**
     * Static representation of the [[nameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_NL_NL: StringField<HolidayCalendar>;
    /**
     * Static representation of the [[namePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_PT_BR: StringField<HolidayCalendar>;
    /**
     * Static representation of the [[nameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_ZH_CN: StringField<HolidayCalendar>;
    /**
     * Static representation of the [[oldName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OLD_NAME: StringField<HolidayCalendar>;
    /**
     * Static representation of the one-to-many navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_NAV: Link<HolidayCalendar, Country>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<HolidayCalendar, User>;
    /**
     * Static representation of the one-to-many navigation property [[holidayAssignments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOLIDAY_ASSIGNMENTS: Link<HolidayCalendar, HolidayAssignment>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<HolidayCalendar, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<HolidayCalendar, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[nameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_TRANSLATION_TEXT_NAV: Link<HolidayCalendar, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<HolidayCalendar, WfRequest>;
    /**
     * All fields of the HolidayCalendar entity.
     */
    const _allFields: Array<StringField<HolidayCalendar> | DateField<HolidayCalendar> | Link<HolidayCalendar, Country> | OneToOneLink<HolidayCalendar, User> | Link<HolidayCalendar, HolidayAssignment> | OneToOneLink<HolidayCalendar, MdfEnumValue> | Link<HolidayCalendar, MdfLocalizedValue> | Link<HolidayCalendar, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<HolidayCalendar>;
    /**
     * All key fields of the HolidayCalendar entity.
     */
    const _keyFields: Array<Selectable<HolidayCalendar>>;
    /**
     * Mapping of all key field names to the respective static field property HolidayCalendar.
     */
    const _keys: {
        [keys: string]: Selectable<HolidayCalendar>;
    };
}
//# sourceMappingURL=HolidayCalendar.d.ts.map