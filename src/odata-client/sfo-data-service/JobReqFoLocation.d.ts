import { JobReqFoLocationRequestBuilder } from './JobReqFoLocationRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, Entity, EntityBuilderType, Link, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "JobReqFOLocation" of service "SFOData".
 */
export declare class JobReqFoLocation extends Entity implements JobReqFoLocationType {
    /**
     * Technical entity name for JobReqFoLocation.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobReqFoLocation.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Field Name.
     */
    fieldName: string;
    /**
     * Is Primary.
     */
    isPrimary: boolean;
    /**
     * Job Req Id.
     */
    jobReqId: BigNumber;
    /**
     * Job Req Multi Select Id.
     */
    jobReqMultiSelectId: BigNumber;
    /**
     * Parent Field Value.
     */
    parentFieldValue: BigNumber;
    /**
     * One-to-many navigation property to the [[FoLocation]] entity.
     */
    value: FoLocation[];
    /**
     * Returns an entity builder to construct instances `JobReqFoLocation`.
     * @returns A builder that constructs instances of entity type `JobReqFoLocation`.
     */
    static builder(): EntityBuilderType<JobReqFoLocation, JobReqFoLocationTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JobReqFoLocation` entity type.
     * @returns A `JobReqFoLocation` request builder.
     */
    static requestBuilder(): JobReqFoLocationRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobReqFoLocation`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobReqFoLocation`.
     */
    static customField(fieldName: string): CustomField<JobReqFoLocation>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { FoLocation, FoLocationType } from './FoLocation';
export interface JobReqFoLocationType {
    fieldName: string;
    isPrimary: boolean;
    jobReqId: BigNumber;
    jobReqMultiSelectId: BigNumber;
    parentFieldValue: BigNumber;
    value: FoLocationType[];
}
export interface JobReqFoLocationTypeForceMandatory {
    fieldName: string;
    isPrimary: boolean;
    jobReqId: BigNumber;
    jobReqMultiSelectId: BigNumber;
    parentFieldValue: BigNumber;
    value: FoLocationType[];
}
export declare namespace JobReqFoLocation {
    /**
     * Static representation of the [[fieldName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIELD_NAME: StringField<JobReqFoLocation>;
    /**
     * Static representation of the [[isPrimary]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_PRIMARY: BooleanField<JobReqFoLocation>;
    /**
     * Static representation of the [[jobReqId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQ_ID: BigNumberField<JobReqFoLocation>;
    /**
     * Static representation of the [[jobReqMultiSelectId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQ_MULTI_SELECT_ID: BigNumberField<JobReqFoLocation>;
    /**
     * Static representation of the [[parentFieldValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARENT_FIELD_VALUE: BigNumberField<JobReqFoLocation>;
    /**
     * Static representation of the one-to-many navigation property [[value]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALUE: Link<JobReqFoLocation, FoLocation>;
    /**
     * All fields of the JobReqFoLocation entity.
     */
    const _allFields: Array<StringField<JobReqFoLocation> | BooleanField<JobReqFoLocation> | BigNumberField<JobReqFoLocation> | Link<JobReqFoLocation, FoLocation>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JobReqFoLocation>;
    /**
     * All key fields of the JobReqFoLocation entity.
     */
    const _keyFields: Array<Selectable<JobReqFoLocation>>;
    /**
     * Mapping of all key field names to the respective static field property JobReqFoLocation.
     */
    const _keys: {
        [keys: string]: Selectable<JobReqFoLocation>;
    };
}
//# sourceMappingURL=JobReqFoLocation.d.ts.map