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
var BadgeTemplatesRequestBuilder_1 = require("./BadgeTemplatesRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "BadgeTemplates" of service "SFOData".
 */
var BadgeTemplates = /** @class */ (function (_super) {
    __extends(BadgeTemplates, _super);
    function BadgeTemplates() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `BadgeTemplates`.
     * @returns A builder that constructs instances of entity type `BadgeTemplates`.
     */
    BadgeTemplates.builder = function () {
        return core_1.Entity.entityBuilder(BadgeTemplates);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BadgeTemplates` entity type.
     * @returns A `BadgeTemplates` request builder.
     */
    BadgeTemplates.requestBuilder = function () {
        return new BadgeTemplatesRequestBuilder_1.BadgeTemplatesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BadgeTemplates`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BadgeTemplates`.
     */
    BadgeTemplates.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, BadgeTemplates);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BadgeTemplates.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BadgeTemplates.
     */
    BadgeTemplates._entityName = 'BadgeTemplates';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for BadgeTemplates.
     */
    BadgeTemplates._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    BadgeTemplates._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return BadgeTemplates;
}(core_1.Entity));
exports.BadgeTemplates = BadgeTemplates;
(function (BadgeTemplates) {
    /**
     * Static representation of the [[badgeId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BadgeTemplates.BADGE_ID = new core_1.NumberField('badgeId', BadgeTemplates, 'Edm.Int32');
    /**
     * Static representation of the [[badgeTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BadgeTemplates.BADGE_TITLE = new core_1.StringField('badgeTitle', BadgeTemplates, 'Edm.String');
    /**
     * Static representation of the [[customBadge]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BadgeTemplates.CUSTOM_BADGE = new core_1.BooleanField('customBadge', BadgeTemplates, 'Edm.Boolean');
    /**
     * Static representation of the [[photo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BadgeTemplates.PHOTO = new core_1.BinaryField('photo', BadgeTemplates, 'Edm.Binary');
    /**
     * All fields of the BadgeTemplates entity.
     */
    BadgeTemplates._allFields = [
        BadgeTemplates.BADGE_ID,
        BadgeTemplates.BADGE_TITLE,
        BadgeTemplates.CUSTOM_BADGE,
        BadgeTemplates.PHOTO
    ];
    /**
     * All fields selector.
     */
    BadgeTemplates.ALL_FIELDS = new core_1.AllFields('*', BadgeTemplates);
    /**
     * All key fields of the BadgeTemplates entity.
     */
    BadgeTemplates._keyFields = [BadgeTemplates.BADGE_ID];
    /**
     * Mapping of all key field names to the respective static field property BadgeTemplates.
     */
    BadgeTemplates._keys = BadgeTemplates._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BadgeTemplates = exports.BadgeTemplates || (exports.BadgeTemplates = {}));
exports.BadgeTemplates = BadgeTemplates;
//# sourceMappingURL=BadgeTemplates.js.map