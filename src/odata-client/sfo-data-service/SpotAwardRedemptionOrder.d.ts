import { SpotAwardRedemptionOrderRequestBuilder } from './SpotAwardRedemptionOrderRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "SpotAwardRedemptionOrder" of service "SFOData".
 */
export declare class SpotAwardRedemptionOrder extends Entity implements SpotAwardRedemptionOrderType {
    /**
     * Technical entity name for SpotAwardRedemptionOrder.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SpotAwardRedemptionOrder.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Spot Award Redemption_externalCode.
     */
    spotAwardRedemptionExternalCode: BigNumber;
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
     * Order Amount.
     * @nullable
     */
    orderAmount?: BigNumber;
    /**
     * Quantity.
     * @nullable
     */
    quantity?: BigNumber;
    /**
     * mdfSystemRecordId.
     * Maximum length: 255.
     * @nullable
     */
    recordId?: string;
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
     * One-to-one navigation property to the [[SpotAwardRedemptionProduct]] entity.
     */
    product: SpotAwardRedemptionProduct;
    /**
     * Returns an entity builder to construct instances `SpotAwardRedemptionOrder`.
     * @returns A builder that constructs instances of entity type `SpotAwardRedemptionOrder`.
     */
    static builder(): EntityBuilderType<SpotAwardRedemptionOrder, SpotAwardRedemptionOrderTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `SpotAwardRedemptionOrder` entity type.
     * @returns A `SpotAwardRedemptionOrder` request builder.
     */
    static requestBuilder(): SpotAwardRedemptionOrderRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SpotAwardRedemptionOrder`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SpotAwardRedemptionOrder`.
     */
    static customField(fieldName: string): CustomField<SpotAwardRedemptionOrder>;
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
import { SpotAwardRedemptionProduct, SpotAwardRedemptionProductType } from './SpotAwardRedemptionProduct';
export interface SpotAwardRedemptionOrderType {
    spotAwardRedemptionExternalCode: BigNumber;
    createdBy?: string;
    createdDateTime?: Moment;
    externalCode: BigNumber;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    orderAmount?: BigNumber;
    quantity?: BigNumber;
    recordId?: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    product: SpotAwardRedemptionProductType;
}
export interface SpotAwardRedemptionOrderTypeForceMandatory {
    spotAwardRedemptionExternalCode: BigNumber;
    createdBy: string;
    createdDateTime: Moment;
    externalCode: BigNumber;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    orderAmount: BigNumber;
    quantity: BigNumber;
    recordId: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    product: SpotAwardRedemptionProductType;
}
export declare namespace SpotAwardRedemptionOrder {
    /**
     * Static representation of the [[spotAwardRedemptionExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SPOT_AWARD_REDEMPTION_EXTERNAL_CODE: BigNumberField<SpotAwardRedemptionOrder>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<SpotAwardRedemptionOrder>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<SpotAwardRedemptionOrder>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: BigNumberField<SpotAwardRedemptionOrder>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<SpotAwardRedemptionOrder>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<SpotAwardRedemptionOrder>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<SpotAwardRedemptionOrder>;
    /**
     * Static representation of the [[orderAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDER_AMOUNT: BigNumberField<SpotAwardRedemptionOrder>;
    /**
     * Static representation of the [[quantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUANTITY: BigNumberField<SpotAwardRedemptionOrder>;
    /**
     * Static representation of the [[recordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECORD_ID: StringField<SpotAwardRedemptionOrder>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<SpotAwardRedemptionOrder, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<SpotAwardRedemptionOrder, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<SpotAwardRedemptionOrder, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[product]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCT: OneToOneLink<SpotAwardRedemptionOrder, SpotAwardRedemptionProduct>;
    /**
     * All fields of the SpotAwardRedemptionOrder entity.
     */
    const _allFields: Array<BigNumberField<SpotAwardRedemptionOrder> | StringField<SpotAwardRedemptionOrder> | DateField<SpotAwardRedemptionOrder> | OneToOneLink<SpotAwardRedemptionOrder, User> | OneToOneLink<SpotAwardRedemptionOrder, MdfEnumValue> | OneToOneLink<SpotAwardRedemptionOrder, SpotAwardRedemptionProduct>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SpotAwardRedemptionOrder>;
    /**
     * All key fields of the SpotAwardRedemptionOrder entity.
     */
    const _keyFields: Array<Selectable<SpotAwardRedemptionOrder>>;
    /**
     * Mapping of all key field names to the respective static field property SpotAwardRedemptionOrder.
     */
    const _keys: {
        [keys: string]: Selectable<SpotAwardRedemptionOrder>;
    };
}
//# sourceMappingURL=SpotAwardRedemptionOrder.d.ts.map