import { JobApplicationSnapshot_MobilityRequestBuilder } from './JobApplicationSnapshot_MobilityRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "JobApplicationSnapshot_Mobility" of service "SFOData".
 */
export declare class JobApplicationSnapshot_Mobility extends Entity implements JobApplicationSnapshot_MobilityType {
    /**
     * Technical entity name for JobApplicationSnapshot_Mobility.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplicationSnapshot_Mobility.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Application Id.
     */
    applicationId: BigNumber;
    /**
     * Background Element Id.
     */
    backgroundElementId: BigNumber;
    /**
     * Background Order Position.
     */
    bgOrderPos: BigNumber;
    /**
     * Last Modified Date.
     */
    lastModifiedDateTime: Moment;
    /**
     * Location Desired.
     * @nullable
     */
    location?: string;
    /**
     * Willing to Relocate.
     */
    willingness: string;
    /**
     * One-to-one navigation property to the [[JobApplication]] entity.
     */
    application: JobApplication;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    willingnessNav: PicklistOption;
    /**
     * Returns an entity builder to construct instances `JobApplicationSnapshot_Mobility`.
     * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_Mobility`.
     */
    static builder(): EntityBuilderType<JobApplicationSnapshot_Mobility, JobApplicationSnapshot_MobilityTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JobApplicationSnapshot_Mobility` entity type.
     * @returns A `JobApplicationSnapshot_Mobility` request builder.
     */
    static requestBuilder(): JobApplicationSnapshot_MobilityRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationSnapshot_Mobility`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_Mobility`.
     */
    static customField(fieldName: string): CustomField<JobApplicationSnapshot_Mobility>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { JobApplication, JobApplicationType } from './JobApplication';
import { PicklistOption, PicklistOptionType } from './PicklistOption';
export interface JobApplicationSnapshot_MobilityType {
    applicationId: BigNumber;
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    lastModifiedDateTime: Moment;
    location?: string;
    willingness: string;
    application: JobApplicationType;
    willingnessNav: PicklistOptionType;
}
export interface JobApplicationSnapshot_MobilityTypeForceMandatory {
    applicationId: BigNumber;
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    lastModifiedDateTime: Moment;
    location: string;
    willingness: string;
    application: JobApplicationType;
    willingnessNav: PicklistOptionType;
}
export declare namespace JobApplicationSnapshot_Mobility {
    /**
     * Static representation of the [[applicationId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPLICATION_ID: BigNumberField<JobApplicationSnapshot_Mobility>;
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BACKGROUND_ELEMENT_ID: BigNumberField<JobApplicationSnapshot_Mobility>;
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BG_ORDER_POS: BigNumberField<JobApplicationSnapshot_Mobility>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<JobApplicationSnapshot_Mobility>;
    /**
     * Static representation of the [[location]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCATION: StringField<JobApplicationSnapshot_Mobility>;
    /**
     * Static representation of the [[willingness]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WILLINGNESS: StringField<JobApplicationSnapshot_Mobility>;
    /**
     * Static representation of the one-to-one navigation property [[application]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPLICATION: OneToOneLink<JobApplicationSnapshot_Mobility, JobApplication>;
    /**
     * Static representation of the one-to-one navigation property [[willingnessNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WILLINGNESS_NAV: OneToOneLink<JobApplicationSnapshot_Mobility, PicklistOption>;
    /**
     * All fields of the JobApplicationSnapshot_Mobility entity.
     */
    const _allFields: Array<BigNumberField<JobApplicationSnapshot_Mobility> | DateField<JobApplicationSnapshot_Mobility> | StringField<JobApplicationSnapshot_Mobility> | OneToOneLink<JobApplicationSnapshot_Mobility, JobApplication> | OneToOneLink<JobApplicationSnapshot_Mobility, PicklistOption>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JobApplicationSnapshot_Mobility>;
    /**
     * All key fields of the JobApplicationSnapshot_Mobility entity.
     */
    const _keyFields: Array<Selectable<JobApplicationSnapshot_Mobility>>;
    /**
     * Mapping of all key field names to the respective static field property JobApplicationSnapshot_Mobility.
     */
    const _keys: {
        [keys: string]: Selectable<JobApplicationSnapshot_Mobility>;
    };
}
//# sourceMappingURL=JobApplicationSnapshot_Mobility.d.ts.map