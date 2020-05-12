import { Background_OutsideWorkExperienceRequestBuilder } from './Background_OutsideWorkExperienceRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Background_OutsideWorkExperience" of service "SFOData".
 */
export declare class Background_OutsideWorkExperience extends Entity implements Background_OutsideWorkExperienceType {
    /**
     * Technical entity name for Background_OutsideWorkExperience.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Background_OutsideWorkExperience.
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
     * Type of Business.
     * @nullable
     */
    businessType?: string;
    /**
     * Country&gt;.
     */
    country: string;
    /**
     * Company Name.
     */
    employer: string;
    /**
     * End Date.
     * @nullable
     */
    endDate?: Moment;
    /**
     * Last Modified Date.
     */
    lastModifiedDate: Moment;
    /**
     * Present Employer&gt;.
     */
    presentEmployer: string;
    /**
     * Start Date.
     */
    startDate: Moment;
    /**
     * Title.
     */
    startTitle: string;
    /**
     * userId.
     */
    userId: string;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    businessTypeNav: PicklistOption;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    countryNav: PicklistOption;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    presentEmployerNav: PicklistOption;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    userIdNav: User;
    /**
     * Returns an entity builder to construct instances `Background_OutsideWorkExperience`.
     * @returns A builder that constructs instances of entity type `Background_OutsideWorkExperience`.
     */
    static builder(): EntityBuilderType<Background_OutsideWorkExperience, Background_OutsideWorkExperienceTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Background_OutsideWorkExperience` entity type.
     * @returns A `Background_OutsideWorkExperience` request builder.
     */
    static requestBuilder(): Background_OutsideWorkExperienceRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_OutsideWorkExperience`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Background_OutsideWorkExperience`.
     */
    static customField(fieldName: string): CustomField<Background_OutsideWorkExperience>;
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
export interface Background_OutsideWorkExperienceType {
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    businessType?: string;
    country: string;
    employer: string;
    endDate?: Moment;
    lastModifiedDate: Moment;
    presentEmployer: string;
    startDate: Moment;
    startTitle: string;
    userId: string;
    businessTypeNav: PicklistOptionType;
    countryNav: PicklistOptionType;
    presentEmployerNav: PicklistOptionType;
    userIdNav: UserType;
}
export interface Background_OutsideWorkExperienceTypeForceMandatory {
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    businessType: string;
    country: string;
    employer: string;
    endDate: Moment;
    lastModifiedDate: Moment;
    presentEmployer: string;
    startDate: Moment;
    startTitle: string;
    userId: string;
    businessTypeNav: PicklistOptionType;
    countryNav: PicklistOptionType;
    presentEmployerNav: PicklistOptionType;
    userIdNav: UserType;
}
export declare namespace Background_OutsideWorkExperience {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BACKGROUND_ELEMENT_ID: BigNumberField<Background_OutsideWorkExperience>;
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BG_ORDER_POS: BigNumberField<Background_OutsideWorkExperience>;
    /**
     * Static representation of the [[businessType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_TYPE: StringField<Background_OutsideWorkExperience>;
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<Background_OutsideWorkExperience>;
    /**
     * Static representation of the [[employer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYER: StringField<Background_OutsideWorkExperience>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<Background_OutsideWorkExperience>;
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE: DateField<Background_OutsideWorkExperience>;
    /**
     * Static representation of the [[presentEmployer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRESENT_EMPLOYER: StringField<Background_OutsideWorkExperience>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<Background_OutsideWorkExperience>;
    /**
     * Static representation of the [[startTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_TITLE: StringField<Background_OutsideWorkExperience>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<Background_OutsideWorkExperience>;
    /**
     * Static representation of the one-to-one navigation property [[businessTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_TYPE_NAV: OneToOneLink<Background_OutsideWorkExperience, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_NAV: OneToOneLink<Background_OutsideWorkExperience, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[presentEmployerNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRESENT_EMPLOYER_NAV: OneToOneLink<Background_OutsideWorkExperience, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_NAV: OneToOneLink<Background_OutsideWorkExperience, User>;
    /**
     * All fields of the Background_OutsideWorkExperience entity.
     */
    const _allFields: Array<BigNumberField<Background_OutsideWorkExperience> | StringField<Background_OutsideWorkExperience> | DateField<Background_OutsideWorkExperience> | OneToOneLink<Background_OutsideWorkExperience, PicklistOption> | OneToOneLink<Background_OutsideWorkExperience, User>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Background_OutsideWorkExperience>;
    /**
     * All key fields of the Background_OutsideWorkExperience entity.
     */
    const _keyFields: Array<Selectable<Background_OutsideWorkExperience>>;
    /**
     * Mapping of all key field names to the respective static field property Background_OutsideWorkExperience.
     */
    const _keys: {
        [keys: string]: Selectable<Background_OutsideWorkExperience>;
    };
}
//# sourceMappingURL=Background_OutsideWorkExperience.d.ts.map