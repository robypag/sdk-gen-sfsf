import { SpotAwardRedemptionProductRequestBuilder } from './SpotAwardRedemptionProductRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "SpotAwardRedemptionProduct" of service "SFOData".
 */
export declare class SpotAwardRedemptionProduct extends Entity implements SpotAwardRedemptionProductType {
    /**
     * Technical entity name for SpotAwardRedemptionProduct.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SpotAwardRedemptionProduct.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Spot Award Redemption Order_externalCode.
     */
    spotAwardRedemptionOrderExternalCode: BigNumber;
    /**
     * Spot Award Redemption_externalCode.
     */
    spotAwardRedemptionExternalCode: BigNumber;
    /**
     * Category.
     * Maximum length: 255.
     * @nullable
     */
    category?: string;
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
     * Description.
     * Maximum length: 255.
     * @nullable
     */
    description?: string;
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
     * Name.
     * Maximum length: 255.
     * @nullable
     */
    name?: string;
    /**
     * Price.
     * @nullable
     */
    price?: BigNumber;
    /**
     * Product ID.
     * Maximum length: 255.
     * @nullable
     */
    productId?: string;
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
     * Returns an entity builder to construct instances `SpotAwardRedemptionProduct`.
     * @returns A builder that constructs instances of entity type `SpotAwardRedemptionProduct`.
     */
    static builder(): EntityBuilderType<SpotAwardRedemptionProduct, SpotAwardRedemptionProductTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `SpotAwardRedemptionProduct` entity type.
     * @returns A `SpotAwardRedemptionProduct` request builder.
     */
    static requestBuilder(): SpotAwardRedemptionProductRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SpotAwardRedemptionProduct`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SpotAwardRedemptionProduct`.
     */
    static customField(fieldName: string): CustomField<SpotAwardRedemptionProduct>;
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
export interface SpotAwardRedemptionProductType {
    spotAwardRedemptionOrderExternalCode: BigNumber;
    spotAwardRedemptionExternalCode: BigNumber;
    category?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    description?: string;
    externalCode: BigNumber;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    name?: string;
    price?: BigNumber;
    productId?: string;
    recordId?: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export interface SpotAwardRedemptionProductTypeForceMandatory {
    spotAwardRedemptionOrderExternalCode: BigNumber;
    spotAwardRedemptionExternalCode: BigNumber;
    category: string;
    createdBy: string;
    createdDateTime: Moment;
    description: string;
    externalCode: BigNumber;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    name: string;
    price: BigNumber;
    productId: string;
    recordId: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export declare namespace SpotAwardRedemptionProduct {
    /**
     * Static representation of the [[spotAwardRedemptionOrderExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SPOT_AWARD_REDEMPTION_ORDER_EXTERNAL_CODE: BigNumberField<SpotAwardRedemptionProduct>;
    /**
     * Static representation of the [[spotAwardRedemptionExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SPOT_AWARD_REDEMPTION_EXTERNAL_CODE: BigNumberField<SpotAwardRedemptionProduct>;
    /**
     * Static representation of the [[category]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CATEGORY: StringField<SpotAwardRedemptionProduct>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<SpotAwardRedemptionProduct>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<SpotAwardRedemptionProduct>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<SpotAwardRedemptionProduct>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: BigNumberField<SpotAwardRedemptionProduct>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<SpotAwardRedemptionProduct>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<SpotAwardRedemptionProduct>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<SpotAwardRedemptionProduct>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<SpotAwardRedemptionProduct>;
    /**
     * Static representation of the [[price]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRICE: BigNumberField<SpotAwardRedemptionProduct>;
    /**
     * Static representation of the [[productId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCT_ID: StringField<SpotAwardRedemptionProduct>;
    /**
     * Static representation of the [[recordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECORD_ID: StringField<SpotAwardRedemptionProduct>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<SpotAwardRedemptionProduct, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<SpotAwardRedemptionProduct, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<SpotAwardRedemptionProduct, MdfEnumValue>;
    /**
     * All fields of the SpotAwardRedemptionProduct entity.
     */
    const _allFields: Array<BigNumberField<SpotAwardRedemptionProduct> | StringField<SpotAwardRedemptionProduct> | DateField<SpotAwardRedemptionProduct> | OneToOneLink<SpotAwardRedemptionProduct, User> | OneToOneLink<SpotAwardRedemptionProduct, MdfEnumValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SpotAwardRedemptionProduct>;
    /**
     * All key fields of the SpotAwardRedemptionProduct entity.
     */
    const _keyFields: Array<Selectable<SpotAwardRedemptionProduct>>;
    /**
     * Mapping of all key field names to the respective static field property SpotAwardRedemptionProduct.
     */
    const _keys: {
        [keys: string]: Selectable<SpotAwardRedemptionProduct>;
    };
}
//# sourceMappingURL=SpotAwardRedemptionProduct.d.ts.map