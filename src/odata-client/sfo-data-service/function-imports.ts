/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { transformReturnValueForUndefined, transformReturnValueForComplexTypeList, transformReturnValueForComplexType, transformReturnValueForEdmType, transformReturnValueForEntityList, transformReturnValueForEntity, edmToTs, FunctionImportRequestBuilder, FunctionImportParameter } from '@sap-cloud-sdk/core';
import { GetBizXActionResponse } from './GetBizXActionResponse';
import { GenerateNextPersonIdResponse } from './GenerateNextPersonIdResponse';
import { WfRequestActionResponse } from './WfRequestActionResponse';
import { WfRequestPendingDataResponse } from './WfRequestPendingDataResponse';
import { InviteToApplyResponse } from './InviteToApplyResponse';
import { GetMatchedGuideLineRuleInfoResponse } from './GetMatchedGuideLineRuleInfoResponse';
import { IsUserEligibleForSpotAwardProgramResponse } from './IsUserEligibleForSpotAwardProgramResponse';
import { GetEligibleSpotAwardsProgramCodesResponse } from './GetEligibleSpotAwardsProgramCodesResponse';
import { SefExtEventMetaDataList } from './SefExtEventMetaDataList';
import { NominationApprovalWorkflowResponse } from './NominationApprovalWorkflowResponse';
import { UpsertResult } from './UpsertResult';
import { DynamicGroupBean } from './DynamicGroupBean';
import { DynamicGroupUserBean } from './DynamicGroupUserBean';
import { DocumentCategories } from './DocumentCategories';
import { PeopleProfileHeaderResponse } from './PeopleProfileHeaderResponse';
import { CoRouteFormStatusBean } from './CoRouteFormStatusBean';
import { CreatePerformanceReviewFormResponse } from './CreatePerformanceReviewFormResponse';
import { RuleFieldMappingBeanList } from './RuleFieldMappingBeanList';
import { DynamicGroup } from './DynamicGroup';
import { RbpRole } from './RbpRole';

/**
 * Type of the parameters to be passed to [[refreshMetadata]].
 */
export interface RefreshMetadataParameters {
}

/**
 * Refresh Metadata.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function refreshMetadata(parameters: RefreshMetadataParameters): FunctionImportRequestBuilder<RefreshMetadataParameters, undefined> {
  const params = {

  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'refreshMetadata', (data) => transformReturnValueForUndefined(data, (val) => undefined), params);
}

/**
 * Type of the parameters to be passed to [[getBizXAction]].
 */
export interface GetBizXActionParameters {
  /**
   * Action Source Id.
   */
  actionSourceId: string;
  /**
   * User Id.
   */
  userId: string;
}

/**
 * Get Biz X Action.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function getBizXAction(parameters: GetBizXActionParameters): FunctionImportRequestBuilder<GetBizXActionParameters, GetBizXActionResponse[]> {
  const params = {
    actionSourceId: new FunctionImportParameter('actionSourceId', 'Edm.String', parameters.actionSourceId),
    userId: new FunctionImportParameter('userId', 'Edm.String', parameters.userId)
  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'GetBizXAction', (data) => transformReturnValueForComplexTypeList(data, GetBizXActionResponse.build), params);
}

/**
 * Type of the parameters to be passed to [[generateNextPersonId]].
 */
export interface GenerateNextPersonIdParameters {
}

/**
 * Generate Next Person Id.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function generateNextPersonId(parameters: GenerateNextPersonIdParameters): FunctionImportRequestBuilder<GenerateNextPersonIdParameters, GenerateNextPersonIdResponse> {
  const params = {

  }

  return new FunctionImportRequestBuilder('post', 'VALUE_IS_UNDEFINED', 'generateNextPersonID', (data) => transformReturnValueForComplexType(data, GenerateNextPersonIdResponse.build), params);
}

/**
 * Type of the parameters to be passed to [[approveWfRequest]].
 */
export interface ApproveWfRequestParameters {
  /**
   * Wf Request Id.
   */
  wfRequestId: BigNumber;
  /**
   * Comment.
   */
  comment: string;
}

/**
 * Approve Wf Request.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function approveWfRequest(parameters: ApproveWfRequestParameters): FunctionImportRequestBuilder<ApproveWfRequestParameters, WfRequestActionResponse[]> {
  const params = {
    wfRequestId: new FunctionImportParameter('wfRequestId', 'Edm.Int64', parameters.wfRequestId),
    comment: new FunctionImportParameter('comment', 'Edm.String', parameters.comment)
  }

  return new FunctionImportRequestBuilder('post', 'VALUE_IS_UNDEFINED', 'approveWfRequest', (data) => transformReturnValueForComplexTypeList(data, WfRequestActionResponse.build), params);
}

/**
 * Type of the parameters to be passed to [[commentWfRequest]].
 */
export interface CommentWfRequestParameters {
  /**
   * Wf Request Id.
   */
  wfRequestId: BigNumber;
  /**
   * Comment.
   */
  comment: string;
}

/**
 * Comment Wf Request.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function commentWfRequest(parameters: CommentWfRequestParameters): FunctionImportRequestBuilder<CommentWfRequestParameters, WfRequestActionResponse[]> {
  const params = {
    wfRequestId: new FunctionImportParameter('wfRequestId', 'Edm.Int64', parameters.wfRequestId),
    comment: new FunctionImportParameter('comment', 'Edm.String', parameters.comment)
  }

  return new FunctionImportRequestBuilder('post', 'VALUE_IS_UNDEFINED', 'commentWfRequest', (data) => transformReturnValueForComplexTypeList(data, WfRequestActionResponse.build), params);
}

/**
 * Type of the parameters to be passed to [[rejectWfRequest]].
 */
export interface RejectWfRequestParameters {
  /**
   * Wf Request Id.
   */
  wfRequestId: BigNumber;
  /**
   * Comment.
   */
  comment: string;
}

/**
 * Reject Wf Request.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function rejectWfRequest(parameters: RejectWfRequestParameters): FunctionImportRequestBuilder<RejectWfRequestParameters, WfRequestActionResponse[]> {
  const params = {
    wfRequestId: new FunctionImportParameter('wfRequestId', 'Edm.Int64', parameters.wfRequestId),
    comment: new FunctionImportParameter('comment', 'Edm.String', parameters.comment)
  }

  return new FunctionImportRequestBuilder('post', 'VALUE_IS_UNDEFINED', 'rejectWfRequest', (data) => transformReturnValueForComplexTypeList(data, WfRequestActionResponse.build), params);
}

/**
 * Type of the parameters to be passed to [[sendbackWfRequest]].
 */
export interface SendbackWfRequestParameters {
  /**
   * Wf Request Id.
   */
  wfRequestId: BigNumber;
  /**
   * Comment.
   */
  comment: string;
}

/**
 * Sendback Wf Request.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function sendbackWfRequest(parameters: SendbackWfRequestParameters): FunctionImportRequestBuilder<SendbackWfRequestParameters, WfRequestActionResponse[]> {
  const params = {
    wfRequestId: new FunctionImportParameter('wfRequestId', 'Edm.Int64', parameters.wfRequestId),
    comment: new FunctionImportParameter('comment', 'Edm.String', parameters.comment)
  }

  return new FunctionImportRequestBuilder('post', 'VALUE_IS_UNDEFINED', 'sendbackWfRequest', (data) => transformReturnValueForComplexTypeList(data, WfRequestActionResponse.build), params);
}

/**
 * Type of the parameters to be passed to [[withdrawWfRequest]].
 */
