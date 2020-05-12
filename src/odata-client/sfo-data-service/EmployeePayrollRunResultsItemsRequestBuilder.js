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
var EmployeePayrollRunResultsItems_1 = require("./EmployeePayrollRunResultsItems");
/**
 * Request builder class for operations supported on the [[EmployeePayrollRunResultsItems]] entity.
 */
var EmployeePayrollRunResultsItemsRequestBuilder = /** @class */ (function (_super) {
    __extends(EmployeePayrollRunResultsItemsRequestBuilder, _super);
    function EmployeePayrollRunResultsItemsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmployeePayrollRunResultsItems` entity based on its keys.
     * @param employeePayrollRunResultsExternalCode Key property. See [[EmployeePayrollRunResultsItems.employeePayrollRunResultsExternalCode]].
     * @param employeePayrollRunResultsMdfSystemEffectiveStartDate Key property. See [[EmployeePayrollRunResultsItems.employeePayrollRunResultsMdfSystemEffectiveStartDate]].
     * @param externalCode Key property. See [[EmployeePayrollRunResultsItems.externalCode]].
     * @returns A request builder for creating requests to retrieve one `EmployeePayrollRunResultsItems` entity based on its keys.
     */
    EmployeePayrollRunResultsItemsRequestBuilder.prototype.getByKey = function (employeePayrollRunResultsExternalCode, employeePayrollRunResultsMdfSystemEffectiveStartDate, externalCode) {
        return new core_1.GetByKeyRequestBuilder(EmployeePayrollRunResultsItems_1.EmployeePayrollRunResultsItems, {
            EmployeePayrollRunResults_externalCode: employeePayrollRunResultsExternalCode,
            EmployeePayrollRunResults_mdfSystemEffectiveStartDate: employeePayrollRunResultsMdfSystemEffectiveStartDate,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `EmployeePayrollRunResultsItems` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeePayrollRunResultsItems` entities.
     */
    EmployeePayrollRunResultsItemsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EmployeePayrollRunResultsItems_1.EmployeePayrollRunResultsItems);
    };
    /**
     * Returns a request builder for creating a `EmployeePayrollRunResultsItems` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EmployeePayrollRunResultsItems`.
     */
    EmployeePayrollRunResultsItemsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(EmployeePayrollRunResultsItems_1.EmployeePayrollRunResultsItems, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `EmployeePayrollRunResultsItems`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EmployeePayrollRunResultsItems`.
     */
    EmployeePayrollRunResultsItemsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(EmployeePayrollRunResultsItems_1.EmployeePayrollRunResultsItems, entity);
    };
    EmployeePayrollRunResultsItemsRequestBuilder.prototype.delete = function (employeePayrollRunResultsExternalCodeOrEntity, employeePayrollRunResultsMdfSystemEffectiveStartDate, externalCode) {
        return new core_1.DeleteRequestBuilder(EmployeePayrollRunResultsItems_1.EmployeePayrollRunResultsItems, employeePayrollRunResultsExternalCodeOrEntity instanceof EmployeePayrollRunResultsItems_1.EmployeePayrollRunResultsItems ? employeePayrollRunResultsExternalCodeOrEntity : {
            EmployeePayrollRunResults_externalCode: employeePayrollRunResultsExternalCodeOrEntity,
            EmployeePayrollRunResults_mdfSystemEffectiveStartDate: employeePayrollRunResultsMdfSystemEffectiveStartDate,
            externalCode: externalCode
        });
    };
    return EmployeePayrollRunResultsItemsRequestBuilder;
}(core_1.RequestBuilder));
exports.EmployeePayrollRunResultsItemsRequestBuilder = EmployeePayrollRunResultsItemsRequestBuilder;
//# sourceMappingURL=EmployeePayrollRunResultsItemsRequestBuilder.js.map