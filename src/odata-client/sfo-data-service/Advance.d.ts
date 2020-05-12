import { AdvanceRequestBuilder } from './AdvanceRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Advance" of service "SFOData".
 */
export declare class Advance extends Entity implements AdvanceType {
    /**
     * Technical entity name for Advance.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Advance.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Non Recurring Payment_NRP ID.
     * Maximum length: 128.
     */
    nonRecurringPaymentExternalCode: string;
    /**
     * Advance Eligibility.
     * Maximum length: 128.
     * @nullable
     */
    advanceEligibilityCode?: string;
    /**
     * Advance Type.
     * Maximum length: 32.
     * @nullable
     */
    advanceType?: string;
    /**
     * Approval Status.
     * Maximum length: 255.
     * @nullable
     */
    approvalStatus?: string;
    /**
     * Approver.
     * Maximum length: 100.
     * @nullable
     */
    approver?: string;
    /**
     * createdBy.
     * Maximum length: 100.
     * @nullable
     */
    createdBy?: string;
    /**
     * createdDate.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * currencyCode.
     * Maximum length: 255.
     * @nullable
     */
    currencyCode?: string;
    /**
     * Currency.
     * Maximum length: 128.
     * @nullable
     */
    currencyGo?: string;
    /**
     * Eligible Amount.
     * @nullable
     */
    eligibileAmount?: BigNumber;
    /**
     * Remaining Eligibility.
     * @nullable
     */
    eligibilityAmount?: BigNumber;
    /**
     * Advance Type.
     * Maximum length: 255.
     * @nullable
     */
    eligibleAdvanceType?: string;
    /**
     * Advance ID.
     * Maximum length: 128.
     */
    externalCode: string;
    /**
     * Installment Amount.
     * @nullable
     */
    installmentAmount?: BigNumber;
    /**
     * Installment Frequency.
     * Maximum length: 32.
     * @nullable
     */
    installmentFrequency?: string;
    /**
     * Interest Rate %.
     * @nullable
     */
    interestRate?: BigNumber;
    /**
     * Interest Type.
     * Maximum length: 255.
     * @nullable
     */
    interestType?: string;
    /**
     * lastModifiedBy.
     * Maximum length: 100.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * lastModifiedDate.
     * @nullable
     */
    lastModifiedDateTime?: Moment;
    /**
     * Record Status.
     * Maximum length: 255.
     * @nullable
     */
    mdfSystemRecordStatus?: string;
    /**
     * Description.
     * Maximum length: 255.
     * @nullable
     */
    notesForApprover?: string;
    /**
     * Number of Installments.
     * @nullable
     */
    numberOfInstallments?: BigNumber;
    /**
     * Payment Mode.
     * Maximum length: 128.
     * @nullable
     */
    paymentMode?: string;
    /**
     * Pending Amount.
     * @nullable
     */
    pendingAmount?: BigNumber;
    /**
     * Eligibility Valid Until.
     * @nullable
     */
    periodEndDate?: Moment;
    /**
     * Eligibility Valid From.
     * @nullable
     */
    periodStartDate?: Moment;
    /**
     * Recovery Mode.
     * Maximum length: 255.
     * @nullable
     */
    recoveryMode?: string;
    /**
     * Recovery Status.
     * Maximum length: 255.
     * @nullable
     */
    recoveryStatus?: string;
    /**
     * Remaining Requests.
     * @nullable
     */
    remainingRequests?: BigNumber;
    /**
     * Request Date.
     * @nullable
     */
    requestDate?: Moment;
    /**
     * Requested Amount.
     * @nullable
     */
    requestedAmount?: BigNumber;
    /**
     * Total Repayment Amount.
     * @nullable
     */
    totalRepaymentAmount?: BigNumber;
    /**
     * One-to-many navigation property to the [[AdvancesEligibility]] entity.
     */
    advanceEligibilityCodeNav: AdvancesEligibility[];
    /**
     * One-to-many navigation property to the [[FoPayComponent]] entity.
     */
    advanceTypeNav: FoPayComponent[];
    /**
     * One-to-many navigation property to the [[AdvancesInstallments]] entity.
     */
    advancesInstallments: AdvancesInstallments[];
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    approvalStatusNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    approverNav: User;
    /**
     * One-to-one navigation property to the [[Attachment]] entity.
     */
    attachmentNav: Attachment;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-many navigation property to the [[Currency]] entity.
     */
    currencyGoNav: Currency[];
    /**
     * One-to-one navigation property to the [[FoFrequency]] entity.
     */
    installmentFrequencyNav: FoFrequency;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    interestTypeNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * One-to-many navigation property to the [[PickListValueV2]] entity.
     */
    paymentModeNav: PickListValueV2[];
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    recoveryModeNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    recoveryStatusNav: MdfEnumValue;
    /**
     * Returns an entity builder to construct instances `Advance`.
     * @returns A builder that constructs instances of entity type `Advance`.
     */
    static builder(): EntityBuilderType<Advance, AdvanceTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Advance` entity type.
     * @returns A `Advance` request builder.
     */
    static requestBuilder(): AdvanceRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Advance`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Advance`.
     */
    static customField(fieldName: string): CustomField<Advance>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { AdvancesEligibility, AdvancesEligibilityType } from './AdvancesEligibility';
import { FoPayComponent, FoPayComponentType } from './FoPayComponent';
import { AdvancesInstallments, AdvancesInstallmentsType } from './AdvancesInstallments';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { User, UserType } from './User';
import { Attachment, AttachmentType } from './Attachment';
import { Currency, CurrencyType } from './Currency';
import { FoFrequency, FoFrequencyType } from './FoFrequency';
import { PickListValueV2, PickListValueV2Type } from './PickListValueV2';
export interface AdvanceType {
    nonRecurringPaymentExternalCode: string;
    advanceEligibilityCode?: string;
    advanceType?: string;
    approvalStatus?: string;
    approver?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    currencyCode?: string;
    currencyGo?: string;
    eligibileAmount?: BigNumber;
    eligibilityAmount?: BigNumber;
    eligibleAdvanceType?: string;
    externalCode: string;
    installmentAmount?: BigNumber;
    installmentFrequency?: string;
    interestRate?: BigNumber;
    interestType?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    notesForApprover?: string;
    numberOfInstallments?: BigNumber;
    paymentMode?: string;
    pendingAmount?: BigNumber;
    periodEndDate?: Moment;
    periodStartDate?: Moment;
    recoveryMode?: string;
    recoveryStatus?: string;
    remainingRequests?: BigNumber;
    requestDate?: Moment;
    requestedAmount?: BigNumber;
    totalRepaymentAmount?: BigNumber;
    advanceEligibilityCodeNav: AdvancesEligibilityType[];
    advanceTypeNav: FoPayComponentType[];
    advancesInstallments: AdvancesInstallmentsType[];
    approvalStatusNav: MdfEnumValueType;
    approverNav: UserType;
    attachmentNav: AttachmentType;
    createdByNav: UserType;
    currencyGoNav: CurrencyType[];
    installmentFrequencyNav: FoFrequencyType;
    interestTypeNav: MdfEnumValueType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    paymentModeNav: PickListValueV2Type[];
    recoveryModeNav: MdfEnumValueType;
    recoveryStatusNav: MdfEnumValueType;
}
export interface AdvanceTypeForceMandatory {
    nonRecurringPaymentExternalCode: string;
    advanceEligibilityCode: string;
    advanceType: string;
    approvalStatus: string;
    approver: string;
    createdBy: string;
    createdDateTime: Moment;
    currencyCode: string;
    currencyGo: string;
    eligibileAmount: BigNumber;
    eligibilityAmount: BigNumber;
    eligibleAdvanceType: string;
    externalCode: string;
    installmentAmount: BigNumber;
    installmentFrequency: string;
    interestRate: BigNumber;
    interestType: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    notesForApprover: string;
    numberOfInstallments: BigNumber;
    paymentMode: string;
    pendingAmount: BigNumber;
    periodEndDate: Moment;
    periodStartDate: Moment;
    recoveryMode: string;
    recoveryStatus: string;
    remainingRequests: BigNumber;
    requestDate: Moment;
    requestedAmount: BigNumber;
    totalRepaymentAmount: BigNumber;
    advanceEligibilityCodeNav: AdvancesEligibilityType[];
    advanceTypeNav: FoPayComponentType[];
    advancesInstallments: AdvancesInstallmentsType[];
    approvalStatusNav: MdfEnumValueType;
    approverNav: UserType;
    attachmentNav: AttachmentType;
    createdByNav: UserType;
    currencyGoNav: CurrencyType[];
    installmentFrequencyNav: FoFrequencyType;
    interestTypeNav: MdfEnumValueType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    paymentModeNav: PickListValueV2Type[];
    recoveryModeNav: MdfEnumValueType;
    recoveryStatusNav: MdfEnumValueType;
}
export declare namespace Advance {
    /**
     * Static representation of the [[nonRecurringPaymentExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NON_RECURRING_PAYMENT_EXTERNAL_CODE: StringField<Advance>;
    /**
     * Static representation of the [[advanceEligibilityCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADVANCE_ELIGIBILITY_CODE: StringField<Advance>;
    /**
     * Static representation of the [[advanceType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADVANCE_TYPE: StringField<Advance>;
    /**
     * Static representation of the [[approvalStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVAL_STATUS: StringField<Advance>;
    /**
     * Static representation of the [[approver]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVER: StringField<Advance>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<Advance>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<Advance>;
    /**
     * Static representation of the [[currencyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY_CODE: StringField<Advance>;
    /**
     * Static representation of the [[currencyGo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY_GO: StringField<Advance>;
    /**
     * Static representation of the [[eligibileAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ELIGIBILE_AMOUNT: BigNumberField<Advance>;
    /**
     * Static representation of the [[eligibilityAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ELIGIBILITY_AMOUNT: BigNumberField<Advance>;
    /**
     * Static representation of the [[eligibleAdvanceType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ELIGIBLE_ADVANCE_TYPE: StringField<Advance>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<Advance>;
    /**
     * Static representation of the [[installmentAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTALLMENT_AMOUNT: BigNumberField<Advance>;
    /**
     * Static representation of the [[installmentFrequency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTALLMENT_FREQUENCY: StringField<Advance>;
    /**
     * Static representation of the [[interestRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTEREST_RATE: BigNumberField<Advance>;
    /**
     * Static representation of the [[interestType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTEREST_TYPE: StringField<Advance>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<Advance>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<Advance>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<Advance>;
    /**
     * Static representation of the [[notesForApprover]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NOTES_FOR_APPROVER: StringField<Advance>;
    /**
     * Static representation of the [[numberOfInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NUMBER_OF_INSTALLMENTS: BigNumberField<Advance>;
    /**
     * Static representation of the [[paymentMode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_MODE: StringField<Advance>;
    /**
     * Static representation of the [[pendingAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PENDING_AMOUNT: BigNumberField<Advance>;
    /**
     * Static representation of the [[periodEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERIOD_END_DATE: DateField<Advance>;
    /**
     * Static representation of the [[periodStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERIOD_START_DATE: DateField<Advance>;
    /**
     * Static representation of the [[recoveryMode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECOVERY_MODE: StringField<Advance>;
    /**
     * Static representation of the [[recoveryStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECOVERY_STATUS: StringField<Advance>;
    /**
     * Static representation of the [[remainingRequests]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REMAINING_REQUESTS: BigNumberField<Advance>;
    /**
     * Static representation of the [[requestDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQUEST_DATE: DateField<Advance>;
    /**
     * Static representation of the [[requestedAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQUESTED_AMOUNT: BigNumberField<Advance>;
    /**
     * Static representation of the [[totalRepaymentAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TOTAL_REPAYMENT_AMOUNT: BigNumberField<Advance>;
    /**
     * Static representation of the one-to-many navigation property [[advanceEligibilityCodeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADVANCE_ELIGIBILITY_CODE_NAV: Link<Advance, AdvancesEligibility>;
    /**
     * Static representation of the one-to-many navigation property [[advanceTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADVANCE_TYPE_NAV: Link<Advance, FoPayComponent>;
    /**
     * Static representation of the one-to-many navigation property [[advancesInstallments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADVANCES_INSTALLMENTS: Link<Advance, AdvancesInstallments>;
    /**
     * Static representation of the one-to-one navigation property [[approvalStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVAL_STATUS_NAV: OneToOneLink<Advance, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[approverNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVER_NAV: OneToOneLink<Advance, User>;
    /**
     * Static representation of the one-to-one navigation property [[attachmentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ATTACHMENT_NAV: OneToOneLink<Advance, Attachment>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<Advance, User>;
    /**
     * Static representation of the one-to-many navigation property [[currencyGoNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY_GO_NAV: Link<Advance, Currency>;
    /**
     * Static representation of the one-to-one navigation property [[installmentFrequencyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTALLMENT_FREQUENCY_NAV: OneToOneLink<Advance, FoFrequency>;
    /**
     * Static representation of the one-to-one navigation property [[interestTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTEREST_TYPE_NAV: OneToOneLink<Advance, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<Advance, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<Advance, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[paymentModeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_MODE_NAV: Link<Advance, PickListValueV2>;
    /**
     * Static representation of the one-to-one navigation property [[recoveryModeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECOVERY_MODE_NAV: OneToOneLink<Advance, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[recoveryStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECOVERY_STATUS_NAV: OneToOneLink<Advance, MdfEnumValue>;
    /**
     * All fields of the Advance entity.
     */
    const _allFields: Array<StringField<Advance> | DateField<Advance> | BigNumberField<Advance> | Link<Advance, AdvancesEligibility> | Link<Advance, FoPayComponent> | Link<Advance, AdvancesInstallments> | OneToOneLink<Advance, MdfEnumValue> | OneToOneLink<Advance, User> | OneToOneLink<Advance, Attachment> | Link<Advance, Currency> | OneToOneLink<Advance, FoFrequency> | Link<Advance, PickListValueV2>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Advance>;
    /**
     * All key fields of the Advance entity.
     */
    const _keyFields: Array<Selectable<Advance>>;
    /**
     * Mapping of all key field names to the respective static field property Advance.
     */
    const _keys: {
        [keys: string]: Selectable<Advance>;
    };
}
//# sourceMappingURL=Advance.d.ts.map