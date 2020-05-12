import { TalentRatingsRequestBuilder } from './TalentRatingsRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "TalentRatings" of service "SFOData".
 */
export declare class TalentRatings extends Entity implements TalentRatingsType {
    /**
     * Technical entity name for TalentRatings.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TalentRatings.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * employeeId.
     * @nullable
     */
    employeeId?: string;
    /**
     * feedbackId.
     */
    feedbackId: BigNumber;
    /**
     * feedbackModule.
     * @nullable
     */
    feedbackModule?: number;
    /**
     * feedbackName.
     * @nullable
     */
    feedbackName?: string;
    /**
     * feedbackRating.
     * @nullable
     */
    feedbackRating?: number;
    /**
     * feedbackRatingLabel.
     * @nullable
     */
    feedbackRatingLabel?: string;
    /**
     * feedbackScaleId.
     */
    feedbackScaleId: BigNumber;
    /**
     * feedbackScaleMaximum.
     * @nullable
     */
    feedbackScaleMaximum?: number;
    /**
     * feedbackScaleMinimum.
     * @nullable
     */
    feedbackScaleMinimum?: number;
    /**
     * feedbackSource.
     * @nullable
     */
    feedbackSource?: number;
    /**
     * feedbackType.
     * @nullable
     */
    feedbackType?: number;
    /**
     * feedbackWeight.
     * @nullable
     */
    feedbackWeight?: number;
    /**
     * formContentId.
     * @nullable
     */
    formContentId?: BigNumber;
    /**
     * formDataId.
     * @nullable
     */
    formDataId?: BigNumber;
    /**
     * One-to-one navigation property to the [[CalibrationSession]] entity.
     */
    calSession: CalibrationSession;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    employeeUser: User;
    /**
     * Returns an entity builder to construct instances `TalentRatings`.
     * @returns A builder that constructs instances of entity type `TalentRatings`.
     */
    static builder(): EntityBuilderType<TalentRatings, TalentRatingsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `TalentRatings` entity type.
     * @returns A `TalentRatings` request builder.
     */
    static requestBuilder(): TalentRatingsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TalentRatings`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TalentRatings`.
     */
    static customField(fieldName: string): CustomField<TalentRatings>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { CalibrationSession, CalibrationSessionType } from './CalibrationSession';
import { User, UserType } from './User';
export interface TalentRatingsType {
    employeeId?: string;
    feedbackId: BigNumber;
    feedbackModule?: number;
    feedbackName?: string;
    feedbackRating?: number;
    feedbackRatingLabel?: string;
    feedbackScaleId: BigNumber;
    feedbackScaleMaximum?: number;
    feedbackScaleMinimum?: number;
    feedbackSource?: number;
    feedbackType?: number;
    feedbackWeight?: number;
    formContentId?: BigNumber;
    formDataId?: BigNumber;
    calSession: CalibrationSessionType;
    employeeUser: UserType;
}
export interface TalentRatingsTypeForceMandatory {
    employeeId: string;
    feedbackId: BigNumber;
    feedbackModule: number;
    feedbackName: string;
    feedbackRating: number;
    feedbackRatingLabel: string;
    feedbackScaleId: BigNumber;
    feedbackScaleMaximum: number;
    feedbackScaleMinimum: number;
    feedbackSource: number;
    feedbackType: number;
    feedbackWeight: number;
    formContentId: BigNumber;
    formDataId: BigNumber;
    calSession: CalibrationSessionType;
    employeeUser: UserType;
}
export declare namespace TalentRatings {
    /**
     * Static representation of the [[employeeId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_ID: StringField<TalentRatings>;
    /**
     * Static representation of the [[feedbackId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FEEDBACK_ID: BigNumberField<TalentRatings>;
    /**
     * Static representation of the [[feedbackModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FEEDBACK_MODULE: NumberField<TalentRatings>;
    /**
     * Static representation of the [[feedbackName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FEEDBACK_NAME: StringField<TalentRatings>;
    /**
     * Static representation of the [[feedbackRating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FEEDBACK_RATING: NumberField<TalentRatings>;
    /**
     * Static representation of the [[feedbackRatingLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FEEDBACK_RATING_LABEL: StringField<TalentRatings>;
    /**
     * Static representation of the [[feedbackScaleId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FEEDBACK_SCALE_ID: BigNumberField<TalentRatings>;
    /**
     * Static representation of the [[feedbackScaleMaximum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FEEDBACK_SCALE_MAXIMUM: NumberField<TalentRatings>;
    /**
     * Static representation of the [[feedbackScaleMinimum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FEEDBACK_SCALE_MINIMUM: NumberField<TalentRatings>;
    /**
     * Static representation of the [[feedbackSource]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FEEDBACK_SOURCE: NumberField<TalentRatings>;
    /**
     * Static representation of the [[feedbackType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FEEDBACK_TYPE: NumberField<TalentRatings>;
    /**
     * Static representation of the [[feedbackWeight]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FEEDBACK_WEIGHT: NumberField<TalentRatings>;
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_CONTENT_ID: BigNumberField<TalentRatings>;
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: BigNumberField<TalentRatings>;
    /**
     * Static representation of the one-to-one navigation property [[calSession]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CAL_SESSION: OneToOneLink<TalentRatings, CalibrationSession>;
    /**
     * Static representation of the one-to-one navigation property [[employeeUser]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_USER: OneToOneLink<TalentRatings, User>;
    /**
     * All fields of the TalentRatings entity.
     */
    const _allFields: Array<StringField<TalentRatings> | BigNumberField<TalentRatings> | NumberField<TalentRatings> | OneToOneLink<TalentRatings, CalibrationSession> | OneToOneLink<TalentRatings, User>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<TalentRatings>;
    /**
     * All key fields of the TalentRatings entity.
     */
    const _keyFields: Array<Selectable<TalentRatings>>;
    /**
     * Mapping of all key field names to the respective static field property TalentRatings.
     */
    const _keys: {
        [keys: string]: Selectable<TalentRatings>;
    };
}
//# sourceMappingURL=TalentRatings.d.ts.map