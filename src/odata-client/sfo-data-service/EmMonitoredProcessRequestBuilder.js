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
var EmMonitoredProcess_1 = require("./EmMonitoredProcess");
/**
 * Request builder class for operations supported on the [[EmMonitoredProcess]] entity.
 */
var EmMonitoredProcessRequestBuilder = /** @class */ (function (_super) {
    __extends(EmMonitoredProcessRequestBuilder, _super);
    function EmMonitoredProcessRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmMonitoredProcess` entity based on its keys.
     * @param processDefinitionId Key property. See [[EmMonitoredProcess.processDefinitionId]].
     * @param processInstanceId Key property. See [[EmMonitoredProcess.processInstanceId]].
     * @param processType Key property. See [[EmMonitoredProcess.processType]].
     * @returns A request builder for creating requests to retrieve one `EmMonitoredProcess` entity based on its keys.
     */
    EmMonitoredProcessRequestBuilder.prototype.getByKey = function (processDefinitionId, processInstanceId, processType) {
        return new core_1.GetByKeyRequestBuilder(EmMonitoredProcess_1.EmMonitoredProcess, {
            processDefinitionId: processDefinitionId,
            processInstanceId: processInstanceId,
            processType: processType
        });
    };
    /**
     * Returns a request builder for querying all `EmMonitoredProcess` entities.
     * @returns A request builder for creating requests to retrieve all `EmMonitoredProcess` entities.
     */
    EmMonitoredProcessRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EmMonitoredProcess_1.EmMonitoredProcess);
    };
    /**
     * Returns a request builder for creating a `EmMonitoredProcess` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EmMonitoredProcess`.
     */
    EmMonitoredProcessRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(EmMonitoredProcess_1.EmMonitoredProcess, entity);
    };
    return EmMonitoredProcessRequestBuilder;
}(core_1.RequestBuilder));
exports.EmMonitoredProcessRequestBuilder = EmMonitoredProcessRequestBuilder;
//# sourceMappingURL=EmMonitoredProcessRequestBuilder.js.map