/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SkillEntityRequestBuilder } from './SkillEntityRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "SkillEntity" of service "SFOData".
 */
export class SkillEntity extends Entity implements SkillEntityType {
  /**
   * Technical entity name for SkillEntity.
   */
  static _entityName = 'SkillEntity';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for SkillEntity.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Category.
   * Maximum length: 128.
   * @nullable
   */
  categoryDeDe?: string;
  /**
   * Category.
   * Maximum length: 128.
   * @nullable
   */
  categoryDefaultValue?: string;
  /**
   * Category.
   * Maximum length: 128.
   * @nullable
   */
  categoryEnDebug?: string;
  /**
   * Category.
   * Maximum length: 128.
   * @nullable
   */
  categoryEnGb?: string;
  /**
   * Category.
   * Maximum length: 128.
   * @nullable
   */
  categoryEnUs?: string;
  /**
   * Category.
   * Maximum length: 128.
   * @nullable
   */
  categoryEsEs?: string;
  /**
   * Category.
   * Maximum length: 128.
   * @nullable
   */
  categoryEsMx?: string;
  /**
   * Category.
   * Maximum length: 128.
   * @nullable
   */
  categoryFrCa?: string;
  /**
   * Category.
   * Maximum length: 128.
   * @nullable
   */
  categoryFrFr?: string;
  /**
   * Category.
   * Maximum length: 128.
   * @nullable
   */
  categoryItIt?: string;
  /**
   * Category.
   * Maximum length: 128.
   * @nullable
   */
  categoryLocalized?: string;
  /**
   * Category.
   * Maximum length: 128.
   * @nullable
   */
  categoryNlNl?: string;
  /**
   * Category.
   * Maximum length: 128.
   * @nullable
   */
  categoryPtBr?: string;
  /**
   * Category.
   * Maximum length: 128.
   * @nullable
   */
  categoryZhCn?: string;
  /**
   * createdBy.
   * Maximum length: 255.
   * @nullable
   */
  createdBy?: string;
  /**
   * Added.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * Definition.
   * Maximum length: 4000.
   * @nullable
   */
  definitionDeDe?: string;
  /**
   * Definition.
   * Maximum length: 4000.
   * @nullable
   */
  definitionDefaultValue?: string;
  /**
   * Definition.
   * Maximum length: 4000.
   * @nullable
   */
  definitionEnDebug?: string;
  /**
   * Definition.
   * Maximum length: 4000.
   * @nullable
   */
  definitionEnGb?: string;
  /**
   * Definition.
   * Maximum length: 4000.
   * @nullable
   */
  definitionEnUs?: string;
  /**
   * Definition.
   * Maximum length: 4000.
   * @nullable
   */
  definitionEsEs?: string;
  /**
   * Definition.
   * Maximum length: 4000.
   * @nullable
   */
  definitionEsMx?: string;
  /**
   * Definition.
   * Maximum length: 4000.
   * @nullable
   */
  definitionFrCa?: string;
  /**
   * Definition.
   * Maximum length: 4000.
   * @nullable
   */
  definitionFrFr?: string;
  /**
   * Definition.
   * Maximum length: 4000.
   * @nullable
   */
  definitionItIt?: string;
  /**
   * Definition.
   * Maximum length: 4000.
   * @nullable
   */
  definitionLocalized?: string;
  /**
   * Definition.
   * Maximum length: 4000.
   * @nullable
   */
  definitionNlNl?: string;
  /**
   * Definition.
   * Maximum length: 4000.
   * @nullable
   */
  definitionPtBr?: string;
  /**
   * Definition.
   * Maximum length: 4000.
   * @nullable
   */
  definitionZhCn?: string;
  /**
   * GUID.
   * Maximum length: 128.
   */
  externalCode!: string;
  /**
   * Group.
   * Maximum length: 128.
   * @nullable
   */
  groupDeDe?: string;
  /**
   * Group.
   * Maximum length: 128.
   * @nullable
   */
  groupDefaultValue?: string;
  /**
   * Group.
   * Maximum length: 128.
   * @nullable
   */
  groupEnDebug?: string;
  /**
   * Group.
   * Maximum length: 128.
   * @nullable
   */
  groupEnGb?: string;
  /**
   * Group.
   * Maximum length: 128.
   * @nullable
   */
  groupEnUs?: string;
  /**
   * Group.
   * Maximum length: 128.
   * @nullable
   */
  groupEsEs?: string;
  /**
   * Group.
   * Maximum length: 128.
   * @nullable
   */
  groupEsMx?: string;
  /**
   * Group.
   * Maximum length: 128.
   * @nullable
   */
  groupFrCa?: string;
  /**
   * Group.
   * Maximum length: 128.
   * @nullable
   */
  groupFrFr?: string;
  /**
   * Group.
   * Maximum length: 128.
   * @nullable
   */
  groupItIt?: string;
  /**
   * Group.
   * Maximum length: 128.
   * @nullable
   */
  groupLocalized?: string;
  /**
   * Group.
   * Maximum length: 128.
   * @nullable
   */
  groupNlNl?: string;
  /**
   * Group.
   * Maximum length: 128.
   * @nullable
   */
  groupPtBr?: string;
  /**
   * Group.
   * Maximum length: 128.
   * @nullable
   */
  groupZhCn?: string;
  /**
   * lastModifiedBy.
   * Maximum length: 255.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * Last Modified.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * Library.
   * Maximum length: 128.
   * @nullable
   */
  libNameDeDe?: string;
  /**
   * Library.
   * Maximum length: 128.
   * @nullable
   */
  libNameDefaultValue?: string;
  /**
   * Library.
   * Maximum length: 128.
   * @nullable
   */
  libNameEnDebug?: string;
  /**
   * Library.
   * Maximum length: 128.
   * @nullable
   */
  libNameEnGb?: string;
  /**
   * Library.
   * Maximum length: 128.
   * @nullable
   */
  libNameEnUs?: string;
  /**
   * Library.
   * Maximum length: 128.
   * @nullable
   */
  libNameEsEs?: string;
  /**
   * Library.
   * Maximum length: 128.
   * @nullable
   */
  libNameEsMx?: string;
  /**
   * Library.
   * Maximum length: 128.
   * @nullable
   */
  libNameFrCa?: string;
  /**
   * Library.
   * Maximum length: 128.
   * @nullable
   */
  libNameFrFr?: string;
  /**
   * Library.
   * Maximum length: 128.
   * @nullable
   */
  libNameItIt?: string;
  /**
   * Library.
   * Maximum length: 128.
   * @nullable
   */
  libNameLocalized?: string;
  /**
   * Library.
   * Maximum length: 128.
   * @nullable
   */
  libNameNlNl?: string;
  /**
   * Library.
   * Maximum length: 128.
   * @nullable
   */
  libNamePtBr?: string;
  /**
   * Library.
   * Maximum length: 128.
   * @nullable
   */
  libNameZhCn?: string;
  /**
   * Record Status.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: string;
  /**
   * Skill Name.
   * Maximum length: 256.
   * @nullable
   */
  nameDeDe?: string;
  /**
   * Skill Name.
   * Maximum length: 256.
   * @nullable
   */
  nameDefaultValue?: string;
  /**
   * Skill Name.
   * Maximum length: 256.
   * @nullable
   */
  nameEnDebug?: string;
  /**
   * Skill Name.
   * Maximum length: 256.
   * @nullable
   */
  nameEnGb?: string;
  /**
   * Skill Name.
   * Maximum length: 256.
   * @nullable
   */
  nameEnUs?: string;
  /**
   * Skill Name.
   * Maximum length: 256.
   * @nullable
   */
  nameEsEs?: string;
  /**
   * Skill Name.
   * Maximum length: 256.
   * @nullable
   */
  nameEsMx?: string;
  /**
   * Skill Name.
   * Maximum length: 256.
   * @nullable
   */
  nameFrCa?: string;
  /**
   * Skill Name.
   * Maximum length: 256.
   * @nullable
   */
  nameFrFr?: string;
  /**
   * Skill Name.
   * Maximum length: 256.
   * @nullable
   */
  nameItIt?: string;
  /**
   * Skill Name.
   * Maximum length: 256.
   * @nullable
   */
  nameLocalized?: string;
  /**
   * Skill Name.
   * Maximum length: 256.
   * @nullable
   */
  nameNlNl?: string;
  /**
   * Skill Name.
   * Maximum length: 256.
   * @nullable
   */
  namePtBr?: string;
  /**
   * Skill Name.
   * Maximum length: 256.
   * @nullable
   */
  nameZhCn?: string;
  /**
   * Proficiency Level 1.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel1DeDe?: string;
  /**
   * Proficiency Level 1.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel1DefaultValue?: string;
  /**
   * Proficiency Level 1.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel1EnDebug?: string;
  /**
   * Proficiency Level 1.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel1EnGb?: string;
  /**
   * Proficiency Level 1.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel1EnUs?: string;
  /**
   * Proficiency Level 1.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel1EsEs?: string;
  /**
   * Proficiency Level 1.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel1EsMx?: string;
  /**
   * Proficiency Level 1.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel1FrCa?: string;
  /**
   * Proficiency Level 1.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel1FrFr?: string;
  /**
   * Proficiency Level 1.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel1ItIt?: string;
  /**
   * Proficiency Level 1.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel1Localized?: string;
  /**
   * Proficiency Level 1.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel1NlNl?: string;
  /**
   * Proficiency Level 1.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel1PtBr?: string;
  /**
   * Proficiency Level 1.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel1ZhCn?: string;
  /**
   * Proficiency Level 2.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel2DeDe?: string;
  /**
   * Proficiency Level 2.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel2DefaultValue?: string;
  /**
   * Proficiency Level 2.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel2EnDebug?: string;
  /**
   * Proficiency Level 2.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel2EnGb?: string;
  /**
   * Proficiency Level 2.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel2EnUs?: string;
  /**
   * Proficiency Level 2.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel2EsEs?: string;
  /**
   * Proficiency Level 2.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel2EsMx?: string;
  /**
   * Proficiency Level 2.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel2FrCa?: string;
  /**
   * Proficiency Level 2.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel2FrFr?: string;
  /**
   * Proficiency Level 2.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel2ItIt?: string;
  /**
   * Proficiency Level 2.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel2Localized?: string;
  /**
   * Proficiency Level 2.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel2NlNl?: string;
  /**
   * Proficiency Level 2.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel2PtBr?: string;
  /**
   * Proficiency Level 2.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel2ZhCn?: string;
  /**
   * Proficiency Level 3.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel3DeDe?: string;
  /**
   * Proficiency Level 3.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel3DefaultValue?: string;
  /**
   * Proficiency Level 3.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel3EnDebug?: string;
  /**
   * Proficiency Level 3.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel3EnGb?: string;
  /**
   * Proficiency Level 3.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel3EnUs?: string;
  /**
   * Proficiency Level 3.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel3EsEs?: string;
  /**
   * Proficiency Level 3.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel3EsMx?: string;
  /**
   * Proficiency Level 3.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel3FrCa?: string;
  /**
   * Proficiency Level 3.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel3FrFr?: string;
  /**
   * Proficiency Level 3.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel3ItIt?: string;
  /**
   * Proficiency Level 3.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel3Localized?: string;
  /**
   * Proficiency Level 3.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel3NlNl?: string;
  /**
   * Proficiency Level 3.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel3PtBr?: string;
  /**
   * Proficiency Level 3.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel3ZhCn?: string;
  /**
   * Proficiency Level 4.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel4DeDe?: string;
  /**
   * Proficiency Level 4.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel4DefaultValue?: string;
  /**
   * Proficiency Level 4.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel4EnDebug?: string;
  /**
   * Proficiency Level 4.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel4EnGb?: string;
  /**
   * Proficiency Level 4.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel4EnUs?: string;
  /**
   * Proficiency Level 4.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel4EsEs?: string;
  /**
   * Proficiency Level 4.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel4EsMx?: string;
  /**
   * Proficiency Level 4.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel4FrCa?: string;
  /**
   * Proficiency Level 4.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel4FrFr?: string;
  /**
   * Proficiency Level 4.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel4ItIt?: string;
  /**
   * Proficiency Level 4.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel4Localized?: string;
  /**
   * Proficiency Level 4.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel4NlNl?: string;
  /**
   * Proficiency Level 4.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel4PtBr?: string;
  /**
   * Proficiency Level 4.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel4ZhCn?: string;
  /**
   * Proficiency Level 5.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel5DeDe?: string;
  /**
   * Proficiency Level 5.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel5DefaultValue?: string;
  /**
   * Proficiency Level 5.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel5EnDebug?: string;
  /**
   * Proficiency Level 5.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel5EnGb?: string;
  /**
   * Proficiency Level 5.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel5EnUs?: string;
  /**
   * Proficiency Level 5.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel5EsEs?: string;
  /**
   * Proficiency Level 5.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel5EsMx?: string;
  /**
   * Proficiency Level 5.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel5FrCa?: string;
  /**
   * Proficiency Level 5.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel5FrFr?: string;
  /**
   * Proficiency Level 5.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel5ItIt?: string;
  /**
   * Proficiency Level 5.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel5Localized?: string;
  /**
   * Proficiency Level 5.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel5NlNl?: string;
  /**
   * Proficiency Level 5.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel5PtBr?: string;
  /**
   * Proficiency Level 5.
   * Maximum length: 4000.
   * @nullable
   */
  proLevel5ZhCn?: string;
  /**
   * Status.
   * Maximum length: 255.
   * @nullable
   */
  status?: string;
  /**
   * subModule.
   * Maximum length: 255.
   * @nullable
   */
  subModule?: string;
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  categoryTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  definitionTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  groupTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  libNameTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  nameTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  proLevel1TranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  proLevel2TranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  proLevel3TranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  proLevel4TranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  proLevel5TranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  statusNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `SkillEntity`.
   * @returns A builder that constructs instances of entity type `SkillEntity`.
   */
  static builder(): EntityBuilderType<SkillEntity, SkillEntityTypeForceMandatory> {
    return Entity.entityBuilder(SkillEntity);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SkillEntity` entity type.
   * @returns A `SkillEntity` request builder.
   */
  static requestBuilder(): SkillEntityRequestBuilder {
    return new SkillEntityRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SkillEntity`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SkillEntity`.
   */
  static customField(fieldName: string): CustomField<SkillEntity> {
    return Entity.customFieldSelector(fieldName, SkillEntity);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { User, UserType } from './User';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { WfRequest, WfRequestType } from './WfRequest';

export interface SkillEntityType {
  categoryDeDe?: string;
  categoryDefaultValue?: string;
  categoryEnDebug?: string;
  categoryEnGb?: string;
  categoryEnUs?: string;
  categoryEsEs?: string;
  categoryEsMx?: string;
  categoryFrCa?: string;
  categoryFrFr?: string;
  categoryItIt?: string;
  categoryLocalized?: string;
  categoryNlNl?: string;
  categoryPtBr?: string;
  categoryZhCn?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  definitionDeDe?: string;
  definitionDefaultValue?: string;
  definitionEnDebug?: string;
  definitionEnGb?: string;
  definitionEnUs?: string;
  definitionEsEs?: string;
  definitionEsMx?: string;
  definitionFrCa?: string;
  definitionFrFr?: string;
  definitionItIt?: string;
  definitionLocalized?: string;
  definitionNlNl?: string;
  definitionPtBr?: string;
  definitionZhCn?: string;
  externalCode: string;
  groupDeDe?: string;
  groupDefaultValue?: string;
  groupEnDebug?: string;
  groupEnGb?: string;
  groupEnUs?: string;
  groupEsEs?: string;
  groupEsMx?: string;
  groupFrCa?: string;
  groupFrFr?: string;
  groupItIt?: string;
  groupLocalized?: string;
  groupNlNl?: string;
  groupPtBr?: string;
  groupZhCn?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  libNameDeDe?: string;
  libNameDefaultValue?: string;
  libNameEnDebug?: string;
  libNameEnGb?: string;
  libNameEnUs?: string;
  libNameEsEs?: string;
  libNameEsMx?: string;
  libNameFrCa?: string;
  libNameFrFr?: string;
  libNameItIt?: string;
  libNameLocalized?: string;
  libNameNlNl?: string;
  libNamePtBr?: string;
  libNameZhCn?: string;
  mdfSystemRecordStatus?: string;
  nameDeDe?: string;
  nameDefaultValue?: string;
  nameEnDebug?: string;
  nameEnGb?: string;
  nameEnUs?: string;
  nameEsEs?: string;
  nameEsMx?: string;
  nameFrCa?: string;
  nameFrFr?: string;
  nameItIt?: string;
  nameLocalized?: string;
  nameNlNl?: string;
  namePtBr?: string;
  nameZhCn?: string;
  proLevel1DeDe?: string;
  proLevel1DefaultValue?: string;
  proLevel1EnDebug?: string;
  proLevel1EnGb?: string;
  proLevel1EnUs?: string;
  proLevel1EsEs?: string;
  proLevel1EsMx?: string;
  proLevel1FrCa?: string;
  proLevel1FrFr?: string;
  proLevel1ItIt?: string;
  proLevel1Localized?: string;
  proLevel1NlNl?: string;
  proLevel1PtBr?: string;
  proLevel1ZhCn?: string;
  proLevel2DeDe?: string;
  proLevel2DefaultValue?: string;
  proLevel2EnDebug?: string;
  proLevel2EnGb?: string;
  proLevel2EnUs?: string;
  proLevel2EsEs?: string;
  proLevel2EsMx?: string;
  proLevel2FrCa?: string;
  proLevel2FrFr?: string;
  proLevel2ItIt?: string;
  proLevel2Localized?: string;
  proLevel2NlNl?: string;
  proLevel2PtBr?: string;
  proLevel2ZhCn?: string;
  proLevel3DeDe?: string;
  proLevel3DefaultValue?: string;
  proLevel3EnDebug?: string;
  proLevel3EnGb?: string;
  proLevel3EnUs?: string;
  proLevel3EsEs?: string;
  proLevel3EsMx?: string;
  proLevel3FrCa?: string;
  proLevel3FrFr?: string;
  proLevel3ItIt?: string;
  proLevel3Localized?: string;
  proLevel3NlNl?: string;
  proLevel3PtBr?: string;
  proLevel3ZhCn?: string;
  proLevel4DeDe?: string;
  proLevel4DefaultValue?: string;
  proLevel4EnDebug?: string;
  proLevel4EnGb?: string;
  proLevel4EnUs?: string;
  proLevel4EsEs?: string;
  proLevel4EsMx?: string;
  proLevel4FrCa?: string;
  proLevel4FrFr?: string;
  proLevel4ItIt?: string;
  proLevel4Localized?: string;
  proLevel4NlNl?: string;
  proLevel4PtBr?: string;
  proLevel4ZhCn?: string;
  proLevel5DeDe?: string;
  proLevel5DefaultValue?: string;
  proLevel5EnDebug?: string;
  proLevel5EnGb?: string;
  proLevel5EnUs?: string;
  proLevel5EsEs?: string;
  proLevel5EsMx?: string;
  proLevel5FrCa?: string;
  proLevel5FrFr?: string;
  proLevel5ItIt?: string;
  proLevel5Localized?: string;
  proLevel5NlNl?: string;
  proLevel5PtBr?: string;
  proLevel5ZhCn?: string;
  status?: string;
  subModule?: string;
  categoryTranslationTextNav: MdfLocalizedValueType[];
  createdByNav: UserType;
  definitionTranslationTextNav: MdfLocalizedValueType[];
  groupTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  libNameTranslationTextNav: MdfLocalizedValueType[];
  mdfSystemRecordStatusNav: MdfEnumValueType;
  nameTranslationTextNav: MdfLocalizedValueType[];
  proLevel1TranslationTextNav: MdfLocalizedValueType[];
  proLevel2TranslationTextNav: MdfLocalizedValueType[];
  proLevel3TranslationTextNav: MdfLocalizedValueType[];
  proLevel4TranslationTextNav: MdfLocalizedValueType[];
  proLevel5TranslationTextNav: MdfLocalizedValueType[];
  statusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export interface SkillEntityTypeForceMandatory {
  categoryDeDe: string;
  categoryDefaultValue: string;
  categoryEnDebug: string;
  categoryEnGb: string;
  categoryEnUs: string;
  categoryEsEs: string;
  categoryEsMx: string;
  categoryFrCa: string;
  categoryFrFr: string;
  categoryItIt: string;
  categoryLocalized: string;
  categoryNlNl: string;
  categoryPtBr: string;
  categoryZhCn: string;
  createdBy: string;
  createdDateTime: Moment;
  definitionDeDe: string;
  definitionDefaultValue: string;
  definitionEnDebug: string;
  definitionEnGb: string;
  definitionEnUs: string;
  definitionEsEs: string;
  definitionEsMx: string;
  definitionFrCa: string;
  definitionFrFr: string;
  definitionItIt: string;
  definitionLocalized: string;
  definitionNlNl: string;
  definitionPtBr: string;
  definitionZhCn: string;
  externalCode: string;
  groupDeDe: string;
  groupDefaultValue: string;
  groupEnDebug: string;
  groupEnGb: string;
  groupEnUs: string;
  groupEsEs: string;
  groupEsMx: string;
  groupFrCa: string;
  groupFrFr: string;
  groupItIt: string;
  groupLocalized: string;
  groupNlNl: string;
  groupPtBr: string;
  groupZhCn: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  libNameDeDe: string;
  libNameDefaultValue: string;
  libNameEnDebug: string;
  libNameEnGb: string;
  libNameEnUs: string;
  libNameEsEs: string;
  libNameEsMx: string;
  libNameFrCa: string;
  libNameFrFr: string;
  libNameItIt: string;
  libNameLocalized: string;
  libNameNlNl: string;
  libNamePtBr: string;
  libNameZhCn: string;
  mdfSystemRecordStatus: string;
  nameDeDe: string;
  nameDefaultValue: string;
  nameEnDebug: string;
  nameEnGb: string;
  nameEnUs: string;
  nameEsEs: string;
  nameEsMx: string;
  nameFrCa: string;
  nameFrFr: string;
  nameItIt: string;
  nameLocalized: string;
  nameNlNl: string;
  namePtBr: string;
  nameZhCn: string;
  proLevel1DeDe: string;
  proLevel1DefaultValue: string;
  proLevel1EnDebug: string;
  proLevel1EnGb: string;
  proLevel1EnUs: string;
  proLevel1EsEs: string;
  proLevel1EsMx: string;
  proLevel1FrCa: string;
  proLevel1FrFr: string;
  proLevel1ItIt: string;
  proLevel1Localized: string;
  proLevel1NlNl: string;
  proLevel1PtBr: string;
  proLevel1ZhCn: string;
  proLevel2DeDe: string;
  proLevel2DefaultValue: string;
  proLevel2EnDebug: string;
  proLevel2EnGb: string;
  proLevel2EnUs: string;
  proLevel2EsEs: string;
  proLevel2EsMx: string;
  proLevel2FrCa: string;
  proLevel2FrFr: string;
  proLevel2ItIt: string;
  proLevel2Localized: string;
  proLevel2NlNl: string;
  proLevel2PtBr: string;
  proLevel2ZhCn: string;
  proLevel3DeDe: string;
  proLevel3DefaultValue: string;
  proLevel3EnDebug: string;
  proLevel3EnGb: string;
  proLevel3EnUs: string;
  proLevel3EsEs: string;
  proLevel3EsMx: string;
  proLevel3FrCa: string;
  proLevel3FrFr: string;
  proLevel3ItIt: string;
  proLevel3Localized: string;
  proLevel3NlNl: string;
  proLevel3PtBr: string;
  proLevel3ZhCn: string;
  proLevel4DeDe: string;
  proLevel4DefaultValue: string;
  proLevel4EnDebug: string;
  proLevel4EnGb: string;
  proLevel4EnUs: string;
  proLevel4EsEs: string;
  proLevel4EsMx: string;
  proLevel4FrCa: string;
  proLevel4FrFr: string;
  proLevel4ItIt: string;
  proLevel4Localized: string;
  proLevel4NlNl: string;
  proLevel4PtBr: string;
  proLevel4ZhCn: string;
  proLevel5DeDe: string;
  proLevel5DefaultValue: string;
  proLevel5EnDebug: string;
  proLevel5EnGb: string;
  proLevel5EnUs: string;
  proLevel5EsEs: string;
  proLevel5EsMx: string;
  proLevel5FrCa: string;
  proLevel5FrFr: string;
  proLevel5ItIt: string;
  proLevel5Localized: string;
  proLevel5NlNl: string;
  proLevel5PtBr: string;
  proLevel5ZhCn: string;
  status: string;
  subModule: string;
  categoryTranslationTextNav: MdfLocalizedValueType[];
  createdByNav: UserType;
  definitionTranslationTextNav: MdfLocalizedValueType[];
  groupTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  libNameTranslationTextNav: MdfLocalizedValueType[];
  mdfSystemRecordStatusNav: MdfEnumValueType;
  nameTranslationTextNav: MdfLocalizedValueType[];
  proLevel1TranslationTextNav: MdfLocalizedValueType[];
  proLevel2TranslationTextNav: MdfLocalizedValueType[];
  proLevel3TranslationTextNav: MdfLocalizedValueType[];
  proLevel4TranslationTextNav: MdfLocalizedValueType[];
  proLevel5TranslationTextNav: MdfLocalizedValueType[];
  statusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export namespace SkillEntity {
  /**
   * Static representation of the [[categoryDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_DE_DE: StringField<SkillEntity> = new StringField('category_de_DE', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[categoryDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_DEFAULT_VALUE: StringField<SkillEntity> = new StringField('category_defaultValue', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[categoryEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_EN_DEBUG: StringField<SkillEntity> = new StringField('category_en_DEBUG', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[categoryEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_EN_GB: StringField<SkillEntity> = new StringField('category_en_GB', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[categoryEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_EN_US: StringField<SkillEntity> = new StringField('category_en_US', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[categoryEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_ES_ES: StringField<SkillEntity> = new StringField('category_es_ES', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[categoryEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_ES_MX: StringField<SkillEntity> = new StringField('category_es_MX', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[categoryFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_FR_CA: StringField<SkillEntity> = new StringField('category_fr_CA', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[categoryFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_FR_FR: StringField<SkillEntity> = new StringField('category_fr_FR', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[categoryItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_IT_IT: StringField<SkillEntity> = new StringField('category_it_IT', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[categoryLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_LOCALIZED: StringField<SkillEntity> = new StringField('category_localized', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[categoryNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_NL_NL: StringField<SkillEntity> = new StringField('category_nl_NL', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[categoryPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_PT_BR: StringField<SkillEntity> = new StringField('category_pt_BR', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[categoryZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_ZH_CN: StringField<SkillEntity> = new StringField('category_zh_CN', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<SkillEntity> = new StringField('createdBy', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<SkillEntity> = new DateField('createdDateTime', SkillEntity, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[definitionDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFINITION_DE_DE: StringField<SkillEntity> = new StringField('definition_de_DE', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[definitionDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFINITION_DEFAULT_VALUE: StringField<SkillEntity> = new StringField('definition_defaultValue', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[definitionEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFINITION_EN_DEBUG: StringField<SkillEntity> = new StringField('definition_en_DEBUG', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[definitionEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFINITION_EN_GB: StringField<SkillEntity> = new StringField('definition_en_GB', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[definitionEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFINITION_EN_US: StringField<SkillEntity> = new StringField('definition_en_US', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[definitionEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFINITION_ES_ES: StringField<SkillEntity> = new StringField('definition_es_ES', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[definitionEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFINITION_ES_MX: StringField<SkillEntity> = new StringField('definition_es_MX', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[definitionFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFINITION_FR_CA: StringField<SkillEntity> = new StringField('definition_fr_CA', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[definitionFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFINITION_FR_FR: StringField<SkillEntity> = new StringField('definition_fr_FR', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[definitionItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFINITION_IT_IT: StringField<SkillEntity> = new StringField('definition_it_IT', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[definitionLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFINITION_LOCALIZED: StringField<SkillEntity> = new StringField('definition_localized', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[definitionNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFINITION_NL_NL: StringField<SkillEntity> = new StringField('definition_nl_NL', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[definitionPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFINITION_PT_BR: StringField<SkillEntity> = new StringField('definition_pt_BR', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[definitionZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFINITION_ZH_CN: StringField<SkillEntity> = new StringField('definition_zh_CN', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<SkillEntity> = new StringField('externalCode', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[groupDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_DE_DE: StringField<SkillEntity> = new StringField('group_de_DE', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[groupDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_DEFAULT_VALUE: StringField<SkillEntity> = new StringField('group_defaultValue', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[groupEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_EN_DEBUG: StringField<SkillEntity> = new StringField('group_en_DEBUG', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[groupEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_EN_GB: StringField<SkillEntity> = new StringField('group_en_GB', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[groupEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_EN_US: StringField<SkillEntity> = new StringField('group_en_US', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[groupEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_ES_ES: StringField<SkillEntity> = new StringField('group_es_ES', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[groupEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_ES_MX: StringField<SkillEntity> = new StringField('group_es_MX', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[groupFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_FR_CA: StringField<SkillEntity> = new StringField('group_fr_CA', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[groupFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_FR_FR: StringField<SkillEntity> = new StringField('group_fr_FR', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[groupItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_IT_IT: StringField<SkillEntity> = new StringField('group_it_IT', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[groupLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_LOCALIZED: StringField<SkillEntity> = new StringField('group_localized', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[groupNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_NL_NL: StringField<SkillEntity> = new StringField('group_nl_NL', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[groupPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_PT_BR: StringField<SkillEntity> = new StringField('group_pt_BR', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[groupZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_ZH_CN: StringField<SkillEntity> = new StringField('group_zh_CN', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<SkillEntity> = new StringField('lastModifiedBy', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<SkillEntity> = new DateField('lastModifiedDateTime', SkillEntity, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[libNameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LIB_NAME_DE_DE: StringField<SkillEntity> = new StringField('libName_de_DE', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[libNameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LIB_NAME_DEFAULT_VALUE: StringField<SkillEntity> = new StringField('libName_defaultValue', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[libNameEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LIB_NAME_EN_DEBUG: StringField<SkillEntity> = new StringField('libName_en_DEBUG', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[libNameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LIB_NAME_EN_GB: StringField<SkillEntity> = new StringField('libName_en_GB', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[libNameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LIB_NAME_EN_US: StringField<SkillEntity> = new StringField('libName_en_US', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[libNameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LIB_NAME_ES_ES: StringField<SkillEntity> = new StringField('libName_es_ES', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[libNameEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LIB_NAME_ES_MX: StringField<SkillEntity> = new StringField('libName_es_MX', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[libNameFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LIB_NAME_FR_CA: StringField<SkillEntity> = new StringField('libName_fr_CA', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[libNameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LIB_NAME_FR_FR: StringField<SkillEntity> = new StringField('libName_fr_FR', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[libNameItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LIB_NAME_IT_IT: StringField<SkillEntity> = new StringField('libName_it_IT', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[libNameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LIB_NAME_LOCALIZED: StringField<SkillEntity> = new StringField('libName_localized', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[libNameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LIB_NAME_NL_NL: StringField<SkillEntity> = new StringField('libName_nl_NL', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[libNamePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LIB_NAME_PT_BR: StringField<SkillEntity> = new StringField('libName_pt_BR', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[libNameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LIB_NAME_ZH_CN: StringField<SkillEntity> = new StringField('libName_zh_CN', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<SkillEntity> = new StringField('mdfSystemRecordStatus', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[nameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_DE_DE: StringField<SkillEntity> = new StringField('name_de_DE', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[nameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_DEFAULT_VALUE: StringField<SkillEntity> = new StringField('name_defaultValue', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[nameEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_EN_DEBUG: StringField<SkillEntity> = new StringField('name_en_DEBUG', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[nameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_EN_GB: StringField<SkillEntity> = new StringField('name_en_GB', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[nameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_EN_US: StringField<SkillEntity> = new StringField('name_en_US', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[nameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ES_ES: StringField<SkillEntity> = new StringField('name_es_ES', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[nameEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ES_MX: StringField<SkillEntity> = new StringField('name_es_MX', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[nameFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_FR_CA: StringField<SkillEntity> = new StringField('name_fr_CA', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[nameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_FR_FR: StringField<SkillEntity> = new StringField('name_fr_FR', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[nameItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_IT_IT: StringField<SkillEntity> = new StringField('name_it_IT', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[nameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_LOCALIZED: StringField<SkillEntity> = new StringField('name_localized', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[nameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_NL_NL: StringField<SkillEntity> = new StringField('name_nl_NL', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[namePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_PT_BR: StringField<SkillEntity> = new StringField('name_pt_BR', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[nameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ZH_CN: StringField<SkillEntity> = new StringField('name_zh_CN', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel1DeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_1_DE_DE: StringField<SkillEntity> = new StringField('proLevel1_de_DE', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel1DefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_1_DEFAULT_VALUE: StringField<SkillEntity> = new StringField('proLevel1_defaultValue', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel1EnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_1_EN_DEBUG: StringField<SkillEntity> = new StringField('proLevel1_en_DEBUG', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel1EnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_1_EN_GB: StringField<SkillEntity> = new StringField('proLevel1_en_GB', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel1EnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_1_EN_US: StringField<SkillEntity> = new StringField('proLevel1_en_US', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel1EsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_1_ES_ES: StringField<SkillEntity> = new StringField('proLevel1_es_ES', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel1EsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_1_ES_MX: StringField<SkillEntity> = new StringField('proLevel1_es_MX', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel1FrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_1_FR_CA: StringField<SkillEntity> = new StringField('proLevel1_fr_CA', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel1FrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_1_FR_FR: StringField<SkillEntity> = new StringField('proLevel1_fr_FR', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel1ItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_1_IT_IT: StringField<SkillEntity> = new StringField('proLevel1_it_IT', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel1Localized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_1_LOCALIZED: StringField<SkillEntity> = new StringField('proLevel1_localized', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel1NlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_1_NL_NL: StringField<SkillEntity> = new StringField('proLevel1_nl_NL', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel1PtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_1_PT_BR: StringField<SkillEntity> = new StringField('proLevel1_pt_BR', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel1ZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_1_ZH_CN: StringField<SkillEntity> = new StringField('proLevel1_zh_CN', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel2DeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_2_DE_DE: StringField<SkillEntity> = new StringField('proLevel2_de_DE', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel2DefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_2_DEFAULT_VALUE: StringField<SkillEntity> = new StringField('proLevel2_defaultValue', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel2EnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_2_EN_DEBUG: StringField<SkillEntity> = new StringField('proLevel2_en_DEBUG', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel2EnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_2_EN_GB: StringField<SkillEntity> = new StringField('proLevel2_en_GB', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel2EnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_2_EN_US: StringField<SkillEntity> = new StringField('proLevel2_en_US', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel2EsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_2_ES_ES: StringField<SkillEntity> = new StringField('proLevel2_es_ES', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel2EsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_2_ES_MX: StringField<SkillEntity> = new StringField('proLevel2_es_MX', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel2FrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_2_FR_CA: StringField<SkillEntity> = new StringField('proLevel2_fr_CA', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel2FrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_2_FR_FR: StringField<SkillEntity> = new StringField('proLevel2_fr_FR', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel2ItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_2_IT_IT: StringField<SkillEntity> = new StringField('proLevel2_it_IT', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel2Localized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_2_LOCALIZED: StringField<SkillEntity> = new StringField('proLevel2_localized', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel2NlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_2_NL_NL: StringField<SkillEntity> = new StringField('proLevel2_nl_NL', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel2PtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_2_PT_BR: StringField<SkillEntity> = new StringField('proLevel2_pt_BR', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel2ZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_2_ZH_CN: StringField<SkillEntity> = new StringField('proLevel2_zh_CN', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel3DeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_3_DE_DE: StringField<SkillEntity> = new StringField('proLevel3_de_DE', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel3DefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_3_DEFAULT_VALUE: StringField<SkillEntity> = new StringField('proLevel3_defaultValue', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel3EnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_3_EN_DEBUG: StringField<SkillEntity> = new StringField('proLevel3_en_DEBUG', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel3EnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_3_EN_GB: StringField<SkillEntity> = new StringField('proLevel3_en_GB', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel3EnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_3_EN_US: StringField<SkillEntity> = new StringField('proLevel3_en_US', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel3EsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_3_ES_ES: StringField<SkillEntity> = new StringField('proLevel3_es_ES', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel3EsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_3_ES_MX: StringField<SkillEntity> = new StringField('proLevel3_es_MX', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel3FrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_3_FR_CA: StringField<SkillEntity> = new StringField('proLevel3_fr_CA', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel3FrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_3_FR_FR: StringField<SkillEntity> = new StringField('proLevel3_fr_FR', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel3ItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_3_IT_IT: StringField<SkillEntity> = new StringField('proLevel3_it_IT', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel3Localized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_3_LOCALIZED: StringField<SkillEntity> = new StringField('proLevel3_localized', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel3NlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_3_NL_NL: StringField<SkillEntity> = new StringField('proLevel3_nl_NL', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel3PtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_3_PT_BR: StringField<SkillEntity> = new StringField('proLevel3_pt_BR', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel3ZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_3_ZH_CN: StringField<SkillEntity> = new StringField('proLevel3_zh_CN', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel4DeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_4_DE_DE: StringField<SkillEntity> = new StringField('proLevel4_de_DE', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel4DefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_4_DEFAULT_VALUE: StringField<SkillEntity> = new StringField('proLevel4_defaultValue', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel4EnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_4_EN_DEBUG: StringField<SkillEntity> = new StringField('proLevel4_en_DEBUG', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel4EnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_4_EN_GB: StringField<SkillEntity> = new StringField('proLevel4_en_GB', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel4EnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_4_EN_US: StringField<SkillEntity> = new StringField('proLevel4_en_US', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel4EsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_4_ES_ES: StringField<SkillEntity> = new StringField('proLevel4_es_ES', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel4EsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_4_ES_MX: StringField<SkillEntity> = new StringField('proLevel4_es_MX', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel4FrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_4_FR_CA: StringField<SkillEntity> = new StringField('proLevel4_fr_CA', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel4FrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_4_FR_FR: StringField<SkillEntity> = new StringField('proLevel4_fr_FR', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel4ItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_4_IT_IT: StringField<SkillEntity> = new StringField('proLevel4_it_IT', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel4Localized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_4_LOCALIZED: StringField<SkillEntity> = new StringField('proLevel4_localized', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel4NlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_4_NL_NL: StringField<SkillEntity> = new StringField('proLevel4_nl_NL', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel4PtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_4_PT_BR: StringField<SkillEntity> = new StringField('proLevel4_pt_BR', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel4ZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_4_ZH_CN: StringField<SkillEntity> = new StringField('proLevel4_zh_CN', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel5DeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_5_DE_DE: StringField<SkillEntity> = new StringField('proLevel5_de_DE', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel5DefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_5_DEFAULT_VALUE: StringField<SkillEntity> = new StringField('proLevel5_defaultValue', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel5EnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_5_EN_DEBUG: StringField<SkillEntity> = new StringField('proLevel5_en_DEBUG', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel5EnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_5_EN_GB: StringField<SkillEntity> = new StringField('proLevel5_en_GB', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel5EnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_5_EN_US: StringField<SkillEntity> = new StringField('proLevel5_en_US', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel5EsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_5_ES_ES: StringField<SkillEntity> = new StringField('proLevel5_es_ES', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel5EsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_5_ES_MX: StringField<SkillEntity> = new StringField('proLevel5_es_MX', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel5FrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_5_FR_CA: StringField<SkillEntity> = new StringField('proLevel5_fr_CA', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel5FrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_5_FR_FR: StringField<SkillEntity> = new StringField('proLevel5_fr_FR', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel5ItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_5_IT_IT: StringField<SkillEntity> = new StringField('proLevel5_it_IT', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel5Localized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_5_LOCALIZED: StringField<SkillEntity> = new StringField('proLevel5_localized', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel5NlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_5_NL_NL: StringField<SkillEntity> = new StringField('proLevel5_nl_NL', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel5PtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_5_PT_BR: StringField<SkillEntity> = new StringField('proLevel5_pt_BR', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevel5ZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_5_ZH_CN: StringField<SkillEntity> = new StringField('proLevel5_zh_CN', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<SkillEntity> = new StringField('status', SkillEntity, 'Edm.String');
  /**
   * Static representation of the [[subModule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_MODULE: StringField<SkillEntity> = new StringField('subModule', SkillEntity, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[categoryTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_TRANSLATION_TEXT_NAV: Link<SkillEntity, MdfLocalizedValue> = new Link('categoryTranslationTextNav', SkillEntity, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<SkillEntity, User> = new OneToOneLink('createdByNav', SkillEntity, User);
  /**
   * Static representation of the one-to-many navigation property [[definitionTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFINITION_TRANSLATION_TEXT_NAV: Link<SkillEntity, MdfLocalizedValue> = new Link('definitionTranslationTextNav', SkillEntity, MdfLocalizedValue);
  /**
   * Static representation of the one-to-many navigation property [[groupTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_TRANSLATION_TEXT_NAV: Link<SkillEntity, MdfLocalizedValue> = new Link('groupTranslationTextNav', SkillEntity, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<SkillEntity, User> = new OneToOneLink('lastModifiedByNav', SkillEntity, User);
  /**
   * Static representation of the one-to-many navigation property [[libNameTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LIB_NAME_TRANSLATION_TEXT_NAV: Link<SkillEntity, MdfLocalizedValue> = new Link('libNameTranslationTextNav', SkillEntity, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<SkillEntity, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', SkillEntity, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[nameTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_TRANSLATION_TEXT_NAV: Link<SkillEntity, MdfLocalizedValue> = new Link('nameTranslationTextNav', SkillEntity, MdfLocalizedValue);
  /**
   * Static representation of the one-to-many navigation property [[proLevel1TranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_1_TRANSLATION_TEXT_NAV: Link<SkillEntity, MdfLocalizedValue> = new Link('proLevel1TranslationTextNav', SkillEntity, MdfLocalizedValue);
  /**
   * Static representation of the one-to-many navigation property [[proLevel2TranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_2_TRANSLATION_TEXT_NAV: Link<SkillEntity, MdfLocalizedValue> = new Link('proLevel2TranslationTextNav', SkillEntity, MdfLocalizedValue);
  /**
   * Static representation of the one-to-many navigation property [[proLevel3TranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_3_TRANSLATION_TEXT_NAV: Link<SkillEntity, MdfLocalizedValue> = new Link('proLevel3TranslationTextNav', SkillEntity, MdfLocalizedValue);
  /**
   * Static representation of the one-to-many navigation property [[proLevel4TranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_4_TRANSLATION_TEXT_NAV: Link<SkillEntity, MdfLocalizedValue> = new Link('proLevel4TranslationTextNav', SkillEntity, MdfLocalizedValue);
  /**
   * Static representation of the one-to-many navigation property [[proLevel5TranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_5_TRANSLATION_TEXT_NAV: Link<SkillEntity, MdfLocalizedValue> = new Link('proLevel5TranslationTextNav', SkillEntity, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<SkillEntity, MdfEnumValue> = new OneToOneLink('statusNav', SkillEntity, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<SkillEntity, WfRequest> = new Link('wfRequestNav', SkillEntity, WfRequest);
  /**
   * All fields of the SkillEntity entity.
   */
  export const _allFields: Array<StringField<SkillEntity> | DateField<SkillEntity> | Link<SkillEntity, MdfLocalizedValue> | OneToOneLink<SkillEntity, User> | OneToOneLink<SkillEntity, MdfEnumValue> | Link<SkillEntity, WfRequest>> = [
    SkillEntity.CATEGORY_DE_DE,
    SkillEntity.CATEGORY_DEFAULT_VALUE,
    SkillEntity.CATEGORY_EN_DEBUG,
    SkillEntity.CATEGORY_EN_GB,
    SkillEntity.CATEGORY_EN_US,
    SkillEntity.CATEGORY_ES_ES,
    SkillEntity.CATEGORY_ES_MX,
    SkillEntity.CATEGORY_FR_CA,
    SkillEntity.CATEGORY_FR_FR,
    SkillEntity.CATEGORY_IT_IT,
    SkillEntity.CATEGORY_LOCALIZED,
    SkillEntity.CATEGORY_NL_NL,
    SkillEntity.CATEGORY_PT_BR,
    SkillEntity.CATEGORY_ZH_CN,
    SkillEntity.CREATED_BY,
    SkillEntity.CREATED_DATE_TIME,
    SkillEntity.DEFINITION_DE_DE,
    SkillEntity.DEFINITION_DEFAULT_VALUE,
    SkillEntity.DEFINITION_EN_DEBUG,
    SkillEntity.DEFINITION_EN_GB,
    SkillEntity.DEFINITION_EN_US,
    SkillEntity.DEFINITION_ES_ES,
    SkillEntity.DEFINITION_ES_MX,
    SkillEntity.DEFINITION_FR_CA,
    SkillEntity.DEFINITION_FR_FR,
    SkillEntity.DEFINITION_IT_IT,
    SkillEntity.DEFINITION_LOCALIZED,
    SkillEntity.DEFINITION_NL_NL,
    SkillEntity.DEFINITION_PT_BR,
    SkillEntity.DEFINITION_ZH_CN,
    SkillEntity.EXTERNAL_CODE,
    SkillEntity.GROUP_DE_DE,
    SkillEntity.GROUP_DEFAULT_VALUE,
    SkillEntity.GROUP_EN_DEBUG,
    SkillEntity.GROUP_EN_GB,
    SkillEntity.GROUP_EN_US,
    SkillEntity.GROUP_ES_ES,
    SkillEntity.GROUP_ES_MX,
    SkillEntity.GROUP_FR_CA,
    SkillEntity.GROUP_FR_FR,
    SkillEntity.GROUP_IT_IT,
    SkillEntity.GROUP_LOCALIZED,
    SkillEntity.GROUP_NL_NL,
    SkillEntity.GROUP_PT_BR,
    SkillEntity.GROUP_ZH_CN,
    SkillEntity.LAST_MODIFIED_BY,
    SkillEntity.LAST_MODIFIED_DATE_TIME,
    SkillEntity.LIB_NAME_DE_DE,
    SkillEntity.LIB_NAME_DEFAULT_VALUE,
    SkillEntity.LIB_NAME_EN_DEBUG,
    SkillEntity.LIB_NAME_EN_GB,
    SkillEntity.LIB_NAME_EN_US,
    SkillEntity.LIB_NAME_ES_ES,
    SkillEntity.LIB_NAME_ES_MX,
    SkillEntity.LIB_NAME_FR_CA,
    SkillEntity.LIB_NAME_FR_FR,
    SkillEntity.LIB_NAME_IT_IT,
    SkillEntity.LIB_NAME_LOCALIZED,
    SkillEntity.LIB_NAME_NL_NL,
    SkillEntity.LIB_NAME_PT_BR,
    SkillEntity.LIB_NAME_ZH_CN,
    SkillEntity.MDF_SYSTEM_RECORD_STATUS,
    SkillEntity.NAME_DE_DE,
    SkillEntity.NAME_DEFAULT_VALUE,
    SkillEntity.NAME_EN_DEBUG,
    SkillEntity.NAME_EN_GB,
    SkillEntity.NAME_EN_US,
    SkillEntity.NAME_ES_ES,
    SkillEntity.NAME_ES_MX,
    SkillEntity.NAME_FR_CA,
    SkillEntity.NAME_FR_FR,
    SkillEntity.NAME_IT_IT,
    SkillEntity.NAME_LOCALIZED,
    SkillEntity.NAME_NL_NL,
    SkillEntity.NAME_PT_BR,
    SkillEntity.NAME_ZH_CN,
    SkillEntity.PRO_LEVEL_1_DE_DE,
    SkillEntity.PRO_LEVEL_1_DEFAULT_VALUE,
    SkillEntity.PRO_LEVEL_1_EN_DEBUG,
    SkillEntity.PRO_LEVEL_1_EN_GB,
    SkillEntity.PRO_LEVEL_1_EN_US,
    SkillEntity.PRO_LEVEL_1_ES_ES,
    SkillEntity.PRO_LEVEL_1_ES_MX,
    SkillEntity.PRO_LEVEL_1_FR_CA,
    SkillEntity.PRO_LEVEL_1_FR_FR,
    SkillEntity.PRO_LEVEL_1_IT_IT,
    SkillEntity.PRO_LEVEL_1_LOCALIZED,
    SkillEntity.PRO_LEVEL_1_NL_NL,
    SkillEntity.PRO_LEVEL_1_PT_BR,
    SkillEntity.PRO_LEVEL_1_ZH_CN,
    SkillEntity.PRO_LEVEL_2_DE_DE,
    SkillEntity.PRO_LEVEL_2_DEFAULT_VALUE,
    SkillEntity.PRO_LEVEL_2_EN_DEBUG,
    SkillEntity.PRO_LEVEL_2_EN_GB,
    SkillEntity.PRO_LEVEL_2_EN_US,
    SkillEntity.PRO_LEVEL_2_ES_ES,
    SkillEntity.PRO_LEVEL_2_ES_MX,
    SkillEntity.PRO_LEVEL_2_FR_CA,
    SkillEntity.PRO_LEVEL_2_FR_FR,
    SkillEntity.PRO_LEVEL_2_IT_IT,
    SkillEntity.PRO_LEVEL_2_LOCALIZED,
    SkillEntity.PRO_LEVEL_2_NL_NL,
    SkillEntity.PRO_LEVEL_2_PT_BR,
    SkillEntity.PRO_LEVEL_2_ZH_CN,
    SkillEntity.PRO_LEVEL_3_DE_DE,
    SkillEntity.PRO_LEVEL_3_DEFAULT_VALUE,
    SkillEntity.PRO_LEVEL_3_EN_DEBUG,
    SkillEntity.PRO_LEVEL_3_EN_GB,
    SkillEntity.PRO_LEVEL_3_EN_US,
    SkillEntity.PRO_LEVEL_3_ES_ES,
    SkillEntity.PRO_LEVEL_3_ES_MX,
    SkillEntity.PRO_LEVEL_3_FR_CA,
    SkillEntity.PRO_LEVEL_3_FR_FR,
    SkillEntity.PRO_LEVEL_3_IT_IT,
    SkillEntity.PRO_LEVEL_3_LOCALIZED,
    SkillEntity.PRO_LEVEL_3_NL_NL,
    SkillEntity.PRO_LEVEL_3_PT_BR,
    SkillEntity.PRO_LEVEL_3_ZH_CN,
    SkillEntity.PRO_LEVEL_4_DE_DE,
    SkillEntity.PRO_LEVEL_4_DEFAULT_VALUE,
    SkillEntity.PRO_LEVEL_4_EN_DEBUG,
    SkillEntity.PRO_LEVEL_4_EN_GB,
    SkillEntity.PRO_LEVEL_4_EN_US,
    SkillEntity.PRO_LEVEL_4_ES_ES,
    SkillEntity.PRO_LEVEL_4_ES_MX,
    SkillEntity.PRO_LEVEL_4_FR_CA,
    SkillEntity.PRO_LEVEL_4_FR_FR,
    SkillEntity.PRO_LEVEL_4_IT_IT,
    SkillEntity.PRO_LEVEL_4_LOCALIZED,
    SkillEntity.PRO_LEVEL_4_NL_NL,
    SkillEntity.PRO_LEVEL_4_PT_BR,
    SkillEntity.PRO_LEVEL_4_ZH_CN,
    SkillEntity.PRO_LEVEL_5_DE_DE,
    SkillEntity.PRO_LEVEL_5_DEFAULT_VALUE,
    SkillEntity.PRO_LEVEL_5_EN_DEBUG,
    SkillEntity.PRO_LEVEL_5_EN_GB,
    SkillEntity.PRO_LEVEL_5_EN_US,
    SkillEntity.PRO_LEVEL_5_ES_ES,
    SkillEntity.PRO_LEVEL_5_ES_MX,
    SkillEntity.PRO_LEVEL_5_FR_CA,
    SkillEntity.PRO_LEVEL_5_FR_FR,
    SkillEntity.PRO_LEVEL_5_IT_IT,
    SkillEntity.PRO_LEVEL_5_LOCALIZED,
    SkillEntity.PRO_LEVEL_5_NL_NL,
    SkillEntity.PRO_LEVEL_5_PT_BR,
    SkillEntity.PRO_LEVEL_5_ZH_CN,
    SkillEntity.STATUS,
    SkillEntity.SUB_MODULE,
    SkillEntity.CATEGORY_TRANSLATION_TEXT_NAV,
    SkillEntity.CREATED_BY_NAV,
    SkillEntity.DEFINITION_TRANSLATION_TEXT_NAV,
    SkillEntity.GROUP_TRANSLATION_TEXT_NAV,
    SkillEntity.LAST_MODIFIED_BY_NAV,
    SkillEntity.LIB_NAME_TRANSLATION_TEXT_NAV,
    SkillEntity.MDF_SYSTEM_RECORD_STATUS_NAV,
    SkillEntity.NAME_TRANSLATION_TEXT_NAV,
    SkillEntity.PRO_LEVEL_1_TRANSLATION_TEXT_NAV,
    SkillEntity.PRO_LEVEL_2_TRANSLATION_TEXT_NAV,
    SkillEntity.PRO_LEVEL_3_TRANSLATION_TEXT_NAV,
    SkillEntity.PRO_LEVEL_4_TRANSLATION_TEXT_NAV,
    SkillEntity.PRO_LEVEL_5_TRANSLATION_TEXT_NAV,
    SkillEntity.STATUS_NAV,
    SkillEntity.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SkillEntity> = new AllFields('*', SkillEntity);
  /**
   * All key fields of the SkillEntity entity.
   */
  export const _keyFields: Array<Selectable<SkillEntity>> = [SkillEntity.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property SkillEntity.
   */
  export const _keys: { [keys: string]: Selectable<SkillEntity> } = SkillEntity._keyFields.reduce((acc: { [keys: string]: Selectable<SkillEntity> }, field: Selectable<SkillEntity>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
