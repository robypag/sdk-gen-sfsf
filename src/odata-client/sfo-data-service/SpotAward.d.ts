import { SpotAwardRequestBuilder } from './SpotAwardRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "SpotAward" of service "SFOData".
 */
export declare class SpotAward extends Entity implements SpotAwardType {
    /**
     * Technical entity name for SpotAward.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SpotAward.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Approval Status.
     * Maximum length: 128.
     * @nullable
     */
    approvalStatus?: string;
    /**
     * Approved Date.
     * @nullable
     */
    approvedDate?: Moment;
    /**
     * Award Amount.
     * @nullable
     */
    awardAmount?: BigNumber;
    /**
     * Budget Holder.
     * Maximum length: 100.
     * @nullable
     */
    budgetHolderId?: string;
    /**
     * Award Category.
     * Maximum length: 128.
     * @nullable
     */
    category?: string;
    /**
     * Message to Approvers.
     * Maximum length: 4000.
     * @nullable
     */
    commentForApprovers?: string;
    /**
     * Message to Recipient.
     * Maximum length: 4000.
     * @nullable
     */
    commentForReceiver?: string;
    /**
     * createdBy.
     * Maximum length: 255.
     * @nullable
     */
    createdBy?: string;
    /**
     * Request Date.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * Currency.
     * Maximum length: 255.
     * @nullable
     */
    currency?: string;
    /**
     * externalCode.
     */
    externalCode: BigNumber;
    /**
     * Guideline Amount.
     * @nullable
     */
    guidelineAmount?: BigNumber;
    /**
     * lastModifiedBy.
     * Maximum length: 255.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * Last Modified Date.
     * @nullable
     */
    lastModifiedDateTime?: Moment;
    /**
     * Award Level.
     * Maximum length: 128.
     * @nullable
     */
    level?: string;
    /**
     * Record Status.
     * Maximum length: 255.
     * @nullable
     */
    mdfSystemRecordStatus?: string;
    /**
     * Nominator.
     * Maximum length: 100.
     * @nullable
     */
    nominatorId?: string;
    /**
     * mdfSystemRecordId.
     * Maximum length: 255.
     * @nullable
     */
    recordId?: string;
    /**
     * Spot Award Program.
     * Maximum length: 128.
     * @nullable
     */
    spotAwardProgram?: string;
    /**
     * Award Recipient.
     * Maximum length: 100.
     * @nullable
     */
    userId?: string;
    /**
     * workflowRequestId.
     * @nullable
     */
    workflowRequestId?: BigNumber;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    approvalStatusNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    budgetHolderIdNav: User;
    /**
     * One-to-one navigation property to the [[SpotAwardCategory]] entity.
     */
    categoryNav: SpotAwardCategory;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[SpotAwardLevel]] entity.
     */
    levelNav: SpotAwardLevel;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    nominatorIdNav: User;
    /**
     * One-to-one navigation property to the [[SpotAwardProgram]] entity.
     */
    spotAwardProgramNav: SpotAwardProgram;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    userIdNav: User;
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `SpotAward`.
     * @returns A builder that constructs instances of entity type `SpotAward`.
     */
    static builder(): EntityBuilderType<SpotAward, SpotAwardTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `SpotAward` entity type.
     * @returns A `SpotAward` request builder.
     */
    static requestBuilder(): SpotAwardRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SpotAward`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SpotAward`.
     */
    static customField(fieldName: string): CustomField<SpotAward>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { User, UserType } from './User';