export interface WithdrawWfRequestParameters {
  /**
   * Wf Request Id.
   */
  wfRequestId: BigNumber;
  /**
   * Comment.
   */
  comment: string;
}

/**
 * Withdraw Wf Request.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function withdrawWfRequest(parameters: WithdrawWfRequestParameters): FunctionImportRequestBuilder<WithdrawWfRequestParameters, WfRequestActionResponse[]> {
  const params = {
    wfRequestId: new FunctionImportParameter('wfRequestId', 'Edm.Int64', parameters.wfRequestId),
    comment: new FunctionImportParameter('comment', 'Edm.String', parameters.comment)
  }

  return new FunctionImportRequestBuilder('post', 'VALUE_IS_UNDEFINED', 'withdrawWfRequest', (data) => transformReturnValueForComplexTypeList(data, WfRequestActionResponse.build), params);
}

/**
 * Type of the parameters to be passed to [[getWorkflowPendingData]].
 */
export interface GetWorkflowPendingDataParameters {
  /**
   * Wf Request Id.
   */
  wfRequestId: BigNumber;
}

/**
 * Get Workflow Pending Data.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function getWorkflowPendingData(parameters: GetWorkflowPendingDataParameters): FunctionImportRequestBuilder<GetWorkflowPendingDataParameters, WfRequestPendingDataResponse[]> {
  const params = {
    wfRequestId: new FunctionImportParameter('wfRequestId', 'Edm.Int64', parameters.wfRequestId)
  }

  return new FunctionImportRequestBuilder('post', 'VALUE_IS_UNDEFINED', 'getWorkflowPendingData', (data) => transformReturnValueForComplexTypeList(data, WfRequestPendingDataResponse.build), params);
}

/**
 * Type of the parameters to be passed to [[getDefaultGoalPlanTemplateId]].
 */
export interface GetDefaultGoalPlanTemplateIdParameters {
}

/**
 * Get Default Goal Plan Template Id.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function getDefaultGoalPlanTemplateId(parameters: GetDefaultGoalPlanTemplateIdParameters): FunctionImportRequestBuilder<GetDefaultGoalPlanTemplateIdParameters, BigNumber> {
  const params = {

  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'getDefaultGoalPlanTemplateId', (data) => transformReturnValueForEdmType(data, (val) => edmToTs(val, 'Edm.Int64')), params);
}

/**
 * Type of the parameters to be passed to [[fwdCandidateToColleague]].
 */
export interface FwdCandidateToColleagueParameters {
  /**
   * Candidate Id.
   */
  candidateId: BigNumber;
  /**
   * Referred To.
   */
  referredTo: string;
}

/**
 * Fwd Candidate To Colleague.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function fwdCandidateToColleague(parameters: FwdCandidateToColleagueParameters): FunctionImportRequestBuilder<FwdCandidateToColleagueParameters, string> {
  const params = {
    candidateId: new FunctionImportParameter('candidateId', 'Edm.Int64', parameters.candidateId),
    referredTo: new FunctionImportParameter('referredTo', 'Edm.String', parameters.referredTo)
  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'fwdCandidateToColleague', (data) => transformReturnValueForEdmType(data, (val) => edmToTs(val, 'Edm.String')), params);
}

/**
 * Type of the parameters to be passed to [[setSmsNotificationPreference]].
 */
export interface SetSmsNotificationPreferenceParameters {
  /**
   * Opt In.
   */
  optIn: boolean;
  /**
   * Candidate Id.
   */
  candidateId: BigNumber;
  /**
   * Iso Country Code.
   */
  isoCountryCode: string;
  /**
   * Cell Phone.
   */
  cellPhone: string;
}

/**
 * Set Sms Notification Preference.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function setSmsNotificationPreference(parameters: SetSmsNotificationPreferenceParameters): FunctionImportRequestBuilder<SetSmsNotificationPreferenceParameters, string> {
  const params = {
    optIn: new FunctionImportParameter('optIn', 'Edm.Boolean', parameters.optIn),
    candidateId: new FunctionImportParameter('candidateId', 'Edm.Int64', parameters.candidateId),
    isoCountryCode: new FunctionImportParameter('isoCountryCode', 'Edm.String', parameters.isoCountryCode),
    cellPhone: new FunctionImportParameter('cellPhone', 'Edm.String', parameters.cellPhone)
  }

  return new FunctionImportRequestBuilder('post', 'VALUE_IS_UNDEFINED', 'setSmsNotificationPreference', (data) => transformReturnValueForEdmType(data, (val) => edmToTs(val, 'Edm.String')), params);
}

/**
 * Type of the parameters to be passed to [[reassignJobReq]].
 */
export interface ReassignJobReqParameters {
  /**
   * Job Req Id.
   */
  jobReqId: number;
  /**
   * Hiring Manager.
   */
  hiringManager: string;
  /**
   * Recruiter.
   */
  recruiter: string;
  /**
   * Coordinator.
   */
  coordinator: string;
  /**
   * Vp Of Staffing.
   */
  vpOfStaffing: string;
  /**
   * Second Recruiter.
   */
  secondRecruiter: string;
  /**
   * Sourcer.
   */
  sourcer: string;
}

/**
 * Reassign Job Req.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function reassignJobReq(parameters: ReassignJobReqParameters): FunctionImportRequestBuilder<ReassignJobReqParameters, string> {
  const params = {
    jobReqId: new FunctionImportParameter('jobReqId', 'Edm.Int32', parameters.jobReqId),
    hiringManager: new FunctionImportParameter('hiringManager', 'Edm.String', parameters.hiringManager),
    recruiter: new FunctionImportParameter('recruiter', 'Edm.String', parameters.recruiter),
    coordinator: new FunctionImportParameter('coordinator', 'Edm.String', parameters.coordinator),
    vpOfStaffing: new FunctionImportParameter('vpOfStaffing', 'Edm.String', parameters.vpOfStaffing),
    secondRecruiter: new FunctionImportParameter('secondRecruiter', 'Edm.String', parameters.secondRecruiter),
    sourcer: new FunctionImportParameter('sourcer', 'Edm.String', parameters.sourcer)
  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'reassignJobReq', (data) => transformReturnValueForEdmType(data, (val) => edmToTs(val, 'Edm.String')), params);
}

/**
 * Type of the parameters to be passed to [[initiateOnboarding]].
 */
export interface InitiateOnboardingParameters {
  /**
   * Application Id.
   */
  applicationId: BigNumber;
}

/**
 * Initiate Onboarding.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function initiateOnboarding(parameters: InitiateOnboardingParameters): FunctionImportRequestBuilder<InitiateOnboardingParameters, string> {
  const params = {
    applicationId: new FunctionImportParameter('applicationId', 'Edm.Int64', parameters.applicationId)
  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'initiateOnboarding', (data) => transformReturnValueForEdmType(data, (val) => edmToTs(val, 'Edm.String')), params);
}

/**
 * Type of the parameters to be passed to [[sendJobReqToPreviousStep]].
 */
export interface SendJobReqToPreviousStepParameters {
  /**
   * Job Req Id.
   */
  jobReqId: BigNumber;
  /**
   * Comment.
   */
  comment: string;
}

