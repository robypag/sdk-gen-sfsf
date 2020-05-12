import { JobClassificationAusRequestBuilder } from './JobClassificationAusRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "JobClassificationAUS" of service "SFOData".
 */
export declare class JobClassificationAus extends Entity implements JobClassificationAusType {
    /**
     * Technical entity name for JobClassificationAus.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobClassificationAus.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Job Classification Country/Region_Country/Region.
     * Maximum length: 128.
     */
    jobClassificationCountryCountry: string;
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
     * ASCO Code.
     * Maximum length: 32.
     * @nullable
     */
    ascoCode?: string;
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
     * externalCode.
     */
    externalCode: BigNumber;
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
     * Returns an entity builder to construct instances `JobClassificationAus`.
     * @returns A builder that constructs instances of entity type `JobClassificationAus`.
     */
    static builder(): EntityBuilderType<JobClassificationAus, JobClassificationAusTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JobClassificationAus` entity type.
     * @returns A `JobClassificationAus` request builder.
     */
    static requestBuilder(): JobClassificationAusRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobClassificationAus`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobClassificationAus`.
     */
    static customField(fieldName: string): CustomField<JobClassificationAus>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
export interface JobClassificationAusType {
    jobClassificationCountryCountry: string;
    jobClassificationEffectiveStartDate: Moment;
    jobClassificationExternalCode: string;
    ascoCode?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    externalCode: BigNumber;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export interface JobClassificationAusTypeForceMandatory {
    jobClassificationCountryCountry: string;
    jobClassificationEffectiveStartDate: Moment;
    jobClassificationExternalCode: string;
    ascoCode: string;
    createdBy: string;
    createdDateTime: Moment;
    externalCode: BigNumber;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export declare namespace JobClassificationAus {
    /**
     * Static representation of the [[jobClassificationCountryCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_CLASSIFICATION_COUNTRY_COUNTRY: StringField<JobClassificationAus>;
    /**
     * Static representation of the [[jobClassificationEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_CLASSIFICATION_EFFECTIVE_START_DATE: DateField<JobClassificationAus>;
    /**
     * Static representation of the [[jobClassificationExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_CLASSIFICATION_EXTERNAL_CODE: StringField<JobClassificationAus>;
    /**
     * Static representation of the [[ascoCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASCO_CODE: StringField<JobClassificationAus>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<JobClassificationAus>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<JobClassificationAus>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: BigNumberField<JobClassificationAus>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<JobClassificationAus>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<JobClassificationAus>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<JobClassificationAus>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<JobClassificationAus, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<JobClassificationAus, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<JobClassificationAus, MdfEnumValue>;
    /**
     * All fields of the JobClassificationAus entity.
     */
    const _allFields: Array<StringField<JobClassificationAus> | DateField<JobClassificationAus> | BigNumberField<JobClassificationAus> | OneToOneLink<JobClassificationAus, User> | OneToOneLink<JobClassificationAus, MdfEnumValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JobClassificationAus>;
    /**
     * All key fields of the JobClassificationAus entity.
     */
    const _keyFields: Array<Selectable<JobClassificationAus>>;
    /**
     * Mapping of all key field names to the respective static field property JobClassificationAus.
     */
    const _keys: {
        [keys: string]: Selectable<JobClassificationAus>;
    };
}
//# sourceMappingURL=JobClassificationAus.d.ts.map