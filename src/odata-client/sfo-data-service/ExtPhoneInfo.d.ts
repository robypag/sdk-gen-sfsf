import { ExtPhoneInfoRequestBuilder } from './ExtPhoneInfoRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "ExtPhoneInfo" of service "SFOData".
 */
export declare class ExtPhoneInfo extends Entity implements ExtPhoneInfoType {
    /**
     * Technical entity name for ExtPhoneInfo.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ExtPhoneInfo.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Area Code.
     * Maximum length: 32.
     * @nullable
     */
    areaCode?: string;
    /**
     * Country Code.
     * Maximum length: 32.
     * @nullable
     */
    countryCode?: string;
    /**
     * Extension.
     * Maximum length: 32.
     * @nullable
     */
    extension?: string;
    /**
     * Is Primary.
     * Maximum length: 4.
     * @nullable
     */
    isPrimary?: string;
    /**
     * lastModifiedDateTime.
     * @nullable
     */
    lastModifiedDateTime?: Moment;
    /**
     * phoneInfoId.
     */
    phoneInfoId: BigNumber;
    /**
     * Phone Number.
     * Maximum length: 600.
     * @nullable
     */
    phoneNumber?: string;
    /**
     * Phone Type.
     * Maximum length: 100.
     * @nullable
     */
    phoneType?: string;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    phoneTypeNav: PicklistOption;
    /**
     * Returns an entity builder to construct instances `ExtPhoneInfo`.
     * @returns A builder that constructs instances of entity type `ExtPhoneInfo`.
     */
    static builder(): EntityBuilderType<ExtPhoneInfo, ExtPhoneInfoTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `ExtPhoneInfo` entity type.
     * @returns A `ExtPhoneInfo` request builder.
     */
    static requestBuilder(): ExtPhoneInfoRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ExtPhoneInfo`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ExtPhoneInfo`.
     */
    static customField(fieldName: string): CustomField<ExtPhoneInfo>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { PicklistOption, PicklistOptionType } from './PicklistOption';
export interface ExtPhoneInfoType {
    areaCode?: string;
    countryCode?: string;
    extension?: string;
    isPrimary?: string;
    lastModifiedDateTime?: Moment;
    phoneInfoId: BigNumber;
    phoneNumber?: string;
    phoneType?: string;
    phoneTypeNav: PicklistOptionType;
}
export interface ExtPhoneInfoTypeForceMandatory {
    areaCode: string;
    countryCode: string;
    extension: string;
    isPrimary: string;
    lastModifiedDateTime: Moment;
    phoneInfoId: BigNumber;
    phoneNumber: string;
    phoneType: string;
    phoneTypeNav: PicklistOptionType;
}
export declare namespace ExtPhoneInfo {
    /**
     * Static representation of the [[areaCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AREA_CODE: StringField<ExtPhoneInfo>;
    /**
     * Static representation of the [[countryCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_CODE: StringField<ExtPhoneInfo>;
    /**
     * Static representation of the [[extension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTENSION: StringField<ExtPhoneInfo>;
    /**
     * Static representation of the [[isPrimary]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_PRIMARY: StringField<ExtPhoneInfo>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<ExtPhoneInfo>;
    /**
     * Static representation of the [[phoneInfoId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PHONE_INFO_ID: BigNumberField<ExtPhoneInfo>;
    /**
     * Static representation of the [[phoneNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PHONE_NUMBER: StringField<ExtPhoneInfo>;
    /**
     * Static representation of the [[phoneType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PHONE_TYPE: StringField<ExtPhoneInfo>;
    /**
     * Static representation of the one-to-one navigation property [[phoneTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PHONE_TYPE_NAV: OneToOneLink<ExtPhoneInfo, PicklistOption>;
    /**
     * All fields of the ExtPhoneInfo entity.
     */
    const _allFields: Array<StringField<ExtPhoneInfo> | DateField<ExtPhoneInfo> | BigNumberField<ExtPhoneInfo> | OneToOneLink<ExtPhoneInfo, PicklistOption>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ExtPhoneInfo>;
    /**
     * All key fields of the ExtPhoneInfo entity.
     */
    const _keyFields: Array<Selectable<ExtPhoneInfo>>;
    /**
     * Mapping of all key field names to the respective static field property ExtPhoneInfo.
     */
    const _keys: {
        [keys: string]: Selectable<ExtPhoneInfo>;
    };
}
//# sourceMappingURL=ExtPhoneInfo.d.ts.map