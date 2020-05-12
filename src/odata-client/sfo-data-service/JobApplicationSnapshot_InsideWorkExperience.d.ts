import { JobApplicationSnapshot_InsideWorkExperienceRequestBuilder } from './JobApplicationSnapshot_InsideWorkExperienceRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "JobApplicationSnapshot_InsideWorkExperience" of service "SFOData".
 */
export declare class JobApplicationSnapshot_InsideWorkExperience extends Entity implements JobApplicationSnapshot_InsideWorkExperienceType {
    /**
     * Technical entity name for JobApplicationSnapshot_InsideWorkExperience.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplicationSnapshot_InsideWorkExperience.
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
     * Department.
     * @nullable
     */
    department?: string;
    /**
     * End Date.
     * @nullable
     */
    endDate?: Moment;
    /**
     * Last Modified Date.
     */
    lastModifiedDateTime: Moment;
    /**
     * From Date.
     */
    startDate: Moment;
    /**
     * Title.
     */
    title: string;
    /**
     * One-to-one navigation property to the [[JobApplication]] entity.
     */
    application: JobApplication;
    /**
     * Returns an entity builder to construct instances `JobApplicationSnapshot_InsideWorkExperience`.
     * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_InsideWorkExperience`.
     */
    static builder(): EntityBuilderType<JobApplicationSnapshot_InsideWorkExperience, JobApplicationSnapshot_InsideWorkExperienceTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JobApplicationSnapshot_InsideWorkExperience` entity type.
     * @returns A `JobApplicationSnapshot_InsideWorkExperience` request builder.
     */
    static requestBuilder(): JobApplicationSnapshot_InsideWorkExperienceRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationSnapshot_InsideWorkExperience`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_InsideWorkExperience`.
     */
    static customField(fieldName: string): CustomField<JobApplicationSnapshot_InsideWorkExperience>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { JobApplication, JobApplicationType } from './JobApplication';
export interface JobApplicationSnapshot_InsideWorkExperienceType {
    applicationId: BigNumber;
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    department?: string;
    endDate?: Moment;
    lastModifiedDateTime: Moment;
    startDate: Moment;
    title: string;
    application: JobApplicationType;
}
export interface JobApplicationSnapshot_InsideWorkExperienceTypeForceMandatory {
    applicationId: BigNumber;
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    department: string;
    endDate: Moment;
    lastModifiedDateTime: Moment;
    startDate: Moment;
    title: string;
    application: JobApplicationType;
}
export declare namespace JobApplicationSnapshot_InsideWorkExperience {
    /**
     * Static representation of the [[applicationId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPLICATION_ID: BigNumberField<JobApplicationSnapshot_InsideWorkExperience>;
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BACKGROUND_ELEMENT_ID: BigNumberField<JobApplicationSnapshot_InsideWorkExperience>;
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BG_ORDER_POS: BigNumberField<JobApplicationSnapshot_InsideWorkExperience>;
    /**
     * Static representation of the [[department]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPARTMENT: StringField<JobApplicationSnapshot_InsideWorkExperience>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<JobApplicationSnapshot_InsideWorkExperience>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<JobApplicationSnapshot_InsideWorkExperience>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<JobApplicationSnapshot_InsideWorkExperience>;
    /**
     * Static representation of the [[title]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE: StringField<JobApplicationSnapshot_InsideWorkExperience>;
    /**
     * Static representation of the one-to-one navigation property [[application]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPLICATION: OneToOneLink<JobApplicationSnapshot_InsideWorkExperience, JobApplication>;
    /**
     * All fields of the JobApplicationSnapshot_InsideWorkExperience entity.
     */
    const _allFields: Array<BigNumberField<JobApplicationSnapshot_InsideWorkExperience> | StringField<JobApplicationSnapshot_InsideWorkExperience> | DateField<JobApplicationSnapshot_InsideWorkExperience> | OneToOneLink<JobApplicationSnapshot_InsideWorkExperience, JobApplication>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JobApplicationSnapshot_InsideWorkExperience>;
    /**
     * All key fields of the JobApplicationSnapshot_InsideWorkExperience entity.
     */
    const _keyFields: Array<Selectable<JobApplicationSnapshot_InsideWorkExperience>>;
    /**
     * Mapping of all key field names to the respective static field property JobApplicationSnapshot_InsideWorkExperience.
     */
    const _keys: {
        [keys: string]: Selectable<JobApplicationSnapshot_InsideWorkExperience>;
    };
}
//# sourceMappingURL=JobApplicationSnapshot_InsideWorkExperience.d.ts.map