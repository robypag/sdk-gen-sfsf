import { Background_Matrix1PlacementRequestBuilder } from './Background_Matrix1PlacementRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Background_Matrix1placement" of service "SFOData".
 */
export declare class Background_Matrix1Placement extends Entity implements Background_Matrix1PlacementType {
    /**
     * Technical entity name for Background_Matrix1Placement.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Background_Matrix1Placement.
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
     * Placement End Date.
     * @nullable
     */
    endDate?: Moment;
    /**
     * Last Modified Date.
     */
    lastModifiedDate: Moment;
    /**
     * Nine Box.
     * @nullable
     */
    nineBox?: string;
    /**
     * Placement.
     * @nullable
     */
    placement?: number;
    /**
     * Placement Start Date.
     * @nullable
     */
    startDate?: Moment;
    /**
     * userId.
     */
    userId: string;
    /**
     * X End Date.
     * @nullable
     */
    xAxisEndDate?: Moment;
    /**
     * X Start Date.
     * @nullable
     */
    xAxisStartDate?: Moment;
    /**
     * Performance Label.
     * @nullable
     */
    xAxisTrend?: number;
    /**
     * Y End Date.
     * @nullable
     */
    yAxisEndDate?: Moment;
    /**
     * Y Start Date.
     * @nullable
     */
    yAxisStartDate?: Moment;
    /**
     * Potential Label.
     * @nullable
     */
    yAxisTrend?: number;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    userIdNav: User;
    /**
     * Returns an entity builder to construct instances `Background_Matrix1Placement`.
     * @returns A builder that constructs instances of entity type `Background_Matrix1Placement`.
     */
    static builder(): EntityBuilderType<Background_Matrix1Placement, Background_Matrix1PlacementTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Background_Matrix1Placement` entity type.
     * @returns A `Background_Matrix1Placement` request builder.
     */
    static requestBuilder(): Background_Matrix1PlacementRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_Matrix1Placement`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Background_Matrix1Placement`.
     */
    static customField(fieldName: string): CustomField<Background_Matrix1Placement>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
export interface Background_Matrix1PlacementType {
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    endDate?: Moment;
    lastModifiedDate: Moment;
    nineBox?: string;
    placement?: number;
    startDate?: Moment;
    userId: string;
    xAxisEndDate?: Moment;
    xAxisStartDate?: Moment;
    xAxisTrend?: number;
    yAxisEndDate?: Moment;
    yAxisStartDate?: Moment;
    yAxisTrend?: number;
    userIdNav: UserType;
}
export interface Background_Matrix1PlacementTypeForceMandatory {
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    endDate: Moment;
    lastModifiedDate: Moment;
    nineBox: string;
    placement: number;
    startDate: Moment;
    userId: string;
    xAxisEndDate: Moment;
    xAxisStartDate: Moment;
    xAxisTrend: number;
    yAxisEndDate: Moment;
    yAxisStartDate: Moment;
    yAxisTrend: number;
    userIdNav: UserType;
}
export declare namespace Background_Matrix1Placement {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BACKGROUND_ELEMENT_ID: BigNumberField<Background_Matrix1Placement>;
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BG_ORDER_POS: BigNumberField<Background_Matrix1Placement>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<Background_Matrix1Placement>;
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE: DateField<Background_Matrix1Placement>;
    /**
     * Static representation of the [[nineBox]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NINE_BOX: StringField<Background_Matrix1Placement>;
    /**
     * Static representation of the [[placement]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PLACEMENT: NumberField<Background_Matrix1Placement>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<Background_Matrix1Placement>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<Background_Matrix1Placement>;
    /**
     * Static representation of the [[xAxisEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const X_AXIS_END_DATE: DateField<Background_Matrix1Placement>;
    /**
     * Static representation of the [[xAxisStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const X_AXIS_START_DATE: DateField<Background_Matrix1Placement>;
    /**
     * Static representation of the [[xAxisTrend]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const X_AXIS_TREND: NumberField<Background_Matrix1Placement>;
    /**
     * Static representation of the [[yAxisEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const Y_AXIS_END_DATE: DateField<Background_Matrix1Placement>;
    /**
     * Static representation of the [[yAxisStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const Y_AXIS_START_DATE: DateField<Background_Matrix1Placement>;
    /**
     * Static representation of the [[yAxisTrend]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const Y_AXIS_TREND: NumberField<Background_Matrix1Placement>;
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_NAV: OneToOneLink<Background_Matrix1Placement, User>;
    /**
     * All fields of the Background_Matrix1Placement entity.
     */
    const _allFields: Array<BigNumberField<Background_Matrix1Placement> | DateField<Background_Matrix1Placement> | StringField<Background_Matrix1Placement> | NumberField<Background_Matrix1Placement> | OneToOneLink<Background_Matrix1Placement, User>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Background_Matrix1Placement>;
    /**
     * All key fields of the Background_Matrix1Placement entity.
     */
    const _keyFields: Array<Selectable<Background_Matrix1Placement>>;
    /**
     * Mapping of all key field names to the respective static field property Background_Matrix1Placement.
     */
    const _keys: {
        [keys: string]: Selectable<Background_Matrix1Placement>;
    };
}
//# sourceMappingURL=Background_Matrix1Placement.d.ts.map