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
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var SefEventEntityKey_1 = require("./SefEventEntityKey");
var SefEventEntityParam_1 = require("./SefEventEntityParam");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated since v1.6.0. Use [[SefExtEventMetaData.build]] instead.
 */
function createSefExtEventMetaData(json) {
    return SefExtEventMetaData.build(json);
}
exports.createSefExtEventMetaData = createSefExtEventMetaData;
/**
 * SefExtEventMetaDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var SefExtEventMetaDataField = /** @class */ (function (_super) {
    __extends(SefExtEventMetaDataField, _super);
    function SefExtEventMetaDataField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[SefExtEventMetaData.description]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.description = new core_1.ComplexTypeStringPropertyField('description', _this, 'Edm.String');
        /**
         * Representation of the [[SefExtEventMetaData.effectiveDated]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.effectiveDated = new core_1.ComplexTypeBooleanPropertyField('effectiveDated', _this, 'Edm.Boolean');
        /**
         * Representation of the [[SefExtEventMetaData.entity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.entity = new core_1.ComplexTypeStringPropertyField('entity', _this, 'Edm.String');
        /**
         * Representation of the [[SefExtEventMetaData.entityKeys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.entityKeys = new SefEventEntityKey_1.SefEventEntityKeyField('entityKeys', _this);
        /**
         * Representation of the [[SefExtEventMetaData.name]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.name = new core_1.ComplexTypeStringPropertyField('name', _this, 'Edm.String');
        /**
         * Representation of the [[SefExtEventMetaData.params]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.params = new SefEventEntityParam_1.SefEventEntityParamField('params', _this);
        /**
         * Representation of the [[SefExtEventMetaData.publisher]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.publisher = new core_1.ComplexTypeStringPropertyField('publisher', _this, 'Edm.String');
        /**
         * Representation of the [[SefExtEventMetaData.topic]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.topic = new core_1.ComplexTypeStringPropertyField('topic', _this, 'Edm.String');
        /**
         * Representation of the [[SefExtEventMetaData.type]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.type = new core_1.ComplexTypeStringPropertyField('type', _this, 'Edm.String');
        return _this;
    }
    return SefExtEventMetaDataField;
}(core_1.ComplexTypeField));
exports.SefExtEventMetaDataField = SefExtEventMetaDataField;
var SefExtEventMetaData;
(function (SefExtEventMetaData) {
    function build(json) {
        return core_1.createComplexType(json, {
            description: function (description) { return ({ description: core_1.edmToTs(description, 'Edm.String') }); },
            effectiveDated: function (effectiveDated) { return ({ effectiveDated: core_1.edmToTs(effectiveDated, 'Edm.Boolean') }); },
            entity: function (entity) { return ({ entity: core_1.edmToTs(entity, 'Edm.String') }); },
            entityKeys: function (entityKeys) { return ({ entityKeys: SefEventEntityKey_1.SefEventEntityKey.build(entityKeys) }); },
            name: function (name) { return ({ name: core_1.edmToTs(name, 'Edm.String') }); },
            params: function (params) { return ({ params: SefEventEntityParam_1.SefEventEntityParam.build(params) }); },
            publisher: function (publisher) { return ({ publisher: core_1.edmToTs(publisher, 'Edm.String') }); },
            topic: function (topic) { return ({ topic: core_1.edmToTs(topic, 'Edm.String') }); },
            type: function (type) { return ({ type: core_1.edmToTs(type, 'Edm.String') }); }
        });
    }
    SefExtEventMetaData.build = build;
})(SefExtEventMetaData = exports.SefExtEventMetaData || (exports.SefExtEventMetaData = {}));
//# sourceMappingURL=SefExtEventMetaData.js.map