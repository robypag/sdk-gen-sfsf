import { PayScalePayComponentRequestBuilder } from './PayScalePayComponentRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "PayScalePayComponent" of service "SFOData".
 */
export declare class PayScalePayComponent extends Entity implements PayScalePayComponentType {
    /**
     * Technical entity name for PayScalePayComponent.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PayScalePayComponent.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Pay Scale Level_Code.
     * Maximum length: 128.
     */
    payScaleLevelCode: string;
    /**
     * Pay Scale Level_Effective Start Date.
     */
    payScaleLevelEffectiveStartDate: Moment;
    /**
     * Amount.
     * @nullable
     */
    amount?: BigNumber;
    /**
     * Pay Component.
     * Maximum length: 32.
     */
    code: string;
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
     * Number.
     * @nullable
     */
    number?: BigNumber;
    /**
     * Percentage.
     * @nullable
     */
    percentage?: BigNumber;
    /**
     * Rate.
     * @nullable
     */
    rate?: BigNumber;
    /**
     * Unit.
     * Maximum length: 128.
     * @nullable
     */
    unit?: string;
    /**
     * One-to-many navigation property to the [[FoPayComponent]] entity.
     */
    codeNav: FoPayComponent[];
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
     * Returns an entity builder to construct instances `PayScalePayComponent`.
     * @returns A builder that constructs instances of entity type `PayScalePayComponent`.
     */
    static builder(): EntityBuilderType<PayScalePayComponent, PayScalePayComponentTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `PayScalePayComponent` entity type.
     * @returns A `PayScalePayComponent` request builder.
     */
    static requestBuilder(): PayScalePayComponentRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PayScalePayComponent`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PayScalePayComponent`.
     */
    static customField(fieldName: string): CustomField<PayScalePayComponent>;
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
import { FoFrequency, FoFrequencyType } from './FoFrequency';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
export interface PayScalePayComponentType {
    payScaleLevelCode: string;
    payScaleLevelEffectiveStartDate: Moment;
    amount?: BigNumber;
    code: string;
    createdBy?: string;
    createdDateTime?: Moment;
    currency?: string;
    frequency?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    number?: BigNumber;
    percentage?: BigNumber;
    rate?: BigNumber;
    unit?: string;
    codeNav: FoPayComponentType[];
    createdByNav: UserType;
    currencyNav: CurrencyType[];
    frequencyNav: FoFrequencyType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export interface PayScalePayComponentTypeForceMandatory {
    payScaleLevelCode: string;
    payScaleLevelEffectiveStartDate: Moment;
    amount: BigNumber;
    code: string;
    createdBy: string;
    createdDateTime: Moment;
    currency: string;
    frequency: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    number: BigNumber;
    percentage: BigNumber;
    rate: BigNumber;
    unit: string;
    codeNav: FoPayComponentType[];
    createdByNav: UserType;
    currencyNav: CurrencyType[];
    frequencyNav: FoFrequencyType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export declare namespace PayScalePayComponent {
    /**
     * Static representation of the [[payScaleLevelCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_SCALE_LEVEL_CODE: StringField<PayScalePayComponent>;
    /**
     * Static representation of the [[payScaleLevelEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_SCALE_LEVEL_EFFECTIVE_START_DATE: DateField<PayScalePayComponent>;
    /**
     * Static representation of the [[amount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AMOUNT: BigNumberField<PayScalePayComponent>;
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<PayScalePayComponent>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<PayScalePayComponent>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<PayScalePayComponent>;
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY: StringField<PayScalePayComponent>;
    /**
     * Static representation of the [[frequency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FREQUENCY: StringField<PayScalePayComponent>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<PayScalePayComponent>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<PayScalePayComponent>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<PayScalePayComponent>;
    /**
     * Static representation of the [[number]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NUMBER: BigNumberField<PayScalePayComponent>;
    /**
     * Static representation of the [[percentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERCENTAGE: BigNumberField<PayScalePayComponent>;
    /**
     * Static representation of the [[rate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RATE: BigNumberField<PayScalePayComponent>;
    /**
     * Static representation of the [[unit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNIT: StringField<PayScalePayComponent>;
    /**
     * Static representation of the one-to-many navigation property [[codeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE_NAV: Link<PayScalePayComponent, FoPayComponent>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<PayScalePayComponent, User>;
    /**
     * Static representation of the one-to-many navigation property [[currencyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY_NAV: Link<PayScalePayComponent, Currency>;
    /**
     * Static representation of the one-to-one navigation property [[frequencyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FREQUENCY_NAV: OneToOneLink<PayScalePayComponent, FoFrequency>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<PayScalePayComponent, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PayScalePayComponent, MdfEnumValue>;
    /**
     * All fields of the PayScalePayComponent entity.
     */
    const _allFields: Array<StringField<PayScalePayComponent> | DateField<PayScalePayComponent> | BigNumberField<PayScalePayComponent> | Link<PayScalePayComponent, FoPayComponent> | OneToOneLink<PayScalePayComponent, User> | Link<PayScalePayComponent, Currency> | OneToOneLink<PayScalePayComponent, FoFrequency> | OneToOneLink<PayScalePayComponent, MdfEnumValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<PayScalePayComponent>;
    /**
     * All key fields of the PayScalePayComponent entity.
     */
    const _keyFields: Array<Selectable<PayScalePayComponent>>;
    /**
     * Mapping of all key field names to the respective static field property PayScalePayComponent.
     */
    const _keys: {
        [keys: string]: Selectable<PayScalePayComponent>;
    };
}
//# sourceMappingURL=PayScalePayComponent.d.ts.map