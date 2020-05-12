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
var DgPeoplePool_1 = require("./DgPeoplePool");
/**
 * Request builder class for operations supported on the [[DgPeoplePool]] entity.
 */
var DgPeoplePoolRequestBuilder = /** @class */ (function (_super) {
    __extends(DgPeoplePoolRequestBuilder, _super);
    function DgPeoplePoolRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `DgPeoplePool` entity based on its keys.
     * @param peoplePoolId Key property. See [[DgPeoplePool.peoplePoolId]].
     * @returns A request builder for creating requests to retrieve one `DgPeoplePool` entity based on its keys.
     */
    DgPeoplePoolRequestBuilder.prototype.getByKey = function (peoplePoolId) {
        return new core_1.GetByKeyRequestBuilder(DgPeoplePool_1.DgPeoplePool, { peoplePoolId: peoplePoolId });
    };
    /**
     * Returns a request builder for querying all `DgPeoplePool` entities.
     * @returns A request builder for creating requests to retrieve all `DgPeoplePool` entities.
     */
    DgPeoplePoolRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(DgPeoplePool_1.DgPeoplePool);
    };
    return DgPeoplePoolRequestBuilder;
}(core_1.RequestBuilder));
exports.DgPeoplePoolRequestBuilder = DgPeoplePoolRequestBuilder;
//# sourceMappingURL=DgPeoplePoolRequestBuilder.js.map