import { OnboardingEquipmentTypeValueRequestBuilder } from './OnboardingEquipmentTypeValueRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "OnboardingEquipmentTypeValue" of service "SFOData".
 */
export declare class OnboardingEquipmentTypeValue extends Entity implements OnboardingEquipmentTypeValueType {
    /**
     * Technical entity name for OnboardingEquipmentTypeValue.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for OnboardingEquipmentTypeValue.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Code.
     * Maximum length: 128.
     */
    code: string;
    /**
     * Created By.
     * Maximum length: 100.
     * @nullable
     */
    createdBy?: string;
    /**
     * Created On.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * Description.
     * Maximum length: 150.
     * @nullable
     */
    descriptionDeDe?: string;
    /**
     * Description.
     * Maximum length: 150.
     * @nullable
     */
    descriptionDefaultValue?: string;
    /**
     * Description.
     * Maximum length: 150.
     * @nullable
     */
    descriptionEnDebug?: string;
    /**
     * Description.
     * Maximum length: 150.
     * @nullable
     */
    descriptionEnGb?: string;
    /**
     * Description.
     * Maximum length: 150.
     * @nullable
     */
    descriptionEnUs?: string;
    /**
     * Description.
     * Maximum length: 150.
     * @nullable
     */
    descriptionEsEs?: string;
    /**
     * Description.
     * Maximum length: 150.
     * @nullable
     */
    descriptionEsMx?: string;
    /**
     * Description.
     * Maximum length: 150.
     * @nullable
     */
    descriptionFrCa?: string;
    /**
     * Description.
     * Maximum length: 150.
     * @nullable
     */
    descriptionFrFr?: string;
    /**
     * Description.
     * Maximum length: 150.
     * @nullable
     */
    descriptionItIt?: string;
    /**
     * Description.
     * Maximum length: 150.
     * @nullable
     */
    descriptionLocalized?: string;
    /**
     * Description.
     * Maximum length: 150.
     * @nullable
     */
    descriptionNlNl?: string;
    /**
     * Description.
     * Maximum length: 150.
     * @nullable
     */
    descriptionPtBr?: string;
    /**
     * Description.
     * Maximum length: 150.
     * @nullable
     */
    descriptionZhCn?: string;
    /**
     * Suppress workflow?.
     * @nullable
     */
    equipmentNotRequired?: boolean;
    /**
     * Last Modified By.
     * Maximum length: 100.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * Last Modified Date.
     * @nullable
     */
    lastModifiedDateTime?: Moment;
    /**
     * Record Status.
     * Maximum length: 255.
     * @nullable
     */
    mdfSystemRecordStatus?: string;
    /**
     * Type.
     * Maximum length: 128.
     * @nullable
     */
    type?: string;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
     */
    descriptionTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[OnboardingEquipmentType_1]] entity.
     */
    typeNav: OnboardingEquipmentType_1;
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `OnboardingEquipmentTypeValue`.
     * @returns A builder that constructs instances of entity type `OnboardingEquipmentTypeValue`.
     */
    static builder(): EntityBuilderType<OnboardingEquipmentTypeValue, OnboardingEquipmentTypeValueTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `OnboardingEquipmentTypeValue` entity type.
     * @returns A `OnboardingEquipmentTypeValue` request builder.
     */
    static requestBuilder(): OnboardingEquipmentTypeValueRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `OnboardingEquipmentTypeValue`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `OnboardingEquipmentTypeValue`.
     */
    static customField(fieldName: string): CustomField<OnboardingEquipmentTypeValue>;
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
import { OnboardingEquipmentType_1, OnboardingEquipmentType_1Type } from './OnboardingEquipmentType_1';
import { WfRequest, WfRequestType } from './WfRequest';
export interface OnboardingEquipmentTypeValueType {
    code: string;
    createdBy?: string;
    createdDateTime?: Moment;
    descriptionDeDe?: string;
    descriptionDefaultValue?: string;
    descriptionEnDebug?: string;
    descriptionEnGb?: string;
    descriptionEnUs?: string;
    descriptionEsEs?: string;
    descriptionEsMx?: string;
    descriptionFrCa?: string;
    descriptionFrFr?: string;
    descriptionItIt?: string;
    descriptionLocalized?: string;
    descriptionNlNl?: string;
    descriptionPtBr?: string;
    descriptionZhCn?: string;
    equipmentNotRequired?: boolean;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    type?: string;
    createdByNav: UserType;
    descriptionTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    typeNav: OnboardingEquipmentType_1Type;
    wfRequestNav: WfRequestType[];
}
export interface OnboardingEquipmentTypeValueTypeForceMandatory {
    code: string;
    createdBy: string;
    createdDateTime: Moment;
    descriptionDeDe: string;
    descriptionDefaultValue: string;
    descriptionEnDebug: string;
    descriptionEnGb: string;
    descriptionEnUs: string;
    descriptionEsEs: string;
    descriptionEsMx: string;
    descriptionFrCa: string;
    descriptionFrFr: string;
    descriptionItIt: string;
    descriptionLocalized: string;
    descriptionNlNl: string;
    descriptionPtBr: string;
    descriptionZhCn: string;
    equipmentNotRequired: boolean;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    type: string;
    createdByNav: UserType;
    descriptionTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    typeNav: OnboardingEquipmentType_1Type;
    wfRequestNav: WfRequestType[];
}
export declare namespace OnboardingEquipmentTypeValue {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<OnboardingEquipmentTypeValue>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<OnboardingEquipmentTypeValue>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<OnboardingEquipmentTypeValue>;
    /**
     * Static representation of the [[descriptionDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_DE_DE: StringField<OnboardingEquipmentTypeValue>;
    /**
     * Static representation of the [[descriptionDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_DEFAULT_VALUE: StringField<OnboardingEquipmentTypeValue>;
    /**
     * Static representation of the [[descriptionEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_EN_DEBUG: StringField<OnboardingEquipmentTypeValue>;
    /**
     * Static representation of the [[descriptionEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_EN_GB: StringField<OnboardingEquipmentTypeValue>;
    /**
     * Static representation of the [[descriptionEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_EN_US: StringField<OnboardingEquipmentTypeValue>;
    /**
     * Static representation of the [[descriptionEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_ES_ES: StringField<OnboardingEquipmentTypeValue>;
    /**
     * Static representation of the [[descriptionEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_ES_MX: StringField<OnboardingEquipmentTypeValue>;
    /**
     * Static representation of the [[descriptionFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_FR_CA: StringField<OnboardingEquipmentTypeValue>;
    /**
     * Static representation of the [[descriptionFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_FR_FR: StringField<OnboardingEquipmentTypeValue>;
    /**
     * Static representation of the [[descriptionItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_IT_IT: StringField<OnboardingEquipmentTypeValue>;
    /**
     * Static representation of the [[descriptionLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_LOCALIZED: StringField<OnboardingEquipmentTypeValue>;
    /**
     * Static representation of the [[descriptionNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_NL_NL: StringField<OnboardingEquipmentTypeValue>;
    /**
     * Static representation of the [[descriptionPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_PT_BR: StringField<OnboardingEquipmentTypeValue>;
    /**
     * Static representation of the [[descriptionZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_ZH_CN: StringField<OnboardingEquipmentTypeValue>;
    /**
     * Static representation of the [[equipmentNotRequired]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EQUIPMENT_NOT_REQUIRED: BooleanField<OnboardingEquipmentTypeValue>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<OnboardingEquipmentTypeValue>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<OnboardingEquipmentTypeValue>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<OnboardingEquipmentTypeValue>;
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE: StringField<OnboardingEquipmentTypeValue>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<OnboardingEquipmentTypeValue, User>;
    /**
     * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_TRANSLATION_TEXT_NAV: Link<OnboardingEquipmentTypeValue, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<OnboardingEquipmentTypeValue, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<OnboardingEquipmentTypeValue, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[typeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE_NAV: OneToOneLink<OnboardingEquipmentTypeValue, OnboardingEquipmentType_1>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<OnboardingEquipmentTypeValue, WfRequest>;
    /**
     * All fields of the OnboardingEquipmentTypeValue entity.
     */
    const _allFields: Array<StringField<OnboardingEquipmentTypeValue> | DateField<OnboardingEquipmentTypeValue> | BooleanField<OnboardingEquipmentTypeValue> | OneToOneLink<OnboardingEquipmentTypeValue, User> | Link<OnboardingEquipmentTypeValue, MdfLocalizedValue> | OneToOneLink<OnboardingEquipmentTypeValue, MdfEnumValue> | OneToOneLink<OnboardingEquipmentTypeValue, OnboardingEquipmentType_1> | Link<OnboardingEquipmentTypeValue, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<OnboardingEquipmentTypeValue>;
    /**
     * All key fields of the OnboardingEquipmentTypeValue entity.
     */
    const _keyFields: Array<Selectable<OnboardingEquipmentTypeValue>>;
    /**
     * Mapping of all key field names to the respective static field property OnboardingEquipmentTypeValue.
     */
    const _keys: {
        [keys: string]: Selectable<OnboardingEquipmentTypeValue>;
    };
}
//# sourceMappingURL=OnboardingEquipmentTypeValue.d.ts.map