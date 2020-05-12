import { Background_EducationRequestBuilder } from './Background_EducationRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Background_Education" of service "SFOData".
 */
export declare class Background_Education extends Entity implements Background_EducationType {
    /**
     * Technical entity name for Background_Education.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Background_Education.
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
     * Degree.
     */
    degree: string;
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
     * Major.
     */
    major: string;
    /**
     * School.
     */
    school: string;
    /**
     * Start Date.
     */
    startDate: Moment;
    /**
     * userId.
     */
    userId: string;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    degreeNav: PicklistOption;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    majorNav: PicklistOption;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    userIdNav: User;
    /**
     * Returns an entity builder to construct instances `Background_Education`.
     * @returns A builder that constructs instances of entity type `Background_Education`.
     */
    static builder(): EntityBuilderType<Background_Education, Background_EducationTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Background_Education` entity type.
     * @returns A `Background_Education` request builder.
     */
    static requestBuilder(): Background_EducationRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_Education`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Background_Education`.
     */
    static customField(fieldName: string): CustomField<Background_Education>;
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
export interface Background_EducationType {
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    degree: string;
    endDate?: Moment;
    lastModifiedDate: Moment;
    major: string;
    school: string;
    startDate: Moment;
    userId: string;
    degreeNav: PicklistOptionType;
    majorNav: PicklistOptionType;
    userIdNav: UserType;
}
export interface Background_EducationTypeForceMandatory {
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    degree: string;
    endDate: Moment;
    lastModifiedDate: Moment;
    major: string;
    school: string;
    startDate: Moment;
    userId: string;
    degreeNav: PicklistOptionType;
    majorNav: PicklistOptionType;
    userIdNav: UserType;
}
export declare namespace Background_Education {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BACKGROUND_ELEMENT_ID: BigNumberField<Background_Education>;
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BG_ORDER_POS: BigNumberField<Background_Education>;
    /**
     * Static representation of the [[degree]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEGREE: StringField<Background_Education>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<Background_Education>;
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE: DateField<Background_Education>;
    /**
     * Static representation of the [[major]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAJOR: StringField<Background_Education>;
    /**
     * Static representation of the [[school]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SCHOOL: StringField<Background_Education>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<Background_Education>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<Background_Education>;
    /**
     * Static representation of the one-to-one navigation property [[degreeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEGREE_NAV: OneToOneLink<Background_Education, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[majorNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAJOR_NAV: OneToOneLink<Background_Education, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_NAV: OneToOneLink<Background_Education, User>;
    /**
     * All fields of the Background_Education entity.
     */
    const _allFields: Array<BigNumberField<Background_Education> | StringField<Background_Education> | DateField<Background_Education> | OneToOneLink<Background_Education, PicklistOption> | OneToOneLink<Background_Education, User>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Background_Education>;
    /**
     * All key fields of the Background_Education entity.
     */
    const _keyFields: Array<Selectable<Background_Education>>;
    /**
     * Mapping of all key field names to the respective static field property Background_Education.
     */
    const _keys: {
        [keys: string]: Selectable<Background_Education>;
    };
}
//# sourceMappingURL=Background_Education.d.ts.map