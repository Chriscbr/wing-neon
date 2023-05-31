"use strict";
// https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/branch
// generated from terraform resource schema
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Branch = exports.BranchEndpointList = exports.BranchEndpointOutputReference = exports.branchEndpointToTerraform = void 0;
const cdktf = __importStar(require("cdktf"));
function branchEndpointToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
exports.branchEndpointToTerraform = branchEndpointToTerraform;
class BranchEndpointOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
        this.isEmptyObject = false;
        // pg_settings - computed: true, optional: false, required: false
        this._pgSettings = new cdktf.StringMap(this, "pg_settings");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // autoscaling_limit_max_cu - computed: true, optional: false, required: false
    get autoscalingLimitMaxCu() {
        return this.getNumberAttribute('autoscaling_limit_max_cu');
    }
    // autoscaling_limit_min_cu - computed: true, optional: false, required: false
    get autoscalingLimitMinCu() {
        return this.getNumberAttribute('autoscaling_limit_min_cu');
    }
    // branch_id - computed: true, optional: false, required: false
    get branchId() {
        return this.getStringAttribute('branch_id');
    }
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // current_state - computed: true, optional: false, required: false
    get currentState() {
        return this.getStringAttribute('current_state');
    }
    // disabled - computed: true, optional: false, required: false
    get disabled() {
        return this.getBooleanAttribute('disabled');
    }
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    // passwordless_access - computed: true, optional: false, required: false
    get passwordlessAccess() {
        return this.getBooleanAttribute('passwordless_access');
    }
    // pending_state - computed: true, optional: false, required: false
    get pendingState() {
        return this.getStringAttribute('pending_state');
    }
    get pgSettings() {
        return this._pgSettings;
    }
    // pooler_enabled - computed: true, optional: false, required: false
    get poolerEnabled() {
        return this.getBooleanAttribute('pooler_enabled');
    }
    // pooler_mode - computed: true, optional: false, required: false
    get poolerMode() {
        return this.getStringAttribute('pooler_mode');
    }
    // project_id - computed: true, optional: false, required: false
    get projectId() {
        return this.getStringAttribute('project_id');
    }
    // proxy_host - computed: true, optional: false, required: false
    get proxyHost() {
        return this.getStringAttribute('proxy_host');
    }
    // region_id - computed: true, optional: false, required: false
    get regionId() {
        return this.getStringAttribute('region_id');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
    // updated_at - computed: true, optional: false, required: false
    get updatedAt() {
        return this.getStringAttribute('updated_at');
    }
}
exports.BranchEndpointOutputReference = BranchEndpointOutputReference;
class BranchEndpointList extends cdktf.ComplexList {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new BranchEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.BranchEndpointList = BranchEndpointList;
/**
* Represents a {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/branch neon_branch}
*/
class Branch extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/branch neon_branch} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BranchConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'neon_branch',
            terraformGeneratorMetadata: {
                providerName: 'neon',
                providerVersion: '0.1.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        // endpoint - computed: true, optional: false, required: false
        this._endpoint = new BranchEndpointList(this, "endpoint", false);
        this._id = config.id;
        this._name = config.name;
        this._parentId = config.parentId;
        this._parentLsn = config.parentLsn;
        this._parentTimestamp = config.parentTimestamp;
        this._projectId = config.projectId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // current_state - computed: true, optional: false, required: false
    get currentState() {
        return this.getStringAttribute('current_state');
    }
    get endpoint() {
        return this._endpoint;
    }
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
    // logical_size - computed: true, optional: false, required: false
    get logicalSize() {
        return this.getNumberAttribute('logical_size');
    }
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    get parentId() {
        return this.getStringAttribute('parent_id');
    }
    set parentId(value) {
        this._parentId = value;
    }
    resetParentId() {
        this._parentId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get parentIdInput() {
        return this._parentId;
    }
    get parentLsn() {
        return this.getStringAttribute('parent_lsn');
    }
    set parentLsn(value) {
        this._parentLsn = value;
    }
    resetParentLsn() {
        this._parentLsn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get parentLsnInput() {
        return this._parentLsn;
    }
    get parentTimestamp() {
        return this.getNumberAttribute('parent_timestamp');
    }
    set parentTimestamp(value) {
        this._parentTimestamp = value;
    }
    resetParentTimestamp() {
        this._parentTimestamp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get parentTimestampInput() {
        return this._parentTimestamp;
    }
    // pending_state - computed: true, optional: false, required: false
    get pendingState() {
        return this.getStringAttribute('pending_state');
    }
    // physical_size_size - computed: true, optional: false, required: false
    get physicalSizeSize() {
        return this.getNumberAttribute('physical_size_size');
    }
    get projectId() {
        return this.getStringAttribute('project_id');
    }
    set projectId(value) {
        this._projectId = value;
    }
    // Temporarily expose input value. Use with caution.
    get projectIdInput() {
        return this._projectId;
    }
    // updated_at - computed: true, optional: false, required: false
    get updatedAt() {
        return this.getStringAttribute('updated_at');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
            name: cdktf.stringToTerraform(this._name),
            parent_id: cdktf.stringToTerraform(this._parentId),
            parent_lsn: cdktf.stringToTerraform(this._parentLsn),
            parent_timestamp: cdktf.numberToTerraform(this._parentTimestamp),
            project_id: cdktf.stringToTerraform(this._projectId),
        };
    }
}
// =================
// STATIC PROPERTIES
// =================
Branch.tfResourceType = "neon_branch";
exports.Branch = Branch;
