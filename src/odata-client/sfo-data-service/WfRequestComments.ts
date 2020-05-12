/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WfRequestCommentsRequestBuilder } from './WfRequestCommentsRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "WfRequestComments" of service "SFOData".
 */
export class WfRequestComments extends Entity implements WfRequestCommentsType {
  /**
   * Technical entity name for WfRequestComments.
   */
  static _entityName = 'WfRequestComments';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for WfRequestComments.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Action Type.
   * Maximum length: 30.
   * @nullable
   */
  actionType?: string;
  /**
   * Comments.
   * Maximum length: 4000.
   * @nullable
   */
  comments?: string;
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
   * User Id.
   * Maximum length: 100.
   * @nullable
   */
  userId?: string;
  /**
   * Workflow Request Comment Id.
   */
  wfRequestCommentId!: BigNumber;
  /**
   * Workflow Request Id.
   * @nullable
   */
  wfRequestId?: BigNumber;
  /**
   * Workflow Request Step Id.
   * @nullable
   */
  wfRequestStepId?: BigNumber;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  userNav!: User;

  /**
   * Returns an entity builder to construct instances `WfRequestComments`.
   * @returns A builder that constructs instances of entity type `WfRequestComments`.
   */
  static builder(): EntityBuilderType<WfRequestComments, WfRequestCommentsTypeForceMandatory> {
    return Entity.entityBuilder(WfRequestComments);
  }

  /**
   * Returns a request builder to construct requests for operations on the `WfRequestComments` entity type.
   * @returns A `WfRequestComments` request builder.
   */
  static requestBuilder(): WfRequestCommentsRequestBuilder {
    return new WfRequestCommentsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `WfRequestComments`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `WfRequestComments`.
   */
  static customField(fieldName: string): CustomField<WfRequestComments> {
    return Entity.customFieldSelector(fieldName, WfRequestComments);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { User, UserType } from './User';

export interface WfRequestCommentsType {
  actionType?: string;
  comments?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  createdOn?: Moment;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  lastModifiedOn?: Moment;
  userId?: string;
  wfRequestCommentId: BigNumber;
  wfRequestId?: BigNumber;
  wfRequestStepId?: BigNumber;
  userNav: UserType;
}

export interface WfRequestCommentsTypeForceMandatory {
  actionType: string;
  comments: string;
  createdBy: string;
  createdDateTime: Moment;
  createdOn: Moment;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  lastModifiedOn: Moment;
  userId: string;
  wfRequestCommentId: BigNumber;
  wfRequestId: BigNumber;
  wfRequestStepId: BigNumber;
  userNav: UserType;
}

export namespace WfRequestComments {
  /**
   * Static representation of the [[actionType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTION_TYPE: StringField<WfRequestComments> = new StringField('actionType', WfRequestComments, 'Edm.String');
  /**
   * Static representation of the [[comments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENTS: StringField<WfRequestComments> = new StringField('comments', WfRequestComments, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<WfRequestComments> = new StringField('createdBy', WfRequestComments, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<WfRequestComments> = new DateField('createdDateTime', WfRequestComments, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<WfRequestComments> = new DateField('createdOn', WfRequestComments, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<WfRequestComments> = new StringField('lastModifiedBy', WfRequestComments, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<WfRequestComments> = new DateField('lastModifiedDateTime', WfRequestComments, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<WfRequestComments> = new DateField('lastModifiedOn', WfRequestComments, 'Edm.DateTime');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<WfRequestComments> = new StringField('userId', WfRequestComments, 'Edm.String');
  /**
   * Static representation of the [[wfRequestCommentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_COMMENT_ID: BigNumberField<WfRequestComments> = new BigNumberField('wfRequestCommentId', WfRequestComments, 'Edm.Int64');
  /**
   * Static representation of the [[wfRequestId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_ID: BigNumberField<WfRequestComments> = new BigNumberField('wfRequestId', WfRequestComments, 'Edm.Int64');
  /**
   * Static representation of the [[wfRequestStepId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_STEP_ID: BigNumberField<WfRequestComments> = new BigNumberField('wfRequestStepId', WfRequestComments, 'Edm.Int64');
  /**
   * Static representation of the one-to-one navigation property [[userNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_NAV: OneToOneLink<WfRequestComments, User> = new OneToOneLink('userNav', WfRequestComments, User);
  /**
   * All fields of the WfRequestComments entity.
   */
  export const _allFields: Array<StringField<WfRequestComments> | DateField<WfRequestComments> | BigNumberField<WfRequestComments> | OneToOneLink<WfRequestComments, User>> = [
    WfRequestComments.ACTION_TYPE,
    WfRequestComments.COMMENTS,
    WfRequestComments.CREATED_BY,
    WfRequestComments.CREATED_DATE_TIME,
    WfRequestComments.CREATED_ON,
    WfRequestComments.LAST_MODIFIED_BY,
    WfRequestComments.LAST_MODIFIED_DATE_TIME,
    WfRequestComments.LAST_MODIFIED_ON,
    WfRequestComments.USER_ID,
    WfRequestComments.WF_REQUEST_COMMENT_ID,
    WfRequestComments.WF_REQUEST_ID,
    WfRequestComments.WF_REQUEST_STEP_ID,
    WfRequestComments.USER_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<WfRequestComments> = new AllFields('*', WfRequestComments);
  /**
   * All key fields of the WfRequestComments entity.
   */
  export const _keyFields: Array<Selectable<WfRequestComments>> = [WfRequestComments.WF_REQUEST_COMMENT_ID];
  /**
   * Mapping of all key field names to the respective static field property WfRequestComments.
   */
  export const _keys: { [keys: string]: Selectable<WfRequestComments> } = WfRequestComments._keyFields.reduce((acc: { [keys: string]: Selectable<WfRequestComments> }, field: Selectable<WfRequestComments>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