/**
 * Send Job Req To Previous Step.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function sendJobReqToPreviousStep(parameters: SendJobReqToPreviousStepParameters): FunctionImportRequestBuilder<SendJobReqToPreviousStepParameters, string> {
  const params = {
    jobReqId: new FunctionImportParameter('jobReqId', 'Edm.Int64', parameters.jobReqId),
    comment: new FunctionImportParameter('comment', 'Edm.String', parameters.comment)
  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'sendJobReqToPreviousStep', (data) => transformReturnValueForEdmType(data, (val) => edmToTs(val, 'Edm.String')), params);
}

/**
 * Type of the parameters to be passed to [[sendJobReqToNextStep]].
 */
export interface SendJobReqToNextStepParameters {
  /**
   * Job Req Id.
   */
  jobReqId: BigNumber;
  /**
   * Comment.
   */
  comment: string;
}

/**
 * Send Job Req To Next Step.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function sendJobReqToNextStep(parameters: SendJobReqToNextStepParameters): FunctionImportRequestBuilder<SendJobReqToNextStepParameters, string> {
  const params = {
    jobReqId: new FunctionImportParameter('jobReqId', 'Edm.Int64', parameters.jobReqId),
    comment: new FunctionImportParameter('comment', 'Edm.String', parameters.comment)
  }

  return new FunctionImportRequestBuilder('post', 'VALUE_IS_UNDEFINED', 'sendJobReqToNextStep', (data) => transformReturnValueForEdmType(data, (val) => edmToTs(val, 'Edm.String')), params);
}

/**
 * Type of the parameters to be passed to [[sendJobReqFormToUser]].
 */
export interface SendJobReqFormToUserParameters {
  /**
   * Job Req Id.
   */
  jobReqId: BigNumber;
  /**
   * User Id.
   */
  userId: string;
  /**
   * Comment.
   */
  comment: string;
}

/**
 * Send Job Req Form To User.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function sendJobReqFormToUser(parameters: SendJobReqFormToUserParameters): FunctionImportRequestBuilder<SendJobReqFormToUserParameters, string> {
  const params = {
    jobReqId: new FunctionImportParameter('jobReqId', 'Edm.Int64', parameters.jobReqId),
    userId: new FunctionImportParameter('userId', 'Edm.String', parameters.userId),
    comment: new FunctionImportParameter('comment', 'Edm.String', parameters.comment)
  }

  return new FunctionImportRequestBuilder('post', 'VALUE_IS_UNDEFINED', 'sendJobReqFormToUser', (data) => transformReturnValueForEdmType(data, (val) => edmToTs(val, 'Edm.String')), params);
}

/**
 * Type of the parameters to be passed to [[approveOrDeclineJobReqForm]].
 */
export interface ApproveOrDeclineJobReqFormParameters {
  /**
   * Job Req Id.
   */
  jobReqId: BigNumber;
  /**
   * Action Type.
   */
  actionType: string;
}

/**
 * Approve Or Decline Job Req Form.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function approveOrDeclineJobReqForm(parameters: ApproveOrDeclineJobReqFormParameters): FunctionImportRequestBuilder<ApproveOrDeclineJobReqFormParameters, string> {
  const params = {
    jobReqId: new FunctionImportParameter('jobReqId', 'Edm.Int64', parameters.jobReqId),
    actionType: new FunctionImportParameter('actionType', 'Edm.String', parameters.actionType)
  }

  return new FunctionImportRequestBuilder('post', 'VALUE_IS_UNDEFINED', 'approveOrDeclineJobReqForm', (data) => transformReturnValueForEdmType(data, (val) => edmToTs(val, 'Edm.String')), params);
}

/**
 * Type of the parameters to be passed to [[addModifierToJobReq]].
 */
export interface AddModifierToJobReqParameters {
  /**
   * Job Req Id.
   */
  jobReqId: BigNumber;
  /**
   * Modifier.
   */
  modifier: string;
}

/**
 * Add Modifier To Job Req.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function addModifierToJobReq(parameters: AddModifierToJobReqParameters): FunctionImportRequestBuilder<AddModifierToJobReqParameters, string> {
  const params = {
    jobReqId: new FunctionImportParameter('jobReqId', 'Edm.Int64', parameters.jobReqId),
    modifier: new FunctionImportParameter('modifier', 'Edm.String', parameters.modifier)
  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'addModifierToJobReq', (data) => transformReturnValueForEdmType(data, (val) => edmToTs(val, 'Edm.String')), params);
}

/**
 * Type of the parameters to be passed to [[approveOffer]].
 */
export interface ApproveOfferParameters {
  /**
   * Application Id.
   */
  applicationId: BigNumber;
  /**
   * Comment.
   */
  comment: string;
}

/**
 * Approve Offer.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function approveOffer(parameters: ApproveOfferParameters): FunctionImportRequestBuilder<ApproveOfferParameters, string> {
  const params = {
    applicationId: new FunctionImportParameter('applicationId', 'Edm.Int64', parameters.applicationId),
    comment: new FunctionImportParameter('comment', 'Edm.String', parameters.comment)
  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'approveOffer', (data) => transformReturnValueForEdmType(data, (val) => edmToTs(val, 'Edm.String')), params);
}

/**
 * Type of the parameters to be passed to [[declineOffer]].
 */
export interface DeclineOfferParameters {
  /**
   * Application Id.
   */
  applicationId: BigNumber;
  /**
   * Comment.
   */
  comment: string;
}

/**
 * Decline Offer.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function declineOffer(parameters: DeclineOfferParameters): FunctionImportRequestBuilder<DeclineOfferParameters, string> {
  const params = {
    applicationId: new FunctionImportParameter('applicationId', 'Edm.Int64', parameters.applicationId),
    comment: new FunctionImportParameter('comment', 'Edm.String', parameters.comment)
  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'declineOffer', (data) => transformReturnValueForEdmType(data, (val) => edmToTs(val, 'Edm.String')), params);
}

/**
 * Type of the parameters to be passed to [[sendOfferForApproval]].
 */
export interface SendOfferForApprovalParameters {
  /**
   * Application Id.
   */
  applicationId: BigNumber;
}

/**
 * Send Offer For Approval.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function sendOfferForApproval(parameters: SendOfferForApprovalParameters): FunctionImportRequestBuilder<SendOfferForApprovalParameters, string> {
  const params = {
    applicationId: new FunctionImportParameter('applicationId', 'Edm.Int64', parameters.applicationId)
  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'sendOfferForApproval', (data) => transformReturnValueForEdmType(data, (val) => edmToTs(val, 'Edm.String')), params);
}

/**
 * Type of the parameters to be passed to [[sendMailOfferLetter]].
 */
export interface SendMailOfferLetterParameters {
  /**
   * Offer Letter Id.
   */
  offerLetterId: BigNumber;
  /**
   * Send Mode.
   */
  sendMode: string;
  /**
   * Body Template Id.
   */
  bodyTemplateId: BigNumber;
  /**
   * Body Locale.
   */
  bodyLocale: string;
}

/**
 * Send Mail Offer Letter.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function sendMailOfferLetter(parameters: SendMailOfferLetterParameters): FunctionImportRequestBuilder<SendMailOfferLetterParameters, string> {
  const params = {
    offerLetterId: new FunctionImportParameter('offerLetterId', 'Edm.Int64', parameters.offerLetterId),
    sendMode: new FunctionImportParameter('sendMode', 'Edm.String', parameters.sendMode),
    bodyTemplateId: new FunctionImportParameter('bodyTemplateId', 'Edm.Int64', parameters.bodyTemplateId),
    bodyLocale: new FunctionImportParameter('bodyLocale', 'Edm.String', parameters.bodyLocale)
  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'sendMailOfferLetter', (data) => transformReturnValueForEdmType(data, (val) => edmToTs(val, 'Edm.String')), params);
}

/**
 * Type of the parameters to be passed to [[getRecruitingTemplate]].
 */
