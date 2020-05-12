import { JobClassificationUsaRequestBuilder } from './JobClassificationUsaRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "JobClassificationUSA" of service "SFOData".
 */
export declare class JobClassificationUsa extends Entity implements JobClassificationUsaType {
    /**
     * Technical entity name for JobClassificationUsa.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobClassificationUsa.
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
     * Workers'Comp Code.
     * Maximum length: 32.
     * @nullable
     */
    custWorkersCompCode?: string;
    /**
     * EEO1 Job Category.
     * Maximum length: 128.
     * @nullable
     */
    eeo1JobCategory?: string;
    /**
     * EEO4 Job Category.
     * Maximum length: 128.
     * @nullable
     */
    eeo4JobCategory?: string;
    /**
     * EEO5 Job Category.
     * Maximum length: 128.
     * @nullable
     */
    eeo5JobCategory?: string;
    /**
     * EEO6 Job Category.
     * Maximum length: 128.
     * @nullable
     */
    eeo6JobCategory?: string;
    /**
     * EEO Job Group.
     * Maximum length: 128.
     * @nullable
     */
    eeoJobGroup?: string;
    /**
     * externalCode.
     */
    externalCode: BigNumber;
    /**
     * FLSA Status.
     * Maximum length: 128.
     * @nullable
     */
    flsaStatusUsa?: string;
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
     * Local Job Title.
     * Maximum length: 32.
     * @nullable
     */
    localJobTitle?: string;
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
     * One-to-many navigation property to the [[PickListValueV2]] entity.
     */
    eeo1JobCategoryNav: PickListValueV2[];
    /**
     * One-to-many navigation property to the [[PickListValueV2]] entity.
     */
    eeo4JobCategoryNav: PickListValueV2[];
    /**
     * One-to-many navigation property to the [[PickListValueV2]] entity.
     */
    eeo5JobCategoryNav: PickListValueV2[];
    /**
     * One-to-many navigation property to the [[PickListValueV2]] entity.
     */
    eeo6JobCategoryNav: PickListValueV2[];
    /**
     * One-to-many navigation property to the [[PickListValueV2]] entity.
     */
    eeoJobGroupNav: PickListValueV2[];
    /**
     * One-to-many navigation property to the [[PickListValueV2]] entity.
     */
    flsaStatusUsaNav: PickListValueV2[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * Returns an entity builder to construct instances `JobClassificationUsa`.
     * @returns A builder that constructs instances of entity type `JobClassificationUsa`.
     */
    static builder(): EntityBuilderType<JobClassificationUsa, JobClassificationUsaTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JobClassificationUsa` entity type.
     * @returns A `JobClassificationUsa` request builder.
     */
    static requestBuilder(): JobClassificationUsaRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobClassificationUsa`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobClassificationUsa`.
     */
    static customField(fieldName: string): CustomField<JobClassificationUsa>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { PickListValueV2, PickListValueV2Type } from './PickListValueV2';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
export interface JobClassificationUsaType {
    jobClassificationCountryCountry: string;
    jobClassificationEffectiveStartDate: Moment;
    jobClassificationExternalCode: string;
    createdBy?: string;
    createdDateTime?: Moment;
    custWorkersCompCode?: string;
    eeo1JobCategory?: string;
    eeo4JobCategory?: string;
    eeo5JobCategory?: string;
    eeo6JobCategory?: string;
    eeoJobGroup?: string;
    externalCode: BigNumber;
    flsaStatusUsa?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    localJobTitle?: string;
    mdfSystemRecordStatus?: string;
    createdByNav: UserType;
    eeo1JobCategoryNav: PickListValueV2Type[];
    eeo4JobCategoryNav: PickListValueV2Type[];
    eeo5JobCategoryNav: PickListValueV2Type[];
    eeo6JobCategoryNav: PickListValueV2Type[];
    eeoJobGroupNav: PickListValueV2Type[];
    flsaStatusUsaNav: PickListValueV2Type[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export interface JobClassificationUsaTypeForceMandatory {
    jobClassificationCountryCountry: string;
    jobClassificationEffectiveStartDate: Moment;
    jobClassificationExternalCode: string;
    createdBy: string;
    createdDateTime: Moment;
    custWorkersCompCode: string;
    eeo1JobCategory: string;
    eeo4JobCategory: string;
    eeo5JobCategory: string;
    eeo6JobCategory: string;
    eeoJobGroup: string;
    externalCode: BigNumber;
    flsaStatusUsa: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    localJobTitle: string;
    mdfSystemRecordStatus: string;
    createdByNav: UserType;
    eeo1JobCategoryNav: PickListValueV2Type[];
    eeo4JobCategoryNav: PickListValueV2Type[];
    eeo5JobCategoryNav: PickListValueV2Type[];
    eeo6JobCategoryNav: PickListValueV2Type[];
    eeoJobGroupNav: PickListValueV2Type[];
    flsaStatusUsaNav: PickListValueV2Type[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export declare namespace JobClassificationUsa {
    /**
     * Static representation of the [[jobClassificationCountryCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_CLASSIFICATION_COUNTRY_COUNTRY: StringField<JobClassificationUsa>;
    /**
     * Static representation of the [[jobClassificationEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_CLASSIFICATION_EFFECTIVE_START_DATE: DateField<JobClassificationUsa>;
    /**
     * Static representation of the [[jobClassificationExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_CLASSIFICATION_EXTERNAL_CODE: StringField<JobClassificationUsa>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<JobClassificationUsa>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<JobClassificationUsa>;
    /**
     * Static representation of the [[custWorkersCompCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_WORKERS_COMP_CODE: StringField<JobClassificationUsa>;
    /**
     * Static representation of the [[eeo1JobCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EEO_1_JOB_CATEGORY: StringField<JobClassificationUsa>;
    /**
     * Static representation of the [[eeo4JobCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EEO_4_JOB_CATEGORY: StringField<JobClassificationUsa>;
    /**
     * Static representation of the [[eeo5JobCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EEO_5_JOB_CATEGORY: StringField<JobClassificationUsa>;
    /**
     * Static representation of the [[eeo6JobCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EEO_6_JOB_CATEGORY: StringField<JobClassificationUsa>;
    /**
     * Static representation of the [[eeoJobGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EEO_JOB_GROUP: StringField<JobClassificationUsa>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: BigNumberField<JobClassificationUsa>;
    /**
     * Static representation of the [[flsaStatusUsa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FLSA_STATUS_USA: StringField<JobClassificationUsa>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<JobClassificationUsa>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<JobClassificationUsa>;
    /**
     * Static representation of the [[localJobTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCAL_JOB_TITLE: StringField<JobClassificationUsa>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<JobClassificationUsa>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<JobClassificationUsa, User>;
    /**
     * Static representation of the one-to-many navigation property [[eeo1JobCategoryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EEO_1_JOB_CATEGORY_NAV: Link<JobClassificationUsa, PickListValueV2>;
    /**
     * Static representation of the one-to-many navigation property [[eeo4JobCategoryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EEO_4_JOB_CATEGORY_NAV: Link<JobClassificationUsa, PickListValueV2>;
    /**
     * Static representation of the one-to-many navigation property [[eeo5JobCategoryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EEO_5_JOB_CATEGORY_NAV: Link<JobClassificationUsa, PickListValueV2>;
    /**
     * Static representation of the one-to-many navigation property [[eeo6JobCategoryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EEO_6_JOB_CATEGORY_NAV: Link<JobClassificationUsa, PickListValueV2>;
    /**
     * Static representation of the one-to-many navigation property [[eeoJobGroupNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EEO_JOB_GROUP_NAV: Link<JobClassificationUsa, PickListValueV2>;
    /**
     * Static representation of the one-to-many navigation property [[flsaStatusUsaNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FLSA_STATUS_USA_NAV: Link<JobClassificationUsa, PickListValueV2>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<JobClassificationUsa, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<JobClassificationUsa, MdfEnumValue>;
    /**
     * All fields of the JobClassificationUsa entity.
     */
    const _allFields: Array<StringField<JobClassificationUsa> | DateField<JobClassificationUsa> | BigNumberField<JobClassificationUsa> | OneToOneLink<JobClassificationUsa, User> | Link<JobClassificationUsa, PickListValueV2> | OneToOneLink<JobClassificationUsa, MdfEnumValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JobClassificationUsa>;
    /**
     * All key fields of the JobClassificationUsa entity.
     */
    const _keyFields: Array<Selectable<JobClassificationUsa>>;
    /**
     * Mapping of all key field names to the respective static field property JobClassificationUsa.
     */
    const _keys: {
        [keys: string]: Selectable<JobClassificationUsa>;
    };
}
//# sourceMappingURL=JobClassificationUsa.d.ts.map