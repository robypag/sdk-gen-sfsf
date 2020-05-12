import { FormObjectiveOtherDetailsRequestBuilder } from './FormObjectiveOtherDetailsRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FormObjectiveOtherDetails" of service "SFOData".
 */
export declare class FormObjectiveOtherDetails extends Entity implements FormObjectiveOtherDetailsType {
    /**
     * Technical entity name for FormObjectiveOtherDetails.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormObjectiveOtherDetails.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * formContentId.
     */
    formContentId: BigNumber;
    /**
     * formDataId.
     */
    formDataId: BigNumber;
    /**
     * itemId.
     */
    itemId: BigNumber;
    /**
     * sectionIndex.
     */
    sectionIndex: number;
    /**
     * One-to-one navigation property to the [[FormObjectiveOtherDetailsItem]] entity.
     */
    metricLookupTables: FormObjectiveOtherDetailsItem;
    /**
     * One-to-one navigation property to the [[FormObjectiveOtherDetailsItem]] entity.
     */
    milestones: FormObjectiveOtherDetailsItem;
    /**
     * One-to-one navigation property to the [[FormObjectiveOtherDetailsItem]] entity.
     */
    targets: FormObjectiveOtherDetailsItem;
    /**
     * One-to-one navigation property to the [[FormObjectiveOtherDetailsItem]] entity.
     */
    tasks: FormObjectiveOtherDetailsItem;
    /**
     * Returns an entity builder to construct instances `FormObjectiveOtherDetails`.
     * @returns A builder that constructs instances of entity type `FormObjectiveOtherDetails`.
     */
    static builder(): EntityBuilderType<FormObjectiveOtherDetails, FormObjectiveOtherDetailsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FormObjectiveOtherDetails` entity type.
     * @returns A `FormObjectiveOtherDetails` request builder.
     */
    static requestBuilder(): FormObjectiveOtherDetailsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormObjectiveOtherDetails`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormObjectiveOtherDetails`.
     */
    static customField(fieldName: string): CustomField<FormObjectiveOtherDetails>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { FormObjectiveOtherDetailsItem, FormObjectiveOtherDetailsItemType } from './FormObjectiveOtherDetailsItem';
export interface FormObjectiveOtherDetailsType {
    formContentId: BigNumber;
    formDataId: BigNumber;
    itemId: BigNumber;
    sectionIndex: number;
    metricLookupTables: FormObjectiveOtherDetailsItemType;
    milestones: FormObjectiveOtherDetailsItemType;
    targets: FormObjectiveOtherDetailsItemType;
    tasks: FormObjectiveOtherDetailsItemType;
}
export interface FormObjectiveOtherDetailsTypeForceMandatory {
    formContentId: BigNumber;
    formDataId: BigNumber;
    itemId: BigNumber;
    sectionIndex: number;
    metricLookupTables: FormObjectiveOtherDetailsItemType;
    milestones: FormObjectiveOtherDetailsItemType;
    targets: FormObjectiveOtherDetailsItemType;
    tasks: FormObjectiveOtherDetailsItemType;
}
export declare namespace FormObjectiveOtherDetails {
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_CONTENT_ID: BigNumberField<FormObjectiveOtherDetails>;
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: BigNumberField<FormObjectiveOtherDetails>;
    /**
     * Static representation of the [[itemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_ID: BigNumberField<FormObjectiveOtherDetails>;
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_INDEX: NumberField<FormObjectiveOtherDetails>;
    /**
     * Static representation of the one-to-one navigation property [[metricLookupTables]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const METRIC_LOOKUP_TABLES: OneToOneLink<FormObjectiveOtherDetails, FormObjectiveOtherDetailsItem>;
    /**
     * Static representation of the one-to-one navigation property [[milestones]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MILESTONES: OneToOneLink<FormObjectiveOtherDetails, FormObjectiveOtherDetailsItem>;
    /**
     * Static representation of the one-to-one navigation property [[targets]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TARGETS: OneToOneLink<FormObjectiveOtherDetails, FormObjectiveOtherDetailsItem>;
    /**
     * Static representation of the one-to-one navigation property [[tasks]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TASKS: OneToOneLink<FormObjectiveOtherDetails, FormObjectiveOtherDetailsItem>;
    /**
     * All fields of the FormObjectiveOtherDetails entity.
     */
    const _allFields: Array<BigNumberField<FormObjectiveOtherDetails> | NumberField<FormObjectiveOtherDetails> | OneToOneLink<FormObjectiveOtherDetails, FormObjectiveOtherDetailsItem>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FormObjectiveOtherDetails>;
    /**
     * All key fields of the FormObjectiveOtherDetails entity.
     */
    const _keyFields: Array<Selectable<FormObjectiveOtherDetails>>;
    /**
     * Mapping of all key field names to the respective static field property FormObjectiveOtherDetails.
     */
    const _keys: {
        [keys: string]: Selectable<FormObjectiveOtherDetails>;
    };
}
//# sourceMappingURL=FormObjectiveOtherDetails.d.ts.map