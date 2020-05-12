import { ExtEmailInfoRequestBuilder } from './ExtEmailInfoRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "ExtEmailInfo" of service "SFOData".
 */
export declare class ExtEmailInfo extends Entity implements ExtEmailInfoType {
    /**
     * Technical entity name for ExtEmailInfo.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ExtEmailInfo.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Email Address.
     * Maximum length: 100.
     */
    emailAddress: string;
    /**
     * emailInfoId.
     */
    emailInfoId: BigNumber;
    /**
     * Email Type.
     * Maximum length: 38.
     */
    emailType: string;
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
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    emailTypeNav: PicklistOption;
    /**
     * Returns an entity builder to construct instances `ExtEmailInfo`.
     * @returns A builder that constructs instances of entity type `ExtEmailInfo`.
     */
    static builder(): EntityBuilderType<ExtEmailInfo, ExtEmailInfoTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `ExtEmailInfo` entity type.
     * @returns A `ExtEmailInfo` request builder.
     */
    static requestBuilder(): ExtEmailInfoRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ExtEmailInfo`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ExtEmailInfo`.
     */
    static customField(fieldName: string): CustomField<ExtEmailInfo>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { PicklistOption, PicklistOptionType } from './PicklistOption';
export interface ExtEmailInfoType {
    emailAddress: string;
    emailInfoId: BigNumber;
    emailType: string;
    isPrimary?: string;
    lastModifiedDateTime?: Moment;
    emailTypeNav: PicklistOptionType;
}
export interface ExtEmailInfoTypeForceMandatory {
    emailAddress: string;
    emailInfoId: BigNumber;
    emailType: string;
    isPrimary: string;
    lastModifiedDateTime: Moment;
    emailTypeNav: PicklistOptionType;
}
export declare namespace ExtEmailInfo {
    /**
     * Static representation of the [[emailAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMAIL_ADDRESS: StringField<ExtEmailInfo>;
    /**
     * Static representation of the [[emailInfoId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMAIL_INFO_ID: BigNumberField<ExtEmailInfo>;
    /**
     * Static representation of the [[emailType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMAIL_TYPE: StringField<ExtEmailInfo>;
    /**
     * Static representation of the [[isPrimary]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_PRIMARY: StringField<ExtEmailInfo>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<ExtEmailInfo>;
    /**
     * Static representation of the one-to-one navigation property [[emailTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMAIL_TYPE_NAV: OneToOneLink<ExtEmailInfo, PicklistOption>;
    /**
     * All fields of the ExtEmailInfo entity.
     */
    const _allFields: Array<StringField<ExtEmailInfo> | BigNumberField<ExtEmailInfo> | DateField<ExtEmailInfo> | OneToOneLink<ExtEmailInfo, PicklistOption>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ExtEmailInfo>;
    /**
     * All key fields of the ExtEmailInfo entity.
     */
    const _keyFields: Array<Selectable<ExtEmailInfo>>;
    /**
     * Mapping of all key field names to the respective static field property ExtEmailInfo.
     */
    const _keys: {
        [keys: string]: Selectable<ExtEmailInfo>;
    };
}
//# sourceMappingURL=ExtEmailInfo.d.ts.map