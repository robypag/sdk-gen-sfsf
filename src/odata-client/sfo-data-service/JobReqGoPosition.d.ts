import { JobReqGoPositionRequestBuilder } from './JobReqGoPositionRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "JobReqGOPosition" of service "SFOData".
 */
export declare class JobReqGoPosition extends Entity implements JobReqGoPositionType {
    /**
     * Technical entity name for JobReqGoPosition.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobReqGoPosition.
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
     * One-to-one navigation property to the [[Position]] entity.
     */
    value: Position;
    /**
     * Returns an entity builder to construct instances `JobReqGoPosition`.
     * @returns A builder that constructs instances of entity type `JobReqGoPosition`.
     */
    static builder(): EntityBuilderType<JobReqGoPosition, JobReqGoPositionTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JobReqGoPosition` entity type.
     * @returns A `JobReqGoPosition` request builder.
     */
    static requestBuilder(): JobReqGoPositionRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobReqGoPosition`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobReqGoPosition`.
     */
    static customField(fieldName: string): CustomField<JobReqGoPosition>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Position, PositionType } from './Position';
export interface JobReqGoPositionType {
    fieldName: string;
    isPrimary: boolean;
    jobReqId: BigNumber;
    jobReqMultiSelectId: BigNumber;
    parentFieldValue: BigNumber;
    value: PositionType;
}
export interface JobReqGoPositionTypeForceMandatory {
    fieldName: string;
    isPrimary: boolean;
    jobReqId: BigNumber;
    jobReqMultiSelectId: BigNumber;
    parentFieldValue: BigNumber;
    value: PositionType;
}
export declare namespace JobReqGoPosition {
    /**
     * Static representation of the [[fieldName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIELD_NAME: StringField<JobReqGoPosition>;
    /**
     * Static representation of the [[isPrimary]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_PRIMARY: BooleanField<JobReqGoPosition>;
    /**
     * Static representation of the [[jobReqId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQ_ID: BigNumberField<JobReqGoPosition>;
    /**
     * Static representation of the [[jobReqMultiSelectId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQ_MULTI_SELECT_ID: BigNumberField<JobReqGoPosition>;
    /**
     * Static representation of the [[parentFieldValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARENT_FIELD_VALUE: BigNumberField<JobReqGoPosition>;
    /**
     * Static representation of the one-to-one navigation property [[value]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALUE: OneToOneLink<JobReqGoPosition, Position>;
    /**
     * All fields of the JobReqGoPosition entity.
     */
    const _allFields: Array<StringField<JobReqGoPosition> | BooleanField<JobReqGoPosition> | BigNumberField<JobReqGoPosition> | OneToOneLink<JobReqGoPosition, Position>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JobReqGoPosition>;
    /**
     * All key fields of the JobReqGoPosition entity.
     */
    const _keyFields: Array<Selectable<JobReqGoPosition>>;
    /**
     * Mapping of all key field names to the respective static field property JobReqGoPosition.
     */
    const _keys: {
        [keys: string]: Selectable<JobReqGoPosition>;
    };
}
//# sourceMappingURL=JobReqGoPosition.d.ts.map