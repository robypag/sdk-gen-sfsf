/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ThemeColor, ThemeColorField } from './ThemeColor';
import { ComplexTypeField, Entity, createComplexType } from '@sap-cloud-sdk/core';

/**
 * ThemePortletConfig
 */
export interface ThemePortletConfig {
  /**
   * alertTextColor.
   * @nullable
   */
  alertTextColor?: ThemeColor;
  /**
   * bodyBackgroundColor.
   * @nullable
   */
  bodyBackgroundColor?: ThemeColor;
  /**
   * bodyLinkTextColor.
   * @nullable
   */
  bodyLinkTextColor?: ThemeColor;
  /**
   * bodyTextColor.
   * @nullable
   */
  bodyTextColor?: ThemeColor;
  /**
   * calloutTextColor.
   * @nullable
   */
  calloutTextColor?: ThemeColor;
  /**
   * custom1TextColor.
   * @nullable
   */
  custom1TextColor?: ThemeColor;
  /**
   * custom2TextColor.
   * @nullable
   */
  custom2TextColor?: ThemeColor;
  /**
   * dimmedTextColor.
   * @nullable
   */
  dimmedTextColor?: ThemeColor;
  /**
   * headerBgColor.
   * @nullable
   */
  headerBgColor?: ThemeColor;
  /**
   * headerLinkTextColor.
   * @nullable
   */
  headerLinkTextColor?: ThemeColor;
  /**
   * headerTextColor.
   * @nullable
   */
  headerTextColor?: ThemeColor;
  /**
   * sidebarColor.
   * @nullable
   */
  sidebarColor?: ThemeColor;
  /**
   * sidebarLinkTextColor.
   * @nullable
   */
  sidebarLinkTextColor?: ThemeColor;
  /**
   * sidebarTextColor.
   * @nullable
   */
  sidebarTextColor?: ThemeColor;
}

/**
 * @deprecated since v1.6.0. Use [[ThemePortletConfig.build]] instead.
 */
export function createThemePortletConfig(json: any): ThemePortletConfig {
  return ThemePortletConfig.build(json);
}

/**
 * ThemePortletConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ThemePortletConfigField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ThemePortletConfig.alertTextColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  alertTextColor: ThemeColorField<EntityT> = new ThemeColorField('alertTextColor', this);
  /**
   * Representation of the [[ThemePortletConfig.bodyBackgroundColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bodyBackgroundColor: ThemeColorField<EntityT> = new ThemeColorField('bodyBackgroundColor', this);
  /**
   * Representation of the [[ThemePortletConfig.bodyLinkTextColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bodyLinkTextColor: ThemeColorField<EntityT> = new ThemeColorField('bodyLinkTextColor', this);
  /**
   * Representation of the [[ThemePortletConfig.bodyTextColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bodyTextColor: ThemeColorField<EntityT> = new ThemeColorField('bodyTextColor', this);
  /**
   * Representation of the [[ThemePortletConfig.calloutTextColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  calloutTextColor: ThemeColorField<EntityT> = new ThemeColorField('calloutTextColor', this);
  /**
   * Representation of the [[ThemePortletConfig.custom1TextColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  custom1TextColor: ThemeColorField<EntityT> = new ThemeColorField('custom1TextColor', this);
  /**
   * Representation of the [[ThemePortletConfig.custom2TextColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  custom2TextColor: ThemeColorField<EntityT> = new ThemeColorField('custom2TextColor', this);
  /**
   * Representation of the [[ThemePortletConfig.dimmedTextColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dimmedTextColor: ThemeColorField<EntityT> = new ThemeColorField('dimmedTextColor', this);
  /**
   * Representation of the [[ThemePortletConfig.headerBgColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  headerBgColor: ThemeColorField<EntityT> = new ThemeColorField('headerBgColor', this);
  /**
   * Representation of the [[ThemePortletConfig.headerLinkTextColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  headerLinkTextColor: ThemeColorField<EntityT> = new ThemeColorField('headerLinkTextColor', this);
  /**
   * Representation of the [[ThemePortletConfig.headerTextColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  headerTextColor: ThemeColorField<EntityT> = new ThemeColorField('headerTextColor', this);
  /**
   * Representation of the [[ThemePortletConfig.sidebarColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sidebarColor: ThemeColorField<EntityT> = new ThemeColorField('sidebarColor', this);
  /**
   * Representation of the [[ThemePortletConfig.sidebarLinkTextColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sidebarLinkTextColor: ThemeColorField<EntityT> = new ThemeColorField('sidebarLinkTextColor', this);
  /**
   * Representation of the [[ThemePortletConfig.sidebarTextColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sidebarTextColor: ThemeColorField<EntityT> = new ThemeColorField('sidebarTextColor', this);
}

export namespace ThemePortletConfig {
  export function build(json: { [keys: string]: FieldType }): ThemePortletConfig {
    return createComplexType(json, {
      alertTextColor: (alertTextColor: ThemeColor) => ({ alertTextColor: ThemeColor.build(alertTextColor) }),
      bodyBackgroundColor: (bodyBackgroundColor: ThemeColor) => ({ bodyBackgroundColor: ThemeColor.build(bodyBackgroundColor) }),
      bodyLinkTextColor: (bodyLinkTextColor: ThemeColor) => ({ bodyLinkTextColor: ThemeColor.build(bodyLinkTextColor) }),
      bodyTextColor: (bodyTextColor: ThemeColor) => ({ bodyTextColor: ThemeColor.build(bodyTextColor) }),
      calloutTextColor: (calloutTextColor: ThemeColor) => ({ calloutTextColor: ThemeColor.build(calloutTextColor) }),
      custom1TextColor: (custom1TextColor: ThemeColor) => ({ custom1TextColor: ThemeColor.build(custom1TextColor) }),
      custom2TextColor: (custom2TextColor: ThemeColor) => ({ custom2TextColor: ThemeColor.build(custom2TextColor) }),
      dimmedTextColor: (dimmedTextColor: ThemeColor) => ({ dimmedTextColor: ThemeColor.build(dimmedTextColor) }),
      headerBgColor: (headerBgColor: ThemeColor) => ({ headerBgColor: ThemeColor.build(headerBgColor) }),
      headerLinkTextColor: (headerLinkTextColor: ThemeColor) => ({ headerLinkTextColor: ThemeColor.build(headerLinkTextColor) }),
      headerTextColor: (headerTextColor: ThemeColor) => ({ headerTextColor: ThemeColor.build(headerTextColor) }),
      sidebarColor: (sidebarColor: ThemeColor) => ({ sidebarColor: ThemeColor.build(sidebarColor) }),
      sidebarLinkTextColor: (sidebarLinkTextColor: ThemeColor) => ({ sidebarLinkTextColor: ThemeColor.build(sidebarLinkTextColor) }),
      sidebarTextColor: (sidebarTextColor: ThemeColor) => ({ sidebarTextColor: ThemeColor.build(sidebarTextColor) })
    });
  }
}