export interface GetRecruitingTemplateParameters {
  /**
   * Template Name.
   */
  templateName: string;
  /**
   * Template Type.
   */
  templateType: string;
}

/**
 * Get Recruiting Template.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function getRecruitingTemplate(parameters: GetRecruitingTemplateParameters): FunctionImportRequestBuilder<GetRecruitingTemplateParameters, string> {
  const params = {
    templateName: new FunctionImportParameter('templateName', 'Edm.String', parameters.templateName),
    templateType: new FunctionImportParameter('templateType', 'Edm.String', parameters.templateType)
  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'getRecruitingTemplate', (data) => transformReturnValueForEdmType(data, (val) => edmToTs(val, 'Edm.String')), params);
}

/**
 * Type of the parameters to be passed to [[getOfferLetterTemplate]].
 */
export interface GetOfferLetterTemplateParameters {
  /**
   * Template Name.
   */
  templateName: string;
  /**
   * Template Type.
   */
  templateType: string;
}

/**
 * Get Offer Letter Template.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function getOfferLetterTemplate(parameters: GetOfferLetterTemplateParameters): FunctionImportRequestBuilder<GetOfferLetterTemplateParameters, string> {
  const params = {
    templateName: new FunctionImportParameter('templateName', 'Edm.String', parameters.templateName),
    templateType: new FunctionImportParameter('templateType', 'Edm.String', parameters.templateType)
  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'getOfferLetterTemplate', (data) => transformReturnValueForEdmType(data, (val) => edmToTs(val, 'Edm.String')), params);
}

/**
 * Type of the parameters to be passed to [[refreshInterviewAssessments]].
 */
export interface RefreshInterviewAssessmentsParameters {
  /**
   * Job Req Id Param.
   */
  jobReqIdParam: BigNumber;
}

/**
 * Refresh Interview Assessments.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function refreshInterviewAssessments(parameters: RefreshInterviewAssessmentsParameters): FunctionImportRequestBuilder<RefreshInterviewAssessmentsParameters, string> {
  const params = {
    jobReqIdParam: new FunctionImportParameter('jobReqIdParam', 'Edm.Int64', parameters.jobReqIdParam)
  }

  return new FunctionImportRequestBuilder('post', 'VALUE_IS_UNDEFINED', 'refreshInterviewAssessments', (data) => transformReturnValueForEdmType(data, (val) => edmToTs(val, 'Edm.String')), params);
}

/**
 * Type of the parameters to be passed to [[sendEmailToInterviewers]].
 */
export interface SendEmailToInterviewersParameters {
  /**
   * Application Id.
   */
  applicationId: BigNumber;
  /**
   * Interviewers.
   */
  interviewers: string;
  /**
   * Attach Resume.
   */
  attachResume: boolean;
  /**
   * Attach Cover Letter.
   */
  attachCoverLetter: boolean;
  /**
   * Attach Interview Guide.
   */
  attachInterviewGuide: boolean;
  /**
   * Hiring Manager Note.
   */
  hiringManagerNote: string;
}

/**
 * Send Email To Interviewers.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function sendEmailToInterviewers(parameters: SendEmailToInterviewersParameters): FunctionImportRequestBuilder<SendEmailToInterviewersParameters, string> {
  const params = {
    applicationId: new FunctionImportParameter('applicationId', 'Edm.Int64', parameters.applicationId),
    interviewers: new FunctionImportParameter('interviewers', 'Edm.String', parameters.interviewers),
    attachResume: new FunctionImportParameter('attachResume', 'Edm.Boolean', parameters.attachResume),
    attachCoverLetter: new FunctionImportParameter('attachCoverLetter', 'Edm.Boolean', parameters.attachCoverLetter),
    attachInterviewGuide: new FunctionImportParameter('attachInterviewGuide', 'Edm.Boolean', parameters.attachInterviewGuide),
    hiringManagerNote: new FunctionImportParameter('hiringManagerNote', 'Edm.String', parameters.hiringManagerNote)
  }

  return new FunctionImportRequestBuilder('post', 'VALUE_IS_UNDEFINED', 'sendEmailToInterviewers', (data) => transformReturnValueForEdmType(data, (val) => edmToTs(val, 'Edm.String')), params);
}

/**
 * Type of the parameters to be passed to [[inviteToApply]].
 */
export interface InviteToApplyParameters {
  /**
   * Job Req Id.
   */
  jobReqId: BigNumber;
  /**
   * Candidate Ids.
   */
  candidateIds: string;
}

/**
 * Invite To Apply.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function inviteToApply(parameters: InviteToApplyParameters): FunctionImportRequestBuilder<InviteToApplyParameters, InviteToApplyResponse[]> {
  const params = {
    jobReqId: new FunctionImportParameter('jobReqId', 'Edm.Int64', parameters.jobReqId),
    candidateIds: new FunctionImportParameter('candidateIds', 'Edm.String', parameters.candidateIds)
  }

  return new FunctionImportRequestBuilder('post', 'VALUE_IS_UNDEFINED', 'inviteToApply', (data) => transformReturnValueForComplexTypeList(data, InviteToApplyResponse.build), params);
}

/**
 * Type of the parameters to be passed to [[getMatchedGuideLineRuleInfo]].
 */
export interface GetMatchedGuideLineRuleInfoParameters {
  /**
   * Program Id.
   */
  programId: string;
  /**
   * User Ids.
   */
  userIds: string;
  /**
   * Category.
   */
  category: string;
  /**
   * Level.
   */
  level: string;
}

/**
 * Get Matched Guide Line Rule Info.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function getMatchedGuideLineRuleInfo(parameters: GetMatchedGuideLineRuleInfoParameters): FunctionImportRequestBuilder<GetMatchedGuideLineRuleInfoParameters, GetMatchedGuideLineRuleInfoResponse> {
  const params = {
    programId: new FunctionImportParameter('programId', 'Edm.String', parameters.programId),
    userIds: new FunctionImportParameter('userIds', 'Edm.String', parameters.userIds),
    category: new FunctionImportParameter('category', 'Edm.String', parameters.category),
    level: new FunctionImportParameter('level', 'Edm.String', parameters.level)
  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'getMatchedGuideLineRuleInfo', (data) => transformReturnValueForComplexType(data, GetMatchedGuideLineRuleInfoResponse.build), params);
}

/**
 * Type of the parameters to be passed to [[isUserEligibleForSpotAwardProgram]].
 */
export interface IsUserEligibleForSpotAwardProgramParameters {
  /**
   * Program Id.
   */
  programId: string;
  /**
   * User Id.
   */
  userId: string;
}

/**
 * Is User Eligible For Spot Award Program.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function isUserEligibleForSpotAwardProgram(parameters: IsUserEligibleForSpotAwardProgramParameters): FunctionImportRequestBuilder<IsUserEligibleForSpotAwardProgramParameters, IsUserEligibleForSpotAwardProgramResponse> {
  const params = {
    programId: new FunctionImportParameter('programId', 'Edm.String', parameters.programId),
    userId: new FunctionImportParameter('userId', 'Edm.String', parameters.userId)
  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'isUserEligibleForSpotAwardProgram', (data) => transformReturnValueForComplexType(data, IsUserEligibleForSpotAwardProgramResponse.build), params);
}

/**
 * Type of the parameters to be passed to [[getEligibleSpotAwardsProgramCodes]].
 */
