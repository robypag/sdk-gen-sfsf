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
var Entity_1RequestBuilder_1 = require("./Entity_1RequestBuilder");
var Property_1 = require("./Property");
var Localstring_1 = require("./Localstring");
var Navigation_1 = require("./Navigation");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Entity" of service "SFOData".
 */
var Entity_1 = /** @class */ (function (_super) {
    __extends(Entity_1, _super);
    function Entity_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Entity_1`.
     * @returns A builder that constructs instances of entity type `Entity_1`.
     */
    Entity_1.builder = function () {
        return core_1.Entity.entityBuilder(Entity_1);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Entity_1` entity type.
     * @returns A `Entity_1` request builder.
     */
    Entity_1.requestBuilder = function () {
        return new Entity_1RequestBuilder_1.Entity_1RequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Entity_1`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Entity_1`.
     */
    Entity_1.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Entity_1);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Entity_1.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Entity_1.
     */
    Entity_1._entityName = 'Entity';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Entity_1.
     */
    Entity_1._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Entity_1._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Entity_1;
}(core_1.Entity));
exports.Entity_1 = Entity_1;
(function (Entity_1) {
    /**
     * Static representation of the [[deletable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Entity_1.DELETABLE = new core_1.BooleanField('deletable', Entity_1, 'Edm.Boolean');
    /**
     * Static representation of the [[deletablePath]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Entity_1.DELETABLE_PATH = new core_1.StringField('deletablePath', Entity_1, 'Edm.String');
    /**
     * Static representation of the [[effectiveDated]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Entity_1.EFFECTIVE_DATED = new core_1.BooleanField('effectiveDated', Entity_1, 'Edm.Boolean');
    /**
     * Static representation of the [[insertable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Entity_1.INSERTABLE = new core_1.BooleanField('insertable', Entity_1, 'Edm.Boolean');
    /**
     * Static representation of the [[keyProperties]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Entity_1.KEY_PROPERTIES = new Property_1.PropertyField('keyProperties', Entity_1);
    /**
     * Static representation of the [[label]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Entity_1.LABEL = new Localstring_1.LocalstringField('label', Entity_1);
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Entity_1.NAME = new core_1.StringField('name', Entity_1, 'Edm.String');
    /**
     * Static representation of the [[navigationProperties]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Entity_1.NAVIGATION_PROPERTIES = new Navigation_1.NavigationField('navigationProperties', Entity_1);
    /**
     * Static representation of the [[nonNavigationProperties]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Entity_1.NON_NAVIGATION_PROPERTIES = new Property_1.PropertyField('nonNavigationProperties', Entity_1);
    /**
     * Static representation of the [[path]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Entity_1.PATH = new core_1.StringField('path', Entity_1, 'Edm.String');
    /**
     * Static representation of the [[properties]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Entity_1.PROPERTIES = new Property_1.PropertyField('properties', Entity_1);
    /**
     * Static representation of the [[searchable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Entity_1.SEARCHABLE = new core_1.BooleanField('searchable', Entity_1, 'Edm.Boolean');
    /**
     * Static representation of the [[supportElm]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Entity_1.SUPPORT_ELM = new core_1.BooleanField('supportElm', Entity_1, 'Edm.Boolean');
    /**
     * Static representation of the [[updatable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Entity_1.UPDATABLE = new core_1.BooleanField('updatable', Entity_1, 'Edm.Boolean');
    /**
     * Static representation of the [[updatablePath]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Entity_1.UPDATABLE_PATH = new core_1.StringField('updatablePath', Entity_1, 'Edm.String');
    /**
     * Static representation of the [[upsertable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Entity_1.UPSERTABLE = new core_1.BooleanField('upsertable', Entity_1, 'Edm.Boolean');
    /**
     * All fields of the Entity_1 entity.
     */
    Entity_1._allFields = [
        Entity_1.DELETABLE,
        Entity_1.DELETABLE_PATH,
        Entity_1.EFFECTIVE_DATED,
        Entity_1.INSERTABLE,
        Entity_1.KEY_PROPERTIES,
        Entity_1.LABEL,
        Entity_1.NAME,
        Entity_1.NAVIGATION_PROPERTIES,
        Entity_1.NON_NAVIGATION_PROPERTIES,
        Entity_1.PATH,
        Entity_1.PROPERTIES,
        Entity_1.SEARCHABLE,
        Entity_1.SUPPORT_ELM,
        Entity_1.UPDATABLE,
        Entity_1.UPDATABLE_PATH,
        Entity_1.UPSERTABLE
    ];
    /**
     * All fields selector.
     */
    Entity_1.ALL_FIELDS = new core_1.AllFields('*', Entity_1);
    /**
     * All key fields of the Entity_1 entity.
     */
    Entity_1._keyFields = [Entity_1.PATH];
    /**
     * Mapping of all key field names to the respective static field property Entity_1.
     */
    Entity_1._keys = Entity_1._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Entity_1 = exports.Entity_1 || (exports.Entity_1 = {}));
exports.Entity_1 = Entity_1;
//# sourceMappingURL=Entity_1.js.map