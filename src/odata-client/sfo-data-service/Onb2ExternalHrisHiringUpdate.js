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
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated since v1.6.0. Use [[Onb2ExternalHrisHiringUpdate.build]] instead.
 */
function createOnb2ExternalHrisHiringUpdate(json) {
    return Onb2ExternalHrisHiringUpdate.build(json);
}
exports.createOnb2ExternalHrisHiringUpdate = createOnb2ExternalHrisHiringUpdate;
/**
 * Onb2ExternalHrisHiringUpdateField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var Onb2ExternalHrisHiringUpdateField = /** @class */ (function (_super) {
    __extends(Onb2ExternalHrisHiringUpdateField, _super);
    function Onb2ExternalHrisHiringUpdateField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[Onb2ExternalHrisHiringUpdate.assignmentIdExternal]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.assignmentIdExternal = new core_1.ComplexTypeStringPropertyField('assignmentIdExternal', _this, 'Edm.String');
        /**
         * Representation of the [[Onb2ExternalHrisHiringUpdate.personIdExternal]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.personIdExternal = new core_1.ComplexTypeStringPropertyField('personIdExternal', _this, 'Edm.String');
        /**
         * Representation of the [[Onb2ExternalHrisHiringUpdate.processId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.processId = new core_1.ComplexTypeStringPropertyField('processId', _this, 'Edm.String');
        /**
         * Representation of the [[Onb2ExternalHrisHiringUpdate.sourceOfRecord]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sourceOfRecord = new core_1.ComplexTypeStringPropertyField('sourceOfRecord', _this, 'Edm.String');
        /**
         * Representation of the [[Onb2ExternalHrisHiringUpdate.userName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.userName = new core_1.ComplexTypeStringPropertyField('userName', _this, 'Edm.String');
        /**
         * Representation of the [[Onb2ExternalHrisHiringUpdate.userStatus]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.userStatus = new core_1.ComplexTypeStringPropertyField('userStatus', _this, 'Edm.String');
        return _this;
    }
    return Onb2ExternalHrisHiringUpdateField;
}(core_1.ComplexTypeField));
exports.Onb2ExternalHrisHiringUpdateField = Onb2ExternalHrisHiringUpdateField;
var Onb2ExternalHrisHiringUpdate;
(function (Onb2ExternalHrisHiringUpdate) {
    function build(json) {
        return core_1.createComplexType(json, {
            assignmentIdExternal: function (assignmentIdExternal) { return ({ assignmentIdExternal: core_1.edmToTs(assignmentIdExternal, 'Edm.String') }); },
            personIdExternal: function (personIdExternal) { return ({ personIdExternal: core_1.edmToTs(personIdExternal, 'Edm.String') }); },
            processId: function (processId) { return ({ processId: core_1.edmToTs(processId, 'Edm.String') }); },
            sourceOfRecord: function (sourceOfRecord) { return ({ sourceOfRecord: core_1.edmToTs(sourceOfRecord, 'Edm.String') }); },
            userName: function (userName) { return ({ userName: core_1.edmToTs(userName, 'Edm.String') }); },
            userStatus: function (userStatus) { return ({ userStatus: core_1.edmToTs(userStatus, 'Edm.String') }); }
        });
    }
    Onb2ExternalHrisHiringUpdate.build = build;
})(Onb2ExternalHrisHiringUpdate = exports.Onb2ExternalHrisHiringUpdate || (exports.Onb2ExternalHrisHiringUpdate = {}));
//# sourceMappingURL=Onb2ExternalHrisHiringUpdate.js.map