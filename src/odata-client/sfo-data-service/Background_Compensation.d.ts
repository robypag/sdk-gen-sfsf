import { Background_CompensationRequestBuilder } from './Background_CompensationRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Background_Compensation" of service "SFOData".
 */
export declare class Background_Compensation extends Entity implements Background_CompensationType {
    /**
     * Technical entity name for Background_Compensation.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Background_Compensation.
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
     * Bonus.
     * @nullable
     */
    bonusTotal?: number;
    /**
     * Compa-ratio.
     * @nullable
     */
    compaRatio?: number;
    /**
     * Salary before review.
     * @nullable
     */
    curSalary?: string;
    /**
     * Salary after review.
     * @nullable
     */
    finSalary?: string;
    /**
     * Job Title.
     * @nullable
     */
    jobTitle?: string;
    /**
     * Last Modified Date.
     */
    lastModifiedDate: Moment;
    /**
     * Lump Sum.
     * @nullable
     */
    lumpSum?: number;
    /**
     * Merit.
     * @nullable
     */
    merit?: string;
    /**
     * Option.
     * @nullable
     */
    options?: number;
    /**
     * PM Rating.
     * @nullable
     */
    pmRating?: string;
    /**
     * Stock.
     * @nullable
     */
    stock?: number;
    /**
     * Grant Date.
     * @nullable
     */
    stockGrantDate?: Moment;
    /**
     * Review Name.
     * @nullable
     */
    sysCompTemplateName?: string;
    /**
     * Review End.
     * @nullable
     */
    sysReviewEndDate?: Moment;
    /**
     * Review Start.
     * @nullable
     */
    sysReviewStartDate?: Moment;
    /**
     * Total Pay.
     * @nullable
     */
    totalComp?: number;
    /**
     * userId.
     */
    userId: string;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    userIdNav: User;
    /**
     * Returns an entity builder to construct instances `Background_Compensation`.
     * @returns A builder that constructs instances of entity type `Background_Compensation`.
     */
    static builder(): EntityBuilderType<Background_Compensation, Background_CompensationTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Background_Compensation` entity type.
     * @returns A `Background_Compensation` request builder.
     */
    static requestBuilder(): Background_CompensationRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_Compensation`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Background_Compensation`.
     */
    static customField(fieldName: string): CustomField<Background_Compensation>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
export interface Background_CompensationType {
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    bonusTotal?: number;
    compaRatio?: number;
    curSalary?: string;
    finSalary?: string;
    jobTitle?: string;
    lastModifiedDate: Moment;
    lumpSum?: number;
    merit?: string;
    options?: number;
    pmRating?: string;
    stock?: number;
    stockGrantDate?: Moment;
    sysCompTemplateName?: string;
    sysReviewEndDate?: Moment;
    sysReviewStartDate?: Moment;
    totalComp?: number;
    userId: string;
    userIdNav: UserType;
}
export interface Background_CompensationTypeForceMandatory {
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    bonusTotal: number;
    compaRatio: number;
    curSalary: string;
    finSalary: string;
    jobTitle: string;
    lastModifiedDate: Moment;
    lumpSum: number;
    merit: string;
    options: number;
    pmRating: string;
    stock: number;
    stockGrantDate: Moment;
    sysCompTemplateName: string;
    sysReviewEndDate: Moment;
    sysReviewStartDate: Moment;
    totalComp: number;
    userId: string;
    userIdNav: UserType;
}
export declare namespace Background_Compensation {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BACKGROUND_ELEMENT_ID: BigNumberField<Background_Compensation>;
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BG_ORDER_POS: BigNumberField<Background_Compensation>;
    /**
     * Static representation of the [[bonusTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BONUS_TOTAL: NumberField<Background_Compensation>;
    /**
     * Static representation of the [[compaRatio]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPA_RATIO: NumberField<Background_Compensation>;
    /**
     * Static representation of the [[curSalary]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUR_SALARY: StringField<Background_Compensation>;
    /**
     * Static representation of the [[finSalary]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIN_SALARY: StringField<Background_Compensation>;
    /**
     * Static representation of the [[jobTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_TITLE: StringField<Background_Compensation>;
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE: DateField<Background_Compensation>;
    /**
     * Static representation of the [[lumpSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LUMP_SUM: NumberField<Background_Compensation>;
    /**
     * Static representation of the [[merit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MERIT: StringField<Background_Compensation>;
    /**
     * Static representation of the [[options]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPTIONS: NumberField<Background_Compensation>;
    /**
     * Static representation of the [[pmRating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PM_RATING: StringField<Background_Compensation>;
    /**
     * Static representation of the [[stock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STOCK: NumberField<Background_Compensation>;
    /**
     * Static representation of the [[stockGrantDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STOCK_GRANT_DATE: DateField<Background_Compensation>;
    /**
     * Static representation of the [[sysCompTemplateName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SYS_COMP_TEMPLATE_NAME: StringField<Background_Compensation>;
    /**
     * Static representation of the [[sysReviewEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SYS_REVIEW_END_DATE: DateField<Background_Compensation>;
    /**
     * Static representation of the [[sysReviewStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SYS_REVIEW_START_DATE: DateField<Background_Compensation>;
    /**
     * Static representation of the [[totalComp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TOTAL_COMP: NumberField<Background_Compensation>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<Background_Compensation>;
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_NAV: OneToOneLink<Background_Compensation, User>;
    /**
     * All fields of the Background_Compensation entity.
     */
    const _allFields: Array<BigNumberField<Background_Compensation> | NumberField<Background_Compensation> | StringField<Background_Compensation> | DateField<Background_Compensation> | OneToOneLink<Background_Compensation, User>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Background_Compensation>;
    /**
     * All key fields of the Background_Compensation entity.
     */
    const _keyFields: Array<Selectable<Background_Compensation>>;
    /**
     * Mapping of all key field names to the respective static field property Background_Compensation.
     */
    const _keys: {
        [keys: string]: Selectable<Background_Compensation>;
    };
}
//# sourceMappingURL=Background_Compensation.d.ts.map