import { WfRequestStepRequestBuilder } from './WfRequestStepRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "WfRequestStep" of service "SFOData".
 */
export declare class WfRequestStep extends Entity implements WfRequestStepType {
    /**
     * Technical entity name for WfRequestStep.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for WfRequestStep.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Action Type.
     * Maximum length: 32.
     * @nullable
     */
    actionType?: string;
    /**
     * Approver Type.
     * Maximum length: 32.
     * @nullable
     */
    approverType?: string;
    /**
     * Assigned To.
     * Maximum length: 100.
     * @nullable
     */
    assignedTo?: string;
    /**
     * Created By.
     * Maximum length: 100.
     * @nullable
     */
    createdBy?: string;
    /**
     * Created Date Time.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * Created On.
     * @nullable
     */
    createdOn?: Moment;
    /**
     * Last Modified By.
     * Maximum length: 100.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * Last Modified Date Time.
     * @nullable
     */
    lastModifiedDateTime?: Moment;
    /**
     * Last Modified On.
     * @nullable
     */
    lastModifiedOn?: Moment;
    /**
     * Owner Id.
     * Maximum length: 100.
     * @nullable
     */
    ownerId?: string;
    /**
     * Processed By.
     * Maximum length: 100.
     * @nullable
     */
    processedBy?: string;
    /**
     * Related To.
     * Maximum length: 32.
     * @nullable
     */
    relatedTo?: string;
    /**
     * Role.
     * Maximum length: 30.
     * @nullable
     */
    role?: string;
    /**
     * Status.
     * Maximum length: 30.
     * @nullable
     */
    status?: string;
    /**
     * Step Number.
     * @nullable
     */
    stepNum?: BigNumber;
    /**
     * WfRequest Id.
     * @nullable
     */
    wfRequestId?: BigNumber;
    /**
     * WfRequestStep Id.
     */
    wfRequestStepId: BigNumber;
    /**
     * One-to-one navigation property to the [[FoDynamicRole]] entity.
     */
    dynamicRoleNav: FoDynamicRole;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    ownerNav: User;
    /**
     * One-to-many navigation property to the [[Position]] entity.
     */
    positionNav: Position[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    processedByNav: User;
    /**
     * One-to-one navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest;
    /**
     * Returns an entity builder to construct instances `WfRequestStep`.
     * @returns A builder that constructs instances of entity type `WfRequestStep`.
     */
    static builder(): EntityBuilderType<WfRequestStep, WfRequestStepTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `WfRequestStep` entity type.
     * @returns A `WfRequestStep` request builder.
     */
    static requestBuilder(): WfRequestStepRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `WfRequestStep`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `WfRequestStep`.
     */
    static customField(fieldName: string): CustomField<WfRequestStep>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { FoDynamicRole, FoDynamicRoleType } from './FoDynamicRole';
import { User, UserType } from './User';
import { Position, PositionType } from './Position';
import { WfRequest, WfRequestType } from './WfRequest';
export interface WfRequestStepType {
    actionType?: string;
    approverType?: string;
    assignedTo?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    createdOn?: Moment;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    lastModifiedOn?: Moment;
    ownerId?: string;
    processedBy?: string;
    relatedTo?: string;
    role?: string;
    status?: string;
    stepNum?: BigNumber;
    wfRequestId?: BigNumber;
    wfRequestStepId: BigNumber;
    dynamicRoleNav: FoDynamicRoleType;
    ownerNav: UserType;
    positionNav: PositionType[];
    processedByNav: UserType;
    wfRequestNav: WfRequestType;
}
export interface WfRequestStepTypeForceMandatory {
    actionType: string;
    approverType: string;
    assignedTo: string;
    createdBy: string;
    createdDateTime: Moment;
    createdOn: Moment;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    lastModifiedOn: Moment;
    ownerId: string;
    processedBy: string;
    relatedTo: string;
    role: string;
    status: string;
    stepNum: BigNumber;
    wfRequestId: BigNumber;
    wfRequestStepId: BigNumber;
    dynamicRoleNav: FoDynamicRoleType;
    ownerNav: UserType;
    positionNav: PositionType[];
    processedByNav: UserType;
    wfRequestNav: WfRequestType;
}
export declare namespace WfRequestStep {
    /**
     * Static representation of the [[actionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTION_TYPE: StringField<WfRequestStep>;
    /**
     * Static representation of the [[approverType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVER_TYPE: StringField<WfRequestStep>;
    /**
     * Static representation of the [[assignedTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSIGNED_TO: StringField<WfRequestStep>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<WfRequestStep>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<WfRequestStep>;
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_ON: DateField<WfRequestStep>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<WfRequestStep>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<WfRequestStep>;
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_ON: DateField<WfRequestStep>;
    /**
     * Static representation of the [[ownerId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OWNER_ID: StringField<WfRequestStep>;
    /**
     * Static representation of the [[processedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROCESSED_BY: StringField<WfRequestStep>;
    /**
     * Static representation of the [[relatedTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RELATED_TO: StringField<WfRequestStep>;
    /**
     * Static representation of the [[role]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROLE: StringField<WfRequestStep>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<WfRequestStep>;
    /**
     * Static representation of the [[stepNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STEP_NUM: BigNumberField<WfRequestStep>;
    /**
     * Static representation of the [[wfRequestId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_ID: BigNumberField<WfRequestStep>;
    /**
     * Static representation of the [[wfRequestStepId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_STEP_ID: BigNumberField<WfRequestStep>;
    /**
     * Static representation of the one-to-one navigation property [[dynamicRoleNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DYNAMIC_ROLE_NAV: OneToOneLink<WfRequestStep, FoDynamicRole>;
    /**
     * Static representation of the one-to-one navigation property [[ownerNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OWNER_NAV: OneToOneLink<WfRequestStep, User>;
    /**
     * Static representation of the one-to-many navigation property [[positionNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSITION_NAV: Link<WfRequestStep, Position>;
    /**
     * Static representation of the one-to-one navigation property [[processedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROCESSED_BY_NAV: OneToOneLink<WfRequestStep, User>;
    /**
     * Static representation of the one-to-one navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: OneToOneLink<WfRequestStep, WfRequest>;
    /**
     * All fields of the WfRequestStep entity.
     */
    const _allFields: Array<StringField<WfRequestStep> | DateField<WfRequestStep> | BigNumberField<WfRequestStep> | OneToOneLink<WfRequestStep, FoDynamicRole> | OneToOneLink<WfRequestStep, User> | Link<WfRequestStep, Position> | OneToOneLink<WfRequestStep, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<WfRequestStep>;
    /**
     * All key fields of the WfRequestStep entity.
     */
    const _keyFields: Array<Selectable<WfRequestStep>>;
    /**
     * Mapping of all key field names to the respective static field property WfRequestStep.
     */
    const _keys: {
        [keys: string]: Selectable<WfRequestStep>;
    };
}
//# sourceMappingURL=WfRequestStep.d.ts.map