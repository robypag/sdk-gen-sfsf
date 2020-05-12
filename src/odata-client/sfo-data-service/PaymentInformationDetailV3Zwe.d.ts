import { PaymentInformationDetailV3ZweRequestBuilder } from './PaymentInformationDetailV3ZweRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "PaymentInformationDetailV3ZWE" of service "SFOData".
 */
export declare class PaymentInformationDetailV3Zwe extends Entity implements PaymentInformationDetailV3ZweType {
    /**
     * Technical entity name for PaymentInformationDetailV3Zwe.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PaymentInformationDetailV3Zwe.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Payment Information Detail_externalCode.
     */
    paymentInformationDetailV3ExternalCode: BigNumber;
    /**
     * Payment Information _Effective start date.
     */
    paymentInformationV3EffectiveStartDate: Moment;
    /**
     * Payment Information _Worker.
     * Maximum length: 100.
     */
    paymentInformationV3Worker: string;
    /**
     * Account Type.
     * Maximum length: 128.
     * @nullable
     */
    accountType?: string;
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
     * externalCode.
     */
    externalCode: BigNumber;
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
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    accountTypeNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * Returns an entity builder to construct instances `PaymentInformationDetailV3Zwe`.
     * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Zwe`.
     */
    static builder(): EntityBuilderType<PaymentInformationDetailV3Zwe, PaymentInformationDetailV3ZweTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `PaymentInformationDetailV3Zwe` entity type.
     * @returns A `PaymentInformationDetailV3Zwe` request builder.
     */
    static requestBuilder(): PaymentInformationDetailV3ZweRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PaymentInformationDetailV3Zwe`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Zwe`.
     */
    static customField(fieldName: string): CustomField<PaymentInformationDetailV3Zwe>;
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
export interface PaymentInformationDetailV3ZweType {
    paymentInformationDetailV3ExternalCode: BigNumber;
    paymentInformationV3EffectiveStartDate: Moment;
    paymentInformationV3Worker: string;
    accountType?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    externalCode: BigNumber;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    accountTypeNav: MdfEnumValueType;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export interface PaymentInformationDetailV3ZweTypeForceMandatory {
    paymentInformationDetailV3ExternalCode: BigNumber;
    paymentInformationV3EffectiveStartDate: Moment;
    paymentInformationV3Worker: string;
    accountType: string;
    createdBy: string;
    createdDateTime: Moment;
    externalCode: BigNumber;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    accountTypeNav: MdfEnumValueType;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export declare namespace PaymentInformationDetailV3Zwe {
    /**
     * Static representation of the [[paymentInformationDetailV3ExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE: BigNumberField<PaymentInformationDetailV3Zwe>;
    /**
     * Static representation of the [[paymentInformationV3EffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE: DateField<PaymentInformationDetailV3Zwe>;
    /**
     * Static representation of the [[paymentInformationV3Worker]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_INFORMATION_V_3_WORKER: StringField<PaymentInformationDetailV3Zwe>;
    /**
     * Static representation of the [[accountType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNT_TYPE: StringField<PaymentInformationDetailV3Zwe>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<PaymentInformationDetailV3Zwe>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<PaymentInformationDetailV3Zwe>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: BigNumberField<PaymentInformationDetailV3Zwe>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<PaymentInformationDetailV3Zwe>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<PaymentInformationDetailV3Zwe>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<PaymentInformationDetailV3Zwe>;
    /**
     * Static representation of the one-to-one navigation property [[accountTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNT_TYPE_NAV: OneToOneLink<PaymentInformationDetailV3Zwe, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<PaymentInformationDetailV3Zwe, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<PaymentInformationDetailV3Zwe, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PaymentInformationDetailV3Zwe, MdfEnumValue>;
    /**
     * All fields of the PaymentInformationDetailV3Zwe entity.
     */
    const _allFields: Array<BigNumberField<PaymentInformationDetailV3Zwe> | DateField<PaymentInformationDetailV3Zwe> | StringField<PaymentInformationDetailV3Zwe> | OneToOneLink<PaymentInformationDetailV3Zwe, MdfEnumValue> | OneToOneLink<PaymentInformationDetailV3Zwe, User>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<PaymentInformationDetailV3Zwe>;
    /**
     * All key fields of the PaymentInformationDetailV3Zwe entity.
     */
    const _keyFields: Array<Selectable<PaymentInformationDetailV3Zwe>>;
    /**
     * Mapping of all key field names to the respective static field property PaymentInformationDetailV3Zwe.
     */
    const _keys: {
        [keys: string]: Selectable<PaymentInformationDetailV3Zwe>;
    };
}
//# sourceMappingURL=PaymentInformationDetailV3Zwe.d.ts.map