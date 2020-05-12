import { FoPayComponentRequestBuilder } from './FoPayComponentRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FOPayComponent" of service "SFOData".
 */
export declare class FoPayComponent extends Entity implements FoPayComponentType {
    /**
     * Technical entity name for FoPayComponent.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoPayComponent.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Base Pay Component Group.
     * @nullable
     */
    basePayComponentGroup?: string;
    /**
     * Can Override.
     * @nullable
     */
    canOverride?: boolean;
    /**
     * companyFlx.
     * @nullable
     */
    companyFlx?: string;
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
     * Display on Self Service.
     * @nullable
     */
    displayOnSelfService?: boolean;
    /**
     * End Date.
     * @nullable
     */
    endDate?: Moment;
    /**
     * Pay Component ID.
     * Maximum length: 32.
     */
    externalCode: string;
    /**
     * Frequency.
     * @nullable
     */
    frequencyCode?: string;
    /**
     * Is Earning.
     * @nullable
     */
    isEarning?: boolean;
    /**
     * isEndDatedPayment.
     * @nullable
     */
    isEndDatedPayment?: boolean;
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
     * Maximum Decimal Places.
     * @nullable
     */
    maxFractionDigits?: BigNumber;
    /**
     * Name.
     * Maximum length: 32.
     * @nullable
     */
    name?: string;
    /**
     * Pay Component Type.
     * Maximum length: 32.
     * @nullable
     */
    payComponentType?: string;
    /**
     * Pay Component Value.
     * @nullable
     */
    payComponentValue?: number;
    /**
     * Recurring.
     * @nullable
     */
    recurring?: boolean;
    /**
     * Self Service Description.
     * Maximum length: 32.
     * @nullable
     */
    selfServiceDescription?: string;
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
     * Target.
     * @nullable
     */
    target?: boolean;
    /**
     * Tax Treatment.
     * Maximum length: 32.
     * @nullable
     */
    taxTreatment?: string;
    /**
     * Used for Comp Planning.
     * Maximum length: 32.
     * @nullable
     */
    usedForCompPlanning?: string;
    /**
     * One-to-one navigation property to the [[FoPayComponentGroup]] entity.
     */
    basePayComponentGroupNav: FoPayComponentGroup;
    /**
     * One-to-many navigation property to the [[FoCompany]] entity.
     */
    companyFlxNav: FoCompany[];
    /**
     * One-to-one navigation property to the [[FoTranslation]] entity.
     */
    descriptionTranslationNav: FoTranslation;
    /**
     * One-to-one navigation property to the [[FoFrequency]] entity.
     */
    frequencyCodeNav: FoFrequency;
    /**
     * One-to-one navigation property to the [[FoTranslation]] entity.
     */
    nameTranslationNav: FoTranslation;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    taxTreatmentNav: PicklistOption;
    /**
     * Returns an entity builder to construct instances `FoPayComponent`.
     * @returns A builder that constructs instances of entity type `FoPayComponent`.
     */
    static builder(): EntityBuilderType<FoPayComponent, FoPayComponentTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FoPayComponent` entity type.
     * @returns A `FoPayComponent` request builder.
     */
    static requestBuilder(): FoPayComponentRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoPayComponent`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoPayComponent`.
     */
    static customField(fieldName: string): CustomField<FoPayComponent>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { FoPayComponentGroup, FoPayComponentGroupType } from './FoPayComponentGroup';
import { FoCompany, FoCompanyType } from './FoCompany';
import { FoTranslation, FoTranslationType } from './FoTranslation';
import { FoFrequency, FoFrequencyType } from './FoFrequency';
import { PicklistOption, PicklistOptionType } from './PicklistOption';
export interface FoPayComponentType {
    basePayComponentGroup?: string;
    canOverride?: boolean;
    companyFlx?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    createdOn?: Moment;
    currency?: string;
    description?: string;
    displayOnSelfService?: boolean;
    endDate?: Moment;
    externalCode: string;
    frequencyCode?: string;
    isEarning?: boolean;
    isEndDatedPayment?: boolean;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    lastModifiedOn?: Moment;
    maxFractionDigits?: BigNumber;
    name?: string;
    payComponentType?: string;
    payComponentValue?: number;
    recurring?: boolean;
    selfServiceDescription?: string;
    startDate: Moment;
    status?: string;
    target?: boolean;
    taxTreatment?: string;
    usedForCompPlanning?: string;
    basePayComponentGroupNav: FoPayComponentGroupType;
    companyFlxNav: FoCompanyType[];
    descriptionTranslationNav: FoTranslationType;
    frequencyCodeNav: FoFrequencyType;
    nameTranslationNav: FoTranslationType;
    taxTreatmentNav: PicklistOptionType;
}
export interface FoPayComponentTypeForceMandatory {
    basePayComponentGroup: string;
    canOverride: boolean;
    companyFlx: string;
    createdBy: string;
    createdDateTime: Moment;
    createdOn: Moment;
    currency: string;
    description: string;
    displayOnSelfService: boolean;
    endDate: Moment;
    externalCode: string;
    frequencyCode: string;
    isEarning: boolean;
    isEndDatedPayment: boolean;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    lastModifiedOn: Moment;
    maxFractionDigits: BigNumber;
    name: string;
    payComponentType: string;
    payComponentValue: number;
    recurring: boolean;
    selfServiceDescription: string;
    startDate: Moment;
    status: string;
    target: boolean;
    taxTreatment: string;
    usedForCompPlanning: string;
    basePayComponentGroupNav: FoPayComponentGroupType;
    companyFlxNav: FoCompanyType[];
    descriptionTranslationNav: FoTranslationType;
    frequencyCodeNav: FoFrequencyType;
    nameTranslationNav: FoTranslationType;
    taxTreatmentNav: PicklistOptionType;
}
export declare namespace FoPayComponent {
    /**
     * Static representation of the [[basePayComponentGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BASE_PAY_COMPONENT_GROUP: StringField<FoPayComponent>;
    /**
     * Static representation of the [[canOverride]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CAN_OVERRIDE: BooleanField<FoPayComponent>;
    /**
     * Static representation of the [[companyFlx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY_FLX: StringField<FoPayComponent>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<FoPayComponent>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<FoPayComponent>;
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_ON: DateField<FoPayComponent>;
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY: StringField<FoPayComponent>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<FoPayComponent>;
    /**
     * Static representation of the [[displayOnSelfService]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISPLAY_ON_SELF_SERVICE: BooleanField<FoPayComponent>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<FoPayComponent>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<FoPayComponent>;
    /**
     * Static representation of the [[frequencyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FREQUENCY_CODE: StringField<FoPayComponent>;
    /**
     * Static representation of the [[isEarning]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_EARNING: BooleanField<FoPayComponent>;
    /**
     * Static representation of the [[isEndDatedPayment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_END_DATED_PAYMENT: BooleanField<FoPayComponent>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<FoPayComponent>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<FoPayComponent>;
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_ON: DateField<FoPayComponent>;
    /**
     * Static representation of the [[maxFractionDigits]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAX_FRACTION_DIGITS: BigNumberField<FoPayComponent>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<FoPayComponent>;
    /**
     * Static representation of the [[payComponentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_COMPONENT_TYPE: StringField<FoPayComponent>;
    /**
     * Static representation of the [[payComponentValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_COMPONENT_VALUE: NumberField<FoPayComponent>;
    /**
     * Static representation of the [[recurring]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECURRING: BooleanField<FoPayComponent>;
    /**
     * Static representation of the [[selfServiceDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SELF_SERVICE_DESCRIPTION: StringField<FoPayComponent>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<FoPayComponent>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<FoPayComponent>;
    /**
     * Static representation of the [[target]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TARGET: BooleanField<FoPayComponent>;
    /**
     * Static representation of the [[taxTreatment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_TREATMENT: StringField<FoPayComponent>;
    /**
     * Static representation of the [[usedForCompPlanning]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USED_FOR_COMP_PLANNING: StringField<FoPayComponent>;
    /**
     * Static representation of the one-to-one navigation property [[basePayComponentGroupNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BASE_PAY_COMPONENT_GROUP_NAV: OneToOneLink<FoPayComponent, FoPayComponentGroup>;
    /**
     * Static representation of the one-to-many navigation property [[companyFlxNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY_FLX_NAV: Link<FoPayComponent, FoCompany>;
    /**
     * Static representation of the one-to-one navigation property [[descriptionTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_TRANSLATION_NAV: OneToOneLink<FoPayComponent, FoTranslation>;
    /**
     * Static representation of the one-to-one navigation property [[frequencyCodeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FREQUENCY_CODE_NAV: OneToOneLink<FoPayComponent, FoFrequency>;
    /**
     * Static representation of the one-to-one navigation property [[nameTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_TRANSLATION_NAV: OneToOneLink<FoPayComponent, FoTranslation>;
    /**
     * Static representation of the one-to-one navigation property [[taxTreatmentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_TREATMENT_NAV: OneToOneLink<FoPayComponent, PicklistOption>;
    /**
     * All fields of the FoPayComponent entity.
     */
    const _allFields: Array<StringField<FoPayComponent> | BooleanField<FoPayComponent> | DateField<FoPayComponent> | BigNumberField<FoPayComponent> | NumberField<FoPayComponent> | OneToOneLink<FoPayComponent, FoPayComponentGroup> | Link<FoPayComponent, FoCompany> | OneToOneLink<FoPayComponent, FoTranslation> | OneToOneLink<FoPayComponent, FoFrequency> | OneToOneLink<FoPayComponent, PicklistOption>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FoPayComponent>;
    /**
     * All key fields of the FoPayComponent entity.
     */
    const _keyFields: Array<Selectable<FoPayComponent>>;
    /**
     * Mapping of all key field names to the respective static field property FoPayComponent.
     */
    const _keys: {
        [keys: string]: Selectable<FoPayComponent>;
    };
}
//# sourceMappingURL=FoPayComponent.d.ts.map