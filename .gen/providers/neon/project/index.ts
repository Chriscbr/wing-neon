// https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/project#autoscaling_limit_max_cu Project#autoscaling_limit_max_cu}
  */
  readonly autoscalingLimitMaxCu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/project#autoscaling_limit_min_cu Project#autoscaling_limit_min_cu}
  */
  readonly autoscalingLimitMinCu?: number;
  /**
  * Total amount of CPU seconds that is allowed to be spent by the endpoints of that project.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/project#cpu_quota_sec Project#cpu_quota_sec}
  */
  readonly cpuQuotaSec?: number;
  /**
  * Project name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/project#name Project#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/project#pg_settings Project#pg_settings}
  */
  readonly pgSettings?: { [key: string]: string };
  /**
  * Postgres version
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/project#pg_version Project#pg_version}
  */
  readonly pgVersion?: number;
  /**
  * AWS Region.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/project#region_id Project#region_id}
  */
  readonly regionId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/project neon_project}
*/
export class Project extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "neon_project";

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
  public constructor(scope: Construct, id: string, config: ProjectConfig = {}) {
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

  // ==========
  // ATTRIBUTES
  // ==========

  // autoscaling_limit_max_cu - computed: true, optional: true, required: false
  private _autoscalingLimitMaxCu?: number; 
  public get autoscalingLimitMaxCu() {
    return this.getNumberAttribute('autoscaling_limit_max_cu');
  }
  public set autoscalingLimitMaxCu(value: number) {
    this._autoscalingLimitMaxCu = value;
  }
  public resetAutoscalingLimitMaxCu() {
    this._autoscalingLimitMaxCu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingLimitMaxCuInput() {
    return this._autoscalingLimitMaxCu;
  }

  // autoscaling_limit_min_cu - computed: true, optional: true, required: false
  private _autoscalingLimitMinCu?: number; 
  public get autoscalingLimitMinCu() {
    return this.getNumberAttribute('autoscaling_limit_min_cu');
  }
  public set autoscalingLimitMinCu(value: number) {
    this._autoscalingLimitMinCu = value;
  }
  public resetAutoscalingLimitMinCu() {
    this._autoscalingLimitMinCu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingLimitMinCuInput() {
    return this._autoscalingLimitMinCu;
  }

  // branch_logical_size_limit - computed: true, optional: false, required: false
  public get branchLogicalSizeLimit() {
    return this.getNumberAttribute('branch_logical_size_limit');
  }

  // connection_uri - computed: true, optional: false, required: false
  public get connectionUri() {
    return this.getStringAttribute('connection_uri');
  }

  // cpu_quota_sec - computed: true, optional: true, required: false
  private _cpuQuotaSec?: number; 
  public get cpuQuotaSec() {
    return this.getNumberAttribute('cpu_quota_sec');
  }
  public set cpuQuotaSec(value: number) {
    this._cpuQuotaSec = value;
  }
  public resetCpuQuotaSec() {
    this._cpuQuotaSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuQuotaSecInput() {
    return this._cpuQuotaSec;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // database_host - computed: true, optional: false, required: false
  public get databaseHost() {
    return this.getStringAttribute('database_host');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // database_password - computed: true, optional: false, required: false
  public get databasePassword() {
    return this.getStringAttribute('database_password');
  }

  // database_user - computed: true, optional: false, required: false
  public get databaseUser() {
    return this.getStringAttribute('database_user');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // pg_settings - computed: true, optional: true, required: false
  private _pgSettings?: { [key: string]: string }; 
  public get pgSettings() {
    return this.getStringMapAttribute('pg_settings');
  }
  public set pgSettings(value: { [key: string]: string }) {
    this._pgSettings = value;
  }
  public resetPgSettings() {
    this._pgSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgSettingsInput() {
    return this._pgSettings;
  }

  // pg_version - computed: true, optional: true, required: false
  private _pgVersion?: number; 
  public get pgVersion() {
    return this.getNumberAttribute('pg_version');
  }
  public set pgVersion(value: number) {
    this._pgVersion = value;
  }
  public resetPgVersion() {
    this._pgVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgVersionInput() {
    return this._pgVersion;
  }

  // region_id - computed: true, optional: true, required: false
  private _regionId?: string; 
  public get regionId() {
    return this.getStringAttribute('region_id');
  }
  public set regionId(value: string) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
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
