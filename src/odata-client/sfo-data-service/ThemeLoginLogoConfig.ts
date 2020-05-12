/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ThemeUrl, ThemeUrlField } from './ThemeUrl';
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * ThemeLoginLogoConfig
 */
export interface ThemeLoginLogoConfig {
  /**
   * option.
   * @nullable
   */
  option?: string;
  /**
   * systemType.
   * @nullable
   */
  systemType?: string;
  /**
   * url.
   * @nullable
   */
  url?: ThemeUrl;
}

/**
 * @deprecated since v1.6.0. Use [[ThemeLoginLogoConfig.build]] instead.
 */
export function createThemeLoginLogoConfig(json: any): ThemeLoginLogoConfig {
  return ThemeLoginLogoConfig.build(json);
}

/**
 * ThemeLoginLogoConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ThemeLoginLogoConfigField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ThemeLoginLogoConfig.option]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  option: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('option', this, 'Edm.String');
  /**
   * Representation of the [[ThemeLoginLogoConfig.systemType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  systemType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('systemType', this, 'Edm.String');
  /**
   * Representation of the [[ThemeLoginLogoConfig.url]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  url: ThemeUrlField<EntityT> = new ThemeUrlField('url', this);
}

export namespace ThemeLoginLogoConfig {
  export function build(json: { [keys: string]: FieldType }): ThemeLoginLogoConfig {
    return createComplexType(json, {
      option: (option: string) => ({ option: edmToTs(option, 'Edm.String') }),
      systemType: (systemType: string) => ({ systemType: edmToTs(systemType, 'Edm.String') }),
      url: (url: ThemeUrl) => ({ url: ThemeUrl.build(url) })
    });
  }
}
