import { RecurringDeductionItemRequestBuilder } from './RecurringDeductionItemRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "RecurringDeductionItem" of service "SFOData".
 */
export declare class RecurringDeductionItem extends Entity implements RecurringDeductionItemType {
    /**
     * Technical entity name for RecurringDeductionItem.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for RecurringDeductionItem.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Recurring Deduction_Effective Start Date.
     */
    recurringDeductionEffectiveStartDate: Moment;
    /**
     * Recurring Deduction_User.
     * Maximum length: 100.
     */
    recurringDeductionUserSysId: string;
    /**
     * Additional Information.
     * Maximum length: 40.
     * @nullable
     */
    additionalInfo?: string;
    /**
     * Advance.
     * Maximum length: 128.
     * @nullable
     */
    advanceId?: string;
    /**
     * Amount / Percentage / Number of units.
     * @nullable
     */
    amount?: BigNumber;
    /**
     * Created By.
     * Maximum length: 100.
     * @nullable
     */
    createdBy?: string;
    /**
     * Created On.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * Currency.
     * Maximum length: 128.
     * @nullable
     */
    currency?: string;
    /**
     * Has Permission.
     * Maximum length: 255.
     * @nullable
     */
    editPermission?: string;
    /**
     * End Date.
     * @nullable
     */
    endDate?: Moment;
    /**
     * equivalentAmount.
     * @nullable
     */
    equivalentAmount?: BigNumber;
    /**
     * Frequency.
     * Maximum length: 32.
     * @nullable
     */
    frequency?: string;
    /**
     * Last Modified By.
     * Maximum length: 100.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * Last Modified Date.
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
     * Pay Component.
     * Maximum length: 32.
     */
    payComponentType: string;
    /**
     * Reference Id.
     * Maximum length: 20.
     * @nullable
     */
    referenceId?: string;
    /**
     * Unit Of Measure.
     * Maximum length: 128.
     * @nullable
     */
    unitOfMeasure?: string;
    /**
     * One-to-one navigation property to the [[NonRecurringPayment]] entity.
     */
    advanceIdNav: NonRecurringPayment;
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
    currencyNav: Currency[];
    /**
     * One-to-one navigation property to the [[FoFrequency]] entity.
     */
    frequencyNav: FoFrequency;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * One-to-many navigation property to the [[FoPayComponent]] entity.
     */
    payComponentTypeNav: FoPayComponent[];
    /**
     * Returns an entity builder to construct instances `RecurringDeductionItem`.
     * @returns A builder that constructs instances of entity type `RecurringDeductionItem`.
     */
    static builder(): EntityBuilderType<RecurringDeductionItem, RecurringDeductionItemTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `RecurringDeductionItem` entity type.
     * @returns A `RecurringDeductionItem` request builder.
     */
    static requestBuilder(): RecurringDeductionItemRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `RecurringDeductionItem`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `RecurringDeductionItem`.
     */
    static customField(fieldName: string): CustomField<RecurringDeductionItem>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { NonRecurringPayment, NonRecurringPaymentType } from './NonRecurringPayment';
import { Attachment, AttachmentType } from './Attachment';
import { User, UserType } from './User';
import { Currency, CurrencyType } from './Currency';
import { FoFrequency, FoFrequencyType } from './FoFrequency';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { FoPayComponent, FoPayComponentType } from './FoPayComponent';
export interface RecurringDeductionItemType {
    recurringDeductionEffectiveStartDate: Moment;
    recurringDeductionUserSysId: string;
    additionalInfo?: string;
    advanceId?: string;
    amount?: BigNumber;
    createdBy?: string;
    createdDateTime?: Moment;
    currency?: string;
    editPermission?: string;
    endDate?: Moment;
    equivalentAmount?: BigNumber;
    frequency?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    payComponentType: string;
    referenceId?: string;
    unitOfMeasure?: string;
    advanceIdNav: NonRecurringPaymentType;
    attachmentNav: AttachmentType;
    createdByNav: UserType;
    currencyNav: CurrencyType[];
    frequencyNav: FoFrequencyType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    payComponentTypeNav: FoPayComponentType[];
}
export interface RecurringDeductionItemTypeForceMandatory {
    recurringDeductionEffectiveStartDate: Moment;
    recurringDeductionUserSysId: string;
    additionalInfo: string;
    advanceId: string;
    amount: BigNumber;
    createdBy: string;
    createdDateTime: Moment;
    currency: string;
    editPermission: string;
    endDate: Moment;
    equivalentAmount: BigNumber;
    frequency: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    payComponentType: string;
    referenceId: string;
    unitOfMeasure: string;
    advanceIdNav: NonRecurringPaymentType;
    attachmentNav: AttachmentType;
    createdByNav: UserType;
    currencyNav: CurrencyType[];
    frequencyNav: FoFrequencyType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    payComponentTypeNav: FoPayComponentType[];
}
export declare namespace RecurringDeductionItem {
    /**
     * Static representation of the [[recurringDeductionEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECURRING_DEDUCTION_EFFECTIVE_START_DATE: DateField<RecurringDeductionItem>;
    /**
     * Static representation of the [[recurringDeductionUserSysId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECURRING_DEDUCTION_USER_SYS_ID: StringField<RecurringDeductionItem>;
    /**
     * Static representation of the [[additionalInfo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDITIONAL_INFO: StringField<RecurringDeductionItem>;
    /**
     * Static representation of the [[advanceId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADVANCE_ID: StringField<RecurringDeductionItem>;
    /**
     * Static representation of the [[amount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AMOUNT: BigNumberField<RecurringDeductionItem>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<RecurringDeductionItem>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<RecurringDeductionItem>;
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY: StringField<RecurringDeductionItem>;
    /**
     * Static representation of the [[editPermission]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EDIT_PERMISSION: StringField<RecurringDeductionItem>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<RecurringDeductionItem>;
    /**
     * Static representation of the [[equivalentAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EQUIVALENT_AMOUNT: BigNumberField<RecurringDeductionItem>;
    /**
     * Static representation of the [[frequency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FREQUENCY: StringField<RecurringDeductionItem>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<RecurringDeductionItem>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<RecurringDeductionItem>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<RecurringDeductionItem>;
    /**
     * Static representation of the [[payComponentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_COMPONENT_TYPE: StringField<RecurringDeductionItem>;
    /**
     * Static representation of the [[referenceId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REFERENCE_ID: StringField<RecurringDeductionItem>;
    /**
     * Static representation of the [[unitOfMeasure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNIT_OF_MEASURE: StringField<RecurringDeductionItem>;
    /**
     * Static representation of the one-to-one navigation property [[advanceIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADVANCE_ID_NAV: OneToOneLink<RecurringDeductionItem, NonRecurringPayment>;
    /**
     * Static representation of the one-to-one navigation property [[attachmentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ATTACHMENT_NAV: OneToOneLink<RecurringDeductionItem, Attachment>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<RecurringDeductionItem, User>;
    /**
     * Static representation of the one-to-many navigation property [[currencyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY_NAV: Link<RecurringDeductionItem, Currency>;
    /**
     * Static representation of the one-to-one navigation property [[frequencyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FREQUENCY_NAV: OneToOneLink<RecurringDeductionItem, FoFrequency>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<RecurringDeductionItem, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<RecurringDeductionItem, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[payComponentTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_COMPONENT_TYPE_NAV: Link<RecurringDeductionItem, FoPayComponent>;
    /**
     * All fields of the RecurringDeductionItem entity.
     */
    const _allFields: Array<DateField<RecurringDeductionItem> | StringField<RecurringDeductionItem> | BigNumberField<RecurringDeductionItem> | OneToOneLink<RecurringDeductionItem, NonRecurringPayment> | OneToOneLink<RecurringDeductionItem, Attachment> | OneToOneLink<RecurringDeductionItem, User> | Link<RecurringDeductionItem, Currency> | OneToOneLink<RecurringDeductionItem, FoFrequency> | OneToOneLink<RecurringDeductionItem, MdfEnumValue> | Link<RecurringDeductionItem, FoPayComponent>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<RecurringDeductionItem>;
    /**
     * All key fields of the RecurringDeductionItem entity.
     */
    const _keyFields: Array<Selectable<RecurringDeductionItem>>;
    /**
     * Mapping of all key field names to the respective static field property RecurringDeductionItem.
     */
    const _keys: {
        [keys: string]: Selectable<RecurringDeductionItem>;
    };
}
//# sourceMappingURL=RecurringDeductionItem.d.ts.map