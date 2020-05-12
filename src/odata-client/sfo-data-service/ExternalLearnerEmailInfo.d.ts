import { ExternalLearnerEmailInfoRequestBuilder } from './ExternalLearnerEmailInfoRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "ExternalLearnerEmailInfo" of service "SFOData".
 */
export declare class ExternalLearnerEmailInfo extends Entity implements ExternalLearnerEmailInfoType {
    /**
     * Technical entity name for ExternalLearnerEmailInfo.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ExternalLearnerEmailInfo.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Email Address.
     * Maximum length: 100.
     * @nullable
     */
    emailAddress?: string;
    /**
     * Email Type.
     * Maximum length: 38.
     * @nullable
     */
    emailType?: string;
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
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    emailTypeNav: PicklistOption;
    /**
     * Returns an entity builder to construct instances `ExternalLearnerEmailInfo`.
     * @returns A builder that constructs instances of entity type `ExternalLearnerEmailInfo`.
     */
    static builder(): EntityBuilderType<ExternalLearnerEmailInfo, ExternalLearnerEmailInfoTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `ExternalLearnerEmailInfo` entity type.
     * @returns A `ExternalLearnerEmailInfo` request builder.
     */
    static requestBuilder(): ExternalLearnerEmailInfoRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ExternalLearnerEmailInfo`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ExternalLearnerEmailInfo`.
     */
    static customField(fieldName: string): CustomField<ExternalLearnerEmailInfo>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { PicklistOption, PicklistOptionType } from './PicklistOption';
export interface ExternalLearnerEmailInfoType {
    emailAddress?: string;
    emailType?: string;
    isPrimary?: boolean;
    isDeleted?: boolean;
    itemId: BigNumber;
    lastModifiedDateTime?: Moment;
    emailTypeNav: PicklistOptionType;
}
export interface ExternalLearnerEmailInfoTypeForceMandatory {
    emailAddress: string;
    emailType: string;
    isPrimary: boolean;
    isDeleted: boolean;
    itemId: BigNumber;
    lastModifiedDateTime: Moment;
    emailTypeNav: PicklistOptionType;
}
export declare namespace ExternalLearnerEmailInfo {
    /**
     * Static representation of the [[emailAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMAIL_ADDRESS: StringField<ExternalLearnerEmailInfo>;
    /**
     * Static representation of the [[emailType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMAIL_TYPE: StringField<ExternalLearnerEmailInfo>;
    /**
     * Static representation of the [[isPrimary]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_PRIMARY: BooleanField<ExternalLearnerEmailInfo>;
    /**
     * Static representation of the [[isDeleted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_DELETED: BooleanField<ExternalLearnerEmailInfo>;
    /**
     * Static representation of the [[itemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_ID: BigNumberField<ExternalLearnerEmailInfo>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<ExternalLearnerEmailInfo>;
    /**
     * Static representation of the one-to-one navigation property [[emailTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMAIL_TYPE_NAV: OneToOneLink<ExternalLearnerEmailInfo, PicklistOption>;
    /**
     * All fields of the ExternalLearnerEmailInfo entity.
     */
    const _allFields: Array<StringField<ExternalLearnerEmailInfo> | BooleanField<ExternalLearnerEmailInfo> | BigNumberField<ExternalLearnerEmailInfo> | DateField<ExternalLearnerEmailInfo> | OneToOneLink<ExternalLearnerEmailInfo, PicklistOption>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ExternalLearnerEmailInfo>;
    /**
     * All key fields of the ExternalLearnerEmailInfo entity.
     */
    const _keyFields: Array<Selectable<ExternalLearnerEmailInfo>>;
    /**
     * Mapping of all key field names to the respective static field property ExternalLearnerEmailInfo.
     */
    const _keys: {
        [keys: string]: Selectable<ExternalLearnerEmailInfo>;
    };
}
//# sourceMappingURL=ExternalLearnerEmailInfo.d.ts.map