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
var PositionMatrixRelationshipRequestBuilder_1 = require("./PositionMatrixRelationshipRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PositionMatrixRelationship" of service "SFOData".
 */
var PositionMatrixRelationship = /** @class */ (function (_super) {
    __extends(PositionMatrixRelationship, _super);
    function PositionMatrixRelationship() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PositionMatrixRelationship`.
     * @returns A builder that constructs instances of entity type `PositionMatrixRelationship`.
     */
    PositionMatrixRelationship.builder = function () {
        return core_1.Entity.entityBuilder(PositionMatrixRelationship);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PositionMatrixRelationship` entity type.
     * @returns A `PositionMatrixRelationship` request builder.
     */
    PositionMatrixRelationship.requestBuilder = function () {
        return new PositionMatrixRelationshipRequestBuilder_1.PositionMatrixRelationshipRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PositionMatrixRelationship`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PositionMatrixRelationship`.
     */
    PositionMatrixRelationship.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PositionMatrixRelationship);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PositionMatrixRelationship.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PositionMatrixRelationship.
     */
    PositionMatrixRelationship._entityName = 'PositionMatrixRelationship';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PositionMatrixRelationship.
     */
    PositionMatrixRelationship._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PositionMatrixRelationship._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PositionMatrixRelationship;
}(core_1.Entity));
exports.PositionMatrixRelationship = PositionMatrixRelationship;
var User_1 = require("./User");
var PickListValueV2_1 = require("./PickListValueV2");
var MdfEnumValue_1 = require("./MdfEnumValue");
var Position_1 = require("./Position");
(function (PositionMatrixRelationship) {
    /**
     * Static representation of the [[positionCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionMatrixRelationship.POSITION_CODE = new core_1.StringField('Position_code', PositionMatrixRelationship, 'Edm.String');
    /**
     * Static representation of the [[positionEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionMatrixRelationship.POSITION_EFFECTIVE_START_DATE = new core_1.DateField('Position_effectiveStartDate', PositionMatrixRelationship, 'Edm.DateTime');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionMatrixRelationship.CREATED_BY = new core_1.StringField('createdBy', PositionMatrixRelationship, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionMatrixRelationship.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PositionMatrixRelationship, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionMatrixRelationship.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PositionMatrixRelationship, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionMatrixRelationship.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PositionMatrixRelationship, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[matrixRelationshipType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionMatrixRelationship.MATRIX_RELATIONSHIP_TYPE = new core_1.StringField('matrixRelationshipType', PositionMatrixRelationship, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionMatrixRelationship.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', PositionMatrixRelationship, 'Edm.String');
    /**
     * Static representation of the [[relatedPosition]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionMatrixRelationship.RELATED_POSITION = new core_1.StringField('relatedPosition', PositionMatrixRelationship, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionMatrixRelationship.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', PositionMatrixRelationship, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionMatrixRelationship.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', PositionMatrixRelationship, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[matrixRelationshipTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionMatrixRelationship.MATRIX_RELATIONSHIP_TYPE_NAV = new core_1.Link('matrixRelationshipTypeNav', PositionMatrixRelationship, PickListValueV2_1.PickListValueV2);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionMatrixRelationship.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', PositionMatrixRelationship, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[relatedPositionNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionMatrixRelationship.RELATED_POSITION_NAV = new core_1.Link('relatedPositionNav', PositionMatrixRelationship, Position_1.Position);
    /**
     * All fields of the PositionMatrixRelationship entity.
     */
    PositionMatrixRelationship._allFields = [
        PositionMatrixRelationship.POSITION_CODE,
        PositionMatrixRelationship.POSITION_EFFECTIVE_START_DATE,
        PositionMatrixRelationship.CREATED_BY,
        PositionMatrixRelationship.CREATED_DATE_TIME,
        PositionMatrixRelationship.LAST_MODIFIED_BY,
        PositionMatrixRelationship.LAST_MODIFIED_DATE_TIME,
        PositionMatrixRelationship.MATRIX_RELATIONSHIP_TYPE,
        PositionMatrixRelationship.MDF_SYSTEM_RECORD_STATUS,
        PositionMatrixRelationship.RELATED_POSITION,
        PositionMatrixRelationship.CREATED_BY_NAV,
        PositionMatrixRelationship.LAST_MODIFIED_BY_NAV,
        PositionMatrixRelationship.MATRIX_RELATIONSHIP_TYPE_NAV,
        PositionMatrixRelationship.MDF_SYSTEM_RECORD_STATUS_NAV,
        PositionMatrixRelationship.RELATED_POSITION_NAV
    ];
    /**
     * All fields selector.
     */
    PositionMatrixRelationship.ALL_FIELDS = new core_1.AllFields('*', PositionMatrixRelationship);
    /**
     * All key fields of the PositionMatrixRelationship entity.
     */
    PositionMatrixRelationship._keyFields = [PositionMatrixRelationship.POSITION_CODE, PositionMatrixRelationship.POSITION_EFFECTIVE_START_DATE, PositionMatrixRelationship.MATRIX_RELATIONSHIP_TYPE];
    /**
     * Mapping of all key field names to the respective static field property PositionMatrixRelationship.
     */
    PositionMatrixRelationship._keys = PositionMatrixRelationship._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PositionMatrixRelationship = exports.PositionMatrixRelationship || (exports.PositionMatrixRelationship = {}));
exports.PositionMatrixRelationship = PositionMatrixRelationship;
//# sourceMappingURL=PositionMatrixRelationship.js.map