export interface GetEligibleSpotAwardsProgramCodesParameters {
  /**
   * User Id.
   */
  userId: string;
}

/**
 * Get Eligible Spot Awards Program Codes.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function getEligibleSpotAwardsProgramCodes(parameters: GetEligibleSpotAwardsProgramCodesParameters): FunctionImportRequestBuilder<GetEligibleSpotAwardsProgramCodesParameters, GetEligibleSpotAwardsProgramCodesResponse> {
  const params = {
    userId: new FunctionImportParameter('userId', 'Edm.String', parameters.userId)
  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'getEligibleSpotAwardsProgramCodes', (data) => transformReturnValueForComplexType(data, GetEligibleSpotAwardsProgramCodesResponse.build), params);
}

/**
 * Type of the parameters to be passed to [[initiateOnboardingForUser]].
 */
export interface InitiateOnboardingForUserParameters {
}

/**
 * Initiate Onboarding For User.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function initiateOnboardingForUser(parameters: InitiateOnboardingForUserParameters): FunctionImportRequestBuilder<InitiateOnboardingForUserParameters, string> {
  const params = {

  }

  return new FunctionImportRequestBuilder('post', 'VALUE_IS_UNDEFINED', 'initiateOnboardingForUser', (data) => transformReturnValueForEdmType(data, (val) => edmToTs(val, 'Edm.String')), params);
}

/**
 * Type of the parameters to be passed to [[getExtEventMetaDataDefinition]].
 */
export interface GetExtEventMetaDataDefinitionParameters {
  /**
   * Event.
   */
  event: string;
  /**
   * Topic.
   */
  topic: string;
}

/**
 * Get Ext Event Meta Data Definition.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function getExtEventMetaDataDefinition(parameters: GetExtEventMetaDataDefinitionParameters): FunctionImportRequestBuilder<GetExtEventMetaDataDefinitionParameters, SefExtEventMetaDataList> {
  const params = {
    event: new FunctionImportParameter('event', 'Edm.String', parameters.event),
    topic: new FunctionImportParameter('topic', 'Edm.String', parameters.topic)
  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'getExtEventMetaDataDefinition', (data) => transformReturnValueForComplexType(data, SefExtEventMetaDataList.build), params);
}

/**
 * Type of the parameters to be passed to [[approveSuccessors]].
 */
export interface ApproveSuccessorsParameters {
  /**
   * Nominee Ids.
   */
  nomineeIds: string;
  /**
   * Comment.
   */
  comment: string;
}

/**
 * Approve Successors.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function approveSuccessors(parameters: ApproveSuccessorsParameters): FunctionImportRequestBuilder<ApproveSuccessorsParameters, NominationApprovalWorkflowResponse[]> {
  const params = {
    nomineeIds: new FunctionImportParameter('nomineeIds', 'Edm.String', parameters.nomineeIds),
    comment: new FunctionImportParameter('comment', 'Edm.String', parameters.comment)
  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'approveSuccessors', (data) => transformReturnValueForComplexTypeList(data, NominationApprovalWorkflowResponse.build), params);
}

/**
 * Type of the parameters to be passed to [[rejectSuccessors]].
 */
export interface RejectSuccessorsParameters {
  /**
   * Nominee Ids.
   */
  nomineeIds: string;
  /**
   * Comment.
   */
  comment: string;
}

/**
 * Reject Successors.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function rejectSuccessors(parameters: RejectSuccessorsParameters): FunctionImportRequestBuilder<RejectSuccessorsParameters, NominationApprovalWorkflowResponse[]> {
  const params = {
    nomineeIds: new FunctionImportParameter('nomineeIds', 'Edm.String', parameters.nomineeIds),
    comment: new FunctionImportParameter('comment', 'Edm.String', parameters.comment)
  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'rejectSuccessors', (data) => transformReturnValueForComplexTypeList(data, NominationApprovalWorkflowResponse.build), params);
}

/**
 * Type of the parameters to be passed to [[getDefaultDevGoalPlanTemplateId]].
 */
export interface GetDefaultDevGoalPlanTemplateIdParameters {
}

/**
 * Get Default Dev Goal Plan Template Id.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function getDefaultDevGoalPlanTemplateId(parameters: GetDefaultDevGoalPlanTemplateIdParameters): FunctionImportRequestBuilder<GetDefaultDevGoalPlanTemplateIdParameters, BigNumber> {
  const params = {

  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'getDefaultDevGoalPlanTemplateId', (data) => transformReturnValueForEdmType(data, (val) => edmToTs(val, 'Edm.Int64')), params);
}

/**
 * Type of the parameters to be passed to [[upsert]].
 */
export interface UpsertParameters {
}

/**
 * Upsert.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function upsert(parameters: UpsertParameters): FunctionImportRequestBuilder<UpsertParameters, UpsertResult[]> {
  const params = {

  }

  return new FunctionImportRequestBuilder('post', 'VALUE_IS_UNDEFINED', 'upsert', (data) => transformReturnValueForEntityList(data, UpsertResult), params);
}

/**
 * Type of the parameters to be passed to [[logout]].
 */
export interface LogoutParameters {
}

/**
 * Logout.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function logout(parameters: LogoutParameters): FunctionImportRequestBuilder<LogoutParameters, undefined> {
  const params = {

  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'logout', (data) => transformReturnValueForUndefined(data, (val) => undefined), params);
}

/**
 * Type of the parameters to be passed to [[isValidSession]].
 */
export interface IsValidSessionParameters {
}

/**
 * Is Valid Session.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function isValidSession(parameters: IsValidSessionParameters): FunctionImportRequestBuilder<IsValidSessionParameters, boolean> {
  const params = {

  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'isValidSession', (data) => transformReturnValueForEdmType(data, (val) => edmToTs(val, 'Edm.Boolean')), params);
}

/**
 * Type of the parameters to be passed to [[checkUserPermission]].
 */
export interface CheckUserPermissionParameters {
  /**
   * Access User Id.
   */
  accessUserId: string;
  /**
   * Perm Type.
   */
  permType: string;
  /**
   * Perm String Value.
   */
  permStringValue: string;
  /**
   * Perm Long Value.
   */
  permLongValue: BigNumber;
  /**
   * Target User Id.
   */
  targetUserId: string;
  /**
   * Include Inactive User.
   */
  includeInactiveUser: boolean;
  /**
   * Include Tbh User.
   */
  includeTbhUser: boolean;
}

/**
 * Check User Permission.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function checkUserPermission(parameters: CheckUserPermissionParameters): FunctionImportRequestBuilder<CheckUserPermissionParameters, boolean> {
  const params = {
    accessUserId: new FunctionImportParameter('accessUserId', 'Edm.String', parameters.accessUserId),
    permType: new FunctionImportParameter('permType', 'Edm.String', parameters.permType),
    permStringValue: new FunctionImportParameter('permStringValue', 'Edm.String', parameters.permStringValue),
    permLongValue: new FunctionImportParameter('permLongValue', 'Edm.Int64', parameters.permLongValue),
    targetUserId: new FunctionImportParameter('targetUserId', 'Edm.String', parameters.targetUserId),
    includeInactiveUser: new FunctionImportParameter('includeInactiveUser', 'Edm.Boolean', parameters.includeInactiveUser),
    includeTbhUser: new FunctionImportParameter('includeTBHUser', 'Edm.Boolean', parameters.includeTbhUser)
  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'checkUserPermission', (data) => transformReturnValueForEdmType(data, (val) => edmToTs(val, 'Edm.Boolean')), params);
}

/**
 * Type of the parameters to be passed to [[updateStaticGroup]].
 */
