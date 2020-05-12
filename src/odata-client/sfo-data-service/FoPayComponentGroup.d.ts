import { FoPayComponentGroupRequestBuilder } from './FoPayComponentGroupRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FOPayComponentGroup" of service "SFOData".
 */
export declare class FoPayComponentGroup extends Entity implements FoPayComponentGroupType {
    /**
     * Technical entity name for FoPayComponentGroup.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoPayComponentGroup.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Created By.
     * Maximum length: 100.
     * @nullable
     */
    createdBy?: string;
    /**
     * Created Date Time.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * Created On.
     * @nullable
     */
    createdOn?: Moment;
    /**
     * Currency.
     * @nullable
     */
    currency?: string;
    /**
     * Description.
     * Maximum length: 128.
     * @nullable
     */
    description?: string;
    /**
     * End Date.
     * @nullable
     */
    endDate?: Moment;
    /**
     * Pay Component Group ID.
     * Maximum length: 32.
     */
    externalCode: string;
    /**
     * Last Modified By.
     * Maximum length: 100.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * Last Modified Date Time.
     * @nullable
     */
    lastModifiedDateTime?: Moment;
    /**
     * Last Modified On.
     * @nullable
     */
    lastModifiedOn?: Moment;
    /**
     * Name.
     * Maximum length: 32.
     * @nullable
     */
    name?: string;
    /**
     * Pay Component ID.
     * @nullable
     */
    payComponentFlx?: string;
    /**
     * Display on Comp UI.
     * @nullable
     */
    showOnCompUi?: boolean;
    /**
     * sortOrder.
     * @nullable
     */
    sortOrder?: number;
    /**
     * Start Date.
     */
    startDate: Moment;
    /**
     * Status.
     * @nullable
     */
    status?: string;
    /**
     * Use for Comparatio Calculation.
     * @nullable
     */
    useForComparatioCalc?: boolean;
    /**
     * Use for Range Penetration.
     * @nullable
     */
    useForRangePenetration?: boolean;
    /**
     * One-to-one navigation property to the [[FoTranslation]] entity.
     */
    descriptionTranslationNav: FoTranslation;
    /**
     * One-to-one navigation property to the [[FoTranslation]] entity.
     */
    nameTranslationNav: FoTranslation;
    /**
     * One-to-many navigation property to the [[FoPayComponent]] entity.
     */
    payComponentFlxNav: FoPayComponent[];
    /**
     * Returns an entity builder to construct instances `FoPayComponentGroup`.
     * @returns A builder that constructs instances of entity type `FoPayComponentGroup`.
     */
    static builder(): EntityBuilderType<FoPayComponentGroup, FoPayComponentGroupTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FoPayComponentGroup` entity type.
     * @returns A `FoPayComponentGroup` request builder.
     */
    static requestBuilder(): FoPayComponentGroupRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoPayComponentGroup`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoPayComponentGroup`.
     */
    static customField(fieldName: string): CustomField<FoPayComponentGroup>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { FoTranslation, FoTranslationType } from './FoTranslation';
import { FoPayComponent, FoPayComponentType } from './FoPayComponent';
export interface FoPayComponentGroupType {
    createdBy?: string;
    createdDateTime?: Moment;
    createdOn?: Moment;
    currency?: string;
    description?: string;
    endDate?: Moment;
    externalCode: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    lastModifiedOn?: Moment;
    name?: string;
    payComponentFlx?: string;
    showOnCompUi?: boolean;
    sortOrder?: number;
    startDate: Moment;
    status?: string;
    useForComparatioCalc?: boolean;
    useForRangePenetration?: boolean;
    descriptionTranslationNav: FoTranslationType;
    nameTranslationNav: FoTranslationType;
    payComponentFlxNav: FoPayComponentType[];
}
export interface FoPayComponentGroupTypeForceMandatory {
    createdBy: string;
    createdDateTime: Moment;
    createdOn: Moment;
    currency: string;
    description: string;
    endDate: Moment;
    externalCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    lastModifiedOn: Moment;
    name: string;
    payComponentFlx: string;
    showOnCompUi: boolean;
    sortOrder: number;
    startDate: Moment;
    status: string;
    useForComparatioCalc: boolean;
    useForRangePenetration: boolean;
    descriptionTranslationNav: FoTranslationType;
    nameTranslationNav: FoTranslationType;
    payComponentFlxNav: FoPayComponentType[];
}
export declare namespace FoPayComponentGroup {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<FoPayComponentGroup>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<FoPayComponentGroup>;
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_ON: DateField<FoPayComponentGroup>;
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY: StringField<FoPayComponentGroup>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<FoPayComponentGroup>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<FoPayComponentGroup>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<FoPayComponentGroup>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<FoPayComponentGroup>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<FoPayComponentGroup>;
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_ON: DateField<FoPayComponentGroup>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<FoPayComponentGroup>;
    /**
     * Static representation of the [[payComponentFlx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_COMPONENT_FLX: StringField<FoPayComponentGroup>;
    /**
     * Static representation of the [[showOnCompUi]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHOW_ON_COMP_UI: BooleanField<FoPayComponentGroup>;
    /**
     * Static representation of the [[sortOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SORT_ORDER: NumberField<FoPayComponentGroup>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<FoPayComponentGroup>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<FoPayComponentGroup>;
    /**
     * Static representation of the [[useForComparatioCalc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USE_FOR_COMPARATIO_CALC: BooleanField<FoPayComponentGroup>;
    /**
     * Static representation of the [[useForRangePenetration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USE_FOR_RANGE_PENETRATION: BooleanField<FoPayComponentGroup>;
    /**
     * Static representation of the one-to-one navigation property [[descriptionTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_TRANSLATION_NAV: OneToOneLink<FoPayComponentGroup, FoTranslation>;
    /**
     * Static representation of the one-to-one navigation property [[nameTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_TRANSLATION_NAV: OneToOneLink<FoPayComponentGroup, FoTranslation>;
    /**
     * Static representation of the one-to-many navigation property [[payComponentFlxNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_COMPONENT_FLX_NAV: Link<FoPayComponentGroup, FoPayComponent>;
    /**
     * All fields of the FoPayComponentGroup entity.
     */
    const _allFields: Array<StringField<FoPayComponentGroup> | DateField<FoPayComponentGroup> | BooleanField<FoPayComponentGroup> | NumberField<FoPayComponentGroup> | OneToOneLink<FoPayComponentGroup, FoTranslation> | Link<FoPayComponentGroup, FoPayComponent>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FoPayComponentGroup>;
    /**
     * All key fields of the FoPayComponentGroup entity.
     */
    const _keyFields: Array<Selectable<FoPayComponentGroup>>;
    /**
     * Mapping of all key field names to the respective static field property FoPayComponentGroup.
     */
    const _keys: {
        [keys: string]: Selectable<FoPayComponentGroup>;
    };
}
//# sourceMappingURL=FoPayComponentGroup.d.ts.map