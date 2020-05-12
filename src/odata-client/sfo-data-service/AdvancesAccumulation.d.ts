import { AdvancesAccumulationRequestBuilder } from './AdvancesAccumulationRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "AdvancesAccumulation" of service "SFOData".
 */
export declare class AdvancesAccumulation extends Entity implements AdvancesAccumulationType {
    /**
     * Technical entity name for AdvancesAccumulation.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for AdvancesAccumulation.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Accumulated Amount.
     * @nullable
     */
    accumulatedAmount?: BigNumber;
    /**
     * Advance Type.
     * Maximum length: 32.
     * @nullable
     */
    advanceType?: string;
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
     * currency.
     * Maximum length: 128.
     * @nullable
     */
    currency?: string;
    /**
     * Currency.
     * Maximum length: 128.
     * @nullable
     */
    currencyGo?: string;
    /**
     * Accumulation ID.
     * Maximum length: 128.
     */
    externalCode: string;
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
     * Maximum Number of Occurrences.
     * @nullable
     */
    numberOfOccurances?: BigNumber;
    /**
     * Accumulation Period End Date.
     * @nullable
     */
    periodEndDate?: Moment;
    /**
     * Accumulation Period Start Date.
     * @nullable
     */
    periodStartDate?: Moment;
    /**
     * Remaining Eligibility.
     * @nullable
     */
    remainingEligibleAmount?: BigNumber;
    /**
     * Requests Remaining.
     * @nullable
     */
    remainingNumberOfOccurances?: BigNumber;
    /**
     * User ID.
     * Maximum length: 100.
     * @nullable
     */
    userSysId?: string;
    /**
     * One-to-many navigation property to the [[FoPayComponent]] entity.
     */
    advanceTypeNav: FoPayComponent[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-many navigation property to the [[Currency]] entity.
     */
    currencyGoNav: Currency[];
    /**
     * One-to-many navigation property to the [[PickListValueV2]] entity.
     */
    currencyNav: PickListValueV2[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * One-to-many navigation property to the [[NonRecurringPayment]] entity.
     */
    nonRecurringPayments: NonRecurringPayment[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    userSysIdNav: User;
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `AdvancesAccumulation`.
     * @returns A builder that constructs instances of entity type `AdvancesAccumulation`.
     */
    static builder(): EntityBuilderType<AdvancesAccumulation, AdvancesAccumulationTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `AdvancesAccumulation` entity type.
     * @returns A `AdvancesAccumulation` request builder.
     */
    static requestBuilder(): AdvancesAccumulationRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AdvancesAccumulation`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AdvancesAccumulation`.
     */
    static customField(fieldName: string): CustomField<AdvancesAccumulation>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { FoPayComponent, FoPayComponentType } from './FoPayComponent';
import { User, UserType } from './User';
import { Currency, CurrencyType } from './Currency';
import { PickListValueV2, PickListValueV2Type } from './PickListValueV2';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { NonRecurringPayment, NonRecurringPaymentType } from './NonRecurringPayment';
import { WfRequest, WfRequestType } from './WfRequest';
export interface AdvancesAccumulationType {
    accumulatedAmount?: BigNumber;
    advanceType?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    currency?: string;
    currencyGo?: string;
    externalCode: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    numberOfOccurances?: BigNumber;
    periodEndDate?: Moment;
    periodStartDate?: Moment;
    remainingEligibleAmount?: BigNumber;
    remainingNumberOfOccurances?: BigNumber;
    userSysId?: string;
    advanceTypeNav: FoPayComponentType[];
    createdByNav: UserType;
    currencyGoNav: CurrencyType[];
    currencyNav: PickListValueV2Type[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    nonRecurringPayments: NonRecurringPaymentType[];
    userSysIdNav: UserType;
    wfRequestNav: WfRequestType[];
}
export interface AdvancesAccumulationTypeForceMandatory {
    accumulatedAmount: BigNumber;
    advanceType: string;
    createdBy: string;
    createdDateTime: Moment;
    currency: string;
    currencyGo: string;
    externalCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    numberOfOccurances: BigNumber;
    periodEndDate: Moment;
    periodStartDate: Moment;
    remainingEligibleAmount: BigNumber;
    remainingNumberOfOccurances: BigNumber;
    userSysId: string;
    advanceTypeNav: FoPayComponentType[];
    createdByNav: UserType;
    currencyGoNav: CurrencyType[];
    currencyNav: PickListValueV2Type[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    nonRecurringPayments: NonRecurringPaymentType[];
    userSysIdNav: UserType;
    wfRequestNav: WfRequestType[];
}
export declare namespace AdvancesAccumulation {
    /**
     * Static representation of the [[accumulatedAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCUMULATED_AMOUNT: BigNumberField<AdvancesAccumulation>;
    /**
     * Static representation of the [[advanceType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADVANCE_TYPE: StringField<AdvancesAccumulation>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<AdvancesAccumulation>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<AdvancesAccumulation>;
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY: StringField<AdvancesAccumulation>;
    /**
     * Static representation of the [[currencyGo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY_GO: StringField<AdvancesAccumulation>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<AdvancesAccumulation>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<AdvancesAccumulation>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<AdvancesAccumulation>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<AdvancesAccumulation>;
    /**
     * Static representation of the [[numberOfOccurances]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NUMBER_OF_OCCURANCES: BigNumberField<AdvancesAccumulation>;
    /**
     * Static representation of the [[periodEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERIOD_END_DATE: DateField<AdvancesAccumulation>;
    /**
     * Static representation of the [[periodStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERIOD_START_DATE: DateField<AdvancesAccumulation>;
    /**
     * Static representation of the [[remainingEligibleAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REMAINING_ELIGIBLE_AMOUNT: BigNumberField<AdvancesAccumulation>;
    /**
     * Static representation of the [[remainingNumberOfOccurances]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REMAINING_NUMBER_OF_OCCURANCES: BigNumberField<AdvancesAccumulation>;
    /**
     * Static representation of the [[userSysId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_SYS_ID: StringField<AdvancesAccumulation>;
    /**
     * Static representation of the one-to-many navigation property [[advanceTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADVANCE_TYPE_NAV: Link<AdvancesAccumulation, FoPayComponent>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<AdvancesAccumulation, User>;
    /**
     * Static representation of the one-to-many navigation property [[currencyGoNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY_GO_NAV: Link<AdvancesAccumulation, Currency>;
    /**
     * Static representation of the one-to-many navigation property [[currencyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY_NAV: Link<AdvancesAccumulation, PickListValueV2>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<AdvancesAccumulation, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<AdvancesAccumulation, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[nonRecurringPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NON_RECURRING_PAYMENTS: Link<AdvancesAccumulation, NonRecurringPayment>;
    /**
     * Static representation of the one-to-one navigation property [[userSysIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_SYS_ID_NAV: OneToOneLink<AdvancesAccumulation, User>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<AdvancesAccumulation, WfRequest>;
    /**
     * All fields of the AdvancesAccumulation entity.
     */
    const _allFields: Array<BigNumberField<AdvancesAccumulation> | StringField<AdvancesAccumulation> | DateField<AdvancesAccumulation> | Link<AdvancesAccumulation, FoPayComponent> | OneToOneLink<AdvancesAccumulation, User> | Link<AdvancesAccumulation, Currency> | Link<AdvancesAccumulation, PickListValueV2> | OneToOneLink<AdvancesAccumulation, MdfEnumValue> | Link<AdvancesAccumulation, NonRecurringPayment> | Link<AdvancesAccumulation, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<AdvancesAccumulation>;
    /**
     * All key fields of the AdvancesAccumulation entity.
     */
    const _keyFields: Array<Selectable<AdvancesAccumulation>>;
    /**
     * Mapping of all key field names to the respective static field property AdvancesAccumulation.
     */
    const _keys: {
        [keys: string]: Selectable<AdvancesAccumulation>;
    };
}
//# sourceMappingURL=AdvancesAccumulation.d.ts.map