export interface UpdateStaticGroupParameters {
  /**
   * Group Id.
   */
  groupId: BigNumber;
  /**
   * Action.
   */
  action: string;
  /**
   * User Ids.
   */
  userIds: string;
}

/**
 * Update Static Group.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function updateStaticGroup(parameters: UpdateStaticGroupParameters): FunctionImportRequestBuilder<UpdateStaticGroupParameters, number> {
  const params = {
    groupId: new FunctionImportParameter('groupId', 'Edm.Int64', parameters.groupId),
    action: new FunctionImportParameter('action', 'Edm.String', parameters.action),
    userIds: new FunctionImportParameter('userIds', 'Edm.String', parameters.userIds)
  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'updateStaticGroup', (data) => transformReturnValueForEdmType(data, (val) => edmToTs(val, 'Edm.Int32')), params);
}

/**
 * Type of the parameters to be passed to [[getDynamicGroupsByUser]].
 */
export interface GetDynamicGroupsByUserParameters {
  /**
   * User Id.
   */
  userId: string;
  /**
   * Group Sub Type.
   */
  groupSubType: string;
}

/**
 * Get Dynamic Groups By User.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function getDynamicGroupsByUser(parameters: GetDynamicGroupsByUserParameters): FunctionImportRequestBuilder<GetDynamicGroupsByUserParameters, DynamicGroupBean[]> {
  const params = {
    userId: new FunctionImportParameter('userId', 'Edm.String', parameters.userId),
    groupSubType: new FunctionImportParameter('groupSubType', 'Edm.String', parameters.groupSubType)
  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'getDynamicGroupsByUser', (data) => transformReturnValueForComplexTypeList(data, DynamicGroupBean.build), params);
}

/**
 * Type of the parameters to be passed to [[getUsersByDynamicGroup]].
 */
export interface GetUsersByDynamicGroupParameters {
  /**
   * Group Id.
   */
  groupId: BigNumber;
  /**
   * Active Only.
   */
  activeOnly: boolean;
}

/**
 * Get Users By Dynamic Group.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function getUsersByDynamicGroup(parameters: GetUsersByDynamicGroupParameters): FunctionImportRequestBuilder<GetUsersByDynamicGroupParameters, DynamicGroupUserBean[]> {
  const params = {
    groupId: new FunctionImportParameter('groupId', 'Edm.Int64', parameters.groupId),
    activeOnly: new FunctionImportParameter('activeOnly', 'Edm.Boolean', parameters.activeOnly)
  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'getUsersByDynamicGroup', (data) => transformReturnValueForComplexTypeList(data, DynamicGroupUserBean.build), params);
}

/**
 * Type of the parameters to be passed to [[getUserRolesReport]].
 */
export interface GetUserRolesReportParameters {
  /**
   * User Ids.
   */
  userIds: string;
}

/**
 * Get User Roles Report.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function getUserRolesReport(parameters: GetUserRolesReportParameters): FunctionImportRequestBuilder<GetUserRolesReportParameters, string> {
  const params = {
    userIds: new FunctionImportParameter('userIds', 'Edm.String', parameters.userIds)
  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'getUserRolesReport', (data) => transformReturnValueForEdmType(data, (val) => edmToTs(val, 'Edm.String')), params);
}

/**
 * Type of the parameters to be passed to [[getPermissionMetadata]].
 */
export interface GetPermissionMetadataParameters {
  /**
   * Locale.
   */
  locale: string;
}

/**
 * Get Permission Metadata.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function getPermissionMetadata(parameters: GetPermissionMetadataParameters): FunctionImportRequestBuilder<GetPermissionMetadataParameters, string> {
  const params = {
    locale: new FunctionImportParameter('locale', 'Edm.String', parameters.locale)
  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'getPermissionMetadata', (data) => transformReturnValueForEdmType(data, (val) => edmToTs(val, 'Edm.String')), params);
}

/**
 * Type of the parameters to be passed to [[getUsersPermissions]].
 */
export interface GetUsersPermissionsParameters {
  /**
   * User Ids.
   */
  userIds: string;
  /**
   * Locale.
   */
  locale: string;
}

/**
 * Get Users Permissions.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function getUsersPermissions(parameters: GetUsersPermissionsParameters): FunctionImportRequestBuilder<GetUsersPermissionsParameters, string> {
  const params = {
    userIds: new FunctionImportParameter('userIds', 'Edm.String', parameters.userIds),
    locale: new FunctionImportParameter('locale', 'Edm.String', parameters.locale)
  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'getUsersPermissions', (data) => transformReturnValueForEdmType(data, (val) => edmToTs(val, 'Edm.String')), params);
}

/**
 * Type of the parameters to be passed to [[getRolesPermissions]].
 */
export interface GetRolesPermissionsParameters {
  /**
   * Role Ids.
   */
  roleIds: string;
  /**
   * Locale.
   */
  locale: string;
}

/**
 * Get Roles Permissions.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function getRolesPermissions(parameters: GetRolesPermissionsParameters): FunctionImportRequestBuilder<GetRolesPermissionsParameters, string> {
  const params = {
    roleIds: new FunctionImportParameter('roleIds', 'Edm.String', parameters.roleIds),
    locale: new FunctionImportParameter('locale', 'Edm.String', parameters.locale)
  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'getRolesPermissions', (data) => transformReturnValueForEdmType(data, (val) => edmToTs(val, 'Edm.String')), params);
}

/**
 * Type of the parameters to be passed to [[checkUserPermissions]].
 */
export interface CheckUserPermissionsParameters {
}

/**
 * Check User Permissions.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function checkUserPermissions(parameters: CheckUserPermissionsParameters): FunctionImportRequestBuilder<CheckUserPermissionsParameters, string> {
  const params = {

  }

  return new FunctionImportRequestBuilder('post', 'VALUE_IS_UNDEFINED', 'checkUserPermissions', (data) => transformReturnValueForEdmType(data, (val) => edmToTs(val, 'Edm.String')), params);
}

/**
 * Type of the parameters to be passed to [[getUserNameFormat]].
 */
export interface GetUserNameFormatParameters {
  /**
   * Locale.
   */
  locale: string;
}

/**
 * Get User Name Format.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function getUserNameFormat(parameters: GetUserNameFormatParameters): FunctionImportRequestBuilder<GetUserNameFormatParameters, string> {
  const params = {
    locale: new FunctionImportParameter('locale', 'Edm.String', parameters.locale)
  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'getUserNameFormat', (data) => transformReturnValueForEdmType(data, (val) => edmToTs(val, 'Edm.String')), params);
}

/**
 * Type of the parameters to be passed to [[getPasswordPolicy]].
 */
export interface GetPasswordPolicyParameters {
  /**
   * Locale.
   */
  locale: string;
}

/**
 * Get Password Policy.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function getPasswordPolicy(parameters: GetPasswordPolicyParameters): FunctionImportRequestBuilder<GetPasswordPolicyParameters, string> {
  const params = {
    locale: new FunctionImportParameter('locale', 'Edm.String', parameters.locale)
  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'getPasswordPolicy', (data) => transformReturnValueForEdmType(data, (val) => edmToTs(val, 'Edm.String')), params);
}

/**
 * Type of the parameters to be passed to [[convertAssignmentIdExternal]].
 */
