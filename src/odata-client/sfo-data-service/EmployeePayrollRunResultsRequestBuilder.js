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
var core_1 = require("@sap-cloud-sdk/core");
var EmployeePayrollRunResults_1 = require("./EmployeePayrollRunResults");
/**
 * Request builder class for operations supported on the [[EmployeePayrollRunResults]] entity.
 */
var EmployeePayrollRunResultsRequestBuilder = /** @class */ (function (_super) {
    __extends(EmployeePayrollRunResultsRequestBuilder, _super);
    function EmployeePayrollRunResultsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmployeePayrollRunResults` entity based on its keys.
     * @param externalCode Key property. See [[EmployeePayrollRunResults.externalCode]].
     * @param mdfSystemEffectiveStartDate Key property. See [[EmployeePayrollRunResults.mdfSystemEffectiveStartDate]].
     * @returns A request builder for creating requests to retrieve one `EmployeePayrollRunResults` entity based on its keys.
     */
    EmployeePayrollRunResultsRequestBuilder.prototype.getByKey = function (externalCode, mdfSystemEffectiveStartDate) {
        return new core_1.GetByKeyRequestBuilder(EmployeePayrollRunResults_1.EmployeePayrollRunResults, {
            externalCode: externalCode,
            mdfSystemEffectiveStartDate: mdfSystemEffectiveStartDate
        });
    };
    /**
     * Returns a request builder for querying all `EmployeePayrollRunResults` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeePayrollRunResults` entities.
     */
    EmployeePayrollRunResultsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EmployeePayrollRunResults_1.EmployeePayrollRunResults);
    };
    /**
     * Returns a request builder for creating a `EmployeePayrollRunResults` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EmployeePayrollRunResults`.
     */
    EmployeePayrollRunResultsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(EmployeePayrollRunResults_1.EmployeePayrollRunResults, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `EmployeePayrollRunResults`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EmployeePayrollRunResults`.
     */
    EmployeePayrollRunResultsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(EmployeePayrollRunResults_1.EmployeePayrollRunResults, entity);
    };
    EmployeePayrollRunResultsRequestBuilder.prototype.delete = function (externalCodeOrEntity, mdfSystemEffectiveStartDate) {
        return new core_1.DeleteRequestBuilder(EmployeePayrollRunResults_1.EmployeePayrollRunResults, externalCodeOrEntity instanceof EmployeePayrollRunResults_1.EmployeePayrollRunResults ? externalCodeOrEntity : {
            externalCode: externalCodeOrEntity,
            mdfSystemEffectiveStartDate: mdfSystemEffectiveStartDate
        });
    };
    return EmployeePayrollRunResultsRequestBuilder;
}(core_1.RequestBuilder));
exports.EmployeePayrollRunResultsRequestBuilder = EmployeePayrollRunResultsRequestBuilder;
//# sourceMappingURL=EmployeePayrollRunResultsRequestBuilder.js.map