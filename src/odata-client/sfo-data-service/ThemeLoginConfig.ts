/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ThemeColor, ThemeColorField } from './ThemeColor';
import { ThemeLoginBackgroundConfig, ThemeLoginBackgroundConfigField } from './ThemeLoginBackgroundConfig';
import { ThemeLoginLogoConfig, ThemeLoginLogoConfigField } from './ThemeLoginLogoConfig';
import { ThemeButtonConfig, ThemeButtonConfigField } from './ThemeButtonConfig';
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * ThemeLoginConfig
 */
export interface ThemeLoginConfig {
  /**
   * autofillBgColor.
   * @nullable
   */
  autofillBgColor?: ThemeColor;
  /**
   * background.
   * @nullable
   */
  background?: ThemeLoginBackgroundConfig;
  /**
   * footerScheme.
   * @nullable
   */
  footerScheme?: string;
  /**
   * logo.
   * @nullable
   */
  logo?: ThemeLoginLogoConfig;
  /**
   * primaryButton.
   * @nullable
   */
  primaryButton?: ThemeButtonConfig;
  /**
   * primaryButtonOption.
   * @nullable
   */
  primaryButtonOption?: string;
}

/**
 * @deprecated since v1.6.0. Use [[ThemeLoginConfig.build]] instead.
 */
export function createThemeLoginConfig(json: any): ThemeLoginConfig {
  return ThemeLoginConfig.build(json);
}

/**
 * ThemeLoginConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ThemeLoginConfigField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ThemeLoginConfig.autofillBgColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  autofillBgColor: ThemeColorField<EntityT> = new ThemeColorField('autofillBgColor', this);
  /**
   * Representation of the [[ThemeLoginConfig.background]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  background: ThemeLoginBackgroundConfigField<EntityT> = new ThemeLoginBackgroundConfigField('background', this);
  /**
   * Representation of the [[ThemeLoginConfig.footerScheme]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  footerScheme: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('footerScheme', this, 'Edm.String');
  /**
   * Representation of the [[ThemeLoginConfig.logo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  logo: ThemeLoginLogoConfigField<EntityT> = new ThemeLoginLogoConfigField('logo', this);
  /**
   * Representation of the [[ThemeLoginConfig.primaryButton]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  primaryButton: ThemeButtonConfigField<EntityT> = new ThemeButtonConfigField('primaryButton', this);
  /**
   * Representation of the [[ThemeLoginConfig.primaryButtonOption]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  primaryButtonOption: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('primaryButtonOption', this, 'Edm.String');
}

export namespace ThemeLoginConfig {
  export function build(json: { [keys: string]: FieldType }): ThemeLoginConfig {
    return createComplexType(json, {
      autofillBgColor: (autofillBgColor: ThemeColor) => ({ autofillBgColor: ThemeColor.build(autofillBgColor) }),
      background: (background: ThemeLoginBackgroundConfig) => ({ background: ThemeLoginBackgroundConfig.build(background) }),
      footerScheme: (footerScheme: string) => ({ footerScheme: edmToTs(footerScheme, 'Edm.String') }),
      logo: (logo: ThemeLoginLogoConfig) => ({ logo: ThemeLoginLogoConfig.build(logo) }),
      primaryButton: (primaryButton: ThemeButtonConfig) => ({ primaryButton: ThemeButtonConfig.build(primaryButton) }),
      primaryButtonOption: (primaryButtonOption: string) => ({ primaryButtonOption: edmToTs(primaryButtonOption, 'Edm.String') })
    });
  }
}
