import { MdfEnumValueRequestBuilder } from './MdfEnumValueRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "MDFEnumValue" of service "SFOData".
 */
export declare class MdfEnumValue extends Entity implements MdfEnumValueType {
    /**
     * Technical entity name for MdfEnumValue.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for MdfEnumValue.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * de_DE.
     * @nullable
     */
    deDe?: string;
    /**
     * en_DEBUG.
     * @nullable
     */
    enDebug?: string;
    /**
     * en_GB.
     * @nullable
     */
    enGb?: string;
    /**
     * en_US.
     * @nullable
     */
    enUs?: string;
    /**
     * es_ES.
     * @nullable
     */
    esEs?: string;
    /**
     * es_MX.
     * @nullable
     */
    esMx?: string;
    /**
     * fr_CA.
     * @nullable
     */
    frCa?: string;
    /**
     * fr_FR.
     * @nullable
     */
    frFr?: string;
    /**
     * it_IT.
     * @nullable
     */
    itIt?: string;
    /**
     * key.
     */
    key: string;
    /**
     * localized.
     * @nullable
     */
    localized?: string;
    /**
     * nl_NL.
     * @nullable
     */
    nlNl?: string;
    /**
     * pt_BR.
     * @nullable
     */
    ptBr?: string;
    /**
     * value.
     */
    value: string;
    /**
     * zh_CN.
     * @nullable
     */
    zhCn?: string;
    /**
     * Returns an entity builder to construct instances `MdfEnumValue`.
     * @returns A builder that constructs instances of entity type `MdfEnumValue`.
     */
    static builder(): EntityBuilderType<MdfEnumValue, MdfEnumValueTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `MdfEnumValue` entity type.
     * @returns A `MdfEnumValue` request builder.
     */
    static requestBuilder(): MdfEnumValueRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `MdfEnumValue`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `MdfEnumValue`.
     */
    static customField(fieldName: string): CustomField<MdfEnumValue>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface MdfEnumValueType {
    deDe?: string;
    enDebug?: string;
    enGb?: string;
    enUs?: string;
    esEs?: string;
    esMx?: string;
    frCa?: string;
    frFr?: string;
    itIt?: string;
    key: string;
    localized?: string;
    nlNl?: string;
    ptBr?: string;
    value: string;
    zhCn?: string;
}
export interface MdfEnumValueTypeForceMandatory {
    deDe: string;
    enDebug: string;
    enGb: string;
    enUs: string;
    esEs: string;
    esMx: string;
    frCa: string;
    frFr: string;
    itIt: string;
    key: string;
    localized: string;
    nlNl: string;
    ptBr: string;
    value: string;
    zhCn: string;
}
export declare namespace MdfEnumValue {
    /**
     * Static representation of the [[deDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DE_DE: StringField<MdfEnumValue>;
    /**
     * Static representation of the [[enDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EN_DEBUG: StringField<MdfEnumValue>;
    /**
     * Static representation of the [[enGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EN_GB: StringField<MdfEnumValue>;
    /**
     * Static representation of the [[enUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EN_US: StringField<MdfEnumValue>;
    /**
     * Static representation of the [[esEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ES_ES: StringField<MdfEnumValue>;
    /**
     * Static representation of the [[esMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ES_MX: StringField<MdfEnumValue>;
    /**
     * Static representation of the [[frCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FR_CA: StringField<MdfEnumValue>;
    /**
     * Static representation of the [[frFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FR_FR: StringField<MdfEnumValue>;
    /**
     * Static representation of the [[itIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IT_IT: StringField<MdfEnumValue>;
    /**
     * Static representation of the [[key]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const KEY: StringField<MdfEnumValue>;
    /**
     * Static representation of the [[localized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCALIZED: StringField<MdfEnumValue>;
    /**
     * Static representation of the [[nlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NL_NL: StringField<MdfEnumValue>;
    /**
     * Static representation of the [[ptBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PT_BR: StringField<MdfEnumValue>;
    /**
     * Static representation of the [[value]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALUE: StringField<MdfEnumValue>;
    /**
     * Static representation of the [[zhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ZH_CN: StringField<MdfEnumValue>;
    /**
     * All fields of the MdfEnumValue entity.
     */
    const _allFields: Array<StringField<MdfEnumValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<MdfEnumValue>;
    /**
     * All key fields of the MdfEnumValue entity.
     */
    const _keyFields: Array<Selectable<MdfEnumValue>>;
    /**
     * Mapping of all key field names to the respective static field property MdfEnumValue.
     */
    const _keys: {
        [keys: string]: Selectable<MdfEnumValue>;
    };
}
//# sourceMappingURL=MdfEnumValue.d.ts.map