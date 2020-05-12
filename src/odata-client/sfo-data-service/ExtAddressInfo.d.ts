import { ExtAddressInfoRequestBuilder } from './ExtAddressInfoRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "ExtAddressInfo" of service "SFOData".
 */
export declare class ExtAddressInfo extends Entity implements ExtAddressInfoType {
    /**
     * Technical entity name for ExtAddressInfo.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ExtAddressInfo.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * address1.
     * Maximum length: 1536.
     * @nullable
     */
    address1?: string;
    /**
     * address2.
     * Maximum length: 1536.
     * @nullable
     */
    address2?: string;
    /**
     * addressId.
     */
    addressId: BigNumber;
    /**
     * addressType.
     * Maximum length: 30.
     * @nullable
     */
    addressType?: string;
    /**
     * city.
     * Maximum length: 1536.
     * @nullable
     */
    city?: string;
    /**
     * country.
     * Maximum length: 256.
     * @nullable
     */
    country?: string;
    /**
     * lastModifiedDateTime.
     * @nullable
     */
    lastModifiedDateTime?: Moment;
    /**
     * province.
     * Maximum length: 1536.
     * @nullable
     */
    province?: string;
    /**
     * state.
     * Maximum length: 1536.
     * @nullable
     */
    state?: string;
    /**
     * zipCode.
     * Maximum length: 1536.
     * @nullable
     */
    zipCode?: string;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    addressTypeNav: PicklistOption;
    /**
     * Returns an entity builder to construct instances `ExtAddressInfo`.
     * @returns A builder that constructs instances of entity type `ExtAddressInfo`.
     */
    static builder(): EntityBuilderType<ExtAddressInfo, ExtAddressInfoTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `ExtAddressInfo` entity type.
     * @returns A `ExtAddressInfo` request builder.
     */
    static requestBuilder(): ExtAddressInfoRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ExtAddressInfo`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ExtAddressInfo`.
     */
    static customField(fieldName: string): CustomField<ExtAddressInfo>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { PicklistOption, PicklistOptionType } from './PicklistOption';
export interface ExtAddressInfoType {
    address1?: string;
    address2?: string;
    addressId: BigNumber;
    addressType?: string;
    city?: string;
    country?: string;
    lastModifiedDateTime?: Moment;
    province?: string;
    state?: string;
    zipCode?: string;
    addressTypeNav: PicklistOptionType;
}
export interface ExtAddressInfoTypeForceMandatory {
    address1: string;
    address2: string;
    addressId: BigNumber;
    addressType: string;
    city: string;
    country: string;
    lastModifiedDateTime: Moment;
    province: string;
    state: string;
    zipCode: string;
    addressTypeNav: PicklistOptionType;
}
export declare namespace ExtAddressInfo {
    /**
     * Static representation of the [[address1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_1: StringField<ExtAddressInfo>;
    /**
     * Static representation of the [[address2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_2: StringField<ExtAddressInfo>;
    /**
     * Static representation of the [[addressId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_ID: BigNumberField<ExtAddressInfo>;
    /**
     * Static representation of the [[addressType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_TYPE: StringField<ExtAddressInfo>;
    /**
     * Static representation of the [[city]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CITY: StringField<ExtAddressInfo>;
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<ExtAddressInfo>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<ExtAddressInfo>;
    /**
     * Static representation of the [[province]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROVINCE: StringField<ExtAddressInfo>;
    /**
     * Static representation of the [[state]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATE: StringField<ExtAddressInfo>;
    /**
     * Static representation of the [[zipCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ZIP_CODE: StringField<ExtAddressInfo>;
    /**
     * Static representation of the one-to-one navigation property [[addressTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_TYPE_NAV: OneToOneLink<ExtAddressInfo, PicklistOption>;
    /**
     * All fields of the ExtAddressInfo entity.
     */
    const _allFields: Array<StringField<ExtAddressInfo> | BigNumberField<ExtAddressInfo> | DateField<ExtAddressInfo> | OneToOneLink<ExtAddressInfo, PicklistOption>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ExtAddressInfo>;
    /**
     * All key fields of the ExtAddressInfo entity.
     */
    const _keyFields: Array<Selectable<ExtAddressInfo>>;
    /**
     * Mapping of all key field names to the respective static field property ExtAddressInfo.
     */
    const _keys: {
        [keys: string]: Selectable<ExtAddressInfo>;
    };
}
//# sourceMappingURL=ExtAddressInfo.d.ts.map