import { FoWfConfigStepApproverRequestBuilder } from './FoWfConfigStepApproverRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FOWfConfigStepApprover" of service "SFOData".
 */
export declare class FoWfConfigStepApprover extends Entity implements FoWfConfigStepApproverType {
    /**
     * Technical entity name for FoWfConfigStepApprover.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoWfConfigStepApprover.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Edit Transaction.
     * @nullable
     */
    actionType?: string;
    /**
     * approverPositionRelationship.
     * @nullable
     */
    approverPositionRelationship?: string;
    /**
     * Approver Role.
     * @nullable
     */
    approverRole?: string;
    /**
     * Approver Type.
     * Maximum length: 32.
     * @nullable
     */
    approverType?: string;
    /**
     * Context.
     * Maximum length: 32.
     * @nullable
     */
    context?: string;
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
     * emailConfiguration.
     * Maximum length: 128.
     * @nullable
     */
    emailConfiguration?: string;
    /**
     * externalCode.
     */
    externalCode: string;
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
     * relationshipToApprover.
     * @nullable
     */
    relationshipToApprover?: string;
    /**
     * relationshipToPosition.
     * @nullable
     */
    relationshipToPosition?: string;
    /**
     * respectRBP.
     * @nullable
     */
    respectRbp?: boolean;
    /**
     * skipType.
     * @nullable
     */
    skipType?: string;
    /**
     * stepNum.
     */
    stepNum: BigNumber;
    /**
     * One-to-many navigation property to the [[FoDynamicRole]] entity.
     */
    approverDynamicRoleNav: FoDynamicRole[];
    /**
     * One-to-one navigation property to the [[DynamicGroup]] entity.
     */
    approverGroupNav: DynamicGroup;
    /**
     * One-to-many navigation property to the [[Position]] entity.
     */
    approverPositionNav: Position[];
    /**
     * Returns an entity builder to construct instances `FoWfConfigStepApprover`.
     * @returns A builder that constructs instances of entity type `FoWfConfigStepApprover`.
     */
    static builder(): EntityBuilderType<FoWfConfigStepApprover, FoWfConfigStepApproverTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FoWfConfigStepApprover` entity type.
     * @returns A `FoWfConfigStepApprover` request builder.
     */
    static requestBuilder(): FoWfConfigStepApproverRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoWfConfigStepApprover`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoWfConfigStepApprover`.
     */
    static customField(fieldName: string): CustomField<FoWfConfigStepApprover>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { FoDynamicRole, FoDynamicRoleType } from './FoDynamicRole';
import { DynamicGroup, DynamicGroupType } from './DynamicGroup';
import { Position, PositionType } from './Position';
export interface FoWfConfigStepApproverType {
    actionType?: string;
    approverPositionRelationship?: string;
    approverRole?: string;
    approverType?: string;
    context?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    emailConfiguration?: string;
    externalCode: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    relationshipToApprover?: string;
    relationshipToPosition?: string;
    respectRbp?: boolean;
    skipType?: string;
    stepNum: BigNumber;
    approverDynamicRoleNav: FoDynamicRoleType[];
    approverGroupNav: DynamicGroupType;
    approverPositionNav: PositionType[];
}
export interface FoWfConfigStepApproverTypeForceMandatory {
    actionType: string;
    approverPositionRelationship: string;
    approverRole: string;
    approverType: string;
    context: string;
    createdBy: string;
    createdDateTime: Moment;
    emailConfiguration: string;
    externalCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    relationshipToApprover: string;
    relationshipToPosition: string;
    respectRbp: boolean;
    skipType: string;
    stepNum: BigNumber;
    approverDynamicRoleNav: FoDynamicRoleType[];
    approverGroupNav: DynamicGroupType;
    approverPositionNav: PositionType[];
}
export declare namespace FoWfConfigStepApprover {
    /**
     * Static representation of the [[actionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTION_TYPE: StringField<FoWfConfigStepApprover>;
    /**
     * Static representation of the [[approverPositionRelationship]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVER_POSITION_RELATIONSHIP: StringField<FoWfConfigStepApprover>;
    /**
     * Static representation of the [[approverRole]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVER_ROLE: StringField<FoWfConfigStepApprover>;
    /**
     * Static representation of the [[approverType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVER_TYPE: StringField<FoWfConfigStepApprover>;
    /**
     * Static representation of the [[context]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTEXT: StringField<FoWfConfigStepApprover>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<FoWfConfigStepApprover>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<FoWfConfigStepApprover>;
    /**
     * Static representation of the [[emailConfiguration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMAIL_CONFIGURATION: StringField<FoWfConfigStepApprover>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<FoWfConfigStepApprover>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<FoWfConfigStepApprover>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<FoWfConfigStepApprover>;
    /**
     * Static representation of the [[relationshipToApprover]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RELATIONSHIP_TO_APPROVER: StringField<FoWfConfigStepApprover>;
    /**
     * Static representation of the [[relationshipToPosition]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RELATIONSHIP_TO_POSITION: StringField<FoWfConfigStepApprover>;
    /**
     * Static representation of the [[respectRbp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESPECT_RBP: BooleanField<FoWfConfigStepApprover>;
    /**
     * Static representation of the [[skipType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SKIP_TYPE: StringField<FoWfConfigStepApprover>;
    /**
     * Static representation of the [[stepNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STEP_NUM: BigNumberField<FoWfConfigStepApprover>;
    /**
     * Static representation of the one-to-many navigation property [[approverDynamicRoleNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVER_DYNAMIC_ROLE_NAV: Link<FoWfConfigStepApprover, FoDynamicRole>;
    /**
     * Static representation of the one-to-one navigation property [[approverGroupNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVER_GROUP_NAV: OneToOneLink<FoWfConfigStepApprover, DynamicGroup>;
    /**
     * Static representation of the one-to-many navigation property [[approverPositionNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVER_POSITION_NAV: Link<FoWfConfigStepApprover, Position>;
    /**
     * All fields of the FoWfConfigStepApprover entity.
     */
    const _allFields: Array<StringField<FoWfConfigStepApprover> | DateField<FoWfConfigStepApprover> | BooleanField<FoWfConfigStepApprover> | BigNumberField<FoWfConfigStepApprover> | Link<FoWfConfigStepApprover, FoDynamicRole> | OneToOneLink<FoWfConfigStepApprover, DynamicGroup> | Link<FoWfConfigStepApprover, Position>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FoWfConfigStepApprover>;
    /**
     * All key fields of the FoWfConfigStepApprover entity.
     */
    const _keyFields: Array<Selectable<FoWfConfigStepApprover>>;
    /**
     * Mapping of all key field names to the respective static field property FoWfConfigStepApprover.
     */
    const _keys: {
        [keys: string]: Selectable<FoWfConfigStepApprover>;
    };
}
//# sourceMappingURL=FoWfConfigStepApprover.d.ts.map