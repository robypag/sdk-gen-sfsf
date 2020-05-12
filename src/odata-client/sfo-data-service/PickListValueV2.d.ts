import { PickListValueV2RequestBuilder } from './PickListValueV2RequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "PickListValueV2" of service "SFOData".
 */
export declare class PickListValueV2 extends Entity implements PickListValueV2Type {
    /**
     * Technical entity name for PickListValueV2.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PickListValueV2.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Picklist_Effective Start Date.
     */
    pickListV2EffectiveStartDate: Moment;
    /**
     * Picklist_Code.
     * Maximum length: 128.
     */
    pickListV2Id: string;
    /**
     * createdBy.
     * Maximum length: 255.
     * @nullable
     */
    createdBy?: string;
    /**
     * createdDate.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * External Code.
     * Maximum length: 128.
     */
    externalCode: string;
    /**
     * Sort Order (L Value).
     * @nullable
     */
    lValue?: BigNumber;
    /**
     * Label.
     * Maximum length: 255.
     * @nullable
     */
    labelDeDe?: string;
    /**
     * Label.
     * Maximum length: 255.
     * @nullable
     */
    labelDefaultValue?: string;
    /**
     * Label.
     * Maximum length: 255.
     * @nullable
     */
    labelEnDebug?: string;
    /**
     * Label.
     * Maximum length: 255.
     * @nullable
     */
    labelEnGb?: string;
    /**
     * Label.
     * Maximum length: 255.
     * @nullable
     */
    labelEnUs?: string;
    /**
     * Label.
     * Maximum length: 255.
     * @nullable
     */
    labelEsEs?: string;
    /**
     * Label.
     * Maximum length: 255.
     * @nullable
     */
    labelEsMx?: string;
    /**
     * Label.
     * Maximum length: 255.
     * @nullable
     */
    labelFrCa?: string;
    /**
     * Label.
     * Maximum length: 255.
     * @nullable
     */
    labelFrFr?: string;
    /**
     * Label.
     * Maximum length: 255.
     * @nullable
     */
    labelItIt?: string;
    /**
     * Label.
     * Maximum length: 255.
     * @nullable
     */
    labelLocalized?: string;
    /**
     * Label.
     * Maximum length: 255.
     * @nullable
     */
    labelNlNl?: string;
    /**
     * Label.
     * Maximum length: 255.
     * @nullable
     */
    labelPtBr?: string;
    /**
     * Label.
     * Maximum length: 255.
     * @nullable
     */
    labelZhCn?: string;
    /**
     * lastModifiedBy.
     * Maximum length: 255.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * lastModifiedDate.
     * @nullable
     */
    lastModifiedDateTime?: Moment;
    /**
     * Status(legacy).
     * @nullable
     */
    legacyStatus?: BigNumber;
    /**
     * Max value.
     * @nullable
     */
    maxVal?: BigNumber;
    /**
     * Record Status.
     * Maximum length: 255.
     * @nullable
     */
    mdfSystemRecordStatus?: string;
    /**
     * Min value.
     * @nullable
     */
    minVal?: BigNumber;
    /**
     * Non-unique External Code.
     * Maximum length: 255.
     * @nullable
     */
    nonUniqueExternalCode?: string;
    /**
     * Value.
     * @nullable
     */
    optValue?: BigNumber;
    /**
     * Option ID.
     * @nullable
     */
    optionId?: BigNumber;
    /**
     * Parent Picklist Value.
     * Maximum length: 128.
     * @nullable
     */
    parentPickListValue?: string;
    /**
     * R Value.
     * @nullable
     */
    rValue?: BigNumber;
    /**
     * Status.
     * Maximum length: 255.
     * @nullable
     */
    status?: string;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
     */
    labelTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * One-to-many navigation property to the [[PickListValueV2]] entity.
     */
    parentPickListValueNav: PickListValueV2[];
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    statusNav: MdfEnumValue;
    /**
     * Returns an entity builder to construct instances `PickListValueV2`.
     * @returns A builder that constructs instances of entity type `PickListValueV2`.
     */
    static builder(): EntityBuilderType<PickListValueV2, PickListValueV2TypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `PickListValueV2` entity type.
     * @returns A `PickListValueV2` request builder.
     */
    static requestBuilder(): PickListValueV2RequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PickListValueV2`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PickListValueV2`.
     */
    static customField(fieldName: string): CustomField<PickListValueV2>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
export interface PickListValueV2Type {
    pickListV2EffectiveStartDate: Moment;
    pickListV2Id: string;
    createdBy?: string;
    createdDateTime?: Moment;
    externalCode: string;
    lValue?: BigNumber;
    labelDeDe?: string;
    labelDefaultValue?: string;
    labelEnDebug?: string;
    labelEnGb?: string;
    labelEnUs?: string;
    labelEsEs?: string;
    labelEsMx?: string;
    labelFrCa?: string;
    labelFrFr?: string;
    labelItIt?: string;
    labelLocalized?: string;
    labelNlNl?: string;
    labelPtBr?: string;
    labelZhCn?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    legacyStatus?: BigNumber;
    maxVal?: BigNumber;
    mdfSystemRecordStatus?: string;
    minVal?: BigNumber;
    nonUniqueExternalCode?: string;
    optValue?: BigNumber;
    optionId?: BigNumber;
    parentPickListValue?: string;
    rValue?: BigNumber;
    status?: string;
    createdByNav: UserType;
    labelTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    parentPickListValueNav: PickListValueV2Type[];
    statusNav: MdfEnumValueType;
}
export interface PickListValueV2TypeForceMandatory {
    pickListV2EffectiveStartDate: Moment;
    pickListV2Id: string;
    createdBy: string;
    createdDateTime: Moment;
    externalCode: string;
    lValue: BigNumber;
    labelDeDe: string;
    labelDefaultValue: string;
    labelEnDebug: string;
    labelEnGb: string;
    labelEnUs: string;
    labelEsEs: string;
    labelEsMx: string;
    labelFrCa: string;
    labelFrFr: string;
    labelItIt: string;
    labelLocalized: string;
    labelNlNl: string;
    labelPtBr: string;
    labelZhCn: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    legacyStatus: BigNumber;
    maxVal: BigNumber;
    mdfSystemRecordStatus: string;
    minVal: BigNumber;
    nonUniqueExternalCode: string;
    optValue: BigNumber;
    optionId: BigNumber;
    parentPickListValue: string;
    rValue: BigNumber;
    status: string;
    createdByNav: UserType;
    labelTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    parentPickListValueNav: PickListValueV2Type[];
    statusNav: MdfEnumValueType;
}
export declare namespace PickListValueV2 {
    /**
     * Static representation of the [[pickListV2EffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PICK_LIST_V_2_EFFECTIVE_START_DATE: DateField<PickListValueV2>;
    /**
     * Static representation of the [[pickListV2Id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PICK_LIST_V_2_ID: StringField<PickListValueV2>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<PickListValueV2>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<PickListValueV2>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<PickListValueV2>;
    /**
     * Static representation of the [[lValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const L_VALUE: BigNumberField<PickListValueV2>;
    /**
     * Static representation of the [[labelDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LABEL_DE_DE: StringField<PickListValueV2>;
    /**
     * Static representation of the [[labelDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LABEL_DEFAULT_VALUE: StringField<PickListValueV2>;
    /**
     * Static representation of the [[labelEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LABEL_EN_DEBUG: StringField<PickListValueV2>;
    /**
     * Static representation of the [[labelEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LABEL_EN_GB: StringField<PickListValueV2>;
    /**
     * Static representation of the [[labelEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LABEL_EN_US: StringField<PickListValueV2>;
    /**
     * Static representation of the [[labelEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LABEL_ES_ES: StringField<PickListValueV2>;
    /**
     * Static representation of the [[labelEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LABEL_ES_MX: StringField<PickListValueV2>;
    /**
     * Static representation of the [[labelFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LABEL_FR_CA: StringField<PickListValueV2>;
    /**
     * Static representation of the [[labelFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LABEL_FR_FR: StringField<PickListValueV2>;
    /**
     * Static representation of the [[labelItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LABEL_IT_IT: StringField<PickListValueV2>;
    /**
     * Static representation of the [[labelLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LABEL_LOCALIZED: StringField<PickListValueV2>;
    /**
     * Static representation of the [[labelNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LABEL_NL_NL: StringField<PickListValueV2>;
    /**
     * Static representation of the [[labelPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LABEL_PT_BR: StringField<PickListValueV2>;
    /**
     * Static representation of the [[labelZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LABEL_ZH_CN: StringField<PickListValueV2>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<PickListValueV2>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<PickListValueV2>;
    /**
     * Static representation of the [[legacyStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEGACY_STATUS: BigNumberField<PickListValueV2>;
    /**
     * Static representation of the [[maxVal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAX_VAL: BigNumberField<PickListValueV2>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<PickListValueV2>;
    /**
     * Static representation of the [[minVal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MIN_VAL: BigNumberField<PickListValueV2>;
    /**
     * Static representation of the [[nonUniqueExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NON_UNIQUE_EXTERNAL_CODE: StringField<PickListValueV2>;
    /**
     * Static representation of the [[optValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPT_VALUE: BigNumberField<PickListValueV2>;
    /**
     * Static representation of the [[optionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPTION_ID: BigNumberField<PickListValueV2>;
    /**
     * Static representation of the [[parentPickListValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARENT_PICK_LIST_VALUE: StringField<PickListValueV2>;
    /**
     * Static representation of the [[rValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const R_VALUE: BigNumberField<PickListValueV2>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<PickListValueV2>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<PickListValueV2, User>;
    /**
     * Static representation of the one-to-many navigation property [[labelTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LABEL_TRANSLATION_TEXT_NAV: Link<PickListValueV2, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<PickListValueV2, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PickListValueV2, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[parentPickListValueNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARENT_PICK_LIST_VALUE_NAV: Link<PickListValueV2, PickListValueV2>;
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAV: OneToOneLink<PickListValueV2, MdfEnumValue>;
    /**
     * All fields of the PickListValueV2 entity.
     */
    const _allFields: Array<DateField<PickListValueV2> | StringField<PickListValueV2> | BigNumberField<PickListValueV2> | OneToOneLink<PickListValueV2, User> | Link<PickListValueV2, MdfLocalizedValue> | OneToOneLink<PickListValueV2, MdfEnumValue> | Link<PickListValueV2, PickListValueV2>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<PickListValueV2>;
    /**
     * All key fields of the PickListValueV2 entity.
     */
    const _keyFields: Array<Selectable<PickListValueV2>>;
    /**
     * Mapping of all key field names to the respective static field property PickListValueV2.
     */
    const _keys: {
        [keys: string]: Selectable<PickListValueV2>;
    };
}
//# sourceMappingURL=PickListValueV2.d.ts.map