export interface ConvertAssignmentIdExternalParameters {
  /**
   * Old Assignment Id External.
   */
  oldAssignmentIdExternal: string;
  /**
   * New Assignment Id External.
   */
  newAssignmentIdExternal: string;
}

/**
 * Convert Assignment Id External.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function convertAssignmentIdExternal(parameters: ConvertAssignmentIdExternalParameters): FunctionImportRequestBuilder<ConvertAssignmentIdExternalParameters, string> {
  const params = {
    oldAssignmentIdExternal: new FunctionImportParameter('oldAssignmentIdExternal', 'Edm.String', parameters.oldAssignmentIdExternal),
    newAssignmentIdExternal: new FunctionImportParameter('newAssignmentIdExternal', 'Edm.String', parameters.newAssignmentIdExternal)
  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'convertAssignmentIdExternal', (data) => transformReturnValueForEdmType(data, (val) => edmToTs(val, 'Edm.String')), params);
}

/**
 * Type of the parameters to be passed to [[getDocumentCategories]].
 */
export interface GetDocumentCategoriesParameters {
  /**
   * Entity Type.
   */
  entityType: string;
  /**
   * Exclude Inactive.
   */
  excludeInactive: boolean;
  /**
   * Enforce Perm.
   */
  enforcePerm: boolean;
}

/**
 * Get Document Categories.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function getDocumentCategories(parameters: GetDocumentCategoriesParameters): FunctionImportRequestBuilder<GetDocumentCategoriesParameters, DocumentCategories> {
  const params = {
    entityType: new FunctionImportParameter('entityType', 'Edm.String', parameters.entityType),
    excludeInactive: new FunctionImportParameter('excludeInactive', 'Edm.Boolean', parameters.excludeInactive),
    enforcePerm: new FunctionImportParameter('enforcePerm', 'Edm.Boolean', parameters.enforcePerm)
  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'getDocumentCategories', (data) => transformReturnValueForComplexType(data, DocumentCategories.build), params);
}

/**
 * Type of the parameters to be passed to [[getPeopleProfileHeader]].
 */
export interface GetPeopleProfileHeaderParameters {
  /**
   * User Id.
   */
  userId: string;
}

/**
 * Get People Profile Header.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function getPeopleProfileHeader(parameters: GetPeopleProfileHeaderParameters): FunctionImportRequestBuilder<GetPeopleProfileHeaderParameters, PeopleProfileHeaderResponse[]> {
  const params = {
    userId: new FunctionImportParameter('userId', 'Edm.String', parameters.userId)
  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'getPeopleProfileHeader', (data) => transformReturnValueForComplexTypeList(data, PeopleProfileHeaderResponse.build), params);
}

/**
 * Type of the parameters to be passed to [[signForm]].
 */
export interface SignFormParameters {
  /**
   * Form Data Id.
   */
  formDataId: BigNumber;
  /**
   * Comment.
   */
  comment: string;
}

/**
 * Sign Form.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function signForm(parameters: SignFormParameters): FunctionImportRequestBuilder<SignFormParameters, CoRouteFormStatusBean> {
  const params = {
    formDataId: new FunctionImportParameter('formDataId', 'Edm.Int64', parameters.formDataId),
    comment: new FunctionImportParameter('comment', 'Edm.String', parameters.comment)
  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'signForm', (data) => transformReturnValueForComplexType(data, CoRouteFormStatusBean.build), params);
}

/**
 * Type of the parameters to be passed to [[rejectForm]].
 */
export interface RejectFormParameters {
  /**
   * Form Data Id.
   */
  formDataId: BigNumber;
  /**
   * Comment.
   */
  comment: string;
}

/**
 * Reject Form.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function rejectForm(parameters: RejectFormParameters): FunctionImportRequestBuilder<RejectFormParameters, CoRouteFormStatusBean> {
  const params = {
    formDataId: new FunctionImportParameter('formDataId', 'Edm.Int64', parameters.formDataId),
    comment: new FunctionImportParameter('comment', 'Edm.String', parameters.comment)
  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'rejectForm', (data) => transformReturnValueForComplexType(data, CoRouteFormStatusBean.build), params);
}

/**
 * Type of the parameters to be passed to [[sendToNextStep]].
 */
export interface SendToNextStepParameters {
  /**
   * Form Data Id.
   */
  formDataId: BigNumber;
  /**
   * Comment.
   */
  comment: string;
  /**
   * Inner Step User Id.
   */
  innerStepUserId: string;
  /**
   * Next I Step Entry User.
   */
  nextIStepEntryUser: string;
}

/**
 * Send To Next Step.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function sendToNextStep(parameters: SendToNextStepParameters): FunctionImportRequestBuilder<SendToNextStepParameters, CoRouteFormStatusBean> {
  const params = {
    formDataId: new FunctionImportParameter('formDataId', 'Edm.Int64', parameters.formDataId),
    comment: new FunctionImportParameter('comment', 'Edm.String', parameters.comment),
    innerStepUserId: new FunctionImportParameter('innerStepUserId', 'Edm.String', parameters.innerStepUserId),
    nextIStepEntryUser: new FunctionImportParameter('nextIStepEntryUser', 'Edm.String', parameters.nextIStepEntryUser)
  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'sendToNextStep', (data) => transformReturnValueForComplexType(data, CoRouteFormStatusBean.build), params);
}

/**
 * Type of the parameters to be passed to [[sendToPreviousStep]].
 */
export interface SendToPreviousStepParameters {
  /**
   * Form Data Id.
   */
  formDataId: BigNumber;
  /**
   * Comment.
   */
  comment: string;
  /**
   * Previous I Step Entry User.
   */
  previousIStepEntryUser: string;
}

/**
 * Send To Previous Step.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function sendToPreviousStep(parameters: SendToPreviousStepParameters): FunctionImportRequestBuilder<SendToPreviousStepParameters, CoRouteFormStatusBean> {
  const params = {
    formDataId: new FunctionImportParameter('formDataId', 'Edm.Int64', parameters.formDataId),
    comment: new FunctionImportParameter('comment', 'Edm.String', parameters.comment),
    previousIStepEntryUser: new FunctionImportParameter('previousIStepEntryUser', 'Edm.String', parameters.previousIStepEntryUser)
  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'sendToPreviousStep', (data) => transformReturnValueForComplexType(data, CoRouteFormStatusBean.build), params);
}

/**
 * Type of the parameters to be passed to [[createPerformanceReviewForm]].
 */
export interface CreatePerformanceReviewFormParameters {
  /**
   * Form Subject Id.
   */
  formSubjectId: string;
  /**
   * Form Template Id.
   */
  formTemplateId: BigNumber;
  /**
   * Send Email.
   */
  sendEmail: boolean;
  /**
   * En Route Copy.
   */
  enRouteCopy: boolean;
}

/**
 * Create Performance Review Form.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function createPerformanceReviewForm(parameters: CreatePerformanceReviewFormParameters): FunctionImportRequestBuilder<CreatePerformanceReviewFormParameters, CreatePerformanceReviewFormResponse> {
  const params = {
    formSubjectId: new FunctionImportParameter('formSubjectId', 'Edm.String', parameters.formSubjectId),
    formTemplateId: new FunctionImportParameter('formTemplateId', 'Edm.Int64', parameters.formTemplateId),
    sendEmail: new FunctionImportParameter('sendEmail', 'Edm.Boolean', parameters.sendEmail),
    enRouteCopy: new FunctionImportParameter('enRouteCopy', 'Edm.Boolean', parameters.enRouteCopy)
  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'createPerformanceReviewForm', (data) => transformReturnValueForComplexType(data, CreatePerformanceReviewFormResponse.build), params);
}

/**
 * Type of the parameters to be passed to [[complete360]].
 */