import { SpotAwardCategory, SpotAwardCategoryType } from './SpotAwardCategory';
import { SpotAwardLevel, SpotAwardLevelType } from './SpotAwardLevel';
import { SpotAwardProgram, SpotAwardProgramType } from './SpotAwardProgram';
import { WfRequest, WfRequestType } from './WfRequest';
export interface SpotAwardType {
    approvalStatus?: string;
    approvedDate?: Moment;
    awardAmount?: BigNumber;
    budgetHolderId?: string;
    category?: string;
    commentForApprovers?: string;
    commentForReceiver?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    currency?: string;
    externalCode: BigNumber;
    guidelineAmount?: BigNumber;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    level?: string;
    mdfSystemRecordStatus?: string;
    nominatorId?: string;
    recordId?: string;
    spotAwardProgram?: string;
    userId?: string;
    workflowRequestId?: BigNumber;
    approvalStatusNav: MdfEnumValueType;
    budgetHolderIdNav: UserType;
    categoryNav: SpotAwardCategoryType;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    levelNav: SpotAwardLevelType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    nominatorIdNav: UserType;
    spotAwardProgramNav: SpotAwardProgramType;
    userIdNav: UserType;
    wfRequestNav: WfRequestType[];
}
export interface SpotAwardTypeForceMandatory {
    approvalStatus: string;
    approvedDate: Moment;
    awardAmount: BigNumber;
    budgetHolderId: string;
    category: string;
    commentForApprovers: string;
    commentForReceiver: string;
    createdBy: string;
    createdDateTime: Moment;
    currency: string;
    externalCode: BigNumber;
    guidelineAmount: BigNumber;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    level: string;
    mdfSystemRecordStatus: string;
    nominatorId: string;
    recordId: string;
    spotAwardProgram: string;
    userId: string;
    workflowRequestId: BigNumber;
    approvalStatusNav: MdfEnumValueType;
    budgetHolderIdNav: UserType;
    categoryNav: SpotAwardCategoryType;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    levelNav: SpotAwardLevelType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    nominatorIdNav: UserType;
    spotAwardProgramNav: SpotAwardProgramType;
    userIdNav: UserType;
    wfRequestNav: WfRequestType[];
}
export declare namespace SpotAward {
    /**
     * Static representation of the [[approvalStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVAL_STATUS: StringField<SpotAward>;
    /**
     * Static representation of the [[approvedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVED_DATE: DateField<SpotAward>;
    /**
     * Static representation of the [[awardAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AWARD_AMOUNT: BigNumberField<SpotAward>;
    /**
     * Static representation of the [[budgetHolderId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUDGET_HOLDER_ID: StringField<SpotAward>;
    /**
     * Static representation of the [[category]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CATEGORY: StringField<SpotAward>;
    /**
     * Static representation of the [[commentForApprovers]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMENT_FOR_APPROVERS: StringField<SpotAward>;
    /**
     * Static representation of the [[commentForReceiver]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMENT_FOR_RECEIVER: StringField<SpotAward>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<SpotAward>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<SpotAward>;
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY: StringField<SpotAward>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: BigNumberField<SpotAward>;
    /**
     * Static representation of the [[guidelineAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GUIDELINE_AMOUNT: BigNumberField<SpotAward>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<SpotAward>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<SpotAward>;
    /**
     * Static representation of the [[level]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEVEL: StringField<SpotAward>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<SpotAward>;
    /**
     * Static representation of the [[nominatorId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NOMINATOR_ID: StringField<SpotAward>;
    /**
     * Static representation of the [[recordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECORD_ID: StringField<SpotAward>;
    /**
     * Static representation of the [[spotAwardProgram]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SPOT_AWARD_PROGRAM: StringField<SpotAward>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<SpotAward>;
    /**
     * Static representation of the [[workflowRequestId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WORKFLOW_REQUEST_ID: BigNumberField<SpotAward>;
    /**
     * Static representation of the one-to-one navigation property [[approvalStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVAL_STATUS_NAV: OneToOneLink<SpotAward, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[budgetHolderIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUDGET_HOLDER_ID_NAV: OneToOneLink<SpotAward, User>;
    /**
     * Static representation of the one-to-one navigation property [[categoryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CATEGORY_NAV: OneToOneLink<SpotAward, SpotAwardCategory>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<SpotAward, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<SpotAward, User>;
    /**
     * Static representation of the one-to-one navigation property [[levelNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEVEL_NAV: OneToOneLink<SpotAward, SpotAwardLevel>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<SpotAward, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[nominatorIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NOMINATOR_ID_NAV: OneToOneLink<SpotAward, User>;
    /**
     * Static representation of the one-to-one navigation property [[spotAwardProgramNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SPOT_AWARD_PROGRAM_NAV: OneToOneLink<SpotAward, SpotAwardProgram>;
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_NAV: OneToOneLink<SpotAward, User>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<SpotAward, WfRequest>;
    /**
     * All fields of the SpotAward entity.
     */
    const _allFields: Array<StringField<SpotAward> | DateField<SpotAward> | BigNumberField<SpotAward> | OneToOneLink<SpotAward, MdfEnumValue> | OneToOneLink<SpotAward, User> | OneToOneLink<SpotAward, SpotAwardCategory> | OneToOneLink<SpotAward, SpotAwardLevel> | OneToOneLink<SpotAward, SpotAwardProgram> | Link<SpotAward, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SpotAward>;
    /**
     * All key fields of the SpotAward entity.
     */
    const _keyFields: Array<Selectable<SpotAward>>;
    /**
     * Mapping of all key field names to the respective static field property SpotAward.
     */
    const _keys: {
        [keys: string]: Selectable<SpotAward>;
    };
}
//# sourceMappingURL=SpotAward.d.ts.map