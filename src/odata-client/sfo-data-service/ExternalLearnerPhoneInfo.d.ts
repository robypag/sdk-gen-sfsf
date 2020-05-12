import { ExternalLearnerPhoneInfoRequestBuilder } from './ExternalLearnerPhoneInfoRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "ExternalLearnerPhoneInfo" of service "SFOData".
 */
export declare class ExternalLearnerPhoneInfo extends Entity implements ExternalLearnerPhoneInfoType {
    /**
     * Technical entity name for ExternalLearnerPhoneInfo.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ExternalLearnerPhoneInfo.
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
     * @nullable
     */
    isPrimary?: boolean;
    /**
     * is_deleted.
     * @nullable
     */
    isDeleted?: boolean;
    /**
     * itemId.
     */
    itemId: BigNumber;
    /**
     * lastModifiedDateTime.
     * @nullable
     */
    lastModifiedDateTime?: Moment;
    /**
     * Phone Number.
     * Maximum length: 100.
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
     * Returns an entity builder to construct instances `ExternalLearnerPhoneInfo`.
     * @returns A builder that constructs instances of entity type `ExternalLearnerPhoneInfo`.
     */
    static builder(): EntityBuilderType<ExternalLearnerPhoneInfo, ExternalLearnerPhoneInfoTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `ExternalLearnerPhoneInfo` entity type.
     * @returns A `ExternalLearnerPhoneInfo` request builder.
     */
    static requestBuilder(): ExternalLearnerPhoneInfoRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ExternalLearnerPhoneInfo`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ExternalLearnerPhoneInfo`.
     */
    static customField(fieldName: string): CustomField<ExternalLearnerPhoneInfo>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { PicklistOption, PicklistOptionType } from './PicklistOption';
export interface ExternalLearnerPhoneInfoType {
    areaCode?: string;
    countryCode?: string;
    extension?: string;
    isPrimary?: boolean;
    isDeleted?: boolean;
    itemId: BigNumber;
    lastModifiedDateTime?: Moment;
    phoneNumber?: string;
    phoneType?: string;
    phoneTypeNav: PicklistOptionType;
}
export interface ExternalLearnerPhoneInfoTypeForceMandatory {
    areaCode: string;
    countryCode: string;
    extension: string;
    isPrimary: boolean;
    isDeleted: boolean;
    itemId: BigNumber;
    lastModifiedDateTime: Moment;
    phoneNumber: string;
    phoneType: string;
    phoneTypeNav: PicklistOptionType;
}
export declare namespace ExternalLearnerPhoneInfo {
    /**
     * Static representation of the [[areaCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AREA_CODE: StringField<ExternalLearnerPhoneInfo>;
    /**
     * Static representation of the [[countryCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_CODE: StringField<ExternalLearnerPhoneInfo>;
    /**
     * Static representation of the [[extension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTENSION: StringField<ExternalLearnerPhoneInfo>;
    /**
     * Static representation of the [[isPrimary]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_PRIMARY: BooleanField<ExternalLearnerPhoneInfo>;
    /**
     * Static representation of the [[isDeleted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_DELETED: BooleanField<ExternalLearnerPhoneInfo>;
    /**
     * Static representation of the [[itemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_ID: BigNumberField<ExternalLearnerPhoneInfo>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<ExternalLearnerPhoneInfo>;
    /**
     * Static representation of the [[phoneNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PHONE_NUMBER: StringField<ExternalLearnerPhoneInfo>;
    /**
     * Static representation of the [[phoneType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PHONE_TYPE: StringField<ExternalLearnerPhoneInfo>;
    /**
     * Static representation of the one-to-one navigation property [[phoneTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PHONE_TYPE_NAV: OneToOneLink<ExternalLearnerPhoneInfo, PicklistOption>;
    /**
     * All fields of the ExternalLearnerPhoneInfo entity.
     */
    const _allFields: Array<StringField<ExternalLearnerPhoneInfo> | BooleanField<ExternalLearnerPhoneInfo> | BigNumberField<ExternalLearnerPhoneInfo> | DateField<ExternalLearnerPhoneInfo> | OneToOneLink<ExternalLearnerPhoneInfo, PicklistOption>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ExternalLearnerPhoneInfo>;
    /**
     * All key fields of the ExternalLearnerPhoneInfo entity.
     */
    const _keyFields: Array<Selectable<ExternalLearnerPhoneInfo>>;
    /**
     * Mapping of all key field names to the respective static field property ExternalLearnerPhoneInfo.
     */
    const _keys: {
        [keys: string]: Selectable<ExternalLearnerPhoneInfo>;
    };
}
//# sourceMappingURL=ExternalLearnerPhoneInfo.d.ts.map