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
var WfRequestCommentsRequestBuilder_1 = require("./WfRequestCommentsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "WfRequestComments" of service "SFOData".
 */
var WfRequestComments = /** @class */ (function (_super) {
    __extends(WfRequestComments, _super);
    function WfRequestComments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `WfRequestComments`.
     * @returns A builder that constructs instances of entity type `WfRequestComments`.
     */
    WfRequestComments.builder = function () {
        return core_1.Entity.entityBuilder(WfRequestComments);
    };
    /**
     * Returns a request builder to construct requests for operations on the `WfRequestComments` entity type.
     * @returns A `WfRequestComments` request builder.
     */
    WfRequestComments.requestBuilder = function () {
        return new WfRequestCommentsRequestBuilder_1.WfRequestCommentsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `WfRequestComments`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `WfRequestComments`.
     */
    WfRequestComments.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, WfRequestComments);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    WfRequestComments.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for WfRequestComments.
     */
    WfRequestComments._entityName = 'WfRequestComments';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for WfRequestComments.
     */
    WfRequestComments._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    WfRequestComments._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return WfRequestComments;
}(core_1.Entity));
exports.WfRequestComments = WfRequestComments;
var User_1 = require("./User");
(function (WfRequestComments) {
    /**
     * Static representation of the [[actionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestComments.ACTION_TYPE = new core_1.StringField('actionType', WfRequestComments, 'Edm.String');
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestComments.COMMENTS = new core_1.StringField('comments', WfRequestComments, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestComments.CREATED_BY = new core_1.StringField('createdBy', WfRequestComments, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestComments.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', WfRequestComments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestComments.CREATED_ON = new core_1.DateField('createdOn', WfRequestComments, 'Edm.DateTime');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestComments.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', WfRequestComments, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestComments.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', WfRequestComments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestComments.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', WfRequestComments, 'Edm.DateTime');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestComments.USER_ID = new core_1.StringField('userId', WfRequestComments, 'Edm.String');
    /**
     * Static representation of the [[wfRequestCommentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestComments.WF_REQUEST_COMMENT_ID = new core_1.BigNumberField('wfRequestCommentId', WfRequestComments, 'Edm.Int64');
    /**
     * Static representation of the [[wfRequestId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestComments.WF_REQUEST_ID = new core_1.BigNumberField('wfRequestId', WfRequestComments, 'Edm.Int64');
    /**
     * Static representation of the [[wfRequestStepId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestComments.WF_REQUEST_STEP_ID = new core_1.BigNumberField('wfRequestStepId', WfRequestComments, 'Edm.Int64');
    /**
     * Static representation of the one-to-one navigation property [[userNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestComments.USER_NAV = new core_1.OneToOneLink('userNav', WfRequestComments, User_1.User);
    /**
     * All fields of the WfRequestComments entity.
     */
    WfRequestComments._allFields = [
        WfRequestComments.ACTION_TYPE,
        WfRequestComments.COMMENTS,
        WfRequestComments.CREATED_BY,
        WfRequestComments.CREATED_DATE_TIME,
        WfRequestComments.CREATED_ON,
        WfRequestComments.LAST_MODIFIED_BY,
        WfRequestComments.LAST_MODIFIED_DATE_TIME,
        WfRequestComments.LAST_MODIFIED_ON,
        WfRequestComments.USER_ID,
        WfRequestComments.WF_REQUEST_COMMENT_ID,
        WfRequestComments.WF_REQUEST_ID,
        WfRequestComments.WF_REQUEST_STEP_ID,
        WfRequestComments.USER_NAV
    ];
    /**
     * All fields selector.
     */
    WfRequestComments.ALL_FIELDS = new core_1.AllFields('*', WfRequestComments);
    /**
     * All key fields of the WfRequestComments entity.
     */
    WfRequestComments._keyFields = [WfRequestComments.WF_REQUEST_COMMENT_ID];
    /**
     * Mapping of all key field names to the respective static field property WfRequestComments.
     */
    WfRequestComments._keys = WfRequestComments._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(WfRequestComments = exports.WfRequestComments || (exports.WfRequestComments = {}));
exports.WfRequestComments = WfRequestComments;
//# sourceMappingURL=WfRequestComments.js.map