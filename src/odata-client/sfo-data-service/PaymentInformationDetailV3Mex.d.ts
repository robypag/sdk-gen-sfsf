import { PaymentInformationDetailV3MexRequestBuilder } from './PaymentInformationDetailV3MexRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "PaymentInformationDetailV3MEX" of service "SFOData".
 */
export declare class PaymentInformationDetailV3Mex extends Entity implements PaymentInformationDetailV3MexType {
    /**
     * Technical entity name for PaymentInformationDetailV3Mex.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PaymentInformationDetailV3Mex.
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
     * Bank Control Key.
     * Maximum length: 2.
     * @nullable
     */
    checkDigit?: string;
    /**
     * CLABE Number.
     * Maximum length: 18.
     * @nullable
     */
    clabe?: string;
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
     * Returns an entity builder to construct instances `PaymentInformationDetailV3Mex`.
     * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Mex`.
     */
    static builder(): EntityBuilderType<PaymentInformationDetailV3Mex, PaymentInformationDetailV3MexTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `PaymentInformationDetailV3Mex` entity type.
     * @returns A `PaymentInformationDetailV3Mex` request builder.
     */
    static requestBuilder(): PaymentInformationDetailV3MexRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PaymentInformationDetailV3Mex`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Mex`.
     */
    static customField(fieldName: string): CustomField<PaymentInformationDetailV3Mex>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
export interface PaymentInformationDetailV3MexType {
    paymentInformationDetailV3ExternalCode: BigNumber;
    paymentInformationV3EffectiveStartDate: Moment;
    paymentInformationV3Worker: string;
    checkDigit?: string;
    clabe?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    externalCode: BigNumber;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export interface PaymentInformationDetailV3MexTypeForceMandatory {
    paymentInformationDetailV3ExternalCode: BigNumber;
    paymentInformationV3EffectiveStartDate: Moment;
    paymentInformationV3Worker: string;
    checkDigit: string;
    clabe: string;
    createdBy: string;
    createdDateTime: Moment;
    externalCode: BigNumber;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export declare namespace PaymentInformationDetailV3Mex {
    /**
     * Static representation of the [[paymentInformationDetailV3ExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE: BigNumberField<PaymentInformationDetailV3Mex>;
    /**
     * Static representation of the [[paymentInformationV3EffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE: DateField<PaymentInformationDetailV3Mex>;
    /**
     * Static representation of the [[paymentInformationV3Worker]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_INFORMATION_V_3_WORKER: StringField<PaymentInformationDetailV3Mex>;
    /**
     * Static representation of the [[checkDigit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHECK_DIGIT: StringField<PaymentInformationDetailV3Mex>;
    /**
     * Static representation of the [[clabe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CLABE: StringField<PaymentInformationDetailV3Mex>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<PaymentInformationDetailV3Mex>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<PaymentInformationDetailV3Mex>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: BigNumberField<PaymentInformationDetailV3Mex>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<PaymentInformationDetailV3Mex>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<PaymentInformationDetailV3Mex>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<PaymentInformationDetailV3Mex>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<PaymentInformationDetailV3Mex, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<PaymentInformationDetailV3Mex, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PaymentInformationDetailV3Mex, MdfEnumValue>;
    /**
     * All fields of the PaymentInformationDetailV3Mex entity.
     */
    const _allFields: Array<BigNumberField<PaymentInformationDetailV3Mex> | DateField<PaymentInformationDetailV3Mex> | StringField<PaymentInformationDetailV3Mex> | OneToOneLink<PaymentInformationDetailV3Mex, User> | OneToOneLink<PaymentInformationDetailV3Mex, MdfEnumValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<PaymentInformationDetailV3Mex>;
    /**
     * All key fields of the PaymentInformationDetailV3Mex entity.
     */
    const _keyFields: Array<Selectable<PaymentInformationDetailV3Mex>>;
    /**
     * Mapping of all key field names to the respective static field property PaymentInformationDetailV3Mex.
     */
    const _keys: {
        [keys: string]: Selectable<PaymentInformationDetailV3Mex>;
    };
}
//# sourceMappingURL=PaymentInformationDetailV3Mex.d.ts.map