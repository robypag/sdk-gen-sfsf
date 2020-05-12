import { TalentGraphicOptionRequestBuilder } from './TalentGraphicOptionRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "TalentGraphicOption" of service "SFOData".
 */
export declare class TalentGraphicOption extends Entity implements TalentGraphicOptionType {
    /**
     * Technical entity name for TalentGraphicOption.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TalentGraphicOption.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * dataImage.
     */
    dataImage: string;
    /**
     * dataIndex.
     */
    dataIndex: string;
    /**
     * dataLabel.
     */
    dataLabel: string;
    /**
     * dataShortLabel.
     */
    dataShortLabel: string;
    /**
     * dataValue.
     */
    dataValue: string;
    /**
     * gradientBackgroundColor.
     */
    gradientBackgroundColor: string;
    /**
     * optionIndex.
     */
    optionIndex: number;
    /**
     * optionKey.
     */
    optionKey: string;
    /**
     * optionLabel.
     */
    optionLabel: string;
    /**
     * optionName.
     */
    optionName: string;
    /**
     * optionScaleId.
     */
    optionScaleId: string;
    /**
     * optionTarget.
     */
    optionTarget: string;
    /**
     * optionType.
     */
    optionType: string;
    /**
     * Returns an entity builder to construct instances `TalentGraphicOption`.
     * @returns A builder that constructs instances of entity type `TalentGraphicOption`.
     */
    static builder(): EntityBuilderType<TalentGraphicOption, TalentGraphicOptionTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `TalentGraphicOption` entity type.
     * @returns A `TalentGraphicOption` request builder.
     */
    static requestBuilder(): TalentGraphicOptionRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TalentGraphicOption`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TalentGraphicOption`.
     */
    static customField(fieldName: string): CustomField<TalentGraphicOption>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface TalentGraphicOptionType {
    dataImage: string;
    dataIndex: string;
    dataLabel: string;
    dataShortLabel: string;
    dataValue: string;
    gradientBackgroundColor: string;
    optionIndex: number;
    optionKey: string;
    optionLabel: string;
    optionName: string;
    optionScaleId: string;
    optionTarget: string;
    optionType: string;
}
export interface TalentGraphicOptionTypeForceMandatory {
    dataImage: string;
    dataIndex: string;
    dataLabel: string;
    dataShortLabel: string;
    dataValue: string;
    gradientBackgroundColor: string;
    optionIndex: number;
    optionKey: string;
    optionLabel: string;
    optionName: string;
    optionScaleId: string;
    optionTarget: string;
    optionType: string;
}
export declare namespace TalentGraphicOption {
    /**
     * Static representation of the [[dataImage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATA_IMAGE: StringField<TalentGraphicOption>;
    /**
     * Static representation of the [[dataIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATA_INDEX: StringField<TalentGraphicOption>;
    /**
     * Static representation of the [[dataLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATA_LABEL: StringField<TalentGraphicOption>;
    /**
     * Static representation of the [[dataShortLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATA_SHORT_LABEL: StringField<TalentGraphicOption>;
    /**
     * Static representation of the [[dataValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATA_VALUE: StringField<TalentGraphicOption>;
    /**
     * Static representation of the [[gradientBackgroundColor]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GRADIENT_BACKGROUND_COLOR: StringField<TalentGraphicOption>;
    /**
     * Static representation of the [[optionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPTION_INDEX: NumberField<TalentGraphicOption>;
    /**
     * Static representation of the [[optionKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPTION_KEY: StringField<TalentGraphicOption>;
    /**
     * Static representation of the [[optionLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPTION_LABEL: StringField<TalentGraphicOption>;
    /**
     * Static representation of the [[optionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPTION_NAME: StringField<TalentGraphicOption>;
    /**
     * Static representation of the [[optionScaleId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPTION_SCALE_ID: StringField<TalentGraphicOption>;
    /**
     * Static representation of the [[optionTarget]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPTION_TARGET: StringField<TalentGraphicOption>;
    /**
     * Static representation of the [[optionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPTION_TYPE: StringField<TalentGraphicOption>;
    /**
     * All fields of the TalentGraphicOption entity.
     */
    const _allFields: Array<StringField<TalentGraphicOption> | NumberField<TalentGraphicOption>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<TalentGraphicOption>;
    /**
     * All key fields of the TalentGraphicOption entity.
     */
    const _keyFields: Array<Selectable<TalentGraphicOption>>;
    /**
     * Mapping of all key field names to the respective static field property TalentGraphicOption.
     */
    const _keys: {
        [keys: string]: Selectable<TalentGraphicOption>;
    };
}
//# sourceMappingURL=TalentGraphicOption.d.ts.map