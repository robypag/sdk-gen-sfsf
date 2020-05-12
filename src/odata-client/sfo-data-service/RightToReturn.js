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
var RightToReturnRequestBuilder_1 = require("./RightToReturnRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "RightToReturn" of service "SFOData".
 */
var RightToReturn = /** @class */ (function (_super) {
    __extends(RightToReturn, _super);
    function RightToReturn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `RightToReturn`.
     * @returns A builder that constructs instances of entity type `RightToReturn`.
     */
    RightToReturn.builder = function () {
        return core_1.Entity.entityBuilder(RightToReturn);
    };
    /**
     * Returns a request builder to construct requests for operations on the `RightToReturn` entity type.
     * @returns A `RightToReturn` request builder.
     */
    RightToReturn.requestBuilder = function () {
        return new RightToReturnRequestBuilder_1.RightToReturnRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `RightToReturn`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `RightToReturn`.
     */
    RightToReturn.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, RightToReturn);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    RightToReturn.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for RightToReturn.
     */
    RightToReturn._entityName = 'RightToReturn';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for RightToReturn.
     */
    RightToReturn._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    RightToReturn._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return RightToReturn;
}(core_1.Entity));
exports.RightToReturn = RightToReturn;
var User_1 = require("./User");
var FoEventReason_1 = require("./FoEventReason");
var TimeType_1 = require("./TimeType");
var MdfEnumValue_1 = require("./MdfEnumValue");
(function (RightToReturn) {
    /**
     * Static representation of the [[positionCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RightToReturn.POSITION_CODE = new core_1.StringField('Position_code', RightToReturn, 'Edm.String');
    /**
     * Static representation of the [[positionEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RightToReturn.POSITION_EFFECTIVE_START_DATE = new core_1.DateField('Position_effectiveStartDate', RightToReturn, 'Edm.DateTime');
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RightToReturn.CODE = new core_1.StringField('code', RightToReturn, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RightToReturn.CREATED_BY = new core_1.StringField('createdBy', RightToReturn, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RightToReturn.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', RightToReturn, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[gaEndJobInfoId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RightToReturn.GA_END_JOB_INFO_ID = new core_1.BigNumberField('gaEndJobInfoId', RightToReturn, 'Edm.Int64');
    /**
     * Static representation of the [[gaEventReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RightToReturn.GA_EVENT_REASON = new core_1.StringField('gaEventReason', RightToReturn, 'Edm.String');
    /**
     * Static representation of the [[gaStartJobInfoId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RightToReturn.GA_START_JOB_INFO_ID = new core_1.BigNumberField('gaStartJobInfoId', RightToReturn, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RightToReturn.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', RightToReturn, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RightToReturn.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', RightToReturn, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[loaTimeType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RightToReturn.LOA_TIME_TYPE = new core_1.StringField('loaTimeType', RightToReturn, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RightToReturn.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', RightToReturn, 'Edm.String');
    /**
     * Static representation of the [[reason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RightToReturn.REASON = new core_1.StringField('reason', RightToReturn, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[codeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RightToReturn.CODE_NAV = new core_1.OneToOneLink('codeNav', RightToReturn, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RightToReturn.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', RightToReturn, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[gaEventReasonNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RightToReturn.GA_EVENT_REASON_NAV = new core_1.Link('gaEventReasonNav', RightToReturn, FoEventReason_1.FoEventReason);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RightToReturn.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', RightToReturn, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[loaTimeTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RightToReturn.LOA_TIME_TYPE_NAV = new core_1.OneToOneLink('loaTimeTypeNav', RightToReturn, TimeType_1.TimeType);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RightToReturn.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', RightToReturn, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[reasonNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RightToReturn.REASON_NAV = new core_1.OneToOneLink('reasonNav', RightToReturn, MdfEnumValue_1.MdfEnumValue);
    /**
     * All fields of the RightToReturn entity.
     */
    RightToReturn._allFields = [
        RightToReturn.POSITION_CODE,
        RightToReturn.POSITION_EFFECTIVE_START_DATE,
        RightToReturn.CODE,
        RightToReturn.CREATED_BY,
        RightToReturn.CREATED_DATE_TIME,
        RightToReturn.GA_END_JOB_INFO_ID,
        RightToReturn.GA_EVENT_REASON,
        RightToReturn.GA_START_JOB_INFO_ID,
        RightToReturn.LAST_MODIFIED_BY,
        RightToReturn.LAST_MODIFIED_DATE_TIME,
        RightToReturn.LOA_TIME_TYPE,
        RightToReturn.MDF_SYSTEM_RECORD_STATUS,
        RightToReturn.REASON,
        RightToReturn.CODE_NAV,
        RightToReturn.CREATED_BY_NAV,
        RightToReturn.GA_EVENT_REASON_NAV,
        RightToReturn.LAST_MODIFIED_BY_NAV,
        RightToReturn.LOA_TIME_TYPE_NAV,
        RightToReturn.MDF_SYSTEM_RECORD_STATUS_NAV,
        RightToReturn.REASON_NAV
    ];
    /**
     * All fields selector.
     */
    RightToReturn.ALL_FIELDS = new core_1.AllFields('*', RightToReturn);
    /**
     * All key fields of the RightToReturn entity.
     */
    RightToReturn._keyFields = [RightToReturn.POSITION_CODE, RightToReturn.POSITION_EFFECTIVE_START_DATE, RightToReturn.CODE];
    /**
     * Mapping of all key field names to the respective static field property RightToReturn.
     */
    RightToReturn._keys = RightToReturn._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(RightToReturn = exports.RightToReturn || (exports.RightToReturn = {}));
exports.RightToReturn = RightToReturn;
//# sourceMappingURL=RightToReturn.js.map