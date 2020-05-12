import { Background_BenefitselectionRequestBuilder } from './Background_BenefitselectionRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Background_Benefitselection" of service "SFOData".
 */
export declare class Background_Benefitselection extends Entity implements Background_BenefitselectionType {
    /**
     * Technical entity name for Background_Benefitselection.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Background_Benefitselection.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * backgroundElementId.
     */
    backgroundElementId: BigNumber;
    /**
     * bgOrderPos.
     */
    bgOrderPos: BigNumber;
    /**
     * Dental Plan.
     */
    dental: string;
    /**
     * Disabled?.
     */
    depdisability: string;
    /**
     * Gender.
     */
    depgender: string;
    /**
     * Dependent Name.
     */
    depname: string;
    /**
     * National ID.
     */
    depnationalid: string;
    /**
     * Smoker?.
     */
    depsmoke: string;
    /**
     * Student?.
     */
    depstudent: string;
    /**
     * Birth Date.
     */
    endDate: Moment;
    /**
     * Health Plan.
     */
    health: string;
    /**
     * Last Modified Date.
     */
    lastModifiedDate: Moment;
    /**
     * Relation.
     */
    relation: string;
    /**
     * userId.
     */
    userId: string;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    depdisabilityNav: PicklistOption;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    depsmokeNav: PicklistOption;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    depstudentNav: PicklistOption;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    relationNav: PicklistOption;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    userIdNav: User;
    /**
     * Returns an entity builder to construct instances `Background_Benefitselection`.
     * @returns A builder that constructs instances of entity type `Background_Benefitselection`.
     */
    static builder(): EntityBuilderType<Background_Benefitselection, Background_BenefitselectionTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Background_Benefitselection` entity type.
     * @returns A `Background_Benefitselection` request builder.
     */
    static requestBuilder(): Background_BenefitselectionRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_Benefitselection`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Background_Benefitselection`.
     */
    static customField(fieldName: string): CustomField<Background_Benefitselection>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { PicklistOption, PicklistOptionType } from './PicklistOption';
import { User, UserType } from './User';
export interface Background_BenefitselectionType {
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    dental: string;
    depdisability: string;
    depgender: string;
    depname: string;
    depnationalid: string;
    depsmoke: string;
    depstudent: string;
    endDate: Moment;
    health: string;
    lastModifiedDate: Moment;
    relation: string;
    userId: string;
    depdisabilityNav: PicklistOptionType;
    depsmokeNav: PicklistOptionType;
    depstudentNav: PicklistOptionType;
    relationNav: PicklistOptionType;
    userIdNav: UserType;
}
export interface Background_BenefitselectionTypeForceMandatory {
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    dental: string;
    depdisability: string;
    depgender: string;
    depname: string;
    depnationalid: string;
    depsmoke: string;
    depstudent: string;
    endDate: Moment;
    health: string;
    lastModifiedDate: Moment;
    relation: string;
    userId: string;
    depdisabilityNav: PicklistOptionType;
    depsmokeNav: PicklistOptionType;
    depstudentNav: PicklistOptionType;
    relationNav: PicklistOptionType;
    userIdNav: UserType;
}
export declare namespace Background_Benefitselection {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BACKGROUND_ELEMENT_ID: BigNumberField<Background_Benefitselection>;
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BG_ORDER_POS: BigNumberField<Background_Benefitselection>;
    /**
     * Static representation of the [[dental]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DENTAL: StringField<Background_Benefitselection>;
    /**
     * Static representation of the [[depdisability]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPDISABILITY: StringField<Background_Benefitselection>;
    /**
     * Static representation of the [[depgender]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPGENDER: StringField<Background_Benefitselection>;
    /**
     * Static representation of the [[depname]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPNAME: StringField<Background_Benefitselection>;
    /**
     * Static representation of the [[depnationalid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPNATIONALID: StringField<Background_Benefitselection>;
    /**
     * Static representation of the [[depsmoke]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPSMOKE: StringField<Background_Benefitselection>;
    /**
     * Static representation of the [[depstudent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPSTUDENT: StringField<Background_Benefitselection>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<Background_Benefitselection>;
    /**
     * Static representation of the [[health]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HEALTH: StringField<Background_Benefitselection>;
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE: DateField<Background_Benefitselection>;
    /**
     * Static representation of the [[relation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RELATION: StringField<Background_Benefitselection>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<Background_Benefitselection>;
    /**
     * Static representation of the one-to-one navigation property [[depdisabilityNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPDISABILITY_NAV: OneToOneLink<Background_Benefitselection, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[depsmokeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPSMOKE_NAV: OneToOneLink<Background_Benefitselection, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[depstudentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPSTUDENT_NAV: OneToOneLink<Background_Benefitselection, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[relationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RELATION_NAV: OneToOneLink<Background_Benefitselection, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_NAV: OneToOneLink<Background_Benefitselection, User>;
    /**
     * All fields of the Background_Benefitselection entity.
     */
    const _allFields: Array<BigNumberField<Background_Benefitselection> | StringField<Background_Benefitselection> | DateField<Background_Benefitselection> | OneToOneLink<Background_Benefitselection, PicklistOption> | OneToOneLink<Background_Benefitselection, User>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Background_Benefitselection>;
    /**
     * All key fields of the Background_Benefitselection entity.
     */
    const _keyFields: Array<Selectable<Background_Benefitselection>>;
    /**
     * Mapping of all key field names to the respective static field property Background_Benefitselection.
     */
    const _keys: {
        [keys: string]: Selectable<Background_Benefitselection>;
    };
}
//# sourceMappingURL=Background_Benefitselection.d.ts.map