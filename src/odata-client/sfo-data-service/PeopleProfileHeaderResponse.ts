/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { CoUserInfoElementBean, CoUserInfoElementBeanField } from './CoUserInfoElementBean';
import { CoSocialAccountBean, CoSocialAccountBeanField } from './CoSocialAccountBean';
import { ComplexTypeBigNumberPropertyField, ComplexTypeBooleanPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * PeopleProfileHeaderResponse
 */
export interface PeopleProfileHeaderResponse {
  /**
   * aboutMeVideoDeleteUrl.
   * @nullable
   */
  aboutMeVideoDeleteUrl?: string;
  /**
   * aboutMeVideoEnabled.
   * @nullable
   */
  aboutMeVideoEnabled?: boolean;
  /**
   * aboutMeVideoGetFileUrl.
   * @nullable
   */
  aboutMeVideoGetFileUrl?: string;
  /**
   * aboutMeVideoStatusUrl.
   * @nullable
   */
  aboutMeVideoStatusUrl?: string;
  /**
   * aboutMeVideoToken.
   * @nullable
   */
  aboutMeVideoToken?: string;
  /**
   * aboutMeVideoUploadId.
   * @nullable
   */
  aboutMeVideoUploadId?: string;
  /**
   * aboutMeVideoUploadUrl.
   * @nullable
   */
  aboutMeVideoUploadUrl?: string;
  /**
   * applicationId.
   * @nullable
   */
  applicationId?: string;
  /**
   * businessPhone.
   * @nullable
   */
  businessPhone?: string;
  /**
   * cellPhone.
   * @nullable
   */
  cellPhone?: string;
  /**
   * customFields.
   * @nullable
   */
  customFields?: CoUserInfoElementBean;
  /**
   * dSTSavings.
   * @nullable
   */
  dStSavings?: number;
  /**
   * department.
   * @nullable
   */
  department?: string;
  /**
   * division.
   * @nullable
   */
  division?: string;
  /**
   * email.
   * @nullable
   */
  email?: string;
  /**
   * expressivePhotoMod.
   * @nullable
   */
  expressivePhotoMod?: string;
  /**
   * fullName.
   * @nullable
   */
  fullName?: string;
  /**
   * introduction.
   * @nullable
   */
  introduction?: string;
  /**
   * isAboutMeTextEnabled.
   * @nullable
   */
  isAboutMeTextEnabled?: boolean;
  /**
   * isAllowUploadBGPhoto.
   * @nullable
   */
  isAllowUploadBgPhoto?: boolean;
  /**
   * isPercentCompleteEnabled.
   * @nullable
   */
  isPercentCompleteEnabled?: boolean;
  /**
   * isShowAsOfDate.
   * @nullable
   */
  isShowAsOfDate?: boolean;
  /**
   * isShowEditLink.
   * @nullable
   */
  isShowEditLink?: boolean;
  /**
   * isTimeZoneInDaylightTime.
   * @nullable
   */
  isTimeZoneInDaylightTime?: boolean;
  /**
   * liveProfileOriginalPhotoId.
   * @nullable
   */
  liveProfileOriginalPhotoId?: BigNumber;
  /**
   * liveProfilePhotoId.
   * @nullable
   */
  liveProfilePhotoId?: BigNumber;
  /**
   * liveProfilePhotoMod.
   * @nullable
   */
  liveProfilePhotoMod?: string;
  /**
   * localTimeEnabled.
   * @nullable
   */
  localTimeEnabled?: boolean;
  /**
   * location.
   * @nullable
   */
  location?: string;
  /**
   * mediaServiceBaseUrl.
   * @nullable
   */
  mediaServiceBaseUrl?: string;
  /**
   * myNameAudioDeleteUrl.
   * @nullable
   */
  myNameAudioDeleteUrl?: string;
  /**
   * myNameAudioGetFileUrl.
   * @nullable
   */
  myNameAudioGetFileUrl?: string;
  /**
   * myNameAudioStatusUrl.
   * @nullable
   */
  myNameAudioStatusUrl?: string;
  /**
   * myNameAudioUploadUrl.
   * @nullable
   */
  myNameAudioUploadUrl?: string;
  /**
   * myNameEnabled.
   * @nullable
   */
  myNameEnabled?: boolean;
  /**
   * myNameText.
   * @nullable
   */
  myNameText?: string;
  /**
   * myNameToken.
   * @nullable
   */
  myNameToken?: string;
  /**
   * myNameUploadId.
   * @nullable
   */
  myNameUploadId?: string;
  /**
   * phoneNumbers.
   * @nullable
   */
  phoneNumbers?: CoUserInfoElementBean;
  /**
   * showLiveProfilePhoto.
   * @nullable
   */
  showLiveProfilePhoto?: boolean;
  /**
   * socialAccounts.
   * @nullable
   */
  socialAccounts?: CoSocialAccountBean;
  /**
   * socialNetworks.
   * @nullable
   */
  socialNetworks?: CoUserInfoElementBean;
  /**
   * targetUserId.
   */
  targetUserId: string;
  /**
   * timezone.
   * @nullable
   */
  timezone?: string;
  /**
   * title.
   * @nullable
   */
  title?: string;
  /**
   * userName.
   * @nullable
   */
  userName?: string;
  /**
   * utcOffset.
   * @nullable
   */
  utcOffset?: number;
}

/**
 * @deprecated since v1.6.0. Use [[PeopleProfileHeaderResponse.build]] instead.
 */
export function createPeopleProfileHeaderResponse(json: any): PeopleProfileHeaderResponse {
  return PeopleProfileHeaderResponse.build(json);
}

/**
 * PeopleProfileHeaderResponseField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PeopleProfileHeaderResponseField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[PeopleProfileHeaderResponse.aboutMeVideoDeleteUrl]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  aboutMeVideoDeleteUrl: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('aboutMeVideoDeleteUrl', this, 'Edm.String');
  /**
   * Representation of the [[PeopleProfileHeaderResponse.aboutMeVideoEnabled]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  aboutMeVideoEnabled: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('aboutMeVideoEnabled', this, 'Edm.Boolean');
  /**
   * Representation of the [[PeopleProfileHeaderResponse.aboutMeVideoGetFileUrl]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  aboutMeVideoGetFileUrl: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('aboutMeVideoGetFileUrl', this, 'Edm.String');
  /**
   * Representation of the [[PeopleProfileHeaderResponse.aboutMeVideoStatusUrl]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  aboutMeVideoStatusUrl: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('aboutMeVideoStatusUrl', this, 'Edm.String');
  /**
   * Representation of the [[PeopleProfileHeaderResponse.aboutMeVideoToken]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  aboutMeVideoToken: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('aboutMeVideoToken', this, 'Edm.String');
  /**
   * Representation of the [[PeopleProfileHeaderResponse.aboutMeVideoUploadId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  aboutMeVideoUploadId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('aboutMeVideoUploadId', this, 'Edm.String');
  /**
   * Representation of the [[PeopleProfileHeaderResponse.aboutMeVideoUploadUrl]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  aboutMeVideoUploadUrl: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('aboutMeVideoUploadUrl', this, 'Edm.String');
  /**
   * Representation of the [[PeopleProfileHeaderResponse.applicationId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  applicationId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('applicationId', this, 'Edm.String');
  /**
   * Representation of the [[PeopleProfileHeaderResponse.businessPhone]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  businessPhone: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('businessPhone', this, 'Edm.String');
  /**
   * Representation of the [[PeopleProfileHeaderResponse.cellPhone]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cellPhone: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('cellPhone', this, 'Edm.String');
  /**
   * Representation of the [[PeopleProfileHeaderResponse.customFields]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customFields: CoUserInfoElementBeanField<EntityT> = new CoUserInfoElementBeanField('customFields', this);
  /**
   * Representation of the [[PeopleProfileHeaderResponse.dStSavings]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dStSavings: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('dSTSavings', this, 'Edm.Int32');
  /**
   * Representation of the [[PeopleProfileHeaderResponse.department]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  department: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('department', this, 'Edm.String');
  /**
   * Representation of the [[PeopleProfileHeaderResponse.division]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  division: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('division', this, 'Edm.String');
  /**
   * Representation of the [[PeopleProfileHeaderResponse.email]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  email: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('email', this, 'Edm.String');
  /**
   * Representation of the [[PeopleProfileHeaderResponse.expressivePhotoMod]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expressivePhotoMod: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('expressivePhotoMod', this, 'Edm.String');
  /**
   * Representation of the [[PeopleProfileHeaderResponse.fullName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fullName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('fullName', this, 'Edm.String');
  /**
   * Representation of the [[PeopleProfileHeaderResponse.introduction]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  introduction: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('introduction', this, 'Edm.String');
  /**
   * Representation of the [[PeopleProfileHeaderResponse.isAboutMeTextEnabled]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isAboutMeTextEnabled: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('isAboutMeTextEnabled', this, 'Edm.Boolean');
  /**
   * Representation of the [[PeopleProfileHeaderResponse.isAllowUploadBgPhoto]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isAllowUploadBgPhoto: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('isAllowUploadBGPhoto', this, 'Edm.Boolean');
  /**
   * Representation of the [[PeopleProfileHeaderResponse.isPercentCompleteEnabled]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isPercentCompleteEnabled: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('isPercentCompleteEnabled', this, 'Edm.Boolean');
  /**
   * Representation of the [[PeopleProfileHeaderResponse.isShowAsOfDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isShowAsOfDate: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('isShowAsOfDate', this, 'Edm.Boolean');
  /**
   * Representation of the [[PeopleProfileHeaderResponse.isShowEditLink]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isShowEditLink: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('isShowEditLink', this, 'Edm.Boolean');
  /**
   * Representation of the [[PeopleProfileHeaderResponse.isTimeZoneInDaylightTime]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isTimeZoneInDaylightTime: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('isTimeZoneInDaylightTime', this, 'Edm.Boolean');
  /**
   * Representation of the [[PeopleProfileHeaderResponse.liveProfileOriginalPhotoId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  liveProfileOriginalPhotoId: ComplexTypeBigNumberPropertyField<EntityT> = new ComplexTypeBigNumberPropertyField('liveProfileOriginalPhotoId', this, 'Edm.Int64');
  /**
   * Representation of the [[PeopleProfileHeaderResponse.liveProfilePhotoId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  liveProfilePhotoId: ComplexTypeBigNumberPropertyField<EntityT> = new ComplexTypeBigNumberPropertyField('liveProfilePhotoId', this, 'Edm.Int64');
  /**
   * Representation of the [[PeopleProfileHeaderResponse.liveProfilePhotoMod]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  liveProfilePhotoMod: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('liveProfilePhotoMod', this, 'Edm.String');
  /**
   * Representation of the [[PeopleProfileHeaderResponse.localTimeEnabled]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  localTimeEnabled: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('localTimeEnabled', this, 'Edm.Boolean');
  /**
   * Representation of the [[PeopleProfileHeaderResponse.location]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  location: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('location', this, 'Edm.String');
  /**
   * Representation of the [[PeopleProfileHeaderResponse.mediaServiceBaseUrl]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  mediaServiceBaseUrl: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('mediaServiceBaseUrl', this, 'Edm.String');
  /**
   * Representation of the [[PeopleProfileHeaderResponse.myNameAudioDeleteUrl]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  myNameAudioDeleteUrl: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('myNameAudioDeleteUrl', this, 'Edm.String');
  /**
   * Representation of the [[PeopleProfileHeaderResponse.myNameAudioGetFileUrl]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  myNameAudioGetFileUrl: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('myNameAudioGetFileUrl', this, 'Edm.String');
  /**
   * Representation of the [[PeopleProfileHeaderResponse.myNameAudioStatusUrl]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  myNameAudioStatusUrl: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('myNameAudioStatusUrl', this, 'Edm.String');
  /**
   * Representation of the [[PeopleProfileHeaderResponse.myNameAudioUploadUrl]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  myNameAudioUploadUrl: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('myNameAudioUploadUrl', this, 'Edm.String');
  /**
   * Representation of the [[PeopleProfileHeaderResponse.myNameEnabled]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  myNameEnabled: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('myNameEnabled', this, 'Edm.Boolean');
  /**
   * Representation of the [[PeopleProfileHeaderResponse.myNameText]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  myNameText: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('myNameText', this, 'Edm.String');
  /**
   * Representation of the [[PeopleProfileHeaderResponse.myNameToken]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  myNameToken: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('myNameToken', this, 'Edm.String');
  /**
   * Representation of the [[PeopleProfileHeaderResponse.myNameUploadId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  myNameUploadId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('myNameUploadId', this, 'Edm.String');
  /**
   * Representation of the [[PeopleProfileHeaderResponse.phoneNumbers]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  phoneNumbers: CoUserInfoElementBeanField<EntityT> = new CoUserInfoElementBeanField('phoneNumbers', this);
  /**
   * Representation of the [[PeopleProfileHeaderResponse.showLiveProfilePhoto]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  showLiveProfilePhoto: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('showLiveProfilePhoto', this, 'Edm.Boolean');
  /**
   * Representation of the [[PeopleProfileHeaderResponse.socialAccounts]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  socialAccounts: CoSocialAccountBeanField<EntityT> = new CoSocialAccountBeanField('socialAccounts', this);
  /**
   * Representation of the [[PeopleProfileHeaderResponse.socialNetworks]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  socialNetworks: CoUserInfoElementBeanField<EntityT> = new CoUserInfoElementBeanField('socialNetworks', this);
  /**
   * Representation of the [[PeopleProfileHeaderResponse.targetUserId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  targetUserId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('targetUserId', this, 'Edm.String');
  /**
   * Representation of the [[PeopleProfileHeaderResponse.timezone]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  timezone: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('timezone', this, 'Edm.String');
  /**
   * Representation of the [[PeopleProfileHeaderResponse.title]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  title: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('title', this, 'Edm.String');
  /**
   * Representation of the [[PeopleProfileHeaderResponse.userName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('userName', this, 'Edm.String');
  /**
   * Representation of the [[PeopleProfileHeaderResponse.utcOffset]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  utcOffset: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('utcOffset', this, 'Edm.Int32');
}

export namespace PeopleProfileHeaderResponse {
  export function build(json: { [keys: string]: FieldType }): PeopleProfileHeaderResponse {
    return createComplexType(json, {
      aboutMeVideoDeleteUrl: (aboutMeVideoDeleteUrl: string) => ({ aboutMeVideoDeleteUrl: edmToTs(aboutMeVideoDeleteUrl, 'Edm.String') }),
      aboutMeVideoEnabled: (aboutMeVideoEnabled: boolean) => ({ aboutMeVideoEnabled: edmToTs(aboutMeVideoEnabled, 'Edm.Boolean') }),
      aboutMeVideoGetFileUrl: (aboutMeVideoGetFileUrl: string) => ({ aboutMeVideoGetFileUrl: edmToTs(aboutMeVideoGetFileUrl, 'Edm.String') }),
      aboutMeVideoStatusUrl: (aboutMeVideoStatusUrl: string) => ({ aboutMeVideoStatusUrl: edmToTs(aboutMeVideoStatusUrl, 'Edm.String') }),
      aboutMeVideoToken: (aboutMeVideoToken: string) => ({ aboutMeVideoToken: edmToTs(aboutMeVideoToken, 'Edm.String') }),
      aboutMeVideoUploadId: (aboutMeVideoUploadId: string) => ({ aboutMeVideoUploadId: edmToTs(aboutMeVideoUploadId, 'Edm.String') }),
      aboutMeVideoUploadUrl: (aboutMeVideoUploadUrl: string) => ({ aboutMeVideoUploadUrl: edmToTs(aboutMeVideoUploadUrl, 'Edm.String') }),
      applicationId: (applicationId: string) => ({ applicationId: edmToTs(applicationId, 'Edm.String') }),
      businessPhone: (businessPhone: string) => ({ businessPhone: edmToTs(businessPhone, 'Edm.String') }),
      cellPhone: (cellPhone: string) => ({ cellPhone: edmToTs(cellPhone, 'Edm.String') }),
      customFields: (customFields: CoUserInfoElementBean) => ({ customFields: CoUserInfoElementBean.build(customFields) }),
      dSTSavings: (dStSavings: number) => ({ dStSavings: edmToTs(dStSavings, 'Edm.Int32') }),
      department: (department: string) => ({ department: edmToTs(department, 'Edm.String') }),
      division: (division: string) => ({ division: edmToTs(division, 'Edm.String') }),
      email: (email: string) => ({ email: edmToTs(email, 'Edm.String') }),
      expressivePhotoMod: (expressivePhotoMod: string) => ({ expressivePhotoMod: edmToTs(expressivePhotoMod, 'Edm.String') }),
      fullName: (fullName: string) => ({ fullName: edmToTs(fullName, 'Edm.String') }),
      introduction: (introduction: string) => ({ introduction: edmToTs(introduction, 'Edm.String') }),
      isAboutMeTextEnabled: (isAboutMeTextEnabled: boolean) => ({ isAboutMeTextEnabled: edmToTs(isAboutMeTextEnabled, 'Edm.Boolean') }),
      isAllowUploadBGPhoto: (isAllowUploadBgPhoto: boolean) => ({ isAllowUploadBgPhoto: edmToTs(isAllowUploadBgPhoto, 'Edm.Boolean') }),
      isPercentCompleteEnabled: (isPercentCompleteEnabled: boolean) => ({ isPercentCompleteEnabled: edmToTs(isPercentCompleteEnabled, 'Edm.Boolean') }),
      isShowAsOfDate: (isShowAsOfDate: boolean) => ({ isShowAsOfDate: edmToTs(isShowAsOfDate, 'Edm.Boolean') }),
      isShowEditLink: (isShowEditLink: boolean) => ({ isShowEditLink: edmToTs(isShowEditLink, 'Edm.Boolean') }),
      isTimeZoneInDaylightTime: (isTimeZoneInDaylightTime: boolean) => ({ isTimeZoneInDaylightTime: edmToTs(isTimeZoneInDaylightTime, 'Edm.Boolean') }),
      liveProfileOriginalPhotoId: (liveProfileOriginalPhotoId: BigNumber) => ({ liveProfileOriginalPhotoId: edmToTs(liveProfileOriginalPhotoId, 'Edm.Int64') }),
      liveProfilePhotoId: (liveProfilePhotoId: BigNumber) => ({ liveProfilePhotoId: edmToTs(liveProfilePhotoId, 'Edm.Int64') }),
      liveProfilePhotoMod: (liveProfilePhotoMod: string) => ({ liveProfilePhotoMod: edmToTs(liveProfilePhotoMod, 'Edm.String') }),
      localTimeEnabled: (localTimeEnabled: boolean) => ({ localTimeEnabled: edmToTs(localTimeEnabled, 'Edm.Boolean') }),
      location: (location: string) => ({ location: edmToTs(location, 'Edm.String') }),
      mediaServiceBaseUrl: (mediaServiceBaseUrl: string) => ({ mediaServiceBaseUrl: edmToTs(mediaServiceBaseUrl, 'Edm.String') }),
      myNameAudioDeleteUrl: (myNameAudioDeleteUrl: string) => ({ myNameAudioDeleteUrl: edmToTs(myNameAudioDeleteUrl, 'Edm.String') }),
      myNameAudioGetFileUrl: (myNameAudioGetFileUrl: string) => ({ myNameAudioGetFileUrl: edmToTs(myNameAudioGetFileUrl, 'Edm.String') }),
      myNameAudioStatusUrl: (myNameAudioStatusUrl: string) => ({ myNameAudioStatusUrl: edmToTs(myNameAudioStatusUrl, 'Edm.String') }),
      myNameAudioUploadUrl: (myNameAudioUploadUrl: string) => ({ myNameAudioUploadUrl: edmToTs(myNameAudioUploadUrl, 'Edm.String') }),
      myNameEnabled: (myNameEnabled: boolean) => ({ myNameEnabled: edmToTs(myNameEnabled, 'Edm.Boolean') }),
      myNameText: (myNameText: string) => ({ myNameText: edmToTs(myNameText, 'Edm.String') }),
      myNameToken: (myNameToken: string) => ({ myNameToken: edmToTs(myNameToken, 'Edm.String') }),
      myNameUploadId: (myNameUploadId: string) => ({ myNameUploadId: edmToTs(myNameUploadId, 'Edm.String') }),
      phoneNumbers: (phoneNumbers: CoUserInfoElementBean) => ({ phoneNumbers: CoUserInfoElementBean.build(phoneNumbers) }),
      showLiveProfilePhoto: (showLiveProfilePhoto: boolean) => ({ showLiveProfilePhoto: edmToTs(showLiveProfilePhoto, 'Edm.Boolean') }),
      socialAccounts: (socialAccounts: CoSocialAccountBean) => ({ socialAccounts: CoSocialAccountBean.build(socialAccounts) }),
      socialNetworks: (socialNetworks: CoUserInfoElementBean) => ({ socialNetworks: CoUserInfoElementBean.build(socialNetworks) }),
      targetUserId: (targetUserId: string) => ({ targetUserId: edmToTs(targetUserId, 'Edm.String') }),
      timezone: (timezone: string) => ({ timezone: edmToTs(timezone, 'Edm.String') }),
      title: (title: string) => ({ title: edmToTs(title, 'Edm.String') }),
      userName: (userName: string) => ({ userName: edmToTs(userName, 'Edm.String') }),
      utcOffset: (utcOffset: number) => ({ utcOffset: edmToTs(utcOffset, 'Edm.Int32') })
    });
  }
}
