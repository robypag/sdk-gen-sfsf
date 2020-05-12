import { BigNumber } from 'bignumber.js';
import { FunctionImportRequestBuilder } from '@sap-cloud-sdk/core';
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
export declare function refreshMetadata(parameters: RefreshMetadataParameters): FunctionImportRequestBuilder<RefreshMetadataParameters, undefined>;
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
export declare function getBizXAction(parameters: GetBizXActionParameters): FunctionImportRequestBuilder<GetBizXActionParameters, GetBizXActionResponse[]>;
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
export declare function generateNextPersonId(parameters: GenerateNextPersonIdParameters): FunctionImportRequestBuilder<GenerateNextPersonIdParameters, GenerateNextPersonIdResponse>;
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
export declare function approveWfRequest(parameters: ApproveWfRequestParameters): FunctionImportRequestBuilder<ApproveWfRequestParameters, WfRequestActionResponse[]>;
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
export declare function commentWfRequest(parameters: CommentWfRequestParameters): FunctionImportRequestBuilder<CommentWfRequestParameters, WfRequestActionResponse[]>;
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
export declare function rejectWfRequest(parameters: RejectWfRequestParameters): FunctionImportRequestBuilder<RejectWfRequestParameters, WfRequestActionResponse[]>;
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
export declare function sendbackWfRequest(parameters: SendbackWfRequestParameters): FunctionImportRequestBuilder<SendbackWfRequestParameters, WfRequestActionResponse[]>;
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
export declare function withdrawWfRequest(parameters: WithdrawWfRequestParameters): FunctionImportRequestBuilder<WithdrawWfRequestParameters, WfRequestActionResponse[]>;
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
export declare function getWorkflowPendingData(parameters: GetWorkflowPendingDataParameters): FunctionImportRequestBuilder<GetWorkflowPendingDataParameters, WfRequestPendingDataResponse[]>;
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
export declare function getDefaultGoalPlanTemplateId(parameters: GetDefaultGoalPlanTemplateIdParameters): FunctionImportRequestBuilder<GetDefaultGoalPlanTemplateIdParameters, BigNumber>;
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
export declare function fwdCandidateToColleague(parameters: FwdCandidateToColleagueParameters): FunctionImportRequestBuilder<FwdCandidateToColleagueParameters, string>;
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
export declare function setSmsNotificationPreference(parameters: SetSmsNotificationPreferenceParameters): FunctionImportRequestBuilder<SetSmsNotificationPreferenceParameters, string>;
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
export declare function reassignJobReq(parameters: ReassignJobReqParameters): FunctionImportRequestBuilder<ReassignJobReqParameters, string>;
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
export declare function initiateOnboarding(parameters: InitiateOnboardingParameters): FunctionImportRequestBuilder<InitiateOnboardingParameters, string>;
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
export declare function sendJobReqToPreviousStep(parameters: SendJobReqToPreviousStepParameters): FunctionImportRequestBuilder<SendJobReqToPreviousStepParameters, string>;
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
export declare function sendJobReqToNextStep(parameters: SendJobReqToNextStepParameters): FunctionImportRequestBuilder<SendJobReqToNextStepParameters, string>;
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
export declare function sendJobReqFormToUser(parameters: SendJobReqFormToUserParameters): FunctionImportRequestBuilder<SendJobReqFormToUserParameters, string>;
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
export declare function approveOrDeclineJobReqForm(parameters: ApproveOrDeclineJobReqFormParameters): FunctionImportRequestBuilder<ApproveOrDeclineJobReqFormParameters, string>;
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
export declare function addModifierToJobReq(parameters: AddModifierToJobReqParameters): FunctionImportRequestBuilder<AddModifierToJobReqParameters, string>;
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
export declare function approveOffer(parameters: ApproveOfferParameters): FunctionImportRequestBuilder<ApproveOfferParameters, string>;
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
export declare function declineOffer(parameters: DeclineOfferParameters): FunctionImportRequestBuilder<DeclineOfferParameters, string>;
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
export declare function sendOfferForApproval(parameters: SendOfferForApprovalParameters): FunctionImportRequestBuilder<SendOfferForApprovalParameters, string>;
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
export declare function sendMailOfferLetter(parameters: SendMailOfferLetterParameters): FunctionImportRequestBuilder<SendMailOfferLetterParameters, string>;
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
export declare function getRecruitingTemplate(parameters: GetRecruitingTemplateParameters): FunctionImportRequestBuilder<GetRecruitingTemplateParameters, string>;
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
export declare function getOfferLetterTemplate(parameters: GetOfferLetterTemplateParameters): FunctionImportRequestBuilder<GetOfferLetterTemplateParameters, string>;
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
export declare function refreshInterviewAssessments(parameters: RefreshInterviewAssessmentsParameters): FunctionImportRequestBuilder<RefreshInterviewAssessmentsParameters, string>;
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
export declare function sendEmailToInterviewers(parameters: SendEmailToInterviewersParameters): FunctionImportRequestBuilder<SendEmailToInterviewersParameters, string>;
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
export declare function inviteToApply(parameters: InviteToApplyParameters): FunctionImportRequestBuilder<InviteToApplyParameters, InviteToApplyResponse[]>;
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
export declare function getMatchedGuideLineRuleInfo(parameters: GetMatchedGuideLineRuleInfoParameters): FunctionImportRequestBuilder<GetMatchedGuideLineRuleInfoParameters, GetMatchedGuideLineRuleInfoResponse>;
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
export declare function isUserEligibleForSpotAwardProgram(parameters: IsUserEligibleForSpotAwardProgramParameters): FunctionImportRequestBuilder<IsUserEligibleForSpotAwardProgramParameters, IsUserEligibleForSpotAwardProgramResponse>;
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
export declare function getEligibleSpotAwardsProgramCodes(parameters: GetEligibleSpotAwardsProgramCodesParameters): FunctionImportRequestBuilder<GetEligibleSpotAwardsProgramCodesParameters, GetEligibleSpotAwardsProgramCodesResponse>;
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
export declare function initiateOnboardingForUser(parameters: InitiateOnboardingForUserParameters): FunctionImportRequestBuilder<InitiateOnboardingForUserParameters, string>;
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
export declare function getExtEventMetaDataDefinition(parameters: GetExtEventMetaDataDefinitionParameters): FunctionImportRequestBuilder<GetExtEventMetaDataDefinitionParameters, SefExtEventMetaDataList>;
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
export declare function approveSuccessors(parameters: ApproveSuccessorsParameters): FunctionImportRequestBuilder<ApproveSuccessorsParameters, NominationApprovalWorkflowResponse[]>;
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
export declare function rejectSuccessors(parameters: RejectSuccessorsParameters): FunctionImportRequestBuilder<RejectSuccessorsParameters, NominationApprovalWorkflowResponse[]>;
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
export declare function getDefaultDevGoalPlanTemplateId(parameters: GetDefaultDevGoalPlanTemplateIdParameters): FunctionImportRequestBuilder<GetDefaultDevGoalPlanTemplateIdParameters, BigNumber>;
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
export declare function upsert(parameters: UpsertParameters): FunctionImportRequestBuilder<UpsertParameters, UpsertResult[]>;
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
export declare function logout(parameters: LogoutParameters): FunctionImportRequestBuilder<LogoutParameters, undefined>;
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
export declare function isValidSession(parameters: IsValidSessionParameters): FunctionImportRequestBuilder<IsValidSessionParameters, boolean>;
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
export declare function checkUserPermission(parameters: CheckUserPermissionParameters): FunctionImportRequestBuilder<CheckUserPermissionParameters, boolean>;
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
export declare function updateStaticGroup(parameters: UpdateStaticGroupParameters): FunctionImportRequestBuilder<UpdateStaticGroupParameters, number>;
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
export declare function getDynamicGroupsByUser(parameters: GetDynamicGroupsByUserParameters): FunctionImportRequestBuilder<GetDynamicGroupsByUserParameters, DynamicGroupBean[]>;
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
export declare function getUsersByDynamicGroup(parameters: GetUsersByDynamicGroupParameters): FunctionImportRequestBuilder<GetUsersByDynamicGroupParameters, DynamicGroupUserBean[]>;
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
export declare function getUserRolesReport(parameters: GetUserRolesReportParameters): FunctionImportRequestBuilder<GetUserRolesReportParameters, string>;
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
export declare function getPermissionMetadata(parameters: GetPermissionMetadataParameters): FunctionImportRequestBuilder<GetPermissionMetadataParameters, string>;
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
export declare function getUsersPermissions(parameters: GetUsersPermissionsParameters): FunctionImportRequestBuilder<GetUsersPermissionsParameters, string>;
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
export declare function getRolesPermissions(parameters: GetRolesPermissionsParameters): FunctionImportRequestBuilder<GetRolesPermissionsParameters, string>;
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
export declare function checkUserPermissions(parameters: CheckUserPermissionsParameters): FunctionImportRequestBuilder<CheckUserPermissionsParameters, string>;
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
export declare function getUserNameFormat(parameters: GetUserNameFormatParameters): FunctionImportRequestBuilder<GetUserNameFormatParameters, string>;
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
export declare function getPasswordPolicy(parameters: GetPasswordPolicyParameters): FunctionImportRequestBuilder<GetPasswordPolicyParameters, string>;
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
export declare function convertAssignmentIdExternal(parameters: ConvertAssignmentIdExternalParameters): FunctionImportRequestBuilder<ConvertAssignmentIdExternalParameters, string>;
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
export declare function getDocumentCategories(parameters: GetDocumentCategoriesParameters): FunctionImportRequestBuilder<GetDocumentCategoriesParameters, DocumentCategories>;
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
export declare function getPeopleProfileHeader(parameters: GetPeopleProfileHeaderParameters): FunctionImportRequestBuilder<GetPeopleProfileHeaderParameters, PeopleProfileHeaderResponse[]>;
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
export declare function signForm(parameters: SignFormParameters): FunctionImportRequestBuilder<SignFormParameters, CoRouteFormStatusBean>;
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
export declare function rejectForm(parameters: RejectFormParameters): FunctionImportRequestBuilder<RejectFormParameters, CoRouteFormStatusBean>;
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
export declare function sendToNextStep(parameters: SendToNextStepParameters): FunctionImportRequestBuilder<SendToNextStepParameters, CoRouteFormStatusBean>;
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
export declare function sendToPreviousStep(parameters: SendToPreviousStepParameters): FunctionImportRequestBuilder<SendToPreviousStepParameters, CoRouteFormStatusBean>;
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
export declare function createPerformanceReviewForm(parameters: CreatePerformanceReviewFormParameters): FunctionImportRequestBuilder<CreatePerformanceReviewFormParameters, CreatePerformanceReviewFormResponse>;
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
export declare function complete360(parameters: Complete360Parameters): FunctionImportRequestBuilder<Complete360Parameters, CoRouteFormStatusBean>;
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
export declare function getPositionObjectData(parameters: GetPositionObjectDataParameters): FunctionImportRequestBuilder<GetPositionObjectDataParameters, RuleFieldMappingBeanList>;
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
export declare function getNewEmploymentEnabledForContingentWorkforce(parameters: GetNewEmploymentEnabledForContingentWorkforceParameters): FunctionImportRequestBuilder<GetNewEmploymentEnabledForContingentWorkforceParameters, boolean>;
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
export declare function getExpandedDynamicGroupByName(parameters: GetExpandedDynamicGroupByNameParameters): FunctionImportRequestBuilder<GetExpandedDynamicGroupByNameParameters, DynamicGroup>;
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
export declare function getExpandedDynamicGroupByNameAndSubType(parameters: GetExpandedDynamicGroupByNameAndSubTypeParameters): FunctionImportRequestBuilder<GetExpandedDynamicGroupByNameAndSubTypeParameters, DynamicGroup>;
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
export declare function getExpandedDynamicGroupById(parameters: GetExpandedDynamicGroupByIdParameters): FunctionImportRequestBuilder<GetExpandedDynamicGroupByIdParameters, DynamicGroup>;
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
export declare function getUserRolesByUserId(parameters: GetUserRolesByUserIdParameters): FunctionImportRequestBuilder<GetUserRolesByUserIdParameters, RbpRole[]>;
export declare const functionImports: {
    refreshMetadata: typeof refreshMetadata;
    getBizXAction: typeof getBizXAction;
    generateNextPersonId: typeof generateNextPersonId;
    approveWfRequest: typeof approveWfRequest;
    commentWfRequest: typeof commentWfRequest;
    rejectWfRequest: typeof rejectWfRequest;
    sendbackWfRequest: typeof sendbackWfRequest;
    withdrawWfRequest: typeof withdrawWfRequest;
    getWorkflowPendingData: typeof getWorkflowPendingData;
    getDefaultGoalPlanTemplateId: typeof getDefaultGoalPlanTemplateId;
    fwdCandidateToColleague: typeof fwdCandidateToColleague;
    setSmsNotificationPreference: typeof setSmsNotificationPreference;
    reassignJobReq: typeof reassignJobReq;
    initiateOnboarding: typeof initiateOnboarding;
    sendJobReqToPreviousStep: typeof sendJobReqToPreviousStep;
    sendJobReqToNextStep: typeof sendJobReqToNextStep;
    sendJobReqFormToUser: typeof sendJobReqFormToUser;
    approveOrDeclineJobReqForm: typeof approveOrDeclineJobReqForm;
    addModifierToJobReq: typeof addModifierToJobReq;
    approveOffer: typeof approveOffer;
    declineOffer: typeof declineOffer;
    sendOfferForApproval: typeof sendOfferForApproval;
    sendMailOfferLetter: typeof sendMailOfferLetter;
    getRecruitingTemplate: typeof getRecruitingTemplate;
    getOfferLetterTemplate: typeof getOfferLetterTemplate;
    refreshInterviewAssessments: typeof refreshInterviewAssessments;
    sendEmailToInterviewers: typeof sendEmailToInterviewers;
    inviteToApply: typeof inviteToApply;
    getMatchedGuideLineRuleInfo: typeof getMatchedGuideLineRuleInfo;
    isUserEligibleForSpotAwardProgram: typeof isUserEligibleForSpotAwardProgram;
    getEligibleSpotAwardsProgramCodes: typeof getEligibleSpotAwardsProgramCodes;
    initiateOnboardingForUser: typeof initiateOnboardingForUser;
    getExtEventMetaDataDefinition: typeof getExtEventMetaDataDefinition;
    approveSuccessors: typeof approveSuccessors;
    rejectSuccessors: typeof rejectSuccessors;
    getDefaultDevGoalPlanTemplateId: typeof getDefaultDevGoalPlanTemplateId;
    upsert: typeof upsert;
    logout: typeof logout;
    isValidSession: typeof isValidSession;
    checkUserPermission: typeof checkUserPermission;
    updateStaticGroup: typeof updateStaticGroup;
    getDynamicGroupsByUser: typeof getDynamicGroupsByUser;
    getUsersByDynamicGroup: typeof getUsersByDynamicGroup;
    getUserRolesReport: typeof getUserRolesReport;
    getPermissionMetadata: typeof getPermissionMetadata;
    getUsersPermissions: typeof getUsersPermissions;
    getRolesPermissions: typeof getRolesPermissions;
    checkUserPermissions: typeof checkUserPermissions;
    getUserNameFormat: typeof getUserNameFormat;
    getPasswordPolicy: typeof getPasswordPolicy;
    convertAssignmentIdExternal: typeof convertAssignmentIdExternal;
    getDocumentCategories: typeof getDocumentCategories;
    getPeopleProfileHeader: typeof getPeopleProfileHeader;
    signForm: typeof signForm;
    rejectForm: typeof rejectForm;
    sendToNextStep: typeof sendToNextStep;
    sendToPreviousStep: typeof sendToPreviousStep;
    createPerformanceReviewForm: typeof createPerformanceReviewForm;
    complete360: typeof complete360;
    getPositionObjectData: typeof getPositionObjectData;
    getNewEmploymentEnabledForContingentWorkforce: typeof getNewEmploymentEnabledForContingentWorkforce;
    getExpandedDynamicGroupByName: typeof getExpandedDynamicGroupByName;
    getExpandedDynamicGroupByNameAndSubType: typeof getExpandedDynamicGroupByNameAndSubType;
    getExpandedDynamicGroupById: typeof getExpandedDynamicGroupById;
    getUserRolesByUserId: typeof getUserRolesByUserId;
};
//# sourceMappingURL=function-imports.d.ts.map