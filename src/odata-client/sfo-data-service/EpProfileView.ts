/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EpProfileViewRequestBuilder } from './EpProfileViewRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EPProfileView" of service "SFOData".
 */
export class EpProfileView extends Entity implements EpProfileViewType {
  /**
   * Technical entity name for EpProfileView.
   */
  static _entityName = 'EPProfileView';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EpProfileView.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * dashboard Id.
   */
  dashboardId!: string;
  /**
   * dashboard Title.
   * @nullable
   */
  dashboardTitle?: string;
  /**
   * dashboard Type.
   * @nullable
   */
  dashboardType?: string;
  /**
   * live Profile Photo Permission.
   * @nullable
   */
  liveProfilePhotoPermission?: string;
  /**
   * user Id.
   */
  userId!: string;

  /**
   * Returns an entity builder to construct instances `EpProfileView`.
   * @returns A builder that constructs instances of entity type `EpProfileView`.
   */
  static builder(): EntityBuilderType<EpProfileView, EpProfileViewTypeForceMandatory> {
    return Entity.entityBuilder(EpProfileView);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EpProfileView` entity type.
   * @returns A `EpProfileView` request builder.
   */
  static requestBuilder(): EpProfileViewRequestBuilder {
    return new EpProfileViewRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EpProfileView`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EpProfileView`.
   */
  static customField(fieldName: string): CustomField<EpProfileView> {
    return Entity.customFieldSelector(fieldName, EpProfileView);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface EpProfileViewType {
  dashboardId: string;
  dashboardTitle?: string;
  dashboardType?: string;
  liveProfilePhotoPermission?: string;
  userId: string;
}

export interface EpProfileViewTypeForceMandatory {
  dashboardId: string;
  dashboardTitle: string;
  dashboardType: string;
  liveProfilePhotoPermission: string;
  userId: string;
}

export namespace EpProfileView {
  /**
   * Static representation of the [[dashboardId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DASHBOARD_ID: StringField<EpProfileView> = new StringField('dashboardId', EpProfileView, 'Edm.String');
  /**
   * Static representation of the [[dashboardTitle]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DASHBOARD_TITLE: StringField<EpProfileView> = new StringField('dashboardTitle', EpProfileView, 'Edm.String');
  /**
   * Static representation of the [[dashboardType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DASHBOARD_TYPE: StringField<EpProfileView> = new StringField('dashboardType', EpProfileView, 'Edm.String');
  /**
   * Static representation of the [[liveProfilePhotoPermission]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LIVE_PROFILE_PHOTO_PERMISSION: StringField<EpProfileView> = new StringField('liveProfilePhotoPermission', EpProfileView, 'Edm.String');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<EpProfileView> = new StringField('userId', EpProfileView, 'Edm.String');
  /**
   * All fields of the EpProfileView entity.
   */
  export const _allFields: Array<StringField<EpProfileView>> = [
    EpProfileView.DASHBOARD_ID,
    EpProfileView.DASHBOARD_TITLE,
    EpProfileView.DASHBOARD_TYPE,
    EpProfileView.LIVE_PROFILE_PHOTO_PERMISSION,
    EpProfileView.USER_ID
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EpProfileView> = new AllFields('*', EpProfileView);
  /**
   * All key fields of the EpProfileView entity.
   */
  export const _keyFields: Array<Selectable<EpProfileView>> = [EpProfileView.DASHBOARD_ID, EpProfileView.USER_ID];
  /**
   * Mapping of all key field names to the respective static field property EpProfileView.
   */
  export const _keys: { [keys: string]: Selectable<EpProfileView> } = EpProfileView._keyFields.reduce((acc: { [keys: string]: Selectable<EpProfileView> }, field: Selectable<EpProfileView>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
