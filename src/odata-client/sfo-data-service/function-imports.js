"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@sap-cloud-sdk/core");
var GetBizXActionResponse_1 = require("./GetBizXActionResponse");
var GenerateNextPersonIdResponse_1 = require("./GenerateNextPersonIdResponse");
var WfRequestActionResponse_1 = require("./WfRequestActionResponse");
var WfRequestPendingDataResponse_1 = require("./WfRequestPendingDataResponse");
var InviteToApplyResponse_1 = require("./InviteToApplyResponse");
var GetMatchedGuideLineRuleInfoResponse_1 = require("./GetMatchedGuideLineRuleInfoResponse");
var IsUserEligibleForSpotAwardProgramResponse_1 = require("./IsUserEligibleForSpotAwardProgramResponse");
var GetEligibleSpotAwardsProgramCodesResponse_1 = require("./GetEligibleSpotAwardsProgramCodesResponse");
var SefExtEventMetaDataList_1 = require("./SefExtEventMetaDataList");
var NominationApprovalWorkflowResponse_1 = require("./NominationApprovalWorkflowResponse");
var UpsertResult_1 = require("./UpsertResult");
var DynamicGroupBean_1 = require("./DynamicGroupBean");
var DynamicGroupUserBean_1 = require("./DynamicGroupUserBean");
var DocumentCategories_1 = require("./DocumentCategories");
var PeopleProfileHeaderResponse_1 = require("./PeopleProfileHeaderResponse");
var CoRouteFormStatusBean_1 = require("./CoRouteFormStatusBean");
var CreatePerformanceReviewFormResponse_1 = require("./CreatePerformanceReviewFormResponse");
var RuleFieldMappingBeanList_1 = require("./RuleFieldMappingBeanList");
var DynamicGroup_1 = require("./DynamicGroup");
var RbpRole_1 = require("./RbpRole");
/**
 * Refresh Metadata.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function refreshMetadata(parameters) {
    var params = {};
    return new core_1.FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'refreshMetadata', function (data) { return core_1.transformReturnValueForUndefined(data, function (val) { return undefined; }); }, params);
}
exports.refreshMetadata = refreshMetadata;
/**
 * Get Biz X Action.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function getBizXAction(parameters) {
    var params = {
        actionSourceId: new core_1.FunctionImportParameter('actionSourceId', 'Edm.String', parameters.actionSourceId),
        userId: new core_1.FunctionImportParameter('userId', 'Edm.String', parameters.userId)
    };
    return new core_1.FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'GetBizXAction', function (data) { return core_1.transformReturnValueForComplexTypeList(data, GetBizXActionResponse_1.GetBizXActionResponse.build); }, params);
}
exports.getBizXAction = getBizXAction;
/**
 * Generate Next Person Id.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function generateNextPersonId(parameters) {
    var params = {};
    return new core_1.FunctionImportRequestBuilder('post', 'VALUE_IS_UNDEFINED', 'generateNextPersonID', function (data) { return core_1.transformReturnValueForComplexType(data, GenerateNextPersonIdResponse_1.GenerateNextPersonIdResponse.build); }, params);
}
exports.generateNextPersonId = generateNextPersonId;
/**
 * Approve Wf Request.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function approveWfRequest(parameters) {
    var params = {
        wfRequestId: new core_1.FunctionImportParameter('wfRequestId', 'Edm.Int64', parameters.wfRequestId),
        comment: new core_1.FunctionImportParameter('comment', 'Edm.String', parameters.comment)
    };
    return new core_1.FunctionImportRequestBuilder('post', 'VALUE_IS_UNDEFINED', 'approveWfRequest', function (data) { return core_1.transformReturnValueForComplexTypeList(data, WfRequestActionResponse_1.WfRequestActionResponse.build); }, params);
}
exports.approveWfRequest = approveWfRequest;
/**
 * Comment Wf Request.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function commentWfRequest(parameters) {
    var params = {
        wfRequestId: new core_1.FunctionImportParameter('wfRequestId', 'Edm.Int64', parameters.wfRequestId),
        comment: new core_1.FunctionImportParameter('comment', 'Edm.String', parameters.comment)
    };
    return new core_1.FunctionImportRequestBuilder('post', 'VALUE_IS_UNDEFINED', 'commentWfRequest', function (data) { return core_1.transformReturnValueForComplexTypeList(data, WfRequestActionResponse_1.WfRequestActionResponse.build); }, params);
}
exports.commentWfRequest = commentWfRequest;
/**
 * Reject Wf Request.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function rejectWfRequest(parameters) {
    var params = {
        wfRequestId: new core_1.FunctionImportParameter('wfRequestId', 'Edm.Int64', parameters.wfRequestId),
        comment: new core_1.FunctionImportParameter('comment', 'Edm.String', parameters.comment)
    };
    return new core_1.FunctionImportRequestBuilder('post', 'VALUE_IS_UNDEFINED', 'rejectWfRequest', function (data) { return core_1.transformReturnValueForComplexTypeList(data, WfRequestActionResponse_1.WfRequestActionResponse.build); }, params);
}
exports.rejectWfRequest = rejectWfRequest;
/**
 * Sendback Wf Request.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function sendbackWfRequest(parameters) {
    var params = {
        wfRequestId: new core_1.FunctionImportParameter('wfRequestId', 'Edm.Int64', parameters.wfRequestId),
        comment: new core_1.FunctionImportParameter('comment', 'Edm.String', parameters.comment)
    };
    return new core_1.FunctionImportRequestBuilder('post', 'VALUE_IS_UNDEFINED', 'sendbackWfRequest', function (data) { return core_1.transformReturnValueForComplexTypeList(data, WfRequestActionResponse_1.WfRequestActionResponse.build); }, params);
}
exports.sendbackWfRequest = sendbackWfRequest;
/**
 * Withdraw Wf Request.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function withdrawWfRequest(parameters) {
    var params = {
        wfRequestId: new core_1.FunctionImportParameter('wfRequestId', 'Edm.Int64', parameters.wfRequestId),
        comment: new core_1.FunctionImportParameter('comment', 'Edm.String', parameters.comment)
    };
    return new core_1.FunctionImportRequestBuilder('post', 'VALUE_IS_UNDEFINED', 'withdrawWfRequest', function (data) { return core_1.transformReturnValueForComplexTypeList(data, WfRequestActionResponse_1.WfRequestActionResponse.build); }, params);
}
exports.withdrawWfRequest = withdrawWfRequest;
/**
 * Get Workflow Pending Data.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function getWorkflowPendingData(parameters) {
    var params = {
        wfRequestId: new core_1.FunctionImportParameter('wfRequestId', 'Edm.Int64', parameters.wfRequestId)
    };
    return new core_1.FunctionImportRequestBuilder('post', 'VALUE_IS_UNDEFINED', 'getWorkflowPendingData', function (data) { return core_1.transformReturnValueForComplexTypeList(data, WfRequestPendingDataResponse_1.WfRequestPendingDataResponse.build); }, params);
}
exports.getWorkflowPendingData = getWorkflowPendingData;
/**
 * Get Default Goal Plan Template Id.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function getDefaultGoalPlanTemplateId(parameters) {
    var params = {};
    return new core_1.FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'getDefaultGoalPlanTemplateId', function (data) { return core_1.transformReturnValueForEdmType(data, function (val) { return core_1.edmToTs(val, 'Edm.Int64'); }); }, params);
}
exports.getDefaultGoalPlanTemplateId = getDefaultGoalPlanTemplateId;
/**
 * Fwd Candidate To Colleague.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function fwdCandidateToColleague(parameters) {
    var params = {
        candidateId: new core_1.FunctionImportParameter('candidateId', 'Edm.Int64', parameters.candidateId),
        referredTo: new core_1.FunctionImportParameter('referredTo', 'Edm.String', parameters.referredTo)
    };
    return new core_1.FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'fwdCandidateToColleague', function (data) { return core_1.transformReturnValueForEdmType(data, function (val) { return core_1.edmToTs(val, 'Edm.String'); }); }, params);
}
exports.fwdCandidateToColleague = fwdCandidateToColleague;
/**
 * Set Sms Notification Preference.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function setSmsNotificationPreference(parameters) {
    var params = {
        optIn: new core_1.FunctionImportParameter('optIn', 'Edm.Boolean', parameters.optIn),
        candidateId: new core_1.FunctionImportParameter('candidateId', 'Edm.Int64', parameters.candidateId),
        isoCountryCode: new core_1.FunctionImportParameter('isoCountryCode', 'Edm.String', parameters.isoCountryCode),
        cellPhone: new core_1.FunctionImportParameter('cellPhone', 'Edm.String', parameters.cellPhone)
    };
    return new core_1.FunctionImportRequestBuilder('post', 'VALUE_IS_UNDEFINED', 'setSmsNotificationPreference', function (data) { return core_1.transformReturnValueForEdmType(data, function (val) { return core_1.edmToTs(val, 'Edm.String'); }); }, params);
}
exports.setSmsNotificationPreference = setSmsNotificationPreference;
/**
 * Reassign Job Req.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function reassignJobReq(parameters) {
    var params = {
        jobReqId: new core_1.FunctionImportParameter('jobReqId', 'Edm.Int32', parameters.jobReqId),
        hiringManager: new core_1.FunctionImportParameter('hiringManager', 'Edm.String', parameters.hiringManager),
        recruiter: new core_1.FunctionImportParameter('recruiter', 'Edm.String', parameters.recruiter),
        coordinator: new core_1.FunctionImportParameter('coordinator', 'Edm.String', parameters.coordinator),
        vpOfStaffing: new core_1.FunctionImportParameter('vpOfStaffing', 'Edm.String', parameters.vpOfStaffing),
        secondRecruiter: new core_1.FunctionImportParameter('secondRecruiter', 'Edm.String', parameters.secondRecruiter),
        sourcer: new core_1.FunctionImportParameter('sourcer', 'Edm.String', parameters.sourcer)
    };
    return new core_1.FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'reassignJobReq', function (data) { return core_1.transformReturnValueForEdmType(data, function (val) { return core_1.edmToTs(val, 'Edm.String'); }); }, params);
}
exports.reassignJobReq = reassignJobReq;
/**
 * Initiate Onboarding.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function initiateOnboarding(parameters) {
    var params = {
        applicationId: new core_1.FunctionImportParameter('applicationId', 'Edm.Int64', parameters.applicationId)
    };
    return new core_1.FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'initiateOnboarding', function (data) { return core_1.transformReturnValueForEdmType(data, function (val) { return core_1.edmToTs(val, 'Edm.String'); }); }, params);
}
exports.initiateOnboarding = initiateOnboarding;
/**
 * Send Job Req To Previous Step.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function sendJobReqToPreviousStep(parameters) {
    var params = {
        jobReqId: new core_1.FunctionImportParameter('jobReqId', 'Edm.Int64', parameters.jobReqId),
        comment: new core_1.FunctionImportParameter('comment', 'Edm.String', parameters.comment)
    };
    return new core_1.FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'sendJobReqToPreviousStep', function (data) { return core_1.transformReturnValueForEdmType(data, function (val) { return core_1.edmToTs(val, 'Edm.String'); }); }, params);
}
exports.sendJobReqToPreviousStep = sendJobReqToPreviousStep;
/**
 * Send Job Req To Next Step.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function sendJobReqToNextStep(parameters) {
    var params = {
        jobReqId: new core_1.FunctionImportParameter('jobReqId', 'Edm.Int64', parameters.jobReqId),
        comment: new core_1.FunctionImportParameter('comment', 'Edm.String', parameters.comment)
    };
    return new core_1.FunctionImportRequestBuilder('post', 'VALUE_IS_UNDEFINED', 'sendJobReqToNextStep', function (data) { return core_1.transformReturnValueForEdmType(data, function (val) { return core_1.edmToTs(val, 'Edm.String'); }); }, params);
}
exports.sendJobReqToNextStep = sendJobReqToNextStep;
/**
 * Send Job Req Form To User.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function sendJobReqFormToUser(parameters) {
    var params = {
        jobReqId: new core_1.FunctionImportParameter('jobReqId', 'Edm.Int64', parameters.jobReqId),
        userId: new core_1.FunctionImportParameter('userId', 'Edm.String', parameters.userId),
        comment: new core_1.FunctionImportParameter('comment', 'Edm.String', parameters.comment)
    };
    return new core_1.FunctionImportRequestBuilder('post', 'VALUE_IS_UNDEFINED', 'sendJobReqFormToUser', function (data) { return core_1.transformReturnValueForEdmType(data, function (val) { return core_1.edmToTs(val, 'Edm.String'); }); }, params);
}
exports.sendJobReqFormToUser = sendJobReqFormToUser;
/**
 * Approve Or Decline Job Req Form.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function approveOrDeclineJobReqForm(parameters) {
    var params = {
        jobReqId: new core_1.FunctionImportParameter('jobReqId', 'Edm.Int64', parameters.jobReqId),
        actionType: new core_1.FunctionImportParameter('actionType', 'Edm.String', parameters.actionType)
    };
    return new core_1.FunctionImportRequestBuilder('post', 'VALUE_IS_UNDEFINED', 'approveOrDeclineJobReqForm', function (data) { return core_1.transformReturnValueForEdmType(data, function (val) { return core_1.edmToTs(val, 'Edm.String'); }); }, params);
}
exports.approveOrDeclineJobReqForm = approveOrDeclineJobReqForm;
/**
 * Add Modifier To Job Req.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function addModifierToJobReq(parameters) {
    var params = {
        jobReqId: new core_1.FunctionImportParameter('jobReqId', 'Edm.Int64', parameters.jobReqId),
        modifier: new core_1.FunctionImportParameter('modifier', 'Edm.String', parameters.modifier)
    };
    return new core_1.FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'addModifierToJobReq', function (data) { return core_1.transformReturnValueForEdmType(data, function (val) { return core_1.edmToTs(val, 'Edm.String'); }); }, params);
}
exports.addModifierToJobReq = addModifierToJobReq;
/**
 * Approve Offer.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function approveOffer(parameters) {
    var params = {
        applicationId: new core_1.FunctionImportParameter('applicationId', 'Edm.Int64', parameters.applicationId),
        comment: new core_1.FunctionImportParameter('comment', 'Edm.String', parameters.comment)
    };
    return new core_1.FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'approveOffer', function (data) { return core_1.transformReturnValueForEdmType(data, function (val) { return core_1.edmToTs(val, 'Edm.String'); }); }, params);
}
exports.approveOffer = approveOffer;
/**
 * Decline Offer.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function declineOffer(parameters) {
    var params = {
        applicationId: new core_1.FunctionImportParameter('applicationId', 'Edm.Int64', parameters.applicationId),
        comment: new core_1.FunctionImportParameter('comment', 'Edm.String', parameters.comment)
    };
    return new core_1.FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'declineOffer', function (data) { return core_1.transformReturnValueForEdmType(data, function (val) { return core_1.edmToTs(val, 'Edm.String'); }); }, params);
}
exports.declineOffer = declineOffer;
/**
 * Send Offer For Approval.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function sendOfferForApproval(parameters) {
    var params = {
        applicationId: new core_1.FunctionImportParameter('applicationId', 'Edm.Int64', parameters.applicationId)
    };
    return new core_1.FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'sendOfferForApproval', function (data) { return core_1.transformReturnValueForEdmType(data, function (val) { return core_1.edmToTs(val, 'Edm.String'); }); }, params);
}
exports.sendOfferForApproval = sendOfferForApproval;
/**
 * Send Mail Offer Letter.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function sendMailOfferLetter(parameters) {
    var params = {
        offerLetterId: new core_1.FunctionImportParameter('offerLetterId', 'Edm.Int64', parameters.offerLetterId),
        sendMode: new core_1.FunctionImportParameter('sendMode', 'Edm.String', parameters.sendMode),
        bodyTemplateId: new core_1.FunctionImportParameter('bodyTemplateId', 'Edm.Int64', parameters.bodyTemplateId),
        bodyLocale: new core_1.FunctionImportParameter('bodyLocale', 'Edm.String', parameters.bodyLocale)
    };
    return new core_1.FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'sendMailOfferLetter', function (data) { return core_1.transformReturnValueForEdmType(data, function (val) { return core_1.edmToTs(val, 'Edm.String'); }); }, params);
}
exports.sendMailOfferLetter = sendMailOfferLetter;
/**
 * Get Recruiting Template.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function getRecruitingTemplate(parameters) {
    var params = {
        templateName: new core_1.FunctionImportParameter('templateName', 'Edm.String', parameters.templateName),
        templateType: new core_1.FunctionImportParameter('templateType', 'Edm.String', parameters.templateType)
    };
    return new core_1.FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'getRecruitingTemplate', function (data) { return core_1.transformReturnValueForEdmType(data, function (val) { return core_1.edmToTs(val, 'Edm.String'); }); }, params);
}
exports.getRecruitingTemplate = getRecruitingTemplate;
/**
 * Get Offer Letter Template.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function getOfferLetterTemplate(parameters) {
    var params = {
        templateName: new core_1.FunctionImportParameter('templateName', 'Edm.String', parameters.templateName),
        templateType: new core_1.FunctionImportParameter('templateType', 'Edm.String', parameters.templateType)
    };
    return new core_1.FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'getOfferLetterTemplate', function (data) { return core_1.transformReturnValueForEdmType(data, function (val) { return core_1.edmToTs(val, 'Edm.String'); }); }, params);
}
exports.getOfferLetterTemplate = getOfferLetterTemplate;
/**
 * Refresh Interview Assessments.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function refreshInterviewAssessments(parameters) {
    var params = {
        jobReqIdParam: new core_1.FunctionImportParameter('jobReqIdParam', 'Edm.Int64', parameters.jobReqIdParam)
    };
    return new core_1.FunctionImportRequestBuilder('post', 'VALUE_IS_UNDEFINED', 'refreshInterviewAssessments', function (data) { return core_1.transformReturnValueForEdmType(data, function (val) { return core_1.edmToTs(val, 'Edm.String'); }); }, params);
}
exports.refreshInterviewAssessments = refreshInterviewAssessments;
/**
 * Send Email To Interviewers.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function sendEmailToInterviewers(parameters) {
    var params = {
        applicationId: new core_1.FunctionImportParameter('applicationId', 'Edm.Int64', parameters.applicationId),
        interviewers: new core_1.FunctionImportParameter('interviewers', 'Edm.String', parameters.interviewers),
        attachResume: new core_1.FunctionImportParameter('attachResume', 'Edm.Boolean', parameters.attachResume),
        attachCoverLetter: new core_1.FunctionImportParameter('attachCoverLetter', 'Edm.Boolean', parameters.attachCoverLetter),
        attachInterviewGuide: new core_1.FunctionImportParameter('attachInterviewGuide', 'Edm.Boolean', parameters.attachInterviewGuide),
        hiringManagerNote: new core_1.FunctionImportParameter('hiringManagerNote', 'Edm.String', parameters.hiringManagerNote)
    };
    return new core_1.FunctionImportRequestBuilder('post', 'VALUE_IS_UNDEFINED', 'sendEmailToInterviewers', function (data) { return core_1.transformReturnValueForEdmType(data, function (val) { return core_1.edmToTs(val, 'Edm.String'); }); }, params);
}
exports.sendEmailToInterviewers = sendEmailToInterviewers;
/**
 * Invite To Apply.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function inviteToApply(parameters) {
    var params = {
        jobReqId: new core_1.FunctionImportParameter('jobReqId', 'Edm.Int64', parameters.jobReqId),
        candidateIds: new core_1.FunctionImportParameter('candidateIds', 'Edm.String', parameters.candidateIds)
    };
    return new core_1.FunctionImportRequestBuilder('post', 'VALUE_IS_UNDEFINED', 'inviteToApply', function (data) { return core_1.transformReturnValueForComplexTypeList(data, InviteToApplyResponse_1.InviteToApplyResponse.build); }, params);
}
exports.inviteToApply = inviteToApply;
/**
 * Get Matched Guide Line Rule Info.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function getMatchedGuideLineRuleInfo(parameters) {
    var params = {
        programId: new core_1.FunctionImportParameter('programId', 'Edm.String', parameters.programId),
        userIds: new core_1.FunctionImportParameter('userIds', 'Edm.String', parameters.userIds),
        category: new core_1.FunctionImportParameter('category', 'Edm.String', parameters.category),
        level: new core_1.FunctionImportParameter('level', 'Edm.String', parameters.level)
    };
    return new core_1.FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'getMatchedGuideLineRuleInfo', function (data) { return core_1.transformReturnValueForComplexType(data, GetMatchedGuideLineRuleInfoResponse_1.GetMatchedGuideLineRuleInfoResponse.build); }, params);
}
exports.getMatchedGuideLineRuleInfo = getMatchedGuideLineRuleInfo;
/**
 * Is User Eligible For Spot Award Program.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function isUserEligibleForSpotAwardProgram(parameters) {
    var params = {
        programId: new core_1.FunctionImportParameter('programId', 'Edm.String', parameters.programId),
        userId: new core_1.FunctionImportParameter('userId', 'Edm.String', parameters.userId)
    };
    return new core_1.FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'isUserEligibleForSpotAwardProgram', function (data) { return core_1.transformReturnValueForComplexType(data, IsUserEligibleForSpotAwardProgramResponse_1.IsUserEligibleForSpotAwardProgramResponse.build); }, params);
}
exports.isUserEligibleForSpotAwardProgram = isUserEligibleForSpotAwardProgram;
/**
 * Get Eligible Spot Awards Program Codes.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function getEligibleSpotAwardsProgramCodes(parameters) {
    var params = {
        userId: new core_1.FunctionImportParameter('userId', 'Edm.String', parameters.userId)
    };
    return new core_1.FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'getEligibleSpotAwardsProgramCodes', function (data) { return core_1.transformReturnValueForComplexType(data, GetEligibleSpotAwardsProgramCodesResponse_1.GetEligibleSpotAwardsProgramCodesResponse.build); }, params);
}
exports.getEligibleSpotAwardsProgramCodes = getEligibleSpotAwardsProgramCodes;
/**
 * Initiate Onboarding For User.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function initiateOnboardingForUser(parameters) {
    var params = {};
    return new core_1.FunctionImportRequestBuilder('post', 'VALUE_IS_UNDEFINED', 'initiateOnboardingForUser', function (data) { return core_1.transformReturnValueForEdmType(data, function (val) { return core_1.edmToTs(val, 'Edm.String'); }); }, params);
}
exports.initiateOnboardingForUser = initiateOnboardingForUser;
/**
 * Get Ext Event Meta Data Definition.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function getExtEventMetaDataDefinition(parameters) {
    var params = {
        event: new core_1.FunctionImportParameter('event', 'Edm.String', parameters.event),
        topic: new core_1.FunctionImportParameter('topic', 'Edm.String', parameters.topic)
    };
    return new core_1.FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'getExtEventMetaDataDefinition', function (data) { return core_1.transformReturnValueForComplexType(data, SefExtEventMetaDataList_1.SefExtEventMetaDataList.build); }, params);
}
exports.getExtEventMetaDataDefinition = getExtEventMetaDataDefinition;
/**
 * Approve Successors.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function approveSuccessors(parameters) {
    var params = {
        nomineeIds: new core_1.FunctionImportParameter('nomineeIds', 'Edm.String', parameters.nomineeIds),
        comment: new core_1.FunctionImportParameter('comment', 'Edm.String', parameters.comment)
    };
    return new core_1.FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'approveSuccessors', function (data) { return core_1.transformReturnValueForComplexTypeList(data, NominationApprovalWorkflowResponse_1.NominationApprovalWorkflowResponse.build); }, params);
}
exports.approveSuccessors = approveSuccessors;
/**
 * Reject Successors.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function rejectSuccessors(parameters) {
    var params = {
        nomineeIds: new core_1.FunctionImportParameter('nomineeIds', 'Edm.String', parameters.nomineeIds),
        comment: new core_1.FunctionImportParameter('comment', 'Edm.String', parameters.comment)
    };
    return new core_1.FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'rejectSuccessors', function (data) { return core_1.transformReturnValueForComplexTypeList(data, NominationApprovalWorkflowResponse_1.NominationApprovalWorkflowResponse.build); }, params);
}
exports.rejectSuccessors = rejectSuccessors;
/**
 * Get Default Dev Goal Plan Template Id.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function getDefaultDevGoalPlanTemplateId(parameters) {
    var params = {};
    return new core_1.FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'getDefaultDevGoalPlanTemplateId', function (data) { return core_1.transformReturnValueForEdmType(data, function (val) { return core_1.edmToTs(val, 'Edm.Int64'); }); }, params);
}
exports.getDefaultDevGoalPlanTemplateId = getDefaultDevGoalPlanTemplateId;
/**
 * Upsert.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function upsert(parameters) {
    var params = {};
    return new core_1.FunctionImportRequestBuilder('post', 'VALUE_IS_UNDEFINED', 'upsert', function (data) { return core_1.transformReturnValueForEntityList(data, UpsertResult_1.UpsertResult); }, params);
}
exports.upsert = upsert;
/**
 * Logout.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function logout(parameters) {
    var params = {};
    return new core_1.FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'logout', function (data) { return core_1.transformReturnValueForUndefined(data, function (val) { return undefined; }); }, params);
}
exports.logout = logout;
/**
 * Is Valid Session.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function isValidSession(parameters) {
    var params = {};
    return new core_1.FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'isValidSession', function (data) { return core_1.transformReturnValueForEdmType(data, function (val) { return core_1.edmToTs(val, 'Edm.Boolean'); }); }, params);
}
exports.isValidSession = isValidSession;
/**
 * Check User Permission.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function checkUserPermission(parameters) {
    var params = {
        accessUserId: new core_1.FunctionImportParameter('accessUserId', 'Edm.String', parameters.accessUserId),
        permType: new core_1.FunctionImportParameter('permType', 'Edm.String', parameters.permType),
        permStringValue: new core_1.FunctionImportParameter('permStringValue', 'Edm.String', parameters.permStringValue),
        permLongValue: new core_1.FunctionImportParameter('permLongValue', 'Edm.Int64', parameters.permLongValue),
        targetUserId: new core_1.FunctionImportParameter('targetUserId', 'Edm.String', parameters.targetUserId),
        includeInactiveUser: new core_1.FunctionImportParameter('includeInactiveUser', 'Edm.Boolean', parameters.includeInactiveUser),
        includeTbhUser: new core_1.FunctionImportParameter('includeTBHUser', 'Edm.Boolean', parameters.includeTbhUser)
    };
    return new core_1.FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'checkUserPermission', function (data) { return core_1.transformReturnValueForEdmType(data, function (val) { return core_1.edmToTs(val, 'Edm.Boolean'); }); }, params);
}
exports.checkUserPermission = checkUserPermission;
/**
 * Update Static Group.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function updateStaticGroup(parameters) {
    var params = {
        groupId: new core_1.FunctionImportParameter('groupId', 'Edm.Int64', parameters.groupId),
        action: new core_1.FunctionImportParameter('action', 'Edm.String', parameters.action),
        userIds: new core_1.FunctionImportParameter('userIds', 'Edm.String', parameters.userIds)
    };
    return new core_1.FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'updateStaticGroup', function (data) { return core_1.transformReturnValueForEdmType(data, function (val) { return core_1.edmToTs(val, 'Edm.Int32'); }); }, params);
}
exports.updateStaticGroup = updateStaticGroup;
/**
 * Get Dynamic Groups By User.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function getDynamicGroupsByUser(parameters) {
    var params = {
        userId: new core_1.FunctionImportParameter('userId', 'Edm.String', parameters.userId),
        groupSubType: new core_1.FunctionImportParameter('groupSubType', 'Edm.String', parameters.groupSubType)
    };
    return new core_1.FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'getDynamicGroupsByUser', function (data) { return core_1.transformReturnValueForComplexTypeList(data, DynamicGroupBean_1.DynamicGroupBean.build); }, params);
}
exports.getDynamicGroupsByUser = getDynamicGroupsByUser;
/**
 * Get Users By Dynamic Group.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function getUsersByDynamicGroup(parameters) {
    var params = {
        groupId: new core_1.FunctionImportParameter('groupId', 'Edm.Int64', parameters.groupId),
        activeOnly: new core_1.FunctionImportParameter('activeOnly', 'Edm.Boolean', parameters.activeOnly)
    };
    return new core_1.FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'getUsersByDynamicGroup', function (data) { return core_1.transformReturnValueForComplexTypeList(data, DynamicGroupUserBean_1.DynamicGroupUserBean.build); }, params);
}
exports.getUsersByDynamicGroup = getUsersByDynamicGroup;
/**
 * Get User Roles Report.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function getUserRolesReport(parameters) {
    var params = {
        userIds: new core_1.FunctionImportParameter('userIds', 'Edm.String', parameters.userIds)
    };
    return new core_1.FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'getUserRolesReport', function (data) { return core_1.transformReturnValueForEdmType(data, function (val) { return core_1.edmToTs(val, 'Edm.String'); }); }, params);
}
exports.getUserRolesReport = getUserRolesReport;
/**
 * Get Permission Metadata.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function getPermissionMetadata(parameters) {
    var params = {
        locale: new core_1.FunctionImportParameter('locale', 'Edm.String', parameters.locale)
    };
    return new core_1.FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'getPermissionMetadata', function (data) { return core_1.transformReturnValueForEdmType(data, function (val) { return core_1.edmToTs(val, 'Edm.String'); }); }, params);
}
exports.getPermissionMetadata = getPermissionMetadata;
/**
 * Get Users Permissions.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function getUsersPermissions(parameters) {
    var params = {
        userIds: new core_1.FunctionImportParameter('userIds', 'Edm.String', parameters.userIds),
        locale: new core_1.FunctionImportParameter('locale', 'Edm.String', parameters.locale)
    };
    return new core_1.FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'getUsersPermissions', function (data) { return core_1.transformReturnValueForEdmType(data, function (val) { return core_1.edmToTs(val, 'Edm.String'); }); }, params);
}
exports.getUsersPermissions = getUsersPermissions;
/**
 * Get Roles Permissions.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function getRolesPermissions(parameters) {
    var params = {
        roleIds: new core_1.FunctionImportParameter('roleIds', 'Edm.String', parameters.roleIds),
        locale: new core_1.FunctionImportParameter('locale', 'Edm.String', parameters.locale)
    };
    return new core_1.FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'getRolesPermissions', function (data) { return core_1.transformReturnValueForEdmType(data, function (val) { return core_1.edmToTs(val, 'Edm.String'); }); }, params);
}
exports.getRolesPermissions = getRolesPermissions;
/**
 * Check User Permissions.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function checkUserPermissions(parameters) {
    var params = {};
    return new core_1.FunctionImportRequestBuilder('post', 'VALUE_IS_UNDEFINED', 'checkUserPermissions', function (data) { return core_1.transformReturnValueForEdmType(data, function (val) { return core_1.edmToTs(val, 'Edm.String'); }); }, params);
}
exports.checkUserPermissions = checkUserPermissions;
/**
 * Get User Name Format.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function getUserNameFormat(parameters) {
    var params = {
        locale: new core_1.FunctionImportParameter('locale', 'Edm.String', parameters.locale)
    };
    return new core_1.FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'getUserNameFormat', function (data) { return core_1.transformReturnValueForEdmType(data, function (val) { return core_1.edmToTs(val, 'Edm.String'); }); }, params);
}
exports.getUserNameFormat = getUserNameFormat;
/**
 * Get Password Policy.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function getPasswordPolicy(parameters) {
    var params = {
        locale: new core_1.FunctionImportParameter('locale', 'Edm.String', parameters.locale)
    };
    return new core_1.FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'getPasswordPolicy', function (data) { return core_1.transformReturnValueForEdmType(data, function (val) { return core_1.edmToTs(val, 'Edm.String'); }); }, params);
}
exports.getPasswordPolicy = getPasswordPolicy;
/**
 * Convert Assignment Id External.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function convertAssignmentIdExternal(parameters) {
    var params = {
        oldAssignmentIdExternal: new core_1.FunctionImportParameter('oldAssignmentIdExternal', 'Edm.String', parameters.oldAssignmentIdExternal),
        newAssignmentIdExternal: new core_1.FunctionImportParameter('newAssignmentIdExternal', 'Edm.String', parameters.newAssignmentIdExternal)
    };
    return new core_1.FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'convertAssignmentIdExternal', function (data) { return core_1.transformReturnValueForEdmType(data, function (val) { return core_1.edmToTs(val, 'Edm.String'); }); }, params);
}
exports.convertAssignmentIdExternal = convertAssignmentIdExternal;
/**
 * Get Document Categories.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function getDocumentCategories(parameters) {
    var params = {
        entityType: new core_1.FunctionImportParameter('entityType', 'Edm.String', parameters.entityType),
        excludeInactive: new core_1.FunctionImportParameter('excludeInactive', 'Edm.Boolean', parameters.excludeInactive),
        enforcePerm: new core_1.FunctionImportParameter('enforcePerm', 'Edm.Boolean', parameters.enforcePerm)
    };
    return new core_1.FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'getDocumentCategories', function (data) { return core_1.transformReturnValueForComplexType(data, DocumentCategories_1.DocumentCategories.build); }, params);
}
exports.getDocumentCategories = getDocumentCategories;
/**
 * Get People Profile Header.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function getPeopleProfileHeader(parameters) {
    var params = {
        userId: new core_1.FunctionImportParameter('userId', 'Edm.String', parameters.userId)
    };
    return new core_1.FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'getPeopleProfileHeader', function (data) { return core_1.transformReturnValueForComplexTypeList(data, PeopleProfileHeaderResponse_1.PeopleProfileHeaderResponse.build); }, params);
}
exports.getPeopleProfileHeader = getPeopleProfileHeader;
/**
 * Sign Form.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function signForm(parameters) {
    var params = {
        formDataId: new core_1.FunctionImportParameter('formDataId', 'Edm.Int64', parameters.formDataId),
        comment: new core_1.FunctionImportParameter('comment', 'Edm.String', parameters.comment)
    };
    return new core_1.FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'signForm', function (data) { return core_1.transformReturnValueForComplexType(data, CoRouteFormStatusBean_1.CoRouteFormStatusBean.build); }, params);
}
exports.signForm = signForm;
/**
 * Reject Form.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function rejectForm(parameters) {
    var params = {
        formDataId: new core_1.FunctionImportParameter('formDataId', 'Edm.Int64', parameters.formDataId),
        comment: new core_1.FunctionImportParameter('comment', 'Edm.String', parameters.comment)
    };
    return new core_1.FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'rejectForm', function (data) { return core_1.transformReturnValueForComplexType(data, CoRouteFormStatusBean_1.CoRouteFormStatusBean.build); }, params);
}
exports.rejectForm = rejectForm;
/**
 * Send To Next Step.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function sendToNextStep(parameters) {
    var params = {
        formDataId: new core_1.FunctionImportParameter('formDataId', 'Edm.Int64', parameters.formDataId),
        comment: new core_1.FunctionImportParameter('comment', 'Edm.String', parameters.comment),
        innerStepUserId: new core_1.FunctionImportParameter('innerStepUserId', 'Edm.String', parameters.innerStepUserId),
        nextIStepEntryUser: new core_1.FunctionImportParameter('nextIStepEntryUser', 'Edm.String', parameters.nextIStepEntryUser)
    };
    return new core_1.FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'sendToNextStep', function (data) { return core_1.transformReturnValueForComplexType(data, CoRouteFormStatusBean_1.CoRouteFormStatusBean.build); }, params);
}
exports.sendToNextStep = sendToNextStep;
/**
 * Send To Previous Step.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function sendToPreviousStep(parameters) {
    var params = {
        formDataId: new core_1.FunctionImportParameter('formDataId', 'Edm.Int64', parameters.formDataId),
        comment: new core_1.FunctionImportParameter('comment', 'Edm.String', parameters.comment),
        previousIStepEntryUser: new core_1.FunctionImportParameter('previousIStepEntryUser', 'Edm.String', parameters.previousIStepEntryUser)
    };
    return new core_1.FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'sendToPreviousStep', function (data) { return core_1.transformReturnValueForComplexType(data, CoRouteFormStatusBean_1.CoRouteFormStatusBean.build); }, params);
}
exports.sendToPreviousStep = sendToPreviousStep;
/**
 * Create Performance Review Form.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function createPerformanceReviewForm(parameters) {
    var params = {
        formSubjectId: new core_1.FunctionImportParameter('formSubjectId', 'Edm.String', parameters.formSubjectId),
        formTemplateId: new core_1.FunctionImportParameter('formTemplateId', 'Edm.Int64', parameters.formTemplateId),
        sendEmail: new core_1.FunctionImportParameter('sendEmail', 'Edm.Boolean', parameters.sendEmail),
        enRouteCopy: new core_1.FunctionImportParameter('enRouteCopy', 'Edm.Boolean', parameters.enRouteCopy)
    };
    return new core_1.FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'createPerformanceReviewForm', function (data) { return core_1.transformReturnValueForComplexType(data, CreatePerformanceReviewFormResponse_1.CreatePerformanceReviewFormResponse.build); }, params);
}
exports.createPerformanceReviewForm = createPerformanceReviewForm;
/**
 * Complete 360.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function complete360(parameters) {
    var params = {
        formDataId: new core_1.FunctionImportParameter('formDataId', 'Edm.Int64', parameters.formDataId),
        comment: new core_1.FunctionImportParameter('comment', 'Edm.String', parameters.comment)
    };
    return new core_1.FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'complete360', function (data) { return core_1.transformReturnValueForComplexType(data, CoRouteFormStatusBean_1.CoRouteFormStatusBean.build); }, params);
}
exports.complete360 = complete360;
/**
 * Get Position Object Data.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function getPositionObjectData(parameters) {
    var params = {
        positionId: new core_1.FunctionImportParameter('positionId', 'Edm.Int64', parameters.positionId),
        userId: new core_1.FunctionImportParameter('userId', 'Edm.String', parameters.userId)
    };
    return new core_1.FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'getPositionObjectData', function (data) { return core_1.transformReturnValueForComplexType(data, RuleFieldMappingBeanList_1.RuleFieldMappingBeanList.build); }, params);
}
exports.getPositionObjectData = getPositionObjectData;
/**
 * Get New Employment Enabled For Contingent Workforce.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function getNewEmploymentEnabledForContingentWorkforce(parameters) {
    var params = {};
    return new core_1.FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'getNewEmploymentEnabledForContingentWorkforce', function (data) { return core_1.transformReturnValueForEdmType(data, function (val) { return core_1.edmToTs(val, 'Edm.Boolean'); }); }, params);
}
exports.getNewEmploymentEnabledForContingentWorkforce = getNewEmploymentEnabledForContingentWorkforce;
/**
 * Get Expanded Dynamic Group By Name.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function getExpandedDynamicGroupByName(parameters) {
    var params = {
        groupName: new core_1.FunctionImportParameter('groupName', 'Edm.String', parameters.groupName)
    };
    return new core_1.FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'getExpandedDynamicGroupByName', function (data) { return core_1.transformReturnValueForEntity(data, DynamicGroup_1.DynamicGroup); }, params);
}
exports.getExpandedDynamicGroupByName = getExpandedDynamicGroupByName;
/**
 * Get Expanded Dynamic Group By Name And Sub Type.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function getExpandedDynamicGroupByNameAndSubType(parameters) {
    var params = {
        groupName: new core_1.FunctionImportParameter('groupName', 'Edm.String', parameters.groupName),
        groupType: new core_1.FunctionImportParameter('groupType', 'Edm.String', parameters.groupType)
    };
    return new core_1.FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'getExpandedDynamicGroupByNameAndSubType', function (data) { return core_1.transformReturnValueForEntity(data, DynamicGroup_1.DynamicGroup); }, params);
}
exports.getExpandedDynamicGroupByNameAndSubType = getExpandedDynamicGroupByNameAndSubType;
/**
 * Get Expanded Dynamic Group By Id.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function getExpandedDynamicGroupById(parameters) {
    var params = {
        groupId: new core_1.FunctionImportParameter('groupId', 'Edm.Int64', parameters.groupId)
    };
    return new core_1.FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'getExpandedDynamicGroupById', function (data) { return core_1.transformReturnValueForEntity(data, DynamicGroup_1.DynamicGroup); }, params);
}
exports.getExpandedDynamicGroupById = getExpandedDynamicGroupById;
/**
 * Get User Roles By User Id.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function getUserRolesByUserId(parameters) {
    var params = {
        userId: new core_1.FunctionImportParameter('userId', 'Edm.String', parameters.userId)
    };
    return new core_1.FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'getUserRolesByUserId', function (data) { return core_1.transformReturnValueForEntityList(data, RbpRole_1.RbpRole); }, params);
}
exports.getUserRolesByUserId = getUserRolesByUserId;
exports.functionImports = {
    refreshMetadata: refreshMetadata,
    getBizXAction: getBizXAction,
    generateNextPersonId: generateNextPersonId,
    approveWfRequest: approveWfRequest,
    commentWfRequest: commentWfRequest,
    rejectWfRequest: rejectWfRequest,
    sendbackWfRequest: sendbackWfRequest,
    withdrawWfRequest: withdrawWfRequest,
    getWorkflowPendingData: getWorkflowPendingData,
    getDefaultGoalPlanTemplateId: getDefaultGoalPlanTemplateId,
    fwdCandidateToColleague: fwdCandidateToColleague,
    setSmsNotificationPreference: setSmsNotificationPreference,
    reassignJobReq: reassignJobReq,
    initiateOnboarding: initiateOnboarding,
    sendJobReqToPreviousStep: sendJobReqToPreviousStep,
    sendJobReqToNextStep: sendJobReqToNextStep,
    sendJobReqFormToUser: sendJobReqFormToUser,
    approveOrDeclineJobReqForm: approveOrDeclineJobReqForm,
    addModifierToJobReq: addModifierToJobReq,
    approveOffer: approveOffer,
    declineOffer: declineOffer,
    sendOfferForApproval: sendOfferForApproval,
    sendMailOfferLetter: sendMailOfferLetter,
    getRecruitingTemplate: getRecruitingTemplate,
    getOfferLetterTemplate: getOfferLetterTemplate,
    refreshInterviewAssessments: refreshInterviewAssessments,
    sendEmailToInterviewers: sendEmailToInterviewers,
    inviteToApply: inviteToApply,
    getMatchedGuideLineRuleInfo: getMatchedGuideLineRuleInfo,
    isUserEligibleForSpotAwardProgram: isUserEligibleForSpotAwardProgram,
    getEligibleSpotAwardsProgramCodes: getEligibleSpotAwardsProgramCodes,
    initiateOnboardingForUser: initiateOnboardingForUser,
    getExtEventMetaDataDefinition: getExtEventMetaDataDefinition,
    approveSuccessors: approveSuccessors,
    rejectSuccessors: rejectSuccessors,
    getDefaultDevGoalPlanTemplateId: getDefaultDevGoalPlanTemplateId,
    upsert: upsert,
    logout: logout,
    isValidSession: isValidSession,
    checkUserPermission: checkUserPermission,
    updateStaticGroup: updateStaticGroup,
    getDynamicGroupsByUser: getDynamicGroupsByUser,
    getUsersByDynamicGroup: getUsersByDynamicGroup,
    getUserRolesReport: getUserRolesReport,
    getPermissionMetadata: getPermissionMetadata,
    getUsersPermissions: getUsersPermissions,
    getRolesPermissions: getRolesPermissions,
    checkUserPermissions: checkUserPermissions,
    getUserNameFormat: getUserNameFormat,
    getPasswordPolicy: getPasswordPolicy,
    convertAssignmentIdExternal: convertAssignmentIdExternal,
    getDocumentCategories: getDocumentCategories,
    getPeopleProfileHeader: getPeopleProfileHeader,
    signForm: signForm,
    rejectForm: rejectForm,
    sendToNextStep: sendToNextStep,
    sendToPreviousStep: sendToPreviousStep,
    createPerformanceReviewForm: createPerformanceReviewForm,
    complete360: complete360,
    getPositionObjectData: getPositionObjectData,
    getNewEmploymentEnabledForContingentWorkforce: getNewEmploymentEnabledForContingentWorkforce,
    getExpandedDynamicGroupByName: getExpandedDynamicGroupByName,
    getExpandedDynamicGroupByNameAndSubType: getExpandedDynamicGroupByNameAndSubType,
    getExpandedDynamicGroupById: getExpandedDynamicGroupById,
    getUserRolesByUserId: getUserRolesByUserId
};
//# sourceMappingURL=function-imports.js.map