import { FoPayGradeRequestBuilder } from './FoPayGradeRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FOPayGrade" of service "SFOData".
 */
export declare class FoPayGrade extends Entity implements FoPayGradeType {
    /**
     * Technical entity name for FoPayGrade.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoPayGrade.
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
     * Pay Grade ID.
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
     * Pay Grade Level.
     * @nullable
     */
    paygradeLevel?: BigNumber;
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
     * One-to-one navigation property to the [[FoTranslation]] entity.
     */
    descriptionTranslationNav: FoTranslation;
    /**
     * One-to-one navigation property to the [[FoTranslation]] entity.
     */
    nameTranslationNav: FoTranslation;
    /**
     * Returns an entity builder to construct instances `FoPayGrade`.
     * @returns A builder that constructs instances of entity type `FoPayGrade`.
     */
    static builder(): EntityBuilderType<FoPayGrade, FoPayGradeTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FoPayGrade` entity type.
     * @returns A `FoPayGrade` request builder.
     */
    static requestBuilder(): FoPayGradeRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoPayGrade`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoPayGrade`.
     */
    static customField(fieldName: string): CustomField<FoPayGrade>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { FoTranslation, FoTranslationType } from './FoTranslation';
export interface FoPayGradeType {
    createdBy?: string;
    createdDateTime?: Moment;
    createdOn?: Moment;
    description?: string;
    endDate?: Moment;
    externalCode: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    lastModifiedOn?: Moment;
    name?: string;
    paygradeLevel?: BigNumber;
    startDate: Moment;
    status?: string;
    descriptionTranslationNav: FoTranslationType;
    nameTranslationNav: FoTranslationType;
}
export interface FoPayGradeTypeForceMandatory {
    createdBy: string;
    createdDateTime: Moment;
    createdOn: Moment;
    description: string;
    endDate: Moment;
    externalCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    lastModifiedOn: Moment;
    name: string;
    paygradeLevel: BigNumber;
    startDate: Moment;
    status: string;
    descriptionTranslationNav: FoTranslationType;
    nameTranslationNav: FoTranslationType;
}
export declare namespace FoPayGrade {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<FoPayGrade>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<FoPayGrade>;
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_ON: DateField<FoPayGrade>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<FoPayGrade>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<FoPayGrade>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<FoPayGrade>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<FoPayGrade>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<FoPayGrade>;
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_ON: DateField<FoPayGrade>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<FoPayGrade>;
    /**
     * Static representation of the [[paygradeLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYGRADE_LEVEL: BigNumberField<FoPayGrade>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<FoPayGrade>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<FoPayGrade>;
    /**
     * Static representation of the one-to-one navigation property [[descriptionTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_TRANSLATION_NAV: OneToOneLink<FoPayGrade, FoTranslation>;
    /**
     * Static representation of the one-to-one navigation property [[nameTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_TRANSLATION_NAV: OneToOneLink<FoPayGrade, FoTranslation>;
    /**
     * All fields of the FoPayGrade entity.
     */
    const _allFields: Array<StringField<FoPayGrade> | DateField<FoPayGrade> | BigNumberField<FoPayGrade> | OneToOneLink<FoPayGrade, FoTranslation>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FoPayGrade>;
    /**
     * All key fields of the FoPayGrade entity.
     */
    const _keyFields: Array<Selectable<FoPayGrade>>;
    /**
     * Mapping of all key field names to the respective static field property FoPayGrade.
     */
    const _keys: {
        [keys: string]: Selectable<FoPayGrade>;
    };
}
//# sourceMappingURL=FoPayGrade.d.ts.map