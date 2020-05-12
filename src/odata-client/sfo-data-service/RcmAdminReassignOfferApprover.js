"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var RcmAdminReassignOfferApproverRequestBuilder_1 = require("./RcmAdminReassignOfferApproverRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "RCMAdminReassignOfferApprover" of service "SFOData".
 */
var RcmAdminReassignOfferApprover = /** @class */ (function (_super) {
    __extends(RcmAdminReassignOfferApprover, _super);
    function RcmAdminReassignOfferApprover() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `RcmAdminReassignOfferApprover`.
     * @returns A builder that constructs instances of entity type `RcmAdminReassignOfferApprover`.
     */
    RcmAdminReassignOfferApprover.builder = function () {
        return core_1.Entity.entityBuilder(RcmAdminReassignOfferApprover);
    };
    /**
     * Returns a request builder to construct requests for operations on the `RcmAdminReassignOfferApprover` entity type.
     * @returns A `RcmAdminReassignOfferApprover` request builder.
     */
    RcmAdminReassignOfferApprover.requestBuilder = function () {
        return new RcmAdminReassignOfferApproverRequestBuilder_1.RcmAdminReassignOfferApproverRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `RcmAdminReassignOfferApprover`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `RcmAdminReassignOfferApprover`.
     */
    RcmAdminReassignOfferApprover.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, RcmAdminReassignOfferApprover);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    RcmAdminReassignOfferApprover.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for RcmAdminReassignOfferApprover.
     */
    RcmAdminReassignOfferApprover._entityName = 'RCMAdminReassignOfferApprover';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for RcmAdminReassignOfferApprover.
     */
    RcmAdminReassignOfferApprover._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    RcmAdminReassignOfferApprover._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return RcmAdminReassignOfferApprover;
}(core_1.Entity));
exports.RcmAdminReassignOfferApprover = RcmAdminReassignOfferApprover;
var User_1 = require("./User");
(function (RcmAdminReassignOfferApprover) {
    /**
     * Static representation of the [[applicationId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RcmAdminReassignOfferApprover.APPLICATION_ID = new core_1.BigNumberField('applicationId', RcmAdminReassignOfferApprover, 'Edm.Int64');
    /**
     * Static representation of the [[candidateName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RcmAdminReassignOfferApprover.CANDIDATE_NAME = new core_1.StringField('candidateName', RcmAdminReassignOfferApprover, 'Edm.String');
    /**
     * Static representation of the [[currUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RcmAdminReassignOfferApprover.CURR_USER_ID = new core_1.StringField('currUserId', RcmAdminReassignOfferApprover, 'Edm.String');
    /**
     * Static representation of the [[jobReqId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RcmAdminReassignOfferApprover.JOB_REQ_ID = new core_1.BigNumberField('jobReqId', RcmAdminReassignOfferApprover, 'Edm.Int64');
    /**
     * Static representation of the [[jobReqTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RcmAdminReassignOfferApprover.JOB_REQ_TITLE = new core_1.StringField('jobReqTitle', RcmAdminReassignOfferApprover, 'Edm.String');
    /**
     * Static representation of the [[offerDetailId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RcmAdminReassignOfferApprover.OFFER_DETAIL_ID = new core_1.BigNumberField('offerDetailId', RcmAdminReassignOfferApprover, 'Edm.Int64');
    /**
     * Static representation of the [[targetUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RcmAdminReassignOfferApprover.TARGET_USER_ID = new core_1.StringField('targetUserId', RcmAdminReassignOfferApprover, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[currUser]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RcmAdminReassignOfferApprover.CURR_USER = new core_1.OneToOneLink('currUser', RcmAdminReassignOfferApprover, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[targetUser]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RcmAdminReassignOfferApprover.TARGET_USER = new core_1.OneToOneLink('targetUser', RcmAdminReassignOfferApprover, User_1.User);
    /**
     * All fields of the RcmAdminReassignOfferApprover entity.
     */
    RcmAdminReassignOfferApprover._allFields = [
        RcmAdminReassignOfferApprover.APPLICATION_ID,
        RcmAdminReassignOfferApprover.CANDIDATE_NAME,
        RcmAdminReassignOfferApprover.CURR_USER_ID,
        RcmAdminReassignOfferApprover.JOB_REQ_ID,
        RcmAdminReassignOfferApprover.JOB_REQ_TITLE,
        RcmAdminReassignOfferApprover.OFFER_DETAIL_ID,
        RcmAdminReassignOfferApprover.TARGET_USER_ID,
        RcmAdminReassignOfferApprover.CURR_USER,
        RcmAdminReassignOfferApprover.TARGET_USER
    ];
    /**
     * All fields selector.
     */
    RcmAdminReassignOfferApprover.ALL_FIELDS = new core_1.AllFields('*', RcmAdminReassignOfferApprover);
    /**
     * All key fields of the RcmAdminReassignOfferApprover entity.
     */
    RcmAdminReassignOfferApprover._keyFields = [RcmAdminReassignOfferApprover.APPLICATION_ID, RcmAdminReassignOfferApprover.CURR_USER_ID, RcmAdminReassignOfferApprover.OFFER_DETAIL_ID];
    /**
     * Mapping of all key field names to the respective static field property RcmAdminReassignOfferApprover.
     */
    RcmAdminReassignOfferApprover._keys = RcmAdminReassignOfferApprover._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(RcmAdminReassignOfferApprover = exports.RcmAdminReassignOfferApprover || (exports.RcmAdminReassignOfferApprover = {}));
exports.RcmAdminReassignOfferApprover = RcmAdminReassignOfferApprover;
//# sourceMappingURL=RcmAdminReassignOfferApprover.js.map