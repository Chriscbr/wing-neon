// https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NeonProviderConfig {
  /**
  * API access key. Default is read from the environment variable `NEON_API_KEY`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs#api_key NeonProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * Alias name
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs#alias NeonProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs neon}
*/
export class NeonProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "neon";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs neon} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NeonProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NeonProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'neon',
      terraformGeneratorMetadata: {
        providerName: 'neon',
        providerVersion: '0.1.0'
      },
      terraformProviderSource: 'kislerdm/neon'
    });
    this._apiKey = config.apiKey;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this._apiKey;
  }
  public set apiKey(value: string | undefined) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key: cdktf.stringToTerraform(this._apiKey),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }
}
