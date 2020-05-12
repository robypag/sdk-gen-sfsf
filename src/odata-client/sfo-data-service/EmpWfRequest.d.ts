import { EmpWfRequestRequestBuilder } from './EmpWfRequestRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EmpWfRequest" of service "SFOData".
 */
export declare class EmpWfRequest extends Entity implements EmpWfRequestType {
    /**
     * Technical entity name for EmpWfRequest.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmpWfRequest.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Action Type.
     * Maximum length: 128.
     * @nullable
     */
    actionType?: string;
    /**
     * Effective Date.
     * @nullable
     */
    effectiveDate?: Moment;
    /**
     * EmpWfRequest Id.
     */
    empWfRequestId: BigNumber;
    /**
     * Entity Type.
     * Maximum length: 128.
     * @nullable
     */
    entityType?: string;
    /**
     * Event Reason.
     * Maximum length: 32.
     * @nullable
     */
    eventReason?: string;
    /**
     * Request Type.
     * Maximum length: 128.
     * @nullable
     */
    requestType?: string;
    /**
     * Subject Id.
     * Maximum length: 1024.
     * @nullable
     */
    subjectId?: string;
    /**
     * WfConfig.
     * Maximum length: 32.
     * @nullable
     */
    wfConfig?: string;
    /**
     * WfRequest Id.
     * @nullable
     */
    wfRequestId?: BigNumber;
    /**
     * One-to-many navigation property to the [[FoEventReason]] entity.
     */
    eventReasonNav: FoEventReason[];
    /**
     * One-to-many navigation property to the [[EmpJob]] entity.
     */
    jobInfoNav: EmpJob[];
    /**
     * One-to-one navigation property to the [[FoWfConfig]] entity.
     */
    wfConfigNav: FoWfConfig;
    /**
     * Returns an entity builder to construct instances `EmpWfRequest`.
     * @returns A builder that constructs instances of entity type `EmpWfRequest`.
     */
    static builder(): EntityBuilderType<EmpWfRequest, EmpWfRequestTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EmpWfRequest` entity type.
     * @returns A `EmpWfRequest` request builder.
     */
    static requestBuilder(): EmpWfRequestRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmpWfRequest`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmpWfRequest`.
     */
    static customField(fieldName: string): CustomField<EmpWfRequest>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { FoEventReason, FoEventReasonType } from './FoEventReason';
import { EmpJob, EmpJobType } from './EmpJob';
import { FoWfConfig, FoWfConfigType } from './FoWfConfig';
export interface EmpWfRequestType {
    actionType?: string;
    effectiveDate?: Moment;
    empWfRequestId: BigNumber;
    entityType?: string;
    eventReason?: string;
    requestType?: string;
    subjectId?: string;
    wfConfig?: string;
    wfRequestId?: BigNumber;
    eventReasonNav: FoEventReasonType[];
    jobInfoNav: EmpJobType[];
    wfConfigNav: FoWfConfigType;
}
export interface EmpWfRequestTypeForceMandatory {
    actionType: string;
    effectiveDate: Moment;
    empWfRequestId: BigNumber;
    entityType: string;
    eventReason: string;
    requestType: string;
    subjectId: string;
    wfConfig: string;
    wfRequestId: BigNumber;
    eventReasonNav: FoEventReasonType[];
    jobInfoNav: EmpJobType[];
    wfConfigNav: FoWfConfigType;
}
export declare namespace EmpWfRequest {
    /**
     * Static representation of the [[actionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTION_TYPE: StringField<EmpWfRequest>;
    /**
     * Static representation of the [[effectiveDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EFFECTIVE_DATE: DateField<EmpWfRequest>;
    /**
     * Static representation of the [[empWfRequestId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMP_WF_REQUEST_ID: BigNumberField<EmpWfRequest>;
    /**
     * Static representation of the [[entityType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ENTITY_TYPE: StringField<EmpWfRequest>;
    /**
     * Static representation of the [[eventReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EVENT_REASON: StringField<EmpWfRequest>;
    /**
     * Static representation of the [[requestType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQUEST_TYPE: StringField<EmpWfRequest>;
    /**
     * Static representation of the [[subjectId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUBJECT_ID: StringField<EmpWfRequest>;
    /**
     * Static representation of the [[wfConfig]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_CONFIG: StringField<EmpWfRequest>;
    /**
     * Static representation of the [[wfRequestId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_ID: BigNumberField<EmpWfRequest>;
    /**
     * Static representation of the one-to-many navigation property [[eventReasonNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EVENT_REASON_NAV: Link<EmpWfRequest, FoEventReason>;
    /**
     * Static representation of the one-to-many navigation property [[jobInfoNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_INFO_NAV: Link<EmpWfRequest, EmpJob>;
    /**
     * Static representation of the one-to-one navigation property [[wfConfigNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_CONFIG_NAV: OneToOneLink<EmpWfRequest, FoWfConfig>;
    /**
     * All fields of the EmpWfRequest entity.
     */
    const _allFields: Array<StringField<EmpWfRequest> | DateField<EmpWfRequest> | BigNumberField<EmpWfRequest> | Link<EmpWfRequest, FoEventReason> | Link<EmpWfRequest, EmpJob> | OneToOneLink<EmpWfRequest, FoWfConfig>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EmpWfRequest>;
    /**
     * All key fields of the EmpWfRequest entity.
     */
    const _keyFields: Array<Selectable<EmpWfRequest>>;
    /**
     * Mapping of all key field names to the respective static field property EmpWfRequest.
     */
    const _keys: {
        [keys: string]: Selectable<EmpWfRequest>;
    };
}
//# sourceMappingURL=EmpWfRequest.d.ts.map