import { WfRequestParticipatorRequestBuilder } from './WfRequestParticipatorRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "WfRequestParticipator" of service "SFOData".
 */
export declare class WfRequestParticipator extends Entity implements WfRequestParticipatorType {
    /**
     * Technical entity name for WfRequestParticipator.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for WfRequestParticipator.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Actor Type.
     * Maximum length: 32.
     * @nullable
     */
    actorType?: string;
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
     * Participator Type.
     * Maximum length: 32.
     * @nullable
     */
    participatorType?: string;
    /**
     * Processing Order.
     * @nullable
     */
    processingOrder?: BigNumber;
    /**
     * Related To.
     * Maximum length: 32.
     * @nullable
     */
    relatedTo?: string;
    /**
     * Role Id.
     * Maximum length: 100.
     * @nullable
     */
    roleId?: string;
    /**
     * Workflow Request Id.
     * @nullable
     */
    wfRequestId?: BigNumber;
    /**
     * Workflow Request Participator Id.
     */
    wfRequestParticipatorId: BigNumber;
    /**
     * One-to-one navigation property to the [[DynamicGroup]] entity.
     */
    dynamicGroupNav: DynamicGroup;
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
     * Returns an entity builder to construct instances `WfRequestParticipator`.
     * @returns A builder that constructs instances of entity type `WfRequestParticipator`.
     */
    static builder(): EntityBuilderType<WfRequestParticipator, WfRequestParticipatorTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `WfRequestParticipator` entity type.
     * @returns A `WfRequestParticipator` request builder.
     */
    static requestBuilder(): WfRequestParticipatorRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `WfRequestParticipator`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `WfRequestParticipator`.
     */
    static customField(fieldName: string): CustomField<WfRequestParticipator>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { DynamicGroup, DynamicGroupType } from './DynamicGroup';
import { FoDynamicRole, FoDynamicRoleType } from './FoDynamicRole';
import { User, UserType } from './User';
import { Position, PositionType } from './Position';
export interface WfRequestParticipatorType {
    actorType?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    createdOn?: Moment;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    lastModifiedOn?: Moment;
    ownerId?: string;
    participatorType?: string;
    processingOrder?: BigNumber;
    relatedTo?: string;
    roleId?: string;
    wfRequestId?: BigNumber;
    wfRequestParticipatorId: BigNumber;
    dynamicGroupNav: DynamicGroupType;
    dynamicRoleNav: FoDynamicRoleType;
    ownerNav: UserType;
    positionNav: PositionType[];
}
export interface WfRequestParticipatorTypeForceMandatory {
    actorType: string;
    createdBy: string;
    createdDateTime: Moment;
    createdOn: Moment;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    lastModifiedOn: Moment;
    ownerId: string;
    participatorType: string;
    processingOrder: BigNumber;
    relatedTo: string;
    roleId: string;
    wfRequestId: BigNumber;
    wfRequestParticipatorId: BigNumber;
    dynamicGroupNav: DynamicGroupType;
    dynamicRoleNav: FoDynamicRoleType;
    ownerNav: UserType;
    positionNav: PositionType[];
}
export declare namespace WfRequestParticipator {
    /**
     * Static representation of the [[actorType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTOR_TYPE: StringField<WfRequestParticipator>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<WfRequestParticipator>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<WfRequestParticipator>;
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_ON: DateField<WfRequestParticipator>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<WfRequestParticipator>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<WfRequestParticipator>;
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_ON: DateField<WfRequestParticipator>;
    /**
     * Static representation of the [[ownerId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OWNER_ID: StringField<WfRequestParticipator>;
    /**
     * Static representation of the [[participatorType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARTICIPATOR_TYPE: StringField<WfRequestParticipator>;
    /**
     * Static representation of the [[processingOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROCESSING_ORDER: BigNumberField<WfRequestParticipator>;
    /**
     * Static representation of the [[relatedTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RELATED_TO: StringField<WfRequestParticipator>;
    /**
     * Static representation of the [[roleId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROLE_ID: StringField<WfRequestParticipator>;
    /**
     * Static representation of the [[wfRequestId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_ID: BigNumberField<WfRequestParticipator>;
    /**
     * Static representation of the [[wfRequestParticipatorId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_PARTICIPATOR_ID: BigNumberField<WfRequestParticipator>;
    /**
     * Static representation of the one-to-one navigation property [[dynamicGroupNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DYNAMIC_GROUP_NAV: OneToOneLink<WfRequestParticipator, DynamicGroup>;
    /**
     * Static representation of the one-to-one navigation property [[dynamicRoleNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DYNAMIC_ROLE_NAV: OneToOneLink<WfRequestParticipator, FoDynamicRole>;
    /**
     * Static representation of the one-to-one navigation property [[ownerNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OWNER_NAV: OneToOneLink<WfRequestParticipator, User>;
    /**
     * Static representation of the one-to-many navigation property [[positionNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSITION_NAV: Link<WfRequestParticipator, Position>;
    /**
     * All fields of the WfRequestParticipator entity.
     */
    const _allFields: Array<StringField<WfRequestParticipator> | DateField<WfRequestParticipator> | BigNumberField<WfRequestParticipator> | OneToOneLink<WfRequestParticipator, DynamicGroup> | OneToOneLink<WfRequestParticipator, FoDynamicRole> | OneToOneLink<WfRequestParticipator, User> | Link<WfRequestParticipator, Position>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<WfRequestParticipator>;
    /**
     * All key fields of the WfRequestParticipator entity.
     */
    const _keyFields: Array<Selectable<WfRequestParticipator>>;
    /**
     * Mapping of all key field names to the respective static field property WfRequestParticipator.
     */
    const _keys: {
        [keys: string]: Selectable<WfRequestParticipator>;
    };
}
//# sourceMappingURL=WfRequestParticipator.d.ts.map