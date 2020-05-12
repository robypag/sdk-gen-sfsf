import { ExternalLearnerAddressInfoRequestBuilder } from './ExternalLearnerAddressInfoRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "ExternalLearnerAddressInfo" of service "SFOData".
 */
export declare class ExternalLearnerAddressInfo extends Entity implements ExternalLearnerAddressInfoType {
    /**
     * Technical entity name for ExternalLearnerAddressInfo.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ExternalLearnerAddressInfo.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * addressType.
     * Maximum length: 30.
     * @nullable
     */
    addressType?: string;
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
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    addressTypeNav: PicklistOption;
    /**
     * Returns an entity builder to construct instances `ExternalLearnerAddressInfo`.
     * @returns A builder that constructs instances of entity type `ExternalLearnerAddressInfo`.
     */
    static builder(): EntityBuilderType<ExternalLearnerAddressInfo, ExternalLearnerAddressInfoTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `ExternalLearnerAddressInfo` entity type.
     * @returns A `ExternalLearnerAddressInfo` request builder.
     */
    static requestBuilder(): ExternalLearnerAddressInfoRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ExternalLearnerAddressInfo`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ExternalLearnerAddressInfo`.
     */
    static customField(fieldName: string): CustomField<ExternalLearnerAddressInfo>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { PicklistOption, PicklistOptionType } from './PicklistOption';
export interface ExternalLearnerAddressInfoType {
    addressType?: string;
    isDeleted?: boolean;
    itemId: BigNumber;
    lastModifiedDateTime?: Moment;
    addressTypeNav: PicklistOptionType;
}
export interface ExternalLearnerAddressInfoTypeForceMandatory {
    addressType: string;
    isDeleted: boolean;
    itemId: BigNumber;
    lastModifiedDateTime: Moment;
    addressTypeNav: PicklistOptionType;
}
export declare namespace ExternalLearnerAddressInfo {
    /**
     * Static representation of the [[addressType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_TYPE: StringField<ExternalLearnerAddressInfo>;
    /**
     * Static representation of the [[isDeleted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_DELETED: BooleanField<ExternalLearnerAddressInfo>;
    /**
     * Static representation of the [[itemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_ID: BigNumberField<ExternalLearnerAddressInfo>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<ExternalLearnerAddressInfo>;
    /**
     * Static representation of the one-to-one navigation property [[addressTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_TYPE_NAV: OneToOneLink<ExternalLearnerAddressInfo, PicklistOption>;
    /**
     * All fields of the ExternalLearnerAddressInfo entity.
     */
    const _allFields: Array<StringField<ExternalLearnerAddressInfo> | BooleanField<ExternalLearnerAddressInfo> | BigNumberField<ExternalLearnerAddressInfo> | DateField<ExternalLearnerAddressInfo> | OneToOneLink<ExternalLearnerAddressInfo, PicklistOption>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ExternalLearnerAddressInfo>;
    /**
     * All key fields of the ExternalLearnerAddressInfo entity.
     */
    const _keyFields: Array<Selectable<ExternalLearnerAddressInfo>>;
    /**
     * Mapping of all key field names to the respective static field property ExternalLearnerAddressInfo.
     */
    const _keys: {
        [keys: string]: Selectable<ExternalLearnerAddressInfo>;
    };
}
//# sourceMappingURL=ExternalLearnerAddressInfo.d.ts.map