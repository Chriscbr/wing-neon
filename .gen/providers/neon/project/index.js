"use strict";
// https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/project
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
exports.Project = void 0;
const cdktf = __importStar(require("cdktf"));
/**
* Represents a {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/project neon_project}
*/
class Project extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/project neon_project} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ProjectConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'neon_project',
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
        this._autoscalingLimitMaxCu = config.autoscalingLimitMaxCu;
        this._autoscalingLimitMinCu = config.autoscalingLimitMinCu;
        this._cpuQuotaSec = config.cpuQuotaSec;
        this._name = config.name;
        this._pgSettings = config.pgSettings;
        this._pgVersion = config.pgVersion;
        this._regionId = config.regionId;
    }
    get autoscalingLimitMaxCu() {
        return this.getNumberAttribute('autoscaling_limit_max_cu');
    }
    set autoscalingLimitMaxCu(value) {
        this._autoscalingLimitMaxCu = value;
    }
    resetAutoscalingLimitMaxCu() {
        this._autoscalingLimitMaxCu = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get autoscalingLimitMaxCuInput() {
        return this._autoscalingLimitMaxCu;
    }
    get autoscalingLimitMinCu() {
        return this.getNumberAttribute('autoscaling_limit_min_cu');
    }
    set autoscalingLimitMinCu(value) {
        this._autoscalingLimitMinCu = value;
    }
    resetAutoscalingLimitMinCu() {
        this._autoscalingLimitMinCu = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get autoscalingLimitMinCuInput() {
        return this._autoscalingLimitMinCu;
    }
    // branch_logical_size_limit - computed: true, optional: false, required: false
    get branchLogicalSizeLimit() {
        return this.getNumberAttribute('branch_logical_size_limit');
    }
    // connection_uri - computed: true, optional: false, required: false
    get connectionUri() {
        return this.getStringAttribute('connection_uri');
    }
    get cpuQuotaSec() {
        return this.getNumberAttribute('cpu_quota_sec');
    }
    set cpuQuotaSec(value) {
        this._cpuQuotaSec = value;
    }
    resetCpuQuotaSec() {
        this._cpuQuotaSec = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cpuQuotaSecInput() {
        return this._cpuQuotaSec;
    }
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // database_host - computed: true, optional: false, required: false
    get databaseHost() {
        return this.getStringAttribute('database_host');
    }
    // database_name - computed: true, optional: false, required: false
    get databaseName() {
        return this.getStringAttribute('database_name');
    }
    // database_password - computed: true, optional: false, required: false
    get databasePassword() {
        return this.getStringAttribute('database_password');
    }
    // database_user - computed: true, optional: false, required: false
    get databaseUser() {
        return this.getStringAttribute('database_user');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
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
    get pgSettings() {
        return this.getStringMapAttribute('pg_settings');
    }
    set pgSettings(value) {
        this._pgSettings = value;
    }
    resetPgSettings() {
        this._pgSettings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pgSettingsInput() {
        return this._pgSettings;
    }
    get pgVersion() {
        return this.getNumberAttribute('pg_version');
    }
    set pgVersion(value) {
        this._pgVersion = value;
    }
    resetPgVersion() {
        this._pgVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pgVersionInput() {
        return this._pgVersion;
    }
    get regionId() {
        return this.getStringAttribute('region_id');
    }
    set regionId(value) {
        this._regionId = value;
    }
    resetRegionId() {
        this._regionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get regionIdInput() {
        return this._regionId;
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
            autoscaling_limit_max_cu: cdktf.numberToTerraform(this._autoscalingLimitMaxCu),
            autoscaling_limit_min_cu: cdktf.numberToTerraform(this._autoscalingLimitMinCu),
            cpu_quota_sec: cdktf.numberToTerraform(this._cpuQuotaSec),
            name: cdktf.stringToTerraform(this._name),
            pg_settings: cdktf.hashMapper(cdktf.stringToTerraform)(this._pgSettings),
            pg_version: cdktf.numberToTerraform(this._pgVersion),
            region_id: cdktf.stringToTerraform(this._regionId),
        };
    }
}
// =================
// STATIC PROPERTIES
// =================
Project.tfResourceType = "neon_project";
exports.Project = Project;
