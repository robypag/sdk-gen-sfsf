"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var index_1 = require("./index");
/**
 * Batch builder for operations supported on the Sfo Data Service.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
function batch() {
    var requests = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        requests[_i] = arguments[_i];
    }
    return new core_1.ODataBatchRequestBuilder(exports.defaultSfoDataServicePath, requests, map);
}
exports.batch = batch;
/**
 * Change set constructor consists of write operations supported on the Sfo Data Service.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
function changeset() {
    var requests = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        requests[_i] = arguments[_i];
    }
    return new core_1.ODataBatchChangeSet(requests);
}
exports.changeset = changeset;
exports.defaultSfoDataServicePath = '/sap/opu/odata/sap/SFOData';
var map = { 'Entity': index_1.Entity_1, 'GoalComment_1': index_1.GoalComment_1, 'PaymentInformationDetailV3MWI': index_1.PaymentInformationDetailV3Mwi, 'OnboardingNewHireActivitiesStep': index_1.OnboardingNewHireActivitiesStep, 'JobRequisitionPostingFieldControls': index_1.JobRequisitionPostingFieldControls, 'JobRequisitionLocale': index_1.JobRequisitionLocale, 'FormRatingScaleValue': index_1.FormRatingScaleValue, 'TrendData_SysOverallCustom1': index_1.TrendData_SysOverallCustom1, 'EmpEmploymentTermination': index_1.EmpEmploymentTermination, 'InnerMessage': index_1.InnerMessage, 'JobApplicationStatusLabel': index_1.JobApplicationStatusLabel, 'SelfReportSkillMapping': index_1.SelfReportSkillMapping, 'SpotAwardProgramAdvancedSettings': index_1.SpotAwardProgramAdvancedSettings, 'TodoAction': index_1.TodoAction, 'SpotAward': index_1.SpotAward, 'UpsertResult': index_1.UpsertResult, 'InterviewOverallAssessment': index_1.InterviewOverallAssessment, 'CompanyProvisioner': index_1.CompanyProvisioner, 'SimpleDevGoal': index_1.SimpleDevGoal, 'ExternalLearnerPhoneInfo': index_1.ExternalLearnerPhoneInfo, 'EmployeeProfileBlockLink': index_1.EmployeeProfileBlockLink, 'GoalDetail': index_1.GoalDetail, 'LegalEntityARG': index_1.LegalEntityArg, 'EmployeeProfileSectionConfig': index_1.EmployeeProfileSectionConfig, 'PayScalePayComponent': index_1.PayScalePayComponent, 'Background_InsideWorkExperience': index_1.Background_InsideWorkExperience, 'CalibrationSessionSubject': index_1.CalibrationSessionSubject, 'BadgeTemplates': index_1.BadgeTemplates, 'PicklistLabel': index_1.PicklistLabel, 'EmployeeProfileBlockContent': index_1.EmployeeProfileBlockContent, 'TimeZone': index_1.TimeZone, 'TrendData_SysOverallPotential': index_1.TrendData_SysOverallPotential, 'GoalEnum': index_1.GoalEnum, 'OneTimeDeduction': index_1.OneTimeDeduction, 'PaymentInformationDetailV3JPN': index_1.PaymentInformationDetailV3Jpn, 'PhysicalReqContent': index_1.PhysicalReqContent, 'TimeAccountType': index_1.TimeAccountType, 'Todo': index_1.Todo, 'DevGoal_2005': index_1.DevGoal_2005, 'PerGlobalInfoCOL': index_1.PerGlobalInfoCol, 'FOWfConfigStepApprover': index_1.FoWfConfigStepApprover, 'ExtEmailInfo': index_1.ExtEmailInfo, 'PerGlobalInfoUSA': index_1.PerGlobalInfoUsa, 'PayrollConfigurationCategory': index_1.PayrollConfigurationCategory, 'ExternalLearnerPersonalInfo': index_1.ExternalLearnerPersonalInfo, 'PerGlobalInfoESP': index_1.PerGlobalInfoEsp, 'JobRequisitionPosting': index_1.JobRequisitionPosting, 'CompetencyContent': index_1.CompetencyContent, 'Background_Fsaelection': index_1.Background_Fsaelection, 'CandidateProfileExtension': index_1.CandidateProfileExtension, 'ExternalTimeData': index_1.ExternalTimeData, 'EmployeeTimeMEX': index_1.EmployeeTimeMex, 'CustomNav': index_1.CustomNav, 'PerEmergencyContacts': index_1.PerEmergencyContacts, 'RecurringDeduction': index_1.RecurringDeduction, 'FormRouteStep': index_1.FormRouteStep, 'JobAppTemplate_Candidate_Detail_Global': index_1.JobAppTemplate_Candidate_Detail_Global, 'EmpTimeAccountBalance': index_1.EmpTimeAccountBalance, 'PickListV2': index_1.PickListV2, 'JobRequisitionAssessment': index_1.JobRequisitionAssessment, 'FOJobClassLocalCAN': index_1.FoJobClassLocalCan, 'JobClassificationITA': index_1.JobClassificationIta, 'JDTemplateFamilyMapping': index_1.JdTemplateFamilyMapping, 'CandidateTags': index_1.CandidateTags, 'SuccessStoreContentBlob': index_1.SuccessStoreContentBlob, 'DGField': index_1.DgField, 'PaymentInformationDetailV3NZL': index_1.PaymentInformationDetailV3Nzl, 'FormCompetencySection': index_1.FormCompetencySection, 'ThemeConfig': index_1.ThemeConfig, 'EmpCompensation': index_1.EmpCompensation, 'Holiday': index_1.Holiday, 'SkillEntity': index_1.SkillEntity, 'WorkflowAllowedActionList': index_1.WorkflowAllowedActionList, 'JobAnalyzerReportingData': index_1.JobAnalyzerReportingData, 'EmployeeTime': index_1.EmployeeTime, 'EmpCostDistributionItem': index_1.EmpCostDistributionItem, 'FOLegalEntityLocalDEFLT': index_1.FoLegalEntityLocalDeflt, 'TimeAccountPostingRule': index_1.TimeAccountPostingRule, 'OnboardingEquipmentTypeValue': index_1.OnboardingEquipmentTypeValue, 'MDFBlockConfig': index_1.MdfBlockConfig, 'Background_PreferredNextMove': index_1.Background_PreferredNextMove, 'RBPBasicPermission': index_1.RbpBasicPermission, 'Attachment': index_1.Attachment, 'EPProfileView': index_1.EpProfileView, 'FormRouteMap': index_1.FormRouteMap, 'PaymentInformationDetailV3ISR': index_1.PaymentInformationDetailV3Isr, 'CandidateBackground_Education': index_1.CandidateBackground_Education, 'EmployeeTimeGroupItem': index_1.EmployeeTimeGroupItem, 'Achievement': index_1.Achievement, 'Form360ParticipantSection': index_1.Form360ParticipantSection, 'InformationDataSubjectConfiguration': index_1.InformationDataSubjectConfiguration, 'EmpPayCompNonRecurring': index_1.EmpPayCompNonRecurring, 'Form360Participant': index_1.Form360Participant, 'Background_Benefitselection': index_1.Background_Benefitselection, 'EmploymentConditionContent': index_1.EmploymentConditionContent, 'Candidate': index_1.Candidate, 'CandidateBackground_OutsideWorkExperience': index_1.CandidateBackground_OutsideWorkExperience, 'JobApplicationOnboardingData': index_1.JobApplicationOnboardingData, 'FormSignatureSection': index_1.FormSignatureSection, 'FOJobClassLocalITA': index_1.FoJobClassLocalIta, 'PayPeriod': index_1.PayPeriod, 'FOPayRange': index_1.FoPayRange, 'JobProfile': index_1.JobProfile, 'JobApplicationBackgroundCheckRequest': index_1.JobApplicationBackgroundCheckRequest, 'RoleTalentPoolMappingEntity': index_1.RoleTalentPoolMappingEntity, 'JobApplicationQuestionResponse': index_1.JobApplicationQuestionResponse, 'JobApplicationStatusAuditTrail': index_1.JobApplicationStatusAuditTrail, 'PaymentInformationDetailV3IRQ': index_1.PaymentInformationDetailV3Irq, 'FOCostCenter': index_1.FoCostCenter, 'PicklistOption': index_1.PicklistOption, 'LocalizedData': index_1.LocalizedData, 'PerPerson': index_1.PerPerson, 'FormCompetency': index_1.FormCompetency, 'UserRewardInfo': index_1.UserRewardInfo, 'ContinuousFeedbackRequest': index_1.ContinuousFeedbackRequest, 'EmployeeProfilePageConfig': index_1.EmployeeProfilePageConfig, 'TemporaryTimeInformation': index_1.TemporaryTimeInformation, 'DGFilter': index_1.DgFilter, 'TimeTypeProfile': index_1.TimeTypeProfile, 'DevGoalPermission_2005': index_1.DevGoalPermission_2005, 'WfRequestStep': index_1.WfRequestStep, 'PayScaleLevel': index_1.PayScaleLevel, 'TimeCollector': index_1.TimeCollector, 'HireDateChange': index_1.HireDateChange, 'FOPayComponentGroup': index_1.FoPayComponentGroup, 'PhysicalReqEntity': index_1.PhysicalReqEntity, 'Background_FuncExperience': index_1.Background_FuncExperience, 'InterviewQuestionEntity': index_1.InterviewQuestionEntity, 'FOCorporateAddressDEFLT': index_1.FoCorporateAddressDeflt, 'BehaviorMappingEntity': index_1.BehaviorMappingEntity, 'WfRequestUIData': index_1.WfRequestUiData, 'FormBehaviorRatingComment': index_1.FormBehaviorRatingComment, 'CandidateBackground_Mobility': index_1.CandidateBackground_Mobility, 'PaymentInformationDetailV3ZWE': index_1.PaymentInformationDetailV3Zwe, 'EmployeeProfileHeaderConfig': index_1.EmployeeProfileHeaderConfig, 'Background_Certificates': index_1.Background_Certificates, 'CandidateProfileConversionInfo': index_1.CandidateProfileConversionInfo, 'PaymentInformationDetailV3ITA': index_1.PaymentInformationDetailV3Ita, 'FamilyEntity': index_1.FamilyEntity, 'EmpGlobalAssignment': index_1.EmpGlobalAssignment, 'EmployeeDataReplicationConfirmation': index_1.EmployeeDataReplicationConfirmation, 'PersonKey': index_1.PersonKey, 'EmployeeTimePOL': index_1.EmployeeTimePol, 'RCMAdminReassignOfferApprover': index_1.RcmAdminReassignOfferApprover, 'ContinuousPerformanceUserPermission': index_1.ContinuousPerformanceUserPermission, 'FOJobCode': index_1.FoJobCode, 'WorkSchedule': index_1.WorkSchedule, 'Background_Googledocs': index_1.Background_Googledocs, 'PaymentInformationDetailV3CHL': index_1.PaymentInformationDetailV3Chl, 'LegalEntityESP': index_1.LegalEntityEsp, 'OnboardingGoal': index_1.OnboardingGoal, 'LegalEntityUSA': index_1.LegalEntityUsa, 'PerGlobalInfoFRA': index_1.PerGlobalInfoFra, 'Background_SysScoreCardDevelopmentObjectivesPortlet': index_1.Background_SysScoreCardDevelopmentObjectivesPortlet, 'UserAccount': index_1.UserAccount, 'PayrollSystemConfiguration': index_1.PayrollSystemConfiguration, 'RoleSkillMappingEntity': index_1.RoleSkillMappingEntity, 'EPProfileUserInfoPortlet': index_1.EpProfileUserInfoPortlet, 'DevGoalAchievementsList': index_1.DevGoalAchievementsList, 'FormObjectiveSection': index_1.FormObjectiveSection, 'PaymentInformationDetailV3GBR': index_1.PaymentInformationDetailV3Gbr, 'EmployeeProfileSubSectionConfig': index_1.EmployeeProfileSubSectionConfig, 'FOLegalEntityLocalDEU': index_1.FoLegalEntityLocalDeu, 'HolidayAssignment': index_1.HolidayAssignment, 'CustomPayTypeAssignment': index_1.CustomPayTypeAssignment, 'JobReqFwdCandidates': index_1.JobReqFwdCandidates, 'FormReviewerInfoSection': index_1.FormReviewerInfoSection, 'DGExpression': index_1.DgExpression, 'WorkOrder': index_1.WorkOrder, 'FormIntroductionSection': index_1.FormIntroductionSection, 'PayScaleArea': index_1.PayScaleArea, 'SkillContent': index_1.SkillContent, 'FormObjective': index_1.FormObjective, 'FormObjectiveOtherDetails': index_1.FormObjectiveOtherDetails, 'Form360ParticipantColumn': index_1.Form360ParticipantColumn, 'JobApplicationSnapshot_Languages': index_1.JobApplicationSnapshot_Languages, 'EmpJobRelationships': index_1.EmpJobRelationships, 'AlertMessage': index_1.AlertMessage, 'FormPMReviewContentDetail': index_1.FormPmReviewContentDetail, 'OnboardingGoalActivity': index_1.OnboardingGoalActivity, 'ShiftClassification': index_1.ShiftClassification, 'DevLearning_4201': index_1.DevLearning_4201, 'PaymentMethodV3': index_1.PaymentMethodV3, 'AssignTeamGoal': index_1.AssignTeamGoal, 'Position': index_1.Position, 'FOLocationGroup': index_1.FoLocationGroup, 'FOJobClassLocalFRA': index_1.FoJobClassLocalFra, 'JobApplicationAssessmentReport': index_1.JobApplicationAssessmentReport, 'TodoCategory': index_1.TodoCategory, 'HolidayCalendar': index_1.HolidayCalendar, 'CurrencyExchangeRate': index_1.CurrencyExchangeRate, 'SpotAwardCategory': index_1.SpotAwardCategory, 'PerGlobalInfoNLD': index_1.PerGlobalInfoNld, 'GoalAchievements': index_1.GoalAchievements, 'Form360SummaryViewSection': index_1.Form360SummaryViewSection, 'PerAddressDEFLT': index_1.PerAddressDeflt, 'FormObjectiveOtherDetailsItemValueCell': index_1.FormObjectiveOtherDetailsItemValueCell, 'PerGlobalInfoARE': index_1.PerGlobalInfoAre, 'Form360ParticipantConfig': index_1.Form360ParticipantConfig, 'AdvancesEligibility': index_1.AdvancesEligibility, 'RelevantIndustryContent': index_1.RelevantIndustryContent, 'PersonEmpTerminationInfo': index_1.PersonEmpTerminationInfo, 'FormRouteSubStep': index_1.FormRouteSubStep, 'ActivityStatus': index_1.ActivityStatus, 'Background_VarPayEmpHistData': index_1.Background_VarPayEmpHistData, 'PerPersonRelationship': index_1.PerPersonRelationship, 'FormItemConfiguration': index_1.FormItemConfiguration, 'DeductionScreenId': index_1.DeductionScreenId, 'RcmCompetency': index_1.RcmCompetency, 'InitiativeAlignmentBean': index_1.InitiativeAlignmentBean, 'JobRequisition': index_1.JobRequisition, 'CandidateBackground_InsideWorkExperience': index_1.CandidateBackground_InsideWorkExperience, 'TalentPool': index_1.TalentPool, 'WorkScheduleDayModel': index_1.WorkScheduleDayModel, 'JobApplicationInterview': index_1.JobApplicationInterview, 'Background_Documents': index_1.Background_Documents, 'FormContent': index_1.FormContent, 'ExternalUser': index_1.ExternalUser, 'EMEventPayload': index_1.EmEventPayload, 'PaymentInformationDetailV3MOZ': index_1.PaymentInformationDetailV3Moz, 'FOPayComponent': index_1.FoPayComponent, 'PaymentInformationV3': index_1.PaymentInformationV3, 'EmployeeProfileFieldConfig': index_1.EmployeeProfileFieldConfig, 'OfferLetter': index_1.OfferLetter, 'EmployeeTimeValuationResult': index_1.EmployeeTimeValuationResult, 'SimpleGoal': index_1.SimpleGoal, 'FormJobRole': index_1.FormJobRole, 'JobApplicationAssessmentOrder': index_1.JobApplicationAssessmentOrder, 'JobClassificationUSA': index_1.JobClassificationUsa, 'OnboardingEquipment': index_1.OnboardingEquipment, 'JobReqScreeningQuestion': index_1.JobReqScreeningQuestion, 'Background_Awards': index_1.Background_Awards, 'AutoDelegateConfig': index_1.AutoDelegateConfig, 'OnboardingCandidateInfo': index_1.OnboardingCandidateInfo, 'SecondaryAssignments': index_1.SecondaryAssignments, 'ThemeInfo': index_1.ThemeInfo, 'JobRequisitionGroupOperator': index_1.JobRequisitionGroupOperator, 'DevGoalDetail': index_1.DevGoalDetail, 'FoTranslation': index_1.FoTranslation, 'OnboardingEquipmentActivity': index_1.OnboardingEquipmentActivity, 'CurrencyConversion': index_1.CurrencyConversion, 'JobReqFOLocation': index_1.JobReqFoLocation, 'RoleCompetencyBehaviorMappingEntity': index_1.RoleCompetencyBehaviorMappingEntity, 'FormReviewFeedback': index_1.FormReviewFeedback, 'JobApplicationBackgroundCheckResult': index_1.JobApplicationBackgroundCheckResult, 'SpotAwardBudget': index_1.SpotAwardBudget, 'FOJobClassLocalUSA': index_1.FoJobClassLocalUsa, 'WorkScheduleDayModelAssignment': index_1.WorkScheduleDayModelAssignment, 'JobApplicationAudit': index_1.JobApplicationAudit, 'PerGlobalInfoMEX': index_1.PerGlobalInfoMex, 'GoalPlanTemplate': index_1.GoalPlanTemplate, 'FormFolder': index_1.FormFolder, 'WorkScheduleDay': index_1.WorkScheduleDay, 'MyPendingWorkflow': index_1.MyPendingWorkflow, 'TimeAccount': index_1.TimeAccount, 'EmployeeTimeCOL': index_1.EmployeeTimeCol, 'EducationDegreeEntity': index_1.EducationDegreeEntity, 'RecurringDeductionItem': index_1.RecurringDeductionItem, 'EmployeeTimeESP': index_1.EmployeeTimeEsp, 'Background_OutsideWorkExperience': index_1.Background_OutsideWorkExperience, 'AchievementDevGoalDetail': index_1.AchievementDevGoalDetail, 'SpotAwardGuidelinesRule': index_1.SpotAwardGuidelinesRule, 'MDFLocalizedValue': index_1.MdfLocalizedValue, 'Form360SummaryViewCategory': index_1.Form360SummaryViewCategory, 'EPProfilePortlet': index_1.EpProfilePortlet, 'FOLocation': index_1.FoLocation, 'FOWfConfig': index_1.FoWfConfig, 'Background_Courses': index_1.Background_Courses, 'DGPeoplePool': index_1.DgPeoplePool, 'RBPRule': index_1.RbpRule, 'DevGoalTask_2005': index_1.DevGoalTask_2005, 'SAPSystemConfiguration': index_1.SapSystemConfiguration, 'JobResponsibilityContent': index_1.JobResponsibilityContent, 'FormTemplate': index_1.FormTemplate, 'CompetencyType': index_1.CompetencyType, 'JobOfferApprover': index_1.JobOfferApprover, 'BudgetGroup': index_1.BudgetGroup, 'RatedSkillMapping': index_1.RatedSkillMapping, 'UserPermissions': index_1.UserPermissions, 'JobApplicationFieldControls': index_1.JobApplicationFieldControls, 'LegalEntityRUS': index_1.LegalEntityRus, 'JobClassificationFRA': index_1.JobClassificationFra, 'PaymentInformationDetailV3ECU': index_1.PaymentInformationDetailV3Ecu, 'PerGlobalInfoZAF': index_1.PerGlobalInfoZaf, 'PaymentMethodAssignmentV3': index_1.PaymentMethodAssignmentV3, 'FormAuditTrail': index_1.FormAuditTrail, 'PaymentInformationDetailV3VEN': index_1.PaymentInformationDetailV3Ven, 'DevGoalEnum': index_1.DevGoalEnum, 'SpotAwardProgram': index_1.SpotAwardProgram, 'JobReqTemplate_Standard_Job_Requisition': index_1.JobReqTemplate_Standard_Job_Requisition, 'PerGlobalInfoBRA': index_1.PerGlobalInfoBra, 'OnboardingMeetingActivity': index_1.OnboardingMeetingActivity, 'EmployeeDataReplicationNotification': index_1.EmployeeDataReplicationNotification, 'FOJobClassLocalDEFLT': index_1.FoJobClassLocalDeflt, 'Background_Education': index_1.Background_Education, 'cust_PickListAMapping': index_1.Cust_PickListAMapping, 'ThemeTemplate': index_1.ThemeTemplate, 'ExtAddressInfo': index_1.ExtAddressInfo, 'CalibrationTemplate': index_1.CalibrationTemplate, 'FormCompetencyBehavior': index_1.FormCompetencyBehavior, 'FOLegalEntityLocalFRA': index_1.FoLegalEntityLocalFra, 'EmpJob': index_1.EmpJob, 'Activity': index_1.Activity, 'InterviewIndividualAssessment': index_1.InterviewIndividualAssessment, 'JobOfferTemplate_Offer_Detail_Template': index_1.JobOfferTemplate_Offer_Detail_Template, 'FOBusinessUnit': index_1.FoBusinessUnit, 'PickListValueV2': index_1.PickListValueV2, 'JobClassificationAUS': index_1.JobClassificationAus, 'GoalAchievementsList': index_1.GoalAchievementsList, 'JobOffer': index_1.JobOffer, 'HrisEmergencyContactAddressDEFLT': index_1.HrisEmergencyContactAddressDeflt, 'FOEventReason': index_1.FoEventReason, 'Currency': index_1.Currency, 'FormJobDescSection': index_1.FormJobDescSection, 'TimeAccountDetail': index_1.TimeAccountDetail, 'VendorInfo': index_1.VendorInfo, 'TalentGraphicOption': index_1.TalentGraphicOption, 'DevGoalAchievements': index_1.DevGoalAchievements, 'FormObjectiveOtherDetailsItemCol': index_1.FormObjectiveOtherDetailsItemCol, 'AchievementGoalDetail': index_1.AchievementGoalDetail, 'EmployeeDataReplicationConfirmationErrorMessage': index_1.EmployeeDataReplicationConfirmationErrorMessage, 'PaymentInformationDetailV3BRA': index_1.PaymentInformationDetailV3Bra, 'EPPublicProfile': index_1.EpPublicProfile, 'JobRequisitionOperator': index_1.JobRequisitionOperator, 'FOJobClassLocalBRA': index_1.FoJobClassLocalBra, 'EducationMajorEntity': index_1.EducationMajorEntity, 'PerPhone': index_1.PerPhone, 'JobOfferFieldControls': index_1.JobOfferFieldControls, 'EmpPayCompRecurring': index_1.EmpPayCompRecurring, 'FormPerfPotSummarySection': index_1.FormPerfPotSummarySection, 'EmployeeTimeDEU': index_1.EmployeeTimeDeu, 'PaymentInformationDetailV3MEX': index_1.PaymentInformationDetailV3Mex, 'EducationMajorContent': index_1.EducationMajorContent, 'DGFieldValue': index_1.DgFieldValue, 'Form360ReviewContentDetail': index_1.Form360ReviewContentDetail, 'Background_Matrix1placement': index_1.Background_Matrix1Placement, 'ActivityFeedback': index_1.ActivityFeedback, 'GoalWeight': index_1.GoalWeight, 'EmpWorkPermit': index_1.EmpWorkPermit, 'FormHeader': index_1.FormHeader, 'FormCustomElementListValue': index_1.FormCustomElementListValue, 'FormCustomSection': index_1.FormCustomSection, 'Bank': index_1.Bank, 'Background_Languages': index_1.Background_Languages, 'EmployeeTimeSheetEntry': index_1.EmployeeTimeSheetEntry, 'InterviewQuestionContent': index_1.InterviewQuestionContent, 'FormSignature': index_1.FormSignature, 'CompetencyEntity': index_1.CompetencyEntity, 'JobApplicationInterviewFieldControls': index_1.JobApplicationInterviewFieldControls, 'EPCustomBackgroundPortlet': index_1.EpCustomBackgroundPortlet, 'FeedbackFlag': index_1.FeedbackFlag, 'FormUserRatingComment': index_1.FormUserRatingComment, 'PersonTypeUsage': index_1.PersonTypeUsage, 'RBPRole': index_1.RbpRole, 'FODivision': index_1.FoDivision, 'CertificationEntity': index_1.CertificationEntity, 'WfRequestComments': index_1.WfRequestComments, 'EmployeePayrollRunResults': index_1.EmployeePayrollRunResults, 'CustomPayType': index_1.CustomPayType, 'FOCompany': index_1.FoCompany, 'EmployeeDataReplicationElement': index_1.EmployeeDataReplicationElement, 'PaymentInformationDetailV3ZAF': index_1.PaymentInformationDetailV3Zaf, 'LegalEntityDEU': index_1.LegalEntityDeu, 'JobApplicationAssessmentReportDetail': index_1.JobApplicationAssessmentReportDetail, 'Form360SummaryViewRater': index_1.Form360SummaryViewRater, 'EmpEmployment': index_1.EmpEmployment, 'CompetencyRating': index_1.CompetencyRating, 'JobApplicationStatus': index_1.JobApplicationStatus, 'InlineResult': index_1.InlineResult, 'PayScaleGroup': index_1.PayScaleGroup, 'ExtPersonalInfo': index_1.ExtPersonalInfo, 'FODepartment': index_1.FoDepartment, 'FormSummarySection': index_1.FormSummarySection, 'FormRaterListSection': index_1.FormRaterListSection, 'Background_SpecialAssign': index_1.Background_SpecialAssign, 'JobApplicationOnboardingStatus': index_1.JobApplicationOnboardingStatus, 'SpotAwardRedemption': index_1.SpotAwardRedemption, 'DynamicGroup': index_1.DynamicGroup, 'PerGlobalInfoAUS': index_1.PerGlobalInfoAus, 'SecondaryAssignmentsItem': index_1.SecondaryAssignmentsItem, 'JobRequisitionFieldControls': index_1.JobRequisitionFieldControls, 'JobReqTemplate_Pipeline_Job_Requisition': index_1.JobReqTemplate_Pipeline_Job_Requisition, 'Photo': index_1.Photo, 'JobCodeMappingEntity': index_1.JobCodeMappingEntity, 'FOLegalEntityLocalUSA': index_1.FoLegalEntityLocalUsa, 'PaymentInformationDetailV3MKD': index_1.PaymentInformationDetailV3Mkd, 'FOLegalEntityLocalESP': index_1.FoLegalEntityLocalEsp, 'OnboardingEquipmentType': index_1.OnboardingEquipmentType_1, 'CalibrationSubjectRank': index_1.CalibrationSubjectRank, 'PositionSkillMappingEntity': index_1.PositionSkillMappingEntity, 'JobRequisitionLocaleFieldControls': index_1.JobRequisitionLocaleFieldControls, 'FamilyCompetencyMappingEntity': index_1.FamilyCompetencyMappingEntity, 'JobApplicationSnapshot_Education': index_1.JobApplicationSnapshot_Education, 'FormObjCompSummarySection': index_1.FormObjCompSummarySection, 'FOPayGrade': index_1.FoPayGrade, 'JobProfileLocalizedData': index_1.JobProfileLocalizedData, 'AbsenceCountingMethod': index_1.AbsenceCountingMethod, 'PaymentInformationDetailV3ARG': index_1.PaymentInformationDetailV3Arg, 'PaymentInformationDetailV3KEN': index_1.PaymentInformationDetailV3Ken, 'Territory': index_1.Territory, 'ExternalLearner': index_1.ExternalLearner, 'CertificationContent': index_1.CertificationContent, 'EMEventAttribute': index_1.EmEventAttribute, 'OnboardingGoalCategory': index_1.OnboardingGoalCategory, 'PaymentInformationDetailV3SVN': index_1.PaymentInformationDetailV3Svn, 'SpotAwardRedemptionProduct': index_1.SpotAwardRedemptionProduct, 'CandidateEmployeeReferral': index_1.CandidateEmployeeReferral, 'NonRecurringPayment': index_1.NonRecurringPayment, 'TrendData_SysOverallPerformance': index_1.TrendData_SysOverallPerformance, 'MDFEnumValue': index_1.MdfEnumValue, 'SuccessStoreContent': index_1.SuccessStoreContent, 'AccrualCalculationBase': index_1.AccrualCalculationBase, 'SpotAwardRedemptionOrder': index_1.SpotAwardRedemptionOrder, 'PaymentInformationDetailV3': index_1.PaymentInformationDetailV3, 'Background_Compensation': index_1.Background_Compensation, 'FOGeozone': index_1.FoGeozone, 'Form360ParticipantCategory': index_1.Form360ParticipantCategory, 'JobReqScreeningQuestionChoice': index_1.JobReqScreeningQuestionChoice, 'SkillProfile': index_1.SkillProfile, 'WfRequestParticipator': index_1.WfRequestParticipator, 'Successor': index_1.Successor, 'TimeAccountSnapshot': index_1.TimeAccountSnapshot, 'Form360Rater': index_1.Form360Rater, 'PerGlobalInfoGBR': index_1.PerGlobalInfoGbr, 'JobDescTemplate': index_1.JobDescTemplate, 'PaymentInformationDetailV3MMR': index_1.PaymentInformationDetailV3Mmr, 'DevGoalPlanTemplate': index_1.DevGoalPlanTemplate, 'AdvancesAccumulation': index_1.AdvancesAccumulation, 'NameElementGO': index_1.NameElementGo, 'GoalPermission_1': index_1.GoalPermission_1, 'FOFrequency': index_1.FoFrequency, 'EducationDegreeContent': index_1.EducationDegreeContent, 'GoalPlanState': index_1.GoalPlanState, 'AvailableTimeType': index_1.AvailableTimeType, 'JobClassificationZAF': index_1.JobClassificationZaf, 'ExternalLearnerAddressInfo': index_1.ExternalLearnerAddressInfo, 'DevGoalCompetency': index_1.DevGoalCompetency, 'AdvancesInstallments': index_1.AdvancesInstallments, 'EmploymentConditionEntity': index_1.EmploymentConditionEntity, 'JobClassificationBRA': index_1.JobClassificationBra, 'PositionMatrixRelationship': index_1.PositionMatrixRelationship, 'FormReviewInfoSection': index_1.FormReviewInfoSection, 'Background_Promotability': index_1.Background_Promotability, 'PerNationalId': index_1.PerNationalId, 'EmployeeTimeSheet': index_1.EmployeeTimeSheet, 'ReplicationTargetSystem': index_1.ReplicationTargetSystem, 'FormObjectiveOtherDetailsItem': index_1.FormObjectiveOtherDetailsItem, 'PersonType': index_1.PersonType, 'cust_RCM_Operator_Lookup': index_1.Cust_Rcm_Operator_Lookup, 'RoleEntity': index_1.RoleEntity, 'FormObjectiveDetails': index_1.FormObjectiveDetails, 'JobDescSection': index_1.JobDescSection, 'FOJobClassLocalGBR': index_1.FoJobClassLocalGbr, 'PayrollConfigurationCategoryLink': index_1.PayrollConfigurationCategoryLink, 'EmpWfRequest': index_1.EmpWfRequest, 'FormRatingScale': index_1.FormRatingScale, 'WfRequest': index_1.WfRequest, 'PerEmail': index_1.PerEmail, 'PositionEntity': index_1.PositionEntity, 'JobApplicationSnapshot_OutsideWorkExperience': index_1.JobApplicationSnapshot_OutsideWorkExperience, 'CandidateBackground_Languages': index_1.CandidateBackground_Languages, 'AutoDelegateDetail': index_1.AutoDelegateDetail, 'CalibrationSession': index_1.CalibrationSession, 'Form360RaterSection': index_1.Form360RaterSection, 'EmployeePayrollRunResultsItems': index_1.EmployeePayrollRunResultsItems, 'Country': index_1.Country, 'EmployeeTimeGroup': index_1.EmployeeTimeGroup, 'PayCalendar': index_1.PayCalendar, 'FormCustomElement': index_1.FormCustomElement, 'JobClassificationCAN': index_1.JobClassificationCan, 'JobApplicationComments': index_1.JobApplicationComments, 'FormObjectiveComment': index_1.FormObjectiveComment, 'FOLegalEntityLocalARG': index_1.FoLegalEntityLocalArg, 'ExtPhoneInfo': index_1.ExtPhoneInfo, 'FOJobClassLocalAUS': index_1.FoJobClassLocalAus, 'PositionRightToReturn': index_1.PositionRightToReturn, 'UserBadges': index_1.UserBadges, 'EmpCompensationCalculated': index_1.EmpCompensationCalculated, 'PositionCompetencyMappingEntity': index_1.PositionCompetencyMappingEntity, 'Background_Community': index_1.Background_Community, 'PerGlobalInfoCHE': index_1.PerGlobalInfoChe, 'PaymentInformationDetailV3FRA': index_1.PaymentInformationDetailV3Fra, 'PaymentInformationDetailV3NAM': index_1.PaymentInformationDetailV3Nam, 'PerGlobalInfoCHN': index_1.PerGlobalInfoChn, 'PaymentInformationDetailV3PER': index_1.PaymentInformationDetailV3Per, 'LegalEntityFRA': index_1.LegalEntityFra, 'FODynamicRole': index_1.FoDynamicRole, 'EmployeeTimeAUS': index_1.EmployeeTimeAus, 'FamilySkillMappingEntity': index_1.FamilySkillMappingEntity, 'PerPersonal': index_1.PerPersonal, 'EmployeeTimeCalendar': index_1.EmployeeTimeCalendar, 'PerGlobalInfoITA': index_1.PerGlobalInfoIta, 'MessageDetail': index_1.MessageDetail, 'PerGlobalInfoSGP': index_1.PerGlobalInfoSgp, 'JobReqQuestion': index_1.JobReqQuestion, 'Form360ParticipantDetail': index_1.Form360ParticipantDetail, 'Background_LeadExperience': index_1.Background_LeadExperience, 'EmpCostDistribution': index_1.EmpCostDistribution, 'SpotAwardEligibilityRule': index_1.SpotAwardEligibilityRule, 'JobApplication': index_1.JobApplication, 'JobApplicationSnapshot_InsideWorkExperience': index_1.JobApplicationSnapshot_InsideWorkExperience, 'TrendData_SysOverallObjective': index_1.TrendData_SysOverallObjective, 'OnboardingMeetingEvent': index_1.OnboardingMeetingEvent, 'OnboardingProcess': index_1.OnboardingProcess, 'DGFieldOperator': index_1.DgFieldOperator, 'PaymentInformationDetailV3ESP': index_1.PaymentInformationDetailV3Esp, 'RelevantIndustryEntity': index_1.RelevantIndustryEntity, 'PaymentInformationDetailV3USA': index_1.PaymentInformationDetailV3Usa, 'Picklist': index_1.Picklist, 'PaymentInformationDetailV3COL': index_1.PaymentInformationDetailV3Col, 'Background_VarPayEmpHistDataInt': index_1.Background_VarPayEmpHistDataInt, 'TrendData_SysOverallCompetency': index_1.TrendData_SysOverallCompetency, 'NomineeHistory': index_1.NomineeHistory, 'ContinuousFeedback': index_1.ContinuousFeedback, 'PayScaleType': index_1.PayScaleType, 'Background_Mobility': index_1.Background_Mobility, 'PerGlobalInfoIND': index_1.PerGlobalInfoInd, 'LegacyPositionEntity': index_1.LegacyPositionEntity, 'Advance': index_1.Advance, 'EMEvent': index_1.EmEvent, 'JobResponsibilityEntity': index_1.JobResponsibilityEntity, 'PerGlobalInfoSAU': index_1.PerGlobalInfoSau, 'DataReplicationProxy': index_1.DataReplicationProxy, 'ExternalLearnerEmailInfo': index_1.ExternalLearnerEmailInfo, 'JobReqGOPosition': index_1.JobReqGoPosition, 'WorkScheduleDayModelAssignmentSegment': index_1.WorkScheduleDayModelAssignmentSegment, 'PerGlobalInfoCAN': index_1.PerGlobalInfoCan, 'Background_Memberships': index_1.Background_Memberships, 'JobApplicationSnapshot_Mobility': index_1.JobApplicationSnapshot_Mobility, 'PaymentInformationDetailV3BLR': index_1.PaymentInformationDetailV3Blr, 'RightToReturn': index_1.RightToReturn, 'JobClassificationCountry': index_1.JobClassificationCountry, 'TalentRatings': index_1.TalentRatings, 'NameFormatGO': index_1.NameFormatGo, 'User': index_1.User, 'FOPayGroup': index_1.FoPayGroup, 'JobClassificationGBR': index_1.JobClassificationGbr, 'FormUserInformationSection': index_1.FormUserInformationSection, 'cust_SubBusinessUnit': index_1.Cust_SubBusinessUnit, 'ExternalTimeRecord': index_1.ExternalTimeRecord, 'TimeManagementAlert': index_1.TimeManagementAlert, 'TimeType': index_1.TimeType, 'CandidateComments': index_1.CandidateComments, 'TodoEntryV3': index_1.TodoEntryV3, 'FormSectionConfiguration': index_1.FormSectionConfiguration, 'TodoEntryV2': index_1.TodoEntryV2, 'ExternalTimeSegment': index_1.ExternalTimeSegment, 'PaymentInformationDetailV3NGA': index_1.PaymentInformationDetailV3Nga, 'RoleCompetencyMappingEntity': index_1.RoleCompetencyMappingEntity, 'FOJobFunction': index_1.FoJobFunction, 'SpotAwardLevel': index_1.SpotAwardLevel, 'TimeManagementAlertMessage': index_1.TimeManagementAlertMessage, 'EmpCompensationGroupSumCalculated': index_1.EmpCompensationGroupSumCalculated, 'PerGlobalInfoNZL': index_1.PerGlobalInfoNzl, 'CandidateLight': index_1.CandidateLight, 'HRISChangeLogDataReplication': index_1.HrisChangeLogDataReplication, 'WorkScheduleDayModelSegment': index_1.WorkScheduleDayModelSegment, 'EMMonitoredProcess': index_1.EmMonitoredProcess, 'FormReviewFeedbackList': index_1.FormReviewFeedbackList, 'PerGlobalInfoDEU': index_1.PerGlobalInfoDeu, 'TimeTypeAUS': index_1.TimeTypeAus, 'NominationTarget': index_1.NominationTarget };
//# sourceMappingURL=BatchRequest.js.map