export interface Complete360Parameters {
  /**
   * Form Data Id.
   */
  formDataId: BigNumber;
  /**
   * Comment.
   */
  comment: string;
}

/**
 * Complete 360.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function complete360(parameters: Complete360Parameters): FunctionImportRequestBuilder<Complete360Parameters, CoRouteFormStatusBean> {
  const params = {
    formDataId: new FunctionImportParameter('formDataId', 'Edm.Int64', parameters.formDataId),
    comment: new FunctionImportParameter('comment', 'Edm.String', parameters.comment)
  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'complete360', (data) => transformReturnValueForComplexType(data, CoRouteFormStatusBean.build), params);
}

/**
 * Type of the parameters to be passed to [[getPositionObjectData]].
 */
export interface GetPositionObjectDataParameters {
  /**
   * Position Id.
   */
  positionId: BigNumber;
  /**
   * User Id.
   */
  userId: string;
}

/**
 * Get Position Object Data.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function getPositionObjectData(parameters: GetPositionObjectDataParameters): FunctionImportRequestBuilder<GetPositionObjectDataParameters, RuleFieldMappingBeanList> {
  const params = {
    positionId: new FunctionImportParameter('positionId', 'Edm.Int64', parameters.positionId),
    userId: new FunctionImportParameter('userId', 'Edm.String', parameters.userId)
  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'getPositionObjectData', (data) => transformReturnValueForComplexType(data, RuleFieldMappingBeanList.build), params);
}

/**
 * Type of the parameters to be passed to [[getNewEmploymentEnabledForContingentWorkforce]].
 */
export interface GetNewEmploymentEnabledForContingentWorkforceParameters {
}

/**
 * Get New Employment Enabled For Contingent Workforce.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function getNewEmploymentEnabledForContingentWorkforce(parameters: GetNewEmploymentEnabledForContingentWorkforceParameters): FunctionImportRequestBuilder<GetNewEmploymentEnabledForContingentWorkforceParameters, boolean> {
  const params = {

  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'getNewEmploymentEnabledForContingentWorkforce', (data) => transformReturnValueForEdmType(data, (val) => edmToTs(val, 'Edm.Boolean')), params);
}

/**
 * Type of the parameters to be passed to [[getExpandedDynamicGroupByName]].
 */
export interface GetExpandedDynamicGroupByNameParameters {
  /**
   * Group Name.
   */
  groupName: string;
}

/**
 * Get Expanded Dynamic Group By Name.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function getExpandedDynamicGroupByName(parameters: GetExpandedDynamicGroupByNameParameters): FunctionImportRequestBuilder<GetExpandedDynamicGroupByNameParameters, DynamicGroup> {
  const params = {
    groupName: new FunctionImportParameter('groupName', 'Edm.String', parameters.groupName)
  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'getExpandedDynamicGroupByName', (data) => transformReturnValueForEntity(data, DynamicGroup), params);
}

/**
 * Type of the parameters to be passed to [[getExpandedDynamicGroupByNameAndSubType]].
 */
export interface GetExpandedDynamicGroupByNameAndSubTypeParameters {
  /**
   * Group Name.
   */
  groupName: string;
  /**
   * Group Type.
   */
  groupType: string;
}

/**
 * Get Expanded Dynamic Group By Name And Sub Type.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function getExpandedDynamicGroupByNameAndSubType(parameters: GetExpandedDynamicGroupByNameAndSubTypeParameters): FunctionImportRequestBuilder<GetExpandedDynamicGroupByNameAndSubTypeParameters, DynamicGroup> {
  const params = {
    groupName: new FunctionImportParameter('groupName', 'Edm.String', parameters.groupName),
    groupType: new FunctionImportParameter('groupType', 'Edm.String', parameters.groupType)
  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'getExpandedDynamicGroupByNameAndSubType', (data) => transformReturnValueForEntity(data, DynamicGroup), params);
}

/**
 * Type of the parameters to be passed to [[getExpandedDynamicGroupById]].
 */
export interface GetExpandedDynamicGroupByIdParameters {
  /**
   * Group Id.
   */
  groupId: BigNumber;
}

/**
 * Get Expanded Dynamic Group By Id.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function getExpandedDynamicGroupById(parameters: GetExpandedDynamicGroupByIdParameters): FunctionImportRequestBuilder<GetExpandedDynamicGroupByIdParameters, DynamicGroup> {
  const params = {
    groupId: new FunctionImportParameter('groupId', 'Edm.Int64', parameters.groupId)
  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'getExpandedDynamicGroupById', (data) => transformReturnValueForEntity(data, DynamicGroup), params);
}

/**
 * Type of the parameters to be passed to [[getUserRolesByUserId]].
 */
export interface GetUserRolesByUserIdParameters {
  /**
   * User Id.
   */
  userId: string;
}

/**
 * Get User Roles By User Id.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function getUserRolesByUserId(parameters: GetUserRolesByUserIdParameters): FunctionImportRequestBuilder<GetUserRolesByUserIdParameters, RbpRole[]> {
  const params = {
    userId: new FunctionImportParameter('userId', 'Edm.String', parameters.userId)
  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'getUserRolesByUserId', (data) => transformReturnValueForEntityList(data, RbpRole), params);
}

export const functionImports = {
  refreshMetadata,
  getBizXAction,
  generateNextPersonId,
  approveWfRequest,
  commentWfRequest,
  rejectWfRequest,
  sendbackWfRequest,
  withdrawWfRequest,
  getWorkflowPendingData,
  getDefaultGoalPlanTemplateId,
  fwdCandidateToColleague,
  setSmsNotificationPreference,
  reassignJobReq,
  initiateOnboarding,
  sendJobReqToPreviousStep,
  sendJobReqToNextStep,
  sendJobReqFormToUser,
  approveOrDeclineJobReqForm,
  addModifierToJobReq,
  approveOffer,
  declineOffer,
  sendOfferForApproval,
  sendMailOfferLetter,
  getRecruitingTemplate,
  getOfferLetterTemplate,
  refreshInterviewAssessments,
  sendEmailToInterviewers,
  inviteToApply,
  getMatchedGuideLineRuleInfo,
  isUserEligibleForSpotAwardProgram,
  getEligibleSpotAwardsProgramCodes,
  initiateOnboardingForUser,
  getExtEventMetaDataDefinition,
  approveSuccessors,
  rejectSuccessors,
  getDefaultDevGoalPlanTemplateId,
  upsert,
  logout,
  isValidSession,
  checkUserPermission,
  updateStaticGroup,
  getDynamicGroupsByUser,
  getUsersByDynamicGroup,
  getUserRolesReport,
  getPermissionMetadata,
  getUsersPermissions,
  getRolesPermissions,
  checkUserPermissions,
  getUserNameFormat,
  getPasswordPolicy,
  convertAssignmentIdExternal,
  getDocumentCategories,
  getPeopleProfileHeader,
  signForm,
  rejectForm,
  sendToNextStep,
  sendToPreviousStep,
  createPerformanceReviewForm,
  complete360,
  getPositionObjectData,
  getNewEmploymentEnabledForContingentWorkforce,
  getExpandedDynamicGroupByName,
  getExpandedDynamicGroupByNameAndSubType,
  getExpandedDynamicGroupById,
  getUserRolesByUserId
};
