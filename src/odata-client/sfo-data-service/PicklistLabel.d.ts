import { PicklistLabelRequestBuilder } from './PicklistLabelRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "PicklistLabel" of service "SFOData".
 */
export declare class PicklistLabel extends Entity implements PicklistLabelType {
    /**
     * Technical entity name for PicklistLabel.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PicklistLabel.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * id.
     * @nullable
     */
    id?: BigNumber;
    /**
     * label.
     * Maximum length: 255.
     * @nullable
     */
    label?: string;
    /**
     * locale.
     * Maximum length: 32.
     */
    locale: string;
    /**
     * optionId.
     */
    optionId: BigNumber;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    picklistOption: PicklistOption;
    /**
     * Returns an entity builder to construct instances `PicklistLabel`.
     * @returns A builder that constructs instances of entity type `PicklistLabel`.
     */
    static builder(): EntityBuilderType<PicklistLabel, PicklistLabelTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `PicklistLabel` entity type.
     * @returns A `PicklistLabel` request builder.
     */
    static requestBuilder(): PicklistLabelRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PicklistLabel`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PicklistLabel`.
     */
    static customField(fieldName: string): CustomField<PicklistLabel>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { PicklistOption, PicklistOptionType } from './PicklistOption';
export interface PicklistLabelType {
    id?: BigNumber;
    label?: string;
    locale: string;
    optionId: BigNumber;
    picklistOption: PicklistOptionType;
}
export interface PicklistLabelTypeForceMandatory {
    id: BigNumber;
    label: string;
    locale: string;
    optionId: BigNumber;
    picklistOption: PicklistOptionType;
}
export declare namespace PicklistLabel {
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ID: BigNumberField<PicklistLabel>;
    /**
     * Static representation of the [[label]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LABEL: StringField<PicklistLabel>;
    /**
     * Static representation of the [[locale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCALE: StringField<PicklistLabel>;
    /**
     * Static representation of the [[optionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPTION_ID: BigNumberField<PicklistLabel>;
    /**
     * Static representation of the one-to-one navigation property [[picklistOption]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PICKLIST_OPTION: OneToOneLink<PicklistLabel, PicklistOption>;
    /**
     * All fields of the PicklistLabel entity.
     */
    const _allFields: Array<BigNumberField<PicklistLabel> | StringField<PicklistLabel> | OneToOneLink<PicklistLabel, PicklistOption>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<PicklistLabel>;
    /**
     * All key fields of the PicklistLabel entity.
     */
    const _keyFields: Array<Selectable<PicklistLabel>>;
    /**
     * Mapping of all key field names to the respective static field property PicklistLabel.
     */
    const _keys: {
        [keys: string]: Selectable<PicklistLabel>;
    };
}
//# sourceMappingURL=PicklistLabel.d.ts.map