import { Background_GoogledocsRequestBuilder } from './Background_GoogledocsRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Background_Googledocs" of service "SFOData".
 */
export declare class Background_Googledocs extends Entity implements Background_GoogledocsType {
    /**
     * Technical entity name for Background_Googledocs.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Background_Googledocs.
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
     * Document Description.
     * @nullable
     */
    documentName?: string;
    /**
     * Document.
     */
    documenturl: string;
    /**
     * Last Modified Date.
     */
    lastModifiedDate: Moment;
    /**
     * Last Modified Date.
     * @nullable
     */
    lastmodifieddate?: Moment;
    /**
     * userId.
     */
    userId: string;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    userIdNav: User;
    /**
     * Returns an entity builder to construct instances `Background_Googledocs`.
     * @returns A builder that constructs instances of entity type `Background_Googledocs`.
     */
    static builder(): EntityBuilderType<Background_Googledocs, Background_GoogledocsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Background_Googledocs` entity type.
     * @returns A `Background_Googledocs` request builder.
     */
    static requestBuilder(): Background_GoogledocsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_Googledocs`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Background_Googledocs`.
     */
    static customField(fieldName: string): CustomField<Background_Googledocs>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
export interface Background_GoogledocsType {
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    documentName?: string;
    documenturl: string;
    lastModifiedDate: Moment;
    lastmodifieddate?: Moment;
    userId: string;
    userIdNav: UserType;
}
export interface Background_GoogledocsTypeForceMandatory {
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    documentName: string;
    documenturl: string;
    lastModifiedDate: Moment;
    lastmodifieddate: Moment;
    userId: string;
    userIdNav: UserType;
}
export declare namespace Background_Googledocs {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BACKGROUND_ELEMENT_ID: BigNumberField<Background_Googledocs>;
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BG_ORDER_POS: BigNumberField<Background_Googledocs>;
    /**
     * Static representation of the [[documentName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_NAME: StringField<Background_Googledocs>;
    /**
     * Static representation of the [[documenturl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENTURL: StringField<Background_Googledocs>;
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE: DateField<Background_Googledocs>;
    /**
     * Static representation of the [[lastmodifieddate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LASTMODIFIEDDATE: DateField<Background_Googledocs>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<Background_Googledocs>;
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_NAV: OneToOneLink<Background_Googledocs, User>;
    /**
     * All fields of the Background_Googledocs entity.
     */
    const _allFields: Array<BigNumberField<Background_Googledocs> | StringField<Background_Googledocs> | DateField<Background_Googledocs> | OneToOneLink<Background_Googledocs, User>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Background_Googledocs>;
    /**
     * All key fields of the Background_Googledocs entity.
     */
    const _keyFields: Array<Selectable<Background_Googledocs>>;
    /**
     * Mapping of all key field names to the respective static field property Background_Googledocs.
     */
    const _keys: {
        [keys: string]: Selectable<Background_Googledocs>;
    };
}
//# sourceMappingURL=Background_Googledocs.d.ts.map