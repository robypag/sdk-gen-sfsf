import { FoWfConfigRequestBuilder } from './FoWfConfigRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FOWfConfig" of service "SFOData".
 */
export declare class FoWfConfig extends Entity implements FoWfConfigType {
    /**
     * Technical entity name for FoWfConfig.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoWfConfig.
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
     * Created On.
     * @nullable
     */
    createdOn?: Moment;
    /**
     * Description.
     * Maximum length: 128.
     * @nullable
     */
    description?: string;
    /**
     * emailConfiguration.
     * @nullable
     */
    emailConfiguration?: BigNumber;
    /**
     * Workflow ID.
     * Maximum length: 32.
     */
    externalCode: string;
    /**
     * futureDatedAlternateWorkflow.
     * @nullable
     */
    futureDatedAlternateWorkflow?: string;
    /**
     * Is Delegate Supported.
     * @nullable
     */
    isDelegateSupported?: boolean;
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
     * Name.
     * Maximum length: 32.
     * @nullable
     */
    name?: string;
    /**
     * relationshipToApprover.
     * @nullable
     */
    relationshipToApprover?: string;
    /**
     * Remind In Days.
     * @nullable
     */
    remindIndays?: BigNumber;
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
     * @nullable
     */
    stepNum?: BigNumber;
    /**
     * One-to-one navigation property to the [[FoTranslation]] entity.
     */
    descriptionTranslationNav: FoTranslation;
    /**
     * One-to-one navigation property to the [[FoWfConfig]] entity.
     */
    futureDatedAlternateWorkflowNav: FoWfConfig;
    /**
     * One-to-one navigation property to the [[FoTranslation]] entity.
     */
    nameTranslationNav: FoTranslation;
    /**
     * One-to-many navigation property to the [[FoWfConfigStepApprover]] entity.
     */
    wfStepApproverNav: FoWfConfigStepApprover[];
    /**
     * Returns an entity builder to construct instances `FoWfConfig`.
     * @returns A builder that constructs instances of entity type `FoWfConfig`.
     */
    static builder(): EntityBuilderType<FoWfConfig, FoWfConfigTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FoWfConfig` entity type.
     * @returns A `FoWfConfig` request builder.
     */
    static requestBuilder(): FoWfConfigRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoWfConfig`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoWfConfig`.
     */
    static customField(fieldName: string): CustomField<FoWfConfig>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { FoTranslation, FoTranslationType } from './FoTranslation';
import { FoWfConfigStepApprover, FoWfConfigStepApproverType } from './FoWfConfigStepApprover';
export interface FoWfConfigType {
    actionType?: string;
    approverRole?: string;
    approverType?: string;
    context?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    createdOn?: Moment;
    description?: string;
    emailConfiguration?: BigNumber;
    externalCode: string;
    futureDatedAlternateWorkflow?: string;
    isDelegateSupported?: boolean;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    lastModifiedOn?: Moment;
    name?: string;
    relationshipToApprover?: string;
    remindIndays?: BigNumber;
    respectRbp?: boolean;
    skipType?: string;
    stepNum?: BigNumber;
    descriptionTranslationNav: FoTranslationType;
    futureDatedAlternateWorkflowNav: FoWfConfigType;
    nameTranslationNav: FoTranslationType;
    wfStepApproverNav: FoWfConfigStepApproverType[];
}
export interface FoWfConfigTypeForceMandatory {
    actionType: string;
    approverRole: string;
    approverType: string;
    context: string;
    createdBy: string;
    createdDateTime: Moment;
    createdOn: Moment;
    description: string;
    emailConfiguration: BigNumber;
    externalCode: string;
    futureDatedAlternateWorkflow: string;
    isDelegateSupported: boolean;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    lastModifiedOn: Moment;
    name: string;
    relationshipToApprover: string;
    remindIndays: BigNumber;
    respectRbp: boolean;
    skipType: string;
    stepNum: BigNumber;
    descriptionTranslationNav: FoTranslationType;
    futureDatedAlternateWorkflowNav: FoWfConfigType;
    nameTranslationNav: FoTranslationType;
    wfStepApproverNav: FoWfConfigStepApproverType[];
}
export declare namespace FoWfConfig {
    /**
     * Static representation of the [[actionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTION_TYPE: StringField<FoWfConfig>;
    /**
     * Static representation of the [[approverRole]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVER_ROLE: StringField<FoWfConfig>;
    /**
     * Static representation of the [[approverType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVER_TYPE: StringField<FoWfConfig>;
    /**
     * Static representation of the [[context]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTEXT: StringField<FoWfConfig>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<FoWfConfig>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<FoWfConfig>;
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_ON: DateField<FoWfConfig>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<FoWfConfig>;
    /**
     * Static representation of the [[emailConfiguration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMAIL_CONFIGURATION: BigNumberField<FoWfConfig>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<FoWfConfig>;
    /**
     * Static representation of the [[futureDatedAlternateWorkflow]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FUTURE_DATED_ALTERNATE_WORKFLOW: StringField<FoWfConfig>;
    /**
     * Static representation of the [[isDelegateSupported]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_DELEGATE_SUPPORTED: BooleanField<FoWfConfig>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<FoWfConfig>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<FoWfConfig>;
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_ON: DateField<FoWfConfig>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<FoWfConfig>;
    /**
     * Static representation of the [[relationshipToApprover]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RELATIONSHIP_TO_APPROVER: StringField<FoWfConfig>;
    /**
     * Static representation of the [[remindIndays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REMIND_INDAYS: BigNumberField<FoWfConfig>;
    /**
     * Static representation of the [[respectRbp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESPECT_RBP: BooleanField<FoWfConfig>;
    /**
     * Static representation of the [[skipType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SKIP_TYPE: StringField<FoWfConfig>;
    /**
     * Static representation of the [[stepNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STEP_NUM: BigNumberField<FoWfConfig>;
    /**
     * Static representation of the one-to-one navigation property [[descriptionTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_TRANSLATION_NAV: OneToOneLink<FoWfConfig, FoTranslation>;
    /**
     * Static representation of the one-to-one navigation property [[futureDatedAlternateWorkflowNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FUTURE_DATED_ALTERNATE_WORKFLOW_NAV: OneToOneLink<FoWfConfig, FoWfConfig>;
    /**
     * Static representation of the one-to-one navigation property [[nameTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_TRANSLATION_NAV: OneToOneLink<FoWfConfig, FoTranslation>;
    /**
     * Static representation of the one-to-many navigation property [[wfStepApproverNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_STEP_APPROVER_NAV: Link<FoWfConfig, FoWfConfigStepApprover>;
    /**
     * All fields of the FoWfConfig entity.
     */
    const _allFields: Array<StringField<FoWfConfig> | DateField<FoWfConfig> | BigNumberField<FoWfConfig> | BooleanField<FoWfConfig> | OneToOneLink<FoWfConfig, FoTranslation> | OneToOneLink<FoWfConfig, FoWfConfig> | Link<FoWfConfig, FoWfConfigStepApprover>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FoWfConfig>;
    /**
     * All key fields of the FoWfConfig entity.
     */
    const _keyFields: Array<Selectable<FoWfConfig>>;
    /**
     * Mapping of all key field names to the respective static field property FoWfConfig.
     */
    const _keys: {
        [keys: string]: Selectable<FoWfConfig>;
    };
}
//# sourceMappingURL=FoWfConfig.d.ts.map