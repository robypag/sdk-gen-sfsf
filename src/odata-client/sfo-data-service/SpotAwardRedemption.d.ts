import { SpotAwardRedemptionRequestBuilder } from './SpotAwardRedemptionRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "SpotAwardRedemption" of service "SFOData".
 */
export declare class SpotAwardRedemption extends Entity implements SpotAwardRedemptionType {
    /**
     * Technical entity name for SpotAwardRedemption.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SpotAwardRedemption.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Comments.
     * Maximum length: 255.
     * @nullable
     */
    comments?: string;
    /**
     * createdBy.
     * Maximum length: 255.
     * @nullable
     */
    createdBy?: string;
    /**
     * createdDate.
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
     * lastModifiedBy.
     * Maximum length: 255.
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
     * mdfSystemRecordId.
     * Maximum length: 255.
     * @nullable
     */
    recordId?: string;
    /**
     * Total Order Amount.
     * @nullable
     */
    totalOrderAmount?: BigNumber;
    /**
     * User ID.
     * Maximum length: 100.
     * @nullable
     */
    userId?: string;
    /**
     * Vendor Identifier.
     * Maximum length: 128.
     * @nullable
     */
    vendorIdentifier?: string;
    /**
     * Vendor Transaction ID.
     * Maximum length: 255.
     * @nullable
     */
    vendorTransactionId?: string;
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
     * One-to-many navigation property to the [[SpotAwardRedemptionOrder]] entity.
     */
    orders: SpotAwardRedemptionOrder[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    userIdNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    vendorIdentifierNav: MdfEnumValue;
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `SpotAwardRedemption`.
     * @returns A builder that constructs instances of entity type `SpotAwardRedemption`.
     */
    static builder(): EntityBuilderType<SpotAwardRedemption, SpotAwardRedemptionTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `SpotAwardRedemption` entity type.
     * @returns A `SpotAwardRedemption` request builder.
     */
    static requestBuilder(): SpotAwardRedemptionRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SpotAwardRedemption`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SpotAwardRedemption`.
     */
    static customField(fieldName: string): CustomField<SpotAwardRedemption>;
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
import { SpotAwardRedemptionOrder, SpotAwardRedemptionOrderType } from './SpotAwardRedemptionOrder';
import { WfRequest, WfRequestType } from './WfRequest';
export interface SpotAwardRedemptionType {
    comments?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    currency?: string;
    externalCode: BigNumber;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    recordId?: string;
    totalOrderAmount?: BigNumber;
    userId?: string;
    vendorIdentifier?: string;
    vendorTransactionId?: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    orders: SpotAwardRedemptionOrderType[];
    userIdNav: UserType;
    vendorIdentifierNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export interface SpotAwardRedemptionTypeForceMandatory {
    comments: string;
    createdBy: string;
    createdDateTime: Moment;
    currency: string;
    externalCode: BigNumber;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    recordId: string;
    totalOrderAmount: BigNumber;
    userId: string;
    vendorIdentifier: string;
    vendorTransactionId: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    orders: SpotAwardRedemptionOrderType[];
    userIdNav: UserType;
    vendorIdentifierNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export declare namespace SpotAwardRedemption {
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMENTS: StringField<SpotAwardRedemption>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<SpotAwardRedemption>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<SpotAwardRedemption>;
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY: StringField<SpotAwardRedemption>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: BigNumberField<SpotAwardRedemption>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<SpotAwardRedemption>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<SpotAwardRedemption>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<SpotAwardRedemption>;
    /**
     * Static representation of the [[recordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECORD_ID: StringField<SpotAwardRedemption>;
    /**
     * Static representation of the [[totalOrderAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TOTAL_ORDER_AMOUNT: BigNumberField<SpotAwardRedemption>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<SpotAwardRedemption>;
    /**
     * Static representation of the [[vendorIdentifier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VENDOR_IDENTIFIER: StringField<SpotAwardRedemption>;
    /**
     * Static representation of the [[vendorTransactionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VENDOR_TRANSACTION_ID: StringField<SpotAwardRedemption>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<SpotAwardRedemption, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<SpotAwardRedemption, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<SpotAwardRedemption, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[orders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDERS: Link<SpotAwardRedemption, SpotAwardRedemptionOrder>;
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_NAV: OneToOneLink<SpotAwardRedemption, User>;
    /**
     * Static representation of the one-to-one navigation property [[vendorIdentifierNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VENDOR_IDENTIFIER_NAV: OneToOneLink<SpotAwardRedemption, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<SpotAwardRedemption, WfRequest>;
    /**
     * All fields of the SpotAwardRedemption entity.
     */
    const _allFields: Array<StringField<SpotAwardRedemption> | DateField<SpotAwardRedemption> | BigNumberField<SpotAwardRedemption> | OneToOneLink<SpotAwardRedemption, User> | OneToOneLink<SpotAwardRedemption, MdfEnumValue> | Link<SpotAwardRedemption, SpotAwardRedemptionOrder> | Link<SpotAwardRedemption, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SpotAwardRedemption>;
    /**
     * All key fields of the SpotAwardRedemption entity.
     */
    const _keyFields: Array<Selectable<SpotAwardRedemption>>;
    /**
     * Mapping of all key field names to the respective static field property SpotAwardRedemption.
     */
    const _keys: {
        [keys: string]: Selectable<SpotAwardRedemption>;
    };
}
//# sourceMappingURL=SpotAwardRedemption.d.ts.map