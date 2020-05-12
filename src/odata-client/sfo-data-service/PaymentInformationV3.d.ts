import { PaymentInformationV3RequestBuilder } from './PaymentInformationV3RequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "PaymentInformationV3" of service "SFOData".
 */
export declare class PaymentInformationV3 extends Entity implements PaymentInformationV3Type {
    /**
     * Technical entity name for PaymentInformationV3.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PaymentInformationV3.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
     * Effective end date.
     * @nullable
     */
    effectiveEndDate?: Moment;
    /**
     * Effective start date.
     */
    effectiveStartDate: Moment;
    /**
     * Job country/region.
     * Maximum length: 128.
     * @nullable
     */
    jobCountry?: string;
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
     * Worker.
     * Maximum length: 100.
     */
    worker: string;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-one navigation property to the [[Country]] entity.
     */
    jobCountryNav: Country;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * One-to-many navigation property to the [[PaymentInformationDetailV3]] entity.
     */
    toPaymentInformationDetailV3: PaymentInformationDetailV3[];
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    workerNav: User;
    /**
     * Returns an entity builder to construct instances `PaymentInformationV3`.
     * @returns A builder that constructs instances of entity type `PaymentInformationV3`.
     */
    static builder(): EntityBuilderType<PaymentInformationV3, PaymentInformationV3TypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `PaymentInformationV3` entity type.
     * @returns A `PaymentInformationV3` request builder.
     */
    static requestBuilder(): PaymentInformationV3RequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PaymentInformationV3`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PaymentInformationV3`.
     */
    static customField(fieldName: string): CustomField<PaymentInformationV3>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { Country, CountryType } from './Country';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { PaymentInformationDetailV3, PaymentInformationDetailV3Type } from './PaymentInformationDetailV3';
import { WfRequest, WfRequestType } from './WfRequest';
export interface PaymentInformationV3Type {
    createdBy?: string;
    createdDateTime?: Moment;
    effectiveEndDate?: Moment;
    effectiveStartDate: Moment;
    jobCountry?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    worker: string;
    createdByNav: UserType;
    jobCountryNav: CountryType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    toPaymentInformationDetailV3: PaymentInformationDetailV3Type[];
    wfRequestNav: WfRequestType[];
    workerNav: UserType;
}
export interface PaymentInformationV3TypeForceMandatory {
    createdBy: string;
    createdDateTime: Moment;
    effectiveEndDate: Moment;
    effectiveStartDate: Moment;
    jobCountry: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    worker: string;
    createdByNav: UserType;
    jobCountryNav: CountryType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    toPaymentInformationDetailV3: PaymentInformationDetailV3Type[];
    wfRequestNav: WfRequestType[];
    workerNav: UserType;
}
export declare namespace PaymentInformationV3 {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<PaymentInformationV3>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<PaymentInformationV3>;
    /**
     * Static representation of the [[effectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EFFECTIVE_END_DATE: DateField<PaymentInformationV3>;
    /**
     * Static representation of the [[effectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EFFECTIVE_START_DATE: DateField<PaymentInformationV3>;
    /**
     * Static representation of the [[jobCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_COUNTRY: StringField<PaymentInformationV3>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<PaymentInformationV3>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<PaymentInformationV3>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<PaymentInformationV3>;
    /**
     * Static representation of the [[worker]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WORKER: StringField<PaymentInformationV3>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<PaymentInformationV3, User>;
    /**
     * Static representation of the one-to-one navigation property [[jobCountryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_COUNTRY_NAV: OneToOneLink<PaymentInformationV3, Country>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<PaymentInformationV3, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PaymentInformationV3, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[toPaymentInformationDetailV3]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_PAYMENT_INFORMATION_DETAIL_V_3: Link<PaymentInformationV3, PaymentInformationDetailV3>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<PaymentInformationV3, WfRequest>;
    /**
     * Static representation of the one-to-one navigation property [[workerNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WORKER_NAV: OneToOneLink<PaymentInformationV3, User>;
    /**
     * All fields of the PaymentInformationV3 entity.
     */
    const _allFields: Array<StringField<PaymentInformationV3> | DateField<PaymentInformationV3> | OneToOneLink<PaymentInformationV3, User> | OneToOneLink<PaymentInformationV3, Country> | OneToOneLink<PaymentInformationV3, MdfEnumValue> | Link<PaymentInformationV3, PaymentInformationDetailV3> | Link<PaymentInformationV3, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<PaymentInformationV3>;
    /**
     * All key fields of the PaymentInformationV3 entity.
     */
    const _keyFields: Array<Selectable<PaymentInformationV3>>;
    /**
     * Mapping of all key field names to the respective static field property PaymentInformationV3.
     */
    const _keys: {
        [keys: string]: Selectable<PaymentInformationV3>;
    };
}
//# sourceMappingURL=PaymentInformationV3.d.ts.map