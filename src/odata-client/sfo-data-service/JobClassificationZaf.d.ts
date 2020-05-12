import { JobClassificationZafRequestBuilder } from './JobClassificationZafRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "JobClassificationZAF" of service "SFOData".
 */
export declare class JobClassificationZaf extends Entity implements JobClassificationZafType {
    /**
     * Technical entity name for JobClassificationZaf.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobClassificationZaf.
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
     * Occupational Level.
     * Maximum length: 128.
     * @nullable
     */
    occupationalLevel?: string;
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
     * One-to-many navigation property to the [[PickListValueV2]] entity.
     */
    occupationalLevelNav: PickListValueV2[];
    /**
     * Returns an entity builder to construct instances `JobClassificationZaf`.
     * @returns A builder that constructs instances of entity type `JobClassificationZaf`.
     */
    static builder(): EntityBuilderType<JobClassificationZaf, JobClassificationZafTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JobClassificationZaf` entity type.
     * @returns A `JobClassificationZaf` request builder.
     */
    static requestBuilder(): JobClassificationZafRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobClassificationZaf`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobClassificationZaf`.
     */
    static customField(fieldName: string): CustomField<JobClassificationZaf>;
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
import { PickListValueV2, PickListValueV2Type } from './PickListValueV2';
export interface JobClassificationZafType {
    jobClassificationCountryCountry: string;
    jobClassificationEffectiveStartDate: Moment;
    jobClassificationExternalCode: string;
    createdBy?: string;
    createdDateTime?: Moment;
    externalCode: BigNumber;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    occupationalLevel?: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    occupationalLevelNav: PickListValueV2Type[];
}
export interface JobClassificationZafTypeForceMandatory {
    jobClassificationCountryCountry: string;
    jobClassificationEffectiveStartDate: Moment;
    jobClassificationExternalCode: string;
    createdBy: string;
    createdDateTime: Moment;
    externalCode: BigNumber;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    occupationalLevel: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    occupationalLevelNav: PickListValueV2Type[];
}
export declare namespace JobClassificationZaf {
    /**
     * Static representation of the [[jobClassificationCountryCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_CLASSIFICATION_COUNTRY_COUNTRY: StringField<JobClassificationZaf>;
    /**
     * Static representation of the [[jobClassificationEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_CLASSIFICATION_EFFECTIVE_START_DATE: DateField<JobClassificationZaf>;
    /**
     * Static representation of the [[jobClassificationExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_CLASSIFICATION_EXTERNAL_CODE: StringField<JobClassificationZaf>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<JobClassificationZaf>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<JobClassificationZaf>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: BigNumberField<JobClassificationZaf>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<JobClassificationZaf>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<JobClassificationZaf>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<JobClassificationZaf>;
    /**
     * Static representation of the [[occupationalLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OCCUPATIONAL_LEVEL: StringField<JobClassificationZaf>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<JobClassificationZaf, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<JobClassificationZaf, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<JobClassificationZaf, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[occupationalLevelNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OCCUPATIONAL_LEVEL_NAV: Link<JobClassificationZaf, PickListValueV2>;
    /**
     * All fields of the JobClassificationZaf entity.
     */
    const _allFields: Array<StringField<JobClassificationZaf> | DateField<JobClassificationZaf> | BigNumberField<JobClassificationZaf> | OneToOneLink<JobClassificationZaf, User> | OneToOneLink<JobClassificationZaf, MdfEnumValue> | Link<JobClassificationZaf, PickListValueV2>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JobClassificationZaf>;
    /**
     * All key fields of the JobClassificationZaf entity.
     */
    const _keyFields: Array<Selectable<JobClassificationZaf>>;
    /**
     * Mapping of all key field names to the respective static field property JobClassificationZaf.
     */
    const _keys: {
        [keys: string]: Selectable<JobClassificationZaf>;
    };
}
//# sourceMappingURL=JobClassificationZaf.d.ts.map