import { JobClassificationCountryRequestBuilder } from './JobClassificationCountryRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "JobClassificationCountry" of service "SFOData".
 */
export declare class JobClassificationCountry extends Entity implements JobClassificationCountryType {
    /**
     * Technical entity name for JobClassificationCountry.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobClassificationCountry.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Job Classification _Effective as of.
     */
    jobClassificationEffectiveStartDate: Moment;
    /**
     * Job Classification _Job Code.
     * Maximum length: 32.
     */
    jobClassificationExternalCode: string;
    /**
     * Country/Region.
     * Maximum length: 128.
     */
    country: string;
    /**
     * createdBy.
     * Maximum length: 100.
     * @nullable
     */
    createdBy?: string;
    /**
     * createdDate.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * lastModifiedBy.
     * Maximum length: 100.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * lastModifiedDate.
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
     * One-to-many navigation property to the [[Country]] entity.
     */
    countryNav: Country[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[JobClassificationAus]] entity.
     */
    toJobClassificationAus: JobClassificationAus;
    /**
     * One-to-one navigation property to the [[JobClassificationBra]] entity.
     */
    toJobClassificationBra: JobClassificationBra;
    /**
     * One-to-one navigation property to the [[JobClassificationCan]] entity.
     */
    toJobClassificationCan: JobClassificationCan;
    /**
     * One-to-one navigation property to the [[JobClassificationFra]] entity.
     */
    toJobClassificationFra: JobClassificationFra;
    /**
     * One-to-one navigation property to the [[JobClassificationGbr]] entity.
     */
    toJobClassificationGbr: JobClassificationGbr;
    /**
     * One-to-one navigation property to the [[JobClassificationIta]] entity.
     */
    toJobClassificationIta: JobClassificationIta;
    /**
     * One-to-one navigation property to the [[JobClassificationUsa]] entity.
     */
    toJobClassificationUsa: JobClassificationUsa;
    /**
     * One-to-one navigation property to the [[JobClassificationZaf]] entity.
     */
    toJobClassificationZaf: JobClassificationZaf;
    /**
     * Returns an entity builder to construct instances `JobClassificationCountry`.
     * @returns A builder that constructs instances of entity type `JobClassificationCountry`.
     */
    static builder(): EntityBuilderType<JobClassificationCountry, JobClassificationCountryTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JobClassificationCountry` entity type.
     * @returns A `JobClassificationCountry` request builder.
     */
    static requestBuilder(): JobClassificationCountryRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobClassificationCountry`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobClassificationCountry`.
     */
    static customField(fieldName: string): CustomField<JobClassificationCountry>;
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
import { JobClassificationAus, JobClassificationAusType } from './JobClassificationAus';
import { JobClassificationBra, JobClassificationBraType } from './JobClassificationBra';
import { JobClassificationCan, JobClassificationCanType } from './JobClassificationCan';
import { JobClassificationFra, JobClassificationFraType } from './JobClassificationFra';
import { JobClassificationGbr, JobClassificationGbrType } from './JobClassificationGbr';
import { JobClassificationIta, JobClassificationItaType } from './JobClassificationIta';
import { JobClassificationUsa, JobClassificationUsaType } from './JobClassificationUsa';
import { JobClassificationZaf, JobClassificationZafType } from './JobClassificationZaf';
export interface JobClassificationCountryType {
    jobClassificationEffectiveStartDate: Moment;
    jobClassificationExternalCode: string;
    country: string;
    createdBy?: string;
    createdDateTime?: Moment;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    countryNav: CountryType[];
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    toJobClassificationAus: JobClassificationAusType;
    toJobClassificationBra: JobClassificationBraType;
    toJobClassificationCan: JobClassificationCanType;
    toJobClassificationFra: JobClassificationFraType;
    toJobClassificationGbr: JobClassificationGbrType;
    toJobClassificationIta: JobClassificationItaType;
    toJobClassificationUsa: JobClassificationUsaType;
    toJobClassificationZaf: JobClassificationZafType;
}
export interface JobClassificationCountryTypeForceMandatory {
    jobClassificationEffectiveStartDate: Moment;
    jobClassificationExternalCode: string;
    country: string;
    createdBy: string;
    createdDateTime: Moment;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    countryNav: CountryType[];
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    toJobClassificationAus: JobClassificationAusType;
    toJobClassificationBra: JobClassificationBraType;
    toJobClassificationCan: JobClassificationCanType;
    toJobClassificationFra: JobClassificationFraType;
    toJobClassificationGbr: JobClassificationGbrType;
    toJobClassificationIta: JobClassificationItaType;
    toJobClassificationUsa: JobClassificationUsaType;
    toJobClassificationZaf: JobClassificationZafType;
}
export declare namespace JobClassificationCountry {
    /**
     * Static representation of the [[jobClassificationEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_CLASSIFICATION_EFFECTIVE_START_DATE: DateField<JobClassificationCountry>;
    /**
     * Static representation of the [[jobClassificationExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_CLASSIFICATION_EXTERNAL_CODE: StringField<JobClassificationCountry>;
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<JobClassificationCountry>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<JobClassificationCountry>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<JobClassificationCountry>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<JobClassificationCountry>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<JobClassificationCountry>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<JobClassificationCountry>;
    /**
     * Static representation of the one-to-many navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_NAV: Link<JobClassificationCountry, Country>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<JobClassificationCountry, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<JobClassificationCountry, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<JobClassificationCountry, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[toJobClassificationAus]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_JOB_CLASSIFICATION_AUS: OneToOneLink<JobClassificationCountry, JobClassificationAus>;
    /**
     * Static representation of the one-to-one navigation property [[toJobClassificationBra]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_JOB_CLASSIFICATION_BRA: OneToOneLink<JobClassificationCountry, JobClassificationBra>;
    /**
     * Static representation of the one-to-one navigation property [[toJobClassificationCan]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_JOB_CLASSIFICATION_CAN: OneToOneLink<JobClassificationCountry, JobClassificationCan>;
    /**
     * Static representation of the one-to-one navigation property [[toJobClassificationFra]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_JOB_CLASSIFICATION_FRA: OneToOneLink<JobClassificationCountry, JobClassificationFra>;
    /**
     * Static representation of the one-to-one navigation property [[toJobClassificationGbr]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_JOB_CLASSIFICATION_GBR: OneToOneLink<JobClassificationCountry, JobClassificationGbr>;
    /**
     * Static representation of the one-to-one navigation property [[toJobClassificationIta]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_JOB_CLASSIFICATION_ITA: OneToOneLink<JobClassificationCountry, JobClassificationIta>;
    /**
     * Static representation of the one-to-one navigation property [[toJobClassificationUsa]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_JOB_CLASSIFICATION_USA: OneToOneLink<JobClassificationCountry, JobClassificationUsa>;
    /**
     * Static representation of the one-to-one navigation property [[toJobClassificationZaf]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_JOB_CLASSIFICATION_ZAF: OneToOneLink<JobClassificationCountry, JobClassificationZaf>;
    /**
     * All fields of the JobClassificationCountry entity.
     */
    const _allFields: Array<DateField<JobClassificationCountry> | StringField<JobClassificationCountry> | Link<JobClassificationCountry, Country> | OneToOneLink<JobClassificationCountry, User> | OneToOneLink<JobClassificationCountry, MdfEnumValue> | OneToOneLink<JobClassificationCountry, JobClassificationAus> | OneToOneLink<JobClassificationCountry, JobClassificationBra> | OneToOneLink<JobClassificationCountry, JobClassificationCan> | OneToOneLink<JobClassificationCountry, JobClassificationFra> | OneToOneLink<JobClassificationCountry, JobClassificationGbr> | OneToOneLink<JobClassificationCountry, JobClassificationIta> | OneToOneLink<JobClassificationCountry, JobClassificationUsa> | OneToOneLink<JobClassificationCountry, JobClassificationZaf>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JobClassificationCountry>;
    /**
     * All key fields of the JobClassificationCountry entity.
     */
    const _keyFields: Array<Selectable<JobClassificationCountry>>;
    /**
     * Mapping of all key field names to the respective static field property JobClassificationCountry.
     */
    const _keys: {
        [keys: string]: Selectable<JobClassificationCountry>;
    };
}
//# sourceMappingURL=JobClassificationCountry.d.ts.map