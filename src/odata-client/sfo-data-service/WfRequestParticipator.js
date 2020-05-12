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
var WfRequestParticipatorRequestBuilder_1 = require("./WfRequestParticipatorRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "WfRequestParticipator" of service "SFOData".
 */
var WfRequestParticipator = /** @class */ (function (_super) {
    __extends(WfRequestParticipator, _super);
    function WfRequestParticipator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `WfRequestParticipator`.
     * @returns A builder that constructs instances of entity type `WfRequestParticipator`.
     */
    WfRequestParticipator.builder = function () {
        return core_1.Entity.entityBuilder(WfRequestParticipator);
    };
    /**
     * Returns a request builder to construct requests for operations on the `WfRequestParticipator` entity type.
     * @returns A `WfRequestParticipator` request builder.
     */
    WfRequestParticipator.requestBuilder = function () {
        return new WfRequestParticipatorRequestBuilder_1.WfRequestParticipatorRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `WfRequestParticipator`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `WfRequestParticipator`.
     */
    WfRequestParticipator.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, WfRequestParticipator);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    WfRequestParticipator.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for WfRequestParticipator.
     */
    WfRequestParticipator._entityName = 'WfRequestParticipator';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for WfRequestParticipator.
     */
    WfRequestParticipator._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    WfRequestParticipator._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return WfRequestParticipator;
}(core_1.Entity));
exports.WfRequestParticipator = WfRequestParticipator;
var DynamicGroup_1 = require("./DynamicGroup");
var FoDynamicRole_1 = require("./FoDynamicRole");
var User_1 = require("./User");
var Position_1 = require("./Position");
(function (WfRequestParticipator) {
    /**
     * Static representation of the [[actorType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestParticipator.ACTOR_TYPE = new core_1.StringField('actorType', WfRequestParticipator, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestParticipator.CREATED_BY = new core_1.StringField('createdBy', WfRequestParticipator, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestParticipator.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', WfRequestParticipator, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestParticipator.CREATED_ON = new core_1.DateField('createdOn', WfRequestParticipator, 'Edm.DateTime');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestParticipator.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', WfRequestParticipator, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestParticipator.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', WfRequestParticipator, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestParticipator.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', WfRequestParticipator, 'Edm.DateTime');
    /**
     * Static representation of the [[ownerId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestParticipator.OWNER_ID = new core_1.StringField('ownerId', WfRequestParticipator, 'Edm.String');
    /**
     * Static representation of the [[participatorType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestParticipator.PARTICIPATOR_TYPE = new core_1.StringField('participatorType', WfRequestParticipator, 'Edm.String');
    /**
     * Static representation of the [[processingOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestParticipator.PROCESSING_ORDER = new core_1.BigNumberField('processingOrder', WfRequestParticipator, 'Edm.Int64');
    /**
     * Static representation of the [[relatedTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestParticipator.RELATED_TO = new core_1.StringField('relatedTo', WfRequestParticipator, 'Edm.String');
    /**
     * Static representation of the [[roleId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestParticipator.ROLE_ID = new core_1.StringField('roleId', WfRequestParticipator, 'Edm.String');
    /**
     * Static representation of the [[wfRequestId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestParticipator.WF_REQUEST_ID = new core_1.BigNumberField('wfRequestId', WfRequestParticipator, 'Edm.Int64');
    /**
     * Static representation of the [[wfRequestParticipatorId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestParticipator.WF_REQUEST_PARTICIPATOR_ID = new core_1.BigNumberField('wfRequestParticipatorId', WfRequestParticipator, 'Edm.Int64');
    /**
     * Static representation of the one-to-one navigation property [[dynamicGroupNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestParticipator.DYNAMIC_GROUP_NAV = new core_1.OneToOneLink('dynamicGroupNav', WfRequestParticipator, DynamicGroup_1.DynamicGroup);
    /**
     * Static representation of the one-to-one navigation property [[dynamicRoleNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestParticipator.DYNAMIC_ROLE_NAV = new core_1.OneToOneLink('dynamicRoleNav', WfRequestParticipator, FoDynamicRole_1.FoDynamicRole);
    /**
     * Static representation of the one-to-one navigation property [[ownerNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestParticipator.OWNER_NAV = new core_1.OneToOneLink('ownerNav', WfRequestParticipator, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[positionNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WfRequestParticipator.POSITION_NAV = new core_1.Link('positionNav', WfRequestParticipator, Position_1.Position);
    /**
     * All fields of the WfRequestParticipator entity.
     */
    WfRequestParticipator._allFields = [
        WfRequestParticipator.ACTOR_TYPE,
        WfRequestParticipator.CREATED_BY,
        WfRequestParticipator.CREATED_DATE_TIME,
        WfRequestParticipator.CREATED_ON,
        WfRequestParticipator.LAST_MODIFIED_BY,
        WfRequestParticipator.LAST_MODIFIED_DATE_TIME,
        WfRequestParticipator.LAST_MODIFIED_ON,
        WfRequestParticipator.OWNER_ID,
        WfRequestParticipator.PARTICIPATOR_TYPE,
        WfRequestParticipator.PROCESSING_ORDER,
        WfRequestParticipator.RELATED_TO,
        WfRequestParticipator.ROLE_ID,
        WfRequestParticipator.WF_REQUEST_ID,
        WfRequestParticipator.WF_REQUEST_PARTICIPATOR_ID,
        WfRequestParticipator.DYNAMIC_GROUP_NAV,
        WfRequestParticipator.DYNAMIC_ROLE_NAV,
        WfRequestParticipator.OWNER_NAV,
        WfRequestParticipator.POSITION_NAV
    ];
    /**
     * All fields selector.
     */
    WfRequestParticipator.ALL_FIELDS = new core_1.AllFields('*', WfRequestParticipator);
    /**
     * All key fields of the WfRequestParticipator entity.
     */
    WfRequestParticipator._keyFields = [WfRequestParticipator.WF_REQUEST_PARTICIPATOR_ID];
    /**
     * Mapping of all key field names to the respective static field property WfRequestParticipator.
     */
    WfRequestParticipator._keys = WfRequestParticipator._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(WfRequestParticipator = exports.WfRequestParticipator || (exports.WfRequestParticipator = {}));
exports.WfRequestParticipator = WfRequestParticipator;
//# sourceMappingURL=WfRequestParticipator.js.map