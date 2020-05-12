import { OneTimeDeductionRequestBuilder } from './OneTimeDeductionRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "OneTimeDeduction" of service "SFOData".
 */
export declare class OneTimeDeduction extends Entity implements OneTimeDeductionType {
    /**
     * Technical entity name for OneTimeDeduction.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for OneTimeDeduction.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
     * auditUserSysId.
     * Maximum length: 100.
     * @nullable
     */
    auditUserSysId?: string;
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
     * Deduction Date.
     * @nullable
     */
    deductionDate?: Moment;
    /**
     * Equivalent Amount.
     * @nullable
     */
    equivalentAmount?: BigNumber;
    /**
     * Id.
     */
    externalCode: BigNumber;
    /**
     * Last Modified By.
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
     * Pay Component.
     * Maximum length: 32.
     * @nullable
     */
    payComponentType?: string;
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
     * User.
     * Maximum length: 100.
     * @nullable
     */
    userSysId?: string;
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
    auditUserSysIdNav: User;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-many navigation property to the [[Currency]] entity.
     */
    currencyNav: Currency[];
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
     * One-to-one navigation property to the [[User]] entity.
     */
    userSysIdNav: User;
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `OneTimeDeduction`.
     * @returns A builder that constructs instances of entity type `OneTimeDeduction`.
     */
    static builder(): EntityBuilderType<OneTimeDeduction, OneTimeDeductionTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `OneTimeDeduction` entity type.
     * @returns A `OneTimeDeduction` request builder.
     */
    static requestBuilder(): OneTimeDeductionRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `OneTimeDeduction`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `OneTimeDeduction`.
     */
    static customField(fieldName: string): CustomField<OneTimeDeduction>;
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
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { FoPayComponent, FoPayComponentType } from './FoPayComponent';
import { WfRequest, WfRequestType } from './WfRequest';
export interface OneTimeDeductionType {
    additionalInfo?: string;
    advanceId?: string;
    amount?: BigNumber;
    auditUserSysId?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    currency?: string;
    deductionDate?: Moment;
    equivalentAmount?: BigNumber;
    externalCode: BigNumber;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    payComponentType?: string;
    referenceId?: string;
    unitOfMeasure?: string;
    userSysId?: string;
    advanceIdNav: NonRecurringPaymentType;
    attachmentNav: AttachmentType;
    auditUserSysIdNav: UserType;
    createdByNav: UserType;
    currencyNav: CurrencyType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    payComponentTypeNav: FoPayComponentType[];
    userSysIdNav: UserType;
    wfRequestNav: WfRequestType[];
}
export interface OneTimeDeductionTypeForceMandatory {
    additionalInfo: string;
    advanceId: string;
    amount: BigNumber;
    auditUserSysId: string;
    createdBy: string;
    createdDateTime: Moment;
    currency: string;
    deductionDate: Moment;
    equivalentAmount: BigNumber;
    externalCode: BigNumber;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    payComponentType: string;
    referenceId: string;
    unitOfMeasure: string;
    userSysId: string;
    advanceIdNav: NonRecurringPaymentType;
    attachmentNav: AttachmentType;
    auditUserSysIdNav: UserType;
    createdByNav: UserType;
    currencyNav: CurrencyType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    payComponentTypeNav: FoPayComponentType[];
    userSysIdNav: UserType;
    wfRequestNav: WfRequestType[];
}
export declare namespace OneTimeDeduction {
    /**
     * Static representation of the [[additionalInfo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDITIONAL_INFO: StringField<OneTimeDeduction>;
    /**
     * Static representation of the [[advanceId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADVANCE_ID: StringField<OneTimeDeduction>;
    /**
     * Static representation of the [[amount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AMOUNT: BigNumberField<OneTimeDeduction>;
    /**
     * Static representation of the [[auditUserSysId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AUDIT_USER_SYS_ID: StringField<OneTimeDeduction>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<OneTimeDeduction>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<OneTimeDeduction>;
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY: StringField<OneTimeDeduction>;
    /**
     * Static representation of the [[deductionDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEDUCTION_DATE: DateField<OneTimeDeduction>;
    /**
     * Static representation of the [[equivalentAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EQUIVALENT_AMOUNT: BigNumberField<OneTimeDeduction>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: BigNumberField<OneTimeDeduction>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<OneTimeDeduction>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<OneTimeDeduction>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<OneTimeDeduction>;
    /**
     * Static representation of the [[payComponentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_COMPONENT_TYPE: StringField<OneTimeDeduction>;
    /**
     * Static representation of the [[referenceId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REFERENCE_ID: StringField<OneTimeDeduction>;
    /**
     * Static representation of the [[unitOfMeasure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNIT_OF_MEASURE: StringField<OneTimeDeduction>;
    /**
     * Static representation of the [[userSysId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_SYS_ID: StringField<OneTimeDeduction>;
    /**
     * Static representation of the one-to-one navigation property [[advanceIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADVANCE_ID_NAV: OneToOneLink<OneTimeDeduction, NonRecurringPayment>;
    /**
     * Static representation of the one-to-one navigation property [[attachmentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ATTACHMENT_NAV: OneToOneLink<OneTimeDeduction, Attachment>;
    /**
     * Static representation of the one-to-one navigation property [[auditUserSysIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AUDIT_USER_SYS_ID_NAV: OneToOneLink<OneTimeDeduction, User>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<OneTimeDeduction, User>;
    /**
     * Static representation of the one-to-many navigation property [[currencyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY_NAV: Link<OneTimeDeduction, Currency>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<OneTimeDeduction, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<OneTimeDeduction, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[payComponentTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_COMPONENT_TYPE_NAV: Link<OneTimeDeduction, FoPayComponent>;
    /**
     * Static representation of the one-to-one navigation property [[userSysIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_SYS_ID_NAV: OneToOneLink<OneTimeDeduction, User>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<OneTimeDeduction, WfRequest>;
    /**
     * All fields of the OneTimeDeduction entity.
     */
    const _allFields: Array<StringField<OneTimeDeduction> | BigNumberField<OneTimeDeduction> | DateField<OneTimeDeduction> | OneToOneLink<OneTimeDeduction, NonRecurringPayment> | OneToOneLink<OneTimeDeduction, Attachment> | OneToOneLink<OneTimeDeduction, User> | Link<OneTimeDeduction, Currency> | OneToOneLink<OneTimeDeduction, MdfEnumValue> | Link<OneTimeDeduction, FoPayComponent> | Link<OneTimeDeduction, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<OneTimeDeduction>;
    /**
     * All key fields of the OneTimeDeduction entity.
     */
    const _keyFields: Array<Selectable<OneTimeDeduction>>;
    /**
     * Mapping of all key field names to the respective static field property OneTimeDeduction.
     */
    const _keys: {
        [keys: string]: Selectable<OneTimeDeduction>;
    };
}
//# sourceMappingURL=OneTimeDeduction.d.ts.map