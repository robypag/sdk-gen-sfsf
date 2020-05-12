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
var Picklist_1 = require("./Picklist");
/**
 * Request builder class for operations supported on the [[Picklist]] entity.
 */
var PicklistRequestBuilder = /** @class */ (function (_super) {
    __extends(PicklistRequestBuilder, _super);
    function PicklistRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Picklist` entity based on its keys.
     * @param picklistId Key property. See [[Picklist.picklistId]].
     * @returns A request builder for creating requests to retrieve one `Picklist` entity based on its keys.
     */
    PicklistRequestBuilder.prototype.getByKey = function (picklistId) {
        return new core_1.GetByKeyRequestBuilder(Picklist_1.Picklist, { picklistId: picklistId });
    };
    /**
     * Returns a request builder for querying all `Picklist` entities.
     * @returns A request builder for creating requests to retrieve all `Picklist` entities.
     */
    PicklistRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Picklist_1.Picklist);
    };
    return PicklistRequestBuilder;
}(core_1.RequestBuilder));
exports.PicklistRequestBuilder = PicklistRequestBuilder;
//# sourceMappingURL=PicklistRequestBuilder.js.map